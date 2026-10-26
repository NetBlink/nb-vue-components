import { computed, getCurrentInstance, onMounted, ref, type ComputedRef, type Ref } from 'vue';
import type { NbComponentName, NbParts } from './parts';

/**
 * How much the library animates.
 *
 * - `off` - instant, nothing animates.
 * - `simple` - only motion that explains a change: height for collapsing content,
 *   short fades for things that appear or disappear. Quick durations.
 * - `smooth` (default) - enter and leave transitions everywhere, plus small morphs
 *   (sliding tab indicator, size changes).
 * - `fancy` - everything in smooth with more movement, plus the modal growing out
 *   of the element that opened it and lists reflowing smoothly.
 */
export type MotionLevel = 'off' | 'simple' | 'smooth' | 'fancy';

export const MOTION_LEVELS: readonly MotionLevel[] = ['off', 'simple', 'smooth', 'fancy'];

const RANK: Record<MotionLevel, number> = { off: 0, simple: 1, smooth: 2, fancy: 3 };

export const isMotionLevel = (value: unknown): value is MotionLevel => typeof value === 'string' && value in RANK;

export const lowerLevel = (a: MotionLevel, b: MotionLevel): MotionLevel => (RANK[a] <= RANK[b] ? a : b);

export const levelAtLeast = (level: MotionLevel, min: MotionLevel): boolean => RANK[level] >= RANK[min];

/** Animation classes one part uses for one state. They replace the library's, they don't merge. */
export interface NbMotionClasses {
    enter?: string;
    leave?: string;
    move?: string;
}

/** Per-level, per-part animation classes for one component. */
export type NbMotionTable<P extends string = string> = Partial<Record<Exclude<MotionLevel, 'off'>, Partial<Record<P, NbMotionClasses>>>>;

/** Motion config for one component: a pinned level and/or replacement classes per level and part. */
export type NbComponentMotion<P extends string = string> = NbMotionTable<P> & { level?: MotionLevel };

export interface NbMotionConfig {
    /** App-wide default level. Default `'smooth'`. */
    level?: MotionLevel;
    /** Pin a level or replace animation classes for single components. */
    components?: { [C in NbComponentName]?: NbComponentMotion<NbParts[C]> };
    /**
     * Cap motion at `simple` when the OS reports `prefers-reduced-motion: reduce`.
     * Default `true`. An explicit in-app choice via `useMotion().setLevel` always wins.
     */
    respectReducedMotion?: boolean;
    /** localStorage key for the end user's choice. `false` disables persistence. Default `'nb-vue-components:motion'`. */
    storageKey?: string | false;
}

const STORAGE_KEY_DEFAULT = 'nb-vue-components:motion';

/*
 * Module state, shared by every app on the page like useDarkMode's. Browser
 * APIs are only touched from `hydrateMotion`, which runs on the client after
 * the first mount, never at import time or during the first render. That keeps
 * a server-rendered page and its hydration on the same classes: the stored
 * choice and the OS preference apply from the next render on.
 */
const userLevel: Ref<MotionLevel | null> = ref(null);
const prefersReduced = ref(false);
const appMotion: Ref<NbMotionConfig> = ref({});
let storageKey: string | false = STORAGE_KEY_DEFAULT;
let hydrated = false;

const readStorage = (): MotionLevel | null => {
    if (storageKey === false || typeof window === 'undefined') return null;
    try {
        const raw = window.localStorage.getItem(storageKey);
        return isMotionLevel(raw) ? raw : null;
    } catch {
        return null;
    }
};

const writeStorage = (value: MotionLevel | null) => {
    if (storageKey === false || typeof window === 'undefined') return;
    try {
        if (value) window.localStorage.setItem(storageKey, value);
        else window.localStorage.removeItem(storageKey);
    } catch {
        // Ignore quota / disabled storage.
    }
};

/** Read the persisted choice and the reduced-motion preference. Client only, runs once. */
export function hydrateMotion(): void {
    if (hydrated || typeof window === 'undefined') return;
    hydrated = true;
    userLevel.value = readStorage();
    if (window.matchMedia) {
        const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
        prefersReduced.value = mql.matches;
        const onChange = (e: MediaQueryListEvent) => {
            prefersReduced.value = e.matches;
        };
        // Safari before 14 only has the older addListener.
        if (mql.addEventListener) mql.addEventListener('change', onChange);
        else mql.addListener?.(onChange);
    }
}

/** Called by the plugin install with the app's `motion` option. The plugin hydrates after mount. */
export function configureMotion(config: NbMotionConfig = {}): void {
    appMotion.value = config;
    if (config.storageKey !== undefined) storageKey = config.storageKey;
}

/** Hydrate once the calling component has mounted, or right away outside a component. */
export function hydrateMotionAfterMount(): void {
    if (hydrated) return;
    if (getCurrentInstance()) onMounted(hydrateMotion);
    else hydrateMotion();
}

/** The global level after the user's pick and the reduced-motion cap, before any component pin. */
const globalLevel = computed<MotionLevel>(() => {
    const config = appMotion.value;
    if (userLevel.value) return userLevel.value;
    const level = config.level ?? 'smooth';
    if (prefersReduced.value && config.respectReducedMotion !== false) return lowerLevel(level, 'simple');
    return level;
});

/**
 * Effective level for one component instance:
 * the app level (or the user's pick), then a component pin, then the instance
 * `motion` prop. The user's pick is a ceiling nothing can exceed, and OS reduced
 * motion caps at `simple` unless the user picked or the app opted out.
 */
export function resolveMotionLevel(config: NbMotionConfig, component: string, instance?: MotionLevel | null): MotionLevel {
    const pin = (config.components as Record<string, NbComponentMotion> | undefined)?.[component]?.level;
    let level: MotionLevel = userLevel.value ?? config.level ?? 'smooth';
    if (pin) level = pin;
    if (instance) level = instance;
    if (userLevel.value) return lowerLevel(level, userLevel.value);
    if (prefersReduced.value && config.respectReducedMotion !== false) return lowerLevel(level, 'simple');
    return level;
}

export interface UseMotionReturn {
    /** The global level in effect: the end user's pick, else the app default capped by reduced motion. */
    level: ComputedRef<MotionLevel>;
    /** The end user's explicit pick, or `null` when they haven't chosen. */
    userLevel: Readonly<Ref<MotionLevel | null>>;
    /** Set the end user's pick. It persists across reloads and is a ceiling for every component. */
    setLevel: (level: MotionLevel) => void;
    /** Forget the end user's pick and go back to the app default. */
    reset: () => void;
}

/**
 * Read or change the motion level at runtime, e.g. from a settings page.
 *
 * @example
 * ```ts
 * const { level, setLevel } = useMotion();
 * setLevel('simple');
 * ```
 */
export function useMotion(): UseMotionReturn {
    hydrateMotionAfterMount();
    return {
        level: globalLevel,
        userLevel,
        setLevel(level: MotionLevel) {
            hydrateMotion();
            userLevel.value = level;
            writeStorage(level);
        },
        reset() {
            hydrateMotion();
            userLevel.value = null;
            writeStorage(null);
        },
    };
}
