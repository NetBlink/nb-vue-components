import type { Step } from './types.js';
import { v1ToV2 } from './v1-to-v2.js';

/** Sorted by `to`. A library release with a breaking change adds its step here. */
export const STEPS: Step[] = [v1ToV2];

export const LATEST = '3.2.1';
