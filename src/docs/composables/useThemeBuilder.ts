import { reactive, computed, watch, ref } from 'vue';
import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';

extend([mixPlugin]);

/**
 * Theme-builder state — covers every token in `tailwind.config.js` the package
 * uses. Live edits inject CSS variables onto <html> so the docs site updates
 * immediately. Output is copyable as a `tailwind.config.js` `theme.extend`
 * snippet.
 *
 * Docs-app-only composable (lives under src/docs/) — not exported from the
 * package itself.
 */

export type ColorName = 'primary' | 'accent' | 'danger' | 'warning' | 'success' | 'info';

/** Anchor shade for each color (used to seed the scale from one input). */
export const COLOR_ANCHOR_SHADE = 500;

const COLOR_SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
type Shade = typeof COLOR_SHADES[number];

/** Defaults — mirror `tailwind.config.js` exactly. */
const COLOR_DEFAULTS: Record<ColorName, Record<Shade, string>> = {
    primary: { 50: '#f4f9fb', 100: '#e9f2f5', 200: '#cee5e9', 300: '#aad3d9', 400: '#72b6be', 500: '#509da7', 600: '#3d808c', 700: '#326772', 800: '#2d585f', 900: '#294a51', 950: '#1b3036' },
    accent:  { 50: '#fbf5f6', 100: '#f7ecef', 200: '#f0dbe1', 300: '#e1b8c3', 400: '#d399a9', 500: '#c0738b', 600: '#a95574', 700: '#8c445f', 800: '#763b54', 900: '#66354b', 950: '#381926' },
    danger:  { 50: '#fef2f2', 100: '#fde3e3', 200: '#fdcbcb', 300: '#faa7a7', 400: '#f36262', 500: '#ea4949', 600: '#d72b2b', 700: '#b52020', 800: '#961e1e', 900: '#7c2020', 950: '#430c0c' },
    warning: { 50: '#fefaec', 100: '#fbf0ca', 200: '#f7e190', 300: '#f3cf62', 400: '#efb730', 500: '#e89818', 600: '#cd7312', 700: '#aa5213', 800: '#8b4015', 900: '#723615', 950: '#411a07' },
    success: { 50: '#eefee7', 100: '#d9fccb', 200: '#b5fa9c', 300: '#87f362', 400: '#5fe734', 500: '#3ecd15', 600: '#2ba40c', 700: '#237d0e', 800: '#206311', 900: '#1e5314', 950: '#0a2e05' },
    info:    { 50: '#eef2ff', 100: '#e0e6ff', 200: '#c6d1ff', 300: '#a4b1fd', 400: '#7f88fa', 500: '#6262f3', 600: '#5044e7', 700: '#4436cc', 800: '#392ea5', 900: '#322d82', 950: '#1e1a4c' },
};

/**
 * Generate an 11-shade scale anchored at `500` from a single hex input —
 * mirrors uicolors.app's approach (single source of truth, derived rest).
 * Lighter shades mix toward white; darker shades mix toward black. The anchor
 * shade always equals the input exactly.
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
};

const state = reactive<ThemeState>(structuredClone(DEFAULTS));
const isModalOpen = ref(false);

/**
 * Apply current state to the live <html> element via CSS variables.
 * Tailwind v4 emits `--color-<name>-<shade>` vars from `@theme` blocks;
 * overriding them here flips every utility class instantly.
 */
function applyToDocument(): void {
    if (typeof document === 'undefined') return;
    const root = document.documentElement.style;

    // Color scales
    (Object.keys(state.colors) as ColorName[]).forEach((name) => {
        const scale = state.colors[name];
        COLOR_SHADES.forEach((shade) => {
            root.setProperty(`--color-${name}-${shade}`, scale[shade]);
        });
        // DEFAULT shade — Tailwind exposes plain --color-<name>
        root.setProperty(`--color-${name}`, scale[300]);
    });

    // Plain colors
    root.setProperty('--color-dark', state.dark);
    root.setProperty('--color-muted', state.muted);

    // Fonts
    root.setProperty('--font-sans', `"${state.fontSans}", system-ui, sans-serif`);
    root.setProperty('--font-opensans', `"${state.fontSerif}", system-ui, sans-serif`);

    // Sizes
    root.setProperty('--text-base', state.fontSize.base);
    root.setProperty('--text-lg',   state.fontSize.lg);
    root.setProperty('--text-xl',   state.fontSize.xl);
    root.setProperty('--text-2xl',  state.fontSize['2xl']);

    // Radius
    root.setProperty('--radius-sm',      state.radius.sm);
    root.setProperty('--radius',         state.radius.default);
    root.setProperty('--radius-md',      state.radius.md);
    root.setProperty('--radius-lg',      state.radius.lg);

    // Shadow
    root.setProperty('--shadow', state.shadow);
}

watch(state, applyToDocument, { deep: true, immediate: true });

/** When the anchor (shade 500) of a color changes, regenerate the rest. */
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
}

function resetColor(name: ColorName): void {
    state.colors[name] = structuredClone(COLOR_DEFAULTS[name]);
}

/** Build a `tailwind.config.js` `extend` snippet from current state. */
const tailwindConfigSnippet = computed<string>(() => {
    const indent = (s: string, n: number) => ' '.repeat(n) + s;

    const colorBlock = (Object.keys(state.colors) as ColorName[])
        .map((name) => {
            const scale = state.colors[name];
            const lines = [`    ${name}: {`, `        DEFAULT: '${scale[300]}',`];
            COLOR_SHADES.forEach((sh) => lines.push(`        ${sh}: '${scale[sh]}',`));
            lines.push('    },');
            return lines.join('\n');
        })
        .join('\n');

    return [
        '// tailwind.config.js',
        "/** @type {import('tailwindcss').Config} */",
        'module.exports = {',
        '    theme: {',
        '        extend: {',
        '            colors: {',
        `                dark: '${state.dark}',`,
        `                muted: '${state.muted}',`,
        colorBlock.replace(/^/gm, '            ').replace(/^ {16}/gm, '                '),
        '            },',
        '            fontFamily: {',
        `                sans: ['${state.fontSans}', 'system-ui', 'sans-serif'],`,
        `                opensans: ['${state.fontSerif}', 'system-ui', 'sans-serif'],`,
        '            },',
        '            fontSize: {',
        `                base: '${state.fontSize.base}',`,
        `                lg: '${state.fontSize.lg}',`,
        `                xl: '${state.fontSize.xl}',`,
        `                '2xl': '${state.fontSize['2xl']}',`,
        '            },',
        '            borderRadius: {',
        `                sm: '${state.radius.sm}',`,
        `                DEFAULT: '${state.radius.default}',`,
        `                md: '${state.radius.md}',`,
        `                lg: '${state.radius.lg}',`,
        '            },',
        '            boxShadow: {',
        `                DEFAULT: '${state.shadow}',`,
        '            },',
        '            screens: {',
        `                sm: '${state.screens.sm}',`,
        `                md: '${state.screens.md}',`,
        `                lg: '${state.screens.lg}',`,
        `                xl: '${state.screens.xl}',`,
        `                '2xl': '${state.screens['2xl']}',`,
        '            },',
        '        },',
        '    },',
        '};',
    ].join('\n');
});

export function useThemeBuilder() {
    return {
        state,
        isModalOpen,
        defaults: DEFAULTS,
        shades: COLOR_SHADES,
        setColorAnchor,
        setColorShade,
        resetAll,
        resetColor,
        tailwindConfigSnippet,
    };
}
