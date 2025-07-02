<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
    faChevronDown, 
    faUser, 
    faCog, 
    faCreditCard, 
    faSignOutAlt 
} from '@fortawesome/free-solid-svg-icons';
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

// Navigation state
const isMobileMenuOpen = ref(false);
const currentRoute = ref('/dashboard');

// Mock navigation data
const mainNavItems = [
    { name: 'Dashboard', href: '/dashboard', current: true },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Team', href: '/team', current: false },
    { name: 'Reports', href: '/reports', current: false },
];

const userNavItems = [
    { name: 'Profile', href: '/profile' },
    { name: 'Settings', href: '/settings' },
    { name: 'Billing', href: '/billing' },
];

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
    '<!-- Dropdown Navigation -->',
    '<Dropdown align="right" width="48">',
    '  <template #trigger>',
    '    <button class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">',
    '      <GravatarImg email="user@example.com" class="h-8 w-8 mr-2" />',
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
];

const navCollapseExamples = [
    '<!-- Collapsible Navigation Section -->',
    '<NavCollapse title="Admin Tools" :defaultOpen="false">',
    '  <div class="pl-4 space-y-2">',
    '    <NavLink href="/admin/users">User Management</NavLink>',
    '    <NavLink href="/admin/settings">System Settings</NavLink>',
    '    <NavLink href="/admin/logs">Activity Logs</NavLink>',
    '  </div>',
    '</NavCollapse>',
];

// Props data
const navLinkProps = [
    { prop: 'href', type: 'string', default: '-', description: 'The URL to navigate to' },
    { prop: 'active', type: 'boolean', default: 'false', description: 'Whether this link represents the current page' },
    { prop: 'method', type: 'string', default: "'get'", description: 'HTTP method for Inertia requests' },
    { prop: 'as', type: 'string', default: "'a'", description: 'HTML element or component to render as' },
    { prop: 'preserveScroll', type: 'boolean', default: 'false', description: 'Preserve scroll position during navigation' },
    { prop: 'preserveState', type: 'boolean', default: 'false', description: 'Preserve component state during navigation' },
];

const dropdownProps = [
    { prop: 'align', type: 'string', default: "'right'", description: 'Dropdown alignment: left, right' },
    { prop: 'width', type: 'string', default: "'48'", description: 'Dropdown width in Tailwind width classes' },
    { prop: 'contentClasses', type: 'string[]', default: '[]', description: 'Additional CSS classes for dropdown content' },
];

const dropdownSlots = [
    { prop: 'trigger', type: 'slot', default: '-', description: 'Dropdown trigger element (button, link, etc.)' },
    { prop: 'content', type: 'slot', default: '-', description: 'Dropdown menu content' },
];

const gravatarProps = [
    { prop: 'email', type: 'string', default: '-', description: 'Email address for Gravatar lookup' },
    { prop: 'size', type: 'number', default: '80', description: 'Image size in pixels' },
    {
        prop: 'defaultImage',
        type: 'string',
        default: "'mp'",
        description: 'Default image type: mp, identicon, monsterid, wavatar, retro, robohash, blank',
    },
    { prop: 'rating', type: 'string', default: "'g'", description: 'Maximum rating: g, pg, r, x' },
    { prop: 'alt', type: 'string', default: "'Avatar'", description: 'Alt text for the image' },
];
</script>

<template>
    <div class="space-y-12">
        <section id="nav-links">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Navigation Links</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Clean navigation links with active state styling and Inertia.js integration.</p>

                <h4 class="mb-4 text-lg font-semibold text-gray-800">Desktop Navigation</h4>
                <div class="mb-6 rounded border bg-gray-50 p-4">
                    <nav class="flex space-x-8">
                        <NavLink href="/dashboard" :active="currentRoute === '/dashboard'" @click="currentRoute = '/dashboard'">Dashboard</NavLink>
                        <NavLink href="/projects" :active="currentRoute === '/projects'" @click="currentRoute = '/projects'">Projects</NavLink>
                        <NavLink href="/team" :active="currentRoute === '/team'" @click="currentRoute = '/team'">Team</NavLink>
                        <NavLink href="/reports" :active="currentRoute === '/reports'" @click="currentRoute = '/reports'">Reports</NavLink>
                    </nav>
                </div>

                <h4 class="mb-4 text-lg font-semibold text-gray-800">Mobile Navigation</h4>
                <div class="mb-6 rounded border bg-gray-50 p-4">
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

                <CollapsableSection header="NavLink Props" class="mt-6">
                    <PropsTable :rows="navLinkProps" />
                </CollapsableSection>

                <h4 class="mt-8 mb-4 text-lg font-semibold text-gray-800">Responsive Navigation</h4>
                <CodePreview :code="responsiveNavExamples" />
            </div>
        </section>

        <section id="dropdown-navigation">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Dropdown Navigation</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Dropdown menus for user navigation, settings, and contextual actions.</p>

                <h4 class="mb-4 text-lg font-semibold text-gray-800">User Menu Dropdown</h4>
                <div class="mb-6 flex justify-end rounded border bg-gray-50 p-4">
                    <Dropdown align="end" width="48">
                        <template #trigger>
                            <button
                                class="flex items-center px-3 py-2 text-sm font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                            >
                                <GravatarImg email="john@example.com" class="mr-2 h-8 w-8 rounded-full" />
                                <span>John Doe</span>
                                <FontAwesomeIcon :icon="faChevronDown" class="ml-2 h-4 w-4" />
                            </button>
                        </template>
                        <template #content>
                            <DropdownLink href="/profile">
                                <FontAwesomeIcon :icon="faUser" class="mr-2 h-4 w-4" />
                                Profile
                            </DropdownLink>
                            <DropdownLink href="/settings">
                                <FontAwesomeIcon :icon="faCog" class="mr-2 h-4 w-4" />
                                Settings
                            </DropdownLink>
                            <DropdownLink href="/billing">
                                <FontAwesomeIcon :icon="faCreditCard" class="mr-2 h-4 w-4" />
                                Billing
                            </DropdownLink>
                            <DropdownSeparator />
                            <DropdownLink href="/logout" method="post">
                                <FontAwesomeIcon :icon="faSignOutAlt" class="mr-2 h-4 w-4" />
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
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Gravatar Images</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Automatically generated user avatars from Gravatar service with fallback options.</p>

                <h4 class="mb-4 text-lg font-semibold text-gray-800">Different Sizes</h4>
                <div class="mb-6 rounded border bg-gray-50 p-4">
                    <div class="flex items-center space-x-4">
                        <GravatarImg email="john@example.com" :size="32" class="rounded-full" />
                        <GravatarImg email="jane@example.com" :size="48" class="rounded-full" />
                        <GravatarImg email="bob@example.com" :size="64" class="rounded-full" />
                        <GravatarImg email="alice@example.com" :size="80" class="rounded-full" />
                    </div>
                </div>

                <h4 class="mb-4 text-lg font-semibold text-gray-800">Default Image Types</h4>
                <div class="mb-6 rounded border bg-gray-50 p-4">
                    <div class="grid grid-cols-4 gap-4">
                        <div class="text-center">
                            <GravatarImg email="test1@example.com" :size="60" defaultImage="mp" class="mx-auto mb-2 rounded-full" />
                            <span class="text-xs text-gray-600">Mystery Person</span>
                        </div>
                        <div class="text-center">
                            <GravatarImg email="test2@example.com" :size="60" defaultImage="identicon" class="mx-auto mb-2 rounded-full" />
                            <span class="text-xs text-gray-600">Identicon</span>
                        </div>
                        <div class="text-center">
                            <GravatarImg email="test3@example.com" :size="60" defaultImage="retro" class="mx-auto mb-2 rounded-full" />
                            <span class="text-xs text-gray-600">Retro</span>
                        </div>
                        <div class="text-center">
                            <GravatarImg email="test4@example.com" :size="60" defaultImage="robohash" class="mx-auto mb-2 rounded-full" />
                            <span class="text-xs text-gray-600">Robohash</span>
                        </div>
                    </div>
                </div>

                <CollapsableSection header="GravatarImg Props" class="mt-6">
                    <PropsTable :rows="gravatarProps" />
                </CollapsableSection>
            </div>
        </section>

        <section id="nav-collapse">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Collapsible Navigation</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Collapsible navigation sections for organizing menu items into groups.</p>

                <div class="mb-6 rounded border bg-gray-50 p-4">
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
            </div>
        </section>
    </div>
</template>
