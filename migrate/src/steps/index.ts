import type { Step } from './types.js';
import { v1ToV2 } from './v1-to-v2.js';
import { v2Patch } from './v2-patch.js';

/** Sorted by `to`. A library release with a breaking change adds its step here. */
export const STEPS: Step[] = [v1ToV2, v2Patch];

export const LATEST = '3.2.1';
