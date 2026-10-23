#!/usr/bin/env node
import { Command } from 'commander';
import pc from 'picocolors';
import path from 'node:path';
import { locateEntry } from './locate-entry.js';
import { transformEntry } from './transform-entry.js';
import { transformSfcs } from './transform-sfc.js';
import { writeReport } from './report.js';
import { transformSwitch, SET_CONFIGS, type SetKey } from './transform-switch.js';

const program = new Command();

program
    .name('nb-vue-components-migrate')
    .description('Upgrade an app from @netblink/vue-components v2.x to v3.x.');

program
    .command('upgrade', { isDefault: true })
    .description('Default: inject the FA preset (preserves v2 visuals)')
    .option('--path <dir>', 'directory to scan', '.')
    .option('--entry <file>', 'explicit path to the app entrypoint (e.g. src/main.ts)')
    .option('--dry-run', 'show changes without writing files', false)
    .option('--check', 'exit 1 if any change would be made (CI)', false)
    .option('--yes', 'bypass interactive prompts', false)
    .action(async (opts) => {
        const root = path.resolve(opts.path);
        const summary = {
            entryUpdated: '',
            sfcsScanned: 0,
            sfcsRewritten: 0,
            faPassthroughSites: 0,
            manualReviewItems: [] as { file: string; line: number; reason: string }[],
        };

        const entry = await locateEntry(root, opts.entry);
        if (!entry) {
            console.error(pc.red('No entrypoint found.'));
            console.error('Pass --entry <path-to-main.{js,ts}> to specify one.');
            process.exit(2);
        }

        const entryChanged = await transformEntry({ file: entry, dryRun: opts.dryRun, summary });
        if (entryChanged) summary.entryUpdated = path.relative(root, entry);

        const sfcResult = await transformSfcs({ root, dryRun: opts.dryRun, summary });
        summary.sfcsScanned = sfcResult.scanned;
        summary.sfcsRewritten = sfcResult.rewritten;

        await writeReport(root, summary);

        console.log('');
        console.log(pc.green(`✓ Entry file updated:           ${summary.entryUpdated || '(no change)'}`));
        console.log(pc.green(`✓ Vue files scanned:            ${summary.sfcsScanned}`));
        console.log(pc.green(`✓ Vue files rewritten:          ${summary.sfcsRewritten}`));
        console.log(pc.cyan(`ⓘ FA passthrough preserved:     ${summary.faPassthroughSites} site(s)`));
        console.log(pc.yellow(`⚠ Manual review needed:         ${summary.manualReviewItems.length} item(s)`));
        if (summary.manualReviewItems.length > 0) {
            console.log(pc.yellow('  See ./nb-vue-components-migration.md'));
        }

        if (opts.check && (entryChanged || sfcResult.rewritten > 0 || summary.manualReviewItems.length > 0)) {
            process.exit(1);
        }
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
