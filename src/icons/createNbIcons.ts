import { shallowReactive, type App, type Plugin } from 'vue';
import { defaultAliases } from './aliases';
import { NB_ICONS_KEY, type NbIconsRegistry } from './inject';
import type { AliasName, IconLike, NbIconsOptions } from './types';

function buildRegistry(options: NbIconsOptions): NbIconsRegistry {
    // shallowReactive on the alias map: mutations to `aliases[$foo]` trigger
    // NbIcon re-renders, but the values themselves (Vue components, FA icon
    // defs) are stored as-is so they don't get wrapped in reactive proxies.
    const aliases = shallowReactive({
        ...defaultAliases,
        ...(options.aliases ?? {}),
    }) as Record<AliasName, IconLike>;

    const reg: NbIconsRegistry = {
        aliases,
        sets: { ...(options.sets ?? {}) },
        defaultSet: options.defaultSet,
        strict: options.strict ?? false,
        registerAlias(name, icon) {
            reg.aliases[name] = icon;
        },
    };
    return reg;
}

/**
 * Vue plugin factory. Mandatory - install before mounting:
 *
 * ```ts
 * import { createNbIcons } from '@netblink/vue-components/icons';
 * app.use(createNbIcons({ aliases: { $expand: MyChevron } }));
 * ```
 *
 * If you don't pass any options, components fall back to the inline-SVG
 * defaults shipped with the package.
 */
export function createNbIcons(options: NbIconsOptions = {}): Plugin {
    const reg = buildRegistry(options);
    return {
        install(app: App) {
            // `app.use(Componentsnb)` before this already provided a default registry;
            // re-providing makes Vue warn, so fill that one in place instead.
            // @ts-ignore - Vue's App type doesn't expose _context publicly.
            const existing: NbIconsRegistry | undefined = app._context?.provides?.[NB_ICONS_KEY as unknown as string];
            if (existing) {
                Object.assign(existing.aliases, reg.aliases);
                Object.assign(existing.sets, reg.sets);
                existing.defaultSet = reg.defaultSet;
                existing.strict = reg.strict;
            } else {
                app.provide(NB_ICONS_KEY, reg);
            }
            if (typeof console !== 'undefined' && (import.meta as any).env?.DEV) {
                console.info('[nb-vue-components] icon registry installed with sets:', Object.keys(reg.sets));
            }
        },
    };
}
