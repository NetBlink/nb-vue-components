import { computed, useAttrs, type ComputedRef } from 'vue';
import { useNbConfig } from './config';
import { mergeLayers, type NbClassValue } from './merge';
import { hydrateMotion, isMotionLevel, resolveMotionLevel, type MotionLevel, type NbComponentMotion, type NbMotionClasses, type NbMotionTable } from './motion';
import type { NbComponentName, NbParts, NbVariantValue, UiProp } from './parts';

declare const process: { env: Record<string, string | undefined> };

/*
 * `process.env.NODE_ENV` rather than `import.meta.env.DEV`: Vite replaces the
 * latter when building the library, so the warnings would never reach an app.
 * The consumer's bundler replaces this one.
 */
const isDev = () => typeof process !== 'undefined' && process.env.NODE_ENV !== 'production';

const warned = new Set<string>();

function warnDeprecated(component: string, prop: string, part: string) {
    const key = `${component}.${prop}`;
    if (warned.has(key) || !isDev() || typeof console === 'undefined') return;
    warned.add(key);
    const target = part === 'root' ? '`class`' : `\`:ui="{ ${part}: '...' }"\``;
    console.warn(`[nb-vue-components] ${component}: \`${prop}\` is deprecated and will be removed in 5.0. Use ${target} instead.`);
}

export interface UseUiOptions<P extends string> {
    /** Deprecated 3.x override props and the part each one now maps to. */
    aliases?: Record<string, P>;
    /** The part that receives the instance `class`. Default `'root'`. */
    classPart?: P;
}

type UiProps<P extends string> = { ui?: UiProp<P>; motion?: MotionLevel } & Record<string, any>;

export interface UseUiReturn<P extends string> {
    /** Classes for one part: library defaults, then app config, then aliases, `:ui` and (on the class part) `class`. */
    cls: (part: P, ...defaults: NbClassValue[]) => string;
    /** Attrs for the element that would have received fallthrough attrs, without `class`. */
    attrs: () => Record<string, unknown>;
    /** `data-nb-motion="off"` for elements rendered outside the root (portals). */
    motionAttrs: () => Record<string, string | undefined>;
    /** A variant value from the app config, falling back to the built-in map. Normalised to classes per part. */
    variant: <K extends string>(prop: string, builtIn: Record<string, NbVariantValue<K>>, value: string | undefined, mainPart?: K) => Partial<Record<K, string>>;
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

    hydrateMotion();

    for (const [prop, part] of Object.entries(aliases)) {
        const value = props[prop];
        if (value !== undefined && value !== '' && !(Array.isArray(value) && !value.length)) warnDeprecated(name, prop, part as string);
    }

    const level = computed<MotionLevel>(() => {
        const instance = props.motion ?? (rawAttrs.motion as MotionLevel | undefined);
        return resolveMotionLevel(config.motion, name, isMotionLevel(instance) ? instance : null);
    });

    const cls = (part: P, ...defaults: NbClassValue[]): string => {
        const house = (config.ui[name] as Partial<Record<P, string>> | undefined)?.[part];
        const instance: NbClassValue[] = [];
        for (const [prop, target] of Object.entries(aliases)) {
            if (target === part) instance.push(props[prop]);
        }
        instance.push(props.ui?.[part]);
        if (part === classPart) instance.push(rawAttrs.class as NbClassValue);
        return mergeLayers(config.merge, defaults, house, instance);
    };

    const motionAttrs = () => ({ 'data-nb-motion': level.value === 'off' ? 'off' : undefined });

    const attrs = () => {
        const { class: _class, motion: _motion, ...rest } = rawAttrs;
        return { ...rest, ...motionAttrs() };
    };

    const variant = <K extends string>(prop: string, builtIn: Record<string, NbVariantValue<K>>, value: string | undefined, mainPart: K = 'root' as K) => {
        if (value === undefined) return {};
        const custom = (config.variants as Record<string, Record<string, Record<string, NbVariantValue<K>>> | undefined>)[name]?.[prop]?.[value];
        const picked = custom ?? builtIn[value];
        if (picked === undefined) return {};
        return typeof picked === 'string' ? ({ [mainPart]: picked } as Partial<Record<K, string>>) : picked;
    };

    const anim = (part: P, state: keyof NbMotionClasses, table: NbMotionTable<P>): string => {
        const current = level.value;
        if (current === 'off') return '';
        const override = (config.motion.components as Record<string, NbComponentMotion<P>> | undefined)?.[name]?.[current]?.[part]?.[state];
        if (override !== undefined) return override;
        return table[current]?.[part]?.[state] ?? '';
    };

    return { cls, attrs, motionAttrs, variant, level, anim };
}
