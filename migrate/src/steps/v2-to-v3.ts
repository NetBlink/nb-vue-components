import semver from 'semver';
import { parse as parseSfc } from '@vue/compiler-sfc';
import { ensureNamedImport, insertIntoAppChain } from '../entry.js';
import { FA_ALIASES, FA_PEERS, ICONS_IMPORT, SET_CONFIGS } from '../icons.js';
import { langOf, reportUnparseable } from '../parse.js';
import { editSfc, libraryTags, lineAt, LIBRARY } from '../sfc.js';
import type { FileStore } from '../files.js';
import type { Step } from './types.js';

const STEP = 'v2-to-v3';
const STRING_ICON_RE = /<FontAwesomeIcon\b([^>]*?\bicon\s*=\s*"(?:fab|fas|far)\s+fa-([a-z0-9-]+)"[^>]*?)\s*(\/)?>/g;
const FA = SET_CONFIGS.fa;

interface StringIcon {
    file: string;
    line: number;
    start: number;
    end: number;
    replacement: string;
}

/** `<FontAwesomeIcon icon="fab fa-x">` sites in SFCs that import the library, for icons the FA preset maps. */
async function stringIcons(files: FileStore): Promise<StringIcon[]> {
    const out: StringIcon[] = [];
    for (const file of await files.glob(['**/*.vue'])) {
        const source = await files.read(file);
        if (!source || !source.includes(LIBRARY)) continue;
        const template = parseSfc(source).descriptor.template;
        if (!template) continue;
        const base = template.loc.start.offset;
        for (const m of template.content.matchAll(STRING_ICON_RE)) {
            if (!FA_ALIASES.includes(m[2])) continue;
            const attrs = m[1]
                .replace(/\s*\bicon\s*=\s*"(?:fab|fas|far)\s+fa-[a-z0-9-]+"\s*/, ' ')
                .replace(/\s+$/, '')
                .replace(/^\s+/, ' ');
            // A non-self-closing tag's `</FontAwesomeIcon>` is renamed with it.
            const start = base + m.index!;
            out.push({
                file,
                line: lineAt(source, start),
                start,
                end: start + m[0].length,
                replacement: `<NbIcon name="$${m[2]}"${attrs}${m[3] ? ' />' : '>'}`,
            });
        }
    }
    return out;
}

export const v2ToV3: Step = {
    id: STEP,
    to: '3.0.1',
    async run({ entry, files, report, choose }) {
        const manual = (message: string, at?: { file: string; line: number }) =>
            report.add({ kind: 'manual', step: STEP, file: at?.file, line: at?.line, message });

        const icons = await stringIcons(files);
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

            const byFile = new Map<string, StringIcon[]>();
            for (const i of icons) byFile.set(i.file, [...(byFile.get(i.file) ?? []), i]);
            for (const [file, sites] of byFile) {
                const source = (await files.read(file))!;
                const scriptSetup = parseSfc(source).descriptor.scriptSetup;
                await editSfc(files, file, (ms) => {
                    for (const s of sites) {
                        ms.overwrite(s.start, s.end, s.replacement);
                        if (s.replacement.endsWith(' />')) continue;
                        const close = source.indexOf('</FontAwesomeIcon>', s.end);
                        if (close >= 0) ms.overwrite(close, close + '</FontAwesomeIcon>'.length, '</NbIcon>');
                    }
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
