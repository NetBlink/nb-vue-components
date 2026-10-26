import fs from 'node:fs/promises';
import path from 'node:path';
import semver from 'semver';
import type { Step } from './steps/types.js';

// Comparisons handle prereleases (4.0.0-beta.N) natively; ranges need the flag.
const OPTS = { includePrerelease: true };

export type VersionSource = 'lockfile' | 'node_modules' | 'package.json';

async function readText(file: string): Promise<string | null> {
    try {
        return await fs.readFile(file, 'utf8');
    } catch {
        return null;
    }
}

async function readJson(file: string): Promise<any> {
    try {
        return JSON.parse((await readText(file))!);
    } catch {
        return null;
    }
}

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');

/**
 * Version of `pkg` in pnpm-lock.yaml, from its package key: `'pkg@1.2.3'` / `'pkg@1.2.3(vue@3.5.0)'`
 * (lockfile v6 and v9, `/`-prefixed in v6) or `/pkg/1.2.3_vue@3.5.0` (v5).
 */
export function pnpmLocked(lock: string, pkg: string): string | undefined {
    const re = new RegExp(`^\\s+['"]?\\/?${escape(pkg)}[@/](\\d+\\.\\d+\\.\\d+(?:-[0-9A-Za-z.-]+)?)[(_'":]`, 'm');
    return re.exec(lock)?.[1];
}

/**
 * Version of `pkg` in yarn.lock: the `version` line under the first entry whose header names it,
 * `"pkg@^1.0.0", pkg@~1.2.0:` (classic) or `"pkg@npm:^1.0.0":` (berry).
 */
export function yarnLocked(lock: string, pkg: string): string | undefined {
    const header = new RegExp(`(?:^|[\\s,"])${escape(pkg)}@`);
    let inEntry = false;
    for (const line of lock.split(/\r?\n/)) {
        if (!/^\s/.test(line)) inEntry = line.trim() !== '' && !line.startsWith('#') && header.test(line);
        else if (inEntry) {
            const m = /^\s+version:?\s+"?([^"\s]+)"?\s*$/.exec(line);
            if (m) return m[1];
        }
    }
    return undefined;
}

/**
 * Installed version of `pkg`: lockfile (npm, then pnpm, then yarn), then node_modules, then the
 * package.json range. A package.json range that starts above the locked version wins: the CLI
 * bumped it and `npm install` has not run yet. A range with no lower bound (`*`, `x`, `latest`)
 * tells nothing, so with nothing else to go on the result is null.
 */
export async function detectVersion(root: string, pkg: string): Promise<{ version: string; source: VersionSource } | null> {
    const manifest = await readJson(path.join(root, 'package.json'));
    const range: string | undefined = manifest?.dependencies?.[pkg] ?? manifest?.devDependencies?.[pkg];
    const min = range && semver.validRange(range, OPTS) ? semver.minVersion(range)?.version : undefined;
    const fromRange = min === '0.0.0' ? undefined : min;

    const lock = await readJson(path.join(root, 'package-lock.json'));
    let locked: string | undefined = lock?.packages?.[`node_modules/${pkg}`]?.version ?? lock?.dependencies?.[pkg]?.version;
    if (!lock) {
        const pnpm = await readText(path.join(root, 'pnpm-lock.yaml'));
        const yarn = pnpm === null ? await readText(path.join(root, 'yarn.lock')) : null;
        locked = pnpm !== null ? pnpmLocked(pnpm, pkg) : yarn !== null ? yarnLocked(yarn, pkg) : undefined;
    }
    const installed: string | undefined = (await readJson(path.join(root, 'node_modules', pkg, 'package.json')))?.version;

    const found: [string | undefined, VersionSource][] = [
        [locked, 'lockfile'],
        [installed, 'node_modules'],
    ];
    for (const [version, source] of found) {
        if (!version || !semver.valid(version)) continue;
        if (fromRange && semver.gt(fromRange, version)) return { version: fromRange, source: 'package.json' };
        return { version, source };
    }
    return fromRange ? { version: fromRange, source: 'package.json' } : null;
}

export function pickSteps(installed: string, target: string, steps: Step[]): Step[] {
    return steps.filter((s) => semver.gt(s.to, installed) && semver.lte(s.to, target));
}

/** `--to 3` means the newest known 3.x; an exact known version (e.g. `2.0.1`) is taken as is. */
export function resolveTarget(to: string | undefined, latest: string, steps: Step[]): string {
    const known = [latest, ...steps.map((s) => s.to)];
    if (!to) return latest;
    if (semver.valid(to)) {
        if (known.includes(to)) return to;
        throw new Error(`--to ${to}: not a version this CLI knows (${known.join(', ')})`);
    }
    const major = Number(to);
    const matching = known.filter((v) => semver.major(v) === major).sort(semver.rcompare);
    if (!Number.isInteger(major) || matching.length === 0) throw new Error(`--to ${to}: no known version for that major`);
    return matching[0];
}
