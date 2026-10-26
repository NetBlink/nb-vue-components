import _traverse from '@babel/traverse';
import MagicString from 'magic-string';
import { SET_CONFIGS, type SetKey } from './icons.js';
import { parseCode } from './parse.js';

const traverse = ((_traverse as any).default ?? _traverse) as typeof _traverse;

const PRESET_IMPORT_RE = /^@netblink\/vue-components\/icons\/(?:fa|heroicons|material|solar|lucide)$/;
/** `faAliasPreset`, `heroiconsAliasPreset`, ...: read from each set's call. */
const ALIAS_PRESETS = Object.values(SET_CONFIGS).map((c) => /aliases: (\w+)/.exec(c.call)![1]);

/**
 * Swaps the preset of an existing `createNbIcons(...)` setup in the entry source: every preset
 * import is replaced by the target's, and every `createNbIcons(...)` call by the target's call.
 * Works for both `app.use(createNbIcons(...))` and `createApp(...).use(createNbIcons(...))`.
 * Aliases the app added beside the preset (`aliases: { ...faAliasPreset, $logo: Logo }`) are kept.
 *
 * Throws when there is no createNbIcons call: run the upgrade first.
 */
export function transformSwitch(source: string, target: SetKey, lang: string): string {
    const config = SET_CONFIGS[target];
    const ast = parseCode(source, lang);

    const presetImports: { start: number; end: number }[] = [];
    const calls: { start: number; end: number; custom: string[] }[] = [];
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
                calls.push({ start: p.node.start!, end: p.node.end!, custom: customAliases(source, p.node.arguments[0]) });
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
    for (const c of calls) {
        const call = c.custom.length ? config.call.replace(/aliases: (\w+)/, (_, preset) => `aliases: { ...${preset}, ${c.custom.join(', ')} }`) : config.call;
        ms.overwrite(c.start, c.end, call);
    }
    if (iconsImportEnd > 0) ms.appendLeft(iconsImportEnd, `\n${config.importLine}`);
    else ms.prepend(`${config.importLine}\n`);
    return ms.toString();
}

/** Source of what `aliases` holds beside a preset: its other properties, or `...expr` for a non-preset value. */
function customAliases(source: string, options: any): string[] {
    const prop = options?.type === 'ObjectExpression'
        ? options.properties.find((p: any) => p.type === 'ObjectProperty' && (p.key.name ?? p.key.value) === 'aliases')
        : null;
    const value = prop?.value;
    if (!value) return [];
    const text = (n: any) => source.slice(n.start, n.end);
    if (value.type === 'Identifier' && ALIAS_PRESETS.includes(value.name)) return [];
    if (value.type !== 'ObjectExpression') return [`...${text(value)}`];
    return value.properties
        .filter((p: any) => !(p.type === 'SpreadElement' && p.argument.type === 'Identifier' && ALIAS_PRESETS.includes(p.argument.name)))
        .map(text);
}
