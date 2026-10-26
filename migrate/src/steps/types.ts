import type { FileStore } from '../files.js';
import type { Report } from '../report.js';
import type { Chooser } from '../choices.js';

export interface Step {
    id: string;
    /** Library version after this step. */
    to: string;
    requiresTailwind?: 4;
    run(ctx: StepContext): Promise<void>;
}

export interface StepContext {
    root: string;
    /** Version detected before any step ran. */
    installed: string;
    /** Final version of this run. */
    target: string;
    entry: string | null;
    files: FileStore;
    report: Report;
    choose: Chooser['choose'];
}
