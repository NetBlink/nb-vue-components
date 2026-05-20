import { reactive, computed, watch, ref, toRaw } from 'vue';
import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';

extend([mixPlugin]);

/**
 * Theme-builder state - covers every token in the package's `@theme` block in
 * main.css (Tailwind v4 CSS-first). Live edits inject matching CSS variables
 * onto <html> so the entire docs site (every utility class that compiles to
 * `var(--color-foo-500)`) updates instantly. Output is copyable as a v4 `@theme {}` CSS block.
 *
 * Persists to localStorage so reloads keep the user's edits.
 *
 * Docs-app-only composable (lives under src/docs/) - not exported from the
 * package itself.
 */

export type ColorName = 'primary' | 'accent' | 'danger' | 'warning' | 'success' | 'info';

export const COLOR_ANCHOR_SHADE = 500;

const COLOR_SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
type Shade = typeof COLOR_SHADES[number];

const STORAGE_KEY = 'nb-vue-components:theme-builder';

/** Defaults - mirror @theme in main.css exactly. */
const COLOR_DEFAULTS: Record<ColorName, Record<Shade, string>> = {
    primary: { 50: '#f4f9fb', 100: '#e9f2f5', 200: '#cee5e9', 300: '#aad3d9', 400: '#72b6be', 500: '#509da7', 600: '#3d808c', 700: '#326772', 800: '#2d585f', 900: '#294a51', 950: '#1b3036' },
    accent:  { 50: '#fbf5f6', 100: '#f7ecef', 200: '#f0dbe1', 300: '#e1b8c3', 400: '#d399a9', 500: '#c0738b', 600: '#a95574', 700: '#8c445f', 800: '#763b54', 900: '#66354b', 950: '#381926' },
    danger:  { 50: '#fef2f2', 100: '#fde3e3', 200: '#fdcbcb', 300: '#faa7a7', 400: '#f36262', 500: '#ea4949', 600: '#d72b2b', 700: '#b52020', 800: '#961e1e', 900: '#7c2020', 950: '#430c0c' },
    warning: { 50: '#fefaec', 100: '#fbf0ca', 200: '#f7e190', 300: '#f3cf62', 400: '#efb730', 500: '#e89818', 600: '#cd7312', 700: '#aa5213', 800: '#8b4015', 900: '#723615', 950: '#411a07' },
    success: { 50: '#eefee7', 100: '#d9fccb', 200: '#b5fa9c', 300: '#87f362', 400: '#5fe734', 500: '#3ecd15', 600: '#2ba40c', 700: '#237d0e', 800: '#206311', 900: '#1e5314', 950: '#0a2e05' },
    info:    { 50: '#eef2ff', 100: '#e0e6ff', 200: '#c6d1ff', 300: '#a4b1fd', 400: '#7f88fa', 500: '#6262f3', 600: '#5044e7', 700: '#4436cc', 800: '#392ea5', 900: '#322d82', 950: '#1e1a4c' },
};

/** DEFAULT shade per color (Tailwind exposes plain `--color-<name>`). */
const COLOR_DEFAULT_SHADE: Record<ColorName, Shade> = {
    primary: 300, accent: 300, danger: 400, warning: 300, success: 300, info: 500,
};

/**
 * Generate an 11-shade scale anchored at `500` from a single hex input.
 * mirrors uicolors.app's approach. Lighter shades mix toward white; darker
 * shades mix toward black. The anchor shade always equals the input exactly.
 */
export function generateScale(baseHex: string): Record<Shade, string> {
    const c = colord(baseHex);
    return {
        50:  c.mix('#ffffff', 0.92).toHex(),
        100: c.mix('#ffffff', 0.82).toHex(),
        200: c.mix('#ffffff', 0.62).toHex(),
        300: c.mix('#ffffff', 0.42).toHex(),
        400: c.mix('#ffffff', 0.20).toHex(),
        500: c.toHex(),
        600: c.mix('#000000', 0.15).toHex(),
        700: c.mix('#000000', 0.30).toHex(),
        800: c.mix('#000000', 0.45).toHex(),
        900: c.mix('#000000', 0.58).toHex(),
        950: c.mix('#000000', 0.75).toHex(),
    };
}

interface ThemeState {
    colors: Record<ColorName, Record<Shade, string>>;
    dark: string;
    muted: string;
    fontSans: string;
    fontSerif: string;
    fontSize: { base: string; lg: string; xl: string; '2xl': string };
    radius: { sm: string; default: string; md: string; lg: string };
    shadow: string;
    screens: { sm: string; md: string; lg: string; xl: string; '2xl': string };
    motion: {
        easing: string;
        durationQuick: string;
        durationBase: string;
    };
}

const DEFAULTS: ThemeState = {
    colors: structuredClone(COLOR_DEFAULTS),
    dark:   '#161b1c',
    muted:  '#a0a0a0',
    fontSans:  'Poppins',
    fontSerif: 'Open Sans',
    fontSize:  { base: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem' },
    radius:    { sm: '0.125rem', default: '0.25rem', md: '0.375rem', lg: '0.5rem' },
    shadow:    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    screens:   { sm: '640px', md: '768px', lg: '1024px', xl: '1084px', '2xl': '1084px' },
    motion: {
        easing:        'cubic-bezier(0.16, 1, 0.3, 1)',
        durationQuick: '150ms',
        durationBase:  '400ms',
    },
};

function loadFromStorage(): ThemeState {
    if (typeof localStorage === 'undefined') return structuredClone(DEFAULTS);
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return structuredClone(DEFAULTS);
        const parsed = JSON.parse(raw);
        // Shallow merge against defaults so a corrupt/partial entry doesn't crash.
        return {
            ...structuredClone(DEFAULTS),
            ...parsed,
            colors: { ...structuredClone(DEFAULTS.colors), ...(parsed.colors ?? {}) },
            fontSize: { ...DEFAULTS.fontSize, ...(parsed.fontSize ?? {}) },
            radius: { ...DEFAULTS.radius, ...(parsed.radius ?? {}) },
            screens: { ...DEFAULTS.screens, ...(parsed.screens ?? {}) },
            motion:  { ...DEFAULTS.motion,  ...(parsed.motion  ?? {}) },
        };
    } catch {
        return structuredClone(DEFAULTS);
    }
}

const state = reactive<ThemeState>(loadFromStorage());
const isModalOpen = ref(false);

/** Apply current state to the live <html> element via CSS variables. */
function applyToDocument(): void {
    if (typeof document === 'undefined') return;
    const root = document.documentElement.style;

    (Object.keys(state.colors) as ColorName[]).forEach((name) => {
        const scale = state.colors[name];
        COLOR_SHADES.forEach((shade) => {
            root.setProperty(`--color-${name}-${shade}`, scale[shade]);
        });
        root.setProperty(`--color-${name}`, scale[COLOR_DEFAULT_SHADE[name]]);
    });

    root.setProperty('--color-dark',  state.dark);
    root.setProperty('--color-muted', state.muted);

    root.setProperty('--font-sans',     `"${state.fontSans}", ui-sans-serif, system-ui, sans-serif`);
    root.setProperty('--font-opensans', `"${state.fontSerif}", ui-sans-serif, system-ui, sans-serif`);

    root.setProperty('--text-base', state.fontSize.base);
    root.setProperty('--text-lg',   state.fontSize.lg);
    root.setProperty('--text-xl',   state.fontSize.xl);
    root.setProperty('--text-2xl',  state.fontSize['2xl']);

    root.setProperty('--radius-sm', state.radius.sm);
    root.setProperty('--radius',    state.radius.default);
    root.setProperty('--radius-md', state.radius.md);
    root.setProperty('--radius-lg', state.radius.lg);

    root.setProperty('--shadow', state.shadow);

    root.setProperty('--breakpoint-sm',  state.screens.sm);
    root.setProperty('--breakpoint-md',  state.screens.md);
    root.setProperty('--breakpoint-lg',  state.screens.lg);
    root.setProperty('--breakpoint-xl',  state.screens.xl);
    root.setProperty('--breakpoint-2xl', state.screens['2xl']);

    root.setProperty('--ease-emphasised', state.motion.easing);
    root.setProperty('--duration-quick',  state.motion.durationQuick);
    root.setProperty('--duration-base',   state.motion.durationBase);
}

function persistToStorage(): void {
    if (typeof localStorage === 'undefined') return;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(toRaw(state)));
    } catch {
        /* quota / private mode - silently skip */
    }
}

watch(state, () => {
    applyToDocument();
    persistToStorage();
}, { deep: true, immediate: true });

function setColorAnchor(name: ColorName, hex: string): void {
    if (!colord(hex).isValid()) return;
    state.colors[name] = generateScale(hex);
}

function setColorShade(name: ColorName, shade: Shade, hex: string): void {
    if (!colord(hex).isValid()) return;
    state.colors[name][shade] = hex;
}

function resetAll(): void {
    Object.assign(state, structuredClone(DEFAULTS));
    if (typeof localStorage !== 'undefined') localStorage.removeItem(STORAGE_KEY);
}

function resetColor(name: ColorName): void {
    state.colors[name] = structuredClone(COLOR_DEFAULTS[name]);
}

// ============================================================================
// Output formats
// ============================================================================

/** Tailwind v4 - single `@theme {}` block of CSS custom properties. */
const v4Snippet = computed<string>(() => {
    const lines: string[] = ['/* app.css */', "@import 'tailwindcss';", '', '@theme {'];

    lines.push('    /* Motion */');
    lines.push(`    --ease-emphasised: ${state.motion.easing};`);
    lines.push(`    --duration-quick:  ${state.motion.durationQuick};`);
    lines.push(`    --duration-base:   ${state.motion.durationBase};`);
    lines.push('');

    lines.push('    /* Plain colors */');
    lines.push(`    --color-dark:  ${state.dark};`);
    lines.push(`    --color-muted: ${state.muted};`);
    lines.push('');

    (Object.keys(state.colors) as ColorName[]).forEach((name) => {
        const scale = state.colors[name];
        lines.push(`    /* ${name[0].toUpperCase() + name.slice(1)} */`);
        lines.push(`    --color-${name}:     ${scale[COLOR_DEFAULT_SHADE[name]]};`);
        COLOR_SHADES.forEach((sh) => {
            lines.push(`    --color-${name}-${sh}: ${scale[sh]};`);
        });
        lines.push('');
    });

    lines.push('    /* Typography */');
    lines.push(`    --font-sans:     '${state.fontSans}', ui-sans-serif, system-ui, sans-serif;`);
    lines.push(`    --font-opensans: '${state.fontSerif}', ui-sans-serif, system-ui, sans-serif;`);
    lines.push(`    --text-base: ${state.fontSize.base};`);
    lines.push(`    --text-lg:   ${state.fontSize.lg};`);
    lines.push(`    --text-xl:   ${state.fontSize.xl};`);
    lines.push(`    --text-2xl:  ${state.fontSize['2xl']};`);
    lines.push('');

    lines.push('    /* Radius */');
    lines.push(`    --radius:    ${state.radius.default};`);
    lines.push(`    --radius-sm: ${state.radius.sm};`);
    lines.push(`    --radius-md: ${state.radius.md};`);
    lines.push(`    --radius-lg: ${state.radius.lg};`);
    lines.push('');

    lines.push('    /* Shadow */');
    lines.push(`    --shadow: ${state.shadow};`);
    lines.push('');

    lines.push('    /* Breakpoints */');
    lines.push(`    --breakpoint-sm:  ${state.screens.sm};`);
    lines.push(`    --breakpoint-md:  ${state.screens.md};`);
    lines.push(`    --breakpoint-lg:  ${state.screens.lg};`);
    lines.push(`    --breakpoint-xl:  ${state.screens.xl};`);
    lines.push(`    --breakpoint-2xl: ${state.screens['2xl']};`);

    lines.push('}');
    return lines.join('\n');
});

const activeSnippet = computed(() => v4Snippet.value);
const activeFilename = computed(() => 'app.css (Tailwind v4)');

export function useThemeBuilder() {
    return {
        state,
        isModalOpen,
        defaults: DEFAULTS,
        shades: COLOR_SHADES,
        defaultShadeFor: COLOR_DEFAULT_SHADE,
        setColorAnchor,
        setColorShade,
        resetAll,
        resetColor,
        v4Snippet,
        activeSnippet,
        activeFilename,
    };
}
