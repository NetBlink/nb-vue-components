<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';

// Import main components
import Navigation from './Navigation.vue';

// Import all necessary components
import {
    H2,
    Input,
    Checkbox,
    Textarea,
    RadioButton,
    PrimaryButton,
    SecondaryButton,
    DangerButton,
    WarningButton,
    SuccessButton,
    InfoButton,
    Alert,
    Modal,
    NewModal,
    Spinner,
    CollapsableSection,
    CodePreview,
    Stats,
    Tooltip,
    Section,
    Select,
    RichSelect,
    Switch,
} from './index';

// Import mock data
import { mockUsers, mockOrders, mockStats } from './mockData';

// Mock form setup
const form = useForm({
    name: 'John Doe',
    email: 'john@example.com',
    password: '',
    password_confirmation: '',
    disabled_field: 'This field is disabled',
    with_addon: 'username',
    terms: false as boolean,
    newsletter: true as boolean,
    note: 'This is a sample note...',
    description: 'A longer description that spans multiple lines and provides more detailed information about the topic.',
    choice: 'option2',
    country: 'us',
    languages: [],
    framework: '',
});

// Component state
const showModal = ref(false);
const showNewModal = ref(false);
const loading = ref(false);
const showAlertMessage = ref(false);

// Functions
const toggleLoading = () => {
    loading.value = !loading.value;
};

const showAlert = () => {
    showAlertMessage.value = true;
    setTimeout(() => {
        showAlertMessage.value = false;
    }, 3000);
};

// Mock data for selects
const countries = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
];

const languages = [
    { value: 'js', label: 'JavaScript', group: 'Frontend' },
    { value: 'ts', label: 'TypeScript', group: 'Frontend' },
    { value: 'vue', label: 'Vue.js', group: 'Frontend' },
    { value: 'react', label: 'React', group: 'Frontend' },
    { value: 'php', label: 'PHP', group: 'Backend' },
    { value: 'python', label: 'Python', group: 'Backend' },
    { value: 'node', label: 'Node.js', group: 'Backend' },
];

const frameworks = [
    { value: 'laravel', label: 'Laravel' },
    { value: 'symfony', label: 'Symfony' },
    { value: 'django', label: 'Django' },
    { value: 'rails', label: 'Ruby on Rails' },
    { value: 'express', label: 'Express.js' },
];

// Code examples
const inputExamples = [
    '<Input :form="form" field="name" />',
    '<Input :form="form" field="email" type="email" />',
    '<Input :form="form" field="password" type="password" />',
    '<Input :form="form" field="disabled_field" disabled />',
    '<Input :form="form" field="with_addon" addon="@" />',
];

const checkboxExamples = [
    '<Input type="checkbox" :form="form" field="terms" label="I agree to the terms" />',
    '<Checkbox :form="form" field="newsletter" label="Subscribe to newsletter" />',
    '<Checkbox v-model:checked="agreed" label="Standalone checkbox" />',
];

const textareaExamples = [
    '<Input type="textarea" :form="form" field="note" label="Note" :rows="4" />',
    '<Textarea :form="form" field="description" label="Description" :rows="6" />',
];

const switchExamples = [
    '<Input type="switch" :form="form" field="newsletter" label="Newsletter" />',
    '<Switch :form="form" field="terms" label="Accept Terms" required />',
    '<Switch v-model="notifications" label="Notifications" right-description="Enable notifications" />',
];

const radioExamples = [
    '<RadioButton :form="form" field="choice" value="option1" label="Option 1" />',
    '<RadioButton :form="form" field="choice" value="option2" label="Option 2" />',
];

const buttonExamples = [
    '<PrimaryButton>Save Changes</PrimaryButton>',
    '<PrimaryButton disabled>Disabled</PrimaryButton>',
    '<PrimaryButton :loading="loading">Save with Loading</PrimaryButton>',
];

const statusButtonExamples = [
    '<DangerButton>Delete</DangerButton>',
    '<WarningButton>Warning Action</WarningButton>',
    '<SuccessButton>Approve</SuccessButton>',
    '<InfoButton>More Info</InfoButton>',
];

const interactiveExamples = [
    '<PrimaryButton @click="toggleLoading">Toggle Loading</PrimaryButton>',
    '<PrimaryButton @click="showAlert">Show Alert</PrimaryButton>',
];

const alertExamples = ['<Alert type="success">Success message</Alert>', '<Alert type="danger">Error message</Alert>'];

const modalExamples = ['<Modal :show="showModal" @close="showModal = false">', '  <div class="p-4">Modal Content</div>', '</Modal>'];

const collapsibleExamples = ['<CollapsableSection title="Details">', '  <p>Collapsible content here</p>', '</CollapsableSection>'];

const spinnerExamples = ['<Spinner />', '<Spinner class="w-8 h-8 text-primary-600" />'];

// Select examples
const inputSelectExamples = [
    '<Input type="select" :form="form" field="country" label="Country">',
    '  <option value="">Select a country...</option>',
    '  <option value="us">United States</option>',
    '  <option value="ca">Canada</option>',
    '</Input>',
];

const selectExamples = [
    '<Select :form="form" field="country" :options="countries" label="Country" />',
    '<Select v-model="selectedValue" :options="options" placeholder="Choose..." />',
];

const richSelectExamples = [
    '<RichSelect :form="form" field="languages" :options="languages" multiple searchable />',
    '<RichSelect :options="frameworks" v-model="framework" searchable clearable />',
    '<RichSelect :options="apiOptions" apiSearch :apiUrl="/api/search" />',
];
</script>

<template>
    <Navigation>
        <main class="content-container h-fit w-full bg-white py-8 pl-64">
            <!-- Header -->
            <div class="mx-16 mb-12 text-center">
                <h1 class="mb-4 text-3xl font-bold text-gray-900">Vue Components Library</h1>
                <p class="mb-6 text-lg text-gray-600">Comprehensive documentation and interactive examples</p>
                <div class="flex items-center justify-center gap-6 text-sm">
                    <div class="flex items-center gap-2">
                        <div class="bg-primary h-3 w-3 rounded-full" />
                        <span class="text-gray-700">Primary Color</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="bg-accent h-3 w-3 rounded-full" />
                        <span class="text-gray-700">Accent Color</span>
                    </div>
                </div>
            </div>

            <!-- Input Components -->
            <div class="mx-16 mb-16">
                <H2 title="Input Components" />

                <!-- Basic Input -->
                <section class="mb-12">
                    <h3 id="input" class="mb-4 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-gray-800">Input Field</h3>
                    <div class="rounded-lg border border-gray-200 bg-white p-6">
                        <div class="mb-4 grid w-full grid-cols-3 gap-5">
                            <Input :form="form" field="name" />
                            <Input :form="form" field="email" type="email" />
                            <Input :form="form" field="password" type="password" />
                        </div>
                        <div class="mb-4 grid w-full grid-cols-2 gap-5">
                            <Input :form="form" field="disabled_field" disabled />
                            <Input :form="form" field="with_addon" addon="@" />
                        </div>

                        <!-- Code Example -->
                        <div class="mb-4">
                            <CodePreview :code="inputExamples" />
                        </div>

                        <!-- Props Documentation -->
                        <CollapsableSection header="Props & Parameters" class="mt-6">
                            <div class="rounded-lg bg-gray-50 p-4">
                                <div class="overflow-x-auto">
                                    <table class="w-full text-sm">
                                        <thead>
                                            <tr class="border-b border-gray-300">
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Prop</th>
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Type</th>
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200">
                                            <tr>
                                                <td class="px-3 py-2"><code class="text-primary-600 bg-primary-50 rounded px-2 py-1">:form</code></td>
                                                <td class="px-3 py-2 text-gray-600">Object</td>
                                                <td class="px-3 py-2">Inertia form object for data binding</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2"><code class="text-primary-600 bg-primary-50 rounded px-2 py-1">field</code></td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Field name in the form object</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2"><code class="text-primary-600 bg-primary-50 rounded px-2 py-1">type</code></td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Input type (text, email, password, etc.)</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2"><code class="text-primary-600 bg-primary-50 rounded px-2 py-1">label</code></td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Label text displayed above input</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">placeholder</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Placeholder text inside input</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">disabled</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">Boolean</td>
                                                <td class="px-3 py-2">Disables the input field</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">required</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">Boolean</td>
                                                <td class="px-3 py-2">Makes the field required</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2"><code class="text-primary-600 bg-primary-50 rounded px-2 py-1">addon</code></td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Text prefix/suffix for the input</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">autofocus</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">Boolean</td>
                                                <td class="px-3 py-2">Auto-focus the input on mount</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">tooltip</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Tooltip text shown next to label</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </CollapsableSection>
                    </div>
                </section>

                <!-- Checkbox -->
                <section class="mb-12">
                    <h3 id="checkbox" class="mb-4 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-gray-800">Checkbox</h3>
                    <div class="rounded-lg border border-gray-200 bg-white p-6">
                        <p class="mb-4 text-gray-600">
                            Two ways to use checkbox:
                            <code>&lt;Input type="checkbox"&gt;</code>
                            or
                            <code>&lt;Checkbox&gt;</code>
                            - both are API-compatible.
                        </p>

                        <div class="mb-4 space-y-4">
                            <Input type="checkbox" :form="form" field="terms" label="I agree to the terms (Input type)" />
                            <Checkbox :form="form" field="newsletter" label="Subscribe to newsletter (Checkbox)" />
                            <Checkbox :form="form" field="terms" label="Accept Terms" left-description="Disagree" right-description="Agree" />
                        </div>

                        <!-- Code Example -->
                        <div class="mb-4">
                            <CodePreview :code="checkboxExamples" />
                        </div>

                        <!-- Props Documentation -->
                        <CollapsableSection header="Checkbox Props & Parameters" class="mt-6">
                            <div class="rounded-lg bg-gray-50 p-4">
                                <div class="overflow-x-auto">
                                    <table class="w-full text-sm">
                                        <thead>
                                            <tr class="border-b border-gray-300">
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Prop</th>
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Type</th>
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200">
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">v-model:checked</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">Boolean | Array</td>
                                                <td class="px-3 py-2">Checked state binding - boolean for single, array for multiple</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2"><code class="text-primary-600 bg-primary-50 rounded px-2 py-1">value</code></td>
                                                <td class="px-3 py-2 text-gray-600">Any</td>
                                                <td class="px-3 py-2">Value when used in arrays/groups</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">customClass</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Additional CSS classes to apply</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </CollapsableSection>
                    </div>
                </section>

                <!-- Textarea -->
                <section class="mb-12">
                    <h3 id="textarea" class="mb-4 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-gray-800">Textarea</h3>
                    <div class="rounded-lg border border-gray-200 bg-white p-6">
                        <p class="mb-4 text-gray-600">
                            Two ways to use textarea:
                            <code>&lt;Input type="textarea"&gt;</code>
                            or
                            <code>&lt;Textarea&gt;</code>
                            - both are API-compatible.
                        </p>

                        <div class="mb-4 grid w-full grid-cols-2 gap-5">
                            <Input type="textarea" :form="form" field="note" label="Note (Input type)" :rows="4" />
                            <Textarea :form="form" field="description" label="Description (Textarea)" :rows="6" />
                        </div>

                        <!-- Code Example -->
                        <div class="mb-4">
                            <CodePreview :code="textareaExamples" />
                        </div>

                        <!-- Props Documentation -->
                        <CollapsableSection header="Textarea Props & Parameters" class="mt-6">
                            <div class="rounded-lg bg-gray-50 p-4">
                                <div class="overflow-x-auto">
                                    <table class="w-full text-sm">
                                        <thead>
                                            <tr class="border-b border-gray-300">
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Prop</th>
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Type</th>
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200">
                                            <tr>
                                                <td class="px-3 py-2"><code class="text-primary-600 bg-primary-50 rounded px-2 py-1">:form</code></td>
                                                <td class="px-3 py-2 text-gray-600">Object</td>
                                                <td class="px-3 py-2">Form object containing field values and errors</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2"><code class="text-primary-600 bg-primary-50 rounded px-2 py-1">field</code></td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Field name for form binding</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2"><code class="text-primary-600 bg-primary-50 rounded px-2 py-1">label</code></td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Label text displayed above textarea</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2"><code class="text-primary-600 bg-primary-50 rounded px-2 py-1">rows</code></td>
                                                <td class="px-3 py-2 text-gray-600">Number</td>
                                                <td class="px-3 py-2">Number of visible text rows (default: 3)</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">placeholder</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Placeholder text inside textarea</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">disabled</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">Boolean</td>
                                                <td class="px-3 py-2">Disables the textarea</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">required</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">Boolean</td>
                                                <td class="px-3 py-2">Makes the field required</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">autofocus</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">Boolean</td>
                                                <td class="px-3 py-2">Auto-focus the textarea on mount</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">v-model</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Direct value binding (alternative to form/field)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </CollapsableSection>
                    </div>
                </section>

                <!-- Radio Buttons -->
                <section class="mb-12">
                    <h3 id="radio" class="mb-4 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-gray-800">Radio Buttons</h3>
                    <div class="rounded-lg border border-gray-200 bg-white p-6">
                        <div class="mb-4 space-y-3">
                            <RadioButton :form="form" field="choice" value="option1" label="Option 1" />
                            <RadioButton :form="form" field="choice" value="option2" label="Option 2" />
                            <RadioButton :form="form" field="choice" value="option3" label="Option 3" />
                        </div>
                        <CodePreview :code="radioExamples" />
                    </div>
                </section>

                <!-- Switch -->
                <section class="mb-12">
                    <h3 id="switch" class="mb-4 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-gray-800">Switch</h3>
                    <div class="rounded-lg border border-gray-200 bg-white p-6">
                        <p class="mb-4 text-gray-600">
                            Two ways to use switch:
                            <code>&lt;Input type="switch"&gt;</code>
                            or
                            <code>&lt;Switch&gt;</code>
                            - both are API-compatible.
                        </p>

                        <div class="mb-4 space-y-4">
                            <Input type="switch" :form="form" field="newsletter" label="Newsletter Subscription (Input type)" />
                            <Switch :form="form" field="terms" label="Accept Terms & Conditions (Switch)" required />
                            <Switch :form="form" field="newsletter" label="Notifications" left-description="Disable" right-description="Enable" />
                        </div>

                        <!-- Code Example -->
                        <div class="mb-4">
                            <CodePreview :code="switchExamples" />
                        </div>

                        <!-- Props Documentation -->
                        <CollapsableSection header="Switch Props & Parameters" class="mt-6">
                            <div class="rounded-lg bg-gray-50 p-4">
                                <div class="overflow-x-auto">
                                    <table class="w-full text-sm">
                                        <thead>
                                            <tr class="border-b border-gray-300">
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Prop</th>
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Type</th>
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200">
                                            <tr>
                                                <td class="px-3 py-2"><code class="text-primary-600 bg-primary-50 rounded px-2 py-1">:form</code></td>
                                                <td class="px-3 py-2 text-gray-600">Object</td>
                                                <td class="px-3 py-2">Form object containing field values and errors</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2"><code class="text-primary-600 bg-primary-50 rounded px-2 py-1">field</code></td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Field name for form binding</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2"><code class="text-primary-600 bg-primary-50 rounded px-2 py-1">label</code></td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Label text displayed next to switch</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">leftDescription</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Text shown to the left of the switch</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">rightDescription</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Text shown to the right of the switch</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">required</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">Boolean</td>
                                                <td class="px-3 py-2">Makes the field required</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">disabled</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">Boolean</td>
                                                <td class="px-3 py-2">Disables the switch</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">v-model</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">Boolean</td>
                                                <td class="px-3 py-2">Direct value binding (alternative to form/field)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </CollapsableSection>
                    </div>
                </section>

                <!-- Select Components -->
                <section class="mb-12">
                    <h3 id="selects" class="mb-4 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-gray-800">Select Components</h3>

                    <!-- Input with type="select" (Slot-based) -->
                    <div class="mb-6 rounded-lg border border-gray-200 bg-white p-6">
                        <h4 class="text-md mb-4 font-medium text-gray-700">Input Select (Slot-based)</h4>
                        <p class="mb-4 text-sm text-gray-600">
                            Use
                            <code class="rounded bg-gray-100 px-2 py-1">type="select"</code>
                            with Input for slot-based options.
                        </p>
                        <div class="mb-4 grid w-full grid-cols-2 gap-5">
                            <Input type="select" :form="form" field="country" label="Country (Slot)">
                                <option value="">Select a country...</option>
                                <option value="us">United States</option>
                                <option value="ca">Canada</option>
                                <option value="uk">United Kingdom</option>
                                <option value="de">Germany</option>
                            </Input>
                            <Input type="select" :form="form" field="framework" label="Framework (Slot)">
                                <option value="">Choose a framework...</option>
                                <optgroup label="Frontend">
                                    <option value="vue">Vue.js</option>
                                    <option value="react">React</option>
                                </optgroup>
                                <optgroup label="Backend">
                                    <option value="laravel">Laravel</option>
                                    <option value="django">Django</option>
                                </optgroup>
                            </Input>
                        </div>
                        <CodePreview :code="inputSelectExamples" />
                    </div>

                    <!-- Simple Select (Array-based) -->
                    <div class="mb-6 rounded-lg border border-gray-200 bg-white p-6">
                        <h4 class="text-md mb-4 font-medium text-gray-700">Simple Select (Array-based)</h4>
                        <p class="mb-4 text-sm text-gray-600">
                            Use Select component with
                            <code class="rounded bg-gray-100 px-2 py-1">options</code>
                            array for simpler configuration.
                        </p>
                        <div class="mb-4 grid w-full grid-cols-2 gap-5">
                            <Select :form="form" field="country" :options="countries" label="Country (Array)" />
                            <Select
                                :form="form"
                                field="framework"
                                :options="frameworks"
                                label="Framework (Array)"
                                placeholder="Choose a framework..."
                            />
                        </div>

                        <!-- Code Example -->
                        <div class="mb-4">
                            <CodePreview :code="selectExamples" />
                        </div>

                        <!-- Props Documentation -->
                        <CollapsableSection header="Select Props & Parameters" class="mt-6">
                            <div class="overflow-x-auto">
                                <table class="min-w-full text-sm">
                                    <thead>
                                        <tr class="border-b border-gray-200">
                                            <th class="py-2 text-left font-semibold text-gray-700">Prop</th>
                                            <th class="py-2 text-left font-semibold text-gray-700">Type</th>
                                            <th class="py-2 text-left font-semibold text-gray-700">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody class="space-y-2">
                                        <tr class="border-b border-gray-100">
                                            <td class="py-2"><code class="text-primary-600">:form</code></td>
                                            <td class="py-2 text-gray-600">Object</td>
                                            <td class="py-2">Form object containing field values and errors</td>
                                        </tr>
                                        <tr class="border-b border-gray-100">
                                            <td class="py-2"><code class="text-primary-600">field</code></td>
                                            <td class="py-2 text-gray-600">String</td>
                                            <td class="py-2">Field name for form binding</td>
                                        </tr>
                                        <tr class="border-b border-gray-100">
                                            <td class="py-2"><code class="text-primary-600">:options</code></td>
                                            <td class="py-2 text-gray-600">Array</td>
                                            <td class="py-2">Array of {value, label, disabled?} objects or strings</td>
                                        </tr>
                                        <tr class="border-b border-gray-100">
                                            <td class="py-2"><code class="text-primary-600">label</code></td>
                                            <td class="py-2 text-gray-600">String</td>
                                            <td class="py-2">Label text displayed above select</td>
                                        </tr>
                                        <tr class="border-b border-gray-100">
                                            <td class="py-2"><code class="text-primary-600">placeholder</code></td>
                                            <td class="py-2 text-gray-600">String</td>
                                            <td class="py-2">Placeholder text for empty option</td>
                                        </tr>
                                        <tr class="border-b border-gray-100">
                                            <td class="py-2"><code class="text-primary-600">v-model</code></td>
                                            <td class="py-2 text-gray-600">Any</td>
                                            <td class="py-2">Direct value binding (alternative to form/field)</td>
                                        </tr>
                                        <tr class="border-b border-gray-100">
                                            <td class="py-2"><code class="text-primary-600">required</code></td>
                                            <td class="py-2 text-gray-600">Boolean</td>
                                            <td class="py-2">Makes the field required</td>
                                        </tr>
                                        <tr class="border-b border-gray-100">
                                            <td class="py-2"><code class="text-primary-600">disabled</code></td>
                                            <td class="py-2 text-gray-600">Boolean</td>
                                            <td class="py-2">Disables the select</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CollapsableSection>
                    </div>

                    <!-- Rich Select (Advanced Features) -->
                    <div class="rounded-lg border border-gray-200 bg-white p-6">
                        <h4 class="text-md mb-4 font-medium text-gray-700">Rich Select (Advanced Features)</h4>
                        <p class="mb-4 text-sm text-gray-600">
                            Use RichSelect for advanced features like search, multiple selection, API search, and grouping.
                        </p>
                        <div class="mb-4 space-y-4">
                            <div class="grid w-full grid-cols-2 gap-5">
                                <RichSelect :form="form" field="languages" :options="languages" label="Languages" multiple searchable grouping />
                                <RichSelect v-model="form.framework" :options="frameworks" label="Framework" searchable clearable />
                            </div>
                        </div>

                        <!-- Code Example -->
                        <div class="mb-4">
                            <CodePreview :code="richSelectExamples" />
                        </div>

                        <!-- Props Documentation -->
                        <CollapsableSection header="RichSelect Props & Parameters" class="mt-6">
                            <div class="overflow-x-auto">
                                <table class="min-w-full text-sm">
                                    <thead>
                                        <tr class="border-b border-gray-200">
                                            <th class="py-2 text-left font-semibold text-gray-700">Prop</th>
                                            <th class="py-2 text-left font-semibold text-gray-700">Type</th>
                                            <th class="py-2 text-left font-semibold text-gray-700">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody class="space-y-2">
                                        <tr class="border-b border-gray-100">
                                            <td class="py-2"><code class="text-primary-600">multiple</code></td>
                                            <td class="py-2 text-gray-600">Boolean</td>
                                            <td class="py-2">Enable multiple selection</td>
                                        </tr>
                                        <tr class="border-b border-gray-100">
                                            <td class="py-2"><code class="text-primary-600">searchable</code></td>
                                            <td class="py-2 text-gray-600">Boolean</td>
                                            <td class="py-2">Enable search functionality</td>
                                        </tr>
                                        <tr class="border-b border-gray-100">
                                            <td class="py-2"><code class="text-primary-600">apiSearch</code></td>
                                            <td class="py-2 text-gray-600">Boolean</td>
                                            <td class="py-2">Enable API-based search</td>
                                        </tr>
                                        <tr class="border-b border-gray-100">
                                            <td class="py-2"><code class="text-primary-600">apiUrl</code></td>
                                            <td class="py-2 text-gray-600">String</td>
                                            <td class="py-2">API endpoint for search</td>
                                        </tr>
                                        <tr class="border-b border-gray-100">
                                            <td class="py-2"><code class="text-primary-600">grouping</code></td>
                                            <td class="py-2 text-gray-600">Boolean</td>
                                            <td class="py-2">Enable option grouping</td>
                                        </tr>
                                        <tr class="border-b border-gray-100">
                                            <td class="py-2"><code class="text-primary-600">clearable</code></td>
                                            <td class="py-2 text-gray-600">Boolean</td>
                                            <td class="py-2">Allow clearing selection</td>
                                        </tr>
                                        <tr class="border-b border-gray-100">
                                            <td class="py-2"><code class="text-primary-600">optionValue</code></td>
                                            <td class="py-2 text-gray-600">String</td>
                                            <td class="py-2">Property name for option value (default: 'value')</td>
                                        </tr>
                                        <tr class="border-b border-gray-100">
                                            <td class="py-2"><code class="text-primary-600">optionLabel</code></td>
                                            <td class="py-2 text-gray-600">String</td>
                                            <td class="py-2">Property name for option label (default: 'label')</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CollapsableSection>
                    </div>
                </section>
            </div>

            <!-- Button Components -->
            <div class="mx-16 mb-16">
                <H2 title="Button Components" />

                <!-- Primary Buttons -->
                <section class="mb-12">
                    <h3 id="primary-buttons" class="mb-4 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-gray-800">Primary Buttons</h3>
                    <div class="rounded-lg border border-gray-200 bg-white p-6">
                        <div class="mb-6 flex flex-wrap gap-4">
                            <PrimaryButton>Save Changes</PrimaryButton>
                            <PrimaryButton disabled>Disabled</PrimaryButton>
                            <PrimaryButton :loading="loading">
                                {{ loading ? 'Saving...' : 'Save with Loading' }}
                            </PrimaryButton>
                        </div>

                        <!-- Code Example -->
                        <div class="mb-4">
                            <CodePreview :code="buttonExamples" />
                        </div>

                        <!-- Props Documentation -->
                        <CollapsableSection header="Button Props & Parameters" class="mt-6">
                            <div class="rounded-lg bg-gray-50 p-4">
                                <div class="overflow-x-auto">
                                    <table class="w-full text-sm">
                                        <thead>
                                            <tr class="border-b border-gray-300">
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Prop</th>
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Type</th>
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200">
                                            <tr>
                                                <td class="px-3 py-2"><code class="text-primary-600 bg-primary-50 rounded px-2 py-1">theme</code></td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">
                                                    Button theme: 'primary', 'secondary', 'danger', 'warning', 'success', 'info'
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2"><code class="text-primary-600 bg-primary-50 rounded px-2 py-1">type</code></td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Button type: 'button', 'submit', 'reset' (default: 'button')</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2"><code class="text-primary-600 bg-primary-50 rounded px-2 py-1">size</code></td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Button size: 'xs', 'sm', 'md', 'lg' (default: 'md')</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">disabled</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">Boolean</td>
                                                <td class="px-3 py-2">Disables the button and prevents clicks</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">loading</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">Boolean</td>
                                                <td class="px-3 py-2">Shows loading state (specific button types)</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">customClass</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Additional CSS classes to apply</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">@click</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">Event</td>
                                                <td class="px-3 py-2">Click event handler</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </CollapsableSection>
                    </div>
                </section>

                <!-- Status Buttons -->
                <section class="mb-12">
                    <h3 id="status-buttons" class="mb-4 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-gray-800">Status Buttons</h3>
                    <div class="rounded-lg border border-gray-200 bg-white p-6">
                        <div class="mb-6 flex flex-wrap gap-4">
                            <DangerButton>Delete</DangerButton>
                            <WarningButton>Warning Action</WarningButton>
                            <SuccessButton>Approve</SuccessButton>
                            <InfoButton>More Info</InfoButton>
                        </div>

                        <!-- Code Example -->
                        <div class="mb-4">
                            <CodePreview :code="statusButtonExamples" />
                        </div>

                        <!-- Props Documentation -->
                        <CollapsableSection header="Status Button Props & Parameters" class="mt-6">
                            <div class="rounded-lg bg-gray-50 p-4">
                                <div class="overflow-x-auto">
                                    <table class="w-full text-sm">
                                        <thead>
                                            <tr class="border-b border-gray-300">
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Prop</th>
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Type</th>
                                                <th class="px-3 py-2 text-left font-semibold text-gray-700">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200">
                                            <tr>
                                                <td class="px-3 py-2"><code class="text-primary-600 bg-primary-50 rounded px-2 py-1">type</code></td>
                                                <td class="px-3 py-2 text-gray-600">String</td>
                                                <td class="px-3 py-2">Button type: 'button', 'submit', 'reset' (default: 'button')</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">disabled</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">Boolean</td>
                                                <td class="px-3 py-2">Disables the button and prevents clicks</td>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-2">
                                                    <code class="text-primary-600 bg-primary-50 rounded px-2 py-1">@click</code>
                                                </td>
                                                <td class="px-3 py-2 text-gray-600">Event</td>
                                                <td class="px-3 py-2">Click event handler</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="mt-4 rounded border border-gray-200 bg-white p-3">
                                    <p class="mb-2 text-sm font-medium text-gray-600">Available Status Buttons:</p>
                                    <div class="space-y-1 text-xs">
                                        <div>
                                            <code class="text-danger-600 bg-danger-50 rounded px-2 py-1">&lt;DangerButton&gt;</code>
                                            - Red theme for destructive actions
                                        </div>
                                        <div>
                                            <code class="text-warning-600 bg-warning-50 rounded px-2 py-1">&lt;WarningButton&gt;</code>
                                            - Yellow theme for warning actions
                                        </div>
                                        <div>
                                            <code class="text-success-600 bg-success-50 rounded px-2 py-1">&lt;SuccessButton&gt;</code>
                                            - Green theme for positive actions
                                        </div>
                                        <div>
                                            <code class="text-info-600 bg-info-50 rounded px-2 py-1">&lt;InfoButton&gt;</code>
                                            - Blue theme for informational actions
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CollapsableSection>
                    </div>
                </section>

                <!-- Interactive Demo -->
                <section class="mb-12">
                    <h3 id="button-demo" class="mb-4 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-gray-800">Interactive Demo</h3>
                    <div class="rounded-lg border border-gray-200 bg-white p-6">
                        <div class="mb-6 space-y-4">
                            <div class="flex gap-4">
                                <PrimaryButton @click="toggleLoading">
                                    {{ loading ? 'Stop Loading' : 'Start Loading' }}
                                </PrimaryButton>
                                <SecondaryButton @click="showAlert">Show Alert</SecondaryButton>
                            </div>

                            <Alert v-if="showAlertMessage" type="success" class="mt-4">
                                Button clicked successfully! This alert will disappear in 3 seconds.
                            </Alert>
                        </div>
                        <CodePreview :code="interactiveExamples" />
                    </div>
                </section>
            </div>

            <!-- Layout Components -->
            <div class="mx-16 mb-16">
                <H2 title="Layout Components" />

                <!-- Alert -->
                <section class="mb-12">
                    <h3 id="alert" class="mb-4 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-gray-800">Alert</h3>
                    <div class="rounded-lg border border-gray-200 bg-white p-6">
                        <div class="mb-6 space-y-4">
                            <Alert type="success">This is a success alert with important information.</Alert>
                            <Alert type="warning">This is a warning alert to grab attention.</Alert>
                            <Alert type="error">This is an error alert for critical issues.</Alert>
                            <Alert type="info">This is an info alert for general information.</Alert>
                        </div>

                        <!-- Code Example -->
                        <div class="mb-4">
                            <CodePreview :code="alertExamples" />
                        </div>

                        <!-- Props Documentation -->
                        <CollapsableSection title="Alert Props & Parameters" class="mt-4">
                            <div class="space-y-3 text-sm">
                                <div class="grid grid-cols-3 gap-4 border-b pb-2 font-semibold text-gray-700">
                                    <span>Prop</span>
                                    <span>Type</span>
                                    <span>Description</span>
                                </div>
                                <div class="grid grid-cols-3 gap-4">
                                    <code class="text-primary-600">type</code>
                                    <span class="text-gray-600">String</span>
                                    <span>Alert type: 'success', 'warning', 'error', 'info'</span>
                                </div>
                                <div class="grid grid-cols-3 gap-4">
                                    <code class="text-primary-600">message</code>
                                    <span class="text-gray-600">String</span>
                                    <span>Alert message (can also use slot content)</span>
                                </div>
                                <div class="mt-4 rounded bg-gray-50 p-3">
                                    <p class="mb-2 text-sm text-gray-600"><strong>Usage:</strong></p>
                                    <div class="space-y-1 text-xs">
                                        <div>
                                            Use slot content:
                                            <code>&lt;Alert type="success"&gt;Message&lt;/Alert&gt;</code>
                                        </div>
                                        <div>
                                            Or message prop:
                                            <code>&lt;Alert type="success" message="Message" /&gt;</code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CollapsableSection>
                    </div>
                </section>

                <!-- Modal -->
                <section class="mb-12">
                    <h3 id="modal" class="mb-4 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-gray-800">Modal</h3>
                    <div class="rounded-lg border border-gray-200 bg-white p-6">
                        <div class="mb-6 space-y-4">
                            <div class="flex gap-4">
                                <PrimaryButton @click="showModal = true">Open Modal</PrimaryButton>
                                <SecondaryButton @click="showNewModal = true">Open New Modal</SecondaryButton>
                            </div>

                            <!-- Traditional Modal -->
                            <Modal :show="showModal" @close="showModal = false">
                                <div class="p-6">
                                    <h3 class="mb-4 text-lg font-medium">Traditional Modal</h3>
                                    <p class="mb-4">This is the traditional modal component with basic styling.</p>
                                    <div class="flex justify-end gap-2">
                                        <SecondaryButton @click="showModal = false">Cancel</SecondaryButton>
                                        <PrimaryButton @click="showModal = false">Confirm</PrimaryButton>
                                    </div>
                                </div>
                            </Modal>

                            <!-- New Modal -->
                            <NewModal :show="showNewModal" @close="showNewModal = false">
                                <div class="p-6">
                                    <h3 class="mb-4 text-lg font-medium">New Modal Design</h3>
                                    <p class="mb-4">This is the modern modal component with updated styling and animations.</p>
                                    <div class="flex justify-end gap-2">
                                        <SecondaryButton @click="showNewModal = false">Cancel</SecondaryButton>
                                        <PrimaryButton @click="showNewModal = false">Save Changes</PrimaryButton>
                                    </div>
                                </div>
                            </NewModal>
                        </div>

                        <!-- Code Example -->
                        <div class="mb-4">
                            <CodePreview :code="modalExamples" />
                        </div>

                        <!-- Props Documentation -->
                        <CollapsableSection title="Modal Props & Parameters" class="mt-4">
                            <div class="space-y-3 text-sm">
                                <div class="grid grid-cols-3 gap-4 border-b pb-2 font-semibold text-gray-700">
                                    <span>Prop</span>
                                    <span>Type</span>
                                    <span>Description</span>
                                </div>
                                <div class="grid grid-cols-3 gap-4">
                                    <code class="text-primary-600">:show</code>
                                    <span class="text-gray-600">Boolean</span>
                                    <span>Controls modal visibility</span>
                                </div>
                                <div class="grid grid-cols-3 gap-4">
                                    <code class="text-primary-600">maxWidth</code>
                                    <span class="text-gray-600">String</span>
                                    <span>Modal max width: 'sm', 'md', 'lg', 'xl', '2xl', etc.</span>
                                </div>
                                <div class="grid grid-cols-3 gap-4">
                                    <code class="text-primary-600">closeable</code>
                                    <span class="text-gray-600">Boolean</span>
                                    <span>Allow closing by clicking outside (default: true)</span>
                                </div>
                                <div class="grid grid-cols-3 gap-4">
                                    <code class="text-primary-600">hideOverflow</code>
                                    <span class="text-gray-600">Boolean</span>
                                    <span>Hide body overflow when modal is open</span>
                                </div>
                                <div class="grid grid-cols-3 gap-4">
                                    <code class="text-primary-600">alignCenter</code>
                                    <span class="text-gray-600">Boolean</span>
                                    <span>Center align modal on screen</span>
                                </div>
                                <div class="grid grid-cols-3 gap-4">
                                    <code class="text-primary-600">@close</code>
                                    <span class="text-gray-600">Event</span>
                                    <span>Emitted when modal should be closed</span>
                                </div>
                                <div class="mt-4 rounded bg-gray-50 p-3">
                                    <p class="mb-2 text-sm text-gray-600"><strong>Available Modal Types:</strong></p>
                                    <div class="space-y-1 text-xs">
                                        <div>
                                            <code>&lt;Modal&gt;</code>
                                            - Traditional modal component
                                        </div>
                                        <div>
                                            <code>&lt;NewModal&gt;</code>
                                            - Modern modal with enhanced styling
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CollapsableSection>
                    </div>
                </section>

                <!-- Collapsible Section -->
                <section class="mb-12">
                    <h3 id="collapsible" class="mb-4 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-gray-800">Collapsible Section</h3>
                    <div class="rounded-lg border border-gray-200 bg-white p-6">
                        <div class="mb-6 space-y-4">
                            <CollapsableSection title="Expandable Content">
                                <p class="p-4">This content can be collapsed and expanded by clicking the title above.</p>
                                <div class="rounded bg-gray-50 p-4">
                                    <p>You can put any content here including other components, forms, or complex layouts.</p>
                                </div>
                            </CollapsableSection>
                        </div>
                        <CodePreview :code="collapsibleExamples" />
                    </div>
                </section>

                <!-- Spinner -->
                <section class="mb-12">
                    <h3 id="spinner" class="mb-4 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-gray-800">Spinner</h3>
                    <div class="rounded-lg border border-gray-200 bg-white p-6">
                        <div class="mb-6 flex items-center gap-8">
                            <div class="text-center">
                                <Spinner />
                                <p class="mt-2 text-sm text-gray-600">Default Spinner</p>
                            </div>
                            <div class="text-center">
                                <Spinner class="text-primary-600 h-8 w-8" />
                                <p class="mt-2 text-sm text-gray-600">Custom Size & Color</p>
                            </div>
                        </div>
                        <CodePreview :code="spinnerExamples" />
                    </div>
                </section>
            </div>

            <!-- Custom Colors & Stats Showcase -->
            <div class="mx-16 mb-16">
                <H2 title="Custom Colors & Stats" />

                <!-- Color Palette -->
                <section class="mb-12">
                    <h3 id="colors" class="mb-4 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-gray-800">Color Palette</h3>
                    <div class="rounded-lg border border-gray-200 bg-white p-6">
                        <div class="mb-6 grid grid-cols-2 gap-8">
                            <!-- Primary Colors -->
                            <div>
                                <h4 class="text-md mb-4 font-medium text-gray-700">Primary Colors</h4>
                                <div class="grid grid-cols-5 gap-2">
                                    <div class="text-center">
                                        <div class="bg-primary-50 h-12 w-12 rounded-lg border border-gray-200"></div>
                                        <p class="mt-1 text-xs text-gray-600">50</p>
                                    </div>
                                    <div class="text-center">
                                        <div class="bg-primary-200 h-12 w-12 rounded-lg"></div>
                                        <p class="mt-1 text-xs text-gray-600">200</p>
                                    </div>
                                    <div class="text-center">
                                        <div class="bg-primary h-12 w-12 rounded-lg"></div>
                                        <p class="mt-1 text-xs text-gray-600">DEFAULT</p>
                                    </div>
                                    <div class="text-center">
                                        <div class="bg-primary-600 h-12 w-12 rounded-lg"></div>
                                        <p class="mt-1 text-xs text-gray-600">600</p>
                                    </div>
                                    <div class="text-center">
                                        <div class="bg-primary-900 h-12 w-12 rounded-lg"></div>
                                        <p class="mt-1 text-xs text-gray-600">900</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Accent Colors -->
                            <div>
                                <h4 class="text-md mb-4 font-medium text-gray-700">Accent Colors</h4>
                                <div class="grid grid-cols-5 gap-2">
                                    <div class="text-center">
                                        <div class="bg-accent-50 h-12 w-12 rounded-lg border border-gray-200"></div>
                                        <p class="mt-1 text-xs text-gray-600">50</p>
                                    </div>
                                    <div class="text-center">
                                        <div class="bg-accent-200 h-12 w-12 rounded-lg"></div>
                                        <p class="mt-1 text-xs text-gray-600">200</p>
                                    </div>
                                    <div class="text-center">
                                        <div class="bg-accent h-12 w-12 rounded-lg"></div>
                                        <p class="mt-1 text-xs text-gray-600">DEFAULT</p>
                                    </div>
                                    <div class="text-center">
                                        <div class="bg-accent-600 h-12 w-12 rounded-lg"></div>
                                        <p class="mt-1 text-xs text-gray-600">600</p>
                                    </div>
                                    <div class="text-center">
                                        <div class="bg-accent-900 h-12 w-12 rounded-lg"></div>
                                        <p class="mt-1 text-xs text-gray-600">900</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Stats Component -->
                <section class="mb-12">
                    <h3 id="stats" class="mb-4 border-b-2 border-gray-200 pb-2 text-lg font-semibold text-gray-800">Stats</h3>
                    <div class="rounded-lg border border-gray-200 bg-white p-6">
                        <div class="mb-6">
                            <Stats :stats="mockStats" />
                        </div>
                        <CodePreview :code="['<Stats :stats=&quot;statsData&quot; />']" />
                    </div>
                </section>
            </div>

            <!-- Footer -->
            <div class="mx-16 mt-16 border-t border-gray-200 pt-8 text-center">
                <p class="mb-2 font-medium text-gray-700">Vue Components Library</p>
                <p class="text-sm text-gray-500">Built for Laravel/Inertia/Vue projects • Interactive documentation with working examples</p>
            </div>
        </main>
    </Navigation>
</template>
