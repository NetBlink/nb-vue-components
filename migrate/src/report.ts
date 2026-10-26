export type ReportKind = 'manual' | 'visual' | 'choice';

export interface ReportItem {
    kind: ReportKind;
    step: string;
    file?: string;
    line?: number;
    message: string;
}

export const REPORT_FILE = 'nb-vue-components-migration.md';

const SECTIONS: [ReportKind, string][] = [
    ['choice', 'Choices made'],
    ['manual', 'Manual changes needed'],
    ['visual', 'Check visually'],
];

export class Report {
    private items: ReportItem[] = [];

    /** Several steps can report the same thing (an unparseable file): it is listed once. */
    add(item: ReportItem): void {
        const same = (i: ReportItem) => i.kind === item.kind && i.file === item.file && i.line === item.line && i.message === item.message;
        if (!this.items.some(same)) this.items.push(item);
    }

    count(kind?: ReportKind): number {
        return this.items.filter((i) => !kind || i.kind === kind).length;
    }

    markdown(meta: { installed: string; target: string; steps: string[] }): string {
        const lines = [
            '# @netblink/vue-components migration report',
            '',
            `Upgraded from ${meta.installed} to ${meta.target}.`,
            '',
            `Steps: ${meta.steps.length ? meta.steps.join(', ') : 'none'}`,
        ];
        for (const [kind, title] of SECTIONS) {
            const items = this.items.filter((i) => i.kind === kind);
            lines.push('', `## ${title}`, '');
            if (items.length === 0) lines.push('None.');
            for (const i of items) {
                const where = i.file ? `**${i.file}${i.line ? `:${i.line}` : ''}**: ` : '';
                lines.push(`- ${where}${i.message}`);
            }
        }
        lines.push('', '## Next steps', '', '1. Run `npm install`.', '2. Build the app and go through the items above.', '');
        return lines.join('\n');
    }
}
