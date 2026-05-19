<script setup lang="ts">
import { ref } from 'vue';
import { NbIcon } from '../icons';
import { faChevronDown, faUser, faCog, faCreditCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {
    NavLink,
    ResponsiveNavLink,
    NavCollapse,
    Dropdown,
    DropdownLink,
    DropdownSeparator,
    GravatarImg,
    PrimaryButton,
    CodePreview,
    CollapsableSection,
    PropsTable,
} from '../index';

const currentRoute = ref('/dashboard');

// Code examples
const navLinkExamples = [
    '<!-- Basic Navigation -->',
    '<nav class="flex space-x-8">',
    '  <NavLink href="/dashboard" :active="route().current(\'dashboard\')">',
    '    Dashboard',
    '  </NavLink>',
    '  <NavLink href="/projects" :active="route().current(\'projects\')">',
    '    Projects',
    '  </NavLink>',
    '  <NavLink href="/team" :active="route().current(\'team\')">',
    '    Team',
    '  </NavLink>',
    '</nav>',
];

const responsiveNavExamples = [
    '<!-- Mobile Navigation -->',
    '<div class="md:hidden">',
    '  <ResponsiveNavLink href="/dashboard" :active="route().current(\'dashboard\')">',
    '    Dashboard',
    '  </ResponsiveNavLink>',
    '  <ResponsiveNavLink href="/projects" :active="route().current(\'projects\')">',
    '    Projects',
    '  </ResponsiveNavLink>',
    '</div>',
];

const dropdownNavExamples = [
    '<Dropdown align="end" :alignOffset="0">',
    '  <template #trigger>',
    '    <button class="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700">',
    '      <GravatarImg email="user@example.com" :size="32" class="rounded-full mr-2" />',
    '      John Doe',
    '    </button>',
    '  </template>',
    '  <template #content>',
    '    <DropdownLink href="/profile">Profile</DropdownLink>',
    '    <DropdownLink href="/settings">Settings</DropdownLink>',
    '    <DropdownSeparator />',
    '    <DropdownLink href="/logout" method="post">Logout</DropdownLink>',
    '  </template>',
    '</Dropdown>',
    '',
    '<!-- Open on hover -->',
    '<Dropdown openOnHover :hoverDelay="200">',
    '  <template #trigger>…</template>',
    '  <template #content>…</template>',
    '</Dropdown>',
];

const navCollapseExamples = [
    '<NavCollapse name="Admin Tools" :open="false">',
    '  <NavLink href="/admin/users">User Management</NavLink>',
    '  <NavLink href="/admin/settings">System Settings</NavLink>',
    '  <NavLink href="/admin/logs">Activity Logs</NavLink>',
    '</NavCollapse>',
    '',
    '<!-- With a custom icon -->',
    '<NavCollapse name="Reports">',
    '  <template #icon>',
    '    <NbIcon :name="faChartBar" />',
    '  </template>',
    '  <NavLink href="/reports/daily">Daily</NavLink>',
    '</NavCollapse>',
];

// Props data — verified against the actual components
const navLinkProps = [
    { prop: 'href', type: 'string', default: '-', description: 'Destination URL. NavLink wraps the Inertia Link, so this performs an Inertia visit.', required: true },
    { prop: 'active', type: 'boolean', default: 'false', description: 'Applies the active styling (the caller decides activeness, e.g. via `route().current()`)' },
];

const navLinkSlots = [
    { prop: 'default', type: 'slot', default: '-', description: 'Link label text' },
    { prop: 'icon', type: 'slot', default: '-', description: 'Optional icon rendered to the left of the label (NavLink only — ResponsiveNavLink has no icon slot)' },
];

const dropdownProps = [
    { prop: 'align', type: "'start' | 'center' | 'end'", default: "'start'", description: 'Where the dropdown anchors to the trigger' },
    { prop: 'alignOffset', type: 'number', default: '5', description: 'Pixel offset from the alignment point' },
    { prop: 'openOnHover', type: 'boolean', default: 'false', description: 'Open the menu on hover instead of click', highlight: true },
    { prop: 'hoverDelay', type: 'number', default: '150', description: 'Delay in ms before closing after mouse leave (only when openOnHover is true)' },
];

const dropdownSlots = [
    { prop: 'trigger', type: 'slot', default: '-', description: 'Element that opens the menu (button, link, etc.)' },
    { prop: 'content', type: 'slot', default: '-', description: 'Menu items — typically a list of DropdownLink / DropdownSeparator' },
];

const gravatarProps = [
    { prop: 'email', type: 'string', default: '-', description: 'Email — md5-hashed and used to look up the Gravatar', required: true },
    { prop: 'size', type: 'number', default: '100', description: 'Image size in pixels (the requested s= parameter on the Gravatar URL)' },
];

const navCollapseProps = [
    { prop: 'name', type: 'string', default: '-', description: 'Title shown in the toggle row', required: true },
    { prop: 'open', type: 'boolean', default: 'false', description: 'Initial open state (also reactive — updating this re-opens or closes the section)' },
];

const navCollapseSlots = [
    { prop: 'default', type: 'slot', default: '-', description: 'Child links rendered when expanded (typically NavLink elements)' },
    { prop: 'icon', type: 'slot', default: '-', description: 'Optional icon rendered to the left of the title' },
];
</script>

<template>
    <div class="space-y-12">
        <section id="nav-links">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Navigation Links</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">Clean navigation links with active state styling and Inertia.js integration.</p>

                <h4 class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Desktop Navigation</h4>
                <div class="mb-6 rounded border bg-gray-50 dark:bg-gray-900/40 p-4">
                    <nav class="flex space-x-8">
                        <NavLink href="/dashboard" :active="currentRoute === '/dashboard'" @click="currentRoute = '/dashboard'">Dashboard</NavLink>
                        <NavLink href="/projects" :active="currentRoute === '/projects'" @click="currentRoute = '/projects'">Projects</NavLink>
                        <NavLink href="/team" :active="currentRoute === '/team'" @click="currentRoute = '/team'">Team</NavLink>
                        <NavLink href="/reports" :active="currentRoute === '/reports'" @click="currentRoute = '/reports'">Reports</NavLink>
                    </nav>
                </div>

                <h4 class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Mobile Navigation</h4>
                <div class="mb-6 rounded border bg-gray-50 dark:bg-gray-900/40 p-4">
                    <div class="space-y-1">
                        <ResponsiveNavLink href="/dashboard" :active="currentRoute === '/dashboard'" @click="currentRoute = '/dashboard'">
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href="/projects" :active="currentRoute === '/projects'" @click="currentRoute = '/projects'">
                            Projects
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href="/team" :active="currentRoute === '/team'" @click="currentRoute = '/team'">Team</ResponsiveNavLink>
                        <ResponsiveNavLink href="/reports" :active="currentRoute === '/reports'" @click="currentRoute = '/reports'">
                            Reports
                        </ResponsiveNavLink>
                    </div>
                </div>

                <CodePreview :code="navLinkExamples" />

                <CollapsableSection header="NavLink / ResponsiveNavLink Props" class="mt-6">
                    <PropsTable :rows="navLinkProps" />
                </CollapsableSection>

                <CollapsableSection header="Slots" class="mt-4">
                    <PropsTable :rows="navLinkSlots" />
                </CollapsableSection>

                <h4 class="mt-8 mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Responsive Navigation</h4>
                <CodePreview :code="responsiveNavExamples" />
            </div>
        </section>

        <section id="dropdown-navigation">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Dropdown Navigation</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">Dropdown menus for user navigation, settings, and contextual actions.</p>

                <h4 class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">User Menu Dropdown</h4>
                <div class="mb-6 flex justify-end rounded border bg-gray-50 dark:bg-gray-900/40 p-4">
                    <Dropdown align="end">
                        <template #trigger>
                            <button
                                class="flex items-center px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 transition duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                            >
                                <GravatarImg email="john@example.com" class="mr-2 h-8 w-8 rounded-full" />
                                <span>John Doe</span>
                                <NbIcon :name="faChevronDown" class="ml-2 h-4 w-4" />
                            </button>
                        </template>
                        <template #content>
                            <DropdownLink href="/profile">
                                <NbIcon :name="faUser" class="mr-2 h-4 w-4" />
                                Profile
                            </DropdownLink>
                            <DropdownLink href="/settings">
                                <NbIcon :name="faCog" class="mr-2 h-4 w-4" />
                                Settings
                            </DropdownLink>
                            <DropdownLink href="/billing">
                                <NbIcon :name="faCreditCard" class="mr-2 h-4 w-4" />
                                Billing
                            </DropdownLink>
                            <DropdownSeparator />
                            <DropdownLink href="/logout" method="post">
                                <NbIcon :name="faSignOutAlt" class="mr-2 h-4 w-4" />
                                Logout
                            </DropdownLink>
                        </template>
                    </Dropdown>
                </div>

                <CodePreview :code="dropdownNavExamples" />

                <CollapsableSection header="Dropdown Props" class="mt-6">
                    <PropsTable :rows="dropdownProps" />
                </CollapsableSection>

                <CollapsableSection header="Dropdown Slots" class="mt-6">
                    <PropsTable :rows="dropdownSlots" />
                </CollapsableSection>
            </div>
        </section>

        <section id="gravatar">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Gravatar Images</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">Automatically generated user avatars from Gravatar service with fallback options.</p>

                <h4 class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Different Sizes</h4>
                <div class="mb-6 rounded border bg-gray-50 dark:bg-gray-900/40 p-4">
                    <div class="flex items-center space-x-4">
                        <GravatarImg email="john@example.com" :size="32" class="rounded-full" />
                        <GravatarImg email="jane@example.com" :size="48" class="rounded-full" />
                        <GravatarImg email="bob@example.com" :size="64" class="rounded-full" />
                        <GravatarImg email="alice@example.com" :size="80" class="rounded-full" />
                    </div>
                </div>

                <CollapsableSection header="GravatarImg Props" class="mt-6">
                    <PropsTable :rows="gravatarProps" />
                </CollapsableSection>
            </div>
        </section>

        <section id="nav-collapse">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Collapsible Navigation</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">Collapsible navigation sections for organizing menu items into groups.</p>

                <div class="mb-6 rounded border bg-gray-50 dark:bg-gray-900/40 p-4">
                    <nav class="space-y-2">
                        <NavCollapse name="Dashboard" :open="true">
                            <div class="space-y-1 pl-4">
                                <NavLink href="/dashboard/overview" :active="false" class="block">Overview</NavLink>
                                <NavLink href="/dashboard/analytics" :active="false" class="block">Analytics</NavLink>
                                <NavLink href="/dashboard/reports" :active="false" class="block">Reports</NavLink>
                            </div>
                        </NavCollapse>

                        <NavCollapse name="Projects" :open="false">
                            <div class="space-y-1 pl-4">
                                <NavLink href="/projects/active" :active="false" class="block">Active Projects</NavLink>
                                <NavLink href="/projects/archived" :active="false" class="block">Archived</NavLink>
                                <NavLink href="/projects/new" :active="false" class="block">Create New</NavLink>
                            </div>
                        </NavCollapse>

                        <NavCollapse name="Admin Tools" :open="false">
                            <div class="space-y-1 pl-4">
                                <NavLink href="/admin/users" :active="false" class="block">User Management</NavLink>
                                <NavLink href="/admin/settings" :active="false" class="block">System Settings</NavLink>
                                <NavLink href="/admin/logs" :active="false" class="block">Activity Logs</NavLink>
                            </div>
                        </NavCollapse>
                    </nav>
                </div>

                <CodePreview :code="navCollapseExamples" />

                <CollapsableSection header="NavCollapse Props" class="mt-6">
                    <PropsTable :rows="navCollapseProps" />
                </CollapsableSection>

                <CollapsableSection header="NavCollapse Slots" class="mt-4">
                    <PropsTable :rows="navCollapseSlots" />
                </CollapsableSection>
            </div>
        </section>
    </div>
</template>
