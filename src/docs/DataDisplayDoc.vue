<script setup lang="ts">
/**
 * Data Display - components whose job is to present data you already have.
 *
 * These used to be scattered: stats and tiles and logs sat in a catch-all
 * "Utilities" page, the description list was filed under Inputs because it can
 * be edited in place, and the avatar lived under Navigation because a nav bar
 * happens to use one. Grouping them by what they are, rather than by where they
 * were first needed, is the whole point of this page.
 */
import { useForm } from '@inertiajs/vue3';
import { faUsers, faChartLine, faTriangleExclamation, faCircleCheck, faGears, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import {
    Stats,
    DataTile,
    Logs,
    DescriptionList,
    DescriptionListItem,
    GravatarImg,
    Input,
    Select,
    CodePreview,
    CollapsableSection,
    PropsTable,
} from '../index';
import DocDemoCard from './HelperComponents/DocDemoCard.vue';

// Only the fields the editable description-list demo needs.
const form = useForm({
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


const statsData = [
    { name: 'Total Users', value: 1234, label: '+12%' },
    { name: 'Revenue', value: 45678, label: '+8.2%' },
    { name: 'Bounce Rate', value: 32, label: '-2.1%' },
    { name: 'Conversion', value: 4.8, label: '-0.3%' },
];


const statsExamples = [
    '<!-- Each stat is { name, value, label? } - clicking emits updateSearch -->',
    '<Stats :stats="statsData" @updateSearch="onStatusChange" />',
    '',
    '<!-- Wire the selected state to a query-string parameter -->',
    '<Stats :stats="statsData" statusName="status" />',
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

const gravatarProps = [
    { prop: 'email', type: 'string', default: '-', description: 'Email - md5-hashed and used to look up the Gravatar', required: true },
    { prop: 'size', type: 'number', default: '100', description: 'Image size in pixels (the requested s= parameter on the Gravatar URL)' },
];

const statsProps = [
    { prop: 'stats', type: 'StatItem[]', default: '-', description: 'Each item is `{ name, value, label? }` - `label` falls back to `name` for display', required: true },
    { prop: 'statusName', type: 'string | null', default: 'null', description: 'Name of the URL query parameter used to determine the selected stat' },
    { prop: 'customContainerClass', type: 'string', default: "''", description: 'Extra classes on the outer grid' },
    { prop: 'customStatClass', type: 'string', default: "''", description: 'Extra classes on each stat card' },
    { prop: 'customStatValueClass', type: 'string', default: "''", description: 'Extra classes on each stat value' },
    { prop: 'customStatLabelClass', type: 'string', default: "''", description: 'Extra classes on each stat label' },
];

const statsEvents = [
    { prop: '@updateSearch', type: 'event(string | null)', default: '-', description: 'Emits the clicked stat name (or null when the same one is re-clicked)' },
];


const dataTileProps = [
    { prop: 'value', type: 'string | number', default: '-', description: 'The big number / value to display', required: true },
    { prop: 'label', type: 'string', default: '-', description: 'Label rendered under the value', required: true },
    { prop: 'icon', type: 'IconProp', default: '-', description: 'FontAwesome icon shown in the background of the value area' },
    { prop: 'theme', type: 'ComponentTheme', default: "'primary'", description: 'primary | secondary | success | danger | warning' },
    { prop: 'selected', type: 'boolean', default: 'false', description: 'Adds a ring outline to indicate the tile is currently active' },
    { prop: 'customStatClass', type: 'string', default: "''", description: 'Extra classes on the outer card' },
    { prop: 'customStatValueClass', type: 'string', default: "''", description: 'Extra classes on the value section' },
    { prop: 'customStatLabelClass', type: 'string', default: "''", description: 'Extra classes on the label section' },
];


// Logs data
// Faked audit trail. `icon` must be a registered alias ($-prefixed) or a full
// set name - bare strings like 'edit' resolve to nothing and render blank.
const sampleLogs = {
    total: 5,
    data: [
        {
            id: 1,
            icon: '$success',
            event_formatted: 'Order approved',
            reference: '#SO-1042',
            causer: { id: 0, first_name: 'System' },
            created_date_full: '20 May 2026 09:14',
            changes_formatted: { Status: { old: 'Pending review', new: 'Approved' } },
            description_details: null,
        },
        {
            id: 2,
            icon: '$edit',
            event_formatted: 'Customer details updated',
            reference: '#SO-1042',
            causer: { id: 42, first_name: 'Alice' },
            created_date_full: '20 May 2026 08:51',
            changes_formatted: {
                'Contact email': { old: 'a.smith@old-domain.test', new: 'alice.smith@example.test' },
                'Phone': { old: null, new: '+44 7700 900123' },
            },
            description_details: null,
        },
        {
            id: 3,
            icon: '$warning',
            event_formatted: 'Payment retry scheduled',
            reference: '#PAY-7781',
            causer: { id: 0, first_name: 'System' },
            created_date_full: '19 May 2026 22:05',
            changes_formatted: { Attempts: { old: '1', new: '2' } },
            description_details: 'Card issuer returned <strong>insufficient funds</strong>. Next retry in 24h.',
        },
        {
            id: 4,
            icon: '$info',
            event_formatted: 'Note added',
            reference: null,
            causer: { id: 7, first_name: 'Marek' },
            created_date_full: '19 May 2026 17:32',
            changes_formatted: {},
            description_details: 'Customer asked to hold delivery until the end of the month.',
        },
        {
            id: 5,
            icon: '$error',
            event_formatted: 'Draft discarded',
            reference: null,
            causer: { id: 42, first_name: 'Alice' },
            created_date_full: '19 May 2026 17:30',
            changes_formatted: {},
            description_details: 'Entry removed via bulk action.',
        },
    ],
    links: null,
};

const logsExample = [
    '<Logs :logs="serverLogs" />',
    '',
    '<!-- Custom header -->',
    '<Logs :logs="serverLogs" header="Audit trail" />',
];

const logsProps = [
    { prop: 'logs', type: 'Object', default: '-', description: 'Laravel-style paginated result: `{ total, data[], links? }`. When undefined, a spinner is shown.', required: true },
    { prop: 'header', type: 'string', default: "'Logs'", description: 'Heading text shown in the CollapsibleSection header bar' },
    { prop: 'open', type: 'boolean', default: 'false', description: 'Start the section expanded' },
];

const logsContentProps = [
    { prop: 'logs', type: 'Object', default: '-', description: 'Same paginated shape as Logs: `{ total, data[], links? }`. When undefined, a spinner is shown. Each item should include `id`, `icon`, `event_formatted`, `reference`, `causer`, `created_date_full`, `changes_formatted`, and optionally `description_details`.', required: true },
    { prop: 'causerRoute', type: 'string | null', default: "'users.show'", description: 'Route name used to link a log entry\'s causer. Falls back to plain text when the app exposes no route() helper or the name is unknown; set to null to never link.' },
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
</script>

<template>
    <div class="space-y-12">
        <div>
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">
                Presentational components for data you already have - summary figures, key/value detail, activity trails and avatars. Nothing here
                collects input; for that see Forms.
            </p>
        </div>

        <section id="stats">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Statistics Display</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Clickable stat cards. Each item is selectable; clicking emits
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">updateSearch</code> with the selected name (or null when the same stat is clicked again).
                    Selection state is read from a URL query parameter named by <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">statusName</code> (defaults to
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">status</code>).
                </p>

                <div class="mb-6">
                    <Stats :stats="statsData" />
                </div>

                <CodePreview :code="statsExamples" />

                <div class="mt-6">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Stats Props</div>
                    <PropsTable :rows="statsProps" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Events</div>
                    <PropsTable :rows="statsEvents" />
                </div>
            </DocDemoCard>
        </section>

        <section id="data-tiles">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">DataTile</h3>
            <DocDemoCard>
                <p class="mb-2 text-gray-600 dark:text-gray-400">
                    A themed single-statistic tile with a large value, a label, and a FontAwesome watermark icon. Like
                    <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">Stats</code> but for one number you've computed yourself - drop several into a grid for
                    a dashboard layout.
                </p>
                <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
                    The tile fills its container by default; render multiple inside a CSS grid for the dashboard look.
                </p>

                <h4 class="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">Themed grid</h4>
                <div class="mb-6 grid gap-4" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))">
                    <DataTile :value="1284" label="Active users" :icon="faUsers" theme="primary" />
                    <DataTile :value="'£45,678'" label="Revenue (MTD)" :icon="faChartLine" theme="success" />
                    <DataTile :value="32" label="Failed jobs" :icon="faTriangleExclamation" theme="warning" />
                    <DataTile :value="'4.8 / 5'" label="Customer rating" :icon="faCircleCheck" theme="success" />
                </div>

                <h4 class="mt-8 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">Selected state</h4>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    Set <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">selected</code> when the tile represents a currently-active filter or selection.
                </p>
                <div class="mb-6 grid gap-4" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))">
                    <DataTile :value="7" label="Pending reviews" :icon="faGears" theme="primary" />
                    <DataTile :value="3" label="Pending reviews" :icon="faGears" theme="primary" selected />
                    <DataTile :value="2" label="Pending reviews" :icon="faGears" theme="danger" />
                </div>

                <h4 class="mt-8 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">Standalone</h4>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    A single tile fills the available width - wrap it in a sized container if you don't want it stretching across the page.
                </p>
                <div class="mb-6 max-w-xs">
                    <DataTile :value="123" label="Example label" :icon="faChevronCircleDown" theme="success" />
                </div>

                <CodePreview
                    :code="[
                        'import { faUsers, faChartLine } from \'@fortawesome/free-solid-svg-icons\';',
                        '',
                        '&lt;!-- Drop several into a CSS grid for the dashboard look --&gt;',
                        '&lt;div class=&quot;grid gap-4&quot; style=&quot;grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))&quot;&gt;',
                        '  &lt;DataTile :value=&quot;1284&quot; label=&quot;Active users&quot; :icon=&quot;faUsers&quot; theme=&quot;primary&quot; /&gt;',
                        '  &lt;DataTile :value=&quot;\'£45,678\'&quot; label=&quot;Revenue (MTD)&quot; :icon=&quot;faChartLine&quot; theme=&quot;success&quot; /&gt;',
                        '&lt;/div&gt;',
                        '',
                        '&lt;!-- selected adds a ring outline to indicate the active tile --&gt;',
                        '&lt;DataTile :value=&quot;3&quot; label=&quot;Pending reviews&quot; :icon=&quot;faGears&quot; theme=&quot;primary&quot; selected /&gt;',
                    ]"
                />

                <div class="mt-6">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">DataTile Props</div>
                    <PropsTable :rows="dataTileProps" />
                </div>
            </DocDemoCard>
        </section>

        <section id="description-list">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Description List</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    A label/value list for record detail. Rows can be read-only or made editable in place, swapping the
                    value for an input when the pencil is clicked.
                </p>

                <h4 class="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">Basic Example</h4>
                <DescriptionList>
                    <DescriptionListItem label="Name">John Doe</DescriptionListItem>
                    <DescriptionListItem label="Email">john@example.com</DescriptionListItem>
                    <DescriptionListItem label="Role">Admin</DescriptionListItem>
                </DescriptionList>
                <CodePreview :code="descriptionListExamples" filename="DescriptionList basic" class="mt-4" />

                <h4 class="mt-8 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">Editable Example</h4>
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
                <CodePreview :code="descriptionListEditableExamples" filename="DescriptionList editable" class="mt-4" />

                <h4 class="mt-8 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">Advanced Example</h4>
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
                <CodePreview :code="descriptionListAdvancedExamples" filename="DescriptionList advanced" class="mt-4" />

                <CollapsableSection header="DescriptionList & Item Props" class="mt-6">
                    <PropsTable :rows="descriptionListProps" />
                </CollapsableSection>
            </DocDemoCard>
        </section>

        <section id="logs">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Logs</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    An activity-log timeline rendered inside a collapsible section. Pass a Laravel-style paginated result
                    and each entry is displayed as a timeline node with an icon, event description, optional causer link,
                    field-change diff, and timestamp. When the paginated result includes a <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">links</code> array,
                    a <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">Pagination</code> bar is appended automatically.
                    Passing <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">undefined</code> shows a loading spinner.
                </p>

                <div class="mb-6">
                    <Logs :logs="sampleLogs" :open="true" />
                </div>

                <CodePreview :code="logsExample" />

                <div class="mt-6">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Logs Props</div>
                    <PropsTable :rows="logsProps" />
                </div>

                <section id="logs-content" class="mt-8">
                    <h4 class="mb-3 border-b border-gray-200 pb-2 text-lg font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">LogsContent</h4>
                    <p class="mb-4 text-gray-600 dark:text-gray-400">
                        The inner timeline renderer used by <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">Logs</code>.
                        Use it directly when you want to embed the timeline without the surrounding
                        <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">CollapsibleSection</code> wrapper - for example inside your own card or panel.
                        It accepts the same paginated <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">logs</code> object.
                    </p>
                    <div class="mt-4">
                        <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">LogsContent Props</div>
                        <PropsTable :rows="logsContentProps" />
                    </div>
                </section>
            </DocDemoCard>
        </section>

        <section id="gravatar">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Gravatar Images</h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">User avatars fetched from Gravatar, with configurable size and fallback options.</p>

                <div class="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Different Sizes</div>
                <div class="mb-6 rounded border border-gray-200 bg-gray-50 dark:bg-gray-900/40 p-4">
                    <div class="flex items-center space-x-4">
                        <GravatarImg email="john@example.com" :size="32" class="rounded-full" />
                        <GravatarImg email="jane@example.com" :size="48" class="rounded-full" />
                        <GravatarImg email="bob@example.com" :size="64" class="rounded-full" />
                        <GravatarImg email="alice@example.com" :size="80" class="rounded-full" />
                    </div>
                </div>

                <CollapsableSection header="GravatarImg Props" class="mt-6">
                    <PropsTable :rows="gravatarProps" />
                </CollapsableSection>
            </DocDemoCard>
        </section>
    </div>
</template>
