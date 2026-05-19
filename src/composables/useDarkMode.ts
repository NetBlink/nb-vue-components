import { ref, watch, onScopeDispose, type Ref } from 'vue';

/**
 * Dark-mode source-of-truth for an entire @netblink/vue-components app.
 *
 * The composable holds a single module-level `isDark` ref so every call site
 * (sidebars, settings panels, layout chrome…) sees the same state. Toggling it
 * adds/removes a `.dark` class on the configured element (defaults to
 * `document.documentElement`), which is what activates the `dark:` Tailwind
 * variant configured in `src/main.css`.
 *
 * Default behaviour: opt-in. Nothing happens until the host app calls
 * `enable()`, `toggle()`, `setupSystemPreference()`, or initialises the plugin
 * with `{ darkMode: 'system' | 'class' }`.
 */
export type DarkModeSource = 'manual' | 'system' | 'storage';

export interface UseDarkModeOptions {
    /** Element that receives the `.dark` class. Defaults to `document.documentElement`. */
    target?: HTMLElement;
    /** localStorage key for persistence. Pass `false` to disable. Default: `'nb-vue-components:dark'`. */
    storageKey?: string | false;
}

const STORAGE_KEY_DEFAULT = 'nb-vue-components:dark';

const isDark: Ref<boolean> = ref(false);
let configuredTarget: HTMLElement | null = null;
let configuredStorageKey: string | false = STORAGE_KEY_DEFAULT;
let systemMql: MediaQueryList | null = null;
let systemListener: ((e: MediaQueryListEvent) => void) | null = null;

const resolveTarget = (override?: HTMLElement): HTMLElement | null => {
    if (override) return override;
    if (configuredTarget) return configuredTarget;
    if (typeof document === 'undefined') return null;
    return document.documentElement;
};

const applyClass = (value: boolean) => {
    const el = resolveTarget();
    if (!el) return;
    el.classList.toggle('dark', value);
};

const writeStorage = (value: boolean) => {
    if (configuredStorageKey === false) return;
    if (typeof window === 'undefined') return;
    try {
        window.localStorage.setItem(configuredStorageKey, value ? '1' : '0');
    } catch {
        // Ignore quota / disabled storage.
    }
};

const readStorage = (): boolean | null => {
    if (configuredStorageKey === false) return null;
    if (typeof window === 'undefined') return null;
    try {
        const raw = window.localStorage.getItem(configuredStorageKey);
        if (raw === '1') return true;
        if (raw === '0') return false;
    } catch {
        // Ignore.
    }
    return null;
};

const stopSystemListener = () => {
    if (systemMql && systemListener) {
        systemMql.removeEventListener('change', systemListener);
    }
    systemMql = null;
    systemListener = null;
};

let watcherStopped = false;
// Single global watcher — keeps DOM + storage in sync with the ref.
watch(
    isDark,
    (value) => {
        if (watcherStopped) return;
        applyClass(value);
        writeStorage(value);
    },
    { immediate: false }
);

export interface UseDarkModeReturn {
    /** Reactive `true` when dark mode is on. */
    isDark: Ref<boolean>;
    /** Turn dark mode on. */
    enable: () => void;
    /** Turn dark mode off. */
    disable: () => void;
    /** Flip the current state. */
    toggle: () => void;
    /** Set the state explicitly. */
    set: (value: boolean) => void;
    /**
     * Read the user's OS-level `prefers-color-scheme` and keep `isDark` in sync.
     * Returns a stop function (also auto-cleaned-up when the calling Vue scope is disposed).
     */
    setupSystemPreference: () => () => void;
    /**
     * Hydrate from previously-persisted value, falling back to system preference,
     * falling back to the supplied default. Call once at app boot.
     */
    initialize: (defaultValue?: boolean) => void;
    /** Stop syncing OS-level preference (if `setupSystemPreference` was called). */
    teardownSystemPreference: () => void;
}

/**
 * Access the shared dark-mode state.
 *
 * @example
 * ```ts
 * const { isDark, toggle } = useDarkMode();
 * ```
 */
export function useDarkMode(options: UseDarkModeOptions = {}): UseDarkModeReturn {
    if (options.target !== undefined) configuredTarget = options.target;
    if (options.storageKey !== undefined) configuredStorageKey = options.storageKey;

    const set = (value: boolean) => {
        isDark.value = value;
    };
    const enable = () => set(true);
    const disable = () => set(false);
    const toggle = () => set(!isDark.value);

    const setupSystemPreference = () => {
        if (typeof window === 'undefined' || !window.matchMedia) {
            return () => undefined;
        }
        stopSystemListener();
        systemMql = window.matchMedia('(prefers-color-scheme: dark)');
        // Only seed from system if there's no explicit user choice persisted.
        if (readStorage() === null) {
            set(systemMql.matches);
        }
        systemListener = (e) => {
            if (readStorage() === null) {
                set(e.matches);
            }
        };
        systemMql.addEventListener('change', systemListener);
        try {
            onScopeDispose(stopSystemListener);
        } catch {
            // outside of a Vue effect scope — caller can use the returned stop function.
        }
        return stopSystemListener;
    };

    const initialize = (defaultValue = false) => {
        const stored = readStorage();
        if (stored !== null) {
            set(stored);
            return;
        }
        if (typeof window !== 'undefined' && window.matchMedia) {
            const mql = window.matchMedia('(prefers-color-scheme: dark)');
            set(mql.matches || defaultValue);
            return;
        }
        set(defaultValue);
    };

    return {
        isDark,
        enable,
        disable,
        toggle,
        set,
        setupSystemPreference,
        teardownSystemPreference: stopSystemListener,
        initialize,
    };
}
