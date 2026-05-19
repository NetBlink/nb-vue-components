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

export const NB_ICONS_KEY: InjectionKey<NbIconsRegistry> = Symbol('nb-icons');

/** Fallback registry — used when no createNbIcons() plugin is installed. */
let defaultRegistry: NbIconsRegistry | null = null;
export function setDefaultRegistry(reg: NbIconsRegistry): void {
    defaultRegistry = reg;
}
export function getDefaultRegistry(): NbIconsRegistry | null {
    return defaultRegistry;
}

/** Public composable. Resolves either the injected registry or the auto-default. */
export function useNbIcons(): NbIconsRegistry {
    const injected = inject(NB_ICONS_KEY, null);
    if (injected) return injected;
    if (defaultRegistry) return defaultRegistry;
    throw new Error(
        '[nb-vue-components] icon registry missing. Either call app.use(createNbIcons()) ' +
        'or import "@netblink/vue-components/icons" once at app boot to load defaults.'
    );
}
