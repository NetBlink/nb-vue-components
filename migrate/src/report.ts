import fs from 'node:fs/promises';
import path from 'node:path';

interface Summary {
    entryUpdated: string;
    sfcsScanned: number;
    sfcsRewritten: number;
    faPassthroughSites: number;
    manualReviewItems: { file: string; line: number; reason: string }[];
}

export async function writeReport(root: string, summary: Summary): Promise<void> {
    const lines: string[] = [
        '# @netblink/vue-components — migration report',
        '',
        `- Entry updated: ${summary.entryUpdated || '_(no change)_'}`,
        `- SFCs scanned: ${summary.sfcsScanned}`,
        `- SFCs rewritten: ${summary.sfcsRewritten}`,
        `- FA passthrough sites preserved: ${summary.faPassthroughSites}`,
        '',
    ];

    if (summary.manualReviewItems.length === 0) {
        lines.push('No manual changes needed. ✓');
    } else {
        lines.push('## Manual review needed');
        lines.push('');
        for (const item of summary.manualReviewItems) {
            lines.push(`- **${item.file}:${item.line}** — ${item.reason}`);
        }
        lines.push('');
        lines.push('### How to register a `$whatsapp` mapping');
        lines.push('');
        lines.push('```ts');
        lines.push("import { createNbIcons } from '@netblink/vue-components/icons';");
        lines.push("import { faAliasPreset, faSet } from '@netblink/vue-components/icons/fa';");
        lines.push("import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';");
        lines.push('');
        lines.push('app.use(createNbIcons({');
        lines.push('    aliases: { ...faAliasPreset, $whatsapp: faWhatsapp },');
        lines.push('    sets: { fa: faSet },');
        lines.push("    defaultSet: 'fa',");
        lines.push('}));');
        lines.push('```');
    }

    await fs.writeFile(path.join(root, 'nb-vue-components-migration.md'), lines.join('\n'), 'utf8');
}
