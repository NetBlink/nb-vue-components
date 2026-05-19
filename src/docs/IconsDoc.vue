<script setup lang="ts">
import { ref, computed } from 'vue';
import { CodePreview } from '../index';
import { useNbIcons, NbIcon } from '../icons';
import { faAliasPreset } from '../icons/presets/fa';
import { heroiconsAliasPreset } from '../icons/presets/heroicons';
import { materialAliasPreset } from '../icons/presets/material';
import { solarAliasPreset } from '../icons/presets/solar';
import type { AliasName } from '../icons/types';

type SetKey = 'fa' | 'heroicons' | 'material' | 'solar';

const sets: Record<SetKey, { label: string; preset: Record<AliasName, unknown> }> = {
    fa:        { label: 'FontAwesome',      preset: faAliasPreset as any },
    heroicons: { label: 'Heroicons',        preset: heroiconsAliasPreset as any },
    material:  { label: 'Material Symbols', preset: materialAliasPreset as any },
    solar:     { label: 'Solar',            preset: solarAliasPreset as any },
};

const activeSet = ref<SetKey>('fa');
const registry = useNbIcons();

function switchTo(key: string): void {
    if (!(key in sets)) return;
    const k = key as SetKey;
    const preset = sets[k].preset;
    (Object.keys(preset) as AliasName[]).forEach((alias) => {
        registry.registerAlias(alias, preset[alias] as any);
    });
    activeSet.value = k;
}

const showcaseAliases: AliasName[] = [
    '$expand', '$close', '$success', '$error', '$warning', '$info',
    '$search', '$eye', '$eye-off', '$help', '$edit', '$edit-alt',
    '$construction', '$sun', '$moon',
];

// Code snippets ----------------------------------------------------------------

const setupSnippets: Record<SetKey, { install: string[]; wire: string[] }> = {
    fa: {
        install: [
            'npm install @netblink/vue-components',
            'npm install @fortawesome/vue-fontawesome @fortawesome/fontawesome-svg-core',
            'npm install @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons',
        ],
        wire: [
            "import { createNbIcons } from '@netblink/vue-components/icons';",
            "import { faAliasPreset, faSet } from '@netblink/vue-components/icons/fa';",
            '',
            'app.use(createNbIcons({',
            '    aliases: faAliasPreset,',
            '    sets: { fa: faSet },',
            "    defaultSet: 'fa',",
            '}));',
        ],
    },
    heroicons: {
        install: ['npm install @iconify/vue @iconify-json/heroicons'],
        wire: [
            "import { createNbIcons } from '@netblink/vue-components/icons';",
            "import { heroiconsAliasPreset, heroiconsSet } from '@netblink/vue-components/icons/heroicons';",
            '',
            'app.use(createNbIcons({',
            '    aliases: heroiconsAliasPreset,',
            '    sets: { heroicons: heroiconsSet },',
            '}));',
        ],
    },
    material: {
        install: ['npm install @iconify/vue @iconify-json/material-symbols'],
        wire: [
            "import { createNbIcons } from '@netblink/vue-components/icons';",
            "import { materialAliasPreset, materialSet } from '@netblink/vue-components/icons/material';",
            '',
            'app.use(createNbIcons({',
            '    aliases: materialAliasPreset,',
            "    sets: { 'material-symbols': materialSet },",
            '}));',
        ],
    },
    solar: {
        install: ['npm install @iconify/vue @iconify-json/solar'],
        wire: [
            "import { createNbIcons } from '@netblink/vue-components/icons';",
            "import { solarAliasPreset, solarSet } from '@netblink/vue-components/icons/solar';",
            '',
            'app.use(createNbIcons({',
            '    aliases: solarAliasPreset,',
            '    sets: { solar: solarSet },',
            '}));',
        ],
    },
};

const setupTab = ref<string>('fa');

const usageSnippet = [
    '<NbIcon name="$expand" />                       <!-- alias (changes with provider) -->',
    '<NbIcon name="$close" class="text-red-500" />',
    '',
    '<NbIcon name="solar:rocket-bold" size="lg" />   <!-- any Iconify icon -->',
    '<NbIcon name="heroicons:user" />',
    '',
    '<NbIcon :name="MyVueIcon" />                    <!-- raw Vue component -->',
];

const switchSnippet = [
    'npx @netblink/vue-components-migrate switch fa        # FontAwesome (default)',
    'npx @netblink/vue-components-migrate switch hero      # Heroicons',
    'npx @netblink/vue-components-migrate switch material  # Google Material Symbols',
    'npx @netblink/vue-components-migrate switch solar     # Solar',
];

const activeWire = computed(() => setupSnippets[setupTab.value as SetKey].wire);
const activeInstall = computed(() => setupSnippets[setupTab.value as SetKey].install);
</script>

<template>
    <div class="space-y-10">
        <!-- HEADER -->
        <header class="space-y-3">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Icons</h1>
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                Every NB component draws its UI through a single <code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">&lt;NbIcon&gt;</code>
                primitive. Pick an icon provider once via <code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">createNbIcons()</code> —
                every chevron, close button, and validation icon across the library follows. <strong>FontAwesome</strong> is the default.
            </p>
        </header>

        <!-- LIVE PREVIEW CARD -->
        <section class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800/60">
            <div class="flex items-center justify-between gap-4 border-b border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div>
                    <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Live preview</h2>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Pick a provider — every icon below (and across the rest of this docs site) re-renders.</p>
                </div>
                <div class="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <button
                        v-for="(meta, key) in sets"
                        :key="key"
                        type="button"
                        @click="switchTo(key)"
                        class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors"
                        :class="activeSet === key
                            ? 'bg-primary-600 text-white shadow-sm'
                            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'"
                    >
                        {{ meta.label }}
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-px bg-gray-200 sm:grid-cols-5 dark:bg-gray-700">
                <div
                    v-for="alias in showcaseAliases"
                    :key="alias"
                    class="flex flex-col items-center justify-center gap-2 bg-white px-4 py-6 dark:bg-gray-800"
                >
                    <NbIcon :name="alias" size="xl" class="text-gray-800 dark:text-gray-200" />
                    <code class="text-[11px] text-gray-500 dark:text-gray-400">{{ alias }}</code>
                </div>
            </div>
        </section>

        <!-- USAGE -->
        <section class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Using NbIcon</h2>
            <p class="text-gray-600 dark:text-gray-400">
                Three accepted forms: a built-in alias, any Iconify set-prefixed name, or any Vue component / raw SVG you already have.
            </p>
            <CodePreview language="html" :code="usageSnippet" />
        </section>

        <!-- ICONIFY SEARCH CALLOUT -->
        <section class="rounded-xl border border-primary-200 bg-primary-50/50 p-5 dark:border-primary-700/50 dark:bg-primary-900/20">
            <div class="flex items-start gap-3">
                <NbIcon name="$search" class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-300" />
                <div>
                    <h3 class="font-semibold text-gray-900 dark:text-gray-100">Find any icon</h3>
                    <p class="mt-1 text-sm text-gray-700 dark:text-gray-300">
                        Heroicons, Material Symbols, Solar and ~200 other sets are all browsable on
                        <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener" class="font-medium text-primary-600 underline dark:text-primary-300">icon-sets.iconify.design</a>.
                        Copy any icon's name (e.g. <code class="rounded bg-white px-1.5 py-0.5 text-xs dark:bg-gray-800">solar:rocket-bold</code>)
                        and pass it straight to <code class="rounded bg-white px-1.5 py-0.5 text-xs dark:bg-gray-800">&lt;NbIcon name="…" /&gt;</code>.
                    </p>
                </div>
            </div>
        </section>

        <!-- SWITCHING VIA CLI -->
        <section class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Switching providers</h2>
            <p class="text-gray-600 dark:text-gray-400">
                One command rewrites the <code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">createNbIcons()</code> call in
                your app entrypoint and prints the matching <code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">npm install</code>:
            </p>
            <CodePreview language="bash" :code="switchSnippet" />
        </section>

        <!-- SETUP TABS -->
        <section class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Wire it up by hand</h2>
            <p class="text-gray-600 dark:text-gray-400">If you'd rather edit your entry file directly, pick a provider:</p>

            <div class="flex flex-wrap gap-1 border-b border-gray-200 dark:border-gray-700">
                <button
                    v-for="(meta, key) in sets"
                    :key="key"
                    type="button"
                    @click="setupTab = key"
                    class="-mb-px border-b-2 px-4 py-2 text-sm font-medium transition-colors"
                    :class="setupTab === key
                        ? 'border-primary-600 text-primary-600 dark:border-primary-300 dark:text-primary-300'
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'"
                >
                    {{ meta.label }}
                </button>
            </div>

            <div class="pt-3">
                <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">1. Install</p>
                <CodePreview language="bash" :code="activeInstall" />
                <p class="mt-4 mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">2. Wire in your entry file</p>
                <CodePreview language="javascript" :code="activeWire" />
            </div>
        </section>

        <!-- CONCEPTS -->
        <section class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">How it works</h2>
            <dl class="grid gap-4 sm:grid-cols-3">
                <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60">
                    <dt class="mb-1 font-semibold text-gray-900 dark:text-gray-100">Aliases</dt>
                    <dd class="text-sm text-gray-600 dark:text-gray-400">
                        Semantic names like <code>$expand</code>, <code>$close</code>, <code>$success</code>. The library references these everywhere; each preset maps them to a concrete icon.
                    </dd>
                </div>
                <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60">
                    <dt class="mb-1 font-semibold text-gray-900 dark:text-gray-100">Sets</dt>
                    <dd class="text-sm text-gray-600 dark:text-gray-400">
                        Registered providers (<code>fa</code>, <code>heroicons</code>, <code>solar</code>…). Reference any icon by its full name — <code>"solar:home-bold"</code>.
                    </dd>
                </div>
                <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60">
                    <dt class="mb-1 font-semibold text-gray-900 dark:text-gray-100">Slots</dt>
                    <dd class="text-sm text-gray-600 dark:text-gray-400">
                        Every icon-bearing component has a <code>#icon</code> slot — drop in your own Vue component and the system gets out of your way.
                    </dd>
                </div>
            </dl>
        </section>
    </div>
</template>
