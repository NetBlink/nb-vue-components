import { spawnSync } from 'node:child_process';

/** True when `root` is inside a git repo with nothing uncommitted. A non-repo counts as dirty. */
export function isGitClean(root: string): boolean {
    const r = spawnSync('git', ['status', '--porcelain'], { cwd: root, encoding: 'utf8' });
    return r.status === 0 && r.stdout.trim() === '';
}
