export const codeExamples = {
    Input: [
        'import { Input } from "@netblink/vue-components";',
        '',
        '<Input :form="form" field="name" />',
        '<Input :form="form" field="email" type="email" />',
        '<Input :form="form" field="password" type="password" />',
    ],

    Button: [
        'import { Button, PrimaryButton, SecondaryButton } from "@netblink/vue-components";',
        '',
        '<Button theme="primary">Primary Button</Button>',
        '<Button theme="secondary">Secondary Button</Button>',
        '<Button theme="danger" size="sm">Small Danger</Button>',
    ],

    Buttons: [
        'import { PrimaryButton, SecondaryButton, DangerButton } from "@netblink/vue-components";',
        '',
        '<PrimaryButton>Primary</PrimaryButton>',
        '<SecondaryButton>Secondary</SecondaryButton>',
        '<DangerButton>Danger</DangerButton>',
    ],

    Switch: [
        'import { Checkbox } from "@netblink/vue-components";',
        '',
        '<Checkbox v-model="switchValue" switch />',
    ],

    Checkbox: [
        'import { Checkbox } from "@netblink/vue-components";',
        '',
        '<Checkbox v-model="checked" value="option1" />',
        '<Checkbox v-model="checkedArray" value="option2" />',
    ],

    FileInput: [
        'import { FileDropZoneInput } from "@netblink/vue-components";',
        '',
        '<FileDropZoneInput',
        '  :form="form"',
        '  field="images"',
        '  accept="image/*"',
        '  multiple',
        '/>',
    ],

    DropdownSearchBar: [
        'import { DropdownSearchbar } from "@netblink/vue-components";',
        '',
        '<DropdownSearchbar',
        '  v-model="selectedValue"',
        '  :options="options"',
        '  placeholder="Search options..."',
        '/>',
    ],

    InputError: [
        'import { InputError } from "@netblink/vue-components";',
        '',
        '<InputError :message="form.errors.email" />',
    ],

    InputLabel: [
        'import { InputLabel } from "@netblink/vue-components";',
        '',
        '<InputLabel for="email" value="Email Address" />',
    ],

    RadioButton: [
        'import { RadioButton } from "@netblink/vue-components";',
        '',
        '<RadioButton v-model="selectedOption" value="option1" />',
        '<RadioButton v-model="selectedOption" value="option2" />',
    ],

    SearchSelect: [
        'import { SearchSelect } from "@netblink/vue-components";',
        '',
        '<SearchSelect',
        '  v-model="selectedValue"',
        '  :options="selectOptions"',
        '  placeholder="Choose an option"',
        '/>',
    ],

    Stats: [
        'import { Stats } from "@netblink/vue-components";',
        '',
        '<Stats',
        '  :stats="statsData"',
        '  @updateSearch="handleFilterUpdate"',
        '/>',
    ],

    Modal: [
        'import { Modal } from "@netblink/vue-components";',
        '',
        '<Modal :show="showModal" @close="showModal = false">',
        '  <div class="p-6">',
        '    <h3 class="text-lg font-medium">Modal Title</h3>',
        '    <p class="mt-2">Modal content goes here...</p>',
        '  </div>',
        '</Modal>',
    ],

    NewModal: [
        'import { NewModal } from "@netblink/vue-components";',
        '',
        '<NewModal :show="showModal" @close="showModal = false">',
        '  <template #header>',
        '    <h2>Modern Modal</h2>',
        '  </template>',
        '  <template #body>',
        '    <p>Enhanced modal with better styling</p>',
        '  </template>',
        '</NewModal>',
    ],

    Table: [
        'import { Table, Thead, Tbody, Th, Td } from "@netblink/vue-components";',
        '',
        '<Table>',
        '  <Thead>',
        '    <tr>',
        '      <Th orderBy="name">Name</Th>',
        '      <Th orderBy="email">Email</Th>',
        '    </tr>',
        '  </Thead>',
        '  <Tbody data="users">',
        '    <!-- Table content auto-populated -->',
        '  </Tbody>',
        '</Table>',
    ],

    Section: [
        'import { Section } from "@netblink/vue-components";',
        '',
        '<Section>',
        '  <template #header>',
        '    <h2 class="text-xl font-semibold">Section Title</h2>',
        '  </template>',
        '  <div class="space-y-4">',
        '    <p>Section content goes here...</p>',
        '  </div>',
        '</Section>',
    ],

    Tooltip: [
        'import { Tooltip } from "@netblink/vue-components";',
        '',
        '<Tooltip text="This is a helpful tooltip">',
        '  <button>Hover me</button>',
        '</Tooltip>',
    ],

    SelectMultiple: [
        'import { SelectMultiple } from "@netblink/vue-components";',
        '',
        '<SelectMultiple',
        '  v-model="selectedValues"',
        '  :options="multiOptions"',
        '  placeholder="Select multiple options"',
        '/>',
    ],

    Textarea: [
        'import { Textarea } from "@netblink/vue-components";',
        '',
        '<Textarea',
        '  :form="form"',
        '  field="description"',
        '  label="Description"',
        '  :rows="4"',
        '/>',
    ],

    TextInput: [
        'import { TextInput } from "@netblink/vue-components";',
        '',
        '<TextInput',
        '  v-model="inputValue"',
        '  placeholder="Enter text here"',
        '  class="w-full"',
        '/>',
    ],

    CollapsibleSection: [
        'import { CollapsableSection } from "@netblink/vue-components";',
        '',
        '<CollapsableSection title="Collapsible Content">',
        '  <p>This content can be collapsed and expanded.</p>',
        '</CollapsableSection>',
    ],

    TableItemCard: [
        'import { TableItemCard } from "@netblink/vue-components";',
        '',
        '<TableItemCard',
        '  :item="itemData"',
        "  :item-id=\"{ id: 'user_id', routeName: 'users.show' }\"",
        "  :title=\"{ label: 'Name', field: 'name' }\"",
        '/>',
    ],

    Alert: [
        'import { Alert } from "@netblink/vue-components";',
        '',
        '<Alert type="success">',
        '  <strong>Success!</strong> Your action was completed successfully.',
        '</Alert>',
        '<Alert type="warning">',
        '  <strong>Warning!</strong> Please review your input.',
        '</Alert>',
        '<Alert type="error">',
        '  <strong>Error!</strong> Something went wrong.',
        '</Alert>',
    ],

    DescriptionList: [
        'import { DescriptionList, DescriptionListItem } from "@netblink/vue-components";',
        '',
        '<DescriptionList>',
        '  <DescriptionListItem label="Name" value="John Doe" />',
        '  <DescriptionListItem label="Email" value="john@example.com" />',
        '  <DescriptionListItem label="Status" value="Active" />',
        '</DescriptionList>',
    ],

    Dropdown: [
        'import { Dropdown, DropdownLink } from "@netblink/vue-components";',
        '',
        '<Dropdown align="right">',
        '  <template #trigger>',
        '    <button class="btn">Options</button>',
        '  </template>',
        '  <template #content>',
        '    <DropdownLink href="/profile">Profile</DropdownLink>',
        '    <DropdownLink href="/settings">Settings</DropdownLink>',
        '    <DropdownLink href="/logout">Logout</DropdownLink>',
        '  </template>',
        '</Dropdown>',
    ],

    Logs: [
        'import { Logs } from "@netblink/vue-components";',
        '',
        '<Logs',
        '  header="Activity Log"',
        '  :logs="activityLogs"',
        '  :show-properties="true"',
        '/>',
    ],

    Spinner: [
        'import { Spinner } from "@netblink/vue-components";',
        '',
        '<Spinner />',
        '<Spinner size="lg" />',
        '<Spinner color="primary" />',
    ],
};
