<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import {
    H2,
    Button,
    PrimaryButton,
    SecondaryButton,
    DangerButton,
    WarningButton,
    InfoButton,
    SuccessButton,
    LinkButton,
    SubmitButton,
    CodePreview,
    CollapsableSection,
    UnderConstruction,
    PropsTable,
} from '../index';

// Code examples for LinkButton themes
const linkButtonExamples = [
    '<!-- Theme-based usage (recommended) -->',
    '<LinkButton href="/dashboard" theme="primary">Dashboard</LinkButton>',
    '<LinkButton href="/profile" theme="secondary">Profile</LinkButton>',
    '<LinkButton href="/settings" theme="info">Settings</LinkButton>',
    '',
    '<!-- Available themes match button themes -->',
    '<LinkButton href="/success" theme="success">Success</LinkButton>',
    '<LinkButton href="/warning" theme="warning">Warning</LinkButton>',
    '<LinkButton href="/danger" theme="danger">Danger</LinkButton>',
    '',
    '<!-- Disabled state -->',
    '<LinkButton href="/disabled" theme="danger" disabled>Disabled</LinkButton>',
    '',
    '<!-- Legacy colourClasses (still supported) -->',
    '<LinkButton href="/custom" :colourClasses="[\'bg-purple-600\', \'text-white\']">Custom</LinkButton>',
    '',
    '<!-- With Inertia method and data -->',
    '<LinkButton href="/logout" method="post" theme="danger">Logout</LinkButton>',
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

const buttonExamples = [
    '<!-- Standard Buttons -->',
    '<PrimaryButton>Primary Action</PrimaryButton>',
    '<SecondaryButton>Secondary Action</SecondaryButton>',
    '<DangerButton>Delete</DangerButton>',
    '<WarningButton>Warning</WarningButton>',
    '<InfoButton>Information</InfoButton>',
    '<SuccessButton>Success</SuccessButton>',
    '',
    '<!-- Disabled Buttons -->',
    '<PrimaryButton disabled>Disabled</PrimaryButton>',
    '',
    '<!-- Submit Button -->',
    '<SubmitButton :processing="form.processing">Save Changes</SubmitButton>',
];

// Props data
const linkButtonProps = ref([
    { prop: 'href', type: 'string', default: '-', description: 'The URL to navigate to' },
    { prop: 'theme', type: 'ComponentTheme', default: "'primary'", description: 'Theme: primary, secondary, success, danger, warning, info' },
    { prop: 'colourClasses', type: 'string[]', default: '-', description: 'Custom CSS classes (legacy, overrides theme)' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the button' },
    { prop: 'target', type: 'string', default: "'_self'", description: 'Link target attribute' },
    { prop: 'method', type: 'string', default: '-', description: 'HTTP method for Inertia requests' },
    { prop: 'data', type: 'object', default: '-', description: 'Data to send with Inertia requests' },
]);

const buttonProps = ref([
    { prop: 'type', type: 'string', default: "'button'", description: 'Button type: button, submit, reset' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the button' },
    { prop: 'processing', type: 'boolean', default: 'false', description: 'Show loading state (for SubmitButton)' },
]);

const underConstructionProps = ref([
    { prop: 'full', type: 'boolean', default: 'false', description: 'Whether to take full height (grows to fill container)' },
    {
        prop: 'info',
        type: 'string',
        default: "'Section under construction.\\nPlease come back later.'",
        description: 'Custom message to display (supports line breaks with \\n)',
    },
]);
</script>

<template>
    <div class="space-y-12">
        <section id="standard-buttons">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Standard Buttons</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">A collection of styled button components for different actions and contexts.</p>

                <h4 class="mb-4 text-lg font-semibold text-gray-800">Button Variants</h4>
                <div class="mb-6 flex flex-wrap items-center gap-3">
                    <PrimaryButton>Primary</PrimaryButton>
                    <SecondaryButton>Secondary</SecondaryButton>
                    <SuccessButton>Success</SuccessButton>
                    <DangerButton>Danger</DangerButton>
                    <WarningButton>Warning</WarningButton>
                    <InfoButton>Info</InfoButton>
                </div>

                <h4 class="mb-4 text-lg font-semibold text-gray-800">Disabled States</h4>
                <div class="mb-6 flex flex-wrap items-center gap-3">
                    <PrimaryButton disabled>Primary Disabled</PrimaryButton>
                    <SecondaryButton disabled>Secondary Disabled</SecondaryButton>
                    <DangerButton disabled>Danger Disabled</DangerButton>
                </div>

                <CodePreview :code="buttonExamples" />

                <div class="mt-6">
                    <h4 class="mb-4 text-lg font-semibold text-gray-800">Button Props</h4>
                    <PropsTable :rows="buttonProps" />
                </div>
            </div>
        </section>

        <section id="linkbutton">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">LinkButton with Themes</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">LinkButton component now supports predefined themes for consistent styling across your application.</p>

                <h4 class="mb-4 text-lg font-semibold text-gray-800">Theme Examples</h4>
                <div class="mb-6 flex flex-wrap items-center gap-3">
                    <LinkButton href="#" theme="primary">Primary</LinkButton>
                    <LinkButton href="#" theme="secondary">Secondary</LinkButton>
                    <LinkButton href="#" theme="success">Success</LinkButton>
                    <LinkButton href="#" theme="danger">Danger</LinkButton>
                    <LinkButton href="#" theme="warning">Warning</LinkButton>
                    <LinkButton href="#" theme="info">Info</LinkButton>
                </div>

                <h4 class="mb-4 text-lg font-semibold text-gray-800">Disabled States</h4>
                <div class="mb-6 flex flex-wrap items-center gap-3">
                    <LinkButton href="#" theme="primary" disabled>Primary Disabled</LinkButton>
                    <LinkButton href="#" theme="success" disabled>Success Disabled</LinkButton>
                    <LinkButton href="#" theme="danger" disabled>Danger Disabled</LinkButton>
                </div>

                <CodePreview :code="linkButtonExamples" />

                <div class="mt-6">
                    <h4 class="mb-4 text-lg font-semibold text-gray-800">LinkButton Props & Themes</h4>
                    <PropsTable :rows="linkButtonProps" />
                </div>
            </div>
        </section>

        <section id="underconstruction">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">UnderConstruction Component</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
                    A utility component to display placeholders for sections that are still being developed. Perfect for work-in-progress areas of
                    your application.
                </p>

                <h4 class="mb-4 text-lg font-semibold text-gray-800">Basic Usage</h4>
                <div class="mb-6 rounded border bg-gray-50 p-4">
                    <UnderConstruction />
                </div>

                <h4 class="mb-4 text-lg font-semibold text-gray-800">Custom Message</h4>
                <div class="mb-6 rounded border bg-gray-50 p-4">
                    <UnderConstruction info="Feature coming soon!&#10;Stay tuned for updates." />
                </div>

                <h4 class="mb-4 text-lg font-semibold text-gray-800">Full Height Container</h4>
                <div class="mb-6 rounded border bg-gray-50 p-4" style="height: 200px">
                    <UnderConstruction full info="Dashboard analytics&#10;Coming in Q2 2025" />
                </div>

                <CodePreview :code="underConstructionExamples" />

                <div class="mt-6">
                    <h4 class="mb-4 text-lg font-semibold text-gray-800">UnderConstruction Props</h4>
                    <PropsTable :rows="underConstructionProps" />
                </div>
            </div>
        </section>
    </div>
</template>
