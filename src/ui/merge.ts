import { extendTailwindMerge, mergeConfigs, type ConfigExtension } from 'tailwind-merge';
import { normalizeClass } from 'vue';

/** Anything Vue's `:class` accepts: strings, arrays and `{ class: condition }` objects. */
export type NbClassValue = string | Record<string, any> | NbClassValue[] | null | undefined | false;

/** Extra `extendTailwindMerge` config for tokens an app adds in its own `@theme`. */
export type NbMergeExtension = ConfigExtension<string, string>;

/*
 * tailwind-merge only resolves conflicts between classes it understands. These
 * are the tokens theme.css adds on top of stock Tailwind: without them
 * `text-xxs` reads as a text colour and silently removes `text-white`, and
 * `bg-dotted` reads as a background colour.
 */
const ANIMATIONS = [
    'fade-in',
    'fade-in-quick',
    'fade-out',
    'slide-up',
    'slide-down',
    'slide-up-quick',
    'slide-down-quick',
    'slide-up-spring',
    'slide-down-spring',
    'slide-up-fade',
    'slide-down-fade',
    'slide-left-fade',
    'slide-right-fade',
    'slide-down-fade-out',
    'toast-in-right',
    'toast-in-left',
    'toast-in-top',
    'toast-in-bottom',
    'toast-scale-in',
    'toast-spring-right',
    'toast-spring-left',
    'toast-spring-top',
    'toast-spring-bottom',
    'pop-in',
    'zoom-in',
    'zoom-out',
    'grow-from-origin',
    'shrink-to-origin',
    'check-pop',
];

const LIBRARY_EXTENSION: NbMergeExtension = {
    extend: {
        theme: {
            text: ['xxs'],
            breakpoint: ['xxs', 'xs', 'laptop', '3xl'],
            color: ['primary', 'accent', 'danger', 'warning', 'success', 'info', 'dark', 'muted'],
            animate: ANIMATIONS,
            ease: ['emphasised', 'spring'],
            font: ['opensans'],
        },
        classGroups: {
            gutters: ['gutters'],
            'no-spinners': ['no-spinners'],
            'bg-dotted': ['bg-dotted'],
        },
        conflictingClassGroups: {
            p: ['gutters'],
            px: ['gutters'],
            gutters: ['px', 'pl', 'pr', 'ps', 'pe'],
        },
    },
};

export type NbMerge = (...classes: string[]) => string;

/** Builds the merge function for one app: the library tokens, then the app's own. */
export function createMerge(extension?: NbMergeExtension): NbMerge {
    return extension ? extendTailwindMerge(LIBRARY_EXTENSION, (config) => mergeConfigs(config, extension)) : extendTailwindMerge(LIBRARY_EXTENSION);
}

let defaultMerge: NbMerge | null = null;

/** The library-configured merger, used when no plugin config is installed. */
export function getDefaultMerge(): NbMerge {
    return (defaultMerge ??= createMerge());
}

const split = (value: string) => value.split(/\s+/).filter(Boolean);

/**
 * Merge class layers, lowest precedence first. A class in a later layer removes
 * the clashing classes of every earlier layer; classes that do not clash stay.
 *
 * Conflicts inside the first layer (the library defaults) are deliberately not
 * resolved. Some defaults carry two classes for one property on purpose and
 * rely on CSS order (Td pairs `px-6` with a responsive `px-4 sm:px-6`), so
 * running them through tailwind-merge on their own would change the look.
 * With no later layers the defaults come back exactly as written.
 */
export function mergeLayers(merge: NbMerge, base: NbClassValue, ...layers: NbClassValue[]): string {
    const defaults = normalizeClass(base);
    const overrides = layers.map((layer) => normalizeClass(layer)).filter(Boolean);
    if (!overrides.length) return defaults;

    const top = merge(...overrides);
    if (!defaults) return top;

    const merged = new Set(split(merge(defaults, top)));
    const resolvedAlone = new Set(split(merge(defaults)));
    const kept = split(defaults).filter((cls) => {
        if (merged.has(cls)) return true;
        // Dropped by its own siblings rather than by an override: keep it,
        // unless an override clashes with it too.
        if (resolvedAlone.has(cls)) return false;
        return split(merge(cls, top)).includes(cls);
    });
    const keptSet = new Set(kept);
    const added = split(top).filter((cls) => merged.has(cls) && !keptSet.has(cls));
    return [...kept, ...added].join(' ');
}
