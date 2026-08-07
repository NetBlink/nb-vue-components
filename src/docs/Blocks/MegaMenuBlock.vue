<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { NbIcon } from '../../icons';
import {
    faBoxOpen,
    faChartLine,
    faChevronDown,
    faCreditCard,
    faGauge,
    faLifeRing,
    faPlug,
    faShieldHalved,
    faTruckFast,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink, PrimaryButton, SecondaryButton, CodePreview } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

// Two mega panels, keyed by the bar item that opens them.
const menus = {
    products: {
        label: 'Products',
        columns: [
            {
                heading: 'Platform',
                links: [
                    { name: 'Dashboard', description: 'Live KPIs across every site', icon: faGauge, href: '/dashboard' },
                    { name: 'Inventory', description: 'Stock levels, refills and audits', icon: faBoxOpen, href: '/inventory' },
                    { name: 'Payments', description: 'Card, wallet and prepaid flows', icon: faCreditCard, href: '/payments' },
                ],
            },
            {
                heading: 'Operations',
                links: [
                    { name: 'Logistics', description: 'Routes, drivers and delivery slots', icon: faTruckFast, href: '/logistics' },
                    { name: 'Reporting', description: 'Scheduled exports and BI feeds', icon: faChartLine, href: '/reporting' },
                    { name: 'Integrations', description: 'Webhooks, REST API and SDKs', icon: faPlug, href: '/integrations' },
                ],
            },
        ],
        featured: {
            eyebrow: 'New',
            title: 'Fleet Insights 2.0',
            body: 'Predictive refill windows built from twelve months of machine telemetry.',
            icon: faChartLine,
        },
    },
    solutions: {
        label: 'Solutions',
        columns: [
            {
                heading: 'By team',
                links: [
                    { name: 'Field service', description: 'Job sheets and offline capture', icon: faTruckFast, href: '/solutions/field' },
                    { name: 'Finance', description: 'Reconciliation and settlement', icon: faCreditCard, href: '/solutions/finance' },
                    { name: 'Operations', description: 'Capacity planning and alerts', icon: faGauge, href: '/solutions/ops' },
                ],
            },
            {
                heading: 'By need',
                links: [
                    { name: 'Compliance', description: 'Audit trails and retention rules', icon: faShieldHalved, href: '/solutions/compliance' },
                    { name: 'Scale-up', description: 'Multi-tenant estates and roles', icon: faUsers, href: '/solutions/scale' },
                    { name: 'Support', description: 'SLA-backed onboarding and help', icon: faLifeRing, href: '/solutions/support' },
                ],
            },
        ],
        featured: {
            eyebrow: 'Case study',
            title: 'From 40 to 400 machines',
            body: 'How Vendco cut restock trips by a third without adding headcount.',
            icon: faShieldHalved,
        },
    },
};

type MenuKey = keyof typeof menus;

const menuKeys = Object.keys(menus) as MenuKey[];

const openMenu = ref<MenuKey | null>(null);
const current = ref('/dashboard');

// narrowing `menus[openMenu]` inside the template does not survive into child
// elements, so resolve the active panel once here
const activePanel = computed(() => (openMenu.value ? menus[openMenu.value] : null));

const toggle = (key: MenuKey) => {
    openMenu.value = openMenu.value === key ? null : key;
};

// Close on any pointerdown outside the nav. A fixed-inset backdrop would also
// work but it swallows the first click on everything else on the page.
const menuRoot = ref<HTMLElement | null>(null);
const onDocPointerDown = (e: PointerEvent) => {
    if (openMenu.value && menuRoot.value && !menuRoot.value.contains(e.target as Node)) openMenu.value = null;
};
onMounted(() => document.addEventListener('pointerdown', onDocPointerDown));
onBeforeUnmount(() => document.removeEventListener('pointerdown', onDocPointerDown));

const pick = (href: string) => {
    current.value = href;
    openMenu.value = null;
};

const snippet = [
    '<script setup>',
    '// { products: { label, columns: [{ heading, links: [{ name, description, icon, href }] }], featured } }',
    'const menus = { /* ... */ };',
    'const openMenu = ref(null);',
    "const toggle = (key) => (openMenu.value = openMenu.value === key ? null : key);",
    '',
    '// close on click outside the nav',
    'const menuRoot = ref(null);',
    'const onDocPointerDown = (e) => {',
    '    if (openMenu.value && menuRoot.value && !menuRoot.value.contains(e.target)) openMenu.value = null;',
    '};',
    "onMounted(() => document.addEventListener('pointerdown', onDocPointerDown));",
    "onBeforeUnmount(() => document.removeEventListener('pointerdown', onDocPointerDown));",
    '<\/script>',
    '',
    '<nav ref="menuRoot" class="relative rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">',
    '  <div class="flex min-h-14 flex-wrap items-center gap-2 px-4 py-2">',
    '    <span class="rounded bg-primary-600 px-2 py-1 font-bold text-white">NB</span>',
    '',
    '    <button',
    '      v-for="(menu, key) in menus" :key="key"',
    '      type="button" :aria-expanded="openMenu === key" @click="toggle(key)"',
    '      class="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors"',
    '      :class="openMenu === key',
    "        ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100'",
    "        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'\"",
    '    >',
    '      {{ menu.label }}',
    '      <NbIcon :name="faChevronDown" class="h-3 w-3 transition-transform" :class="{ \'rotate-180\': openMenu === key }" />',
    '    </button>',
    '',
    '    <NavLink href="/pricing" :active="route().current(\'pricing\')">Pricing</NavLink>',
    '  </div>',
    '',
    '  <div',
    '    v-if="openMenu"',
    '    class="absolute inset-x-0 top-full z-20 mt-2 grid max-h-[70vh] grid-cols-1 gap-6 overflow-y-auto rounded-lg border border-gray-200 bg-white p-4 shadow-xl sm:grid-cols-2 sm:p-6 lg:grid-cols-3 dark:border-gray-700 dark:bg-gray-800"',
    '  >',
    '    <div v-for="column in menus[openMenu].columns" :key="column.heading" class="space-y-1">',
    '      <p class="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">{{ column.heading }}</p>',
    '      <a v-for="link in column.links" :key="link.href" :href="link.href" class="flex gap-3 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-700/50">',
    '        <span class="bg-primary-50 text-primary-600 dark:bg-primary-900/40 dark:text-primary-300 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">',
    '          <NbIcon :name="link.icon" class="h-5 w-5" />',
    '        </span>',
    '        <span>',
    '          <span class="block text-sm font-medium text-gray-800 dark:text-gray-100">{{ link.name }}</span>',
    '          <span class="block text-xs text-gray-500 dark:text-gray-400">{{ link.description }}</span>',
    '        </span>',
    '      </a>',
    '    </div>',
    '',
    '    <div class="from-primary-600 to-primary-800 flex flex-col rounded-lg bg-gradient-to-br p-5 text-white">',
    '      <span class="mb-3 self-start rounded-full bg-white/20 px-2 py-0.5 text-xs tracking-wider uppercase">{{ menus[openMenu].featured.eyebrow }}</span>',
    '      <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">',
    '        <NbIcon :name="menus[openMenu].featured.icon" class="h-5 w-5" />',
    '      </div>',
    '      <p class="text-lg font-semibold">{{ menus[openMenu].featured.title }}</p>',
    '      <p class="mt-1 mb-4 text-sm text-white/80">{{ menus[openMenu].featured.body }}</p>',
    '      <SecondaryButton class="mt-auto self-start">Read more</SecondaryButton>',
    '    </div>',
    '  </div>',
    '</nav>',
];
</script>

<template>
    <section id="block-mega-menu">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Mega Menu</h3>

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A horizontal navbar whose items open wide multi-column panels: two columns of icon-tile links with one-line descriptions plus a
                highlighted featured card. Built by hand rather than with <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">Dropdown</code>, because Dropdown portals its panel to the body and
                caps it at menu width, a mega panel needs to stay anchored to the bar and span its full width. Clicking outside the bar or on
                any link closes it.
            </p>

            <div class="mb-6 min-h-[26rem] rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <nav ref="menuRoot" class="relative rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex min-h-14 flex-wrap items-center gap-2 px-4 py-2">
                        <span class="bg-primary-600 rounded px-2 py-1 font-bold text-white">NB</span>

                        <button
                            v-for="key in menuKeys"
                            :key="key"
                            type="button"
                            :aria-expanded="openMenu === key"
                            class="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                            :class="
                                openMenu === key
                                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100'
                                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                            "
                            @click="toggle(key)"
                        >
                            {{ menus[key].label }}
                            <NbIcon :name="faChevronDown" class="h-3 w-3 transition-transform" :class="{ 'rotate-180': openMenu === key }" />
                        </button>

                        <!-- NavLink swallows fallthrough @click, so the handler lives on a wrapper -->
                        <span @click.prevent="pick('/pricing')">
                            <NavLink href="#" :active="current === '/pricing'">Pricing</NavLink>
                        </span>
                    </div>

                    <div
                        v-if="activePanel"
                        class="absolute inset-x-0 top-full z-20 mt-2 grid max-h-[70vh] grid-cols-1 gap-6 overflow-y-auto rounded-lg border border-gray-200 bg-white p-4 shadow-xl sm:grid-cols-2 sm:p-6 lg:grid-cols-3 dark:border-gray-700 dark:bg-gray-800"
                    >
                        <div v-for="column in activePanel.columns" :key="column.heading">
                            <p class="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                {{ column.heading }}
                            </p>
                            <div class="space-y-1">
                                <a
                                    v-for="link in column.links"
                                    :key="link.href"
                                    href="#"
                                    class="flex gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50"
                                    @click.prevent="pick(link.href)"
                                >
                                    <span
                                        class="bg-primary-50 text-primary-600 dark:bg-primary-900/40 dark:text-primary-300 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                                    >
                                        <NbIcon :name="link.icon" class="h-5 w-5" />
                                    </span>
                                    <span>
                                        <span class="block text-sm font-medium text-gray-800 dark:text-gray-100">{{ link.name }}</span>
                                        <span class="block text-xs text-gray-500 dark:text-gray-400">{{ link.description }}</span>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div class="from-primary-600 to-primary-800 flex flex-col rounded-lg bg-gradient-to-br p-5 text-white">
                            <span class="mb-3 self-start rounded-full bg-white/20 px-2 py-0.5 text-xs tracking-wider uppercase">
                                {{ activePanel.featured.eyebrow }}
                            </span>
                            <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                                <NbIcon :name="activePanel.featured.icon" class="h-5 w-5" />
                            </div>
                            <p class="text-lg font-semibold">{{ activePanel.featured.title }}</p>
                            <p class="mt-1 mb-4 text-sm text-white/80">{{ activePanel.featured.body }}</p>
                            <SecondaryButton class="mt-auto self-start" @click="openMenu = null">Read more</SecondaryButton>
                        </div>
                    </div>
                </nav>

                <div class="mt-4 flex flex-wrap items-center justify-between gap-2 px-1">
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                        Current page: <span class="font-mono text-gray-800 dark:text-gray-200">{{ current }}</span>
                    </p>
                    <PrimaryButton size="sm" @click="openMenu = openMenu ? null : 'products'">
                        {{ openMenu ? 'Close panel' : 'Open Products' }}
                    </PrimaryButton>
                </div>
            </div>

            <CodePreview :code="snippet" filename="MegaMenu.vue" />
        </DocDemoCard>
    </section>
</template>
