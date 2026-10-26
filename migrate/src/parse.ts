import path from 'node:path';
import { parse, type ParserPlugin } from '@babel/parser';
import type { Report } from './report.js';

/** Script language: a file extension or an SFC `<script lang>` (`ts`, `tsx`, `js`, `jsx`). */
export function langOf(file: string): string {
    return path.extname(file).slice(1) || 'js';
}

/**
 * Parses a module with the Babel plugins its language allows. `.ts` gets no JSX, so `<T>x`
 * casts parse; plain JS is tried without JSX first. Throws Babel's SyntaxError (with `loc`).
 */
export function parseCode(source: string, lang = 'js', startLine = 1) {
    const attempts: ParserPlugin[][] =
        lang === 'ts' || lang === 'mts' || lang === 'cts'
            ? [['typescript']]
            : lang === 'tsx'
              ? [['typescript', 'jsx']]
              : lang === 'jsx'
                ? [['jsx']]
                : [[], ['jsx']];
    let first: unknown;
    for (const plugins of attempts) {
        try {
            return parse(source, { sourceType: 'module', startLine, plugins });
        } catch (err) {
            first ??= err;
        }
    }
    throw first;
}

/** Turns a Babel syntax error into a manual report item; any other error is rethrown. */
export function reportUnparseable(report: Report, step: string, file: string, err: unknown, todo = "make this upgrade's changes to it by hand"): void {
    if (!(err instanceof SyntaxError) || !('loc' in err)) throw err;
    report.add({ kind: 'manual', step, file, line: (err as any).loc?.line, message: `Could not parse this file (${err.message}), so it was left as is: ${todo}.` });
}
