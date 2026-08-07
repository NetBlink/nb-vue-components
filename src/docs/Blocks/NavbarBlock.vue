<script setup lang="ts">
import { ref } from 'vue';
import { NbIcon } from '../../icons';
import {
    faGauge,
    faBoxOpen,
    faChartLine,
    faUsers,
    faChevronDown,
    faBars,
    faXmark,
    faUser,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink, ResponsiveNavLink, NavCollapse, Dropdown, DropdownLink, DropdownSeparator, GravatarImg, CodePreview } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const navItems = [
    { name: 'Dashboard', icon: faGauge, href: '/dashboard' },
    {
        name: 'Catalogue',
        icon: faBoxOpen,
        href: '/products',
        children: [
            { name: 'Products', href: '/products' },
            { name: 'Categories', href: '/categories' },
            { name: 'Suppliers', href: '/suppliers' },
        ],
    },
    { name: 'Reports', icon: faChartLine, href: '/reports' },
    { name: 'Team', icon: faUsers, href: '/team' },
];

// docs-local stand-in for route().current(...)
const current = ref('/dashboard');
const mobileOpen = ref(false);

const go = (href: string) => {
    current.value = href;
};

const snippet = [
    '<script setup>',
    'const navItems = [',
    "    { name: 'Dashboard', icon: faGauge, href: '/dashboard', routeName: 'dashboard' },",
    "    { name: 'Catalogue', icon: faBoxOpen, href: '/products', children: [",
    "        { name: 'Products', href: '/products', routeName: 'products.index' },",
    "        { name: 'Categories', href: '/categories', routeName: 'categories.index' },",
    '    ] },',
    '];',
    'const mobileOpen = ref(false);',
    '<\/script>',
    '',
    '<nav class="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">',
    '  <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">',
    '    <div class="flex items-center gap-8">',
    '      <span class="rounded bg-primary-600 px-2 py-1 font-bold text-white">NB</span>',
    '',
    '      <div class="hidden sm:flex sm:items-center sm:space-x-4">',
    '        <template v-for="item in navItems" :key="item.name">',
    '          <Dropdown v-if="item.children" align="start">',
    '            <template #trigger>',
    '              <span class="flex cursor-pointer items-center gap-2 rounded-lg p-2 text-base text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">',
    '                <NbIcon :name="item.icon" class="h-4 w-4" />',
    '                {{ item.name }}',
    '                <NbIcon :name="faChevronDown" class="h-3 w-3" />',
    '              </span>',
    '            </template>',
    '            <template #content>',
    '              <DropdownLink v-for="c in item.children" :key="c.href" :href="c.href">{{ c.name }}</DropdownLink>',
    '            </template>',
    '          </Dropdown>',
    '          <NavLink v-else :href="item.href" :active="route().current(item.routeName)">',
    '            <template #icon><NbIcon :name="item.icon" class="h-4 w-4" /></template>',
    '            {{ item.name }}',
    '          </NavLink>',
    '        </template>',
    '      </div>',
    '    </div>',
    '',
    '    <!-- Dropdown forwards attrs to its portalled panel, so hide the trigger via a wrapper -->',
    '    <div class="hidden sm:block">',
    '    <Dropdown align="end" :alignOffset="0">',
    '      <template #trigger>',
    '        <span class="flex cursor-pointer items-center gap-2 rounded-lg p-1.5 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">',
    '          <GravatarImg email="jane@example.com" :size="64" class="h-8 w-8 rounded-full" />',
    '          <span>Jane Cooper</span>',
    '          <NbIcon :name="faChevronDown" class="h-3 w-3" />',
    '        </span>',
    '      </template>',
    '      <template #content>',
    '        <DropdownLink href="/profile"><NbIcon :name="faUser" class="h-4 w-4" /> Profile</DropdownLink>',
    '        <DropdownLink href="/settings"><NbIcon :name="faGear" class="h-4 w-4" /> Settings</DropdownLink>',
    '        <DropdownSeparator />',
    '        <!-- as="button": Link warns about non-GET <a> elements -->',
    '        <DropdownLink href="/logout" method="post" as="button"><NbIcon :name="faRightFromBracket" class="h-4 w-4" /> Log out</DropdownLink>',
    '      </template>',
    '    </Dropdown>',
    '    </div>',
    '',
    '    <button class="sm:hidden" @click="mobileOpen = !mobileOpen">',
    '      <NbIcon :name="mobileOpen ? faXmark : faBars" class="h-5 w-5" />',
    '    </button>',
    '  </div>',
    '',
    '  <div v-show="mobileOpen" class="space-y-1 border-t border-gray-200 py-2 sm:hidden dark:border-gray-700">',
    '    <!-- NavCollapse renders an <li>, so the list needs a <ul> around it -->',
    '    <ul class="m-0 list-none space-y-1 p-0">',
    '      <template v-for="item in navItems" :key="item.name">',
    '        <NavCollapse v-if="item.children" :name="item.name">',
    '          <li v-for="c in item.children" :key="c.href" class="list-none">',
    '            <ResponsiveNavLink :href="c.href" :active="route().current(c.routeName)">{{ c.name }}</ResponsiveNavLink>',
    '          </li>',
    '        </NavCollapse>',
    '        <li v-else class="list-none">',
    '          <ResponsiveNavLink :href="item.href" :active="route().current(item.routeName)">{{ item.name }}</ResponsiveNavLink>',
    '        </li>',
    '      </template>',
    '    </ul>',
    '',
    '    <div class="mt-2 flex items-center gap-3 border-t border-gray-200 px-4 pt-3 dark:border-gray-700">',
    '      <GravatarImg :email="$page.props.auth.user.email" :size="64" class="h-8 w-8 rounded-full" />',
    '      <div class="text-sm">',
    '        <div class="font-medium text-gray-800 dark:text-gray-100">{{ $page.props.auth.user.name }}</div>',
    '        <div class="text-gray-500 dark:text-gray-400">{{ $page.props.auth.user.email }}</div>',
    '      </div>',
    '    </div>',
    '    <ResponsiveNavLink href="/profile">Profile</ResponsiveNavLink>',
    '    <ResponsiveNavLink href="/settings">Settings</ResponsiveNavLink>',
    '    <ResponsiveNavLink href="/logout" method="post" as="button">Log out</ResponsiveNavLink>',
    '  </div>',
    '</nav>',
];
</script>

<template>
    <section id="block-navbar">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">App Navbar</h3>
        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A horizontal application header driven by a single <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">navItems</code> array: items with
                children render a <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">Dropdown</code> of
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">DropdownLink</code>s, the rest render a
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">NavLink</code>. The right side pairs
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">GravatarImg</code> with a user menu, and the hamburger re-renders the same array as
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">NavCollapse</code> +
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">ResponsiveNavLink</code>.
            </p>

            <h4 class="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">Desktop</h4>
            <div class="mb-6 overflow-x-auto rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <nav class="min-w-[44rem] rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex h-16 items-center justify-between px-4">
                        <div class="flex items-center gap-8">
                            <span class="rounded bg-primary-600 px-2 py-1 text-sm font-bold text-white">NB</span>

                            <div class="flex items-center space-x-4">
                                <template v-for="item in navItems" :key="item.name">
                                    <Dropdown v-if="item.children" align="start">
                                        <template #trigger>
                                            <span
                                                class="flex cursor-pointer items-center gap-2 rounded-lg p-2 text-base text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                            >
                                                <NbIcon :name="item.icon" class="h-4 w-4" />
                                                {{ item.name }}
                                                <NbIcon :name="faChevronDown" class="h-3 w-3" />
                                            </span>
                                        </template>
                                        <template #content>
                                            <!-- Link overwrites fallthrough @click, so demo handlers live on a wrapper -->
                                            <span v-for="child in item.children" :key="child.href" class="block" @click.prevent="go(child.href)">
                                                <DropdownLink :href="child.href">{{ child.name }}</DropdownLink>
                                            </span>
                                        </template>
                                    </Dropdown>

                                    <span v-else @click.prevent="go(item.href)">
                                        <NavLink :href="item.href" :active="current === item.href">
                                            <template #icon><NbIcon :name="item.icon" class="h-4 w-4" /></template>
                                            {{ item.name }}
                                        </NavLink>
                                    </span>
                                </template>
                            </div>
                        </div>

                        <Dropdown align="end" :alignOffset="0">
                            <template #trigger>
                                <span class="flex cursor-pointer items-center gap-2 rounded-lg p-1.5 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                                    <GravatarImg email="jane@example.com" :size="64" class="h-8 w-8 rounded-full" />
                                    <span>Jane Cooper</span>
                                    <NbIcon :name="faChevronDown" class="h-3 w-3" />
                                </span>
                            </template>
                            <template #content>
                                <DropdownLink href="#"><NbIcon :name="faUser" class="h-4 w-4" /> Profile</DropdownLink>
                                <DropdownLink href="#"><NbIcon :name="faGear" class="h-4 w-4" /> Settings</DropdownLink>
                                <DropdownSeparator />
                                <DropdownLink href="#"><NbIcon :name="faRightFromBracket" class="h-4 w-4" /> Log out</DropdownLink>
                            </template>
                        </Dropdown>
                    </div>
                </nav>
                <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">Active route: {{ current }}</p>
            </div>

            <h4 class="mt-8 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">Mobile (hamburger toggles the block below the bar)</h4>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <nav class="w-full max-w-[22rem] rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex h-14 items-center justify-between px-4">
                        <span class="rounded bg-primary-600 px-2 py-1 text-sm font-bold text-white">NB</span>
                        <button
                            type="button"
                            class="focusable cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                            :aria-expanded="mobileOpen"
                            aria-label="Toggle navigation"
                            @click="mobileOpen = !mobileOpen"
                        >
                            <NbIcon :name="mobileOpen ? faXmark : faBars" class="h-5 w-5" />
                        </button>
                    </div>

                    <div v-show="mobileOpen" class="max-h-72 space-y-1 overflow-y-auto border-t border-gray-200 py-2 dark:border-gray-700">
                        <ul class="m-0 list-none space-y-1 p-0">
                            <template v-for="item in navItems" :key="item.name">
                                <NavCollapse v-if="item.children" :name="item.name">
                                    <li v-for="child in item.children" :key="child.href" class="list-none" @click.prevent="go(child.href)">
                                        <ResponsiveNavLink :href="child.href" :active="current === child.href">
                                            {{ child.name }}
                                        </ResponsiveNavLink>
                                    </li>
                                </NavCollapse>
                                <li v-else class="list-none" @click.prevent="go(item.href)">
                                    <ResponsiveNavLink :href="item.href" :active="current === item.href">
                                        {{ item.name }}
                                    </ResponsiveNavLink>
                                </li>
                            </template>
                        </ul>

                        <div class="mt-2 flex items-center gap-3 border-t border-gray-200 px-4 pt-3 dark:border-gray-700">
                            <GravatarImg email="jane@example.com" :size="64" class="h-8 w-8 rounded-full" />
                            <div class="text-sm">
                                <div class="font-medium text-gray-800 dark:text-gray-100">Jane Cooper</div>
                                <div class="text-gray-500 dark:text-gray-400">jane@example.com</div>
                            </div>
                        </div>
                        <ResponsiveNavLink href="#">Profile</ResponsiveNavLink>
                        <ResponsiveNavLink href="#">Settings</ResponsiveNavLink>
                        <ResponsiveNavLink href="#">Log out</ResponsiveNavLink>
                    </div>
                </nav>
            </div>

            <CodePreview :code="snippet" />
        </DocDemoCard>
    </section>
</template>
