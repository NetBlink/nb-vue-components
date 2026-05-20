<script setup lang="ts">
import {
    PrimaryButton,
    SecondaryButton,
    DangerButton,
    WarningButton,
    InfoButton,
    SuccessButton,
    LinkButton,
    SubmitButton,
    CodePreview,
    UnderConstruction,
    PropsTable,
} from '../index';
import DocDemoCard from './HelperComponents/DocDemoCard.vue';

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
    '<!-- Sizes -->',
    '<PrimaryButton size="xs">Extra small</PrimaryButton>',
    '<PrimaryButton size="lg">Large</PrimaryButton>',
    '',
    '<!-- Disabled -->',
    '<PrimaryButton disabled>Disabled</PrimaryButton>',
];

const submitButtonExamples = [
    '<!-- Pass the Inertia form: the spinner auto-shows during form.processing -->',
    '<SubmitButton :form="form">Save Changes</SubmitButton>',
    '',
    '<!-- Or drive the spinner manually -->',
    '<SubmitButton :loading="isSaving">Save Changes</SubmitButton>',
    '',
    '<!-- Theme + size like any other button -->',
    '<SubmitButton :form="form" theme="danger" size="lg">Delete account</SubmitButton>',
];

// Props data
const linkButtonProps = [
    { prop: 'href', type: 'string', default: '-', description: 'URL the link points to (renders as `<a>`, or as Inertia `<Link>` when method or data is set)' },
    { prop: 'theme', type: 'ComponentTheme', default: "'primary'", description: 'primary | secondary | success | danger | warning | info | no-style' },
    { prop: 'colourClasses', type: 'string[]', default: 'undefined', description: 'Legacy escape hatch - when set, replaces theme styling entirely' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the link (prevents click and removes tab focus)' },
    { prop: 'target', type: 'string', default: "'_self'", description: 'Anchor target attribute (ignored when rendering as Inertia Link)' },
    { prop: 'method', type: 'string', default: '-', description: 'HTTP method for Inertia requests (get, post, put, patch, delete)' },
    { prop: 'data', type: 'Record<string, any>', default: '-', description: 'Body data sent with the Inertia request' },
];

const buttonProps = [
    { prop: 'type', type: "'button' | 'submit' | 'reset'", default: "'submit'", description: 'HTML button type attribute' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the button' },
    { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", default: "'md'", description: 'Button size' },
    { prop: 'customButtonClass', type: 'string', default: "''", description: 'Extra classes applied to the underlying <button> element' },
];

const submitButtonProps = [
    { prop: 'form', type: 'InertiaForm', default: '-', description: 'Inertia form - the spinner auto-shows while `form.processing` is true', highlight: true },
    { prop: 'loading', type: 'boolean', default: 'false', description: 'Manual loading state; takes effect even without a form', highlight: true },
    { prop: 'theme', type: 'ComponentTheme', default: "'primary'", description: 'primary | secondary | success | danger | warning | info | no-style' },
    { prop: 'type', type: "'button' | 'submit' | 'reset'", default: "'submit'", description: 'HTML button type attribute' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the button (also disabled while form is processing / loading)' },
    { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", default: "'md'", description: 'Button size' },
    { prop: 'customButtonClass', type: 'string', default: "''", description: 'Extra classes applied to the underlying <button> element' },
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
    <div class="space-y-10">
        <header class="space-y-3">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Button Components</h1>
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                Every variant below (<code>PrimaryButton</code>, <code>SecondaryButton</code>, <code>SuccessButton</code>,
                <code>WarningButton</code>, <code>DangerButton</code>, <code>InfoButton</code>) shares the implementation in
                <code>Button.vue</code>. The named exports are the supported way to consume them; the base is internal.
            </p>
        </header>

        <section id="standard-buttons">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Standard Buttons</h3>
            <DocDemoCard>

                <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Button Variants</div>
                <div class="mb-6 flex flex-wrap items-center gap-3">
                    <PrimaryButton>Primary</PrimaryButton>
                    <SecondaryButton>Secondary</SecondaryButton>
                    <SuccessButton>Success</SuccessButton>
                    <DangerButton>Danger</DangerButton>
                    <WarningButton>Warning</WarningButton>
                    <InfoButton>Info</InfoButton>
                </div>

                <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Disabled States</div>
                <div class="mb-6 flex flex-wrap items-center gap-3">
                    <PrimaryButton disabled>Primary Disabled</PrimaryButton>
                    <SecondaryButton disabled>Secondary Disabled</SecondaryButton>
                    <DangerButton disabled>Danger Disabled</DangerButton>
                </div>

                <CodePreview :code="buttonExamples" />

                <div class="mt-6">
                    <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Button Props</div>
                    <PropsTable :rows="buttonProps" />
                </div>
            </DocDemoCard>
        </section>

        <section id="submitbutton">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">SubmitButton</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    A themed button that shows a spinner while an Inertia form is processing. Pass <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">:form</code>
                    for automatic state, or <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">:loading</code> for manual control.
                </p>

                <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Idle / Loading</div>
                <div class="mb-6 flex flex-wrap items-center gap-3">
                    <SubmitButton>Save Changes</SubmitButton>
                    <SubmitButton loading>Saving…</SubmitButton>
                    <SubmitButton theme="danger" loading>Deleting…</SubmitButton>
                </div>

                <CodePreview :code="submitButtonExamples" />

                <div class="mt-6">
                    <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">SubmitButton Props</div>
                    <PropsTable :rows="submitButtonProps" />
                </div>
            </DocDemoCard>
        </section>

        <section id="linkbutton">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">LinkButton with Themes</h3>
            <DocDemoCard>

                <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Theme Examples</div>
                <div class="mb-6 flex flex-wrap items-center gap-3">
                    <LinkButton href="#" theme="primary">Primary</LinkButton>
                    <LinkButton href="#" theme="secondary">Secondary</LinkButton>
                    <LinkButton href="#" theme="success">Success</LinkButton>
                    <LinkButton href="#" theme="danger">Danger</LinkButton>
                    <LinkButton href="#" theme="warning">Warning</LinkButton>
                    <LinkButton href="#" theme="info">Info</LinkButton>
                </div>

                <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Disabled States</div>
                <div class="mb-6 flex flex-wrap items-center gap-3">
                    <LinkButton href="#" theme="primary" disabled>Primary Disabled</LinkButton>
                    <LinkButton href="#" theme="success" disabled>Success Disabled</LinkButton>
                    <LinkButton href="#" theme="danger" disabled>Danger Disabled</LinkButton>
                </div>

                <CodePreview :code="linkButtonExamples" />

                <div class="mt-6">
                    <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">LinkButton Props & Themes</div>
                    <PropsTable :rows="linkButtonProps" />
                </div>
            </DocDemoCard>
        </section>

        <section id="underconstruction">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">UnderConstruction Component</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Placeholder component for sections still in development.
                </p>

                <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Basic Usage</div>
                <div class="mb-6 rounded border bg-gray-50 dark:bg-gray-900/40 p-4">
                    <UnderConstruction />
                </div>

                <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Custom Message</div>
                <div class="mb-6 rounded border bg-gray-50 dark:bg-gray-900/40 p-4">
                    <UnderConstruction info="Feature coming soon!&#10;Stay tuned for updates." />
                </div>

                <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Full Height Container</div>
                <div class="mb-6 rounded border bg-gray-50 dark:bg-gray-900/40 p-4" style="height: 200px">
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
