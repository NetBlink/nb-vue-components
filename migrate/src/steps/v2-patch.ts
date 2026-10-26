import semver from 'semver';
import type MagicString from 'magic-string';
import { ensureNamedImport, insertAfterCall } from '../entry.js';
import { langOf, reportUnparseable } from '../parse.js';
import { editSfc, libraryTags, LIBRARY, renameAttr, type LibTag } from '../sfc.js';
import type { Step } from './types.js';

const STEP = 'v2-patch';

export const v2Patch: Step = {
    id: STEP,
    to: '2.0.49',
    async run({ installed, entry, files, report, choose }) {
        const manual = (message: string, at?: { file: string; line: number }) =>
            report.add({ kind: 'manual', step: STEP, file: at?.file, line: at?.line, message });

        // Stats reads the Inertia page through setInertiaPage from 2.0.25 on and throws without it.
        const source = entry ? await files.read(entry) : null;
        if (source === null) {
            manual('Add `setInertiaPage(usePage());` where you call `setInertiaRouter(router);` (no app entry file found).');
        } else if (!source.includes('setInertiaPage(')) {
            const lang = langOf(entry!);
            try {
                const next = insertAfterCall(source, 'setInertiaRouter', 'setInertiaPage(usePage());', lang);
                if (next === null) {
                    manual('Call `setInertiaRouter(router);` (from @inertiajs/vue3 `router`) after creating the app.', { file: entry!, line: 1 });
                    manual('Call `setInertiaPage(usePage());` (from @inertiajs/vue3 `usePage`) after `setInertiaRouter(router);`.', { file: entry!, line: 1 });
                } else {
                    files.write(entry!, ensureNamedImport(ensureNamedImport(next, '@inertiajs/vue3', ['usePage'], lang), LIBRARY, ['setInertiaPage'], lang));
                }
            } catch (err) {
                reportUnparseable(report, STEP, entry!, err, 'add `setInertiaPage(usePage());` after `setInertiaRouter(router);`, with its imports');
            }
        }

        const tags = await libraryTags(files, ['Alert', 'Table', 'TrPlaceholder', 'LinkButton'], report, STEP);
        const edits = new Map<string, ((ms: MagicString) => void)[]>();
        const edit = (t: LibTag, fn: (ms: MagicString) => void) => {
            if (!edits.has(t.file)) edits.set(t.file, []);
            edits.get(t.file)!.push(fn);
        };

        if (semver.lt(installed, '2.0.25')) {
            const alerts: LibTag[] = [];
            for (const t of tags.filter((t) => t.component === 'Alert')) {
                if (t.hasSpread) {
                    manual('Alert with a `v-bind` spread: `dismissible` now defaults to false and `message` was removed.', t);
                    continue;
                }
                if (t.attr('message')) manual('Alert `message` prop removed: put the text in the default slot.', t);
                if (!t.attr('dismissible')) alerts.push(t);
            }
            if (alerts.length) {
                const decision = await choose({
                    id: 'alert-dismissible',
                    title: 'Alert no longer shows a close button by default',
                    keep: 'Keep the close button (adds dismissible)',
                    adopt: 'Use the new default (no close button)',
                    sites: alerts.length,
                    default: 'keep',
                });
                if (decision === 'keep') for (const t of alerts) edit(t, (ms) => ms.appendLeft(t.nameEnd, ' dismissible'));
            }

            const tables: LibTag[] = [];
            for (const t of tags.filter((t) => t.component === 'Table')) {
                if (t.hasSpread) manual('Table with a `v-bind` spread: `sticky` now defaults to false.', t);
                else if (!t.attr('sticky')) tables.push(t);
            }
            if (tables.length) {
                const decision = await choose({
                    id: 'table-sticky',
                    title: 'Table sticky header is now off by default',
                    keep: 'Add sticky to every Table: restores sticky, not the exact old look (3.2 reworks sticky)',
                    adopt: 'Use the new default (not sticky)',
                    sites: tables.length,
                    default: 'keep',
                });
                if (decision === 'keep') for (const t of tables) edit(t, (ms) => ms.appendLeft(t.nameEnd, ' sticky'));
            }

            for (const t of tags.filter((t) => t.component === 'LinkButton')) {
                report.add({ kind: 'visual', step: STEP, file: t.file, line: t.line, message: 'LinkButton uses the theme system now: check its colours.' });
            }
        }

        if (semver.satisfies(installed, '>=2.0.25 <2.0.32')) {
            for (const t of tags.filter((t) => t.component === 'TrPlaceholder')) {
                const columns = t.attr('columns');
                if (columns) edit(t, (ms) => renameAttr(ms, columns, 'columns', 'placeholders'));
                else if (t.hasSpread) manual('TrPlaceholder with a `v-bind` spread: rename `columns` back to `placeholders`.', t);
            }
        }

        for (const [file, fns] of edits) await editSfc(files, file, (ms) => fns.forEach((fn) => fn(ms)));
    },
};
