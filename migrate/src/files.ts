import fs from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';
import { createTwoFilesPatch } from 'diff';

// Build output, dependencies and Laravel's public/vendor/storage never hold app source.
const IGNORE = ['**/node_modules/**', '.git/**', 'dist/**', 'build/**', 'vendor/**', 'public/**', 'storage/**'];

/** In-memory view of the app: reads hit the disk once, writes are staged until flush(). */
export class FileStore {
    private original = new Map<string, string | null>();
    private staged = new Map<string, string>();

    constructor(private root: string) {}

    async read(rel: string): Promise<string | null> {
        if (this.staged.has(rel)) return this.staged.get(rel)!;
        if (!this.original.has(rel)) {
            try {
                this.original.set(rel, await fs.readFile(path.join(this.root, rel), 'utf8'));
            } catch {
                this.original.set(rel, null);
            }
        }
        return this.original.get(rel)!;
    }

    write(rel: string, content: string): void {
        this.staged.set(rel, content);
    }

    /** Parses a JSON file, lets `edit` change it, and writes it back with the same indent and trailing whitespace. */
    async editJson(rel: string, edit: (json: any) => void): Promise<void> {
        const source = await this.read(rel);
        if (source === null) return;
        const json = JSON.parse(source);
        edit(json);
        const indent = /^[ \t]+/m.exec(source)?.[0] ?? '    ';
        const trailing = /\s*$/.exec(source)![0];
        const next = JSON.stringify(json, null, indent) + trailing;
        if (next !== source) this.write(rel, next);
    }

    async glob(patterns: string[]): Promise<string[]> {
        return (await fg(patterns, { cwd: this.root, ignore: IGNORE })).sort();
    }

    changed(): string[] {
        return [...this.staged.keys()].filter((rel) => this.staged.get(rel) !== this.original.get(rel)).sort();
    }

    diff(): string {
        return this.changed()
            .map((rel) => createTwoFilesPatch(`a/${rel}`, `b/${rel}`, this.original.get(rel) ?? '', this.staged.get(rel)!))
            .join('\n');
    }

    async flush(): Promise<void> {
        for (const rel of this.changed()) {
            const full = path.join(this.root, rel);
            await fs.mkdir(path.dirname(full), { recursive: true });
            await fs.writeFile(full, this.staged.get(rel)!, 'utf8');
        }
    }
}
