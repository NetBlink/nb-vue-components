<script setup lang="ts">
import { computed } from 'vue';
import { CodePreview, PropsTable, InlineCode } from '../index';
import { useThemeBuilder, type ColorName } from './composables/useThemeBuilder';

const { state, isModalOpen, defaults, shades, defaultShadeFor, v4Snippet } = useThemeBuilder();

const COLOR_NAMES: ColorName[] = ['primary', 'accent', 'danger', 'warning', 'success', 'info'];

const fontSizeSamples = [
    { name: 'xxs',  size: '0.65rem' },
    { name: 'xs',   size: '0.75rem' },
    { name: 'sm',   size: '0.875rem' },
    { name: 'base', size: '1rem' },
    { name: 'lg',   size: '1.125rem' },
    { name: 'xl',   size: '1.25rem' },
    { name: '2xl',  size: '1.5rem' },
    { name: '3xl',  size: '1.875rem' },
    { name: '4xl',  size: '2.25rem' },
    { name: '5xl',  size: '3rem' },
];

const radiusSamples: { name: string; key: keyof typeof state.radius }[] = [
    { name: 'rounded-sm',      key: 'sm' },
    { name: 'rounded',         key: 'default' },
    { name: 'rounded-md',      key: 'md' },
    { name: 'rounded-lg',      key: 'lg' },
];

const screens = [
    { name: 'xxs',    px: '410px',  note: 'package-only' },
    { name: 'xs',     px: '490px',  note: 'package-only' },
    { name: 'sm',     px: '640px' },
    { name: 'md',     px: '768px' },
    { name: 'lg',     px: '1024px' },
    { name: 'xl',     px: '1084px', note: 'narrower than default Tailwind xl' },
    { name: 'laptop', px: '1084px', note: 'alias of xl' },
    { name: '2xl',    px: '1084px', note: 'same as xl' },
    { name: '3xl',    px: '1360px', note: 'package-only' },
];

const darkColorsSnippet = [
    '/* app.css - override brand colours in dark mode */',
    'html.dark {',
    '    --color-primary-500: #6ec5cd;',
    '    --color-primary-600: #4ea7af;',
    '    /* override any --color-* you want different in dark mode */',
    '}',
];

const importSnippet = [
    '/* resources/css/app.css */',
    "@import 'tailwindcss';",
    "@import '@netblink/vue-components/theme.css';",
    '',
    '/* Overrides go after the import - only the tokens you want to change */',
    '@theme {',
    '    --color-primary-600: #0f766e;',
    '}',
];

const previewLines = computed(() => v4Snippet.value.split('\n').slice(0, 60));
const totalLines = computed(() => v4Snippet.value.split('\n').length);

const motionTokens = [
    { prop: '--ease-emphasised', type: 'easing',   default: 'cubic-bezier(0.16, 1, 0.3, 1)', description: 'Default easing curve. Used by all named animations.' },
    { prop: '--duration-quick',  type: 'duration', default: '150ms',                          description: 'Short transitions (hover, focus).' },
    { prop: '--duration-base',   type: 'duration', default: '400ms',                          description: 'Standard transitions (modals, tooltips, collapse).' },
];

const motionAnimations = [
    { prop: '--animate-fade-in',          type: 'animation', default: 'fadeIn duration-base ease-emphasised',         description: 'NewModal overlay open' },
    { prop: '--animate-fade-out',         type: 'animation', default: 'fadeOut duration-quick ease-in',               description: 'NewModal overlay close' },
    { prop: '--animate-slide-up',         type: 'animation', default: 'slideUp duration-base ease-emphasised',        description: 'Collapse / NavCollapse close' },
    { prop: '--animate-slide-down',       type: 'animation', default: 'slideDown duration-base ease-emphasised',      description: 'Collapse / NavCollapse open' },
    { prop: '--animate-slide-up-fade',    type: 'animation', default: 'slideUpFade duration-base ease-emphasised',    description: 'NewModal content open, Dropdown / Tooltip side=bottom' },
    { prop: '--animate-slide-down-fade-out', type: 'animation', default: 'slideDownFadeOut duration-quick ease-in', description: 'NewModal content close, Toast close' },
    { prop: '--animate-slide-down-fade',  type: 'animation', default: 'slideDownFade duration-base ease-emphasised',  description: 'Dropdown / Tooltip side=top' },
    { prop: '--animate-slide-left-fade',  type: 'animation', default: 'slideLeftFade duration-base ease-emphasised',  description: 'Dropdown / Tooltip side=right' },
    { prop: '--animate-slide-right-fade', type: 'animation', default: 'slideRightFade duration-base ease-emphasised', description: 'Dropdown / Tooltip side=left' },
    { prop: '--animate-toast-in-{right,left,top,bottom}', type: 'animation', default: 'toastIn* duration-base ease-emphasised', description: 'Toast enter, by Toaster position' },
    { prop: '--animate-toast-scale-in',   type: 'animation', default: 'toastScaleIn duration-base ease-emphasised',   description: 'Toast enter with animation="scale"' },
];

const motionOverrideSnippet = [
    '/* app.css - override motion tokens */',
    '@theme {',
    '    --ease-emphasised: cubic-bezier(0.4, 0, 0.2, 1);',
    '    --duration-quick: 100ms;',
    '    --duration-base: 300ms;',
    '}',
];
</script>

<template>
    <div class="space-y-10">
        <!-- HEADER -->
        <header class="space-y-3">
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                Every value the package uses for colour, typography, spacing, and motion lives in
                <InlineCode>@netblink/vue-components/theme.css</InlineCode>. Import it to get the defaults, override any token
                in your own <InlineCode>@theme</InlineCode> block, or hit the <strong>Theme</strong> button (bottom-right) to customise values live and copy the result.
            </p>
            <div>
                <button
                    type="button"
                    @click="isModalOpen = true"
                    class="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-700"
                >
                    Open theme builder
                </button>
            </div>
        </header>

        <!-- HOW TO IMPORT -->
        <section id="wiring-it-into-your-project" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Wiring it into your project</h2>
            <p class="text-gray-600 dark:text-gray-400">
                One import after Tailwind. It defines every token on this page, the keyframes and custom utilities, and an <InlineCode>@source</InlineCode> for the built components (Tailwind v4 skips node_modules by default). Override tokens in an <InlineCode>@theme</InlineCode> block after it.
            </p>
            <CodePreview language="css" :code="importSnippet" />
        </section>

        <!-- COLOURS -->
        <section id="colour-scales" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Colour scales</h2>
            <p class="text-gray-600 dark:text-gray-400">
                Six themed scales plus two plain tokens (<InlineCode>dark</InlineCode>, <InlineCode>muted</InlineCode>). Every component variant maps to one of these - the
                <InlineCode>theme="primary"</InlineCode>, <InlineCode>type="warning"</InlineCode>, etc. props all resolve to a Tailwind class like <InlineCode>bg-warning-500</InlineCode>.
            </p>

            <div v-for="name in COLOR_NAMES" :key="name" class="space-y-2">
                <div class="flex items-baseline justify-between">
                    <div class="font-semibold text-gray-900 dark:text-gray-100">{{ name }}</div>
                    <InlineCode>--color-{{ name }}: {{ defaults.colors[name][defaultShadeFor[name]] }} · base: {{ defaults.colors[name][500] }}</InlineCode>
                </div>
                <div class="grid grid-cols-3 gap-1 sm:grid-cols-6 lg:grid-cols-11">
                    <div
                        v-for="shade in shades"
                        :key="shade"
                        class="rounded-md border border-gray-200 p-1 text-center dark:border-gray-700"
                    >
                        <div
                            class="mb-1 h-10 rounded"
                            :style="{ background: state.colors[name][shade] }"
                            :title="state.colors[name][shade]"
                        />
                        <div class="text-[10px] font-semibold text-gray-700 dark:text-gray-200">{{ shade }}</div>
                        <div class="truncate font-mono text-[9px] text-gray-500 dark:text-gray-400">{{ state.colors[name][shade] }}</div>
                    </div>
                </div>
            </div>

            <div class="mt-4 grid gap-2 sm:grid-cols-2">
                <div class="flex items-center gap-3 rounded-md border border-gray-200 p-3 dark:border-gray-700">
                    <div class="h-12 w-12 rounded" :style="{ background: state.dark }" />
                    <div>
                        <div class="font-semibold text-gray-900 dark:text-gray-100">dark</div>
                        <div class="font-mono text-xs text-gray-500 dark:text-gray-400">{{ state.dark }}</div>
                        <div class="text-xs text-gray-600 dark:text-gray-400">Body text in light mode, base bg in dark mode chrome.</div>
                    </div>
                </div>
                <div class="flex items-center gap-3 rounded-md border border-gray-200 p-3 dark:border-gray-700">
                    <div class="h-12 w-12 rounded" :style="{ background: state.muted }" />
                    <div>
                        <div class="font-semibold text-gray-900 dark:text-gray-100">muted</div>
                        <div class="font-mono text-xs text-gray-500 dark:text-gray-400">{{ state.muted }}</div>
                        <div class="text-xs text-gray-600 dark:text-gray-400">Secondary text and inactive elements.</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- DARK MODE -->
        <section id="dark-mode" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Dark mode</h2>
            <p class="text-gray-600 dark:text-gray-400">
                The package ships one colour palette. Dark mode is opt-in via the <InlineCode>.dark</InlineCode> class
                (see Setup). Components switch chrome via <InlineCode>dark:*</InlineCode> Tailwind utilities for backgrounds,
                borders, and text. The brand colours themselves stay the same in both modes.
            </p>
            <p class="text-gray-600 dark:text-gray-400">
                To use different brand colours under dark mode, override the matching CSS custom properties
                inside an <InlineCode>html.dark</InlineCode> block in your own CSS:
            </p>
            <CodePreview language="css" :code="darkColorsSnippet" />
        </section>

        <!-- TYPOGRAPHY -->
        <section id="typography" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Typography</h2>
            <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                    <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">font-sans (Poppins)</div>
                    <div class="mt-2 font-sans text-base">The quick brown fox jumps over the lazy dog</div>
                    <div class="mt-1 font-sans text-2xl">The quick brown fox</div>
                </div>
                <div class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                    <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">font-opensans (Open Sans)</div>
                    <div class="mt-2 font-opensans text-base">The quick brown fox jumps over the lazy dog</div>
                    <div class="mt-1 font-opensans text-2xl">The quick brown fox</div>
                </div>
            </div>

            <div class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <div class="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Font sizes</div>
                <div class="space-y-1">
                    <div v-for="s in fontSizeSamples" :key="s.name" class="flex items-baseline gap-3">
                        <InlineCode>{{ s.name }}</InlineCode>
                        <span :style="{ fontSize: s.size }" class="text-gray-800 dark:text-gray-100">Aa - sample text</span>
                        <InlineCode>{{ s.size }}</InlineCode>
                    </div>
                </div>
            </div>
        </section>

        <!-- RADIUS -->
        <section id="border-radius" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Border radius</h2>
            <div class="grid gap-3 sm:grid-cols-4">
                <div v-for="r in radiusSamples" :key="r.key" class="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                    <div class="h-16 w-16 bg-primary-500" :style="{ borderRadius: state.radius[r.key] }" />
                    <InlineCode>{{ r.name }}</InlineCode>
                    <InlineCode>{{ state.radius[r.key] }}</InlineCode>
                </div>
            </div>
        </section>

        <!-- SHADOW -->
        <section id="box-shadow" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Box shadow</h2>
            <div class="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="inline-block rounded-md bg-white px-6 py-4 dark:bg-gray-800" :style="{ boxShadow: state.shadow }">
                    Card with the default shadow
                </div>
                <div class="mt-3">
                    <InlineCode>--shadow: {{ state.shadow }}</InlineCode>
                </div>
            </div>
        </section>

        <!-- MOTION -->
        <section id="motion" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Motion</h2>
            <p class="text-gray-600 dark:text-gray-400">
                Three motion tokens drive component transitions across modals, dropdowns, tooltips, toasts and collapse panels.
                The named animations below build on those tokens.
            </p>

            <PropsTable :rows="motionTokens" />

            <PropsTable :rows="motionAnimations" />

            <p class="text-gray-600 dark:text-gray-400">Override any of these in your <InlineCode>@theme {}</InlineCode> block:</p>
            <CodePreview language="css" :code="motionOverrideSnippet" />
        </section>

        <!-- BREAKPOINTS -->
        <section id="breakpoints" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Breakpoints (screens)</h2>
            <p class="text-gray-600 dark:text-gray-400">
                The package overrides Tailwind's defaults and adds a few extras (<InlineCode>xxs</InlineCode>, <InlineCode>xs</InlineCode>, <InlineCode>laptop</InlineCode>, <InlineCode>3xl</InlineCode>).
                Note that <InlineCode>xl</InlineCode>, <InlineCode>laptop</InlineCode>, and <InlineCode>2xl</InlineCode> all share the same min-width. The package treats anything
                ≥ 1084px as &ldquo;wide&rdquo; until 3xl kicks in.
            </p>
            <div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                <table class="min-w-full divide-y divide-gray-200 text-sm dark:divide-gray-700">
                    <thead class="bg-gray-50 dark:bg-gray-900/40">
                        <tr>
                            <th class="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">Name</th>
                            <th class="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">min-width</th>
                            <th class="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">Note</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr v-for="s in screens" :key="s.name">
                            <td class="px-4 py-2 font-mono text-xs text-gray-800 dark:text-gray-200">{{ s.name }}</td>
                            <td class="px-4 py-2 font-mono text-xs text-gray-600 dark:text-gray-400">{{ s.px }}</td>
                            <td class="px-4 py-2 text-xs text-gray-500 dark:text-gray-400">{{ s.note || '' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- FULL CONFIG OUTPUT -->
        <section id="copy-the-full-config" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Copy the full config</h2>
            <p class="text-gray-600 dark:text-gray-400">
                This is what the Theme builder produces. It reflects the current state of every token (open the modal to edit).
            </p>
            <div class="rounded-lg border border-gray-200 bg-gray-900 p-3 text-gray-100 dark:border-gray-700">
                <pre class="overflow-x-auto whitespace-pre font-mono text-[11px] leading-snug"><InlineCode>{{ previewLines.join('\n') }}<span v-if="previewLines.length < totalLines">
…
({{ totalLines - previewLines.length }} more lines - copy via the modal)</span></InlineCode></pre>
            </div>
        </section>
    </div>
</template>
