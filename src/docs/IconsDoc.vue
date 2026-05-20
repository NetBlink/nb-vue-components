<script setup lang="ts">
import { ref, computed, markRaw } from 'vue';
import {
    CodePreview,
    Alert,
    Collapse,
    CollapsableSection,
    NewModal,
    DataTile,
    DescriptionList,
    DescriptionListItem,
    UnderConstruction,
    Input,
    InputLabel,
    PrimaryButton,
    SecondaryButton,
} from '../index';
import { useNbIcons, NbIcon } from '../icons';
import type { AliasName, IconLike } from '../icons/types';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

// === Real, programmer-style icon imports ====================================
// This is exactly what a consumer project would write. The library's prepared
// presets (e.g. `heroiconsAliasPreset`) are just pre-baked versions of these
// alias maps - kept for one-line drop-in usage, but the docs lead with the raw
// approach so you can see what's actually happening and customize freely.

// FontAwesome - each `faXyz` is an IconDefinition object passed through the
// FA set we registered in `docs/main.js`.
import {
    faChevronDown, faTimes, faCheckCircle, faTimesCircle,
    faExclamationTriangle, faInfoCircle, faSearch, faEye, faEyeSlash,
    faCircleQuestion, faPencil, faPenRuler, faPersonDigging, faSun, faMoon,
} from '@fortawesome/free-solid-svg-icons';

// Heroicons - official Vue components. Tree-shakable, one import per icon.
import {
    ChevronDownIcon, XMarkIcon, CheckCircleIcon, XCircleIcon,
    ExclamationTriangleIcon, InformationCircleIcon, MagnifyingGlassIcon,
    EyeIcon, EyeSlashIcon, QuestionMarkCircleIcon, PencilIcon,
    PencilSquareIcon, WrenchScrewdriverIcon, SunIcon, MoonIcon,
} from '@heroicons/vue/24/outline';

// Material Symbols + Solar use Iconify. The icon data is pre-registered with
// `addCollection(...)` once in `docs/main.js` - these strings then resolve to
// real Iconify-rendered icons. You'd do the same in your own app.

// ============================================================================

type SetKey = 'fa' | 'heroicons' | 'material' | 'solar';

const aliasMaps: Record<SetKey, Record<AliasName, IconLike>> = {
    fa: {
        $expand: faChevronDown,
        $close: faTimes,
        $success: faCheckCircle,
        $error: faTimesCircle,
        $warning: faExclamationTriangle,
        $info: faInfoCircle,
        $search: faSearch,
        $eye: faEye,
        '$eye-off': faEyeSlash,
        $help: faCircleQuestion,
        $edit: faPencil,
        '$edit-alt': faPenRuler,
        $construction: faPersonDigging,
        $sun: faSun,
        $moon: faMoon,
        $whatsapp: faChevronDown, // fallback for the unmapped brand icon
    },
    heroicons: {
        $expand: markRaw(ChevronDownIcon),
        $close: markRaw(XMarkIcon),
        $success: markRaw(CheckCircleIcon),
        $error: markRaw(XCircleIcon),
        $warning: markRaw(ExclamationTriangleIcon),
        $info: markRaw(InformationCircleIcon),
        $search: markRaw(MagnifyingGlassIcon),
        $eye: markRaw(EyeIcon),
        '$eye-off': markRaw(EyeSlashIcon),
        $help: markRaw(QuestionMarkCircleIcon),
        $edit: markRaw(PencilIcon),
        '$edit-alt': markRaw(PencilSquareIcon),
        $construction: markRaw(WrenchScrewdriverIcon),
        $sun: markRaw(SunIcon),
        $moon: markRaw(MoonIcon),
        $whatsapp: markRaw(ChevronDownIcon),
    },
    material: {
        $expand: 'material-symbols:expand-more',
        $close: 'material-symbols:close',
        $success: 'material-symbols:check-circle',
        $error: 'material-symbols:cancel',
        $warning: 'material-symbols:warning',
        $info: 'material-symbols:info',
        $search: 'material-symbols:search',
        $eye: 'material-symbols:visibility',
        '$eye-off': 'material-symbols:visibility-off',
        $help: 'material-symbols:help',
        $edit: 'material-symbols:edit',
        '$edit-alt': 'material-symbols:edit-note',
        $construction: 'material-symbols:construction',
        $sun: 'material-symbols:light-mode',
        $moon: 'material-symbols:dark-mode',
        $whatsapp: 'material-symbols:chat',
    },
    solar: {
        $expand: 'solar:alt-arrow-down-linear',
        $close: 'solar:close-circle-linear',
        $success: 'solar:check-circle-linear',
        $error: 'solar:close-square-linear',
        $warning: 'solar:danger-triangle-linear',
        $info: 'solar:info-circle-linear',
        $search: 'solar:magnifer-linear',
        $eye: 'solar:eye-linear',
        '$eye-off': 'solar:eye-closed-linear',
        $help: 'solar:question-circle-linear',
        $edit: 'solar:pen-linear',
        '$edit-alt': 'solar:pen-new-square-linear',
        $construction: 'solar:sledgehammer-linear',
        $sun: 'solar:sun-linear',
        $moon: 'solar:moon-linear',
        $whatsapp: 'solar:chat-line-linear',
    },
};

const setMeta: Record<SetKey, { label: string }> = {
    fa:        { label: 'FontAwesome' },
    heroicons: { label: 'Heroicons' },
    material:  { label: 'Material Symbols' },
    solar:     { label: 'Solar' },
};

// Setup section has one extra tab beyond the live-switcher providers:
// the "any other source" patterns (Lucide, MDI, inline SVG, your own Vue
// component, CSS-class icon fonts).
const setupTabMeta: Record<string, { label: string }> = {
    ...setMeta,
    other: { label: 'Any other source' },
};

const activeSet = ref<SetKey>('fa');
const registry = useNbIcons();

function switchTo(key: string): void {
    if (!(key in aliasMaps)) return;
    const k = key as SetKey;
    const map = aliasMaps[k];
    (Object.keys(map) as AliasName[]).forEach((alias) => {
        registry.registerAlias(alias, map[alias]);
    });
    activeSet.value = k;
}

const showcaseAliases: AliasName[] = [
    '$expand', '$close', '$success', '$error', '$warning', '$info',
    '$search', '$eye', '$eye-off', '$help', '$edit', '$edit-alt',
    '$construction', '$sun', '$moon',
];

// === Code snippets for the "Wire it up" tabs ================================
// Each snippet shows what a programmer literally writes in their app - no
// preset abstractions, just real package imports and an inline alias map.

const setupSnippets: Record<SetKey, { install: string[]; wire: string[] }> = {
    fa: {
        install: [
            'npm install @netblink/vue-components',
            '',
            '# FontAwesome',
            'npm install @fortawesome/vue-fontawesome @fortawesome/fontawesome-svg-core \\',
            '            @fortawesome/free-solid-svg-icons',
        ],
        wire: [
            "// main.ts",
            "import { createApp } from 'vue';",
            "import NbVueComponents from '@netblink/vue-components';",
            "import { createNbIcons } from '@netblink/vue-components/icons';",
            "import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';",
            "import {",
            "    faChevronDown, faTimes, faCheckCircle, faTimesCircle,",
            "    faExclamationTriangle, faInfoCircle, faSearch,",
            "    faEye, faEyeSlash, faPencil,",
            "} from '@fortawesome/free-solid-svg-icons';",
            "import App from './App.vue';",
            "",
            "const app = createApp(App);",
            "app.use(NbVueComponents);",
            "",
            "// Wire the icon registry. Order doesn't matter - call createNbIcons",
            "// before or after NbVueComponents; the explicit one always wins.",
            "app.use(createNbIcons({",
            "    aliases: {",
            "        $expand:  faChevronDown,",
            "        $close:   faTimes,",
            "        $success: faCheckCircle,",
            "        $error:   faTimesCircle,",
            "        $warning: faExclamationTriangle,",
            "        $info:    faInfoCircle,",
            "        $search:  faSearch,",
            "        $eye:     faEye,",
            "        '$eye-off': faEyeSlash,",
            "        $edit:    faPencil,",
            "        // …map every alias you actually use",
            "    },",
            "    sets: { fa: { component: FontAwesomeIcon } },",
            "    defaultSet: 'fa',",
            "}));",
            "",
            "app.mount('#app');",
        ],
    },
    heroicons: {
        install: [
            '# Heroicons',
            'npm install @netblink/vue-components @heroicons/vue',
        ],
        wire: [
            "// main.ts",
            "import { createApp } from 'vue';",
            "import NbVueComponents from '@netblink/vue-components';",
            "import { createNbIcons } from '@netblink/vue-components/icons';",
            "import {",
            "    ChevronDownIcon, XMarkIcon, CheckCircleIcon, XCircleIcon,",
            "    ExclamationTriangleIcon, InformationCircleIcon,",
            "    MagnifyingGlassIcon, EyeIcon, EyeSlashIcon, PencilIcon,",
            "} from '@heroicons/vue/24/outline';",
            "import App from './App.vue';",
            "",
            "const app = createApp(App);",
            "app.use(NbVueComponents);",
            "app.use(createNbIcons({",
            "    aliases: {",
            "        $expand:  ChevronDownIcon,",
            "        $close:   XMarkIcon,",
            "        $success: CheckCircleIcon,",
            "        $error:   XCircleIcon,",
            "        $warning: ExclamationTriangleIcon,",
            "        $info:    InformationCircleIcon,",
            "        $search:  MagnifyingGlassIcon,",
            "        $eye:     EyeIcon,",
            "        '$eye-off': EyeSlashIcon,",
            "        $edit:    PencilIcon,",
            "        // …",
            "    },",
            "}));",
            "",
            "app.mount('#app');",
        ],
    },
    material: {
        install: [
            '# Material Symbols (Iconify)',
            'npm install @netblink/vue-components @iconify/vue @iconify-icons/material-symbols',
        ],
        wire: [
            "// main.ts",
            "import { createApp } from 'vue';",
            "import NbVueComponents from '@netblink/vue-components';",
            "import { createNbIcons } from '@netblink/vue-components/icons';",
            "import { Icon as IconifyIcon, addIcon } from '@iconify/vue';",
            "",
            "// Per-icon imports - add only what you actually reference.",
            "import expandMore  from '@iconify-icons/material-symbols/expand-more';",
            "import close       from '@iconify-icons/material-symbols/close';",
            "import checkCircle from '@iconify-icons/material-symbols/check-circle';",
            "import search      from '@iconify-icons/material-symbols/search';",
            "",
            "addIcon('material-symbols:expand-more',  expandMore);",
            "addIcon('material-symbols:close',        close);",
            "addIcon('material-symbols:check-circle', checkCircle);",
            "addIcon('material-symbols:search',       search);",
            "",
            "import App from './App.vue';",
            "const app = createApp(App);",
            "app.use(NbVueComponents);",
            "app.use(createNbIcons({",
            "    aliases: {",
            "        $expand:  'material-symbols:expand-more',",
            "        $close:   'material-symbols:close',",
            "        $success: 'material-symbols:check-circle',",
            "        $search:  'material-symbols:search',",
            "        // …match the icons you registered above",
            "    },",
            "    sets: {",
            "        'material-symbols': {",
            "            component: IconifyIcon,",
            "            resolve: name => `material-symbols:${name}`,",
            "        },",
            "    },",
            "}));",
            "",
            "app.mount('#app');",
        ],
    },
    solar: {
        install: [
            '# Solar (Iconify)',
            'npm install @netblink/vue-components @iconify/vue @iconify-icons/solar',
        ],
        wire: [
            "// main.ts",
            "import { createApp } from 'vue';",
            "import NbVueComponents from '@netblink/vue-components';",
            "import { createNbIcons } from '@netblink/vue-components/icons';",
            "import { Icon as IconifyIcon, addIcon } from '@iconify/vue';",
            "",
            "// Browse icon names at icon-sets.iconify.design/solar",
            "import arrowDown   from '@iconify-icons/solar/alt-arrow-down-linear';",
            "import closeCircle from '@iconify-icons/solar/close-circle-linear';",
            "import checkCircle from '@iconify-icons/solar/check-circle-linear';",
            "import magnifer    from '@iconify-icons/solar/magnifer-linear';",
            "",
            "addIcon('solar:alt-arrow-down-linear', arrowDown);",
            "addIcon('solar:close-circle-linear',   closeCircle);",
            "addIcon('solar:check-circle-linear',   checkCircle);",
            "addIcon('solar:magnifer-linear',       magnifer);",
            "",
            "import App from './App.vue';",
            "const app = createApp(App);",
            "app.use(NbVueComponents);",
            "app.use(createNbIcons({",
            "    aliases: {",
            "        $expand:  'solar:alt-arrow-down-linear',",
            "        $close:   'solar:close-circle-linear',",
            "        $success: 'solar:check-circle-linear',",
            "        $search:  'solar:magnifer-linear',",
            "    },",
            "    sets: {",
            "        solar: {",
            "            component: IconifyIcon,",
            "            resolve: name => `solar:${name}`,",
            "        },",
            "    },",
            "}));",
            "",
            "app.mount('#app');",
        ],
    },
};

const setupTab = ref<string>('fa');
const activeWire = computed(() => setupSnippets[setupTab.value as SetKey].wire);
const activeInstall = computed(() => setupSnippets[setupTab.value as SetKey].install);

const usageSnippet = [
    '<!-- Built-in alias - changes with the active provider -->',
    '<NbIcon name="$expand" />',
    '<NbIcon name="$close" class="text-red-500" size="lg" />',
    '',
    '<!-- Any icon from any Iconify set (search at icon-sets.iconify.design) -->',
    '<NbIcon name="solar:rocket-bold" size="xl" />',
    '<NbIcon name="material-symbols:home-outline" />',
    '',
    '<!-- Any Vue icon component you already have -->',
    '<NbIcon :name="ChevronDownIcon" />     <!-- @heroicons/vue -->',
    '<NbIcon :name="faGears" />             <!-- @fortawesome/free-solid-svg-icons -->',
];

const switchCmd = [
    '# Convenience helper that rewrites your createNbIcons() call:',
    'npx @netblink/vue-components-migrate switch fa        # FontAwesome (default)',
    'npx @netblink/vue-components-migrate switch hero      # Heroicons',
    'npx @netblink/vue-components-migrate switch material  # Google Material Symbols',
    'npx @netblink/vue-components-migrate switch solar     # Solar',
];

// === "Custom libraries / your own SVG" snippets ============================

const lucideSnippet = [
    '// Lucide - exactly the same pattern as Heroicons:',
    "import { ChevronDown, X, Search, Eye, EyeOff } from 'lucide-vue-next';",
    '',
    'app.use(createNbIcons({',
    '    aliases: {',
    '        $expand:  ChevronDown,',
    '        $close:   X,',
    '        $search:  Search,',
    '        $eye:     Eye,',
    "        '$eye-off': EyeOff,",
    '    },',
    '}));',
];

const mdiSnippet = [
    '// MDI - per-icon imports via @mdi/js + a tiny render component:',
    "import { mdiChevronDown, mdiClose } from '@mdi/js';",
    "import { defineComponent, h } from 'vue';",
    '',
    '// Tiny MDI render component. Real apps usually have one of these',
    '// already - anything that renders an <svg> works here.',
    'const MdiIcon = defineComponent({',
    '    props: { path: String },',
    "    render() { return h('svg', { viewBox: '0 0 24 24' }, h('path', { d: this.path })); },",
    '});',
    '',
    'app.use(createNbIcons({',
    '    aliases: {',
    '        $expand: h(MdiIcon, { path: mdiChevronDown }),',
    '        $close:  h(MdiIcon, { path: mdiClose }),',
    '    },',
    '}));',
];

const rawSvgSnippet = [
    '// Raw inline SVG - wrap it in `{ svg: \'...\' }`:',
    'app.use(createNbIcons({',
    '    aliases: {',
    "        $expand: { svg: '<svg viewBox=\"0 0 24 24\" fill=\"currentColor\">' +",
    "                          '<path d=\"M6 9l6 6 6-6\"/></svg>' },",
    '    },',
    '}));',
];

const customComponentSnippet = [
    '// Your own Vue component - anything goes:',
    "import MyHandRolledIcon from './icons/MyHandRolledIcon.vue';",
    '',
    'app.use(createNbIcons({',
    '    aliases: {',
    '        $expand: MyHandRolledIcon,',
    '    },',
    '}));',
];

const cssClassSnippet = [
    '// CSS class-based icons (Bootstrap Icons, Material Icons font, etc.) -',
    "// pass a string that doesn't start with $ and contains no `:`. NbIcon",
    '// renders <i class="..."> for you:',
    'app.use(createNbIcons({',
    '    aliases: {',
    "        $expand: 'bi bi-chevron-down',",
    "        $close:  'material-icons close',",
    '    },',
    '}));',
];

// === Live component examples state =========================================

const alertVisible = ref(true);
const collapseExpanded = ref(false);
const modalOpen = ref(false);
const passwordValue = ref('s3cret');

</script>

<template>
    <div class="space-y-10">
        <!-- HEADER -->
        <header class="space-y-3">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Icons</h1>
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                All icons render through <code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">&lt;NbIcon&gt;</code>. Map your icon source - FontAwesome, Heroicons, Material Symbols, Solar, an <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener" class="font-medium text-primary-600 underline dark:text-primary-300">Iconify</a> set, or your own SVG components - to named aliases. Default source is FontAwesome.
            </p>
        </header>

        <!-- LIVE PREVIEW -->
        <section class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800/60">
            <div class="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div>
                    <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Live preview</h2>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Pick a provider. The icons below and the rest of the docs site re-render.</p>
                </div>
                <div class="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <button
                        v-for="(meta, key) in setMeta"
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

        <!-- ICONIFY SEARCH CALLOUT -->
        <section class="rounded-xl border border-primary-200 bg-primary-50/50 p-5 dark:border-primary-700/50 dark:bg-primary-900/20">
            <div class="flex items-start gap-3">
                <NbIcon name="$search" size="lg" class="mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-300" />
                <div>
                    <h3 class="font-semibold text-gray-900 dark:text-gray-100">Browse 200+ icon sets at Iconify</h3>
                    <p class="mt-1 text-sm text-gray-700 dark:text-gray-300">
                        <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener" class="font-medium text-primary-600 underline dark:text-primary-300">icon-sets.iconify.design</a>
                        is the universal icon browser. Copy any icon's name (e.g. <code class="rounded bg-white px-1.5 py-0.5 text-xs dark:bg-gray-800">solar:rocket-bold</code>)
                        and pass it to <code class="rounded bg-white px-1.5 py-0.5 text-xs dark:bg-gray-800">&lt;NbIcon name="…" /&gt;</code> -
                        provided you've installed the matching <code class="rounded bg-white px-1.5 py-0.5 text-xs dark:bg-gray-800">@iconify-json/&lt;set&gt;</code> data package
                        and registered it once with <code class="rounded bg-white px-1.5 py-0.5 text-xs dark:bg-gray-800">addCollection()</code>.
                    </p>
                </div>
            </div>
        </section>

        <!-- USAGE -->
        <section class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Using NbIcon in your templates</h2>
            <p class="text-gray-600 dark:text-gray-400">
                Three forms - pick whichever matches what you have on hand. They mix and match freely in the same project.
            </p>
            <CodePreview language="html" :code="usageSnippet" />
        </section>

        <!-- SETUP TABS - example-led -->
        <section class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Setup - by example</h2>
            <p class="text-gray-600 dark:text-gray-400">
                Each tab is what you'd literally write in your own <code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">main.ts</code> -
                real package imports, an inline alias map you can adapt. Mix providers freely in one project.
            </p>

            <div class="flex flex-wrap gap-1 border-b border-gray-200 dark:border-gray-700">
                <button
                    v-for="(meta, key) in setupTabMeta"
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

            <!-- Four provider tabs: simple install + wire pair -->
            <div v-if="setupTab !== 'other'" class="pt-3">
                <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">1. Install</p>
                <CodePreview language="bash" :code="activeInstall" />
                <p class="mt-4 mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">2. Wire it up in your entry file</p>
                <CodePreview language="javascript" :code="activeWire" />
            </div>

            <!-- "Any other source" tab: five patterns -->
            <div v-else class="pt-3 space-y-3">
                <p class="text-gray-600 dark:text-gray-400">
                    The tabs above are example sources. The <code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">aliases</code> map accepts Vue components, render functions, inline SVG, and CSS class strings - mixed in one project.
                </p>

                <h4 class="mt-4 font-semibold text-gray-900 dark:text-gray-100">Lucide / per-icon-component libraries</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Libraries that ship per-icon Vue components (Lucide, Phosphor, Tabler, Carbon, ...) work the same way as Heroicons: import and pass.
                </p>
                <CodePreview language="javascript" :code="lucideSnippet" />

                <h4 class="mt-6 font-semibold text-gray-900 dark:text-gray-100">MDI / SVG-path libraries</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Libraries that ship raw SVG paths (like <code>@mdi/js</code>) need a small wrapper component.
                </p>
                <CodePreview language="javascript" :code="mdiSnippet" />

                <h4 class="mt-6 font-semibold text-gray-900 dark:text-gray-100">Inline SVG</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Have a custom SVG you want to drop in for one alias? Wrap it in <code>{ svg: '…' }</code>. The string is sanitized before rendering.
                </p>
                <CodePreview language="javascript" :code="rawSvgSnippet" />

                <h4 class="mt-6 font-semibold text-gray-900 dark:text-gray-100">Your own Vue component</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Any <code>.vue</code> SFC works. Useful when an icon needs custom logic, gradients, or animation that doesn't fit a static SVG.
                </p>
                <CodePreview language="javascript" :code="customComponentSnippet" />

                <h4 class="mt-6 font-semibold text-gray-900 dark:text-gray-100">CSS-class icon fonts</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Bootstrap Icons, Material Icons font, the FA <em>kit</em> CSS bundle, your own bespoke icon font: pass a class string and
                    NbIcon renders <code>&lt;i class="…" /&gt;</code> for you.
                </p>
                <CodePreview language="javascript" :code="cssClassSnippet" />
            </div>
        </section>

        <!-- CLI SWITCH -->
        <section class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Already wired up? Swap providers with one command</h2>
            <p class="text-gray-600 dark:text-gray-400">
                The migrate package can rewrite the <code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">createNbIcons()</code> block in your entry file
                and print the matching <code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">npm install</code>:
            </p>
            <CodePreview language="bash" :code="switchCmd" />
        </section>

        <!-- CONCEPTS -->
        <section class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">How it works</h2>
            <dl class="grid gap-4 sm:grid-cols-3">
                <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60">
                    <dt class="mb-1 font-semibold text-gray-900 dark:text-gray-100">Aliases</dt>
                    <dd class="text-sm text-gray-600 dark:text-gray-400">
                        Semantic names like <code>$expand</code>, <code>$close</code>, <code>$success</code>. The library references these internally; you map each one to a concrete icon from any source.
                    </dd>
                </div>
                <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60">
                    <dt class="mb-1 font-semibold text-gray-900 dark:text-gray-100">Sets</dt>
                    <dd class="text-sm text-gray-600 dark:text-gray-400">
                        Registered renderers - FA, an Iconify component, etc. Reference any icon from a set by its full name: <code>"solar:home-bold"</code>.
                    </dd>
                </div>
                <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60">
                    <dt class="mb-1 font-semibold text-gray-900 dark:text-gray-100">Slots</dt>
                    <dd class="text-sm text-gray-600 dark:text-gray-400">
                        Every icon-bearing component has an <code>#icon</code> slot - drop in your own Vue component and skip the resolver entirely.
                    </dd>
                </div>
            </dl>
        </section>

        <!-- LIVE COMPONENT EXAMPLES ========================================== -->
        <section class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">See it in real components</h2>
            <p class="text-gray-600 dark:text-gray-400">
                Click any provider in the <strong>Live preview</strong> at the top of this page - every icon below is a real
                <code>@netblink/vue-components</code> component using the same aliases as your app, so they all re-render with the chosen set.
            </p>

            <div class="grid gap-6 lg:grid-cols-2">
                <!-- Alert variants -->
                <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60">
                    <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Alert · <code>$success</code> <code>$error</code> <code>$warning</code> <code>$info</code> <code>$close</code>
                    </div>
                    <Alert type="success">Order placed - confirmation sent to your inbox.</Alert>
                    <Alert type="error">Something went wrong. Please try again.</Alert>
                    <Alert type="warning">Your trial expires in 3 days.</Alert>
                    <Alert v-model="alertVisible" type="info" dismissible>
                        Dismissible alert - click the × to hide it. (Re-toggle below.)
                    </Alert>
                    <button
                        type="button"
                        class="text-xs text-primary-600 underline dark:text-primary-300"
                        @click="alertVisible = !alertVisible"
                    >
                        {{ alertVisible ? 'Hide' : 'Show' }} dismissible alert
                    </button>
                </div>

                <!-- Collapse / chevron -->
                <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60">
                    <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Collapse · <code>$expand</code>
                    </div>
                    <Collapse name="Settings" :open="collapseExpanded">
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            Watch the chevron when you click the header - it rotates and changes glyph with the active provider.
                        </p>
                    </Collapse>

                    <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 pt-2">
                        CollapsableSection · <code>$expand</code>
                    </div>
                    <CollapsableSection title="Advanced options">
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            Same alias, different wrapper. Section variant flips with the switcher too.
                        </p>
                    </CollapsableSection>
                </div>

                <!-- DataTile with user-supplied icon -->
                <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60">
                    <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        DataTile · user-supplied <code>:icon</code> (always FA here)
                    </div>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                        Components that take an <code>icon</code> prop accept any <code>IconLike</code> - the prop value wins over aliases,
                        so the rocket below stays FA regardless of the switcher.
                    </p>
                    <div class="grid grid-cols-2 gap-3">
                        <DataTile :value="42" label="Launches today" :icon="faRocket" theme="primary" />
                        <DataTile :value="'£12.4k'" label="MTD" :icon="faRocket" theme="success" />
                    </div>
                </div>

                <!-- Modal trigger / NewModal close button -->
                <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60">
                    <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        NewModal · <code>$close</code>
                    </div>
                    <PrimaryButton @click="modalOpen = true">Open modal</PrimaryButton>
                    <NewModal v-model="modalOpen" title="Switch the icon set">
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            The close (×) button in the header uses the <code>$close</code> alias. Pick another provider while this modal is open
                            and watch the glyph swap.
                        </p>
                        <template #footer>
                            <SecondaryButton @click="modalOpen = false">Close</SecondaryButton>
                        </template>
                    </NewModal>
                </div>

                <!-- InputLabel tooltip indicator -->
                <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60">
                    <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        InputLabel · <code>$help</code>
                    </div>
                    <Input
                        v-model="passwordValue"
                        label="Account ID"
                        :tooltip="'This is your unique account identifier - the help-circle next to the label uses $help.'"
                        placeholder="acc_…"
                    />
                </div>

                <!-- UnderConstruction -->
                <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60">
                    <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        UnderConstruction · <code>$construction</code>
                    </div>
                    <UnderConstruction info="Demo block - picks up $construction from the active provider." />
                </div>

                <!-- DescriptionList edit icons -->
                <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60 lg:col-span-2">
                    <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        DescriptionList · <code>$edit</code> <code>$edit-alt</code>
                    </div>
                    <DescriptionList>
                        <DescriptionListItem label="Display name" editable @edit="() => {}">
                            John Doe
                        </DescriptionListItem>
                        <DescriptionListItem label="Email" editable @edit="() => {}">
                            john@example.com
                        </DescriptionListItem>
                    </DescriptionList>
                </div>
            </div>
        </section>
    </div>
</template>
