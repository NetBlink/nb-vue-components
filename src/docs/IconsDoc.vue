<script setup lang="ts">
import { ref } from 'vue';
import { CodePreview, Alert } from '../index';
import { useNbIcons, NbIcon } from '../icons';
import { faAliasPreset } from '../icons/presets/fa';
import { heroiconsAliasPreset } from '../icons/presets/heroicons';
import { materialAliasPreset } from '../icons/presets/material';
import { solarAliasPreset } from '../icons/presets/solar';
import type { AliasName } from '../icons/types';

type SetKey = 'fa' | 'heroicons' | 'material' | 'solar';

const setsMeta: Record<SetKey, { label: string; iconifyPrefix: string; preset: Record<AliasName, unknown> }> = {
    fa:        { label: 'FontAwesome',       iconifyPrefix: 'fa6-solid',         preset: faAliasPreset as any },
    heroicons: { label: 'Heroicons',         iconifyPrefix: 'heroicons',         preset: heroiconsAliasPreset as any },
    material:  { label: 'Material Symbols',  iconifyPrefix: 'material-symbols',  preset: materialAliasPreset as any },
    solar:     { label: 'Solar',             iconifyPrefix: 'solar',             preset: solarAliasPreset as any },
};

const activeSet = ref<SetKey>('fa');
const registry = useNbIcons();

function switchTo(key: SetKey): void {
    const preset = setsMeta[key].preset;
    (Object.keys(preset) as AliasName[]).forEach((alias) => {
        registry.registerAlias(alias, preset[alias] as any);
    });
    activeSet.value = key;
}

const showcaseAliases: { alias: AliasName; label: string }[] = [
    { alias: '$expand',       label: 'expand' },
    { alias: '$close',        label: 'close' },
    { alias: '$success',      label: 'success' },
    { alias: '$error',        label: 'error' },
    { alias: '$warning',      label: 'warning' },
    { alias: '$info',         label: 'info' },
    { alias: '$search',       label: 'search' },
    { alias: '$eye',          label: 'eye' },
    { alias: '$eye-off',      label: 'eye-off' },
    { alias: '$help',         label: 'help' },
    { alias: '$edit',         label: 'edit' },
    { alias: '$edit-alt',     label: 'edit-alt' },
    { alias: '$construction', label: 'construction' },
    { alias: '$whatsapp',     label: 'whatsapp' },
];

// Code snippets ----------------------------------------------------------------

const installFa = [
    '# Default setup uses FontAwesome.',
    'npm install @netblink/vue-components',
    'npm install @fortawesome/vue-fontawesome @fortawesome/fontawesome-svg-core',
    'npm install @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons',
];

const wireFa = [
    "import { createApp } from 'vue';",
    "import App from './App.vue';",
    "import NbVueComponents from '@netblink/vue-components';",
    "import { createNbIcons } from '@netblink/vue-components/icons';",
    "import { faAliasPreset, faSet } from '@netblink/vue-components/icons/fa';",
    '',
    'const app = createApp(App);',
    'app.use(NbVueComponents);',
    'app.use(createNbIcons({',
    '    aliases: faAliasPreset,',
    '    sets: { fa: faSet },',
    "    defaultSet: 'fa',",
    '}));',
    "app.mount('#app');",
];

const installHero = [
    'npm install @iconify/vue @iconify-json/heroicons',
];

const wireHero = [
    "import { createNbIcons } from '@netblink/vue-components/icons';",
    "import { heroiconsAliasPreset, heroiconsSet } from '@netblink/vue-components/icons/heroicons';",
    '',
    'app.use(createNbIcons({',
    '    aliases: heroiconsAliasPreset,',
    '    sets: { heroicons: heroiconsSet },',
    '}));',
];

const installMaterial = [
    'npm install @iconify/vue @iconify-json/material-symbols',
];

const wireMaterial = [
    "import { createNbIcons } from '@netblink/vue-components/icons';",
    "import { materialAliasPreset, materialSet } from '@netblink/vue-components/icons/material';",
    '',
    'app.use(createNbIcons({',
    '    aliases: materialAliasPreset,',
    "    sets: { 'material-symbols': materialSet },",
    '}));',
];

const installSolar = [
    'npm install @iconify/vue @iconify-json/solar',
];

const wireSolar = [
    "import { createNbIcons } from '@netblink/vue-components/icons';",
    "import { solarAliasPreset, solarSet } from '@netblink/vue-components/icons/solar';",
    '',
    'app.use(createNbIcons({',
    '    aliases: solarAliasPreset,',
    '    sets: { solar: solarSet },',
    '}));',
];

const usageInComponent = [
    '<' + 'template>',
    '    <!-- Library-internal aliases (used by every nb-vue-component) -->',
    '    <NbIcon name="$expand" />',
    '    <NbIcon name="$close" class="text-red-500" />',
    '',
    "    <!-- Pull any icon from Iconify by name (search at icon-sets.iconify.design) -->",
    '    <NbIcon name="heroicons:rocket-launch" size="lg" />',
    '    <NbIcon name="solar:rocket-bold" size="xl" />',
    '',
    "    <!-- Or pass a Vue component directly -->",
    '    <NbIcon :name="MyHandRolledIcon" />',
    '',
    "    <!-- Or an inline SVG -->",
    "    <NbIcon :name=\"{ svg: '<svg viewBox=\\\"0 0 24 24\\\">…</svg>' }\" />",
    '</' + 'template>',
];

const switchCli = [
    '# Switch your project from FontAwesome to Heroicons (or any of the four):',
    'npx @netblink/vue-components-migrate switch hero',
    'npx @netblink/vue-components-migrate switch material',
    'npx @netblink/vue-components-migrate switch solar',
    'npx @netblink/vue-components-migrate switch fa',
];
</script>

<template>
    <div class="prose dark:prose-invert max-w-none">
        <h1>Icons</h1>
        <p class="lead">
            Every NB component draws its affordances (chevrons, X buttons, eye toggles, etc.) through a single
            <code>&lt;NbIcon&gt;</code> primitive. The icon you see is decided by a small Vue plugin called
            <code>createNbIcons()</code>: install it once, point it at the icon provider you like, and every component
            picks up the new visuals automatically.
        </p>

        <Alert type="info">
            FontAwesome is the default. Run <code>npx @netblink/vue-components-migrate</code> on an existing v2 project
            and your visuals stay identical — no manual code changes needed.
        </Alert>

        <!-- LIVE SWITCHER -->
        <h2>Try it live</h2>
        <p>
            Click a provider below to swap every library-internal alias at runtime — the icons in the comparison grid
            (and across this entire docs app) re-render with the chosen set:
        </p>

        <div class="my-4 flex flex-wrap gap-2">
            <button
                v-for="(meta, key) in setsMeta"
                :key="key"
                type="button"
                @click="switchTo(key as SetKey)"
                class="rounded-md border px-4 py-2 text-sm font-medium transition-colors"
                :class="activeSet === key
                    ? 'border-primary-600 bg-primary-600 text-white'
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'"
            >
                {{ meta.label }}
            </button>
        </div>

        <div class="my-6 grid grid-cols-2 gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 sm:grid-cols-4 lg:grid-cols-7 dark:border-gray-700 dark:bg-gray-900/40">
            <div
                v-for="item in showcaseAliases"
                :key="item.alias"
                class="flex flex-col items-center gap-2 rounded-md bg-white p-3 text-center shadow-sm dark:bg-gray-800"
            >
                <NbIcon :name="item.alias" size="xl" class="text-primary-600 dark:text-primary-300" />
                <code class="text-xs text-gray-600 dark:text-gray-400">{{ item.label }}</code>
            </div>
        </div>

        <p class="text-sm text-gray-500 dark:text-gray-400">
            <strong>Current preset:</strong> {{ setsMeta[activeSet].label }} &middot;
            Iconify prefix: <code>{{ setsMeta[activeSet].iconifyPrefix }}</code>
        </p>

        <!-- SEARCH -->
        <h2>Finding icons</h2>
        <p>
            Hero / Material Symbols / Solar (and ~200 other sets) all flow through
            <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener" class="text-primary-600 underline">Iconify's universal browser</a>.
            Search there, copy the icon name (e.g. <code>solar:rocket-bold</code>), and pass it straight to
            <code>&lt;NbIcon name="…" /&gt;</code>:
        </p>

        <CodePreview language="html" :code="usageInComponent" />

        <Alert type="warning">
            For Iconify-backed sets you need <code>@iconify/vue</code> and the per-set data package
            (<code>@iconify-json/heroicons</code>, <code>@iconify-json/material-symbols</code>,
            <code>@iconify-json/solar</code>, …) installed. The package marks them as optional peer deps so they only
            cost size when you actually use them.
        </Alert>

        <!-- DEFAULT SETUP -->
        <h2>Default setup (FontAwesome)</h2>
        <p>This is what <code>npx @netblink/vue-components-migrate</code> wires up for you:</p>
        <CodePreview language="bash" :code="installFa" />
        <CodePreview language="javascript" :code="wireFa" />

        <!-- ALTERNATIVES -->
        <h2>Switching to another provider</h2>
        <p>
            The easiest path is the CLI — one command rewrites your app entrypoint to use the chosen preset and pulls
            in the right peer dependencies:
        </p>
        <CodePreview language="bash" :code="switchCli" />
        <p>If you'd rather wire it up by hand, the per-provider snippets are below.</p>

        <h3>Heroicons</h3>
        <CodePreview language="bash" :code="installHero" />
        <CodePreview language="javascript" :code="wireHero" />

        <h3>Google Material Symbols</h3>
        <CodePreview language="bash" :code="installMaterial" />
        <CodePreview language="javascript" :code="wireMaterial" />

        <h3>Solar</h3>
        <CodePreview language="bash" :code="installSolar" />
        <CodePreview language="javascript" :code="wireSolar" />

        <!-- CONCEPTS -->
        <h2>Concepts</h2>
        <p>Three things to know about how the system works:</p>
        <ol>
            <li>
                <strong>Aliases</strong> are semantic names beginning with <code>$</code> that the library's own
                components reference (<code>$expand</code>, <code>$close</code>, <code>$success</code>, …). Each
                preset maps every alias to a concrete icon from that provider.
            </li>
            <li>
                <strong>Sets</strong> are named icon providers (<code>fa</code>, <code>heroicons</code>,
                <code>material-symbols</code>, <code>solar</code>, …). They let you reference any icon by its
                Iconify-style name (<code>"solar:home-bold"</code>) without remapping aliases.
            </li>
            <li>
                <strong>Slots</strong> trump everything. Any component with a user-facing icon prop also exposes
                a <code>#icon</code> slot — drop in <code>&lt;MyHandRolledIcon /&gt;</code> and the system gets out of
                your way.
            </li>
        </ol>
    </div>
</template>
