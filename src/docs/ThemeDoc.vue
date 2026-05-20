<script setup lang="ts">
import { computed } from 'vue';
import { CodePreview } from '../index';
import { useThemeBuilder, type ColorName } from './composables/useThemeBuilder';

const { state, isModalOpen, defaults, shades, tailwindConfigSnippet } = useThemeBuilder();

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

const importSnippet = [
    '// Include the package in your Tailwind content scan:',
    '// tailwind.config.js',
    'module.exports = {',
    '    content: [',
    "        './src/**/*.{vue,js,ts,jsx,tsx}',",
    "        './node_modules/@netblink/vue-components/**/*.{vue,js,ts,jsx,tsx}',",
    '    ],',
    '    theme: {',
    '        extend: {',
    '            // Copy the tokens below (or use the Theme button to customise live)',
    '        },',
    '    },',
    '};',
];

const previewLines = computed(() => tailwindConfigSnippet.value.split('\n').slice(0, 60));
const totalLines = computed(() => tailwindConfigSnippet.value.split('\n').length);
</script>

<template>
    <div class="space-y-10">
        <!-- HEADER -->
        <header class="space-y-3">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Theme &amp; tokens</h1>
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                Every value the package uses for colour, typography, spacing, and motion lives in
                <code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">tailwind.config.js</code>. Copy any token below into your own config to keep
                the same look, or hit the <strong>Theme</strong> button (bottom-right) to customise everything live and copy the result when you're happy.
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
        <section class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Wiring it into your project</h2>
            <p class="text-gray-600 dark:text-gray-400">
                Two things: point Tailwind at the package's templates so JIT picks up the utility classes the components use, and merge the tokens you want into your <code>theme.extend</code>.
            </p>
            <CodePreview language="javascript" :code="importSnippet" />
        </section>

        <!-- COLOURS -->
        <section class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Colour scales</h2>
            <p class="text-gray-600 dark:text-gray-400">
                Six themed scales plus two plain tokens (<code>dark</code>, <code>muted</code>). Every component variant maps to one of these - the
                <code>theme="primary"</code>, <code>type="warning"</code>, etc. props all resolve to a Tailwind class like <code>bg-warning-500</code>.
            </p>

            <div v-for="name in COLOR_NAMES" :key="name" class="space-y-2">
                <div class="flex items-baseline justify-between">
                    <h3 class="font-semibold text-gray-900 dark:text-gray-100">{{ name }}</h3>
                    <code class="text-xs text-gray-500 dark:text-gray-400">DEFAULT: {{ defaults.colors[name][300] }} · base: {{ defaults.colors[name][500] }}</code>
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

        <!-- TYPOGRAPHY -->
        <section class="space-y-3">
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
                        <code class="w-12 shrink-0 text-xs text-gray-500 dark:text-gray-400">{{ s.name }}</code>
                        <span :style="{ fontSize: s.size }" class="text-gray-800 dark:text-gray-100">Aa - sample text</span>
                        <code class="ml-auto font-mono text-xs text-gray-500 dark:text-gray-400">{{ s.size }}</code>
                    </div>
                </div>
            </div>
        </section>

        <!-- RADIUS -->
        <section class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Border radius</h2>
            <div class="grid gap-3 sm:grid-cols-4">
                <div v-for="r in radiusSamples" :key="r.key" class="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                    <div class="h-16 w-16 bg-primary-500" :style="{ borderRadius: state.radius[r.key] }" />
                    <code class="text-xs font-medium text-gray-700 dark:text-gray-200">{{ r.name }}</code>
                    <code class="font-mono text-[10px] text-gray-500 dark:text-gray-400">{{ state.radius[r.key] }}</code>
                </div>
            </div>
        </section>

        <!-- SHADOW -->
        <section class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Box shadow</h2>
            <div class="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="inline-block rounded-md bg-white px-6 py-4 dark:bg-gray-800" :style="{ boxShadow: state.shadow }">
                    Card with the default shadow
                </div>
                <div class="mt-3">
                    <code class="font-mono text-xs text-gray-500 dark:text-gray-400">shadow (DEFAULT): {{ state.shadow }}</code>
                </div>
            </div>
        </section>

        <!-- BREAKPOINTS -->
        <section class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Breakpoints (screens)</h2>
            <p class="text-gray-600 dark:text-gray-400">
                The package overrides Tailwind's defaults and adds a few extras (<code>xxs</code>, <code>xs</code>, <code>laptop</code>, <code>3xl</code>).
                Note that <code>xl</code>, <code>laptop</code>, and <code>2xl</code> all share the same min-width. The package treats anything
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
        <section class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Copy the full config</h2>
            <p class="text-gray-600 dark:text-gray-400">
                This is what the Theme builder produces. It reflects the current state of every token (open the modal to edit).
            </p>
            <div class="rounded-lg border border-gray-200 bg-gray-900 p-3 text-gray-100 dark:border-gray-700">
                <pre class="overflow-x-auto whitespace-pre font-mono text-[11px] leading-snug"><code>{{ previewLines.join('\n') }}<span v-if="previewLines.length < totalLines">
…
({{ totalLines - previewLines.length }} more lines - copy via the modal)</span></code></pre>
            </div>
        </section>
    </div>
</template>
