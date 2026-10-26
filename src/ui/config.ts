import { inject, type InjectionKey } from 'vue';
import { createMerge, getDefaultMerge, type NbMerge, type NbMergeExtension } from './merge';
import type { NbMotionConfig } from './motion';
import type { NbColorVariants, NbUiConfig, NbVariantsConfig } from './parts';

/** Badge options: which colour a `status` word gets. */
export interface NbBadgeOptions {
    /** Status word (case-insensitive) to Badge variant, merged over the built-in map. */
    statuses?: Record<string, keyof NbColorVariants | (string & {})>;
}

/** Styling and motion options accepted by `app.use(Componentsnb, { ... })`. */
export interface NbStyleOptions {
    /** House styles per component and part, merged over the library defaults. */
    ui?: NbUiConfig;
    /** New or redefined values for props that pick from a fixed class map (Button `theme`, Alert `type`, ...). */
    variants?: NbVariantsConfig;
    /** Motion level and per-component motion overrides. */
    motion?: NbMotionConfig;
    /** Extra `extendTailwindMerge` config, for tokens your app adds in its own `@theme`. */
    twMerge?: NbMergeExtension;
    /** Badge `status` colours, e.g. `{ statuses: { shipped: 'success' } }`. */
    badge?: NbBadgeOptions;
}

/** Internal: the resolved config components read. */
export interface NbConfig {
    ui: NbUiConfig;
    variants: NbVariantsConfig;
    motion: NbMotionConfig;
    merge: NbMerge;
    badge: NbBadgeOptions;
}

/** String key, for the same HMR reasons as the icon registry key. */
export const NB_CONFIG_KEY = 'nb-vue-components:config' as unknown as InjectionKey<NbConfig>;

export function createNbConfig(options: NbStyleOptions = {}): NbConfig {
    return {
        ui: options.ui ?? {},
        variants: options.variants ?? {},
        motion: options.motion ?? {},
        merge: options.twMerge ? createMerge(options.twMerge) : getDefaultMerge(),
        badge: options.badge ?? {},
    };
}

let fallback: NbConfig | null = null;

/** The config provided by the plugin, or an empty one when the plugin isn't installed. */
export function useNbConfig(): NbConfig {
    return inject(NB_CONFIG_KEY, null) ?? (fallback ??= createNbConfig());
}
