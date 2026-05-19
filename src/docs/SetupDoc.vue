<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSun, faMoon, faBolt, faPalette, faPlug, faPencil } from '@fortawesome/free-solid-svg-icons';
import { CodePreview, CollapsableSection, PropsTable, useDarkMode } from '../index';

const { isDark, toggle } = useDarkMode();

// — Code samples —————————————————————————————————————————————————————

const installCmd = [
    'npm install @netblink/vue-components',
    '',
    '# peer deps you may not already have:',
    'npm install @inertiajs/vue3 reka-ui @fortawesome/vue-fontawesome',
    'npm install @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons',
    'npm install @fortawesome/free-regular-svg-icons @fortawesome/fontawesome-svg-core',
];

const pluginGlobal = [
    '// app.ts — register every component globally',
    "import { createApp } from 'vue';",
    "import { createInertiaApp } from '@inertiajs/vue3';",
    "import Componentsnb from '@netblink/vue-components';",
    "import '@netblink/vue-components/dist/style.css'; // or your own bundled CSS",
    '',
    'createInertiaApp({',
    '  setup({ el, App, props, plugin }) {',
    '    createApp({ render: () => h(App, props) })',
    '      .use(plugin)',
    "      .use(Componentsnb /* , { darkMode: 'class' } */)",
    '      .mount(el);',
    '  },',
    '});',
];

const pluginManual = [
    '// Or import per-component — tree-shaking friendly.',
    "import { Input, PrimaryButton, NewModal } from '@netblink/vue-components';",
    '',
    '<script setup>',
    "  import { useForm } from '@inertiajs/vue3';",
    "  const form = useForm({ name: '', email: '' });",
    '</' + 'script>',
    '',
    '<template>',
    '  <form @submit.prevent="form.post(\'/contact\')" class="space-y-4">',
    '    <Input :form="form" field="name" required />',
    '    <Input :form="form" field="email" type="email" required />',
    '    <PrimaryButton :disabled="form.processing">Send</PrimaryButton>',
    '  </form>',
    '</template>',
];

const tailwindConfig = [
    '// tailwind.config.js — make sure the library is in `content` so its utility',
    '// classes are picked up by your Tailwind build.',
    'module.exports = {',
    '  content: [',
    "    './resources/**/*.{vue,js,ts}',",
    "    './node_modules/@netblink/vue-components/**/*.{vue,js,ts}',",
    '  ],',
    '  // …your theme extensions',
    '};',
];

const mainCss = [
    "/* app.css — include this once in your bundle */",
    "@import 'tailwindcss';",
    "@plugin '@tailwindcss/forms';",
    '',
    "/* Opt-in dark mode — enables `dark:` variants whenever `.dark` is on",
    " * the <html> element (or any ancestor of a component). Skip this block",
    " * if you don't want dark mode. */",
    "@custom-variant dark (&:where(.dark, .dark *));",
];

const darkPluginExample = [
    '// Pick one of the bootstrap modes when you call `.use(Componentsnb, { … })`:',
    '',
    "//   false (default) — colours stay exactly as they are now.",
    'app.use(Componentsnb);',
    '',
    "//   'class' — hydrate from persisted user choice, fall back to OS preference",
    '//             once, then leave OS changes alone.',
    "app.use(Componentsnb, { darkMode: 'class' });",
    '',
    "//   'system' — same as 'class', plus the OS-level toggle keeps flipping",
    '//              the theme until the user makes an explicit choice.',
    "app.use(Componentsnb, { darkMode: 'system' });",
];

const darkComposable = [
    "import { useDarkMode } from '@netblink/vue-components';",
    '',
    'const { isDark, enable, disable, toggle, set, initialize, setupSystemPreference } = useDarkMode();',
    '',
    '// One-shot hydration at app boot (persisted choice → OS preference → default).',
    'initialize();',
    '',
    '// Reactive — use directly in templates.',
    'console.log(isDark.value); // false',
    '',
    'toggle();        // flip',
    'enable();        // force on',
    'disable();       // force off',
    'set(true);       // explicit',
    '',
    "// Optional: follow OS-level changes until the user picks something explicitly.",
    'const stop = setupSystemPreference();',
    '// stop()  // unsubscribe',
];

const darkToggleButton = [
    '<' + 'script setup>',
    "  import { useDarkMode } from '@netblink/vue-components';",
    '  const { isDark, toggle } = useDarkMode();',
    '</' + 'script>',
    '',
    '<template>',
    '  <button @click="toggle">',
    '    {{ isDark ? \'☾\' : \'☀\' }}',
    '  </button>',
    '</template>',
];

const darkCustomTarget = [
    '// By default the `.dark` class lands on <html>. Override with `target`',
    "// (or pass darkModeTarget when registering the plugin) — useful when the",
    '// app is mounted into a shadow root or a constrained DOM.',
    'useDarkMode({ target: document.body });',
    '',
    "// Disable persistence (no localStorage writes) by passing storageKey: false.",
    'useDarkMode({ storageKey: false });',
    '',
    "// Or pick a different key when you have multiple apps sharing a host.",
    "useDarkMode({ storageKey: 'my-app:dark' });",
];

// — Tables —————————————————————————————————————————————————————————

const pluginOptions = [
    {
        prop: 'darkMode',
        type: "'class' | 'system' | false",
        default: 'false',
        description: 'Bootstrap dark mode at plugin install. See the Dark mode section below.',
        highlight: true,
    },
    {
        prop: 'darkModeTarget',
        type: 'HTMLElement',
        default: 'document.documentElement',
        description: 'Element that receives the `.dark` class.',
    },
    {
        prop: 'darkModeStorageKey',
        type: "string | false",
        default: "'nb-vue-components:dark'",
        description: 'localStorage key for persistence. Pass `false` to disable.',
    },
];

const darkModeApi = [
    { prop: 'isDark', type: 'Ref<boolean>', default: '-', description: 'Reactive `true` when dark mode is on.' },
    { prop: 'toggle()', type: '() => void', default: '-', description: 'Flip the current state.' },
    { prop: 'enable()', type: '() => void', default: '-', description: 'Turn dark mode on.' },
    { prop: 'disable()', type: '() => void', default: '-', description: 'Turn dark mode off.' },
    { prop: 'set(value)', type: '(value: boolean) => void', default: '-', description: 'Set the state explicitly.' },
    {
        prop: 'initialize(default?)',
        type: '(defaultValue?: boolean) => void',
        default: '-',
        description: 'Hydrate from persisted value → OS preference → supplied default. Call once at app boot.',
    },
    {
        prop: 'setupSystemPreference()',
        type: '() => () => void',
        default: '-',
        description: 'Subscribe to `prefers-color-scheme` until the user makes an explicit choice. Returns a stop fn.',
    },
    {
        prop: 'teardownSystemPreference()',
        type: '() => void',
        default: '-',
        description: 'Stop the OS-preference listener.',
    },
];
</script>

<template>
    <div class="space-y-12">
        <!-- Hero — quick "what is this" -->
        <section>
            <div class="grid gap-4 rounded-xl border border-primary-200 bg-primary-50/50 p-6 sm:grid-cols-3 dark:border-primary-700 dark:bg-primary-900/20">
                <div class="flex items-start gap-3">
                    <FontAwesomeIcon :icon="faBolt" class="mt-1 h-5 w-5 text-primary-600 dark:text-primary-300" />
                    <div>
                        <h3 class="font-semibold text-gray-900 dark:text-gray-100">Drop-in Vue 3 components</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Inputs, modals, tables, dropdowns — all wired for Inertia by default.</p>
                    </div>
                </div>
                <div class="flex items-start gap-3">
                    <FontAwesomeIcon :icon="faPalette" class="mt-1 h-5 w-5 text-primary-600 dark:text-primary-300" />
                    <div>
                        <h3 class="font-semibold text-gray-900 dark:text-gray-100">Theme tokens included</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Tailwind v4 + custom colour palette. Override anything from your own config.</p>
                    </div>
                </div>
                <div class="flex items-start gap-3">
                    <FontAwesomeIcon :icon="faMoon" class="mt-1 h-5 w-5 text-primary-600 dark:text-primary-300" />
                    <div>
                        <h3 class="font-semibold text-gray-900 dark:text-gray-100">Opt-in dark mode</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Zero impact on existing apps. Enable it with one plugin flag.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 1. Install -->
        <section id="install">
            <h3 class="mb-4 flex items-center gap-2 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                <span class="rounded-full bg-primary-100 px-2 py-0.5 text-sm font-medium text-primary-800 dark:bg-primary-900/50 dark:text-primary-200">1</span>
                Install
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    The library targets <strong>Vue 3</strong> + <strong>Tailwind v4</strong> + <strong>Inertia</strong>. Peer
                    dependencies are listed below.
                </p>
                <CodePreview :code="installCmd" />
            </div>
        </section>

        <!-- 2. Register the plugin -->
        <section id="register">
            <h3 class="mb-4 flex items-center gap-2 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                <span class="rounded-full bg-primary-100 px-2 py-0.5 text-sm font-medium text-primary-800 dark:bg-primary-900/50 dark:text-primary-200">2</span>
                Register the plugin
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Use the default export as a Vue plugin — all components become globally available as
                    <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">&lt;Input /&gt;</code>,
                    <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">&lt;NewModal /&gt;</code>, etc.
                </p>
                <CodePreview :code="pluginGlobal" />

                <p class="mb-4 mt-6 text-gray-600 dark:text-gray-400">
                    Prefer to import per component? Every component is also a named export, so tree-shaking just works:
                </p>
                <CodePreview :code="pluginManual" />

                <CollapsableSection header="Plugin install options" class="mt-6">
                    <PropsTable :rows="pluginOptions" />
                </CollapsableSection>
            </div>
        </section>

        <!-- 3. Tailwind & CSS -->
        <section id="tailwind">
            <h3 class="mb-4 flex items-center gap-2 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                <span class="rounded-full bg-primary-100 px-2 py-0.5 text-sm font-medium text-primary-800 dark:bg-primary-900/50 dark:text-primary-200">3</span>
                Tailwind &amp; CSS
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Add the library to your <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">content</code> globs so
                    Tailwind picks up the utility classes used inside the components.
                </p>
                <CodePreview :code="tailwindConfig" />

                <p class="mb-4 mt-6 text-gray-600 dark:text-gray-400">
                    Then in your main CSS — Tailwind v4 style:
                </p>
                <CodePreview :code="mainCss" />

                <p class="mt-4 text-sm text-gray-500 dark:text-gray-500">
                    The <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-300">@custom-variant dark</code> line is what makes
                    the <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-300">dark:</code> utilities react to a
                    <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-300">.dark</code> class instead of the OS preference. If
                    you'd rather follow the OS directly, drop the line and leave Tailwind's default behaviour in place.
                </p>
            </div>
        </section>

        <!-- 4. Dark mode -->
        <section id="dark-mode">
            <h3 class="mb-4 flex items-center gap-2 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                <span class="rounded-full bg-primary-100 px-2 py-0.5 text-sm font-medium text-primary-800 dark:bg-primary-900/50 dark:text-primary-200">4</span>
                Dark mode
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <!-- Live demo block -->
                <div class="mb-6 flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                    <div>
                        <p class="font-semibold text-gray-900 dark:text-gray-100">Try it right here</p>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            Currently
                            <strong>{{ isDark ? 'dark' : 'light' }}</strong>
                            mode. Click to flip — your choice persists in localStorage.
                        </p>
                    </div>
                    <button
                        type="button"
                        @click="toggle"
                        class="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
                    >
                        <FontAwesomeIcon :icon="isDark ? faMoon : faSun" class="h-4 w-4" />
                        Switch to {{ isDark ? 'light' : 'dark' }}
                    </button>
                </div>

                <h4 class="mb-2 font-semibold text-gray-800 dark:text-gray-200">Enable at install</h4>
                <p class="mb-3 text-gray-600 dark:text-gray-400">
                    The simplest path: pass <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">darkMode</code> when
                    registering the plugin. Default is <strong>off</strong> — existing apps are unaffected.
                </p>
                <CodePreview :code="darkPluginExample" />

                <h4 class="mt-8 mb-2 font-semibold text-gray-800 dark:text-gray-200">Drive it with the composable</h4>
                <p class="mb-3 text-gray-600 dark:text-gray-400">
                    For toggle buttons, settings pages, or any place that needs reactive state, use
                    <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">useDarkMode()</code>. It's a singleton — every
                    call site sees the same value.
                </p>
                <CodePreview :code="darkComposable" />

                <h4 class="mt-8 mb-2 font-semibold text-gray-800 dark:text-gray-200">A minimal toggle button</h4>
                <CodePreview :code="darkToggleButton" />

                <h4 class="mt-8 mb-2 font-semibold text-gray-800 dark:text-gray-200">Custom target / persistence</h4>
                <CodePreview :code="darkCustomTarget" />

                <CollapsableSection header="useDarkMode() API" class="mt-6">
                    <PropsTable :rows="darkModeApi" />
                </CollapsableSection>

                <div class="mt-6 rounded-lg border border-amber-200 bg-amber-50/60 p-4 text-sm text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-200">
                    <strong>Coverage:</strong> dark variants are wired up for the high-traffic components — modals, inputs, tables, alerts,
                    dropdowns, sections, stats/data tiles, code previews, and the components used on this docs site. A few less-common
                    components don't have explicit dark styling yet; if you hit one that looks off, add the
                    <code class="rounded bg-amber-100 px-1 dark:bg-amber-900/40 dark:text-amber-100">dark:</code> classes you need on the
                    surrounding wrapper or open an issue.
                </div>
            </div>
        </section>

        <!-- 5. First component -->
        <section id="first-component">
            <h3 class="mb-4 flex items-center gap-2 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                <FontAwesomeIcon :icon="faPencil" class="h-4 w-4 text-primary-600 dark:text-primary-300" />
                Your first component
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Most form components share the same shape — pass an Inertia form via
                    <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">:form</code> plus the
                    <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">field</code> name, and the component handles
                    value binding, error display, and disabled state.
                </p>
                <CodePreview :code="pluginManual" />

                <p class="mt-4 text-sm text-gray-500 dark:text-gray-500">
                    From here, hop into <strong>Input Components</strong> for the full form surface, <strong>Modal Components</strong> for dialogs,
                    or <strong>Table Components</strong> for data display.
                </p>
            </div>
        </section>

        <!-- Plugin troubleshooting / advanced -->
        <section id="troubleshooting">
            <h3 class="mb-4 flex items-center gap-2 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                <FontAwesomeIcon :icon="faPlug" class="h-4 w-4 text-primary-600 dark:text-primary-300" />
                Troubleshooting
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <CollapsableSection header="Tailwind classes from the library aren't applying">
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        Add the library's path to <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">content</code> in
                        <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">tailwind.config.js</code>. Tailwind only
                        generates utilities for files it scans, so the components' classes get tree-shaken away if the path is missing.
                    </p>
                </CollapsableSection>

                <CollapsableSection header="Dark mode doesn't switch" class="mt-3">
                    <ul class="list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li>
                            Make sure <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">@custom-variant dark</code> is in
                            your main CSS (see step 3).
                        </li>
                        <li>
                            Check that <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">document.documentElement</code>
                            actually receives the <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">.dark</code> class
                            after calling <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">toggle()</code>.
                        </li>
                        <li>If you mount inside a shadow root, pass a different <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">target</code> to <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">useDarkMode</code>.</li>
                    </ul>
                </CollapsableSection>

                <CollapsableSection header="Inertia form errors aren't showing on inputs" class="mt-3">
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        Inputs read errors from <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">form.errors[field]</code>.
                        Make sure you're passing the <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">useForm()</code>
                        object — not just a plain ref — and that your server is returning the standard Inertia validation error shape.
                    </p>
                </CollapsableSection>
            </div>
        </section>
    </div>
</template>
