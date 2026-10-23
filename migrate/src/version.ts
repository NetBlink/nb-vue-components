import fs from 'node:fs/promises';
import path from 'node:path';
import semver from 'semver';
import type { Step } from './steps/types.js';

// Comparisons handle prereleases (4.0.0-beta.N) natively; ranges need the flag.
const OPTS = { includePrerelease: true };

export type VersionSource = 'lockfile' | 'node_modules' | 'package.json';

async function readJson(file: string): Promise<any> {
    try {
        return JSON.parse(await fs.readFile(file, 'utf8'));
    } catch {
        return null;
    }
}

/**
 * Installed version of `pkg`: lockfile, then node_modules, then the package.json range.
 * A package.json range that starts above the locked version wins: the CLI bumped it
 * and `npm install` has not run yet.
 */
export async function detectVersion(root: string, pkg: string): Promise<{ version: string; source: VersionSource } | null> {
    const manifest = await readJson(path.join(root, 'package.json'));
    const range: string | undefined = manifest?.dependencies?.[pkg] ?? manifest?.devDependencies?.[pkg];
    const fromRange = range && semver.validRange(range, OPTS) ? semver.minVersion(range)?.version : undefined;

    const lock = await readJson(path.join(root, 'package-lock.json'));
    const locked: string | undefined = lock?.packages?.[`node_modules/${pkg}`]?.version ?? lock?.dependencies?.[pkg]?.version;
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
