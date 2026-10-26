import { parseExpression } from '@babel/parser';
import type MagicString from 'magic-string';
import { editSfc, libraryTags, removeAttr, renameAttr, renderFnUses, type LibAttr, type LibTag } from '../sfc.js';
import { V4_RENAME_MAP, type V4Rename } from './data/v4-rename-map.js';
import type { Step } from './types.js';

const STEP = 'v3-to-v4';
const { renames, classTargetChanges, propRenames } = V4_RENAME_MAP;
const EMPTY_ROW = ['Tbody', 'EnhancedTable'];
const OLD_EMPTY_ROW = 'text-left text-gray-900 sm:py-4';
// EnhancedTable has no `empty` part: its inner Tbody only takes the app-wide config.
const RESTORE_EMPTY_ROW: Record<string, string> = {
    Tbody: `\`:ui="{ empty: '${OLD_EMPTY_ROW}' }"\``,
    EnhancedTable: `the plugin option \`ui: { Tbody: { empty: '${OLD_EMPTY_ROW}' } }\` (app-wide, EnhancedTable has no \`empty\` part)`,
};
const [NO_RECORDS] = propRenames;

const byComponent = new Map<string, V4Rename[]>();
for (const r of renames) byComponent.set(r.component, [...(byComponent.get(r.component) ?? []), r]);

const target = (r: V4Rename) => (r.replacement === 'class' ? '`class`' : `\`:ui="{ ${r.part}: '...' }"\``);

/** What to do with each deprecated prop of `component`, for the items this step cannot rewrite. */
function hint(component: string): string {
    const todo = (byComponent.get(component) ?? []).map((r) =>
        r.semantics === 'merge' ? `\`${r.prop}\` to ${target(r)}` : r.semantics === 'replace' ? `\`${r.prop}\` (\`theme="no-style"\` plus \`class\` keeps its look)` : `\`${r.prop}\` (no effect, remove it)`,
    );
    if (component === NO_RECORDS.component) todo.push(`\`${NO_RECORDS.prop}\` to \`${NO_RECORDS.replacement}\``);
    return todo.join(', ');
}

/** `class="..."` (bound false) or `:class` / `v-bind:class` (bound true) as written on the tag. */
function plainProp(t: LibTag, name: string, bound: boolean): any {
    return t.node.props.find((p: any) =>
        bound ? p.type === 7 && p.name === 'bind' && p.arg?.isStatic && p.arg.content === name : p.type === 6 && p.name === name,
    );
}

/** A JS string literal that fits inside an attribute quoted with `attrQuote`. */
const literal = (value: string, attrQuote: string) => {
    const q = attrQuote === "'" ? '"' : "'";
    return q + value.replace(/\\/g, '\\\\').replaceAll(q, `\\${q}`) + q;
};

interface UiEntry {
    prop: string;
    part: string;
    attr: LibAttr;
}

export const v3ToV4: Step = {
    id: STEP,
    to: '4.0.0-beta.0',
    async run({ files, report, choose }) {
        const add = (kind: 'manual' | 'visual', at: { file: string; line: number }, message: string) =>
            report.add({ kind, step: STEP, file: at.file, line: at.line, message });

        for (const use of await renderFnUses(files, [...byComponent.keys(), NO_RECORDS.component], report, STEP)) {
            add('manual', use, `${use.component} in a render function: change its deprecated props by hand if it passes any, ${hint(use.component)}. They still work in 4.x and are removed in 5.0.`);
        }

        const components = [...new Set([...byComponent.keys(), ...classTargetChanges.map((c) => c.component), ...EMPTY_ROW, 'LogsContent'])];
        const tags = await libraryTags(files, components, report, STEP);
        const edits = new Map<string, ((ms: MagicString) => void)[]>();
        const edit = (t: LibTag, fn: (ms: MagicString) => void) => {
            if (!edits.has(t.file)) edits.set(t.file, []);
            edits.get(t.file)!.push(fn);
        };

        const emptySites: LibTag[] = [];
        for (const t of tags) {
            const deprecated = (byComponent.get(t.component) ?? []).map((r) => ({ r, a: t.attr(r.prop) })).filter((d) => d.a);
            const noRecords = t.component === NO_RECORDS.component ? t.attr(NO_RECORDS.prop) : null;
            if (t.hasSpread) {
                if (byComponent.has(t.component) || t.component === NO_RECORDS.component) {
                    add('manual', t, `${t.component} with a \`v-bind\` spread, so it was left as is: change the deprecated props in the bound object by hand if it has any, ${hint(t.component)}.`);
                }
            } else {
                const ui: UiEntry[] = [];
                for (const { r, a } of deprecated as { r: V4Rename; a: LibAttr }[]) {
                    if (r.semantics === 'none') add('manual', t, `${t.component} \`${r.prop}\` was left as is. ${r.note}`);
                    else if (r.semantics === 'replace') {
                        add('manual', t, `${t.component} \`${r.prop}\` was left as is (it works until 5.0). ${r.note}`);
                    } else if (a.kind === 'model') add('manual', t, `${t.component} \`v-model:${r.prop}\`: move it to ${target(r)} by hand.`);
                    else if (r.replacement === 'class') moveToClass(t, a, r);
                    else ui.push({ prop: r.prop, part: r.part!, attr: a });
                }
                if (ui.length) moveToUi(t, ui);
                if (noRecords) {
                    if (t.attr('emptyMessage')) edit(t, (ms) => removeAttr(ms, noRecords));
                    else emptySites.push(t);
                }
            }

            const change = classTargetChanges.find((c) => c.component === t.component);
            if (change && (plainProp(t, 'class', false) || plainProp(t, 'class', true))) add('visual', t, `${t.component} with a \`class\`: ${change.change}`);
            if (EMPTY_ROW.includes(t.component)) {
                add('visual', t, `${t.component} empty row is centred grey text with \`py-8\` now (it was left-aligned dark text): restore the old look with ${RESTORE_EMPTY_ROW[t.component]}.`);
            }
            if (t.component === 'LogsContent') {
                add('visual', t, `LogsContent empty line is \`text-sm\` now (it was the base size): restore it with \`:ui="{ empty: 'text-base' }"\`.`);
            }
        }

        if (emptySites.length) {
            const decision = await choose({
                id: 'tbody-empty-message',
                title: 'Tbody `noRecordsMessage` is shown now (3.x always showed the default text)',
                keep: 'Keep the text 3.x showed (removes noRecordsMessage)',
                adopt: 'Show your text (renames noRecordsMessage to emptyMessage)',
                sites: emptySites.length,
                default: 'keep',
            });
            for (const t of emptySites) {
                const a = t.attr(NO_RECORDS.prop)!;
                edit(t, (ms) => (decision === 'keep' ? removeAttr(ms, a) : renameAttr(ms, a, NO_RECORDS.prop, NO_RECORDS.replacement)));
            }
        }

        report.add({
            kind: 'visual',
            step: STEP,
            message: 'Override classes (`class`, `:ui` and the deprecated props) now beat the library defaults they clash with: check pages that relied on a default winning, and drop `!` markers added only to beat a default.',
        });

        for (const [file, fns] of edits) await editSfc(files, file, (ms) => fns.forEach((fn) => fn(ms)));

        /** Static value into the static `class`, bound value into `:class`; deprecated value first, as 4.x layers it. */
        function moveToClass(t: LibTag, a: LibAttr, r: V4Rename) {
            const existing = plainProp(t, 'class', a.kind === 'bound');
            if (!existing) return edit(t, (ms) => renameAttr(ms, a, r.prop, 'class'));
            if (a.kind === 'static') {
                const merged = `${a.value} ${existing.value?.content ?? ''}`.trim();
                return edit(t, (ms) => {
                    ms.overwrite(existing.loc.start.offset, existing.loc.end.offset, `class="${merged}"`);
                    removeAttr(ms, a);
                });
            }
            const combined = `[${a.value}, ${existing.exp?.content}]`;
            if (!existing.exp || combined.includes('"')) return add('manual', t, `${t.component} \`${r.prop}\`: combine it with \`:class\` by hand.`);
            edit(t, (ms) => {
                ms.overwrite(existing.loc.start.offset, existing.loc.end.offset, `:class="${combined}"`);
                removeAttr(ms, a);
            });
        }

        /** Every `ui.<part>` prop of one tag into one `:ui` object: a new one, or keys added to an object literal. */
        function moveToUi(t: LibTag, entries: UiEntry[]) {
            const manual = (why: string) => {
                for (const e of entries) add('manual', t, `${t.component} \`${e.prop}\`: ${why}, so it was left as is. Move it to \`:ui="{ ${e.part}: '...' }"\` by hand.`);
            };
            const value = (e: UiEntry, quote: string) => (e.attr.kind === 'static' ? literal(e.attr.value, quote) : e.attr.value);
            const existing = plainProp(t, 'ui', true);
            if (plainProp(t, 'ui', false)) return manual('`ui` is a plain attribute here, not a bound object');
            if (!existing) {
                if (entries.some((e) => e.attr.kind === 'bound' && e.attr.value.includes('"'))) return manual('its value has double quotes');
                const object = `{ ${entries.map((e) => `${e.part}: ${value(e, '"')}`).join(', ')} }`;
                return edit(t, (ms) => {
                    ms.overwrite(entries[0].attr.start, entries[0].attr.end, `:ui="${object}"`);
                    for (const e of entries.slice(1)) removeAttr(ms, e.attr);
                });
            }
            let node: any;
            try {
                node = existing.exp && parseExpression(existing.exp.content, { plugins: ['typescript'] });
            } catch {
                node = null;
            }
            if (node?.type !== 'ObjectExpression') return manual('`:ui` is bound to an expression, not an object literal');
            if (node.properties.some((p: any) => p.type !== 'ObjectProperty' || p.computed)) return manual('`:ui` has a spread, computed key or method');
            const start = existing.exp.loc.start.offset;
            const quote = existing.loc.source[existing.loc.source.indexOf('=') + 1];
            if (entries.some((e) => e.attr.kind === 'bound' && e.attr.value.includes(quote))) return manual(`its value has ${quote === '"' ? 'double' : 'single'} quotes`);
            const keyOf = (p: any) => (p.key.type === 'Identifier' ? p.key.name : p.key.value);
            edit(t, (ms) => {
                const added: string[] = [];
                for (const e of entries) {
                    const p = node.properties.find((p: any) => keyOf(p) === e.part);
                    if (!p) {
                        added.push(`${e.part}: ${value(e, quote)}`);
                        continue;
                    }
                    const old = existing.exp.content.slice(p.value.start, p.value.end);
                    const both = e.attr.kind === 'static' && p.value.type === 'StringLiteral' ? literal(`${e.attr.value} ${p.value.value}`, quote) : `[${value(e, quote)}, ${old}]`;
                    ms.overwrite(start + p.start, start + p.end, `${existing.exp.content.slice(p.key.start, p.key.end)}: ${both}`);
                }
                if (added.length) {
                    if (node.properties.length) ms.appendLeft(start + node.properties[node.properties.length - 1].end, `, ${added.join(', ')}`);
                    else ms.overwrite(start + node.start, start + node.end, `{ ${added.join(', ')} }`);
                }
                for (const e of entries) removeAttr(ms, e.attr);
            });
        }
    },
};
