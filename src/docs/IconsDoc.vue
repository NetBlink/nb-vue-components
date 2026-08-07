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
    Tabs,
    Tab,
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
import DocConfig from './HelperComponents/DocConfig.vue';

const configBlocks = [
    {
        filename: 'resources/js/app.js',
        language: 'js',
        code: [
            "import { createApp } from 'vue';",
            "import NbVueComponents from '@netblink/vue-components';",
            "import { createNbIcons } from '@netblink/vue-components/icons';",
            "import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';",
            'import {',
            '    faChevronDown, faTimes, faCheckCircle, faTimesCircle,',
            '    faExclamationTriangle, faInfoCircle, faSearch,',
            '    faEye, faEyeSlash, faPencil,',
            "} from '@fortawesome/free-solid-svg-icons';",
            '',
            'const app = createApp(App);',
            'app.use(NbVueComponents);',
            '',
            '// Map every alias the components use to an icon from your library.',
            '// Order does not matter - an explicit createNbIcons() always wins',
            '// over the default registry NbVueComponents installs for you.',
            'app.use(createNbIcons({',
            '    aliases: {',
            '        $expand:  faChevronDown,',
            '        $close:   faTimes,',
            '        $success: faCheckCircle,',
            '        $error:   faTimesCircle,',
            '        $warning: faExclamationTriangle,',
            '        $info:    faInfoCircle,',
            '        $search:  faSearch,',
            '        $eye:     faEye,',
            "        '$eye-off': faEyeSlash,",
            '        $edit:    faPencil,',
            '    },',
            '    sets: { fa: { component: FontAwesomeIcon } },',
            "    defaultSet: 'fa',",
            '}));',
            '',
            "app.mount('#app');",
        ],
    },
    {
        filename: 'AnyPage.vue',
        code: [
            '<!-- Built-in alias - follows whichever provider you registered above -->',
            '<NbIcon name="$expand" />',
            '<NbIcon name="$close" class="text-red-500" size="lg" />',
            '',
            '<!-- Any Iconify set (browse at icon-sets.iconify.design) -->',
            '<NbIcon name="solar:rocket-bold" size="xl" />',
            '',
            '<!-- Or any Vue icon component you already import -->',
            '<NbIcon :name="ChevronDownIcon" />',
        ],
    },
];

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

// Tab strips take an array; the docs keep these as keyed maps for lookup.
const providerTabs = computed(() => Object.entries(setMeta).map(([value, meta]) => ({ value, label: meta.label })));
const setupTabs = computed(() => Object.entries(setupTabMeta).map(([value, meta]) => ({ value, label: meta.label })));

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
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                All icons render through <code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">&lt;NbIcon&gt;</code>. Map your icon source - FontAwesome, Heroicons, Material Symbols, Solar, an <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener" class="font-medium text-primary-600 underline dark:text-primary-300">Iconify</a> set, or your own SVG components - to named aliases. Default source is FontAwesome.
            </p>
        </header>

        <DocConfig :blocks="configBlocks" />

        <!-- LIVE PREVIEW -->
        <section class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800/60">
            <div class="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div>
                    <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Live preview</h2>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Pick a provider. The icons below and the rest of the docs site re-render.</p>
                </div>
                <Tabs
                    :tabs="providerTabs"
                    variant="pills"
                    :model-value="activeSet"
                    aria-label="Icon provider"
                    @update:model-value="switchTo"
                />
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
                    <div class="font-semibold text-gray-900 dark:text-gray-100">Browse 200+ icon sets at Iconify</div>
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
        <section id="using-nbicon" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Using NbIcon in your templates</h2>
            <p class="text-gray-600 dark:text-gray-400">
                Three forms - pick whichever matches what you have on hand. They mix and match freely in the same project.
            </p>
            <CodePreview language="html" :code="usageSnippet" />
        </section>

        <!-- SETUP TABS - example-led -->
        <section id="setup-by-example" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Setup - by example</h2>
            <p class="text-gray-600 dark:text-gray-400">
                Each tab is what you'd literally write in your own <code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">main.ts</code> -
                real package imports, an inline alias map you can adapt. Mix providers freely in one project.
            </p>

            <Tabs v-model="setupTab" :tabs="setupTabs" aria-label="Setup by provider">
                <!-- Four provider tabs: simple install + wire pair -->
                <Tab v-for="(meta, key) in setMeta" :key="key" :value="key">
                    <p class="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">1. Install</p>
                    <CodePreview language="bash" :code="setupSnippets[key].install" />
                    <p class="mt-4 mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                        2. Wire it up in your entry file
                    </p>
                    <CodePreview language="javascript" :code="setupSnippets[key].wire" />
                </Tab>

                <!-- "Any other source" tab: five patterns -->
                <Tab value="other" class="space-y-3">
                <p class="text-gray-600 dark:text-gray-400">
                    The tabs above are example sources. The <code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">aliases</code> map accepts Vue components, render functions, inline SVG, and CSS class strings - mixed in one project.
                </p>

                <div class="mt-4 font-semibold text-gray-900 dark:text-gray-100">Lucide / per-icon-component libraries</div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Libraries that ship per-icon Vue components (Lucide, Phosphor, Tabler, Carbon, ...) work the same way as Heroicons: import and pass.
                </p>
                <CodePreview language="javascript" :code="lucideSnippet" />

                <div class="mt-6 font-semibold text-gray-900 dark:text-gray-100">MDI / SVG-path libraries</div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Libraries that ship raw SVG paths (like <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">@mdi/js</code>) need a small wrapper component.
                </p>
                <CodePreview language="javascript" :code="mdiSnippet" />

                <div class="mt-6 font-semibold text-gray-900 dark:text-gray-100">Inline SVG</div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Have a custom SVG you want to drop in for one alias? Wrap it in <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">{ svg: '…' }</code>. The string is sanitized before rendering.
                </p>
                <CodePreview language="javascript" :code="rawSvgSnippet" />

                <div class="mt-6 font-semibold text-gray-900 dark:text-gray-100">Your own Vue component</div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Any <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">.vue</code> SFC works. Useful when an icon needs custom logic, gradients, or animation that doesn't fit a static SVG.
                </p>
                <CodePreview language="javascript" :code="customComponentSnippet" />

                <div class="mt-6 font-semibold text-gray-900 dark:text-gray-100">CSS-class icon fonts</div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Bootstrap Icons, Material Icons font, the FA <em>kit</em> CSS bundle, your own bespoke icon font: pass a class string and
                    NbIcon renders <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">&lt;i class="…" /&gt;</code> for you.
                </p>
                <CodePreview language="javascript" :code="cssClassSnippet" />
                </Tab>
            </Tabs>
        </section>

        <!-- CLI SWITCH -->
        <section id="cli-provider-switch" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">CLI provider switch</h2>
            <p class="text-gray-600 dark:text-gray-400">
                The migrate package can rewrite the <code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">createNbIcons()</code> block in your entry file
                and print the matching <code class="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800">npm install</code>:
            </p>
            <CodePreview language="bash" :code="switchCmd" />
        </section>

        <!-- CONCEPTS -->
        <section id="how-it-works" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">How it works</h2>
            <dl class="grid gap-4 sm:grid-cols-3">
                <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60">
                    <dt class="mb-1 font-semibold text-gray-900 dark:text-gray-100">Aliases</dt>
                    <dd class="text-sm text-gray-600 dark:text-gray-400">
                        Semantic names like <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">$expand</code>, <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">$close</code>, <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">$success</code>. The library references these internally; you map each one to a concrete icon from any source.
                    </dd>
                </div>
                <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60">
                    <dt class="mb-1 font-semibold text-gray-900 dark:text-gray-100">Sets</dt>
                    <dd class="text-sm text-gray-600 dark:text-gray-400">
                        Registered renderers - FA, an Iconify component, etc. Reference any icon from a set by its full name: <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">"solar:home-bold"</code>.
                    </dd>
                </div>
                <div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60">
                    <dt class="mb-1 font-semibold text-gray-900 dark:text-gray-100">Slots</dt>
                    <dd class="text-sm text-gray-600 dark:text-gray-400">
                        Every icon-bearing component has an <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">#icon</code> slot - drop in your own Vue component and skip the resolver entirely.
                    </dd>
                </div>
            </dl>
        </section>

        <!-- LIVE COMPONENT EXAMPLES ========================================== -->
        <section id="see-it-in-real-components" class="space-y-3">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">See it in real components</h2>
            <p class="text-gray-600 dark:text-gray-400">
                Click any provider in the <strong>Live preview</strong> at the top of this page - every icon below is a real
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">@netblink/vue-components</code> component using the same aliases as your app, so they all re-render with the chosen set.
            </p>

            <div class="grid gap-6 lg:grid-cols-2">
                <!-- Alert variants -->
                <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60">
                    <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Alert · <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">$success</code> <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">$error</code> <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">$warning</code> <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">$info</code> <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">$close</code>
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
                        Collapse · <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">$expand</code>
                    </div>
                    <Collapse name="Settings" :open="collapseExpanded">
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            Watch the chevron when you click the header - it rotates and changes glyph with the active provider.
                        </p>
                    </Collapse>

                    <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 pt-2">
                        CollapsableSection · <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">$expand</code>
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
                        DataTile · user-supplied <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">:icon</code> (always FA here)
                    </div>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                        Components that take an <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">icon</code> prop accept any <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">IconLike</code> - the prop value wins over aliases,
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
                        NewModal · <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">$close</code>
                    </div>
                    <PrimaryButton @click="modalOpen = true">Open modal</PrimaryButton>
                    <NewModal v-model="modalOpen" title="Switch the icon set">
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            The close (×) button in the header uses the <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">$close</code> alias. Pick another provider while this modal is open
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
                        InputLabel · <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">$help</code>
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
                        UnderConstruction · <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">$construction</code>
                    </div>
                    <UnderConstruction info="Demo block - picks up $construction from the active provider." />
                </div>

                <!-- DescriptionList edit icons -->
                <div class="space-y-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800/60 lg:col-span-2">
                    <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        DescriptionList · <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">$edit</code> <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">$edit-alt</code>
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
