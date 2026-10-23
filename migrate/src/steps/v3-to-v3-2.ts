import { parse as parseSfc } from '@vue/compiler-sfc';
import { parse as parseJs } from '@babel/parser';
import type MagicString from 'magic-string';
import { ensureImportAfter, locateAppCss, removeKeyframes, removeNetblinkSources } from '../css.js';
import { ensureSideEffectImport } from '../entry.js';
import { editSfc, libraryTags, lineAt, LIBRARY, removeAttr, renameAttr, type LibTag } from '../sfc.js';
import { THEME_KEYFRAMES } from './data/theme-keyframes.js';
import type { Step } from './types.js';

const STEP = 'v3-to-v3-2';
const THEME_CSS = '@netblink/vue-components/theme.css';
const STYLE_CSS = '@netblink/vue-components/style.css';
const BUTTONS = ['PrimaryButton', 'SecondaryButton', 'DangerButton', 'WarningButton', 'InfoButton', 'SuccessButton', 'SubmitButton', 'LinkButton'];
const PADDING_RE = /(^|\s)p[xytrbl]?-\S+/;

const RESTYLED: Record<string, string> = {
    Section: 'Section padding is now px-6 py-4 (was p-6).',
    Pagination: 'Pagination marks the active page with primary-50 now.',
    LinkDropdownButton: 'LinkDropdownButton uses primary-600 now.',
};

/** Renames the library import `Modal` to `NewModal` in a `<script setup>` body, or drops it when NewModal is already imported. */
function renameModalImport(content: string): string | null {
    const ast = parseJs(content, { sourceType: 'module', plugins: ['typescript', 'jsx'] });
    for (const node of ast.program.body) {
        if (node.type !== 'ImportDeclaration' || node.source.value !== LIBRARY) continue;
        const specs = node.specifiers;
        const imported = (s: any) => (s.type === 'ImportSpecifier' ? (s.imported.name ?? s.imported.value) : null);
        const i = specs.findIndex((s) => imported(s) === 'Modal');
        if (i < 0) continue;
        const spec = specs[i];
        const hasNewModal = ast.program.body.some(
            (n) => n.type === 'ImportDeclaration' && n.source.value === LIBRARY && n.specifiers.some((s) => imported(s) === 'NewModal'),
        );
        if (!hasNewModal) {
            const text = content.slice(spec.start!, spec.end!);
            return content.slice(0, spec.start!) + text.replace(/^Modal\b/, 'NewModal') + content.slice(spec.end!);
        }
        const [start, end] = i < specs.length - 1 ? [spec.start!, specs[i + 1].start!] : [specs[i - 1]?.end ?? spec.start!, spec.end!];
        return content.slice(0, start) + content.slice(end);
    }
    return null;
}

export const v3ToV32: Step = {
    id: STEP,
    to: '3.2.1',
    async run({ entry, files, report, choose }) {
        const manual = (message: string, at?: { file: string; line: number }) =>
            report.add({ kind: 'manual', step: STEP, file: at?.file, line: at?.line, message });
        const visual = (message: string, at: { file: string; line: number }) =>
            report.add({ kind: 'visual', step: STEP, file: at.file, line: at.line, message });

        const cssFile = await locateAppCss(files);
        if (cssFile === null) {
            manual(`No stylesheet importing tailwindcss found: add \`@import '${THEME_CSS}';\` right after \`@import 'tailwindcss';\` and drop any \`@source\` pointing at @netblink.`);
        } else {
            let css = (await files.read(cssFile))!;
            css = removeNetblinkSources(ensureImportAfter(css, THEME_CSS, 'tailwindcss'));
            const { css: trimmed, kept } = removeKeyframes(css, THEME_KEYFRAMES);
            for (const name of kept) {
                manual(`\`@keyframes ${name}\` differs from the one in theme.css and overrides it: rename yours or remove it.`, { file: cssFile, line: lineAt(trimmed, trimmed.search(new RegExp(`@keyframes\\s+${name}\\b`))) });
            }
            files.write(cssFile, trimmed);
        }

        const entrySource = entry ? await files.read(entry) : null;
        if (entrySource === null) manual(`No app entry file found: add \`import '${STYLE_CSS}';\` to it.`);
        else files.write(entry!, ensureSideEffectImport(entrySource, STYLE_CSS, LIBRARY));

        const tags = await libraryTags(files, ['NewModal', 'Modal', 'Section', 'Pagination', 'LinkDropdownButton', 'Table', ...BUTTONS]);
        const edits = new Map<string, ((ms: MagicString) => void)[]>();
        const edit = (file: string, fn: (ms: MagicString) => void) => {
            if (!edits.has(file)) edits.set(file, []);
            edits.get(file)!.push(fn);
        };

        const sized: LibTag[] = [];
        for (const t of tags.filter((t) => t.component === 'NewModal')) {
            if (t.hasSpread) manual('NewModal with a `v-bind` spread: it honours `maxWidth` now (it was fixed at 600px).', t);
            else if (t.attr('maxWidth')) sized.push(t);
        }
        if (sized.length) {
            const decision = await choose({
                id: 'newmodal-maxwidth',
                title: 'NewModal honours max-width now (it was fixed at 600px)',
                keep: 'Keep the 600px width (removes max-width)',
                adopt: 'Use the max-width you set',
                sites: sized.length,
                default: 'keep',
            });
            for (const t of sized) {
                const a = t.attr('maxWidth')!;
                if (decision === 'keep') edit(t.file, (ms) => removeAttr(ms, a));
                else visual(`NewModal uses max-width \`${a.value}\` now (was 600px).`, t);
            }
        }

        const modals = tags.filter((t) => t.component === 'Modal');
        if (modals.length) {
            const decision = await choose({
                id: 'modal-to-newmodal',
                title: 'Modal is deprecated in favour of NewModal',
                keep: 'Keep Modal',
                adopt: 'Rename Modal to NewModal (same props)',
                sites: modals.length,
                default: 'keep',
            });
            if (decision === 'adopt') {
                const byFile = new Map<string, LibTag[]>();
                for (const t of modals) byFile.set(t.file, [...(byFile.get(t.file) ?? []), t]);
                for (const [file, list] of byFile) {
                    const source = (await files.read(file))!;
                    const setup = parseSfc(source).descriptor.scriptSetup;
                    const imports = setup ? renameModalImport(setup.content) : null;
                    const skipped = list.filter((t) => {
                        const reason = t.hasSpread
                            ? 'a `v-bind` spread'
                            : t.attr('alignCenter') && t.attr('alignCenter')!.kind !== 'static'
                              ? 'a dynamic `align-center`'
                              : t.attr('modalCustomClass') && t.attr('class')
                                ? 'both `class` and `modal-custom-class`'
                                : !imports
                                  ? 'no `<script setup>` import to rename'
                                  : null;
                        if (reason) manual(`Modal left as is (${reason}): rename it to NewModal by hand, \`modal-custom-class\` becomes \`class\`, add \`align-top\` unless it was centred.`, t);
                        return !!reason;
                    });
                    if (skipped.length) {
                        for (const t of list.filter((t) => !skipped.includes(t))) {
                            manual('Modal left as is because another Modal in this file needs a manual change: rename them together.', t);
                        }
                        continue;
                    }
                    for (const t of list) {
                        edit(file, (ms) => {
                            if (t.tag === 'Modal' || t.tag === 'modal') {
                                const name = t.tag === 'Modal' ? 'NewModal' : 'new-modal';
                                ms.overwrite(t.start + 1, t.nameEnd, name);
                                const close = `</${t.tag}>`;
                                if (!t.selfClosing && source.slice(t.end - close.length, t.end) === close) {
                                    ms.overwrite(t.end - close.length + 2, t.end - 1, name);
                                }
                            }
                            const custom = t.attr('modalCustomClass');
                            if (custom) renameAttr(ms, custom, 'modalCustomClass', 'class');
                            const center = t.attr('alignCenter');
                            let added = '';
                            if (center) removeAttr(ms, center);
                            else added += ' align-top';
                            const first = t.node.children.find((c: any) => c.type === 1 && c.tag !== 'template');
                            const cls = first?.props.find((p: any) => p.type === 6 && p.name === 'class')?.value?.content;
                            if (cls && PADDING_RE.test(cls) && !t.attr('padded')) added += ' :padded="false"';
                            if (added) ms.appendLeft(t.attrsEnd, added);
                        });
                    }
                    edit(file, (ms) => ms.overwrite(setup!.loc.start.offset, setup!.loc.end.offset, imports!));
                }
            }
        }

        for (const t of tags) {
            if (RESTYLED[t.component]) visual(RESTYLED[t.component], t);
            else if (t.component === 'Table' && t.attr('sticky')) visual('Table sticky was reworked: check the sticky header.', t);
            else if (BUTTONS.includes(t.component) && t.attr('disabled')) visual(`${t.component} has a new disabled style.`, t);
        }

        for (const [file, fns] of edits) await editSfc(files, file, (ms) => fns.forEach((fn) => fn(ms)));
    },
};
