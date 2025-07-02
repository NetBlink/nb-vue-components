<script setup lang="ts">
import { ref, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
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
    { term: 'Full Name', description: 'John Doe' },
    { term: 'Email', description: 'john.doe@example.com' },
    { term: 'Role', description: 'Administrator' },
    { term: 'Department', description: 'Engineering' },
    { term: 'Location', description: 'San Francisco, CA' },
    { term: 'Joined', description: 'March 15, 2023' },
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
    '<!-- Positioned Tooltip -->',
    '<Tooltip content="Tooltip on top" position="top">',
    '  <button class="bg-blue-500 text-white px-4 py-2 rounded">Top</button>',
    '</Tooltip>',
];

const statsExamples = [
    '<!-- Stats Grid -->',
    '<Stats :data="statsData" />',
    '',
    '<!-- Custom Stats Layout -->',
    '<div class="grid grid-cols-1 md:grid-cols-4 gap-6">',
    '  <div v-for="stat in statsData" :key="stat.label" class="bg-white p-6 rounded-lg shadow">',
    '    <h3 class="text-lg font-semibold">{{ stat.label }}</h3>',
    '    <p class="text-2xl font-bold">{{ stat.value }}</p>',
    "    <p :class=\"stat.positive ? 'text-green-600' : 'text-red-600'\">{{ stat.change }}</p>",
    '  </div>',
    '</div>',
];

const sectionExamples = [
    '<!-- Basic Section -->',
    '<Section title="User Settings">',
    '  <p>Section content goes here...</p>',
    '</Section>',
    '',
    '<!-- Section with Actions -->',
    '<Section title="Account Information">',
    '  <template #actions>',
    '    <PrimaryButton>Edit</PrimaryButton>',
    '  </template>',
    '  <p>Account details and information.</p>',
    '</Section>',
];

const paginationExamples = [
    '<!-- Basic Pagination with links -->',
    '<Pagination',
    '  :links="paginationLinks"',
    '  :linkReturn="true"',
    '  @change="handlePageChange"',
    '/>',
    '',
    '<!-- Pagination with per-page selector -->',
    '<Pagination',
    '  :links="paginationLinks"',
    '  :showPerPage="true"',
    '  :defaultPerPage="25"',
    '/>',
];

// Props data
const alertProps = [
    { prop: 'type', type: 'string', default: "'info'", description: 'Alert type: success, error, warning, info' },
    { prop: 'title', type: 'string', default: '-', description: 'Alert title/heading' },
    { prop: 'dismissible', type: 'boolean', default: 'false', description: 'Show dismiss button' },
    { prop: 'modelValue', type: 'boolean', default: 'true', description: 'Control alert visibility (v-model)' },
    { prop: '@update:modelValue', type: 'event', default: '-', description: 'Emitted when visibility changes' },
    { prop: '@dismiss', type: 'event', default: '-', description: 'Emitted when alert is dismissed' },
];

const spinnerProps = [
    { prop: 'size', type: 'string', default: "'md'", description: 'Spinner size: xs, sm, md, lg, xl' },
    { prop: 'color', type: 'string', default: "'text-primary'", description: 'Custom color class (e.g., text-red-600)' },
];

const tooltipProps = [
    { prop: 'content', type: 'string', default: '-', description: 'Tooltip text content' },
    { prop: 'position', type: 'string', default: "'bottom'", description: 'Tooltip position: top, bottom, left, right' },
    { prop: 'delay', type: 'number', default: '0', description: 'Show delay in milliseconds' },
];

const statsProps = [
    { prop: 'data', type: 'array', default: '[]', description: 'Array of stat objects with label, value, change properties' },
    { prop: 'columns', type: 'number', default: '4', description: 'Number of columns in grid layout' },
];

const paginationProps = [
    { prop: 'currentPage', type: 'number', default: '1', description: 'Current active page' },
    { prop: 'totalPages', type: 'number', default: '1', description: 'Total number of pages' },
    { prop: 'showFirstLast', type: 'boolean', default: 'true', description: 'Show first/last page buttons' },
    { prop: 'maxVisible', type: 'number', default: '5', description: 'Maximum visible page numbers' },
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
                        <Tooltip content="This tooltip appears on the bottom" position="bottom">
                            <button class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Bottom Tooltip</button>
                        </Tooltip>

                        <Tooltip content="This tooltip appears on the top" position="top">
                            <button class="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">Top Tooltip</button>
                        </Tooltip>

                        <Tooltip content="This tooltip appears on the left" position="left">
                            <button class="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600">Left Tooltip</button>
                        </Tooltip>

                        <Tooltip content="This tooltip appears on the right" position="right">
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
                <p class="mb-4 text-gray-600">Dashboard-style statistics cards with values and change indicators.</p>

                <div class="mb-6">
                    <Stats :stats="statsData" />
                </div>

                <CodePreview :code="statsExamples" />

                <div class="mt-6">
                    <h4 class="mb-3 font-semibold text-gray-800">Stats Props</h4>
                    <PropsTable :rows="statsProps" />
                </div>
            </div>
        </section>

        <section id="sections">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Sections</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Structured content sections with titles and optional action areas.</p>

                <div class="mb-6 space-y-6">
                    <Section title="User Profile">
                        <p class="text-gray-600">
                            This section contains user profile information and settings. You can edit your personal details, update your avatar, and
                            manage your account preferences.
                        </p>
                    </Section>

                    <Section title="Security Settings">
                        <template #actions>
                            <button class="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600">Change Password</button>
                        </template>
                        <p class="text-gray-600">
                            Manage your account security settings including password, two-factor authentication, and login sessions.
                        </p>
                    </Section>
                </div>

                <CodePreview :code="sectionExamples" />
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
            </div>
        </section>

        <section id="description-lists">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Description Lists</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Structured display of term-definition pairs for showing detailed information.</p>

                <div class="mb-6">
                    <DescriptionList>
                        <DescriptionListItem v-for="detail in userDetails" :key="detail.term" :term="detail.term" :description="detail.description" />
                    </DescriptionList>
                </div>
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
            </div>
        </section>
    </div>
</template>
