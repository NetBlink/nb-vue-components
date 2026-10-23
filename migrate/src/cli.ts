#!/usr/bin/env node
import { Command } from 'commander';
import pc from 'picocolors';
import path from 'node:path';
import { locateEntry } from './locate-entry.js';
import { runUpgrade } from './engine.js';
import { transformSwitch, SET_CONFIGS, type SetKey } from './transform-switch.js';

const program = new Command();

program
    .name('nb-vue-components-migrate')
    .description('Upgrade an app using @netblink/vue-components from any 1.x/2.x/3.x version to the latest.');

program
    .command('upgrade', { isDefault: true })
    .description('Upgrade the app to the latest version (or --to <major>)')
    .option('--path <dir>', 'app root', '.')
    .option('--to <major>', 'stop at the newest known version of this major')
    .option('--dry-run', 'print the full diff, write nothing', false)
    .option('--check', 'exit 1 if anything would change, write nothing', false)
    .option('--yes', 'no prompts: take every default and write', false)
    .option('--force', 'run even with uncommitted changes', false)
    .option('--entry <file>', 'app entry file (default: found by looking for createApp/createInertiaApp)')
    .option('--choices <file>', 'JSON file of { "<choice id>": "keep" | "adopt" }')
    .action(async (opts) => {
        process.exitCode = await runUpgrade({
            root: path.resolve(opts.path),
            to: opts.to,
            dryRun: opts.dryRun,
            check: opts.check,
            yes: opts.yes,
            force: opts.force,
            entry: opts.entry,
            choicesFile: opts.choices,
        });
    });

program
    .command('switch <set>')
    .description('Swap the active icon preset. Accepts: fa, hero, material, solar')
    .option('--path <dir>', 'directory to scan', '.')
    .option('--entry <file>', 'explicit path to the app entrypoint')
    .option('--dry-run', 'show changes without writing files', false)
    .action(async (setArg: string, opts) => {
        const key = setArg.toLowerCase() as SetKey;
        if (!(key in SET_CONFIGS)) {
            console.error(pc.red(`Unknown icon set: ${setArg}`));
            console.error(`Valid sets: ${Object.keys(SET_CONFIGS).join(', ')}`);
            process.exit(2);
        }

        const root = path.resolve(opts.path);
        const entry = await locateEntry(root, opts.entry);
        if (!entry) {
            console.error(pc.red('No entrypoint found.'));
            console.error('Pass --entry <path-to-main.{js,ts}> to specify one.');
            process.exit(2);
        }

        const config = SET_CONFIGS[key];
        try {
            await transformSwitch({ file: entry, dryRun: opts.dryRun, target: key });
        } catch (err) {
            console.error(pc.red((err as Error).message));
            process.exit(2);
        }

        console.log('');
        console.log(pc.green(`✓ Switched to ${config.label}: ${path.relative(root, entry)}`));
        console.log('');
        console.log(pc.cyan('Next step — install peer deps:'));
        console.log('  ' + config.installCmd);
        console.log('');
    });

program.parseAsync(process.argv);
