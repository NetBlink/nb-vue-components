import fs from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';
import { parse as parseSfc } from '@vue/compiler-sfc';
import MagicString from 'magic-string';

interface Options {
    root: string;
    dryRun: boolean;
    summary: {
        faPassthroughSites: number;
        manualReviewItems: { file: string; line: number; reason: string }[];
    };
}

interface Result { scanned: number; rewritten: number; }

const STRING_FAB_RE = /<FontAwesomeIcon\b([^>]*?\bicon\s*=\s*"(?:fab|fas|far)\s+fa-([a-z0-9-]+)"[^>]*?)\s*(\/)?>/g;
const FA_REF_RE = /\bfa[A-Z][A-Za-z0-9]+/g;
const NB_IMPORT_RE = /from\s+['"]@netblink\/vue-components(?:\/[^'"]*)?['"]/;

/**
 * For every .vue file under root that imports from @netblink/vue-components:
 *   - rewrite hardcoded `<FontAwesomeIcon icon="fab fa-whatsapp" …/>` to `<NbIcon name="$whatsapp" …/>`
 *   - count `:icon="faXyz"` and `v-bind:icon="faXyz"` references and add them to faPassthroughSites
 *
 * Anything passing `faXyz` as a value continues to work via the FA passthrough,
 * so it is *not* rewritten — only counted, so the report explains the situation.
 */
export async function transformSfcs(opts: Options): Promise<Result> {
    const files = await fg(['**/*.vue', '!node_modules/**', '!dist/**'], { cwd: opts.root, absolute: true });
    let scanned = 0;
    let rewritten = 0;

    for (const file of files) {
        const source = await fs.readFile(file, 'utf8');
        if (!NB_IMPORT_RE.test(source)) continue; // not a consumer of our components
        scanned++;

        const sfc = parseSfc(source);
        if (!sfc.descriptor.template) continue;
        const tmpl = sfc.descriptor.template;
        const tmplStart = tmpl.loc.start.offset;
        const tmplSource = tmpl.content;

        let fileChanged = false;
        const ms = new MagicString(source);

        // 1. Rewrite hardcoded string-form icons.
        let m: RegExpExecArray | null;
        STRING_FAB_RE.lastIndex = 0;
        while ((m = STRING_FAB_RE.exec(tmplSource))) {
            const fullMatch = m[0];
            const attrChunk = m[1]; // attributes only — the closing `/?>` is matched separately
            const iconName = m[2];
            const selfClosing = m[3] === '/';
            const alias = `$${iconName}`;
            const cleanedAttrs = attrChunk.replace(/\s*\bicon\s*=\s*"(?:fab|fas|far)\s+fa-[a-z0-9-]+"\s*/, ' ');
            const trimmedAttrs = cleanedAttrs.replace(/\s+$/, '').replace(/^\s+/, ' ');
            const close = selfClosing ? ' />' : '></NbIcon>';
            const replacement = `<NbIcon name="${alias}"${trimmedAttrs}${close}`;
            const absStart = tmplStart + (m.index ?? 0);
            ms.overwrite(absStart, absStart + fullMatch.length, replacement);
            fileChanged = true;
            // Whatsapp specifically needs a user-provided mapping — surface it.
            if (alias === '$whatsapp') {
                opts.summary.manualReviewItems.push({
                    file: path.relative(opts.root, file),
                    line: lineOf(source, absStart),
                    reason: `Added <NbIcon name="$whatsapp" />. Register a $whatsapp mapping in your createNbIcons aliases (no default ships).`,
                });
            }
        }

        // 2. Count FA passthrough usages (don't rewrite — they keep working).
        const passthroughMatches = (tmplSource.match(FA_REF_RE) ?? []).length;
        opts.summary.faPassthroughSites += passthroughMatches;

        if (fileChanged) {
            if (!opts.dryRun) await fs.writeFile(file, ms.toString(), 'utf8');
            rewritten++;
        }
    }

    return { scanned, rewritten };
}

function lineOf(source: string, offset: number): number {
    let line = 1;
    for (let i = 0; i < offset && i < source.length; i++) {
        if (source[i] === '\n') line++;
    }
    return line;
}
