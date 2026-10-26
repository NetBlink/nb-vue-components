import type { FileStore } from './files.js';

const TAILWIND_IMPORT_RE = /@import\s+(['"])tailwindcss\1/;

/** Whitespace-insensitive form of a CSS block body, as scripts/snapshot-theme.mjs writes it. */
export function normalizeCss(body: string): string {
    return body.replace(/\s+/g, ' ').replace(/\s*([{};:,])\s*/g, '$1').trim();
}

/** The app's main stylesheet: the first .css under resources/ or src/ importing tailwindcss. */
export async function locateAppCss(files: FileStore): Promise<string | null> {
    for (const file of await files.glob(['resources/**/*.css', 'src/**/*.css'])) {
        const css = await files.read(file);
        if (css && TAILWIND_IMPORT_RE.test(css)) return file;
    }
    return null;
}

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');

/** Adds `@import 'spec';` on the line after the `@import` of `afterSpec` (or at the top). */
export function ensureImportAfter(css: string, spec: string, afterSpec: string): string {
    if (new RegExp(`@import\\s+(['"])${escape(spec)}\\1`).test(css)) return css;
    const line = `@import '${spec}';`;
    const after = new RegExp(`^.*@import\\s+(['"])${escape(afterSpec)}\\1.*$`, 'm').exec(css);
    if (!after) return `${line}\n${css}`;
    const end = after.index + after[0].length;
    return `${css.slice(0, end)}\n${line}${css.slice(end)}`;
}

/** Removes a range plus the line break after it, and a blank line before it left dangling. */
function cut(css: string, start: number, end: number): string {
    if (css[end] === '\n') end++;
    while (start > 0 && css[start - 1] !== '\n' && /\s/.test(css[start - 1])) start--;
    let next = css.slice(0, start) + css.slice(end);
    if (start > 1 && next.slice(start - 2, start) === '\n\n' && (next[start] === '\n' || start === next.length)) {
        next = next.slice(0, start - 1) + next.slice(start);
    }
    return next;
}

/** Removes the `@keyframes` whose name and normalized body match `known`; `kept` names the same-named ones that differ. */
export function removeKeyframes(css: string, known: Record<string, string>): { css: string; kept: string[] } {
    const kept: string[] = [];
    const re = /@keyframes\s+([\w-]+)\s*\{/g;
    const remove: [number, number][] = [];
    let m: RegExpExecArray | null;
    while ((m = re.exec(css))) {
        let depth = 1;
        let i = re.lastIndex;
        while (depth && i < css.length) {
            if (css[i] === '{') depth++;
            else if (css[i] === '}') depth--;
            i++;
        }
        const name = m[1];
        if (name in known) {
            if (normalizeCss(css.slice(re.lastIndex, i - 1)) === normalizeCss(known[name])) remove.push([m.index, i]);
            else kept.push(name);
        }
        re.lastIndex = i;
    }
    for (const [start, end] of remove.reverse()) css = cut(css, start, end);
    return { css, kept };
}

/** Drops `@source` lines pointing at @netblink packages: theme.css registers the components itself. */
export function removeNetblinkSources(css: string): string {
    const re = /^[ \t]*@source\s+(['"])[^'"]*@netblink[^'"]*\1\s*;?[ \t]*$/m;
    let m: RegExpExecArray | null;
    while ((m = re.exec(css))) css = cut(css, m.index, m.index + m[0].length);
    return css;
}
