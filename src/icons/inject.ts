import { inject, shallowReactive, type InjectionKey } from 'vue';
import { defaultAliases } from './aliases';
import type { AliasName, IconLike, IconSet } from './types';

/** Internal registry shape - built by createNbIcons, consumed by NbIcon. */
export interface NbIconsRegistry {
    aliases: Record<AliasName, IconLike>;
    sets: Record<string, IconSet>;
    defaultSet: string | undefined;
    strict: boolean;
    registerAlias(name: AliasName, icon: IconLike): void;
}

/**
 * String key (not Symbol) - keeps provide/inject identity stable across HMR
 * reloads and any edge case where the module could be evaluated twice.
 * Cast through `unknown` so consumers still get strong typing on `inject(NB_ICONS_KEY)`.
 */
export const NB_ICONS_KEY = 'nb-vue-components:icon-registry' as unknown as InjectionKey<NbIconsRegistry>;

let warned = false;

function buildSoftFallback(): NbIconsRegistry {
    const aliases = shallowReactive({ ...defaultAliases }) as Record<AliasName, IconLike>;
    const reg: NbIconsRegistry = {
        aliases,
        sets: {},
        defaultSet: undefined,
        strict: false,
        registerAlias(name, icon) {
            reg.aliases[name] = icon;
        },
    };
    return reg;
}

/**
 * Returns the icon registry provided by `createNbIcons()`.
 *
 * If no plugin has been installed (or Vue's inject can't find it for any
 * reason), we warn ONCE in dev and return a minimal fallback registry -
 * NbIcon renders the shipped inline-SVG defaults so the page doesn't crash.
 */
export function useNbIcons(): NbIconsRegistry {
    const reg = inject(NB_ICONS_KEY, null);
    if (reg) return reg;

    if (!warned) {
        warned = true;
        if (typeof console !== 'undefined') {
            console.warn(
                '[nb-vue-components] No icon registry was provided to this Vue app. ' +
                'Falling back to shipped inline-SVG defaults. To wire up a specific provider, ' +
                'call `app.use(createNbIcons({ ... }))` (or `app.use(NbVueComponents)` which ' +
                'auto-installs the defaults) before mounting.'
            );
        }
    }
    return buildSoftFallback();
}
