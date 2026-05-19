import { inject, type InjectionKey } from 'vue';
import type { AliasName, IconLike, IconSet } from './types';

/** Internal registry shape — built by createNbIcons, consumed by NbIcon. */
export interface NbIconsRegistry {
    aliases: Record<AliasName, IconLike>;
    sets: Record<string, IconSet>;
    defaultSet: string | undefined;
    strict: boolean;
    registerAlias(name: AliasName, icon: IconLike): void;
}

/**
 * String key (not Symbol) — keeps provide/inject identity stable across HMR
 * reloads and any edge case where the module could be evaluated twice.
 * Cast through `unknown` so consumers still get strong typing on `inject(NB_ICONS_KEY)`.
 */
export const NB_ICONS_KEY = 'nb-vue-components:icon-registry' as unknown as InjectionKey<NbIconsRegistry>;

/**
 * Returns the icon registry provided by `createNbIcons()`. Throws a clear
 * error if no plugin has been installed — there is no silent fallback.
 */
export function useNbIcons(): NbIconsRegistry {
    const reg = inject(NB_ICONS_KEY, null);
    if (!reg) {
        throw new Error(
            '[nb-vue-components] No icon registry found. Call ' +
            '`app.use(createNbIcons({ ... }))` before mounting — or ' +
            '`app.use(NbVueComponents)` which auto-installs a default registry.'
        );
    }
    return reg;
}
