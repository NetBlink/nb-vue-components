import semver from 'semver';
import { parse as parseSfc } from '@vue/compiler-sfc';
import _traverse from '@babel/traverse';
import type MagicString from 'magic-string';
import { ensureImportAfter, locateAppCss, removeKeyframes, removeNetblinkSources } from '../css.js';
import { ensureSideEffectImport } from '../entry.js';
import { langOf, parseCode, reportUnparseable } from '../parse.js';
import { editSfc, kebab, libraryTags, lineAt, LIBRARY, removeAttr, renameAttr, type LibTag } from '../sfc.js';
import { THEME_KEYFRAMES } from './data/theme-keyframes.js';
import type { Step } from './types.js';

const traverse = ((_traverse as any).default ?? _traverse) as typeof _traverse;

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

/**
 * Renames the library import `Modal` to `NewModal` in a `<script setup>` body, or drops it when NewModal
 * is already imported. `local` is Modal's local name, `next` the name its tags take, `scriptUse` the line
 * of the first script reference to Modal beyond the import (0 when none).
 */
function renameModalImport(content: string, lang: string, startLine: number): { imports: string; local: string; next: string; scriptUse: number } | null {
    const ast = parseCode(content, lang, startLine);
    for (const node of ast.program.body) {
        if (node.type !== 'ImportDeclaration' || node.source.value !== LIBRARY) continue;
        const specs = node.specifiers;
        const imported = (s: any) => (s.type === 'ImportSpecifier' ? (s.imported.name ?? s.imported.value) : null);
        const i = specs.findIndex((s) => imported(s) === 'Modal');
        if (i < 0) continue;
        const spec = specs[i];
        const local = spec.local.name;
        let scriptUse = 0;
        traverse(ast, {
            Program(p) {
                scriptUse = p.scope.getBinding(local)?.referencePaths[0]?.node.loc?.start.line ?? 0;
                p.stop();
            },
        });
        const newModal = ast.program.body
            .flatMap((n) => (n.type === 'ImportDeclaration' && n.source.value === LIBRARY ? n.specifiers : []))
            .find((s) => imported(s) === 'NewModal');
        if (!newModal) {
            // `Modal as M` becomes `NewModal as M`: the tags keep their name.
            const text = content.slice(spec.start!, spec.end!);
            const imports = content.slice(0, spec.start!) + text.replace(/^Modal\b/, 'NewModal') + content.slice(spec.end!);
            return { imports, local, next: local === 'Modal' ? 'NewModal' : local, scriptUse };
        }
        const [start, end] = i < specs.length - 1 ? [spec.start!, specs[i + 1].start!] : [specs[i - 1]?.end ?? spec.start!, spec.end!];
        return { imports: content.slice(0, start) + content.slice(end), local, next: newModal.local.name, scriptUse };
    }
    return null;
}

/** Line of the first template expression (`:is="Modal"`, `{{ Modal }}`) naming `name`, or 0. */
function templateUse(nodes: any[], name: string): number {
    const re = new RegExp(`(?<![\\w$.])${name.replace(/\$/g, '\\$')}(?![\\w$])`);
    for (const node of nodes) {
        if (node.type === 5 && re.test(node.content.content)) return node.loc.start.line;
        for (const p of node.props ?? []) if (p.type === 7 && p.exp && re.test(p.exp.content)) return p.loc.start.line;
        const inner = templateUse(node.children ?? [], name);
        if (inner) return inner;
    }
    return 0;
}

export const v3ToV32: Step = {
    id: STEP,
    to: '3.2.1',
    async run({ installed, entry, files, report, choose }) {
        // Fixed or restyled in 3.2.0: an app already on 3.2.0 has them (and its max-widths work).
        const before320 = semver.lt(installed, '3.2.0');
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
        else {
            try {
                files.write(entry!, ensureSideEffectImport(entrySource, STYLE_CSS, LIBRARY, langOf(entry!)));
            } catch (err) {
                reportUnparseable(report, STEP, entry!, err, `add \`import '${STYLE_CSS}';\``);
            }
        }

        const tags = await libraryTags(files, ['NewModal', 'Modal', 'Section', 'Pagination', 'LinkDropdownButton', 'Table', ...BUTTONS], report, STEP);
        const edits = new Map<string, ((ms: MagicString) => void)[]>();
        const edit = (file: string, fn: (ms: MagicString) => void) => {
            if (!edits.has(file)) edits.set(file, []);
            edits.get(file)!.push(fn);
        };

        const sized: LibTag[] = [];
        for (const t of tags.filter((t) => before320 && t.component === 'NewModal')) {
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
                    const { scriptSetup: setup, template } = parseSfc(source).descriptor;
                    const rename = setup ? renameModalImport(setup.content, setup.lang ?? 'js', setup.loc.start.line) : null;
                    // `:is="Modal"`, `h(Modal)`, `markRaw(Modal)`: renaming the import would break those.
                    const valueUse = rename && (rename.scriptUse || templateUse(template!.ast!.children, rename.local));
                    if (valueUse) {
                        manual(`Modal left as is in this file: \`${rename.local}\` is used as a value on this line (\`:is\`, \`h()\` or another script reference), which renaming its import would break. Switch to NewModal by hand: \`modal-custom-class\` becomes \`class\`, add \`align-top\` unless it was centred.`, { file, line: valueUse });
                        continue;
                    }
                    const skipped = list.filter((t) => {
                        const reason = t.hasSpread
                            ? 'a `v-bind` spread'
                            : t.attr('alignCenter') && t.attr('alignCenter')!.kind !== 'static'
                              ? 'a dynamic `align-center`'
                              : t.attr('modalCustomClass') && t.attr('class')
                                ? 'both `class` and `modal-custom-class`'
                                : !rename
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
                            const { local, next } = rename!;
                            if (next !== local && (t.tag === local || t.tag === kebab(local))) {
                                const name = t.tag === local ? next : kebab(next);
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
                    edit(file, (ms) => ms.overwrite(setup!.loc.start.offset, setup!.loc.end.offset, rename!.imports));
                }
            }
        }

        for (const t of tags.filter(() => before320)) {
            if (RESTYLED[t.component]) visual(RESTYLED[t.component], t);
            else if (t.component === 'Table' && t.attr('sticky')) visual('Table sticky was reworked: check the sticky header.', t);
            else if (BUTTONS.includes(t.component) && t.attr('disabled')) visual(`${t.component} has a new disabled style.`, t);
        }

        for (const [file, fns] of edits) await editSfc(files, file, (ms) => fns.forEach((fn) => fn(ms)));
    },
};
