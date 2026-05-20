<script setup lang="ts">
import { ref, computed } from 'vue';
import {
    faChevronCircleDown,
    faChevronDown,
    faUsers,
    faChartLine,
    faTriangleExclamation,
    faCircleCheck,
    faGears,
} from '@fortawesome/free-solid-svg-icons';
import { NbIcon } from '../icons';
import {
    Alert,
    Spinner,
    Tooltip,
    Stats,
    Section,
    Collapse,
    Pagination,
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
    '<!-- Each stat is { name, value, label? } - clicking emits updateSearch -->',
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

// Props data - verified against actual components
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
    { prop: 'stats', type: 'StatItem[]', default: '-', description: 'Each item is `{ name, value, label? }` - `label` falls back to `name` for display', required: true },
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
    { prop: 'unstyled', type: 'boolean', default: 'false', description: 'Remove all default styling - useful when you want full control' },
];

const sectionSlots = [
    { prop: 'default', type: 'slot', default: '-', description: 'Body content (rendered inside the inner padded div)' },
    { prop: 'headerButton', type: 'slot', default: '-', description: 'Right-aligned slot in the header bar (only visible when `header` is set)' },
];

const collapseProps = [
    { prop: 'open', type: 'boolean', default: 'false', description: 'Initial open state (reactive - updating the prop opens/closes the section)' },
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
    { prop: 'logs', type: 'boolean', default: 'false', description: 'Convenience flag for paginating server-side logs - sets preserveScroll/preserveState and only=[\'logs\']' },
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
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Alerts</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Alert messages for success, error, warning, and info states. Show/hide is animated.
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
                <div class="mb-6 rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Interactive Animation Demo</div>
                    <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">Click the buttons to toggle each alert:</p>

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
                            This alert fades and slides in/out.
                        </Alert>

                        <Alert v-model="showErrorAlert" type="error" title="Animated Error" :dismissible="true">
                            Opacity, scale, and translate animate on enter and leave.
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
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Alert Props</div>
                    <PropsTable :rows="alertProps" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Events</div>
                    <PropsTable :rows="alertEvents" />
                </div>
            </div>
        </section>

        <section id="spinners">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Loading Spinners</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">Loading indicators for async operations and data fetching states.</p>

                <div class="mb-6">
                    <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Spinner Sizes</div>
                    <div class="flex items-center space-x-8 rounded border bg-gray-50 dark:bg-gray-900/40 p-4">
                        <div class="text-center">
                            <Spinner size="xs" />
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Extra Small</p>
                        </div>
                        <div class="text-center">
                            <Spinner size="sm" />
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Small</p>
                        </div>
                        <div class="text-center">
                            <Spinner size="md" />
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Medium (Default)</p>
                        </div>
                        <div class="text-center">
                            <Spinner size="lg" />
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Large</p>
                        </div>
                        <div class="text-center">
                            <Spinner size="xl" />
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Extra Large</p>
                        </div>
                    </div>

                    <div class="mt-6 mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">With Custom Colors</div>
                    <div class="flex items-center space-x-8 rounded border bg-gray-50 dark:bg-gray-900/40 p-4">
                        <div class="text-center">
                            <Spinner size="md" color="text-green-600" />
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Green</p>
                        </div>
                        <div class="text-center">
                            <Spinner size="md" color="text-red-600" />
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Red</p>
                        </div>
                        <div class="text-center">
                            <Spinner size="md" color="text-purple-600" />
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Purple</p>
                        </div>
                    </div>

                    <div class="mt-6 mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">With Text</div>
                    <div class="rounded border bg-gray-50 dark:bg-gray-900/40 p-4">
                        <div class="flex items-center justify-center space-x-3">
                            <Spinner size="sm" />
                            <span class="text-gray-700 dark:text-gray-200">Loading your data...</span>
                        </div>
                    </div>
                </div>

                <CodePreview :code="spinnerExamples" />

                <div class="mt-6">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Spinner Props</div>
                    <PropsTable :rows="spinnerProps" />
                </div>
            </div>
        </section>

        <section id="tooltips">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Tooltips</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">Contextual help text that appears on hover or focus.</p>

                <div class="mb-6">
                    <div class="flex items-center justify-center space-x-8 rounded border bg-gray-50 dark:bg-gray-900/40 p-8">
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
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Tooltip Props</div>
                    <PropsTable :rows="tooltipProps" />
                </div>
            </div>
        </section>

        <section id="stats">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Statistics Display</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Clickable stat cards. Each item is selectable; clicking emits
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">updateSearch</code> with the selected name (or null when the same stat is clicked again).
                    Selection state is read from a URL query parameter named by <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">statusName</code> (defaults to
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">status</code>).
                </p>

                <div class="mb-6">
                    <Stats :stats="statsData" />
                </div>

                <CodePreview :code="statsExamples" />

                <div class="mt-6">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Stats Props</div>
                    <PropsTable :rows="statsProps" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Events</div>
                    <PropsTable :rows="statsEvents" />
                </div>
            </div>
        </section>

        <section id="sections">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Sections</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">Structured content sections with titles and optional action areas.</p>

                <div class="mb-6 space-y-6">
                    <Section header="User Profile">
                        <p class="text-gray-600 dark:text-gray-400">
                            This section contains user profile information and settings. You can edit your personal details, update your avatar, and
                            manage your account preferences.
                        </p>
                    </Section>

                    <Section header="Security Settings">
                        <template #headerButton>
                            <button class="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600">Change Password</button>
                        </template>
                        <p class="text-gray-600 dark:text-gray-400">
                            Manage your account security settings including password, two-factor authentication, and login sessions.
                        </p>
                    </Section>
                </div>

                <CodePreview :code="sectionExamples" />

                <div class="mt-6">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Section Props</div>
                    <PropsTable :rows="sectionProps" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Slots</div>
                    <PropsTable :rows="sectionSlots" />
                </div>
            </div>
        </section>

        <section id="collapsible">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Collapse</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-3 text-gray-600 dark:text-gray-400">
                    Low-level open/close container. By default it renders a <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">SecondaryButton</code> as the
                    trigger (labels come from the <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">button</code> prop); pass a
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">#trigger</code> slot to override.
                </p>

                <!-- Family comparison: there are three "collapsible" components and they get confused -->
                <div class="mb-6 rounded-lg border border-blue-200 bg-blue-50/50 p-4 text-sm text-blue-900">
                    <strong>Picking the right one:</strong>
                    <ul class="mt-2 list-inside list-disc space-y-1">
                        <li><strong>Collapse</strong> - minimal show/hide for inline disclosure (this section).</li>
                        <li>
                            <strong>CollapsableSection</strong> - styled card with a header bar; use for sectioning content into expandable groups.
                            See <em>Layout Components → Collapsable Sections</em>.
                        </li>
                        <li>
                            <strong>NavCollapse</strong> - expandable group inside a navigation list (renders as an <code class="rounded bg-blue-100 px-1">&lt;li&gt;</code>).
                            See <em>Navigation Components → Collapsible Navigation</em>.
                        </li>
                    </ul>
                </div>

                <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Default trigger (`button` prop)</div>
                <Collapse class="mb-6">
                    <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-4">
                        <p class="text-gray-600 dark:text-gray-400">
                            Default trigger uses a SecondaryButton labelled by the <code class="rounded bg-white px-1">button</code> prop.
                            <br />
                            <span class="text-gray-500 dark:text-gray-400">Try the labels: pass <code class="rounded bg-white px-1">:button="['Details', 'Hide']"</code>.</span>
                        </p>
                    </div>
                </Collapse>

                <Collapse :button="['View advanced details', 'Hide advanced details']" class="mb-6">
                    <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-4">
                        <p class="text-gray-600 dark:text-gray-400">
                            Same Collapse, with custom button labels via <code class="rounded bg-white px-1">:button="['…', '…']"</code>.
                        </p>
                    </div>
                </Collapse>

                <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Custom trigger (#trigger slot)</div>
                <Collapse :open="collapseOpen" class="mb-6">
                    <template #trigger>
                        <button
                            @click="collapseOpen = !collapseOpen"
                            class="flex w-full items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-900/60 p-3 text-left transition-colors hover:bg-gray-200"
                        >
                            <span class="font-semibold">Advanced settings</span>
                            <NbIcon :name="faChevronDown" class="h-4 w-4 transition-transform" :class="{ 'rotate-180': collapseOpen }" />
                        </button>
                    </template>
                    <div class="mt-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-4">
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                            When you supply your own trigger, you also own the open state - toggle <code class="rounded bg-white px-1">collapseOpen</code>
                            yourself.
                        </p>
                        <div class="grid grid-cols-2 gap-3 text-sm">
                            <label class="block">
                                <span class="font-medium text-gray-700 dark:text-gray-200">API timeout</span>
                                <input type="number" class="mt-1 block w-full rounded border-gray-300" value="30" />
                            </label>
                            <label class="block">
                                <span class="font-medium text-gray-700 dark:text-gray-200">Max retries</span>
                                <input type="number" class="mt-1 block w-full rounded border-gray-300" value="3" />
                            </label>
                        </div>
                    </div>
                </Collapse>

                <CodePreview
                    :code="[
                        '&lt;!-- Auto trigger --&gt;',
                        '&lt;Collapse&gt;…body…&lt;/Collapse&gt;',
                        '',
                        '&lt;!-- Auto trigger with custom labels --&gt;',
                        '&lt;Collapse :button=&quot;[\'View advanced details\', \'Hide advanced details\']&quot;&gt;',
                        '  …body…',
                        '&lt;/Collapse&gt;',
                        '',
                        '&lt;!-- Custom trigger (you own the open state) --&gt;',
                        '&lt;Collapse :open=&quot;collapseOpen&quot;&gt;',
                        '  &lt;template #trigger&gt;',
                        '    &lt;button @click=&quot;collapseOpen = !collapseOpen&quot;&gt;Advanced settings&lt;/button&gt;',
                        '  &lt;/template&gt;',
                        '  …body…',
                        '&lt;/Collapse&gt;',
                    ]"
                />

                <div class="mt-6">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Collapse Props</div>
                    <PropsTable :rows="collapseProps" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Slots</div>
                    <PropsTable :rows="collapseSlots" />
                </div>
            </div>
        </section>

        <section id="pagination">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Pagination</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">Navigation controls for paginated content and data tables.</p>

                <div class="mb-6 flex justify-center">
                    <Pagination :links="paginationLinks" :linkReturn="true" @change="handlePageChange" />
                </div>

                <div class="mb-6 text-center text-sm text-gray-600 dark:text-gray-400">Current page: {{ currentPage }} of 15</div>

                <CodePreview :code="paginationExamples" />

                <div class="mt-6">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Pagination Props</div>
                    <PropsTable :rows="paginationProps" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Events</div>
                    <PropsTable :rows="paginationEvents" />
                </div>
            </div>
        </section>

        <section id="data-tiles">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">DataTile</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-2 text-gray-600 dark:text-gray-400">
                    A themed single-statistic tile with a large value, a label, and a FontAwesome watermark icon. Like
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">Stats</code> but for one number you've computed yourself - drop several into a grid for
                    a dashboard layout.
                </p>
                <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
                    The tile fills its container by default; render multiple inside a CSS grid for the dashboard look.
                </p>

                <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Themed grid</div>
                <div class="mb-6 grid gap-4" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))">
                    <DataTile :value="1284" label="Active users" :icon="faUsers" theme="primary" />
                    <DataTile :value="'£45,678'" label="Revenue (MTD)" :icon="faChartLine" theme="success" />
                    <DataTile :value="32" label="Failed jobs" :icon="faTriangleExclamation" theme="warning" />
                    <DataTile :value="'4.8 / 5'" label="Customer rating" :icon="faCircleCheck" theme="success" />
                </div>

                <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Selected state</div>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    Set <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">selected</code> when the tile represents a currently-active filter or selection.
                </p>
                <div class="mb-6 grid gap-4" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))">
                    <DataTile :value="7" label="Pending reviews" :icon="faGears" theme="primary" />
                    <DataTile :value="3" label="Pending reviews" :icon="faGears" theme="primary" selected />
                    <DataTile :value="2" label="Pending reviews" :icon="faGears" theme="danger" />
                </div>

                <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Standalone</div>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    A single tile fills the available width - wrap it in a sized container if you don't want it stretching across the page.
                </p>
                <div class="mb-6 max-w-xs">
                    <DataTile :value="123" label="Example label" :icon="faChevronCircleDown" theme="success" />
                </div>

                <CodePreview
                    :code="[
                        'import { faUsers, faChartLine } from \'@fortawesome/free-solid-svg-icons\';',
                        '',
                        '&lt;!-- Drop several into a CSS grid for the dashboard look --&gt;',
                        '&lt;div class=&quot;grid gap-4&quot; style=&quot;grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))&quot;&gt;',
                        '  &lt;DataTile :value=&quot;1284&quot; label=&quot;Active users&quot; :icon=&quot;faUsers&quot; theme=&quot;primary&quot; /&gt;',
                        '  &lt;DataTile :value=&quot;\'£45,678\'&quot; label=&quot;Revenue (MTD)&quot; :icon=&quot;faChartLine&quot; theme=&quot;success&quot; /&gt;',
                        '&lt;/div&gt;',
                        '',
                        '&lt;!-- selected adds a ring outline to indicate the active tile --&gt;',
                        '&lt;DataTile :value=&quot;3&quot; label=&quot;Pending reviews&quot; :icon=&quot;faGears&quot; theme=&quot;primary&quot; selected /&gt;',
                    ]"
                />

                <div class="mt-6">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">DataTile Props</div>
                    <PropsTable :rows="dataTileProps" />
                </div>
            </div>
        </section>
    </div>
</template>
