import semver from 'semver';
import _traverse from '@babel/traverse';
import type MagicString from 'magic-string';
import { ensureNamedImport, insertIntoAppChain } from '../entry.js';
import { FA_PEERS, ICONS_IMPORT, SET_CONFIGS } from '../icons.js';
import { langOf, parseCode, reportUnparseable } from '../parse.js';
import { editSfc, importsFrom, libraryTags, LIBRARY, parseSfcScripts, walkElements } from '../sfc.js';
import type { FileStore } from '../files.js';
import type { Report } from '../report.js';
import type { Step } from './types.js';

const traverse = ((_traverse as any).default ?? _traverse) as typeof _traverse;

const STEP = 'v2-to-v3';
const FA = SET_CONFIGS.fa;
const FA_VUE = '@fortawesome/vue-fontawesome';
// Only the WhatsApp icon has an alias meaning the same thing: FA names like fa-expand map to
// aliases that look different ($expand is a chevron), so those icons stay FontAwesomeIcon.
const WHATSAPP_RE = /^(?:fab|fa-brands)\s+fa-whatsapp$/;

/** `font-awesome-icon` -> `FontAwesomeIcon`, the form Vue resolves both spellings to. */
const pascal = (s: string) => s.replace(/(^|-)(\w)/g, (_, __, c: string) => c.toUpperCase());

interface StringIcon {
    file: string;
    line: number;
    /** False when the tag may not be FontAwesome's component: reported, not rewritten. */
    sure: boolean;
    apply(ms: MagicString): void;
}

/** Names `FontAwesomeIcon` is registered under with `app.component('Name', FontAwesomeIcon)` in the entry. */
function globalFaNames(source: string | null, lang: string): Set<string> {
    const out = new Set<string>();
    if (source === null || !source.includes(FA_VUE)) return out;
    let ast;
    try {
        ast = parseCode(source, lang);
    } catch {
        return out; // reported by the steps that edit the entry
    }
    const fa = importsFrom(ast, FA_VUE);
    traverse(ast, {
        CallExpression(p) {
            const { callee, arguments: [name, component] } = p.node;
            if (callee.type !== 'MemberExpression' || callee.property.type !== 'Identifier' || callee.property.name !== 'component') return;
            if (name?.type === 'StringLiteral' && component?.type === 'Identifier' && fa.get(component.name) === 'FontAwesomeIcon') out.add(pascal(name.value));
        },
    });
    return out;
}

/** `<FontAwesomeIcon icon="fab fa-whatsapp">` sites in SFCs that import the library, where the tag is FontAwesome's. */
async function stringIcons(files: FileStore, entry: string | null, report: Report): Promise<StringIcon[]> {
    const global = globalFaNames(entry ? await files.read(entry) : null, entry ? langOf(entry) : 'js');
    const out: StringIcon[] = [];
    for (const file of await files.glob(['**/*.vue'])) {
        const source = await files.read(file);
        if (!source || !source.includes(LIBRARY) || !/fa-whatsapp/.test(source)) continue;
        const sfc = parseSfcScripts(file, source, report, STEP);
        if (!sfc?.descriptor.template?.ast) continue;
        // Every imported name, so a local component that happens to be called FontAwesomeIcon is left alone.
        const imported = new Map<string, boolean>();
        for (const ast of sfc.asts) {
            for (const node of ast.program.body) {
                if (node.type !== 'ImportDeclaration') continue;
                for (const s of node.specifiers) {
                    const isFa = node.source.value === FA_VUE && s.type === 'ImportSpecifier' && (s.imported.name ?? s.imported.value) === 'FontAwesomeIcon';
                    imported.set(pascal(s.local.name), isFa);
                }
            }
        }
        walkElements(sfc.descriptor.template.ast.children, (node) => {
            const icon = node.props.find((p: any) => p.type === 6 && p.name === 'icon');
            if (!icon?.value || !WHATSAPP_RE.test(icon.value.content.trim())) return;
            const name = pascal(node.tag);
            const local = imported.get(name);
            if (local === false) return;
            if (local === undefined && !global.has(name) && name !== 'FontAwesomeIcon') return;
            const start = node.loc.start.offset;
            const end = node.loc.end.offset;
            const nb = node.tag.includes('-') ? 'nb-icon' : 'NbIcon';
            const close = `</${node.tag}>`;
            out.push({
                file,
                line: node.loc.start.line,
                sure: local === true || global.has(name),
                apply(ms) {
                    ms.overwrite(start + 1, start + 1 + node.tag.length, nb);
                    ms.overwrite(icon.loc.start.offset, icon.loc.end.offset, 'name="$whatsapp"');
                    if (!node.isSelfClosing && source.slice(end - close.length, end) === close) ms.overwrite(end - close.length + 2, end - 1, nb);
                },
            });
        });
    }
    return out;
}

export const v2ToV3: Step = {
    id: STEP,
    to: '3.0.1',
    async run({ entry, files, report, choose }) {
        const manual = (message: string, at?: { file: string; line: number }) =>
            report.add({ kind: 'manual', step: STEP, file: at?.file, line: at?.line, message });

        const icons = await stringIcons(files, entry, report);
        const whatsApp = (await libraryTags(files, ['Input', 'Textarea'], report, STEP)).filter((t) => t.attr('whatsApp'));
        const decision = await choose({
            id: 'icons',
            title: 'Icons now come from an icon preset',
            keep: 'Keep FontAwesome icons (adds the FA preset)',
            adopt: 'Use the built-in SVG icons',
            sites: 1 + icons.length + whatsApp.length,
            default: 'keep',
        });

        if (decision === 'keep') {
            const source = entry ? await files.read(entry) : null;
            const snippet = `\`${ICONS_IMPORT}\`, \`${FA.importLine}\` and \`app.use(${FA.call})\` before mount`;
            if (source === null) {
                manual(`No app entry file found: add ${snippet}.`);
            } else if (!source.includes('createNbIcons')) {
                const lang = langOf(entry!);
                try {
                    const next = insertIntoAppChain(source, FA.call, lang);
                    if (next === null) manual(`Could not find where the app is mounted: add ${snippet}.`, { file: entry!, line: 1 });
                    else {
                        const withIcons = ensureNamedImport(next, '@netblink/vue-components/icons', ['createNbIcons'], lang);
                        files.write(entry!, ensureNamedImport(withIcons, '@netblink/vue-components/icons/fa', ['faAliasPreset', 'faSet'], lang));
                    }
                } catch (err) {
                    reportUnparseable(report, STEP, entry!, err, `add ${snippet}`);
                }
            }

            for (const i of icons.filter((i) => !i.sure)) {
                manual('`FontAwesomeIcon` is neither imported from @fortawesome/vue-fontawesome here nor registered in the entry: if it is FontAwesome\'s, replace it with `<NbIcon name="$whatsapp" />`.', i);
            }
            const byFile = new Map<string, StringIcon[]>();
            for (const i of icons.filter((i) => i.sure)) byFile.set(i.file, [...(byFile.get(i.file) ?? []), i]);
            for (const [file, sites] of byFile) {
                const scriptSetup = parseSfcScripts(file, (await files.read(file))!, report, STEP)!.descriptor.scriptSetup;
                await editSfc(files, file, (ms) => {
                    for (const s of sites) s.apply(ms);
                    if (scriptSetup) {
                        const { start, end } = scriptSetup.loc;
                        const next = ensureNamedImport(scriptSetup.content, LIBRARY, ['NbIcon'], scriptSetup.lang ?? 'js');
                        if (next !== scriptSetup.content) ms.overwrite(start.offset, end.offset, next);
                    }
                });
                if (!scriptSetup) manual('Uses NbIcon now: import and register `NbIcon` from @netblink/vue-components.', sites[0]);
            }

            await files.editJson('package.json', (json) => {
                const has = (name: string) => json.dependencies?.[name] || json.devDependencies?.[name];
                for (const [name, range] of Object.entries(FA_PEERS)) {
                    if (has(name)) continue;
                    json.dependencies ??= {};
                    json.dependencies[name] = range;
                }
            });
        } else {
            for (const t of whatsApp) {
                manual(`${t.component} \`whatsApp\` shows the \`$whatsapp\` icon, which the built-in SVG set does not map: register one with \`createNbIcons({ aliases: { $whatsapp: YourIcon } })\`.`, t);
            }
        }

        await files.editJson('package.json', (json) => {
            for (const field of ['dependencies', 'devDependencies']) {
                const range = json[field]?.vue;
                const min = range && semver.validRange(range) ? semver.minVersion(range) : null;
                if (min && semver.lt(min, '3.5.0')) json[field].vue = '^3.5.0';
            }
        });
    },
};
