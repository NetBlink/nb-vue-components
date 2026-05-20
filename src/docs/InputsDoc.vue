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
    SimpleSelect,
    SearchSelect,
    SelectMultiple,
    Select2ajax,
    DropdownSearchbar,
    FileDropZoneInput,
    Images,
    TextInput,
    CodePreview,
    CollapsableSection,
    PropsTable,
    DescriptionList,
    DescriptionListItem,
} from '../index';
import DocDemoCard from './HelperComponents/DocDemoCard.vue';

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
    // DescriptionList editable demo
    full_name: 'John Doe',
    contact_email: 'john@example.com',
    role: 'admin',
});

const roleOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'editor', label: 'Editor' },
    { value: 'viewer', label: 'Viewer' },
];
const roleLabel = (val: string) => roleOptions.find((o) => o.value === val)?.label ?? val;

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

const richSelectSearchExample = [
    '<!-- searchable adds a filter box; works for small or medium option lists -->',
    '<RichSelect v-model="framework" :options="frameworks" searchable clearable label="Framework" />',
];

const richSelectMultipleExample = [
    '<!-- multiple turns the value into an array; selections render as chips -->',
    '<RichSelect v-model="tags" :options="tagOptions" multiple searchable label="Tags" />',
];

const richSelectGroupingExample = [
    '<!-- grouping reads `group` from each option and renders headings -->',
    'const tools = [',
    "  { value: 'vite', label: 'Vite', group: 'Bundlers' },",
    "  { value: 'jest', label: 'Jest', group: 'Test runners' },",
    '];',
    '',
    '<RichSelect v-model="tool" :options="tools" grouping searchable label="Tool" />',
];

const richSelectCustomKeysExample = [
    '<!-- Map a record set with non-default key names via optionValue/optionLabel -->',
    'const users = [{ id: 1, title: \'Ada Lovelace\' }, …];',
    '',
    '<RichSelect',
    '  v-model="userId"',
    '  :options="users"',
    '  optionValue="id"',
    '  optionLabel="title"',
    '  label="Assignee"',
    '  clearable',
    '/>',
];

const richSelectApiExample = [
    '<!-- apiSearch fetches options from the given URL as the user types -->',
    '<RichSelect',
    '  v-model="user"',
    '  apiSearch',
    '  apiUrl="/api/users/search"',
    '  apiSearchParam="q"',
    '  :apiTransform="(res) => res.data"',
    '  :minSearchLength="2"',
    '  :searchDelay="300"',
    '  searchable',
    '  label="Assignee"',
    '/>',
];

const descriptionListExamples = [
    '<DescriptionList>',
    '  <DescriptionListItem label="Name">John Doe</DescriptionListItem>',
    '  <DescriptionListItem label="Email">john@example.com</DescriptionListItem>',
    '  <DescriptionListItem label="Role">Admin</DescriptionListItem>',
    '</DescriptionList>',
];

const descriptionListEditableExamples = [
    '<!-- Each editable item needs an #edit slot - that\'s what the pencil swaps to. -->',
    '<DescriptionList :form="form" stopEditOnSubmit>',
    '  <DescriptionListItem label="Name" editable>',
    '    {{ form.full_name }}',
    '    <template #edit>',
    '      <Input :form="form" field="full_name" noLabel />',
    '    </template>',
    '  </DescriptionListItem>',
    '',
    '  <DescriptionListItem label="Email" editable>',
    '    {{ form.contact_email }}',
    '    <template #edit>',
    '      <Input :form="form" field="contact_email" type="email" noLabel />',
    '    </template>',
    '  </DescriptionListItem>',
    '',
    '  <DescriptionListItem label="Role" editable>',
    '    {{ roleLabel(form.role) }}',
    '    <template #edit>',
    '      <Select :form="form" field="role" :options="roleOptions" noLabel />',
    '    </template>',
    '  </DescriptionListItem>',
    '</DescriptionList>',
];

const descriptionListAdvancedExamples = [
    '<!-- forceEditing opens in edit mode on mount (only when editable is true). -->',
    '<DescriptionListItem label="Required" required editable forceEditing>',
    '  {{ form.full_name }}',
    '  <template #edit>',
    '    <Input :form="form" field="full_name" noLabel />',
    '  </template>',
    '</DescriptionListItem>',
    '',
    '<!-- `value` is a quick shorthand instead of using the default slot. -->',
    '<DescriptionListItem label="Joined" value="March 15, 2023" />',
    '',
    '<!-- #label / #buttons slots for custom heading or trailing controls. -->',
    '<DescriptionListItem editable>',
    '  <template #label>Custom <b>Label</b></template>',
    '  Custom content with <span class="text-primary">slot</span>',
    '  <template #edit>',
    '    <Input v-model="custom" noLabel />',
    '  </template>',
    '  <template #buttons>',
    '    <button @click="...">Revert</button>',
    '  </template>',
    '</DescriptionListItem>',
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
    { prop: 'isChecked', type: 'boolean', default: 'false', description: 'Deprecated - use v-model or form/field instead' },
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
    { value: 'svelte', label: 'Svelte' },
    { value: 'solid', label: 'Solid' },
    { value: 'qwik', label: 'Qwik' },
    { value: 'astro', label: 'Astro' },
    { value: 'nuxt', label: 'Nuxt' },
];

// Searchable single-select demo
const searchableFramework = ref<string | undefined>('vue');

// Multiple-select demo
const selectedTags = ref<string[]>(['design', 'frontend']);
const tagOptions = [
    { value: 'design', label: 'Design' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'devops', label: 'DevOps' },
    { value: 'data', label: 'Data' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'security', label: 'Security' },
];

// Grouped options demo
const selectedTool = ref<string | undefined>(undefined);
const groupedTools = [
    { value: 'vite', label: 'Vite', group: 'Bundlers' },
    { value: 'webpack', label: 'Webpack', group: 'Bundlers' },
    { value: 'rollup', label: 'Rollup', group: 'Bundlers' },
    { value: 'jest', label: 'Jest', group: 'Test runners' },
    { value: 'vitest', label: 'Vitest', group: 'Test runners' },
    { value: 'playwright', label: 'Playwright', group: 'Test runners' },
    { value: 'eslint', label: 'ESLint', group: 'Linters' },
    { value: 'prettier', label: 'Prettier', group: 'Linters' },
];

// Custom option keys demo - note `id`/`title` instead of `value`/`label`
const selectedUserId = ref<number | undefined>(undefined);
const userRecords = [
    { id: 1, title: 'Ada Lovelace' },
    { id: 2, title: 'Alan Turing' },
    { id: 3, title: 'Grace Hopper' },
    { id: 4, title: 'Margaret Hamilton' },
    { id: 5, title: 'Linus Torvalds' },
];

const descriptionListProps = [
    { prop: 'form', type: 'InertiaForm', default: '-', description: 'DescriptionList - Inertia form whose `processing` state can auto-exit edit mode' },
    { prop: 'stopEditOnSubmit', type: 'boolean', default: 'false', description: 'DescriptionList - when true, stop editing once form.processing flips back to false' },
    { prop: 'editable', type: 'boolean', default: 'false', description: 'DescriptionListItem - render a pencil button that toggles an "edit" slot' },
    { prop: 'forceEditing', type: 'boolean', default: 'false', description: 'DescriptionListItem - open in edit mode on mount (only when editable is true)' },
    { prop: 'label', type: 'string', default: "''", description: 'DescriptionListItem - label text (use #label slot for custom markup)' },
    { prop: 'value', type: 'string', default: 'undefined', description: 'DescriptionListItem - value text (alternative to default slot)' },
    { prop: 'required', type: 'boolean', default: 'false', description: 'DescriptionListItem - render a red asterisk next to the label' },
];

// ---- New form components ----

// Shared options for Select-family demos ({ value, label } shape matches SimpleSelect, Select)
const sampleOptions = [
    { value: 'a', label: 'Apple' },
    { value: 'b', label: 'Banana' },
    { value: 'c', label: 'Cherry' },
];

// SearchSelect / SelectMultiple use { id, name } via optionValue/optionText
const sampleList = [
    { id: 'a', name: 'Apple' },
    { id: 'b', name: 'Banana' },
    { id: 'c', name: 'Cherry' },
];

// Reactive state for new demos
const simpleSelectValue = ref<string | undefined>(undefined);
const searchSelectValue = ref<string | undefined>(undefined);
const selectMultipleForm = useForm({ tags: [] as string[] });
const dropdownSearchbarValue = ref<string | undefined>(undefined);

// TextInput demo
const textInputValue = ref('Hello world');

// Code examples
const textInputExamples = [
    '<!-- TextInput is a low-level bare <input> element. -->',
    '<!-- Use the full-featured Input component for label/error/form binding. -->',
    '<TextInput v-model="value" placeholder="Type here..." />',
    '<TextInput v-model="value" inputmode="numeric" />',
    '<TextInput v-model="value" :noNumberSpinners="true" type="number" />',
];

const fileDropZoneExamples = [
    '<FileDropZoneInput',
    '  :form="form"',
    '  field="avatar"',
    '  label="Avatar"',
    '  accept="image/*"',
    '/>',
    '',
    '<!-- Multiple files -->',
    '<FileDropZoneInput',
    '  :form="form"',
    '  field="attachments"',
    '  label="Attachments"',
    '  accept=".pdf,.docx"',
    '  :multiple="true"',
    '/>',
];

const imagesExamples = [
    '<Images',
    '  :images="[]"',
    '  itemType="Post"',
    '  :itemId="1"',
    '  endPoint="images.store"',
    '/>',
];

const simpleSelectExamples = [
    '<!-- SimpleSelect: native <select> driven by an { value, label } options array. -->',
    '<SimpleSelect',
    '  v-model="selected"',
    '  :options="[{ value: \'a\', label: \'Apple\' }, { value: \'b\', label: \'Banana\' }]"',
    '  label="Fruit"',
    '  placeholder="Pick one..."',
    '/>',
    '',
    '<!-- With form binding -->',
    '<SimpleSelect :form="form" field="fruit" :options="options" label="Fruit" />',
];

const searchSelectExamples = [
    '<!-- SearchSelect: filterable single-select powered by vue-search-select. -->',
    '<SearchSelect',
    '  id="fruit-search"',
    '  v-model="selected"',
    '  :list="[{ id: \'a\', name: \'Apple\' }]"',
    '  optionValue="id"',
    '  optionText="name"',
    '  label="Fruit"',
    '  placeholder="Search..."',
    '/>',
];

const selectMultipleExamples = [
    '<!-- SelectMultiple: checkbox-based multi-value picker. -->',
    '<SelectMultiple',
    '  id="tags"',
    '  :form="form"',
    '  field="tags"',
    '  :list="[{ id: \'a\', name: \'Apple\' }]"',
    '  optionValue="id"',
    '  optionText="name"',
    '  label="Tags"',
    '/>',
];

const select2ajaxExamples = [
    '<!-- Select2ajax: SearchSelect backed by a paginated JSON endpoint. -->',
    '<Select2ajax',
    '  id="user"',
    '  :form="form"',
    '  field="user_id"',
    '  url="/api/users/search"',
    '  optionValue="value"',
    '  optionText="label"',
    '  label="User"',
    '  placeholder="Type to search..."',
    '/>',
];

const dropdownSearchbarExamples = [
    '<!-- DropdownSearchbar: VueSelect-based freeform dropdown with search. -->',
    '<DropdownSearchbar',
    '  :options="[\'Apple\', \'Banana\', \'Cherry\']"',
    '  label="label"',
    '  placeholder="Search..."',
    '/>',
];

// Props tables
const textInputProps = [
    { prop: 'v-model', type: 'string', default: "''", description: 'Bound value (emits update:modelValue)' },
    { prop: 'inputmode', type: 'InputMode', default: '-', description: 'HTML inputmode attribute (text, numeric, tel, email, etc.)' },
    { prop: 'noNumberSpinners', type: 'boolean', default: 'false', description: 'Hide native number-spinner arrows for type="number"' },
];

const fileDropZoneInputProps = [
    { prop: 'form', type: 'InertiaForm', default: '-', description: 'Inertia form object; the dropped file is assigned to form[field]', required: true },
    { prop: 'field', type: 'string', default: '-', description: 'Field name on the form object', required: true },
    { prop: 'accept', type: 'string', default: "'image/*'", description: 'MIME types or file extensions accepted by the dropzone' },
    { prop: 'multiple', type: 'boolean', default: 'false', description: 'Allow dropping multiple files at once' },
    { prop: 'label', type: 'string', default: '-', description: 'Label text displayed above the drop area' },
    { prop: 'required', type: 'boolean', default: 'false', description: 'Mark the field as required' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the drop zone' },
    { prop: 'FileDropCustomClass', type: 'string', default: '-', description: 'Extra CSS classes applied to the drop area container' },
];

const imagesProps = [
    { prop: 'images', type: 'Object[]', default: '-', description: 'Array of already-uploaded image objects ({ url, id })', required: true },
    { prop: 'itemType', type: 'string', default: '-', description: 'Polymorphic resource type sent to the upload endpoint (e.g. "Post")' },
    { prop: 'itemId', type: 'number', default: '-', description: 'ID of the parent resource sent to the upload endpoint' },
    { prop: 'canUpload', type: 'boolean', default: 'true', description: 'Show the upload area and delete buttons' },
    { prop: 'endPoint', type: 'string', default: "'images.store'", description: 'Named route used as the POST target for uploads' },
];

const simpleSelectProps = [
    { prop: 'options', type: 'Option[]', default: '-', description: 'Array of { value, label, disabled? } objects', required: true },
    { prop: 'form', type: 'InertiaForm', default: '-', description: 'Inertia form object for automatic value/error binding' },
    { prop: 'field', type: 'string', default: '-', description: 'Field name on the form object' },
    { prop: 'v-model', type: 'any', default: '-', description: 'Standalone value binding (use instead of form/field)' },
    { prop: 'label', type: 'string', default: '-', description: 'Label text; falls back to humanised field name when omitted' },
    { prop: 'placeholder', type: 'string', default: '-', description: 'Empty first option rendered as a placeholder' },
    { prop: 'required', type: 'boolean', default: 'false', description: 'Mark field as required' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the select' },
    { prop: 'noLabel', type: 'boolean', default: 'false', description: 'Hide the label block' },
    { prop: 'tooltip', type: 'string', default: '-', description: 'Tooltip rendered next to the label' },
];

const searchSelectProps = [
    { prop: 'id', type: 'string', default: '-', description: 'HTML id attribute (required)', required: true },
    { prop: 'list', type: 'Object[]', default: '-', description: 'Array of option objects to display', required: true },
    { prop: 'optionValue', type: 'string', default: '-', description: 'Property name to use as the option value', required: true },
    { prop: 'optionText', type: 'string', default: '-', description: 'Property name to use as the option label', required: true },
    { prop: 'optionDisabled', type: 'string', default: '-', description: 'Property name that marks an option as disabled when truthy' },
    { prop: 'form', type: 'InertiaForm', default: '-', description: 'Inertia form object for value/error binding' },
    { prop: 'field', type: 'string', default: '-', description: 'Field name on the form object' },
    { prop: 'v-model', type: 'any', default: '-', description: 'Standalone value binding' },
    { prop: 'label', type: 'string', default: '-', description: 'Label text; falls back to humanised field name' },
    { prop: 'placeholder', type: 'string', default: '-', description: 'Placeholder shown in the search box' },
    { prop: 'required', type: 'boolean', default: 'false', description: 'Mark field as required' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the select' },
    { prop: 'noLabel', type: 'boolean', default: 'false', description: 'Hide the label block' },
    { prop: 'noForm', type: 'boolean', default: 'false', description: 'Bypass form binding entirely (use with v-model)' },
    { prop: 'filterPredicate', type: '(option, term) => boolean', default: 'includes()', description: 'Custom filter function applied to option text' },
];

const searchSelectEvents = [
    { prop: '@update:modelValue', type: 'event(value)', default: '-', description: 'Fires when the selected value changes' },
    { prop: '@searchchange', type: 'event(term: string)', default: '-', description: 'Fires on every keystroke in the search box' },
];

const selectMultipleProps = [
    { prop: 'id', type: 'string', default: '-', description: 'HTML id attribute (required)', required: true },
    { prop: 'list', type: 'Object[]', default: '[]', description: 'Array of option objects to display', required: true },
    { prop: 'optionValue', type: 'string', default: '-', description: 'Property name to use as the option value', required: true },
    { prop: 'optionText', type: 'string', default: '-', description: 'Property name to use as the option label', required: true },
    { prop: 'form', type: 'InertiaForm', default: '-', description: 'Inertia form object; selected values stored in form[field]', required: true },
    { prop: 'field', type: 'string', default: '-', description: 'Field name on the form object (must be an array)', required: true },
    { prop: 'label', type: 'string', default: '-', description: 'Label text; falls back to humanised field name' },
    { prop: 'placeholder', type: 'string', default: '-', description: 'Placeholder shown when nothing is selected' },
    { prop: 'isDisabled', type: 'boolean', default: 'false', description: 'Disable the picker' },
    { prop: 'noLabel', type: 'boolean', default: 'false', description: 'Hide the label block' },
];

const select2ajaxProps = [
    { prop: 'id', type: 'string', default: '-', description: 'HTML id attribute (required)', required: true },
    { prop: 'url', type: 'string', default: '-', description: 'Endpoint that returns paginated JSON ({ data, current_page, last_page })', required: true },
    { prop: 'optionValue', type: 'string', default: "'value'", description: 'Property name to use as the option value' },
    { prop: 'optionText', type: 'string', default: "'label'", description: 'Property name to use as the option label' },
    { prop: 'optionDisabled', type: 'string', default: "'disabled'", description: 'Property name that marks an option as disabled' },
    { prop: 'form', type: 'InertiaForm', default: '-', description: 'Inertia form object for value binding' },
    { prop: 'field', type: 'string', default: '-', description: 'Field name on the form object' },
    { prop: 'v-model', type: 'any', default: '-', description: 'Standalone value binding' },
    { prop: 'label', type: 'string', default: '-', description: 'Label text; falls back to humanised field name' },
    { prop: 'placeholder', type: 'string', default: '-', description: 'Placeholder in the search box' },
    { prop: 'queryParams', type: 'Object', default: '-', description: 'Extra query parameters appended to every request' },
    { prop: 'required', type: 'boolean', default: 'false', description: 'Mark field as required' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the select' },
    { prop: 'noLabel', type: 'boolean', default: 'false', description: 'Hide the label block' },
    { prop: 'noForm', type: 'boolean', default: 'false', description: 'Bypass form binding entirely (use with v-model)' },
];

const select2ajaxEvents = [
    { prop: '@update:modelValue', type: 'event(value)', default: '-', description: 'Fires when the selected value changes' },
    { prop: '@changed', type: 'event(value)', default: '-', description: 'Alias of update:modelValue, also fires on clear' },
];

const dropdownSearchbarProps = [
    { prop: 'options', type: 'any[]', default: '-', description: 'Array of option strings or objects to display in the dropdown' },
    { prop: 'label', type: 'string', default: '-', description: 'Property name to use as the display label when options are objects' },
    { prop: 'placeholder', type: 'string', default: '-', description: 'Placeholder text shown in the search input' },
];
</script>

<template>
    <div class="space-y-10">
        <header class="space-y-3">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Input Components</h1>
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">Form input components that integrate with Inertia's <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">useForm()</code> via <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">:form</code> and <code class="rounded bg-gray-100 px-1 dark:bg-gray-900 dark:text-gray-200">field</code> props.</p>
        </header>

        <section id="input">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Basic Input</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">The base input component with label, error, and Inertia form binding built in.</p>

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

                <div class="mt-8 mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Advanced Features</div>

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
            </DocDemoCard>
        </section>

        <section id="checkbox">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Checkbox</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Two ways to use checkbox:
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">&lt;Input type="checkbox"&gt;</code>
                    or
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">&lt;Checkbox&gt;</code>
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
            </DocDemoCard>
        </section>

        <section id="switch">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Switch</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Two ways to use switch:
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">&lt;Input type="switch"&gt;</code>
                    or
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">&lt;Switch&gt;</code>
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
            </DocDemoCard>
        </section>

        <section id="textarea">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Textarea</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Two ways to use textarea:
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">&lt;Input type="textarea"&gt;</code>
                    or
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">&lt;Textarea&gt;</code>
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
            </DocDemoCard>
        </section>

        <section id="radio">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Radio Buttons</h3>
            <DocDemoCard>

                <div class="mb-6 space-y-3">
                    <RadioButton :form="form" field="choice" value="option1" label="Option 1" />
                    <RadioButton :form="form" field="choice" value="option2" label="Option 2" />
                    <RadioButton :form="form" field="choice" value="option3" label="Option 3" />
                </div>

                <CodePreview :code="radioExamples" />

                <CollapsableSection header="RadioButton Props & Parameters" class="mt-6">
                    <PropsTable :rows="radioProps" />
                </CollapsableSection>
            </DocDemoCard>
        </section>

        <div class="mb-6 rounded-lg border border-blue-200 bg-blue-50/50 p-4 text-sm text-blue-900">
            <strong>Picking the right Select:</strong>
            <ul class="mt-2 list-inside list-disc space-y-1">
                <li><strong>Select</strong> - the canonical native &lt;select&gt; wrapper. Default choice.</li>
                <li><strong>RichSelect</strong> - styled headless dropdown for non-trivial option markup (search, multiple, grouping, API-backed).</li>
            </ul>
            <div class="mt-3 rounded border border-amber-200 bg-amber-50/60 px-3 py-2 text-amber-900">
                <span class="font-semibold">Deprecated</span> - documented for reference only; migrate to Select or RichSelect for all new code. See the
                <a href="#deprecated" class="underline">Deprecated section</a> below.
                <ul class="mt-1 list-inside list-disc space-y-0.5 line-through opacity-70">
                    <li>SimpleSelect</li>
                    <li>SearchSelect</li>
                    <li>SelectMultiple</li>
                    <li>Select2ajax</li>
                    <li>DropdownSearchbar</li>
                </ul>
            </div>
        </div>

        <section id="select">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Select Components</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">Select</code> is a thin wrapper around a native
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">&lt;select&gt;</code> - use it for short lists. Reach for
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">RichSelect</code> when you need search, multiple selection, grouping, API-backed
                    autocomplete, or custom option shapes.
                </p>

                <div class="mb-2 font-semibold text-gray-800 dark:text-gray-200">Simple side-by-side</div>
                <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Select :form="form" field="country" label="Country (Simple)" :options="countries" />
                    <RichSelect :form="form" field="framework" label="Framework (Rich)" :options="frameworks" />
                </div>
                <CodePreview :code="selectExamples" />

                <div class="mt-10 mb-2 font-semibold text-gray-800 dark:text-gray-200">RichSelect - searchable + clearable</div>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    Add <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">searchable</code> for an in-dropdown filter, and
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">clearable</code> for an × button to reset the value.
                </p>
                <div class="mb-3 max-w-md">
                    <RichSelect v-model="searchableFramework" :options="frameworks" searchable clearable label="Framework" />
                </div>
                <p class="mb-4 text-xs text-gray-500 dark:text-gray-400">Selected value: <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">{{ searchableFramework ?? 'null' }}</code></p>
                <CodePreview :code="richSelectSearchExample" />

                <div class="mt-10 mb-2 font-semibold text-gray-800 dark:text-gray-200">RichSelect - multiple</div>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    Set <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">multiple</code> and bind to an array. Selected options render as removable chips.
                </p>
                <div class="mb-3 max-w-md">
                    <RichSelect v-model="selectedTags" :options="tagOptions" multiple searchable label="Tags" />
                </div>
                <p class="mb-4 text-xs text-gray-500 dark:text-gray-400">Selected: <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">{{ JSON.stringify(selectedTags) }}</code></p>
                <CodePreview :code="richSelectMultipleExample" />

                <div class="mt-10 mb-2 font-semibold text-gray-800 dark:text-gray-200">RichSelect - grouping</div>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    With <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">grouping</code>, options are bucketed by their
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">group</code> field (configurable via
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">optionGroup</code>).
                </p>
                <div class="mb-3 max-w-md">
                    <RichSelect v-model="selectedTool" :options="groupedTools" grouping searchable clearable label="Tool" />
                </div>
                <CodePreview :code="richSelectGroupingExample" />

                <div class="mt-10 mb-2 font-semibold text-gray-800 dark:text-gray-200">RichSelect - custom option keys</div>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    Already have records shaped like <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">{ id, title }</code>? Map them with
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">optionValue</code> and <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">optionLabel</code>
                    rather than reformatting your data.
                </p>
                <div class="mb-3 max-w-md">
                    <RichSelect
                        v-model="selectedUserId"
                        :options="userRecords"
                        optionValue="id"
                        optionLabel="title"
                        label="Assignee"
                        searchable
                        clearable
                    />
                </div>
                <p class="mb-4 text-xs text-gray-500 dark:text-gray-400">Selected id: <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">{{ selectedUserId ?? 'null' }}</code></p>
                <CodePreview :code="richSelectCustomKeysExample" />

                <div class="mt-10 mb-2 font-semibold text-gray-800 dark:text-gray-200">RichSelect - API search</div>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">apiSearch</code> debounces the search box and hits
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">apiUrl</code> with the query in
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">apiSearchParam</code>. Use
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">apiTransform</code> to map the response into the option shape RichSelect expects. (No
                    live demo here - wire it up to a real endpoint in your app.)
                </p>
                <CodePreview :code="richSelectApiExample" />

                <CollapsableSection header="Select Props & Parameters" class="mt-8">
                    <PropsTable :rows="selectProps" />
                </CollapsableSection>

                <CollapsableSection header="RichSelect Props & Parameters" class="mt-4">
                    <PropsTable :rows="richSelectProps" />
                </CollapsableSection>
            </DocDemoCard>
        </section>

        <section id="description-list">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Description List</h3>
            <DocDemoCard>

                <div class="mb-2 font-semibold text-gray-800 dark:text-gray-200">Basic Example</div>
                <DescriptionList>
                    <DescriptionListItem label="Name">John Doe</DescriptionListItem>
                    <DescriptionListItem label="Email">john@example.com</DescriptionListItem>
                    <DescriptionListItem label="Role">Admin</DescriptionListItem>
                </DescriptionList>
                <CodePreview :code="descriptionListExamples" class="mt-4" />

                <div class="mt-8 mb-2 font-semibold text-gray-800 dark:text-gray-200">Editable Example</div>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    Click the pencil to switch each row into edit mode. The component swaps the default slot for the
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">#edit</code> slot - that's where you put the actual input.
                </p>
                <DescriptionList :form="form">
                    <DescriptionListItem label="Name" editable>
                        {{ form.full_name }}
                        <template #edit>
                            <Input :form="form" field="full_name" no-label />
                        </template>
                    </DescriptionListItem>
                    <DescriptionListItem label="Email" editable>
                        {{ form.contact_email }}
                        <template #edit>
                            <Input :form="form" field="contact_email" type="email" no-label />
                        </template>
                    </DescriptionListItem>
                    <DescriptionListItem label="Role" editable>
                        {{ roleLabel(form.role) }}
                        <template #edit>
                            <Select :form="form" field="role" :options="roleOptions" no-label />
                        </template>
                    </DescriptionListItem>
                </DescriptionList>
                <CodePreview :code="descriptionListEditableExamples" class="mt-4" />

                <div class="mt-8 mb-2 font-semibold text-gray-800 dark:text-gray-200">Advanced Example</div>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    Mix and match: <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">forceEditing</code> opens in edit mode on mount, the
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">value</code> prop is a shortcut when there's no slot content, and the
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">#label</code> / <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">#buttons</code> slots are
                    available too.
                </p>
                <DescriptionList :form="form">
                    <DescriptionListItem label="Required" required editable forceEditing>
                        {{ form.full_name }}
                        <template #edit>
                            <Input :form="form" field="full_name" no-label />
                        </template>
                    </DescriptionListItem>
                    <DescriptionListItem label="Joined" value="March 15, 2023" />
                    <DescriptionListItem editable>
                        <template #label>Custom <b>Label</b></template>
                        Custom content with <span class="text-primary">slot</span>
                        <template #edit>
                            <Input v-model="form.full_name" no-label />
                        </template>
                    </DescriptionListItem>
                </DescriptionList>
                <CodePreview :code="descriptionListAdvancedExamples" class="mt-4" />

                <CollapsableSection header="DescriptionList & Item Props" class="mt-6">
                    <PropsTable :rows="descriptionListProps" />
                </CollapsableSection>
            </DocDemoCard>
        </section>

        <section id="text-input">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">TextInput</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">TextInput</code> is a low-level bare
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">&lt;input&gt;</code> element with
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">v-model</code> support, an
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">inputmode</code> prop, and an optional
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">noNumberSpinners</code> flag. It carries no
                    label, error display, or form-object binding. In new code prefer the full-featured
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">Input</code> component; use
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">TextInput</code> only when you need a
                    naked input element to compose into a custom wrapper.
                </p>
                <div class="mb-6 max-w-sm">
                    <TextInput v-model="textInputValue" placeholder="Type here..." class="w-full" />
                </div>
                <CodePreview :code="textInputExamples" />
                <CollapsableSection header="TextInput Props" class="mt-6">
                    <PropsTable :rows="textInputProps" />
                </CollapsableSection>
            </DocDemoCard>
        </section>

        <section id="file-drop-zone-input">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">FileDropZoneInput</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Drag-and-drop file picker backed by
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">vue3-dropzone</code>. Dropped files are
                    written directly to <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">form[field]</code>
                    (single file or array when <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">multiple</code>
                    is set). Renders an <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">InputError</code>
                    automatically when a rejected file or MIME mismatch occurs.
                </p>
                <p class="mb-4 text-sm text-amber-700 dark:text-amber-400">
                    Note: the demo below renders the drop zone UI only. Actual file upload requires a form submit handler
                    pointed at a real endpoint.
                </p>
                <div class="mb-6 max-w-md">
                    <FileDropZoneInput :form="form" field="avatar" label="Avatar" accept="image/*" />
                </div>
                <CodePreview :code="fileDropZoneExamples" />
                <CollapsableSection header="FileDropZoneInput Props" class="mt-6">
                    <PropsTable :rows="fileDropZoneInputProps" />
                </CollapsableSection>
            </DocDemoCard>
        </section>

        <section id="images">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Images</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Gallery-style image uploader with drag-and-drop. Displays existing images in a masonry grid and
                    posts new uploads to a named Inertia route. Each uploaded image can be deleted via a
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">images.delete</code> DELETE request.
                    Pass <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">canUpload="false"</code> to render
                    the gallery read-only.
                </p>
                <p class="mb-4 text-sm text-amber-700 dark:text-amber-400">
                    Note: the demo renders the upload UI only. Uploads and deletes require a real endpoint configured
                    via the <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">endPoint</code> prop.
                </p>
                <div class="mb-6">
                    <Images :images="[]" itemType="Post" :itemId="1" endPoint="images.store" />
                </div>
                <CodePreview :code="imagesExamples" />
                <CollapsableSection header="Images Props" class="mt-6">
                    <PropsTable :rows="imagesProps" />
                </CollapsableSection>
            </DocDemoCard>
        </section>

        <section id="deprecated">
            <h3 class="mb-4 flex items-center gap-2 border-b-2 border-amber-200 pb-2 text-xl font-semibold text-amber-700 dark:border-amber-700/60 dark:text-amber-400">
                Deprecated
                <span
                    class="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-amber-800 dark:bg-amber-900/40 dark:text-amber-200"
                >
                    Will not be supported
                </span>
            </h3>

            <div class="rounded-lg border border-amber-200 bg-amber-50/40 p-6 dark:border-amber-900/40 dark:bg-amber-950/30">
                <p class="mb-4 text-sm text-amber-900 dark:text-amber-200">
                    The select variants below are documented for backwards reference only - they
                    will not be receiving further work. <strong>Migrate to Select or RichSelect for all new code.</strong>
                </p>

                <!-- SimpleSelect -->
                <div class="mt-6 first:mt-0 rounded-md border border-amber-200/60 bg-white/60 p-4 dark:border-amber-900/30 dark:bg-amber-950/10">
                    <div class="mb-2 flex items-center gap-2">
                        <h4 class="text-lg font-semibold text-amber-900 dark:text-amber-200">SimpleSelect</h4>
                        <span class="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">Deprecated</span>
                    </div>
                    <p class="text-sm text-amber-900/90 dark:text-amber-200/90">
                        A native <code class="rounded bg-amber-100/60 dark:bg-amber-900/30 px-1">&lt;select&gt;</code> wrapper
                        that accepts a typed <code class="rounded bg-amber-100/60 dark:bg-amber-900/30 px-1">{ value, label, disabled? }</code>
                        options array with tooltip, placeholder, and error display.
                    </p>
                    <div class="mt-3 mb-4 max-w-xs">
                        <SimpleSelect v-model="simpleSelectValue" :options="sampleOptions" label="Fruit" placeholder="Pick one..." />
                    </div>
                    <p class="mb-4 text-xs text-amber-900/70 dark:text-amber-200/70">Selected: <code class="rounded bg-amber-100/60 dark:bg-amber-900/30 px-1">{{ simpleSelectValue ?? 'null' }}</code></p>
                    <CodePreview :code="simpleSelectExamples" />
                    <CollapsableSection header="SimpleSelect Props (deprecated)" class="mt-4">
                        <PropsTable :rows="simpleSelectProps" />
                    </CollapsableSection>
                </div>

                <!-- SearchSelect -->
                <div class="mt-6 rounded-md border border-amber-200/60 bg-white/60 p-4 dark:border-amber-900/30 dark:bg-amber-950/10">
                    <div class="mb-2 flex items-center gap-2">
                        <h4 class="text-lg font-semibold text-amber-900 dark:text-amber-200">SearchSelect</h4>
                        <span class="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">Deprecated</span>
                    </div>
                    <p class="text-sm text-amber-900/90 dark:text-amber-200/90">
                        Filterable single-select powered by
                        <code class="rounded bg-amber-100/60 dark:bg-amber-900/30 px-1">vue-search-select</code>.
                        Maps arbitrary object shapes via <code class="rounded bg-amber-100/60 dark:bg-amber-900/30 px-1">optionValue</code> /
                        <code class="rounded bg-amber-100/60 dark:bg-amber-900/30 px-1">optionText</code> and emits
                        <code class="rounded bg-amber-100/60 dark:bg-amber-900/30 px-1">@searchchange</code> on every keystroke.
                    </p>
                    <div class="mt-3 mb-4 max-w-xs">
                        <SearchSelect
                            id="demo-search-select"
                            v-model="searchSelectValue"
                            :list="sampleList"
                            optionValue="id"
                            optionText="name"
                            label="Fruit"
                            placeholder="Search..."
                            noForm
                        />
                    </div>
                    <p class="mb-4 text-xs text-amber-900/70 dark:text-amber-200/70">Selected: <code class="rounded bg-amber-100/60 dark:bg-amber-900/30 px-1">{{ searchSelectValue ?? 'null' }}</code></p>
                    <CodePreview :code="searchSelectExamples" />
                    <CollapsableSection header="SearchSelect Props (deprecated)" class="mt-4">
                        <PropsTable :rows="searchSelectProps" />
                    </CollapsableSection>
                    <CollapsableSection header="SearchSelect Events (deprecated)" class="mt-4">
                        <PropsTable :rows="searchSelectEvents" />
                    </CollapsableSection>
                </div>

                <!-- SelectMultiple -->
                <div class="mt-6 rounded-md border border-amber-200/60 bg-white/60 p-4 dark:border-amber-900/30 dark:bg-amber-950/10">
                    <div class="mb-2 flex items-center gap-2">
                        <h4 class="text-lg font-semibold text-amber-900 dark:text-amber-200">SelectMultiple</h4>
                        <span class="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">Deprecated</span>
                    </div>
                    <p class="text-sm text-amber-900/90 dark:text-amber-200/90">
                        Checkbox-based multi-value picker. Selections are stored as an array of string IDs in
                        <code class="rounded bg-amber-100/60 dark:bg-amber-900/30 px-1">form[field]</code>.
                    </p>
                    <div class="mt-3 mb-4 max-w-xs">
                        <SelectMultiple
                            id="demo-select-multiple"
                            :form="selectMultipleForm"
                            field="tags"
                            :list="sampleList"
                            optionValue="id"
                            optionText="name"
                            label="Fruits"
                        />
                    </div>
                    <p class="mb-4 text-xs text-amber-900/70 dark:text-amber-200/70">Selected: <code class="rounded bg-amber-100/60 dark:bg-amber-900/30 px-1">{{ JSON.stringify(selectMultipleForm.tags) }}</code></p>
                    <CodePreview :code="selectMultipleExamples" />
                    <CollapsableSection header="SelectMultiple Props (deprecated)" class="mt-4">
                        <PropsTable :rows="selectMultipleProps" />
                    </CollapsableSection>
                </div>

                <!-- Select2ajax -->
                <div class="mt-6 rounded-md border border-amber-200/60 bg-white/60 p-4 dark:border-amber-900/30 dark:bg-amber-950/10">
                    <div class="mb-2 flex items-center gap-2">
                        <h4 class="text-lg font-semibold text-amber-900 dark:text-amber-200">Select2ajax</h4>
                        <span class="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">Deprecated</span>
                    </div>
                    <p class="text-sm text-amber-900/90 dark:text-amber-200/90">
                        A <code class="rounded bg-amber-100/60 dark:bg-amber-900/30 px-1">SearchSelect</code> wrapper that loads
                        options from a paginated JSON endpoint with infinite-scroll and per-keystroke fetch.
                        Requires a live endpoint - no live demo.
                    </p>
                    <CodePreview :code="select2ajaxExamples" class="mt-3" />
                    <CollapsableSection header="Select2ajax Props (deprecated)" class="mt-4">
                        <PropsTable :rows="select2ajaxProps" />
                    </CollapsableSection>
                    <CollapsableSection header="Select2ajax Events (deprecated)" class="mt-4">
                        <PropsTable :rows="select2ajaxEvents" />
                    </CollapsableSection>
                </div>

                <!-- DropdownSearchbar -->
                <div class="mt-6 rounded-md border border-amber-200/60 bg-white/60 p-4 dark:border-amber-900/30 dark:bg-amber-950/10">
                    <div class="mb-2 flex items-center gap-2">
                        <h4 class="text-lg font-semibold text-amber-900 dark:text-amber-200">DropdownSearchbar</h4>
                        <span class="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">Deprecated</span>
                    </div>
                    <p class="text-sm text-amber-900/90 dark:text-amber-200/90">
                        A lightweight wrapper around
                        <code class="rounded bg-amber-100/60 dark:bg-amber-900/30 px-1">vue-select</code> that provides a
                        freeform dropdown with built-in search. No form binding or error display - intended for UI filters.
                    </p>
                    <div class="mt-3 mb-4 max-w-xs">
                        <DropdownSearchbar :options="sampleOptions" label="label" placeholder="Search fruits..." />
                    </div>
                    <CodePreview :code="dropdownSearchbarExamples" />
                    <CollapsableSection header="DropdownSearchbar Props (deprecated)" class="mt-4">
                        <PropsTable :rows="dropdownSearchbarProps" />
                    </CollapsableSection>
                </div>
            </div>
        </section>
    </div>
</template>
