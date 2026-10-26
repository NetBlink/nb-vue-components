import type { Step } from './types.js';
import { v1ToV2 } from './v1-to-v2.js';
import { v2Patch } from './v2-patch.js';
import { v2ToV3 } from './v2-to-v3.js';
import { v3ToV32 } from './v3-to-v3-2.js';
import { v3ToV4 } from './v3-to-v4.js';

/** Sorted by `to`. A library release with a breaking change adds its step here. */
export const STEPS: Step[] = [v1ToV2, v2Patch, v2ToV3, v3ToV32, v3ToV4];

export const LATEST = '4.0.0-beta.0';
