import fs from 'node:fs/promises';
import path from 'node:path';
import pc from 'picocolors';
import prompts from 'prompts';
import semver from 'semver';
import { FileStore } from './files.js';
import { Report, REPORT_FILE } from './report.js';
import { Chooser, type Decision } from './choices.js';
import { isGitClean } from './git.js';
import { LIBRARY } from './sfc.js';
import { detectVersion, pickSteps, resolveTarget } from './version.js';
import { STEPS, LATEST } from './steps/index.js';
import type { StepContext } from './steps/types.js';

export { LIBRARY };

export interface UpgradeOptions {
    root: string;
    to?: string;
    dryRun: boolean;
    check: boolean;
    yes: boolean;
    force: boolean;
    entry?: string;
    choicesFile?: string;
}

/** Runs the whole upgrade and returns the exit code: 0 ok, 1 `--check` found changes, 2 refused. */
export async function runUpgrade(opts: UpgradeOptions): Promise<number> {
    const refuse = (message: string) => {
        console.log(pc.red(message));
        return 2;
    };

    if (!opts.force && !isGitClean(opts.root)) {
        return refuse('The project has uncommitted changes (or is not a git repo). Commit first, or pass --force.');
    }

    let manifest: any;
    try {
        manifest = JSON.parse(await fs.readFile(path.join(opts.root, 'package.json'), 'utf8'));
    } catch {
        return refuse(`No readable package.json in ${opts.root}.`);
    }
    const deps = { ...manifest.devDependencies, ...manifest.dependencies };
    if (deps['@shbc/vue-components']) {
        return refuse(`@shbc/vue-components is not supported, switch the app to ${LIBRARY} first.`);
    }
    if (!deps[LIBRARY]) return refuse(`${LIBRARY} is not a dependency of this project.`);

    const detected = await detectVersion(opts.root, LIBRARY);
    if (!detected) return refuse(`Could not work out which ${LIBRARY} version is installed.`);
    const installed = detected.version;

    let target: string;
    try {
        target = resolveTarget(opts.to, LATEST, STEPS);
    } catch (err) {
        return refuse((err as Error).message);
    }
    if (semver.gte(installed, target)) {
        console.log(pc.green(`${LIBRARY} is already at ${installed}, nothing to do.`));
        return 0;
    }

    const steps = pickSteps(installed, target, STEPS);
    if (steps.some((s) => s.requiresTailwind === 4)) {
        const tailwind = await detectVersion(opts.root, 'tailwindcss');
        if (tailwind && semver.major(tailwind.version) < 4) {
            return refuse(
                `Tailwind 3 detected (${tailwind.version}): run npx @tailwindcss/upgrade, commit, then rerun. ` +
                    `${LIBRARY} 2.x and later need Tailwind 4.`,
            );
        }
    }

    console.log(`installed: ${installed} (${detected.source})   target: ${target}   steps: ${steps.map((s) => s.id).join(' -> ') || 'none'}`);

    let preset: Record<string, Decision> | undefined;
    if (opts.choicesFile) {
        try {
            preset = JSON.parse(await fs.readFile(path.resolve(opts.choicesFile), 'utf8'));
        } catch (err) {
            return refuse(`Could not read --choices ${opts.choicesFile}: ${(err as Error).message}`);
        }
    }
    const interactive = !opts.yes && !!process.stdin.isTTY;
    if (!interactive && !opts.yes && !opts.dryRun && !opts.check) {
        return refuse('No terminal to ask questions on: pass --yes to accept the defaults (see --choices).');
    }

    const files = new FileStore(opts.root);
    const report = new Report();
    const chooser = new Chooser({ interactive, preset });
    const ctx: StepContext = { root: opts.root, installed, target, entry: null, files, report, choose: chooser.choose };

    try {
        for (const step of steps) {
            await step.run({
                ...ctx,
                choose: async (c) => {
                    const decision = await chooser.choose(c);
                    report.add({
                        kind: 'choice',
                        step: step.id,
                        message: `${c.title}: **${decision}**, ${decision === 'keep' ? c.keep : c.adopt} (${c.sites} site${c.sites === 1 ? '' : 's'}, choice id \`${c.id}\`)`,
                    });
                    return decision;
                },
            });
        }
    } catch (err) {
        if ((err as Error).message === 'aborted') return refuse('Aborted, nothing was written.');
        throw err;
    }

    await files.editJson('package.json', (json) => {
        for (const field of ['dependencies', 'devDependencies']) {
            if (json[field]?.[LIBRARY]) json[field][LIBRARY] = `^${target}`;
        }
    });
    await files.read(REPORT_FILE);
    files.write(REPORT_FILE, report.markdown({ installed, target, steps: steps.map((s) => s.id) }));

    if (opts.dryRun) {
        console.log(files.diff());
        return 0;
    }
    if (opts.check) {
        const changed = files.changed();
        console.log(changed.length ? `would change: ${changed.join(', ')}` : 'no changes');
        return changed.length ? 1 : 0;
    }

    const changed = files.changed();
    console.log('');
    console.log(`files to change: ${changed.length}`);
    for (const f of changed) console.log(`  ${f}`);
    console.log(`report: ${report.count('choice')} choice(s), ${report.count('manual')} manual item(s), ${report.count('visual')} visual check(s)`);

    if (!opts.yes) {
        const { ok } = await prompts({ type: 'confirm', name: 'ok', message: 'Write these changes?', initial: true });
        if (!ok) return refuse('Aborted, nothing was written.');
    }
    await files.flush();
    console.log(pc.green(`Done. See ${REPORT_FILE}.`));
    console.log('next: npm install && npm run build');
    return 0;
}
