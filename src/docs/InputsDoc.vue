<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import {
    Input,
    Checkbox,
    Textarea,
    Switch,
    RadioButton,
    Select,
    RichSelect,
    CodePreview,
    CollapsableSection,
    PropsTable,
    DescriptionList,
    DescriptionListItem,
} from '../index';

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
    { prop: 'form', type: 'InertiaForm', default: '-', description: 'Inertia form object for automatic value/error binding' },
    { prop: 'field', type: 'string', default: '-', description: 'Field name on the form object' },
    { prop: 'v-model', type: 'any', default: '-', description: 'Standalone value binding (use instead of form/field)' },
    { prop: 'type', type: 'InputType', default: "'text'", description: 'text, email, password, number, date, textarea, select, checkbox, switch, etc.' },
    { prop: 'label', type: 'string', default: '-', description: 'Label text; falls back to humanised field name when omitted' },
    { prop: 'sublabel', type: 'string', default: '-', description: 'Smaller helper text rendered below the label', highlight: true },
    { prop: 'tooltip', type: 'string', default: '-', description: 'Tooltip rendered next to the label', highlight: true },
    { prop: 'placeholder', type: 'string', default: '-', description: 'Placeholder text' },
    { prop: 'required', type: 'boolean', default: 'false', description: 'Mark field as required' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the input' },
    { prop: 'noLabel', type: 'boolean', default: 'false', description: 'Hide the label entirely' },
    { prop: 'autofocus', type: 'boolean', default: 'false', description: 'Focus on mount' },
    { prop: 'autocomplete', type: 'string | null', default: 'null', description: 'HTML autocomplete attribute (auto-inferred from common field names)' },
    { prop: 'addon', type: 'string', default: '-', description: 'Prefix addon rendered inside the input (e.g. "@", "$")' },
    { prop: 'submitBtn', type: 'string', default: '-', description: 'Renders a submit button next to the input with this label', highlight: true },
    { prop: 'whatsApp', type: 'string', default: '-', description: 'Renders a WhatsApp action button bound to this number' },
    { prop: 'rows', type: 'number', default: '3', description: 'Rows for type="textarea"' },
    { prop: 'min', type: 'number | string', default: '-', description: 'min attribute for numeric/date inputs' },
    { prop: 'max', type: 'number | string', default: '-', description: 'max attribute for numeric/date inputs' },
    { prop: 'step', type: 'number | string', default: '-', description: 'step attribute for numeric inputs' },
    { prop: 'noNumberSpinners', type: 'boolean', default: 'false', description: 'Hide native number spinner arrows' },
    { prop: 'pattern', type: 'string', default: '-', description: 'HTML pattern attribute for validation' },
    { prop: 'inputmode', type: 'InputMode | null', default: 'null', description: 'HTML inputmode attribute (text, numeric, tel, email, …)' },
    { prop: 'error', type: 'string', default: '-', description: 'Override error message (otherwise read from form.errors[field])' },
    { prop: 'hidePasswordToggler', type: 'boolean', default: 'false', description: 'Hide the show/hide eye button for type="password"' },
    { prop: 'leftDescription', type: 'string | boolean', default: 'false', description: 'Text on the left of checkbox/switch types' },
    { prop: 'rightDescription', type: 'string | boolean', default: "'Enable'", description: 'Text on the right of checkbox/switch types' },
];

const checkboxProps = [
    { prop: 'form', type: 'InertiaForm', default: '-', description: 'Inertia form object for value/error binding' },
    { prop: 'field', type: 'string', default: '-', description: 'Field name on the form object' },
    { prop: 'v-model', type: 'boolean | any[]', default: '-', description: 'Standalone binding; array form supports multi-checkbox groups' },
    { prop: 'value', type: 'any', default: 'null', description: 'Value contributed to the array when used in multi-checkbox groups' },
    { prop: 'label', type: 'string', default: '-', description: 'Label text; falls back to humanised field name when omitted' },
    { prop: 'sublabel', type: 'string', default: '-', description: 'Smaller helper text rendered below the label' },
    { prop: 'tooltip', type: 'string', default: '-', description: 'Tooltip rendered next to the label' },
    { prop: 'noLabel', type: 'boolean', default: 'false', description: 'Hide the label block' },
    { prop: 'leftDescription', type: 'string | boolean', default: 'false', description: 'Text rendered to the left of the checkbox; `true` renders "Disable"' },
    { prop: 'rightDescription', type: 'string | boolean', default: "'Enable'", description: 'Text rendered to the right of the checkbox; `false` hides it' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the checkbox' },
    { prop: 'required', type: 'boolean', default: 'false', description: 'Mark field as required' },
    { prop: 'name', type: 'string', default: '-', description: 'Input name attribute (falls back to field)' },
    { prop: 'id', type: 'string', default: '-', description: 'Input id attribute (auto-generated when omitted)' },
    { prop: 'error', type: 'string', default: '-', description: 'Override error message' },
];

const switchProps = [
    { prop: 'form', type: 'InertiaForm', default: '-', description: 'Inertia form object for value/error binding' },
    { prop: 'field', type: 'string', default: '-', description: 'Field name on the form object' },
    { prop: 'v-model', type: 'boolean', default: '-', description: 'Standalone value binding' },
    { prop: 'label', type: 'string', default: '-', description: 'Label text displayed above the switch' },
    { prop: 'sublabel', type: 'string', default: '-', description: 'Smaller helper text rendered below the label' },
    { prop: 'tooltip', type: 'string', default: '-', description: 'Tooltip rendered next to the label' },
    { prop: 'noLabel', type: 'boolean', default: 'false', description: 'Hide the label block' },
    { prop: 'leftDescription', type: 'string | boolean', default: 'false', description: 'Text rendered to the left of the switch' },
    { prop: 'rightDescription', type: 'string | boolean', default: "'Enable'", description: 'Text rendered to the right of the switch; `false` hides it' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the switch' },
    { prop: 'required', type: 'boolean', default: 'false', description: 'Mark field as required' },
    { prop: 'name', type: 'string', default: '-', description: 'Input name attribute (falls back to field)' },
    { prop: 'error', type: 'string', default: '-', description: 'Override error message' },
];

const textareaProps = [
    { prop: 'form', type: 'InertiaForm', default: '-', description: 'Inertia form object for value/error binding' },
    { prop: 'field', type: 'string', default: '-', description: 'Field name on the form object' },
    { prop: 'v-model', type: 'string', default: '-', description: 'Standalone value binding' },
    { prop: 'label', type: 'string', default: '-', description: 'Label text; falls back to humanised field name when omitted' },
    { prop: 'sublabel', type: 'string', default: '-', description: 'Smaller helper text rendered below the label' },
    { prop: 'tooltip', type: 'string', default: '-', description: 'Tooltip rendered next to the label' },
    { prop: 'placeholder', type: 'string', default: '-', description: 'Placeholder text' },
    { prop: 'rows', type: 'number', default: '3', description: 'Number of visible rows' },
    { prop: 'required', type: 'boolean', default: 'false', description: 'Mark field as required' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the textarea' },
    { prop: 'noLabel', type: 'boolean', default: 'false', description: 'Hide the label block' },
    { prop: 'autofocus', type: 'boolean', default: 'false', description: 'Focus on mount' },
    { prop: 'autocomplete', type: 'string', default: '-', description: 'HTML autocomplete attribute' },
    { prop: 'addon', type: 'string', default: '-', description: 'Prefix addon rendered inside the textarea' },
    { prop: 'submitBtn', type: 'string', default: '-', description: 'Renders a submit button next to the textarea with this label' },
    { prop: 'whatsApp', type: 'string', default: '-', description: 'Renders a WhatsApp action button bound to this number' },
    { prop: 'name', type: 'string', default: '-', description: 'Textarea name attribute' },
    { prop: 'error', type: 'string', default: '-', description: 'Override error message' },
];

const radioProps = [
    { prop: 'form', type: 'InertiaForm', default: '-', description: 'Inertia form object for value binding' },
    { prop: 'field', type: 'string', default: '-', description: 'Field name on the form object' },
    { prop: 'v-model', type: 'string', default: '-', description: 'Standalone value binding (set to the value of the selected radio)' },
    { prop: 'value', type: 'string', default: '-', description: 'The value this radio represents when selected' },
    { prop: 'label', type: 'string', default: '-', description: 'Label text displayed next to the radio' },
    { prop: 'name', type: 'string', default: '-', description: 'Name attribute for grouping radios (falls back to field)' },
    { prop: 'id', type: 'string', default: '-', description: 'Input id (auto-generated from field + value when omitted)' },
    { prop: 'isChecked', type: 'boolean', default: 'false', description: 'Deprecated — use v-model or form/field instead' },
];

const selectProps = [
    { prop: 'form', type: 'InertiaForm', default: '-', description: 'Inertia form object for value/error binding' },
    { prop: 'field', type: 'string', default: '-', description: 'Field name on the form object' },
    { prop: 'v-model', type: 'any', default: '-', description: 'Standalone value binding' },
    { prop: 'options', type: '(SelectOption | string)[]', default: '[]', description: 'Options as `{ value, label, disabled? }` objects or bare strings' },
    { prop: 'label', type: 'string', default: '-', description: 'Label text; falls back to humanised field name when omitted' },
    { prop: 'sublabel', type: 'string', default: '-', description: 'Smaller helper text rendered below the label' },
    { prop: 'tooltip', type: 'string', default: '-', description: 'Tooltip rendered next to the label' },
    { prop: 'placeholder', type: 'string', default: '-', description: 'Renders as a disabled first option' },
    { prop: 'required', type: 'boolean', default: 'false', description: 'Mark field as required' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the select' },
    { prop: 'noLabel', type: 'boolean', default: 'false', description: 'Hide the label block' },
    { prop: 'name', type: 'string', default: '-', description: 'Select name attribute' },
    { prop: 'error', type: 'string', default: '-', description: 'Override error message' },
];

const richSelectProps = [
    { prop: '…all Select props', type: '-', default: '-', description: 'RichSelect accepts every prop the simple Select accepts' },
    { prop: 'multiple', type: 'boolean', default: 'false', description: 'Allow multiple selection', highlight: true },
    { prop: 'searchable', type: 'boolean', default: 'false', description: 'Show a search box inside the dropdown', highlight: true },
    { prop: 'clearable', type: 'boolean', default: 'false', description: 'Show a clear (×) button when a value is selected' },
    { prop: 'grouping', type: 'boolean', default: 'false', description: 'Group options by their `group` field' },
    { prop: 'apiSearch', type: 'boolean', default: 'false', description: 'Fetch options from an endpoint as the user types', highlight: true },
    { prop: 'apiUrl', type: 'string', default: '-', description: 'Endpoint to query when apiSearch is enabled' },
    { prop: 'apiSearchParam', type: 'string', default: "'q'", description: 'Query parameter name for the search term' },
    { prop: 'apiTransform', type: '(res) => SelectOption[]', default: '-', description: 'Map an API response into the expected option shape' },
    { prop: 'minSearchLength', type: 'number', default: '2', description: 'Minimum characters before triggering a search' },
    { prop: 'searchDelay', type: 'number', default: '300', description: 'Debounce in ms before firing the search' },
    { prop: 'optionValue', type: 'string', default: "'value'", description: 'Property name to read the option value from' },
    { prop: 'optionLabel', type: 'string', default: "'label'", description: 'Property name to read the option label from' },
    { prop: 'optionGroup', type: 'string', default: "'group'", description: 'Property name to read the option group from' },
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
    { prop: 'form', type: 'InertiaForm', default: '-', description: 'DescriptionList — Inertia form whose `processing` state can auto-exit edit mode' },
    { prop: 'stopEditOnSubmit', type: 'boolean', default: 'false', description: 'DescriptionList — when true, stop editing once form.processing flips back to false' },
    { prop: 'editable', type: 'boolean', default: 'false', description: 'DescriptionListItem — render a pencil button that toggles an "edit" slot' },
    { prop: 'forceEditing', type: 'boolean', default: 'false', description: 'DescriptionListItem — open in edit mode on mount (only when editable is true)' },
    { prop: 'label', type: 'string', default: "''", description: 'DescriptionListItem — label text (use #label slot for custom markup)' },
    { prop: 'value', type: 'string', default: 'undefined', description: 'DescriptionListItem — value text (alternative to default slot)' },
    { prop: 'required', type: 'boolean', default: 'false', description: 'DescriptionListItem — render a red asterisk next to the label' },
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

                <CollapsableSection header="RichSelect Props & Parameters" class="mt-4">
                    <PropsTable :rows="richSelectProps" />
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
