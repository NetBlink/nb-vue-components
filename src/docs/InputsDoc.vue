<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { H2, Input, Checkbox, Textarea, Switch, RadioButton, Select, RichSelect, CodePreview, CollapsableSection, PropsTable } from '../index';
import DescriptionList from '@/components/DescriptionList.vue';
import DescriptionListItem from '@/components/DescriptionListItem.vue';

// Mock form setup
const form = useForm({
    name: 'John Doe',
    email: 'john@example.com',
    password: '',
    disabled_field: 'This field is disabled',
    with_addon: 'username',
    terms: false as boolean,
    newsletter: true as boolean,
    choice: 'option2',
    note: 'This is a sample note...',
    description: 'A longer description that spans multiple lines.',
    country: 'us',
    framework: '',
    tooltip_field: 'Field with tooltip',
    sublabel_field: 'Field with sublabel',
    search_query: '',
});

// Code examples
const inputExamples = [
    '<Input :form="form" field="name" label="Name" />',
    '<Input :form="form" field="email" type="email" />',
    '<Input :form="form" field="password" type="password" />',
    '<Input :form="form" field="disabled_field" disabled />',
    '<Input :form="form" field="with_addon" addon="@" />',
];

const advancedInputExamples = [
    '<Input :form="form" field="tooltip_field" tooltip="This is a helpful tooltip" />',
    '<Input :form="form" field="sublabel_field" sublabel="Additional context below the label" />',
    '<Input :form="form" field="search_query" submitBtn="Search" />',
    '<Input :form="form" field="search_query" submitBtn="Search" placeholder="Enter search terms..." />',
];

const checkboxExamples = [
    '<Input type="checkbox" :form="form" field="terms" label="I agree to the terms" />',
    '<Checkbox :form="form" field="newsletter" label="Subscribe to newsletter" />',
    '<Checkbox v-model="agreed" label="Standalone checkbox" />',
];

const textareaExamples = [
    '<Input type="textarea" :form="form" field="note" label="Note" :rows="4" />',
    '<Textarea :form="form" field="description" label="Description" :rows="6" />',
];

const switchExamples = [
    '<Input type="switch" :form="form" field="newsletter" label="Newsletter" />',
    '<Switch :form="form" field="terms" label="Accept Terms" required />',
];

const radioExamples = [
    '<RadioButton :form="form" field="choice" value="option1" label="Option 1" />',
    '<RadioButton :form="form" field="choice" value="option2" label="Option 2" />',
];

const selectExamples = [
    '<Select :form="form" field="country" label="Country" :options="countries" />',
    '<RichSelect :form="form" field="framework" label="Framework" :options="frameworks" />',
];

const descriptionListExamples = [
    '<DescriptionList>',
    '  <DescriptionListItem label="Name">John Doe</DescriptionListItem>',
    '  <DescriptionListItem label="Email">john@example.com</DescriptionListItem>',
    '  <DescriptionListItem label="Role">Admin</DescriptionListItem>',
    '</DescriptionList>',
];

const descriptionListEditableExamples = [
    '<DescriptionList>',
    '  <DescriptionListItem label="Name" editable>John Doe</DescriptionListItem>',
    '  <DescriptionListItem label="Email" editable>john@example.com</DescriptionListItem>',
    '  <DescriptionListItem label="Role" editable>Admin</DescriptionListItem>',
    '</DescriptionList>',
];

const descriptionListAdvancedExamples = [
    '<DescriptionList>',
    '  <DescriptionListItem label="Required" required editable>Required value</DescriptionListItem>',
    '  <DescriptionListItem label="With value prop" :value="\'Value from prop\'" />',
    '  <DescriptionListItem>',
    '    <template #label>Custom <b>Label</b></template>',
    '    Custom content with <span class="text-primary">slot</span>',
    '  </DescriptionListItem>',
    '</DescriptionList>',
];

// Props data for tables
const inputProps = [
    { prop: 'form', type: 'object', default: '-', description: 'Inertia form object for automatic binding' },
    { prop: 'field', type: 'string', default: '-', description: 'Field name in the form object' },
    { prop: 'type', type: 'string', default: "'text'", description: 'Input type (text, email, password, etc.)' },
    { prop: 'label', type: 'string', default: 'auto', description: 'Label text (auto-generated from field if not provided)' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the input' },
    { prop: 'addon', type: 'string', default: '-', description: 'Text to display as a prefix addon' },
    { prop: 'placeholder', type: 'string', default: '-', description: 'Placeholder text' },
    { prop: 'required', type: 'boolean', default: 'false', description: 'Mark field as required' },
    { prop: 'tooltip', type: 'string', default: '-', description: 'Tooltip text shown next to label', highlight: true },
    { prop: 'sublabel', type: 'string', default: '-', description: 'Sub-label text shown below main label', highlight: true },
    { prop: 'submitBtn', type: 'string', default: '-', description: 'Submit button text (renders button next to input)', highlight: true },
];

const checkboxProps = [
    { prop: 'form & field', type: 'object & string', default: '-', description: 'For form integration' },
    { prop: 'v-model', type: 'boolean', default: '-', description: 'For standalone usage' },
    { prop: 'label', type: 'string', default: '-', description: 'Label text displayed next to checkbox' },
    { prop: 'leftDescription', type: 'string', default: '-', description: 'Text displayed on left side of checkbox' },
    { prop: 'rightDescription', type: 'string', default: '-', description: 'Text displayed on right side of checkbox' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the checkbox' },
    { prop: 'required', type: 'boolean', default: 'false', description: 'Mark field as required' },
];

const switchProps = [
    { prop: 'form & field', type: 'object & string', default: '-', description: 'For form integration' },
    { prop: 'v-model', type: 'boolean', default: '-', description: 'For standalone usage' },
    { prop: 'label', type: 'string', default: '-', description: 'Label text displayed above switch' },
    { prop: 'leftDescription', type: 'string', default: '-', description: 'Text displayed on left side of switch' },
    { prop: 'rightDescription', type: 'string', default: '-', description: 'Text displayed on right side of switch' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the switch' },
    { prop: 'required', type: 'boolean', default: 'false', description: 'Mark field as required' },
];

const textareaProps = [
    { prop: 'rows', type: 'number', default: '3', description: 'Number of visible text lines' },
    { prop: 'form & field', type: 'object & string', default: '-', description: 'For form integration' },
    { prop: 'v-model', type: 'string', default: '-', description: 'For standalone usage' },
    { prop: 'label', type: 'string', default: '-', description: 'Label text' },
    { prop: 'placeholder', type: 'string', default: '-', description: 'Placeholder text' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the textarea' },
];

const radioProps = [
    { prop: 'form & field', type: 'object & string', default: '-', description: 'For form integration' },
    { prop: 'value', type: 'string', default: '-', description: 'The value this radio represents' },
    { prop: 'label', type: 'string', default: '-', description: 'Label text displayed next to radio' },
    { prop: 'name', type: 'string', default: 'field', description: 'Input name attribute (defaults to field)' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the radio button' },
];

const selectProps = [
    { prop: 'options', type: 'array', default: '[]', description: 'Array of {value, label} objects' },
    { prop: 'form & field', type: 'object & string', default: '-', description: 'For form integration' },
    { prop: 'v-model', type: 'string', default: '-', description: 'For standalone usage' },
    { prop: 'placeholder', type: 'string', default: '-', description: 'Placeholder text for empty selection' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the select' },
    { prop: 'RichSelect', type: '-', default: '-', description: 'Additional features: search, grouping, custom rendering', highlight: true },
];

// Mock data for selects
const countries = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
];

const frameworks = [
    { value: 'vue', label: 'Vue.js' },
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
];

const descriptionListProps = [
    { prop: 'form', type: 'object', default: '-', description: 'Inertia form object for auto-edit integration (DescriptionList)' },
    { prop: 'stopEditOnSubmit', type: 'boolean', default: 'false', description: 'Stop editing when form submits (DescriptionList)' },
    { prop: 'label', type: 'string', default: "''", description: 'Label for the item (DescriptionListItem)' },
    { prop: 'value', type: 'string', default: 'undefined', description: 'Value for the item (alternative to slot)' },
    { prop: 'editable', type: 'boolean', default: 'false', description: 'Enable inline editing (DescriptionListItem)' },
    { prop: 'forceEditing', type: 'boolean', default: 'false', description: 'Force editing mode (DescriptionListItem)' },
    { prop: 'required', type: 'boolean', default: 'false', description: 'Show required asterisk (DescriptionListItem)' },
];
</script>

<template>
    <div class="space-y-12">
        <section id="input">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Basic Input</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">The foundational input component supporting various types including text, email, password, and more.</p>

                <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Input :form="form" field="name" />
                    <Input :form="form" field="email" type="email" />
                    <Input :form="form" field="password" type="password" />
                </div>

                <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Input :form="form" field="disabled_field" disabled />
                    <Input :form="form" field="with_addon" addon="@" />
                </div>

                <CodePreview :code="inputExamples" />

                <h4 class="mt-8 mb-4 text-lg font-semibold text-gray-800">Advanced Features</h4>
                <p class="mb-4 text-gray-600">Input component supports advanced features like tooltips, sublabels, and integrated submit buttons.</p>

                <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Input :form="form" field="tooltip_field" tooltip="This is a helpful tooltip" />
                    <Input :form="form" field="sublabel_field" sublabel="Additional context below the label" />
                </div>

                <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Input :form="form" field="search_query" submitBtn="Search" placeholder="Enter search terms..." />
                </div>

                <CodePreview :code="advancedInputExamples" />

                <CollapsableSection header="Input Props & Parameters" class="mt-6">
                    <PropsTable :rows="inputProps" />
                </CollapsableSection>
            </div>
        </section>

        <section id="checkbox">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Checkbox</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
                    Two ways to use checkbox:
                    <code class="rounded bg-gray-100 px-1">&lt;Input type="checkbox"&gt;</code>
                    or
                    <code class="rounded bg-gray-100 px-1">&lt;Checkbox&gt;</code>
                    - both are API-compatible.
                </p>

                <div class="mb-6 space-y-4">
                    <Input type="checkbox" :form="form" field="terms" label="I agree to the terms (Input type)" />
                    <Checkbox :form="form" field="newsletter" label="Subscribe to newsletter (Checkbox)" />
                    <Checkbox :form="form" field="terms" label="Accept Terms" left-description="Disagree" right-description="Agree" />
                </div>

                <CodePreview :code="checkboxExamples" />

                <CollapsableSection header="Checkbox Props & Parameters" class="mt-6">
                    <PropsTable :rows="checkboxProps" />
                </CollapsableSection>
            </div>
        </section>

        <section id="switch">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Switch</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
                    Two ways to use switch:
                    <code class="rounded bg-gray-100 px-1">&lt;Input type="switch"&gt;</code>
                    or
                    <code class="rounded bg-gray-100 px-1">&lt;Switch&gt;</code>
                    - both are API-compatible.
                </p>

                <div class="mb-6 space-y-4">
                    <Input type="switch" :form="form" field="newsletter" label="Newsletter Subscription (Input type)" />
                    <Switch :form="form" field="terms" label="Accept Terms & Conditions (Switch)" required />
                    <Switch :form="form" field="newsletter" label="Notifications" left-description="Disable" right-description="Enable" />
                </div>

                <CodePreview :code="switchExamples" />

                <CollapsableSection header="Switch Props & Parameters" class="mt-6">
                    <PropsTable :rows="switchProps" />
                </CollapsableSection>
            </div>
        </section>

        <section id="textarea">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Textarea</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
                    Two ways to use textarea:
                    <code class="rounded bg-gray-100 px-1">&lt;Input type="textarea"&gt;</code>
                    or
                    <code class="rounded bg-gray-100 px-1">&lt;Textarea&gt;</code>
                    - both are API-compatible.
                </p>

                <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Input type="textarea" :form="form" field="note" label="Note (Input type)" :rows="4" />
                    <Textarea :form="form" field="description" label="Description (Textarea)" :rows="4" />
                </div>

                <CodePreview :code="textareaExamples" />

                <CollapsableSection header="Textarea Props & Parameters" class="mt-6">
                    <PropsTable :rows="textareaProps" />
                </CollapsableSection>
            </div>
        </section>

        <section id="radio">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Radio Buttons</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Radio buttons for single-choice selections with proper form integration and label association.</p>

                <div class="mb-6 space-y-3">
                    <RadioButton :form="form" field="choice" value="option1" label="Option 1" />
                    <RadioButton :form="form" field="choice" value="option2" label="Option 2" />
                    <RadioButton :form="form" field="choice" value="option3" label="Option 3" />
                </div>

                <CodePreview :code="radioExamples" />

                <CollapsableSection header="RadioButton Props & Parameters" class="mt-6">
                    <PropsTable :rows="radioProps" />
                </CollapsableSection>
            </div>
        </section>

        <section id="select">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Select Components</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Multiple select components: simple Select for basic dropdowns and RichSelect for advanced features.</p>

                <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Select :form="form" field="country" label="Country (Simple)" :options="countries" />
                    <RichSelect :form="form" field="framework" label="Framework (Rich)" :options="frameworks" />
                </div>

                <CodePreview :code="selectExamples" />

                <CollapsableSection header="Select Props & Parameters" class="mt-6">
                    <PropsTable :rows="selectProps" />
                </CollapsableSection>
            </div>
        </section>

        <section id="description-list">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Description List</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
                    Description lists are great for displaying key-value pairs, user profiles, or summary data. Supports static, editable, and
                    advanced usage.
                </p>

                <h4 class="mb-2 font-semibold text-gray-800">Basic Example</h4>
                <DescriptionList>
                    <DescriptionListItem label="Name">John Doe</DescriptionListItem>
                    <DescriptionListItem label="Email">john@example.com</DescriptionListItem>
                    <DescriptionListItem label="Role">Admin</DescriptionListItem>
                </DescriptionList>
                <CodePreview :code="descriptionListExamples" class="mt-4" />

                <h4 class="mt-8 mb-2 font-semibold text-gray-800">Editable Example</h4>
                <DescriptionList>
                    <DescriptionListItem label="Name" editable>John Doe</DescriptionListItem>
                    <DescriptionListItem label="Email" editable>john@example.com</DescriptionListItem>
                    <DescriptionListItem label="Role" editable>Admin</DescriptionListItem>
                </DescriptionList>
                <CodePreview :code="descriptionListEditableExamples" class="mt-4" />

                <h4 class="mt-8 mb-2 font-semibold text-gray-800">Advanced Example</h4>
                <DescriptionList>
                    <DescriptionListItem label="Required" required editable>Required value</DescriptionListItem>
                    <DescriptionListItem label="With value prop" :value="'Value from prop'" />
                    <DescriptionListItem>
                        <template #label>
                            Custom
                            <b>Label</b>
                        </template>
                        Custom content with
                        <span class="text-primary">slot</span>
                    </DescriptionListItem>
                </DescriptionList>
                <CodePreview :code="descriptionListAdvancedExamples" class="mt-4" />

                <CollapsableSection header="DescriptionList & Item Props" class="mt-6">
                    <PropsTable :rows="descriptionListProps" />
                </CollapsableSection>
            </div>
        </section>
    </div>
</template>
