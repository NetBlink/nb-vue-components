<script setup lang="ts">
import { ref, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronCircleDown, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
    Alert,
    Spinner,
    Tooltip,
    Stats,
    Section,
    Collapse,
    Pagination,
    DescriptionList,
    DescriptionListItem,
    CodePreview,
    PropsTable,
    DataTile,
} from '../index';

// Component state
const showAlert = ref(true);
const showSuccessAlert = ref(true);
const showErrorAlert = ref(true);
const showWarningAlert = ref(true);
const showInfoAlert = ref(true);
const collapseOpen = ref(false);
const currentPage = ref(1);

// Mock pagination data
const createPaginationLinks = (current: number, total: number) => {
    const links = [];

    // Previous link
    links.push({
        url: current > 1 ? `?page=${current - 1}` : null,
        label: 'Previous',
        active: false,
    });

    // Page number links
    for (let i = 1; i <= total; i++) {
        links.push({
            url: `?page=${i}`,
            label: i.toString(),
            active: i === current,
        });
    }

    // Next link
    links.push({
        url: current < total ? `?page=${current + 1}` : null,
        label: 'Next',
        active: false,
    });

    return links;
};

const paginationLinks = computed(() => createPaginationLinks(currentPage.value, 15));

const handlePageChange = (url: string) => {
    const urlObj = new URL(url, window.location.origin);
    const page = parseInt(urlObj.searchParams.get('page') || '1');
    currentPage.value = page;
};

// Sample data
const statsData = [
    { name: 'Total Users', value: 1234, label: '+12%' },
    { name: 'Revenue', value: 45678, label: '+8.2%' },
    { name: 'Bounce Rate', value: 32, label: '-2.1%' },
    { name: 'Conversion', value: 4.8, label: '-0.3%' },
];

const userDetails = [
    { label: 'Full Name', value: 'John Doe' },
    { label: 'Email', value: 'john.doe@example.com' },
    { label: 'Role', value: 'Administrator' },
    { label: 'Department', value: 'Engineering' },
    { label: 'Location', value: 'San Francisco, CA' },
    { label: 'Joined', value: 'March 15, 2023' },
];

// Code examples
const alertExamples = [
    '<!-- Basic Alerts -->',
    '<Alert type="success" :dismissible="true">',
    '  Operation completed successfully!',
    '</Alert>',
    '',
    '<Alert type="error" title="Error">',
    '  Something went wrong. Please try again.',
    '</Alert>',
    '',
    '<Alert type="warning" title="Warning" :dismissible="true">',
    '  This action cannot be undone.',
    '</Alert>',
    '',
    '<Alert type="info" title="Information">',
    '  New features are available in this version.',
    '</Alert>',
    '',
    '<!-- Controlled Alerts with v-model -->',
    '<Alert v-model="showAlert" type="success" title="Controlled Alert" :dismissible="true">',
    '  This alert visibility is controlled by a reactive variable.',
    '</Alert>',
    '',
    '<!-- Toggle button -->',
    '<button @click="showAlert = !showAlert">',
    '  {{ showAlert ? "Hide" : "Show" }} Alert',
    '</button>',
];

const spinnerExamples = [
    '<!-- Basic Spinner (default medium size) -->',
    '<Spinner />',
    '',
    '<!-- Different Sizes -->',
    '<Spinner size="xs" />',
    '<Spinner size="sm" />',
    '<Spinner size="md" />',
    '<Spinner size="lg" />',
    '<Spinner size="xl" />',
    '',
    '<!-- Custom Colors -->',
    '<Spinner size="md" color="text-green-600" />',
    '<Spinner size="md" color="text-red-600" />',
    '<Spinner size="md" color="text-purple-600" />',
    '',
    '<!-- Spinner with text -->',
    '<div class="flex items-center space-x-3">',
    '  <Spinner size="sm" />',
    '  <span>Loading your data...</span>',
    '</div>',
];

const tooltipExamples = [
    '<!-- Basic Tooltip -->',
    '<Tooltip content="This is a helpful tooltip">',
    '  <button class="text-blue-600 underline">Hover me</button>',
    '</Tooltip>',
    '',
    '<!-- Side + delay -->',
    '<Tooltip content="Tooltip on top" side="top" :delayDuration="300">',
    '  <button class="bg-blue-500 text-white px-4 py-2 rounded">Top</button>',
    '</Tooltip>',
];

const statsExamples = [
    '<!-- Each stat is { name, value, label? } — clicking emits updateSearch -->',
    '<Stats :stats="statsData" @updateSearch="onStatusChange" />',
    '',
    '<!-- Wire the selected state to a query-string parameter -->',
    '<Stats :stats="statsData" statusName="status" />',
];

const sectionExamples = [
    '<!-- Basic Section (header prop renders a styled heading bar) -->',
    '<Section header="User Settings">',
    '  <p>Section content goes here…</p>',
    '</Section>',
    '',
    '<!-- Section with a button on the header -->',
    '<Section header="Account Information">',
    '  <template #headerButton>',
    '    <PrimaryButton>Edit</PrimaryButton>',
    '  </template>',
    '  <p>Account details and information.</p>',
    '</Section>',
    '',
    '<!-- Variants -->',
    '<Section header="Outlined" variant="outlined">…</Section>',
    '<Section header="Minimal" variant="minimal">…</Section>',
    '<Section unstyled>Just the inner padding, no border/shadow.</Section>',
];

const paginationExamples = [
    '<!-- Inertia-style pagination using Laravel\'s links payload -->',
    '<Pagination :links="paginationLinks" />',
    '',
    '<!-- Disable navigation, emit a `change` event instead (use this when you handle URLs yourself) -->',
    '<Pagination :links="paginationLinks" :linkReturn="true" @change="handlePageChange" />',
    '',
    '<!-- Show a per-page selector alongside the page links -->',
    '<Pagination :links="paginationLinks" :showPerPage="true" :defaultPerPage="25" />',
];

// Props data — verified against actual components
const alertProps = [
    { prop: 'type', type: "'success' | 'error' | 'warning' | 'info'", default: "'info'", description: 'Visual variant (also controls the icon)' },
    { prop: 'title', type: 'string', default: '-', description: 'Bold title rendered above the slot content' },
    { prop: 'dismissible', type: 'boolean', default: 'false', description: 'Show an × close button on the right' },
    { prop: 'v-model', type: 'boolean', default: 'true', description: 'Two-way binding for visibility (also accepts :modelValue + @update:modelValue)' },
];

const alertEvents = [
    { prop: '@update:modelValue', type: 'event(boolean)', default: '-', description: 'Fired when visibility changes' },
    { prop: '@dismiss', type: 'event()', default: '-', description: 'Fired when the user clicks the dismiss button' },
];

const spinnerProps = [
    { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Spinner diameter and border-thickness' },
    { prop: 'color', type: 'string', default: "'text-primary'", description: 'Tailwind text-color class applied to the spinner' },
];

const tooltipProps = [
    { prop: 'content', type: 'string', default: '-', description: 'Tooltip text content', required: true },
    { prop: 'side', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Side of the trigger the tooltip appears on' },
    { prop: 'delayDuration', type: 'number', default: '100', description: 'Hover delay in ms before the tooltip appears' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the tooltip entirely (trigger still renders)' },
    { prop: 'sideOffset', type: 'number', default: '4', description: 'Pixel offset between trigger and tooltip' },
    { prop: 'collisionPadding', type: 'number', default: '8', description: 'Pixels of padding to keep from the viewport edge' },
    { prop: 'contentClass', type: 'string', default: "''", description: 'Extra classes for the tooltip bubble' },
    { prop: 'arrowClass', type: 'string', default: "''", description: 'Extra classes for the arrow' },
];

const statsProps = [
    { prop: 'stats', type: 'StatItem[]', default: '-', description: 'Each item is `{ name, value, label? }` — `label` falls back to `name` for display', required: true },
    { prop: 'statusName', type: 'string | null', default: 'null', description: 'Name of the URL query parameter used to determine the selected stat' },
    { prop: 'customContainerClass', type: 'string', default: "''", description: 'Extra classes on the outer grid' },
    { prop: 'customStatClass', type: 'string', default: "''", description: 'Extra classes on each stat card' },
    { prop: 'customStatValueClass', type: 'string', default: "''", description: 'Extra classes on each stat value' },
    { prop: 'customStatLabelClass', type: 'string', default: "''", description: 'Extra classes on each stat label' },
];

const statsEvents = [
    { prop: '@updateSearch', type: 'event(string | null)', default: '-', description: 'Emits the clicked stat name (or null when the same one is re-clicked)' },
];

const sectionProps = [
    { prop: 'header', type: 'string', default: '-', description: 'Optional heading text displayed in a styled bar at the top' },
    { prop: 'variant', type: "'default' | 'outlined' | 'minimal'", default: "'default'", description: 'Visual style of the surrounding card' },
    { prop: 'overflow', type: 'boolean', default: 'false', description: 'Add overflow-hidden to the outer container' },
    { prop: 'unstyled', type: 'boolean', default: 'false', description: 'Remove all default styling — useful when you want full control' },
];

const sectionSlots = [
    { prop: 'default', type: 'slot', default: '-', description: 'Body content (rendered inside the inner padded div)' },
    { prop: 'headerButton', type: 'slot', default: '-', description: 'Right-aligned slot in the header bar (only visible when `header` is set)' },
];

const collapseProps = [
    { prop: 'open', type: 'boolean', default: 'false', description: 'Initial open state (reactive — updating the prop opens/closes the section)' },
    { prop: 'button', type: '[string, string]', default: "['Show more', 'Show less']", description: 'Labels for the built-in trigger button (only used when no #trigger slot is provided)' },
];

const collapseSlots = [
    { prop: 'default', type: 'slot', default: '-', description: 'Content shown when expanded' },
    { prop: 'trigger', type: 'slot', default: '-', description: 'Custom trigger element (otherwise a SecondaryButton with the `button` labels is used)' },
];

const paginationProps = [
    { prop: 'links', type: 'PaginationLink[]', default: '-', description: 'Laravel-style links array: `{ url, label, active }[]`', required: true },
    { prop: 'linkReturn', type: 'boolean', default: 'false', description: 'When true, render <button> elements and emit `change(url)` instead of using Inertia Link', highlight: true },
    { prop: 'maxPagesToShow', type: 'number', default: '20', description: 'Maximum visible page links (first/last always shown)' },
    { prop: 'logs', type: 'boolean', default: 'false', description: 'Convenience flag for paginating server-side logs — sets preserveScroll/preserveState and only=[\'logs\']' },
    { prop: 'preserveScroll', type: 'boolean', default: 'false', description: 'Forwarded to Inertia Link' },
    { prop: 'preserveState', type: 'boolean', default: 'false', description: 'Forwarded to Inertia Link' },
    { prop: 'only', type: 'string[]', default: '[]', description: 'Forwarded to Inertia Link (partial reload property names)' },
    { prop: 'showPerPage', type: 'boolean', default: 'false', description: 'Render a per-page selector with options [10, 25, 50, 100, 250]' },
    { prop: 'defaultPerPage', type: 'number', default: '100', description: 'Initial value for the per-page selector' },
    { prop: 'customLinkClass', type: 'string', default: "''", description: 'Extra classes on each link' },
    { prop: 'customActiveLinkClass', type: 'string', default: "''", description: 'Extra classes on the active link' },
    { prop: 'customListClass', type: 'string', default: "''", description: 'Extra classes on the <ul>' },
];

const paginationEvents = [
    { prop: '@change', type: 'event(url: string)', default: '-', description: 'Fires when a page link is clicked (only when linkReturn is true)' },
];

const dataTileProps = [
    { prop: 'value', type: 'string | number', default: '-', description: 'The big number / value to display', required: true },
    { prop: 'label', type: 'string', default: '-', description: 'Label rendered under the value', required: true },
    { prop: 'icon', type: 'IconProp', default: '-', description: 'FontAwesome icon shown in the background of the value area' },
    { prop: 'theme', type: 'ComponentTheme', default: "'primary'", description: 'primary | secondary | success | danger | warning' },
    { prop: 'selected', type: 'boolean', default: 'false', description: 'Adds a ring outline to indicate the tile is currently active' },
    { prop: 'customStatClass', type: 'string', default: "''", description: 'Extra classes on the outer card' },
    { prop: 'customStatValueClass', type: 'string', default: "''", description: 'Extra classes on the value section' },
    { prop: 'customStatLabelClass', type: 'string', default: "''", description: 'Extra classes on the label section' },
];
</script>

<template>
    <div class="space-y-12">
        <section id="alerts">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Alerts</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
                    Contextual alert messages with smooth show/hide animations for success, error, warning, and informational feedback.
                </p>

                <div class="mb-6 space-y-4">
                    <!-- Basic Alert Examples -->
                    <Alert type="success" title="Success" :dismissible="true">Your changes have been saved successfully!</Alert>

                    <Alert type="error" title="Error" :dismissible="true">There was an error processing your request. Please try again.</Alert>

                    <Alert type="warning" title="Warning" :dismissible="true">
                        This action will permanently delete your data and cannot be undone.
                    </Alert>

                    <Alert type="info" title="New Features Available">Check out the latest updates and improvements in version 2.0.</Alert>
                </div>

                <!-- Interactive Animation Demo -->
                <div class="mb-6 rounded-lg border border-gray-100 bg-gray-50 p-4">
                    <h4 class="mb-3 font-semibold text-gray-800">Interactive Animation Demo</h4>
                    <p class="mb-4 text-sm text-gray-600">Click the buttons below to see the smooth show/hide animations:</p>

                    <div class="mb-4 flex flex-wrap gap-2">
                        <button
                            @click="showSuccessAlert = !showSuccessAlert"
                            class="rounded bg-green-600 px-3 py-1 text-sm text-white transition-colors hover:bg-green-700"
                        >
                            {{ showSuccessAlert ? 'Hide' : 'Show' }} Success
                        </button>
                        <button
                            @click="showErrorAlert = !showErrorAlert"
                            class="rounded bg-red-600 px-3 py-1 text-sm text-white transition-colors hover:bg-red-700"
                        >
                            {{ showErrorAlert ? 'Hide' : 'Show' }} Error
                        </button>
                        <button
                            @click="showWarningAlert = !showWarningAlert"
                            class="rounded bg-yellow-600 px-3 py-1 text-sm text-white transition-colors hover:bg-yellow-700"
                        >
                            {{ showWarningAlert ? 'Hide' : 'Show' }} Warning
                        </button>
                        <button
                            @click="showInfoAlert = !showInfoAlert"
                            class="rounded bg-blue-600 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-700"
                        >
                            {{ showInfoAlert ? 'Hide' : 'Show' }} Info
                        </button>
                    </div>

                    <div class="space-y-3">
                        <Alert v-model="showSuccessAlert" type="success" title="Animated Success" :dismissible="true">
                            This alert smoothly fades and slides in/out with beautiful animations!
                        </Alert>

                        <Alert v-model="showErrorAlert" type="error" title="Animated Error" :dismissible="true">
                            Watch the smooth transitions as this alert appears and disappears.
                        </Alert>

                        <Alert v-model="showWarningAlert" type="warning" title="Animated Warning" :dismissible="true">
                            The animations include opacity, scale, and translate transforms.
                        </Alert>

                        <Alert v-model="showInfoAlert" type="info" title="Animated Info" :dismissible="true">
                            All animations are CSS-based for optimal performance.
                        </Alert>
                    </div>
                </div>

                <CodePreview :code="alertExamples" />

                <div class="mt-6">
                    <h4 class="mb-3 font-semibold text-gray-800">Alert Props</h4>
                    <PropsTable :rows="alertProps" />
                </div>

                <div class="mt-4">
                    <h4 class="mb-3 font-semibold text-gray-800">Events</h4>
                    <PropsTable :rows="alertEvents" />
                </div>
            </div>
        </section>

        <section id="spinners">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Loading Spinners</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Loading indicators for async operations and data fetching states.</p>

                <div class="mb-6">
                    <h4 class="mb-4 text-lg font-semibold text-gray-800">Spinner Sizes</h4>
                    <div class="flex items-center space-x-8 rounded border bg-gray-50 p-4">
                        <div class="text-center">
                            <Spinner size="xs" />
                            <p class="mt-2 text-sm text-gray-600">Extra Small</p>
                        </div>
                        <div class="text-center">
                            <Spinner size="sm" />
                            <p class="mt-2 text-sm text-gray-600">Small</p>
                        </div>
                        <div class="text-center">
                            <Spinner size="md" />
                            <p class="mt-2 text-sm text-gray-600">Medium (Default)</p>
                        </div>
                        <div class="text-center">
                            <Spinner size="lg" />
                            <p class="mt-2 text-sm text-gray-600">Large</p>
                        </div>
                        <div class="text-center">
                            <Spinner size="xl" />
                            <p class="mt-2 text-sm text-gray-600">Extra Large</p>
                        </div>
                    </div>

                    <h4 class="mt-6 mb-4 text-lg font-semibold text-gray-800">With Custom Colors</h4>
                    <div class="flex items-center space-x-8 rounded border bg-gray-50 p-4">
                        <div class="text-center">
                            <Spinner size="md" color="text-green-600" />
                            <p class="mt-2 text-sm text-gray-600">Green</p>
                        </div>
                        <div class="text-center">
                            <Spinner size="md" color="text-red-600" />
                            <p class="mt-2 text-sm text-gray-600">Red</p>
                        </div>
                        <div class="text-center">
                            <Spinner size="md" color="text-purple-600" />
                            <p class="mt-2 text-sm text-gray-600">Purple</p>
                        </div>
                    </div>

                    <h4 class="mt-6 mb-4 text-lg font-semibold text-gray-800">With Text</h4>
                    <div class="rounded border bg-gray-50 p-4">
                        <div class="flex items-center justify-center space-x-3">
                            <Spinner size="sm" />
                            <span class="text-gray-700">Loading your data...</span>
                        </div>
                    </div>
                </div>

                <CodePreview :code="spinnerExamples" />

                <div class="mt-6">
                    <h4 class="mb-3 font-semibold text-gray-800">Spinner Props</h4>
                    <PropsTable :rows="spinnerProps" />
                </div>
            </div>
        </section>

        <section id="tooltips">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Tooltips</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Contextual help text that appears on hover or focus.</p>

                <div class="mb-6">
                    <div class="flex items-center justify-center space-x-8 rounded border bg-gray-50 p-8">
                        <Tooltip content="This tooltip appears on the bottom" side="bottom">
                            <button class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Bottom Tooltip</button>
                        </Tooltip>

                        <Tooltip content="This tooltip appears on the top" side="top">
                            <button class="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">Top Tooltip</button>
                        </Tooltip>

                        <Tooltip content="This tooltip appears on the left" side="left">
                            <button class="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600">Left Tooltip</button>
                        </Tooltip>

                        <Tooltip content="This tooltip appears on the right" side="right">
                            <button class="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">Right Tooltip</button>
                        </Tooltip>
                    </div>
                </div>

                <CodePreview :code="tooltipExamples" />

                <div class="mt-6">
                    <h4 class="mb-3 font-semibold text-gray-800">Tooltip Props</h4>
                    <PropsTable :rows="tooltipProps" />
                </div>
            </div>
        </section>

        <section id="stats">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Statistics Display</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
                    Clickable stat cards. Each item is selectable; clicking emits
                    <code class="rounded bg-gray-100 px-1">updateSearch</code> with the selected name (or null when the same stat is clicked again).
                    Selection state is read from a URL query parameter named by <code class="rounded bg-gray-100 px-1">statusName</code> (defaults to
                    <code class="rounded bg-gray-100 px-1">status</code>).
                </p>

                <div class="mb-6">
                    <Stats :stats="statsData" />
                </div>

                <CodePreview :code="statsExamples" />

                <div class="mt-6">
                    <h4 class="mb-3 font-semibold text-gray-800">Stats Props</h4>
                    <PropsTable :rows="statsProps" />
                </div>

                <div class="mt-4">
                    <h4 class="mb-3 font-semibold text-gray-800">Events</h4>
                    <PropsTable :rows="statsEvents" />
                </div>
            </div>
        </section>

        <section id="sections">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Sections</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Structured content sections with titles and optional action areas.</p>

                <div class="mb-6 space-y-6">
                    <Section header="User Profile">
                        <p class="text-gray-600">
                            This section contains user profile information and settings. You can edit your personal details, update your avatar, and
                            manage your account preferences.
                        </p>
                    </Section>

                    <Section header="Security Settings">
                        <template #headerButton>
                            <button class="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600">Change Password</button>
                        </template>
                        <p class="text-gray-600">
                            Manage your account security settings including password, two-factor authentication, and login sessions.
                        </p>
                    </Section>
                </div>

                <CodePreview :code="sectionExamples" />

                <div class="mt-6">
                    <h4 class="mb-3 font-semibold text-gray-800">Section Props</h4>
                    <PropsTable :rows="sectionProps" />
                </div>

                <div class="mt-4">
                    <h4 class="mb-3 font-semibold text-gray-800">Slots</h4>
                    <PropsTable :rows="sectionSlots" />
                </div>
            </div>
        </section>

        <section id="collapsible">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Collapsible Content</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Expandable content sections with smooth animations.</p>

                <div class="mb-6 space-y-4">
                    <div class="rounded-lg border border-gray-200 bg-white p-4">
                        <h4 class="mb-3 font-semibold text-gray-800">Frequently Asked Questions</h4>
                        <div class="space-y-4">
                            <div>
                                <h5 class="font-semibold text-gray-900">How do I reset my password?</h5>
                                <p class="text-gray-600">You can reset your password by clicking the "Forgot Password" link on the login page.</p>
                            </div>
                            <div>
                                <h5 class="font-semibold text-gray-900">Can I change my email address?</h5>
                                <p class="text-gray-600">Yes, you can update your email address in the account settings section.</p>
                            </div>
                        </div>
                    </div>

                    <Collapse :open="collapseOpen">
                        <template #trigger>
                            <button
                                @click="collapseOpen = !collapseOpen"
                                class="flex w-full items-center justify-between rounded-lg bg-gray-100 p-4 text-left hover:bg-gray-200"
                            >
                                <span class="font-semibold">Advanced Settings</span>
                                <FontAwesomeIcon :icon="faChevronDown" class="h-4 w-4 transition-transform" :class="{ 'rotate-180': collapseOpen }" />
                            </button>
                        </template>
                        <div class="rounded-b-lg border border-t-0 p-4">
                            <p class="mb-4 text-gray-600">
                                These are advanced configuration options that should only be modified by experienced users.
                            </p>
                            <div class="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <label class="block font-medium text-gray-700">API Timeout</label>
                                    <input type="number" class="mt-1 block w-full rounded border-gray-300" value="30" />
                                </div>
                                <div>
                                    <label class="block font-medium text-gray-700">Max Retries</label>
                                    <input type="number" class="mt-1 block w-full rounded border-gray-300" value="3" />
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>

                <div class="mt-6">
                    <h4 class="mb-3 font-semibold text-gray-800">Collapse Props</h4>
                    <PropsTable :rows="collapseProps" />
                </div>

                <div class="mt-4">
                    <h4 class="mb-3 font-semibold text-gray-800">Slots</h4>
                    <PropsTable :rows="collapseSlots" />
                </div>
            </div>
        </section>

        <section id="description-lists">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Description Lists</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Structured display of term-definition pairs for showing detailed information.</p>

                <div class="mb-6">
                    <DescriptionList>
                        <DescriptionListItem v-for="detail in userDetails" :key="detail.label" :label="detail.label" :value="detail.value" />
                    </DescriptionList>
                </div>

                <p class="text-sm text-gray-600">
                    See the <strong>Description List</strong> section under
                    <code class="rounded bg-gray-100 px-1">Input Components</code>
                    for the full prop table (including the editable variant).
                </p>
            </div>
        </section>

        <section id="pagination">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Pagination</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Navigation controls for paginated content and data tables.</p>

                <div class="mb-6 flex justify-center">
                    <Pagination :links="paginationLinks" :linkReturn="true" @change="handlePageChange" />
                </div>

                <div class="mb-6 text-center text-sm text-gray-600">Current page: {{ currentPage }} of 15</div>

                <CodePreview :code="paginationExamples" />

                <div class="mt-6">
                    <h4 class="mb-3 font-semibold text-gray-800">Pagination Props</h4>
                    <PropsTable :rows="paginationProps" />
                </div>

                <div class="mt-4">
                    <h4 class="mb-3 font-semibold text-gray-800">Events</h4>
                    <PropsTable :rows="paginationEvents" />
                </div>
            </div>
        </section>

        <section id="data-tiles">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">DataTile Component</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">The DataTile component is used to display statistical data with dynamic theming support.</p>
                <DataTile :value="123" label="Example Label" :icon="faChevronCircleDown" theme="success" />

                <div class="mt-4 mb-6">
                    <h4 class="mb-4 text-lg font-semibold text-gray-800">Usage</h4>
                    <CodePreview
                        :code="[
                            'import { faChartLine } from \'@fortawesome/free-solid-svg-icons\';',
                            '',
                            '<DataTile',
                            '    :value=\'123\'',
                            '    label=\'Example Label\'',
                            '    :icon=\'faChartLine\'',
                            '    theme=\'success\'',
                            '/>',
                        ]"
                    />
                </div>

                <div class="mt-6">
                    <h4 class="mb-3 font-semibold text-gray-800">DataTile Props</h4>
                    <PropsTable :rows="dataTileProps" />
                </div>
            </div>
        </section>
    </div>
</template>
