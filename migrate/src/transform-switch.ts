import _traverse from '@babel/traverse';
import MagicString from 'magic-string';
import { SET_CONFIGS, type SetKey } from './icons.js';
import { parseCode } from './parse.js';

const traverse = ((_traverse as any).default ?? _traverse) as typeof _traverse;

const PRESET_IMPORT_RE = /^@netblink\/vue-components\/icons\/(?:fa|heroicons|material|solar|lucide)$/;

/**
 * Swaps the preset of an existing `createNbIcons(...)` setup in the entry source: every preset
 * import is replaced by the target's, and every `createNbIcons(...)` call by the target's call.
 * Works for both `app.use(createNbIcons(...))` and `createApp(...).use(createNbIcons(...))`.
 *
 * Throws when there is no createNbIcons call: run the upgrade first.
 */
export function transformSwitch(source: string, target: SetKey, lang: string): string {
    const config = SET_CONFIGS[target];
    const ast = parseCode(source, lang);

    const presetImports: { start: number; end: number }[] = [];
    const calls: { start: number; end: number }[] = [];
    let iconsImportEnd = -1;

    traverse(ast, {
        ImportDeclaration(p) {
            const src = p.node.source.value;
            if (PRESET_IMPORT_RE.test(src)) presetImports.push({ start: p.node.start!, end: p.node.end! });
            if (src === '@netblink/vue-components/icons') iconsImportEnd = p.node.end!;
        },
        CallExpression(p) {
            const callee = p.node.callee;
            if (callee.type === 'Identifier' && callee.name === 'createNbIcons') {
                calls.push({ start: p.node.start!, end: p.node.end! });
                p.skip();
            }
        },
    });

    if (calls.length === 0) {
        throw new Error('No `createNbIcons(...)` call found in the entry file. Run `nb-vue-components-migrate` (without arguments) first to set up the icon provider.');
    }

    const ms = new MagicString(source);
    for (const range of presetImports) {
        const end = source[range.end] === '\n' ? range.end + 1 : range.end;
        ms.remove(range.start, end);
    }
    for (const range of calls) ms.overwrite(range.start, range.end, config.call);
    if (iconsImportEnd > 0) ms.appendLeft(iconsImportEnd, `\n${config.importLine}`);
    else ms.prepend(`${config.importLine}\n`);
    return ms.toString();
}
