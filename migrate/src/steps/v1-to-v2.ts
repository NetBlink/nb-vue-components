import type MagicString from 'magic-string';
import { editSfc, libraryTags, removeAttr, renameAttr, renderFnUses, type LibTag } from '../sfc.js';
import type { Step } from './types.js';

const ALIGN: Record<string, string> = { left: 'start', right: 'end', start: 'start', center: 'center', end: 'end' };
const REKA_UI = ['Dropdown', 'LinkDropdownButton', 'CollapsibleSection', 'NavCollapse'];
const TW_ELEMENTS = ['TrCollapse', 'TrCollapseHandler', 'TdCollapseHandler', 'SelectMultiple'];

export const v1ToV2: Step = {
    id: 'v1-to-v2',
    to: '2.0.1',
    requiresTailwind: 4,
    async run({ files, report, choose }) {
        const add = (kind: 'manual' | 'visual', at: { file: string; line: number }, message: string) =>
            report.add({ kind, step: 'v1-to-v2', file: at.file, line: at.line, message });

        const renderHints: Record<string, string> = {
            Dropdown: 'map `align` left/right to start/end; `width` and `contentClasses` were removed',
            NavCollapse: 'rename `show` to `open`',
            DropdownLink: '`href` is required and it must sit inside a Dropdown',
        };
        for (const use of await renderFnUses(files, Object.keys(renderHints))) {
            add('manual', use, `${use.component} in a render function: ${renderHints[use.component]}.`);
        }

        const tags = await libraryTags(files, [...REKA_UI, 'DropdownLink', ...TW_ELEMENTS]);
        const edits = new Map<string, ((ms: MagicString) => void)[]>();
        const edit = (t: LibTag, fn: (ms: MagicString) => void) => {
            if (!edits.has(t.file)) edits.set(t.file, []);
            edits.get(t.file)!.push(fn);
        };

        const withoutAlign: LibTag[] = [];
        for (const t of tags.filter((t) => t.component === 'Dropdown')) {
            if (t.hasSpread) {
                add('manual', t, 'Dropdown with a `v-bind` spread: map `align` left/right to start/end and drop `width`/`contentClasses` by hand.');
                continue;
            }
            const align = t.attr('align');
            if (!align) withoutAlign.push(t);
            else if (align.kind !== 'static') {
                add('manual', t, `Dropdown \`:align="${align.value}"\` is dynamic: its values must be start, center or end now (left was start, right was end).`);
            } else {
                const mapped = ALIGN[align.value] ?? 'center';
                if (!(align.value in ALIGN)) add('manual', t, `Dropdown \`align="${align.value}"\` is not valid any more, set to center: check it.`);
                if (mapped !== align.value) edit(t, (ms) => ms.overwrite(align.start, align.end, `align="${mapped}"`));
            }
            for (const name of ['width', 'contentClasses']) {
                const a = t.attr(name);
                if (!a) continue;
                edit(t, (ms) => removeAttr(ms, a));
                add('manual', t, `Dropdown \`${name}\` was removed (was \`${a.value}\`): style the dropdown content with a class instead.`);
            }
        }
        if (withoutAlign.length) {
            const decision = await choose({
                id: 'dropdown-align',
                title: 'Dropdown default alignment changed from right to start',
                keep: 'Dropdowns without align stay right-aligned (align="end")',
                adopt: 'Use the new default (align="start")',
                sites: withoutAlign.length,
                default: 'keep',
            });
            if (decision === 'keep') for (const t of withoutAlign) edit(t, (ms) => ms.appendLeft(t.nameEnd, ' align="end"'));
        }

        for (const t of tags.filter((t) => t.component === 'NavCollapse')) {
            if (t.hasSpread) {
                add('manual', t, 'NavCollapse with a `v-bind` spread: rename `show` to `open` in the bound object.');
                continue;
            }
            const show = t.attr('show');
            if (show) edit(t, (ms) => renameAttr(ms, show, 'show', 'open'));
        }

        for (const t of tags.filter((t) => t.component === 'DropdownLink')) {
            if (t.hasSpread || !t.attr('href')) add('manual', t, 'DropdownLink needs an `href` now and must sit inside a Dropdown.');
        }

        for (const t of tags.filter((t) => REKA_UI.includes(t.component))) {
            add('visual', t, `${t.component} moved from tw-elements to reka-ui: check how it opens, closes and is positioned.`);
        }

        const twe = tags.find((t) => TW_ELEMENTS.includes(t.component));
        if (twe) {
            add('manual', twe, `${twe.component} still uses tw-elements: keep \`tw-elements\` installed and initialised (TrCollapse, TrCollapseHandler, TdCollapseHandler and SelectMultiple need it).`);
        }

        for (const [file, fns] of edits) await editSfc(files, file, (ms) => fns.forEach((fn) => fn(ms)));
    },
};
