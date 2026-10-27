import { computed, normalizeClass, useAttrs, type ComputedRef } from 'vue';
import { useNbConfig } from './config';
import { baseLayer, liftLayers, mergeLayers, type NbClassValue } from './merge';
import { hydrateMotionAfterMount, isMotionLevel, resolveMotionLevel, type MotionLevel, type NbComponentMotion, type NbMotionClasses, type NbMotionTable } from './motion';
import type { NbComponentName, NbParts, NbVariantValue, UiProp } from './parts';

declare const process: { env: Record<string, string | undefined> };

/*
 * `process.env.NODE_ENV` rather than `import.meta.env.DEV`: Vite replaces the
 * latter when building the library, so the warnings would never reach an app.
 * The consumer's bundler replaces the whole expression, as with Vue's own
 * esm-bundler build, so it must stay written out in full. Without a bundler
 * and without `process` it throws, and the warnings stay off.
 */
const isDev = () => {
    try {
        return process.env.NODE_ENV !== 'production';
    } catch {
        return false;
    }
};

const warned = new Set<string>();

function warnOnce(component: string, prop: string, target: string) {
    const key = `${component}.${prop}`;
    if (warned.has(key) || !isDev() || typeof console === 'undefined') return;
    warned.add(key);
    console.warn(`[nb-vue-components] ${component}: \`${prop}\` is deprecated and will be removed in 5.0. Use ${target} instead.`);
}

/** A development-only warning, shown once per app however many instances trigger it. */
export function devWarnOnce(key: string, message: string): void {
    if (warned.has(key) || !isDev() || typeof console === 'undefined') return;
    warned.add(key);
    console.warn(`[nb-vue-components] ${message}`);
}

function warnDeprecated(component: string, prop: string, part: string, classPart: string) {
    warnOnce(component, prop, part === classPart ? '`class`' : `\`:ui="{ ${part}: '...' }"\``);
}

export interface UseUiOptions<P extends string> {
    /** Deprecated 3.x override props and the part each one now maps to. */
    aliases?: Record<string, P>;
    /** The part that receives the instance `class`. Default `'root'`. */
    classPart?: P;
    /** Deprecated non-class props and the prop that replaces each one. */
    renamed?: Record<string, string>;
}

type UiProps<P extends string> = { ui?: UiProp<P>; motion?: MotionLevel } & Record<string, any>;

export interface UseUiReturn<P extends string> {
    /** Classes for one part: library defaults, then app config, then aliases, `:ui` and (on the class part) `class`. */
    cls: (part: P, ...defaults: NbClassValue[]) => string;
    /** Attrs for the element that would have received fallthrough attrs, without `class`. */
    attrs: () => Record<string, unknown>;
    /** `data-nb-motion="off"` for elements rendered outside the root (portals). */
    motionAttrs: () => Record<string, string>;
    /** Only the instance's own classes for one part (`:ui`, deprecated props, `class`), for handing on to an inner component. */
    own: (part: P) => string;
    /**
     * Classes per part for one variant value. Built-in parts come back as written;
     * an app `variants` entry replaces them part by part, wrapped so `cls` puts it
     * in its own layer above the defaults. A plain string is the `mainPart`.
     */
    variant: <K extends string>(prop: string, builtIn: Record<string, NbVariantValue<K>>, value: string | undefined, mainPart?: K) => Partial<Record<K, NbClassValue>>;
    /** Effective motion level of this instance. */
    level: ComputedRef<MotionLevel>;
    /** Animation classes for one part and state at the current level. App config replaces the built-in table. */
    anim: (part: P, state: keyof NbMotionClasses, table: NbMotionTable<P>) => string;
}

/**
 * Shared class and motion plumbing for every component. Components using it set
 * `inheritAttrs: false` and bind `attrs()` themselves, so `class` can be merged
 * instead of appended.
 */
export function useUi<C extends NbComponentName>(name: C, props: UiProps<NbParts[C]>, options: UseUiOptions<NbParts[C]> = {}): UseUiReturn<NbParts[C]> {
    type P = NbParts[C];
    const config = useNbConfig();
    const rawAttrs = useAttrs();
    const classPart = options.classPart ?? ('root' as P);
    const aliases = options.aliases ?? {};

    hydrateMotionAfterMount();

    for (const [prop, part] of Object.entries(aliases)) {
        const value = props[prop];
        if (value !== undefined && value !== '' && !(Array.isArray(value) && !value.length)) warnDeprecated(name, prop, part as string, classPart as string);
    }
    for (const [prop, replacement] of Object.entries(options.renamed ?? {})) {
        if (props[prop] !== undefined) warnOnce(name, prop, `\`${replacement}\``);
    }

    const level = computed<MotionLevel>(() => {
        const instance = props.motion ?? (rawAttrs.motion as MotionLevel | undefined);
        return resolveMotionLevel(config.motion, name, isMotionLevel(instance) ? instance : null);
    });

    const instanceLayer = (part: P): NbClassValue[] => {
        const instance: NbClassValue[] = [];
        for (const [prop, target] of Object.entries(aliases)) {
            if (target === part) instance.push(props[prop]);
        }
        instance.push(props.ui?.[part]);
        if (part === classPart) instance.push(rawAttrs.class as NbClassValue);
        return instance;
    };

    /*
     * Layers, lowest first: library defaults, `baseLayer` classes (app variants,
     * a wrapper's defaults), app config, instance, then `stateLayer` classes.
     * With nothing above the defaults the state classes stay inline, so the
     * zero-config output is the defaults exactly as written.
     */
    const cls = (part: P, ...defaults: NbClassValue[]): string => {
        const house = (config.ui[name] as Partial<Record<P, string>> | undefined)?.[part];
        const below: NbClassValue[] = [];
        const above: NbClassValue[] = [];
        const instance = liftLayers(instanceLayer(part), below, above);
        const base = liftLayers(defaults, below, above);
        if (!normalizeClass([below, house, instance])) return mergeLayers(config.merge, liftLayers(defaults, [], null));
        return mergeLayers(config.merge, base, below, house, instance, above);
    };

    const own = (part: P): string => mergeLayers(config.merge, null, liftLayers(instanceLayer(part), [], null));

    /*
     * `off` is always marked, so theme.css can make transitions instant. Any
     * other level is only marked when it differs from the app-wide level, which
     * lets a component pinned above an `off` ancestor keep its transitions.
     */
    const appLevel = computed<MotionLevel>(() => resolveMotionLevel(config.motion, '', null));
    const motionAttrs = (): Record<string, string> => {
        if (level.value === 'off') return { 'data-nb-motion': 'off' };
        return level.value !== appLevel.value ? { 'data-nb-motion': level.value } : {};
    };

    const attrs = () => {
        const { class: _class, motion: _motion, ...rest } = rawAttrs;
        return { ...rest, ...motionAttrs() };
    };

    const variant = <K extends string>(prop: string, builtIn: Record<string, NbVariantValue<K>>, value: string | undefined, mainPart: K = 'root' as K) => {
        if (value === undefined) return {};
        const toParts = (picked: NbVariantValue<K> | undefined) =>
            picked === undefined ? undefined : typeof picked === 'string' ? ({ [mainPart]: picked } as Partial<Record<K, string>>) : picked;
        const builtInParts: Partial<Record<K, NbClassValue>> = toParts(builtIn[value]) ?? {};
        const custom = toParts((config.variants as Record<string, Record<string, Record<string, NbVariantValue<K>>> | undefined>)[name]?.[prop]?.[value]);
        if (!custom) return builtInParts;
        // App entries redefine part by part and sit in their own layer, so they win clashes with the defaults.
        const picked = { ...builtInParts };
        for (const [part, classes] of Object.entries(custom) as [K, string][]) picked[part] = baseLayer(classes);
        return picked;
    };

    const anim = (part: P, state: keyof NbMotionClasses, table: NbMotionTable<P>): string => {
        const current = level.value;
        if (current === 'off') return '';
        const override = (config.motion.components as Record<string, NbComponentMotion<P>> | undefined)?.[name]?.[current]?.[part]?.[state];
        if (override !== undefined) return override;
        return table[current]?.[part]?.[state] ?? '';
    };

    return { cls, own, attrs, motionAttrs, variant, level, anim };
}
