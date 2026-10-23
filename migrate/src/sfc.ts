import path from 'node:path';
import { parse as parseSfc } from '@vue/compiler-sfc';
import { parse as parseJs } from '@babel/parser';
import _traverse from '@babel/traverse';
import MagicString from 'magic-string';
import type { FileStore } from './files.js';

const traverse = ((_traverse as any).default ?? _traverse) as typeof _traverse;

export const LIBRARY = '@netblink/vue-components';

const ELEMENT = 1;
const ATTRIBUTE = 6;
const DIRECTIVE = 7;

export interface LibAttr {
    kind: 'static' | 'bound' | 'model';
    value: string;
    start: number;
    end: number;
}

export interface LibTag {
    file: string;
    /** Library export name, resolved through `as` aliases. */
    component: string;
    /** Tag as written in the template. */
    tag: string;
    line: number;
    start: number;
    end: number;
    /** Offset right after the tag name, where new attributes go. */
    nameEnd: number;
    selfClosing: boolean;
    /** name, :name, v-bind:name, v-model:name; kebab-case and camelCase both match. */
    attr(name: string): LibAttr | null;
    /** v-bind="obj" */
    hasSpread: boolean;
    node: any;
}

const camel = (s: string) => s.replace(/-(\w)/g, (_, c) => c.toUpperCase());
const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

export function lineAt(source: string, offset: number): number {
    let line = 1;
    for (let i = 0; i < offset && i < source.length; i++) if (source[i] === '\n') line++;
    return line;
}

function parseScript(content: string, startLine = 1) {
    try {
        return parseJs(content, { sourceType: 'module', startLine, plugins: ['typescript', 'jsx'] });
    } catch {
        return null;
    }
}

/** Local name -> library export name for every `import { X as Y } from '@netblink/vue-components'`. */
function libraryImports(ast: any): Map<string, string> {
    const out = new Map<string, string>();
    for (const node of ast?.program.body ?? []) {
        if (node.type !== 'ImportDeclaration' || node.source.value !== LIBRARY) continue;
        for (const s of node.specifiers) {
            if (s.type === 'ImportSpecifier') out.set(s.local.name, s.imported.type === 'Identifier' ? s.imported.name : s.imported.value);
        }
    }
    return out;
}

async function vueFiles(files: FileStore): Promise<string[]> {
    return files.glob(['**/*.vue']);
}

function sfcScripts(source: string) {
    const { descriptor } = parseSfc(source);
    return { descriptor, scripts: [descriptor.script, descriptor.scriptSetup].filter((s) => s !== null) };
}

function makeTag(file: string, node: any, component: string): LibTag {
    const props: any[] = node.props;
    return {
        file,
        component,
        tag: node.tag,
        line: node.loc.start.line,
        start: node.loc.start.offset,
        end: node.loc.end.offset,
        nameEnd: node.loc.start.offset + 1 + node.tag.length,
        selfClosing: !!node.isSelfClosing,
        hasSpread: props.some((p) => p.type === DIRECTIVE && p.name === 'bind' && !p.arg),
        node,
        attr(name: string) {
            const names = [camel(name), kebab(name)];
            for (const p of props) {
                if (p.type === ATTRIBUTE && names.includes(p.name)) {
                    return { kind: 'static', value: p.value?.content ?? '', start: p.loc.start.offset, end: p.loc.end.offset };
                }
                if (p.type === DIRECTIVE && (p.name === 'bind' || p.name === 'model') && p.arg?.isStatic && names.includes(p.arg.content)) {
                    return {
                        kind: p.name === 'bind' ? 'bound' : 'model',
                        value: p.exp?.content ?? '',
                        start: p.loc.start.offset,
                        end: p.loc.end.offset,
                    };
                }
            }
            return null;
        },
    };
}

/** Template tags of `components`, counted only where the SFC imports them from the library. */
export async function libraryTags(files: FileStore, components: string[]): Promise<LibTag[]> {
    const out: LibTag[] = [];
    for (const file of await vueFiles(files)) {
        const source = await files.read(file);
        if (!source || !source.includes(LIBRARY)) continue;
        const { descriptor, scripts } = sfcScripts(source);
        if (!descriptor.template?.ast) continue;
        const local = new Map<string, string>();
        for (const s of scripts) for (const [k, v] of libraryImports(parseScript(s.content))) local.set(k, v);
        const byTag = new Map<string, string>();
        for (const [name, exported] of local) {
            if (!components.includes(exported)) continue;
            byTag.set(name, exported);
            byTag.set(kebab(name), exported);
        }
        if (byTag.size === 0) continue;
        const walk = (nodes: any[]) => {
            for (const node of nodes) {
                if (node.type === ELEMENT) {
                    const component = byTag.get(node.tag);
                    if (component) out.push(makeTag(file, node, component));
                }
                if (node.children) walk(node.children);
                if (node.branches) walk(node.branches);
            }
        };
        walk(descriptor.template.ast.children);
    }
    return out.sort((a, b) => (a.file === b.file ? a.start - b.start : a.file < b.file ? -1 : 1));
}

export async function editSfc(files: FileStore, file: string, edit: (ms: MagicString) => void): Promise<void> {
    const source = await files.read(file);
    if (source === null) return;
    const ms = new MagicString(source);
    edit(ms);
    if (ms.hasChanged()) files.write(file, ms.toString());
}

/** Removes an attribute together with the whitespace before it. */
export function removeAttr(ms: MagicString, a: LibAttr): void {
    const source = ms.original;
    let start = a.start;
    while (start > 0 && /\s/.test(source[start - 1])) start--;
    ms.remove(start, a.end);
}

/** Renames an attribute in place, keeping its `:`, `v-bind:` or `v-model:` prefix and its value. */
export function renameAttr(ms: MagicString, a: LibAttr, from: string, to: string): void {
    const text = ms.original.slice(a.start, a.end);
    const m = new RegExp(`^(:|v-bind:|v-model:)?(${camel(from)}|${kebab(from)})(?![\\w-])`).exec(text);
    if (!m) return;
    const nameStart = a.start + (m[1]?.length ?? 0);
    ms.overwrite(nameStart, nameStart + m[2].length, m[2] === kebab(from) ? kebab(to) : camel(to));
}

/** `h(X, ...)` / `createVNode(X, ...)` calls with a library component, in SFC scripts and .js/.ts files. */
export async function renderFnUses(files: FileStore, components: string[]): Promise<{ file: string; line: number; component: string }[]> {
    const out: { file: string; line: number; component: string }[] = [];
    for (const file of await files.glob(['**/*.{vue,js,ts,jsx,tsx,mjs}'])) {
        const source = await files.read(file);
        if (!source || !source.includes(LIBRARY)) continue;
        const blocks =
            path.extname(file) === '.vue'
                ? sfcScripts(source).scripts.map((s) => ({ content: s.content, line: s.loc.start.line }))
                : [{ content: source, line: 1 }];
        for (const block of blocks) {
            const ast = parseScript(block.content, block.line);
            if (!ast) continue;
            const local = libraryImports(ast);
            traverse(ast, {
                CallExpression(p) {
                    const { callee, arguments: args } = p.node;
                    if (callee.type !== 'Identifier' || !['h', 'createVNode'].includes(callee.name)) return;
                    const first = args[0];
                    if (first?.type !== 'Identifier') return;
                    const component = local.get(first.name);
                    if (component && components.includes(component)) {
                        out.push({ file, line: p.node.loc!.start.line, component });
                    }
                },
            });
        }
    }
    return out;
}
