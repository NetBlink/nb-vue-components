import fs from 'node:fs';
import path from 'node:path';
import _traverse from '@babel/traverse';
import MagicString from 'magic-string';
import type { FileStore } from './files.js';
import { parseCode } from './parse.js';

const traverse = ((_traverse as any).default ?? _traverse) as typeof _traverse;

const CANDIDATES = ['resources/js/app.ts', 'resources/js/app.js', 'src/main.ts', 'src/main.js'];

/** Indentation of the line holding `offset`. */
function indentAt(source: string, offset: number): string {
    const lineStart = source.lastIndexOf('\n', offset - 1) + 1;
    return /^[ \t]*/.exec(source.slice(lineStart))![0];
}

/** The file that creates the Vue app, relative to the app root. */
export async function locateEntry(files: FileStore, override?: string): Promise<string | null> {
    if (override) return (await files.read(override)) === null ? null : override;
    for (const c of CANDIDATES) {
        if ((await files.read(c)) !== null) return c;
    }
    for (const file of await files.glob(['**/*.{js,ts}', '!**/*.d.ts'])) {
        const source = await files.read(file);
        if (source && /\b(createInertiaApp|createApp)\(/.test(source)) return file;
    }
    return null;
}

/**
 * Adds `names` to the named import from `from`, creating the import after the last one if needed.
 * A name already bound in the module (imported from anywhere, or declared) is left alone.
 */
export function ensureNamedImport(source: string, from: string, names: string[], lang: string): string {
    const ast = parseCode(source, lang);
    const imports = ast.program.body.filter((n) => n.type === 'ImportDeclaration');
    const existing = imports.find((n) => n.source.value === from && n.importKind !== 'type' && !n.specifiers.some((s) => s.type === 'ImportNamespaceSpecifier'));
    let missing: string[] = [];
    traverse(ast, {
        Program(p) {
            missing = names.filter((n) => !p.scope.hasBinding(n, true));
            p.stop();
        },
    });
    if (missing.length === 0) return source;

    const ms = new MagicString(source);
    const named = existing?.specifiers.filter((s) => s.type === 'ImportSpecifier') ?? [];
    if (existing && named.length) {
        ms.appendLeft(named[named.length - 1].end!, `, ${missing.join(', ')}`);
    } else if (existing && existing.specifiers.length) {
        ms.appendLeft(existing.specifiers[0].end!, `, { ${missing.join(', ')} }`);
    } else {
        const line = `import { ${missing.join(', ')} } from '${from}';`;
        const last = imports[imports.length - 1];
        if (last) ms.appendLeft(last.end!, `\n${line}`);
        else ms.prepend(`${line}\n`);
    }
    return ms.toString();
}

/** Adds `import 'spec';` after the import of `after` (or after the last import). */
export function ensureSideEffectImport(source: string, spec: string, after: string, lang: string): string {
    const imports = parseCode(source, lang).program.body.filter((n) => n.type === 'ImportDeclaration');
    if (imports.some((n) => n.source.value === spec)) return source;
    const anchor = [...imports].reverse().find((n) => n.source.value === after) ?? imports[imports.length - 1];
    const line = `import '${spec}';`;
    const ms = new MagicString(source);
    if (anchor) ms.appendLeft(anchor.end!, `\n${line}`);
    else ms.prepend(`${line}\n`);
    return ms.toString();
}

/** Inserts the statement `code` on its own line after the first `calleeName(...);` statement. */
export function insertAfterCall(source: string, calleeName: string, code: string, lang: string): string | null {
    if (source.includes(code)) return source;
    let at = null as { end: number; start: number } | null;
    traverse(parseCode(source, lang), {
        ExpressionStatement(p) {
            const e = p.node.expression;
            if (!at && e.type === 'CallExpression' && e.callee.type === 'Identifier' && e.callee.name === calleeName) {
                at = { start: p.node.start!, end: p.node.end! };
            }
        },
    });
    if (!at) return null;
    const { start, end } = at;
    const ms = new MagicString(source);
    ms.appendLeft(end, `\n${indentAt(source, start)}${code}`);
    return ms.toString();
}

/**
 * Registers a plugin on the app: `.use(X)` right before `.mount(` in a `createApp(...)` chain,
 * or an `app.use(X);` statement after the last `app.use(...)` (or before `app.mount(...)`).
 */
export function insertIntoAppChain(source: string, useCode: string, lang: string): string | null {
    const ast = parseCode(source, lang);
    const ms = new MagicString(source);
    let done = false;

    const rootsInCreateApp = (node: any): boolean => {
        while (node) {
            if (node.type === 'CallExpression' && node.callee.type === 'Identifier' && node.callee.name === 'createApp') return true;
            node = node.type === 'CallExpression' ? node.callee : node.type === 'MemberExpression' ? node.object : null;
        }
        return false;
    };

    traverse(ast, {
        CallExpression(p) {
            const callee = p.node.callee;
            if (done || callee.type !== 'MemberExpression' || callee.property.type !== 'Identifier' || callee.property.name !== 'mount') return;
            if (!rootsInCreateApp(callee.object)) return;
            const dot = source.indexOf('.', callee.object.end!);
            const onOwnLine = /\n[ \t]*$/.test(source.slice(callee.object.end!, dot));
            ms.appendLeft(callee.object.end!, onOwnLine ? `\n${indentAt(source, dot)}.use(${useCode})` : `.use(${useCode})`);
            done = true;
        },
    });
    if (done) return ms.toString();

    const appVars = new Set<string>();
    traverse(ast, {
        VariableDeclarator(p) {
            if (p.node.id.type === 'Identifier' && p.node.init && rootsInCreateApp(p.node.init)) appVars.add(p.node.id.name);
        },
    });
    let lastUse: any = null;
    let mount: any = null;
    traverse(ast, {
        ExpressionStatement(p) {
            const e = p.node.expression;
            if (e.type !== 'CallExpression' || e.callee.type !== 'MemberExpression') return;
            const { object, property } = e.callee;
            if (object.type !== 'Identifier' || !appVars.has(object.name) || property.type !== 'Identifier') return;
            if (property.name === 'use') lastUse = { node: p.node, app: object.name };
            if (property.name === 'mount' && !mount) mount = { node: p.node, app: object.name };
        },
    });
    if (lastUse) {
        ms.appendLeft(lastUse.node.end, `\n${indentAt(source, lastUse.node.start)}${lastUse.app}.use(${useCode});`);
    } else if (mount) {
        ms.appendRight(mount.node.start, `${mount.app}.use(${useCode});\n${indentAt(source, mount.node.start)}`);
    } else {
        return null;
    }
    return ms.toString();
}
