// Runs every fixture in fixtures/ (or the one named in argv[2]) through the real CLI.
// A fixture is before/ (the app), after/ (the expected tree, defaults to before/),
// args.json (extra CLI args, default ["--yes"]) and expect.json
// ({ exitCode, stdoutIncludes, dirty }). The CLI runs with the fixture dir as cwd,
// so `--choices choices.json` resolves next to args.json.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createTwoFilesPatch } from 'diff';

const migrateDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const fixturesDir = path.join(migrateDir, 'fixtures');
const cli = path.join(migrateDir, 'dist', 'cli.js');
const DIRTY_LINE = '\n';

const only = process.argv[2];
const names = fs
    .readdirSync(fixturesDir)
    .filter((n) => fs.existsSync(path.join(fixturesDir, n, 'before')))
    .filter((n) => !only || n === only)
    .sort();

if (names.length === 0) {
    console.log(`no fixtures found${only ? ` named ${only}` : ''}`);
    process.exit(1);
}

function readJson(file, fallback) {
    return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : fallback;
}

function tree(dir) {
    const out = {};
    if (!fs.existsSync(dir)) return out;
    for (const entry of fs.readdirSync(dir, { recursive: true, withFileTypes: true })) {
        if (!entry.isFile()) continue;
        const full = path.join(entry.parentPath ?? entry.path, entry.name);
        const rel = path.relative(dir, full).split(path.sep).join('/');
        if (rel === '.git' || rel.startsWith('.git/')) continue;
        out[rel] = fs.readFileSync(full, 'utf8');
    }
    return out;
}

function git(cwd, args) {
    const r = spawnSync('git', ['-c', 'user.name=fixtures', '-c', 'user.email=fixtures@example.com', ...args], { cwd, encoding: 'utf8' });
    if (r.status !== 0) throw new Error(`git ${args.join(' ')} failed: ${r.stderr}`);
}

let failed = 0;
for (const name of names) {
    const dir = path.join(fixturesDir, name);
    const args = readJson(path.join(dir, 'args.json'), ['--yes']);
    const expect = { exitCode: 0, stdoutIncludes: [], dirty: false, ...readJson(path.join(dir, 'expect.json'), {}) };

    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), `nb-migrate-${name}-`));
    fs.cpSync(path.join(dir, 'before'), tmp, { recursive: true });
    git(tmp, ['init', '-q']);
    git(tmp, ['add', '-A']);
    git(tmp, ['commit', '-q', '-m', 'before']);
    if (expect.dirty) fs.appendFileSync(path.join(tmp, 'package.json'), DIRTY_LINE);

    const run = spawnSync('node', [cli, '--path', tmp, ...args], { cwd: dir, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    const stdout = run.stdout ?? '';
    const problems = [];

    if (run.status !== expect.exitCode) problems.push(`exit code ${run.status}, expected ${expect.exitCode}`);
    for (const s of expect.stdoutIncludes) {
        if (!stdout.includes(s)) problems.push(`stdout does not include ${JSON.stringify(s)}`);
    }

    const hasAfter = fs.existsSync(path.join(dir, 'after'));
    const expected = tree(path.join(dir, hasAfter ? 'after' : 'before'));
    if (expect.dirty && !hasAfter) expected['package.json'] += DIRTY_LINE;
    const actual = tree(tmp);
    const files = [...new Set([...Object.keys(expected), ...Object.keys(actual)])].sort();
    const differing = files.find((f) => expected[f] !== actual[f]);
    if (differing) {
        problems.push(
            'tree differs:\n' +
                createTwoFilesPatch(`expected/${differing}`, `actual/${differing}`, expected[differing] ?? '', actual[differing] ?? ''),
        );
    }

    if (problems.length === 0) {
        console.log(`PASS ${name}`);
        fs.rmSync(tmp, { recursive: true, force: true });
    } else {
        failed++;
        console.log(`FAIL ${name}`);
        for (const p of problems) console.log('  ' + p.replace(/\n/g, '\n  '));
        if (stdout.trim()) console.log('  stdout:\n    ' + stdout.trim().replace(/\n/g, '\n    '));
        if (run.stderr?.trim()) console.log('  stderr:\n    ' + run.stderr.trim().replace(/\n/g, '\n    '));
        console.log(`  temp tree kept at ${tmp}`);
    }
}

console.log(`\n${names.length - failed} PASS / ${failed} FAIL`);
process.exit(failed ? 1 : 0);
