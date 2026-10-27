<script setup lang="ts">
import DocComponentMeta from './HelperComponents/DocComponentMeta.vue';
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
    SecondaryButton,
    Images,
    TextInput,
    InputLabel,
    InputError,
    InputWrapper,
    CodePreview,
    CollapsableSection,
    PropsTable, InlineCode } from '../index';
import DocDemoCard from './HelperComponents/DocDemoCard.vue';
import DocCallout from './HelperComponents/DocCallout.vue';

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
    { prop: 'name', type: 'string', default: '-', description: 'Input name attribute (falls back to field)' },
    { prop: 'inputCustomClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
    { prop: 'labelCustomClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
    { prop: 'buttonCustomClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
    { prop: 'checkboxCustomClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
    { prop: 'switchDescription', type: 'string', default: '-', description: 'Accepted but not currently used - use leftDescription/rightDescription' },
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
    { prop: 'customClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
    { prop: 'labelCustomClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
    { prop: 'checked', type: 'boolean | any[]', default: 'false', description: 'Legacy - kept for backward compatibility. Prefer v-model or form/field' },
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
    { prop: 'customClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
    { prop: 'labelCustomClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
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
    { prop: 'customClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
    { prop: 'labelCustomClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
    { prop: 'buttonCustomClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
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
    { prop: 'customClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
    { prop: 'labelCustomClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
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

// Field parts demo
const nicknameValue = ref('');
const cityValue = ref('');

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

const fieldPartsExamples = [
    '<!-- InputWrapper: label + slot + error, the same chrome Input uses -->',
    '<InputWrapper field="nickname" sublabel="Shown publicly" required :form="form">',
    '  <TextInput v-model="nickname" id="nickname" class="w-full" />',
    '</InputWrapper>',
    '',
    '<!-- Or compose the parts yourself -->',
    '<InputLabel for="city" value="City" tooltip="Where you live" />',
    '<TextInput v-model="city" id="city" class="w-full" />',
    '<InputError :message="form.errors.city" class="mt-2" />',
];

// Props tables
const inputLabelProps = [
    { prop: 'value', type: 'string', default: '-', description: 'Label text (falls back to the default slot)' },
    { prop: 'sublabel', type: 'string', default: '-', description: 'Smaller grey text after the label' },
    { prop: 'required', type: 'boolean', default: '-', description: 'Append a red asterisk' },
    { prop: 'tooltip', type: 'string', default: '-', description: 'Show a help icon with this tooltip text' },
    { prop: 'customClass', type: 'string', default: '-', description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
];

const inputErrorProps = [
    { prop: 'message', type: 'string', default: '-', description: 'Error text; nothing is shown when empty' },
];

const inputWrapperProps = [
    { prop: 'field', type: 'string', default: '-', description: 'Field name; used for the label fallback, the label `for` and the form error lookup' },
    { prop: 'label', type: 'string', default: '-', description: 'Label text; falls back to humanised field name when omitted' },
    { prop: 'sublabel', type: 'string', default: '-', description: 'Smaller helper text rendered next to the label' },
    { prop: 'tooltip', type: 'string', default: '-', description: 'Tooltip rendered next to the label' },
    { prop: 'required', type: 'boolean', default: 'false', description: 'Append a red asterisk to the label' },
    { prop: 'noLabel', type: 'boolean', default: 'false', description: 'Hide the label' },
    { prop: 'labelCustomClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
    { prop: 'form', type: 'InertiaForm', default: '-', description: 'Form object; the error is read from form.errors[field]' },
    { prop: 'error', type: 'string', default: '-', description: 'Error message (overrides the form error)' },
    { prop: 'htmlFor', type: 'string', default: '-', description: 'Label `for` attribute (defaults to field)' },
];

const textInputProps = [
    { prop: 'v-model', type: 'string', default: "''", description: 'Bound value (emits update:modelValue)' },
    { prop: 'inputmode', type: 'InputMode', default: '-', description: 'HTML inputmode attribute (text, numeric, tel, email, etc.)' },
    { prop: 'noNumberSpinners', type: 'boolean', default: 'false', description: 'Hide native number-spinner arrows for type="number"' },
];

// v-model mode: plain File objects, no Inertia form.
const pickedFiles = ref<File[]>([]);

// Upload mode: a fake uploader that reports progress and fails one file in four, so retry can be tried.
const uploadedTokens = ref<string[]>([]);
const fakeUpload = (file: File, { onProgress }: { onProgress: (percent: number) => void }) =>
    new Promise<string>((resolve, reject) => {
        let percent = 0;
        const fails = Math.random() < 0.25;
        const timer = setInterval(() => {
            percent += 20;
            onProgress(percent);
            if (fails && percent >= 60) {
                clearInterval(timer);
                reject(new Error('Upload failed, try again'));
            } else if (percent >= 100) {
                clearInterval(timer);
                resolve(`tmp_${Math.random().toString(36).slice(2, 10)}`);
            }
        }, 250);
    });
const fakeRemove = () => new Promise<void>((resolve) => setTimeout(resolve, 300));
const storedFiles = [{ name: 'contract-signed.pdf', size: 248000, value: 'perm_4f9a2c' }];

const fileDropModesExamples = [
    '<!-- v-model: File objects, no Inertia form -->',
    '<FileDropZoneInput v-model="files" multiple accept="image/*,.pdf" :max-size="5" />',
    '<!-- clearing the model clears the list too -->',
    '<SecondaryButton size="xs" @click="files = []">Clear</SecondaryButton>',
    '',
    '<!-- Upload as soon as a file is picked; v-model holds the server tokens -->',
    '<FileDropZoneInput',
    '    v-model="tokens"',
    '    multiple',
    '    accept="*/*"',
    '    :upload="(file, { onProgress }) => uploadToTemp(file, onProgress)"',
    '    :remove="(token) => axios.delete(`/api/files/temp/${token}`)"',
    '    :initial-files="existingFiles"',
    '    :max-files="5"',
    '/>',
    '',
    '// uploadToTemp resolves with whatever v-model should hold, e.g. a token:',
    'const uploadToTemp = async (file, onProgress) => {',
    "    const data = new FormData(); data.append('file', file);",
    "    const res = await axios.post('/api/files/temp-upload', data, {",
    '        onUploadProgress: (e) => onProgress((e.loaded / e.total) * 100),',
    '    });',
    '    return res.data.token;',
    '};',
];

const fileDropZoneInputProps = [
    { prop: 'form', type: 'InertiaForm', default: '-', description: 'Inertia form object; the dropped file is assigned to form[field] (form mode)' },
    { prop: 'field', type: 'string', default: '-', description: 'Field name on the form object (form mode)' },
    { prop: 'v-model', type: 'File | File[] | unknown', default: '-', description: 'The picked File(s), or the values :upload resolved with' },
    { prop: 'upload', type: '(file, { onProgress }) => Promise<unknown>', default: '-', description: 'Upload each file as soon as it is picked; its result goes into v-model' },
    { prop: 'remove', type: '(value) => Promise<void>', default: '-', description: 'Delete an uploaded or initial file on the server; a rejection keeps it in the list' },
    { prop: 'initialFiles', type: '{ name, url?, size?, value }[]', default: '[]', description: 'Files already stored, listed with the new ones' },
    { prop: 'maxSize', type: 'number', default: '-', description: 'Largest accepted file, in MB' },
    { prop: 'maxFiles', type: 'number', default: '-', description: 'Most files accepted at once' },
    { prop: 'list', type: 'boolean', default: 'on for v-model/upload', description: 'Show the file list with previews and remove buttons (opt-in in form mode)' },
    { prop: 'preview', type: 'boolean', default: 'true', description: 'Thumbnails for images in the list' },
    { prop: 'accept', type: 'string', default: "'image/*'", description: 'MIME types or file extensions accepted by the dropzone' },
    { prop: 'multiple', type: 'boolean', default: 'false', description: 'Allow dropping multiple files at once' },
    { prop: 'label', type: 'string', default: '-', description: 'Label text displayed above the drop area' },
    { prop: 'required', type: 'boolean', default: 'false', description: 'Mark the field as required' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disable the drop zone' },
    { prop: 'FileDropCustomClass', type: 'string', default: '-', description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
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
    { prop: 'customClass', type: 'string', default: "''", description: 'Deprecated, removed in 5.0. Use class or :ui (see Parts and motion below)' },
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
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">Form input components that integrate with Inertia's <InlineCode>useForm()</InlineCode> via <InlineCode>:form</InlineCode> and <InlineCode>field</InlineCode> props.</p>
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

                <CodePreview :code="inputExamples" filename="Input.vue, basics" />

                <div class="mt-8 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">Advanced Features</div>

                <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Input :form="form" field="tooltip_field" tooltip="This is a helpful tooltip" />
                    <Input :form="form" field="sublabel_field" sublabel="Additional context below the label" />
                </div>

                <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Input :form="form" field="search_query" submitBtn="Search" placeholder="Enter search terms..." />
                </div>

                <CodePreview :code="advancedInputExamples" filename="Input.vue, tooltip, sublabel, submit button" />

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
                    <InlineCode>&lt;Input type="checkbox"&gt;</InlineCode>
                    or
                    <InlineCode>&lt;Checkbox&gt;</InlineCode>
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
                    <InlineCode>&lt;Input type="switch"&gt;</InlineCode>
                    or
                    <InlineCode>&lt;Switch&gt;</InlineCode>
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
                    <InlineCode>&lt;Input type="textarea"&gt;</InlineCode>
                    or
                    <InlineCode>&lt;Textarea&gt;</InlineCode>
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
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Radio buttons in the same group share a form field. Bind them with <InlineCode>:form</InlineCode> and
                    <InlineCode>field</InlineCode>, giving each one the value it represents.
                </p>

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

        <DocCallout class="mb-6">
            <strong>Picking the right Select:</strong>
            <ul class="mt-2 list-inside list-disc space-y-1">
                <li><strong>Select</strong> - the canonical native &lt;select&gt; wrapper. Default choice.</li>
                <li><strong>RichSelect</strong> - styled headless dropdown for non-trivial option markup (search, multiple, grouping, API-backed).</li>
            </ul>
            <div class="mt-3 rounded border border-amber-200 bg-amber-50/60 px-3 py-2 text-amber-900 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-100">
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
        </DocCallout>

        <section id="select">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Select Components</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    <InlineCode>Select</InlineCode> is a thin wrapper around a native
                    <InlineCode>&lt;select&gt;</InlineCode> - use it for short lists. Reach for
                    <InlineCode>RichSelect</InlineCode> when you need search, multiple selection, grouping, API-backed
                    autocomplete, or custom option shapes.
                </p>

                <div class="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">Simple side-by-side</div>
                <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Select :form="form" field="country" label="Country (Simple)" :options="countries" />
                    <RichSelect :form="form" field="framework" label="Framework (Rich)" :options="frameworks" />
                </div>
                <CodePreview :code="selectExamples" filename="Select vs RichSelect" />

                <div class="mt-8 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">RichSelect - searchable + clearable</div>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    Add <InlineCode>searchable</InlineCode> for an in-dropdown filter, and
                    <InlineCode>clearable</InlineCode> for an × button to reset the value.
                </p>
                <div class="mb-3 max-w-md">
                    <RichSelect v-model="searchableFramework" :options="frameworks" searchable clearable label="Framework" />
                </div>
                <p class="mb-4 text-xs text-gray-500 dark:text-gray-400">Selected value: <InlineCode>{{ searchableFramework ?? 'null' }}</InlineCode></p>
                <CodePreview :code="richSelectSearchExample" filename="RichSelect, searchable" />

                <div class="mt-8 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">RichSelect - multiple</div>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    Set <InlineCode>multiple</InlineCode> and bind to an array. Selected options render as removable chips.
                </p>
                <div class="mb-3 max-w-md">
                    <RichSelect v-model="selectedTags" :options="tagOptions" multiple searchable label="Tags" />
                </div>
                <p class="mb-4 text-xs text-gray-500 dark:text-gray-400">Selected: <InlineCode>{{ JSON.stringify(selectedTags) }}</InlineCode></p>
                <CodePreview :code="richSelectMultipleExample" filename="RichSelect, multiple" />

                <div class="mt-8 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">RichSelect - grouping</div>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    With <InlineCode>grouping</InlineCode>, options are bucketed by their
                    <InlineCode>group</InlineCode> field (configurable via
                    <InlineCode>optionGroup</InlineCode>).
                </p>
                <div class="mb-3 max-w-md">
                    <RichSelect v-model="selectedTool" :options="groupedTools" grouping searchable clearable label="Tool" />
                </div>
                <CodePreview :code="richSelectGroupingExample" filename="RichSelect, grouping" />

                <div class="mt-8 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">RichSelect - custom option keys</div>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    Already have records shaped like <InlineCode>{ id, title }</InlineCode>? Map them with
                    <InlineCode>optionValue</InlineCode> and <InlineCode>optionLabel</InlineCode>
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
                <p class="mb-4 text-xs text-gray-500 dark:text-gray-400">Selected id: <InlineCode>{{ selectedUserId ?? 'null' }}</InlineCode></p>
                <CodePreview :code="richSelectCustomKeysExample" filename="RichSelect, custom option keys" />

                <div class="mt-8 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">RichSelect - API search</div>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    <InlineCode>apiSearch</InlineCode> debounces the search box and hits
                    <InlineCode>apiUrl</InlineCode> with the query in
                    <InlineCode>apiSearchParam</InlineCode>. Use
                    <InlineCode>apiTransform</InlineCode> to map the response into the option shape RichSelect expects. (No
                    live demo here - wire it up to a real endpoint in your app.)
                </p>
                <CodePreview :code="richSelectApiExample" filename="RichSelect, API search" />

                <CollapsableSection header="Select Props & Parameters" class="mt-8">
                    <PropsTable :rows="selectProps" />
                </CollapsableSection>

                <CollapsableSection header="RichSelect Props & Parameters" class="mt-4">
                    <PropsTable :rows="richSelectProps" />
                </CollapsableSection>
            </DocDemoCard>
        </section>

        <section id="text-input">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">TextInput</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    <InlineCode>TextInput</InlineCode> is a low-level bare
                    <InlineCode>&lt;input&gt;</InlineCode> element with
                    <InlineCode>v-model</InlineCode> support, an
                    <InlineCode>inputmode</InlineCode> prop, and an optional
                    <InlineCode>noNumberSpinners</InlineCode> flag. It carries no
                    label, error display, or form-object binding. In new code prefer the full-featured
                    <InlineCode>Input</InlineCode> component; use
                    <InlineCode>TextInput</InlineCode> only when you need a
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

        <section id="field-parts">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">InputLabel, InputError &amp; InputWrapper</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    The label and error pieces that <InlineCode>Input</InlineCode> renders around its control.
                    <InlineCode>InputLabel</InlineCode> is the styled
                    <InlineCode>&lt;label&gt;</InlineCode> (sublabel, asterisk, tooltip),
                    <InlineCode>InputError</InlineCode> is the red message line, and
                    <InlineCode>InputWrapper</InlineCode> puts both around whatever you place in its slot.
                    Use them when building a custom field that should look like the others.
                </p>
                <div class="mb-6 grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
                    <InputWrapper field="nickname" sublabel="Shown publicly" required error="This nickname is taken.">
                        <TextInput v-model="nicknameValue" id="nickname" class="w-full" />
                    </InputWrapper>
                    <div>
                        <InputLabel for="city" value="City" tooltip="Where you live" />
                        <TextInput v-model="cityValue" id="city" class="w-full" />
                        <InputError message="City is required." class="mt-2" />
                    </div>
                </div>
                <CodePreview :code="fieldPartsExamples" />
                <CollapsableSection header="InputLabel Props" class="mt-6">
                    <PropsTable :rows="inputLabelProps" />
                </CollapsableSection>
                <CollapsableSection header="InputError Props" class="mt-4">
                    <PropsTable :rows="inputErrorProps" />
                </CollapsableSection>
                <CollapsableSection header="InputWrapper Props" class="mt-4">
                    <PropsTable :rows="inputWrapperProps" />
                </CollapsableSection>
            </DocDemoCard>
        </section>

        <section id="file-drop-zone-input">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">FileDropZoneInput</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Drag-and-drop file picker backed by
                    <InlineCode>vue3-dropzone</InlineCode>. Dropped files are
                    written directly to <InlineCode>form[field]</InlineCode>
                    (single file or array when <InlineCode>multiple</InlineCode>
                    is set). Renders an <InlineCode>InputError</InlineCode>
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

                <div class="mt-8 mb-2 font-semibold text-gray-800 dark:text-gray-100">Without a form, and uploading as you pick</div>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    With <InlineCode>v-model</InlineCode> the component holds plain File objects. With
                    <InlineCode>:upload</InlineCode> each file uploads straight away with its own progress
                    bar, failed uploads offer a retry, and <InlineCode>v-model</InlineCode> ends up holding what
                    your upload function returned. The demo's uploader is fake and fails now and then.
                </p>
                <div class="mb-6 grid gap-6 md:grid-cols-2">
                    <div>
                        <FileDropZoneInput v-model="pickedFiles" multiple accept="image/*,.pdf" label="Attachments" :max-size="5" />
                        <div class="mt-2 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                            v-model: {{ pickedFiles.length }} file(s)
                            <SecondaryButton v-if="pickedFiles.length" size="xs" @click="pickedFiles = []">Clear</SecondaryButton>
                        </div>
                    </div>
                    <div>
                        <FileDropZoneInput
                            v-model="uploadedTokens"
                            multiple
                            accept="*/*"
                            label="Documents"
                            :upload="fakeUpload"
                            :remove="fakeRemove"
                            :initial-files="storedFiles"
                            :max-files="5"
                        />
                        <p class="mt-2 text-xs break-all text-gray-500 dark:text-gray-400">v-model: {{ JSON.stringify(uploadedTokens) }}</p>
                    </div>
                </div>
                <CodePreview :code="fileDropModesExamples" />
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
                    <InlineCode>images.delete</InlineCode> DELETE request.
                    Pass <InlineCode>canUpload="false"</InlineCode> to render
                    the gallery read-only.
                </p>
                <p class="mb-4 text-sm text-amber-700 dark:text-amber-400">
                    Note: the demo renders the upload UI only. Uploads and deletes require a real endpoint configured
                    via the <InlineCode>endPoint</InlineCode> prop.
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
                        A native <InlineCode>&lt;select&gt;</InlineCode> wrapper
                        that accepts a typed <InlineCode>{ value, label, disabled? }</InlineCode>
                        options array with tooltip, placeholder, and error display.
                    </p>
                    <div class="mt-3 mb-4 max-w-xs">
                        <SimpleSelect v-model="simpleSelectValue" :options="sampleOptions" label="Fruit" placeholder="Pick one..." />
                    </div>
                    <p class="mb-4 text-xs text-amber-900/70 dark:text-amber-200/70">Selected: <InlineCode>{{ simpleSelectValue ?? 'null' }}</InlineCode></p>
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
                        <InlineCode>vue-search-select</InlineCode>.
                        Maps arbitrary object shapes via <InlineCode>optionValue</InlineCode> /
                        <InlineCode>optionText</InlineCode> and emits
                        <InlineCode>@searchchange</InlineCode> on every keystroke.
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
                    <p class="mb-4 text-xs text-amber-900/70 dark:text-amber-200/70">Selected: <InlineCode>{{ searchSelectValue ?? 'null' }}</InlineCode></p>
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
                        <InlineCode>form[field]</InlineCode>.
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
                    <p class="mb-4 text-xs text-amber-900/70 dark:text-amber-200/70">Selected: <InlineCode>{{ JSON.stringify(selectMultipleForm.tags) }}</InlineCode></p>
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
                        A <InlineCode>SearchSelect</InlineCode> wrapper that loads
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
                        <InlineCode>vue-select</InlineCode> that provides a
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

        <DocComponentMeta :names="['Input', 'TextInput', 'Textarea', 'Checkbox', 'Switch', 'RadioButton', 'Select', 'SimpleSelect', 'RichSelect', 'SearchSelect', 'Select2ajax', 'SelectMultiple', 'DropdownSearchbar', 'InputLabel', 'InputError', 'InputWrapper', 'FileDropZoneInput', 'Images']" />
    </div>
</template>
