import type { App, Plugin } from 'vue';
import { defaultAliases } from './aliases';
import { NB_ICONS_KEY, setDefaultRegistry, type NbIconsRegistry } from './inject';
import type { AliasName, IconLike, NbIconsOptions } from './types';

function buildRegistry(options: NbIconsOptions): NbIconsRegistry {
    const aliases: Record<AliasName, IconLike> = {
        ...defaultAliases,
        ...(options.aliases ?? {}),
    } as Record<AliasName, IconLike>;

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
 * Vue plugin factory. Use:
 *
 * ```ts
 * import { createNbIcons } from '@netblink/vue-components/icons';
 * app.use(createNbIcons({ aliases: { $expand: MyChevron } }));
 * ```
 *
 * If no createNbIcons() is installed, components fall back to a zero-config
 * registry seeded with the built-in inline-SVG defaults.
 */
export function createNbIcons(options: NbIconsOptions = {}): Plugin {
    const reg = buildRegistry(options);
    setDefaultRegistry(reg); // also make this the global fallback
    return {
        install(app: App) {
            app.provide(NB_ICONS_KEY, reg);
        },
    };
}

// Auto-install a zero-config default the first time this module is evaluated,
// so consumers who never call createNbIcons() still get working icons.
setDefaultRegistry(buildRegistry({}));
