<script setup lang="ts">
import { computed, defineComponent, h, ref, type PropType } from 'vue';
import { NavLink, NavCollapse, CodePreview, Input } from '../../index';
import { NbIcon } from '../../icons';
import {
    faGauge,
    faBoxOpen,
    faUsers,
    faGear,
    faChartLine,
    faWarehouse,
    faFileInvoiceDollar,
    faLock,
    faTimes,
    faBan,
} from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

// Demo-local routing: one active path, one open accordion group.
const current = ref('/products/active');
// ponytail: NavCollapse has no `parent` prop - its `open` prop is reactive, so a
// single ref driving every group gives the same one-open-at-a-time behaviour.
const openGroup = ref('products');

const go = (path: string) => (current.value = path);
const toggle = (group: string) => (openGroup.value = openGroup.value === group ? '' : group);

const snippet = [
    '<aside',
    '    class="top-0 left-0 z-40 h-screen w-full border-gray-200 bg-white sm:fixed sm:w-64 sm:border-r dark:border-gray-700 dark:bg-gray-800"',
    '>',
    '    <div class="h-full overflow-y-auto px-3 py-4">',
    '        <div class="mb-4 flex items-center gap-2 px-2">',
    '            <div class="flex h-8 w-8 items-center justify-center rounded bg-primary-600 text-sm font-bold text-white">N</div>',
    '            <span class="text-sm font-semibold text-gray-800 dark:text-gray-100">Netblink</span>',
    '        </div>',
    '',
    '        <ul class="m-0 list-none space-y-2 p-0">',
    '            <li>',
    '                <NavLink href="/dashboard" :active="route().current(\'dashboard\')">',
    '                    <template #icon><NbIcon :name="faGauge" /></template>',
    '                    Dashboard',
    '                </NavLink>',
    '            </li>',
    '',
    '            <NavCollapse name="Products" :open="route().current(\'products.*\')">',
    '                <template #icon><NbIcon :name="faBoxOpen" /></template>',
    '                <li>',
    '                    <NavLink href="/products" :active="route().current(\'products.index\')">All Products</NavLink>',
    '                </li>',
    '                <li>',
    '                    <NavLink href="/products/create" :active="route().current(\'products.create\')">Add Product</NavLink>',
    '                </li>',
    '            </NavCollapse>',
    '',
    '            <NavCollapse name="Customers" :open="route().current(\'customers.*\')">',
    '                <template #icon><NbIcon :name="faUsers" /></template>',
    '                <li>',
    '                    <NavLink href="/customers" :active="route().current(\'customers.index\')">All Customers</NavLink>',
    '                </li>',
    '            </NavCollapse>',
    '        </ul>',
    '    </div>',
    '</aside>',
    '',
    '<!-- Page content clears the fixed sidebar -->',
    '<main class="p-4 sm:ml-64"><slot /></main>',
];

// ---------------------------------------------------------------------------
// Demo 2 - dynamic nav: one data array, rendered recursively, filtered by search
// ---------------------------------------------------------------------------

interface LinkItem {
    /** Destination. In an app this is a Ziggy route name, here a plain path. */
    route?: string;
    /** Activeness pattern(s), pipe-separated, `*` = prefix match. Defaults to `route`. */
    active?: string;
    icon?: any;
    label: string;
    /** Presence turns the node into a NavCollapse group - recurses to any depth. */
    items?: LinkItem[];
    /** Renders a separator above (top level only). */
    break?: boolean;
    /** Pruned before filtering - how role gating is done in the apps. */
    hide?: boolean;
}

const links: LinkItem[] = [
    { label: 'Dashboard', icon: faGauge, route: '/dashboard' },
    { label: 'Analytics', icon: faChartLine, route: '/analytics' },
    {
        label: 'Catalog',
        icon: faBoxOpen,
        break: true,
        items: [
            { label: 'All Products', route: '/catalog/products' },
            { label: 'Categories', route: '/catalog/categories' },
            {
                // Second nesting level - proves the renderer recurses, not just one deep.
                label: 'Inventory',
                icon: faWarehouse,
                items: [
                    { label: 'Stock Levels', route: '/catalog/inventory/stock' },
                    { label: 'Suppliers', route: '/catalog/inventory/suppliers' },
                ],
            },
        ],
    },
    {
        label: 'Customers',
        icon: faUsers,
        items: [
            { label: 'All Customers', route: '/customers' },
            { label: 'Segments', route: '/customers/segments' },
        ],
    },
    {
        label: 'Billing',
        icon: faFileInvoiceDollar,
        active: '/billing/*',
        items: [
            { label: 'Invoices', route: '/billing/invoices' },
            { label: 'Subscriptions', route: '/billing/subscriptions' },
        ],
    },
    {
        // Never rendered: `hide` prunes the node and its whole subtree.
        label: 'Superadmin',
        icon: faLock,
        hide: true,
        items: [{ label: 'Impersonate', route: '/admin/impersonate' }],
    },
    { label: 'Settings', icon: faGear, route: '/settings', break: true },
];

const navCurrent = ref('/catalog/inventory/stock');
const term = ref('');

// No Ziggy in the docs, so `route().current(pattern)` becomes prefix matching on a
// local ref: '/billing/*' matches anything under /billing/, everything else is exact.
const matchesPattern = (pattern: string) =>
    pattern.endsWith('*') ? navCurrent.value.startsWith(pattern.slice(0, -1)) : navCurrent.value === pattern;

const isActive = (link: LinkItem): boolean =>
    link.items?.length
        ? link.items.some((child) => isActive(child))
        : (link.active ?? link.route ?? '')
              .split('|')
              .map((pattern) => pattern.trim())
              .filter(Boolean)
              .some(matchesPattern);

const filterRecursive = (arr: LinkItem[], text: string): LinkItem[] =>
    arr
        .map((link) => {
            if (link.hide === true) return null;
            const matches = link.label.toLowerCase().includes(text.toLowerCase());
            if (link.items) {
                const filteredItems = filterRecursive(link.items, text);
                if (filteredItems.length || matches) return { ...link, items: filteredItems };
            } else if (matches) return link;
            return null;
        })
        .filter(Boolean) as LinkItem[];

// ponytail: computed instead of the apps' ref + watch(term) - same result, no plumbing.
const filteredLinks = computed(() => filterRecursive(links, term.value));

const RecursiveLink = defineComponent({
    name: 'RecursiveLink',
    props: { link: { type: Object as PropType<LinkItem>, required: true } },
    setup(props) {
        return () => {
            const link = props.link;
            const icon = link.icon ? { icon: () => h(NbIcon, { name: link.icon }) } : {};

            // A group: NavCollapse renders its own <li>, so it drops straight into the <ul>.
            // `open` is the only expansion lever the package exposes - keep groups open for an
            // active descendant, and open everything while a search term narrows the tree.
            if (link.items?.length) {
                return h(
                    NavCollapse,
                    { name: link.label, open: isActive(link) || term.value !== '' },
                    {
                        ...icon,
                        default: () => link.items!.map((child) => h(RecursiveLink, { link: child, key: child.label })),
                    }
                );
            }

            // A leaf: the click handler lives on the <li> because NavLink forwards to the
            // Inertia Link override, which owns its onClick and swallows the fallthrough one.
            return h('li', { onClick: () => (navCurrent.value = link.route ?? '') }, [
                h(NavLink, { href: link.route ?? '#', active: isActive(link) }, { ...icon, default: () => link.label }),
            ]);
        };
    },
});

const recursiveLinkSnippet = [
    '<script lang="ts">',
    "import { computed, defineComponent, h, type PropType } from 'vue';",
    "import { usePage } from '@inertiajs/vue3';",
    "import { NavCollapse, NavLink } from '@netblink/vue-components';",
    "import { NbIcon } from '@netblink/vue-components/icons';",
    '',
    'export interface LinkItem {',
    '    route?: string; // Ziggy route name',
    "    active?: string; // pipe-separated patterns: 'admin.products.*|admin.categories.*'",
    '    icon?: any;',
    '    label: string;',
    '    items?: LinkItem[]; // presence => NavCollapse group',
    '    break?: boolean; // <hr> above (top level only)',
    '    hide?: boolean; // pruned before filtering (role gating)',
    '}',
    '',
    'const RecursiveLink = defineComponent({',
    "    name: 'RecursiveLink',",
    '    props: {',
    '        link: { type: Object as PropType<LinkItem>, required: true },',
    "        term: { type: String, default: '' },",
    '    },',
    '    setup(props) {',
    '        const page = usePage();',
    '',
    '        const isActive = (link: LinkItem): boolean => {',
    '            // route().current() is not reactive - touching page.url re-runs this after every visit',
    '            void computed(() => page.url).value;',
    '            if (link.items?.length) return link.items.some((child) => isActive(child));',
    "            return (link.active ?? link.route ?? '')",
    "                .split('|')",
    '                .map((pattern) => pattern.trim())',
    '                .filter(Boolean)',
    '                .some((pattern) => route().current(pattern));',
    '        };',
    '',
    '        return () => {',
    '            const link = props.link;',
    '            const icon = link.icon ? { icon: () => h(NbIcon, { name: link.icon }) } : {};',
    '',
    '            // NavCollapse takes `name` + `open` only; it renders its own <li>.',
    '            if (link.items?.length) {',
    '                return h(',
    '                    NavCollapse,',
    "                    { name: link.label, open: isActive(link) || props.term !== '' },",
    '                    {',
    '                        ...icon,',
    '                        default: () =>',
    '                            link.items!.map((child) => h(RecursiveLink, { link: child, term: props.term, key: child.label })),',
    '                    }',
    '                );',
    '            }',
    '',
    "            // NavCollapse's slot is a <ul>, so leaves render inside their own <li>.",
    "            return h('li', { class: 'm-0 list-none' }, [",
    '                h(NavLink, { href: route(link.route!), active: isActive(link) }, { ...icon, default: () => link.label }),',
    '            ]);',
    '        };',
    '    },',
    '});',
    '',
    'export default RecursiveLink;',
    '<\/script>',
];

const sidenavSnippet = [
    '<script setup lang="ts">',
    "import { computed, ref } from 'vue';",
    "import { usePage } from '@inertiajs/vue3';",
    "import { Input } from '@netblink/vue-components';",
    "import { NbIcon } from '@netblink/vue-components/icons';",
    "import { faBan, faGauge, faTimes } from '@fortawesome/free-solid-svg-icons';",
    "import RecursiveLink, { type LinkItem } from './RecursiveLink.vue';",
    '',
    'const user = usePage().props.auth.user;',
    '',
    'const links: LinkItem[] = [',
    "    { label: 'Dashboard', icon: faGauge, route: 'admin.dashboard' },",
    '    {',
    "        label: 'Catalog',",
    '        break: true,',
    '        items: [',
    "            { label: 'All Products', route: 'admin.products.index' },",
    "            { label: 'Inventory', items: [{ label: 'Stock Levels', route: 'admin.stock.index' }] },",
    '        ],',
    '    },',
    "    { label: 'Billing', active: 'admin.invoices.*|admin.subscriptions.*', route: 'admin.invoices.index' },",
    "    { label: 'Superadmin', hide: !user.isSuperadmin, items: [{ label: 'Impersonate', route: 'admin.impersonate' }] },",
    '];',
    '',
    "const term = ref('');",
    '',
    'const filterRecursive = (arr: LinkItem[], text: string): LinkItem[] =>',
    '    arr',
    '        .map((link) => {',
    '            if (link.hide === true) return null;',
    '            const matches = link.label.toLowerCase().includes(text.toLowerCase());',
    '            if (link.items) {',
    '                const filteredItems = filterRecursive(link.items, text);',
    '                if (filteredItems.length || matches) return { ...link, items: filteredItems };',
    '            } else if (matches) return link;',
    '            return null;',
    '        })',
    '        .filter(Boolean) as LinkItem[];',
    '',
    'const filteredLinks = computed(() => filterRecursive(links, term.value));',
    '<\/script>',
    '',
    '<template>',
    '    <aside class="h-screen w-64 overflow-y-auto border-r border-gray-200 bg-white px-3 py-4 dark:border-gray-700 dark:bg-gray-800">',
    '        <div class="relative mb-4">',
    '            <Input v-model="term" field="nav-search" noLabel placeholder="Search" />',
    '            <button v-if="term" type="button" class="absolute top-3 right-3 text-gray-400" @click="term = \'\'">',
    '                <NbIcon :name="faTimes" class="h-4 w-4" />',
    '            </button>',
    '        </div>',
    '',
    '        <ul class="m-0 list-none space-y-2 p-0">',
    '            <template v-for="link in filteredLinks" :key="link.label">',
    '                <li v-if="link.break" class="list-none"><hr class="my-2 border-gray-200 dark:border-gray-700" /></li>',
    '                <RecursiveLink :link="link" :term="term" />',
    '            </template>',
    '',
    '            <li v-if="!filteredLinks.length" class="flex cursor-pointer items-center gap-2 p-2 text-sm text-gray-500" @click="term = \'\'">',
    '                <NbIcon :name="faBan" class="h-4 w-4" /> No items found',
    '            </li>',
    '        </ul>',
    '    </aside>',
    '</template>',
];
</script>

<template>
    <section id="block-sidebar">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Sidebar Navigation</h3>
        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A vertical app sidebar built from <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">NavLink</code> (with
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">#icon</code> slots) and
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">NavCollapse</code> groups. A single ref drives the
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">open</code> prop of every group, so only one group stays expanded at a time.
            </p>

            <div class="mb-6 flex flex-col overflow-hidden rounded border border-gray-200 bg-gray-50 sm:h-96 sm:flex-row dark:border-gray-700 dark:bg-gray-900/40">
                <aside
                    class="w-full shrink-0 overflow-y-auto border-b border-gray-200 bg-white px-3 py-4 sm:w-64 sm:border-r sm:border-b-0 dark:border-gray-700 dark:bg-gray-800"
                >
                    <div class="mb-4 flex items-center gap-2 px-2">
                        <div class="flex h-8 w-8 items-center justify-center rounded bg-primary-600 text-sm font-bold text-white">N</div>
                        <span class="text-sm font-semibold text-gray-800 dark:text-gray-100">Netblink</span>
                    </div>

                    <!-- Click handlers live on the <li>, not on NavLink: NavLink forwards to the
                         Inertia Link override, which owns its own onClick and drops the fallthrough one. -->
                    <ul class="m-0 list-none space-y-2 p-0">
                        <li @click="go('/dashboard')">
                            <NavLink href="/dashboard" :active="current === '/dashboard'">
                                <template #icon><NbIcon :name="faGauge" /></template>
                                Dashboard
                            </NavLink>
                        </li>

                        <NavCollapse name="Products" :open="openGroup === 'products'" @click="toggle('products')">
                            <template #icon><NbIcon :name="faBoxOpen" /></template>
                            <li @click.stop="go('/products/active')">
                                <NavLink href="/products/active" :active="current === '/products/active'">Active</NavLink>
                            </li>
                            <li @click.stop="go('/products/archived')">
                                <NavLink href="/products/archived" :active="current === '/products/archived'">Archived</NavLink>
                            </li>
                            <li @click.stop="go('/products/create')">
                                <NavLink href="/products/create" :active="current === '/products/create'">Add Product</NavLink>
                            </li>
                        </NavCollapse>

                        <NavCollapse name="Customers" :open="openGroup === 'customers'" @click="toggle('customers')">
                            <template #icon><NbIcon :name="faUsers" /></template>
                            <li @click.stop="go('/customers')">
                                <NavLink href="/customers" :active="current === '/customers'">All Customers</NavLink>
                            </li>
                            <li @click.stop="go('/customers/invites')">
                                <NavLink href="/customers/invites" :active="current === '/customers/invites'">Invites</NavLink>
                            </li>
                        </NavCollapse>

                        <NavCollapse name="Settings" :open="openGroup === 'settings'" @click="toggle('settings')">
                            <template #icon><NbIcon :name="faGear" /></template>
                            <li @click.stop="go('/settings/profile')">
                                <NavLink href="/settings/profile" :active="current === '/settings/profile'">Profile</NavLink>
                            </li>
                            <li @click.stop="go('/settings/billing')">
                                <NavLink href="/settings/billing" :active="current === '/settings/billing'">Billing</NavLink>
                            </li>
                        </NavCollapse>
                    </ul>
                </aside>

                <div class="min-w-0 flex-1 overflow-y-auto p-4 sm:p-6">
                    <p class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                        Current route: <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60 dark:text-gray-200">{{ current }}</code>
                    </p>
                    <div class="space-y-3 opacity-40">
                        <div class="h-6 w-1/3 rounded bg-gray-300 dark:bg-gray-700"></div>
                        <div class="h-24 rounded bg-gray-200 dark:bg-gray-700"></div>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="h-16 rounded bg-gray-200 dark:bg-gray-700"></div>
                            <div class="h-16 rounded bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                        <div class="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700"></div>
                        <div class="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                </div>
            </div>

            <CodePreview :code="snippet" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <h4 class="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">Dynamic Nav with Search</h4>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                The same sidebar driven by a single <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">links</code> array and a small
                recursive render-function component: nodes with
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">items</code> become
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">NavCollapse</code> groups (to any depth), leaves become
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">NavLink</code>s. Typing filters the tree recursively and forces every
                surviving group open; groups also open by themselves when a descendant is active. A
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">break</code> entry draws a separator, and the
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">hide: true</code> "Superadmin" group is pruned with its whole subtree
                before filtering - it is in the data below but never renders.
            </p>

            <div class="mb-6 flex flex-col overflow-hidden rounded border border-gray-200 bg-gray-50 sm:h-96 sm:flex-row dark:border-gray-700 dark:bg-gray-900/40">
                <aside
                    class="w-full shrink-0 overflow-y-auto border-b border-gray-200 bg-white px-3 py-4 sm:w-64 sm:border-r sm:border-b-0 dark:border-gray-700 dark:bg-gray-800"
                >
                    <div class="relative mb-4">
                        <Input v-model="term" field="nav-search" noLabel placeholder="Search" />
                        <button
                            v-if="term"
                            type="button"
                            class="absolute top-3 right-3 cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                            @click="term = ''"
                        >
                            <NbIcon :name="faTimes" class="h-4 w-4" />
                        </button>
                    </div>

                    <ul class="m-0 list-none space-y-2 p-0">
                        <template v-for="link in filteredLinks" :key="link.label">
                            <li v-if="link.break" class="m-0 list-none">
                                <hr class="my-2 border-gray-200 dark:border-gray-700" />
                            </li>
                            <RecursiveLink :link="link" />
                        </template>

                        <li
                            v-if="!filteredLinks.length"
                            class="m-0 flex cursor-pointer list-none items-center gap-2 p-2 text-sm text-gray-500 dark:text-gray-400"
                            @click="term = ''"
                        >
                            <NbIcon :name="faBan" class="h-4 w-4" />
                            No items found
                        </li>
                    </ul>
                </aside>

                <div class="min-w-0 flex-1 overflow-y-auto p-4 sm:p-6">
                    <p class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                        Current route: <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60 dark:text-gray-200">{{ navCurrent }}</code>
                    </p>
                    <div class="space-y-3 opacity-40">
                        <div class="h-6 w-1/3 rounded bg-gray-300 dark:bg-gray-700"></div>
                        <div class="h-24 rounded bg-gray-200 dark:bg-gray-700"></div>
                        <div class="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700"></div>
                        <div class="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                </div>
            </div>

            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                The consumer version below uses Ziggy: <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">route()</code> for hrefs and
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">route().current()</code> with pipe-separated wildcard patterns for
                activeness. Because <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">route().current()</code> is not reactive, the
                renderer touches <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">page.url</code> so it re-evaluates after every Inertia
                visit.
            </p>
            <CodePreview :code="recursiveLinkSnippet" filename="RecursiveLink.vue" class="mb-4" />
            <CodePreview :code="sidenavSnippet" filename="Sidenav.vue" />
        </DocDemoCard>
    </section>
</template>
