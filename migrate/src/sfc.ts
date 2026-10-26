import path from 'node:path';
import { parse as parseSfc } from '@vue/compiler-sfc';
import _traverse from '@babel/traverse';
import MagicString from 'magic-string';
import type { FileStore } from './files.js';
import type { Report } from './report.js';
import { langOf, parseCode, reportUnparseable } from './parse.js';

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
    /** Offset right after the tag name. */
    nameEnd: number;
    /** Offset right after the last attribute (or the tag name), where new attributes go. */
    attrsEnd: number;
    selfClosing: boolean;
    /** name, :name, v-bind:name, v-model:name; kebab-case and camelCase both match. */
    attr(name: string): LibAttr | null;
    /** v-bind="obj" */
    hasSpread: boolean;
    node: any;
}

const camel = (s: string) => s.replace(/-(\w)/g, (_, c) => c.toUpperCase());
export const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

export function lineAt(source: string, offset: number): number {
    let line = 1;
    for (let i = 0; i < offset && i < source.length; i++) if (source[i] === '\n') line++;
    return line;
}

/** Local name -> export name for every `import { X as Y } from 'module'`. */
export function importsFrom(ast: any, module: string): Map<string, string> {
    const out = new Map<string, string>();
    for (const node of ast.program.body) {
        if (node.type !== 'ImportDeclaration' || node.source.value !== module) continue;
        for (const s of node.specifiers) {
            if (s.type === 'ImportSpecifier') out.set(s.local.name, s.imported.type === 'Identifier' ? s.imported.name : s.imported.value);
        }
    }
    return out;
}

/** Local names of `import * as X from 'module'`. */
function namespaceImports(ast: any, module: string): string[] {
    return ast.program.body
        .filter((n: any) => n.type === 'ImportDeclaration' && n.source.value === module)
        .flatMap((n: any) => n.specifiers.filter((s: any) => s.type === 'ImportNamespaceSpecifier').map((s: any) => s.local.name));
}

async function vueFiles(files: FileStore): Promise<string[]> {
    return files.glob(['**/*.vue']);
}

/** The SFC and its parsed `<script>` blocks; null (and a manual report item) when a script does not parse. */
export function parseSfcScripts(file: string, source: string, report: Report, step: string) {
    const { descriptor } = parseSfc(source);
    const asts: any[] = [];
    for (const s of [descriptor.script, descriptor.scriptSetup]) {
        if (!s) continue;
        try {
            asts.push(parseCode(s.content, s.lang ?? 'js', s.loc.start.line));
        } catch (err) {
            reportUnparseable(report, step, file, err);
            return null;
        }
    }
    return { descriptor, asts };
}

/** Calls `fn` on every element of a template AST, `v-if` branches included. */
export function walkElements(nodes: any[], fn: (node: any) => void): void {
    for (const node of nodes) {
        if (node.type === ELEMENT) fn(node);
        if (node.children) walkElements(node.children, fn);
        if (node.branches) walkElements(node.branches, fn);
    }
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
        attrsEnd: props.length ? Math.max(...props.map((p) => p.loc.end.offset)) : node.loc.start.offset + 1 + node.tag.length,
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

/**
 * Template tags of `components`, counted only where the SFC imports them from the library.
 * What cannot be followed (a script that does not parse, a pug or `src` template, a namespace
 * import) is reported as a manual item of `step`.
 */
export async function libraryTags(files: FileStore, components: string[], report: Report, step: string): Promise<LibTag[]> {
    const out: LibTag[] = [];
    const manual = (file: string, line: number, message: string) => report.add({ kind: 'manual', step, file, line, message });
    for (const file of await vueFiles(files)) {
        const source = await files.read(file);
        if (!source || !source.includes(LIBRARY)) continue;
        const sfc = parseSfcScripts(file, source, report, step);
        if (!sfc) continue;
        const local = new Map<string, string>();
        const namespaces: string[] = [];
        for (const ast of sfc.asts) {
            for (const [k, v] of importsFrom(ast, LIBRARY)) local.set(k, v);
            namespaces.push(...namespaceImports(ast, LIBRARY));
        }
        for (const ns of namespaces) {
            const re = new RegExp(`(?<![\\w$.])${ns.replace(/\$/g, '\\$')}\\.(${components.join('|')})\\b`, 'g');
            const uses = [...source.matchAll(re)];
            if (uses.length === 0) continue;
            const names = [...new Set(uses.map((m) => `\`${m[0]}\``))];
            manual(file, lineAt(source, uses[0].index!), `${names.join(', ')} come${names.length > 1 ? '' : 's'} from a namespace import of ${LIBRARY}, which this CLI does not follow: make this upgrade's changes to ${names.length > 1 ? 'them' : 'it'} by hand.`);
        }
        const byTag = new Map<string, string>();
        for (const [name, exported] of local) {
            if (!components.includes(exported)) continue;
            byTag.set(name, exported);
            byTag.set(kebab(name), exported);
        }
        const template = sfc.descriptor.template;
        if (byTag.size === 0 || !template) continue;
        if (template.src || (template.lang && template.lang !== 'html')) {
            const what = template.src ? `src="${template.src}"` : `lang="${template.lang}"`;
            const names = [...new Set(byTag.values())].join(', ');
            manual(file, template.loc.start.line, `\`<template ${what}>\` is not read by this CLI: make this upgrade's changes to its ${names} tags by hand.`);
            continue;
        }
        if (!template.ast) continue;
        walkElements(template.ast.children, (node) => {
            const component = byTag.get(node.tag);
            if (component) out.push(makeTag(file, node, component));
        });
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
export async function renderFnUses(files: FileStore, components: string[], report: Report, step: string): Promise<{ file: string; line: number; component: string }[]> {
    const out: { file: string; line: number; component: string }[] = [];
    for (const file of await files.glob(['**/*.{vue,js,ts,jsx,tsx,mjs}'])) {
        const source = await files.read(file);
        if (!source || !source.includes(LIBRARY)) continue;
        let asts: any[];
        if (path.extname(file) === '.vue') {
            asts = parseSfcScripts(file, source, report, step)?.asts ?? [];
        } else {
            try {
                asts = [parseCode(source, langOf(file))];
            } catch (err) {
                reportUnparseable(report, step, file, err);
                continue;
            }
        }
        for (const ast of asts) {
            const local = importsFrom(ast, LIBRARY);
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
