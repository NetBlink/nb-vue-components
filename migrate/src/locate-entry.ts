import path from 'node:path';
import fs from 'node:fs/promises';
import fg from 'fast-glob';

const CANDIDATES = [
    'src/main.ts',
    'src/main.js',
    'src/main/index.ts',
    'src/main/index.js',
    'src/app.ts',
    'src/app.js',
    'app.ts',
    'app.js',
];

/**
 * Locate the file that creates the Vue app and registers NbVueComponents.
 *
 * Heuristic:
 *   1. If `override` is provided, return it (validated to exist).
 *   2. Try common candidate paths and return the first one that imports from
 *      `@netblink/vue-components`.
 *   3. Otherwise scan src/**\/*.{js,ts} for the same import and return the
 *      first match.
 *   4. Return null if nothing matches.
 */
export async function locateEntry(root: string, override: string | undefined): Promise<string | null> {
    if (override) {
        const full = path.resolve(root, override);
        try {
            await fs.access(full);
            return full;
        } catch {
            return null;
        }
    }

    for (const c of CANDIDATES) {
        const full = path.resolve(root, c);
        try {
            const content = await fs.readFile(full, 'utf8');
            if (content.includes('@netblink/vue-components')) return full;
        } catch {
            // not present — keep trying
        }
    }

    const matches = await fg(['src/**/*.{js,ts}', 'app/**/*.{js,ts}'], { cwd: root, absolute: true });
    for (const file of matches) {
        const content = await fs.readFile(file, 'utf8');
        if (content.includes('@netblink/vue-components') && /app\.use\(/.test(content)) return file;
    }

    return null;
}
