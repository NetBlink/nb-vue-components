<script setup lang="ts">
import { CodePreview, CollapsableSection, PropsTable } from '../index';
import { useDarkMode } from '../composables/useDarkMode';

const { isDark, toggle } = useDarkMode();

const installCmd = [
    'npm install @netblink/vue-components',
    '',
    '# peer deps',
    'npm install @inertiajs/vue3 reka-ui',
    'npm install @fortawesome/vue-fontawesome @fortawesome/fontawesome-svg-core',
    'npm install @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons',
];

const registerGlobal = [
    "import { createApp, h } from 'vue';",
    "import { createInertiaApp } from '@inertiajs/vue3';",
    "import Componentsnb from '@netblink/vue-components';",
    "import '@netblink/vue-components/dist/style.css';",
    '',
    'createInertiaApp({',
    '  setup({ el, App, props, plugin }) {',
    '    createApp({ render: () => h(App, props) })',
    '      .use(plugin)',
    '      .use(Componentsnb)',
    '      .mount(el);',
    '  },',
    '});',
];

const registerNamed = ["import { Input, PrimaryButton, NewModal } from '@netblink/vue-components';"];

const tailwindConfig = [
    '// tailwind.config.js',
    'module.exports = {',
    '  content: [',
    "    './resources/**/*.{vue,js,ts}',",
    "    './node_modules/@netblink/vue-components/**/*.{vue,js,ts}',",
    '  ],',
    '};',
];

const appCss = [
    '/* app.css */',
    "@import 'tailwindcss';",
    "@plugin '@tailwindcss/forms';",
    '',
    '/* Opt-in: activates `dark:` utilities when `.dark` is on <html>. */',
    "/* Drop this line to use the default `prefers-color-scheme` behaviour. */",
    '@custom-variant dark (&:where(.dark, .dark *));',
];

const darkPlugin = [
    '// Off by default.',
    'app.use(Componentsnb);',
    '',
    "// 'class': hydrate from storage / OS once, then leave OS alone.",
    "app.use(Componentsnb, { darkMode: 'class' });",
    '',
    "// 'system': same as 'class', and keep following the OS until the user picks.",
    "app.use(Componentsnb, { darkMode: 'system' });",
];

const darkComposable = [
    "import { useDarkMode } from '@netblink/vue-components';",
    '',
    'const { isDark, toggle, enable, disable, set, initialize, setupSystemPreference } = useDarkMode();',
    '',
    'initialize();   // hydrate once at boot (persisted choice > OS preference > default)',
    'toggle();       // flip',
    'isDark.value;   // reactive boolean',
];

const darkToggleButton = [
    '<' + 'script setup>',
    "import { useDarkMode } from '@netblink/vue-components';",
    'const { isDark, toggle } = useDarkMode();',
    '</' + 'script>',
    '',
    '<template>',
    '  <button @click="toggle">{{ isDark ? \'Light\' : \'Dark\' }}</button>',
    '</template>',
];

const darkCustomTarget = [
    "// .dark lands on <html> by default. Override per-call:",
    'useDarkMode({ target: document.body });',
    '',
    '// Disable localStorage persistence:',
    'useDarkMode({ storageKey: false });',
    '',
    '// Or use a custom key:',
    "useDarkMode({ storageKey: 'my-app:dark' });",
];

const formExample = [
    '<' + 'script setup>',
    "import { useForm } from '@inertiajs/vue3';",
    "import { Input, PrimaryButton } from '@netblink/vue-components';",
    '',
    "const form = useForm({ name: '', email: '' });",
    "const submit = () => form.post('/contact');",
    '</' + 'script>',
    '',
    '<template>',
    '  <form @submit.prevent="submit" class="space-y-4">',
    '    <Input :form="form" field="name" required />',
    '    <Input :form="form" field="email" type="email" required />',
    '    <PrimaryButton :disabled="form.processing">Send</PrimaryButton>',
    '  </form>',
    '</template>',
];

const pluginOptions = [
    {
        prop: 'darkMode',
        type: "'class' | 'system' | false",
        default: 'false',
        description: "'class': hydrate from storage / OS once. 'system': also keep following OS until user picks. false: no-op.",
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
        type: 'string | false',
        default: "'nb-vue-components:dark'",
        description: 'localStorage key. `false` disables persistence.',
    },
];

const darkApi = [
    { prop: 'isDark', type: 'Ref<boolean>', default: '-', description: 'Reactive state.' },
    { prop: 'toggle()', type: '() => void', default: '-', description: 'Flip the current value.' },
    { prop: 'enable()', type: '() => void', default: '-', description: 'Force on.' },
    { prop: 'disable()', type: '() => void', default: '-', description: 'Force off.' },
    { prop: 'set(value)', type: '(value: boolean) => void', default: '-', description: 'Set explicitly.' },
    {
        prop: 'initialize(default?)',
        type: '(defaultValue?: boolean) => void',
        default: '-',
        description: 'Hydrate from storage, then OS preference, then the supplied default. Call once at boot.',
    },
    {
        prop: 'setupSystemPreference()',
        type: '() => () => void',
        default: '-',
        description: 'Subscribe to `prefers-color-scheme` until the user picks explicitly. Returns the stop fn.',
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
    <div class="space-y-10">
        <p class="text-sm text-gray-600 dark:text-gray-400">
            Vue 3, Tailwind v4, Inertia. Components consume Inertia's
            <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">useForm()</code>
            via <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">:form</code> +
            <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">field</code>. Dark mode is opt-in; default styles are
            unchanged.
        </p>

        <!-- 1. Install -->
        <section id="install">
            <h3 class="mb-3 border-b border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Install</h3>
            <CodePreview :code="installCmd" />
        </section>

        <!-- 2. Register -->
        <section id="register">
            <h3 class="mb-3 border-b border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Register</h3>
            <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">
                As a plugin (globally registers every component as <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">&lt;Input&gt;</code>,
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">&lt;NewModal&gt;</code>, etc.):
            </p>
            <CodePreview :code="registerGlobal" />

            <p class="mt-6 mb-2 text-sm text-gray-600 dark:text-gray-400">Or import per-component (tree-shakable):</p>
            <CodePreview :code="registerNamed" />

            <CollapsableSection header="Plugin options" class="mt-6">
                <PropsTable :rows="pluginOptions" />
            </CollapsableSection>
        </section>

        <!-- 3. Tailwind -->
        <section id="tailwind">
            <h3 class="mb-3 border-b border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Tailwind</h3>
            <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">
                Add the library to <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">content</code> so its utility
                classes survive the Tailwind build:
            </p>
            <CodePreview :code="tailwindConfig" />

            <p class="mt-6 mb-2 text-sm text-gray-600 dark:text-gray-400">Main CSS (Tailwind v4):</p>
            <CodePreview :code="appCss" />
        </section>

        <!-- 4. Dark mode -->
        <section id="dark-mode">
            <h3 class="mb-3 border-b border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Dark mode
            </h3>

            <!-- Live toggle -->
            <div
                class="mb-6 flex items-center justify-between rounded border border-gray-200 bg-gray-50 px-4 py-3 text-sm dark:border-gray-700 dark:bg-gray-900/40"
            >
                <span class="font-mono text-gray-700 dark:text-gray-300">isDark = {{ isDark }}</span>
                <button
                    type="button"
                    @click="toggle"
                    class="rounded border border-gray-300 bg-white px-3 py-1 font-mono text-gray-800 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
                >
                    toggle()
                </button>
            </div>

            <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">Bootstrap at install:</p>
            <CodePreview :code="darkPlugin" />

            <p class="mt-6 mb-2 text-sm text-gray-600 dark:text-gray-400">
                Or drive it manually via the composable. State is a singleton across the app:
            </p>
            <CodePreview :code="darkComposable" />

            <p class="mt-6 mb-2 text-sm text-gray-600 dark:text-gray-400">Minimal toggle button:</p>
            <CodePreview :code="darkToggleButton" />

            <p class="mt-6 mb-2 text-sm text-gray-600 dark:text-gray-400">Custom target / persistence:</p>
            <CodePreview :code="darkCustomTarget" />

            <CollapsableSection header="useDarkMode() API" class="mt-6">
                <PropsTable :rows="darkApi" />
            </CollapsableSection>

            <p class="mt-4 text-xs text-gray-500 dark:text-gray-500">
                Dark variants are wired up for the high-traffic surfaces (modals, inputs, tables, alerts, dropdowns, sections, stats / data
                tiles, code blocks). If you hit a component that isn't themed yet, add <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">dark:</code> classes on the wrapper.
            </p>
        </section>

        <!-- 5. Form pattern -->
        <section id="form">
            <h3 class="mb-3 border-b border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Form pattern</h3>
            <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">
                Pass <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">:form</code> and
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">field</code>. The component reads / writes
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">form[field]</code> and renders the validation error
                from <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">form.errors[field]</code>.
            </p>
            <CodePreview :code="formExample" />
        </section>

        <!-- 6. Troubleshooting -->
        <section id="troubleshooting">
            <h3 class="mb-3 border-b border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Troubleshooting
            </h3>

            <CollapsableSection header="Tailwind classes aren't applying">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    The library's path isn't in
                    <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">tailwind.config.js</code>
                    <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">content</code>. See step 3.
                </p>
            </CollapsableSection>

            <CollapsableSection header="dark: classes don't activate" class="mt-3">
                <ul class="list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>
                        <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">@custom-variant dark</code> missing from main
                        CSS (step 3).
                    </li>
                    <li>
                        <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">html</code> never gets the
                        <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">.dark</code> class. Verify
                        <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">toggle()</code> mutates it.
                    </li>
                    <li>
                        Mounted in a shadow root? Pass a custom
                        <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">target</code> to
                        <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">useDarkMode()</code>.
                    </li>
                </ul>
            </CollapsableSection>

            <CollapsableSection header="Form errors don't show on inputs" class="mt-3">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Pass the <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">useForm()</code> object, not a plain
                    ref. Errors come from <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">form.errors[field]</code>,
                    which Inertia populates on a 422 response.
                </p>
            </CollapsableSection>
        </section>
    </div>
</template>
