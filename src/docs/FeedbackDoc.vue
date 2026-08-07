<script setup lang="ts">
/**
 * Feedback - components that tell the user what just happened, what is
 * happening, or what isn't there yet.
 *
 * Alerts, spinners and tooltips were previously filed under "Utilities", and
 * UnderConstruction under "Buttons" because it renders one. They belong
 * together: each exists to communicate state rather than to collect input or
 * lay anything out.
 *
 * Toasts and snackbars are the transient members of this family and get their
 * own page - there is enough to say about placement, ordering and stacking that
 * they'd swamp everything else here.
 */
import { ref } from 'vue';
import { faTriangleExclamation, faCircleCheck, faGears } from '@fortawesome/free-solid-svg-icons';
import { NbIcon } from '../icons';
import { Alert, Spinner, Tooltip, UnderConstruction, CodePreview, PropsTable } from '../index';
import DocDemoCard from './HelperComponents/DocDemoCard.vue';
import DocCallout from './HelperComponents/DocCallout.vue';

const showAlert = ref(true);
const showSuccessAlert = ref(true);
const showErrorAlert = ref(true);
const showWarningAlert = ref(true);
const showInfoAlert = ref(true);

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


// Code examples for UnderConstruction component
const underConstructionExamples = [
    '<!-- Basic usage -->',
    '<UnderConstruction />',
    '',
    '<!-- Custom message -->',
    '<UnderConstruction info="Feature coming soon!\\nStay tuned for updates." />',
    '',
    '<!-- Full height (grows to fill container) -->',
    '<UnderConstruction full />',
    '',
    '<!-- Custom message with full height -->',
    '<UnderConstruction full info="Dashboard analytics\\nComing in Q2 2025" />',
];

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


const underConstructionProps = [
    { prop: 'full', type: 'boolean', default: 'false', description: 'When true, grows to fill its parent (use inside a sized container)' },
    {
        prop: 'info',
        type: 'string',
        default: "'Section under construction.\\nPlease come back later.'",
        description: 'Message to display under the heading; `\\n` becomes a line break',
    },
];
</script>

<template>
    <div class="space-y-12">
        <div>
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                Components that report state back to the user - inline messages, loading indicators, on-demand hints and placeholders for work that
                isn't built yet. For transient corner notifications see
                <span class="font-medium text-gray-700 dark:text-gray-300">Toasts &amp; Snackbars</span>.
            </p>
        </div>

        <section id="alerts">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Alerts</h3>
            <DocDemoCard>

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
            </DocDemoCard>
        </section>

        <section id="spinners">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Loading Spinners</h3>
            <DocDemoCard>

                <div class="mb-6">
                    <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Spinner Sizes</div>
                    <div class="flex items-center space-x-8 rounded border border-gray-200 bg-gray-50 dark:bg-gray-900/40 p-4">
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
                    <div class="flex items-center space-x-8 rounded border border-gray-200 bg-gray-50 dark:bg-gray-900/40 p-4">
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
                    <div class="rounded border border-gray-200 bg-gray-50 dark:bg-gray-900/40 p-4">
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
            </DocDemoCard>
        </section>

        <section id="tooltips">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Tooltips</h3>
            <DocDemoCard>

                <div class="mb-6">
                    <div class="flex items-center justify-center space-x-8 rounded border border-gray-200 bg-gray-50 dark:bg-gray-900/40 p-8">
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
            </DocDemoCard>
        </section>

        <section id="underconstruction">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Under Construction</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Placeholder component for sections still in development.
                </p>

                <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Basic Usage</div>
                <div class="mb-6 rounded border border-gray-200 bg-gray-50 dark:bg-gray-900/40 p-4">
                    <UnderConstruction />
                </div>

                <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Custom Message</div>
                <div class="mb-6 rounded border border-gray-200 bg-gray-50 dark:bg-gray-900/40 p-4">
                    <UnderConstruction info="Feature coming soon!&#10;Stay tuned for updates." />
                </div>

                <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Full Height Container</div>
                <!--
                    Taller than the component's natural height, so `full` has room to
                    stretch into and you can actually see it do something. The
                    previous 200px was shorter than the component itself, so the demo
                    overflowed onto the code block below instead.
                -->
                <div class="mb-6 flex rounded border border-gray-200 bg-gray-50 p-4 dark:bg-gray-900/40" style="height: 360px">
                    <UnderConstruction full info="Dashboard analytics&#10;Coming in Q2 2025" />
                </div>

                <CodePreview :code="underConstructionExamples" />

                <div class="mt-6">
                    <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">UnderConstruction Props</div>
                    <PropsTable :rows="underConstructionProps" />
                </div>
            </DocDemoCard>
        </section>
    </div>
</template>
