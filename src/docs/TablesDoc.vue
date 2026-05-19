<script setup lang="ts">
import { ref, computed } from 'vue';
import {
    Table,
    Thead,
    Tbody,
    Th,
    Td,
    PrimaryButton,
    DangerButton,
    CodePreview,
    CollapsableSection,
    PropsTable,
} from '../index';
import { useTableSort } from '../composables/useTable';
import { mockUsers, mockOrders, type User, type Order } from '../mockData';

// Table sorting composable example
const { sortState } = useTableSort();

// Sample data for examples
const users = ref(mockUsers);
const orders = ref(mockOrders);

// Status badge styling
const getStatusBadge = (status: string) => {
    const badges = {
        active: 'bg-green-100 text-green-800',
        inactive: 'bg-red-100 text-red-800',
        pending: 'bg-yellow-100 text-yellow-800',
        completed: 'bg-green-100 text-green-800',
        processing: 'bg-blue-100 text-blue-800',
        cancelled: 'bg-red-100 text-red-800'
    };
    return badges[status as keyof typeof badges] || 'bg-gray-100 dark:bg-gray-900/60 text-gray-800 dark:text-gray-200';
};

// Event handlers for demo
const handleRowClick = (row: any, index: number) => {
    console.log('Row clicked:', row, index);
};

const handleSelectionChange = (selected: any[]) => {
    console.log('Selection changed:', selected);
};

const handleSort = (column: string, direction: 'asc' | 'desc') => {
    console.log('Sort changed:', column, direction);
};

const editUser = (user: any) => {
    console.log('Edit user:', user);
};

const deleteUser = (user: any) => {
    console.log('Delete user:', user);
};

// Format date helper
const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
};

// Format currency helper
const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    }).format(amount);
};

// Code examples
const basicTableExample = [
    'import { Table, Thead, Tbody, Th, Td } from "@netblink/vue-components";',
    '',
    '<Table>',
    '  <Thead>',
    '    <tr>',
    '      <Th>Name</Th>',
    '      <Th>Email</Th>',
    '      <Th>Status</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody>',
    '    <tr v-for="user in users" :key="user.id">',
    '      <Td>{{ user.name }}</Td>',
    '      <Td>{{ user.email }}</Td>',
    '      <Td>{{ user.status }}</Td>',
    '    </tr>',
    '  </Tbody>',
    '</Table>'
];

const sortableTableExample = [
    '<Table>',
    '  <Thead>',
    '    <tr>',
    '      <Th sortable orderBy="name">Name</Th>',
    '      <Th sortable orderBy="email">Email</Th>',
    '      <Th sortable orderBy="created_at">Created</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody>',
    '    <tr v-for="user in users" :key="user.id">',
    '      <Td>{{ user.name }}</Td>',
    '      <Td>{{ user.email }}</Td>',
    '      <Td>{{ formatDate(user.created_at) }}</Td>',
    '    </tr>',
    '  </Tbody>',
    '</Table>'
];

const responsiveTableExample = [
    '<Table responsive>',
    '  <Thead>',
    '    <tr>',
    '      <Th>Name</Th>',
    '      <Th>Email</Th>',
    '      <Th>Status</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody>',
    '    <tr v-for="user in users" :key="user.id">',
    '      <Td label="Name">{{ user.name }}</Td>',
    '      <Td label="Email">{{ user.email }}</Td>',
    '      <Td label="Status">{{ user.status }}</Td>',
    '    </tr>',
    '  </Tbody>',
    '</Table>'
];

const enhancedTableExample = [
    'import { Table, Thead, Tbody, Th, Td, PrimaryButton, DangerButton } from "@netblink/vue-components";',
    '',
    '<!-- Enhanced table with features -->',
    '<Table striped hover>',
    '  <Thead>',
    '    <tr>',
    '      <Th>Name</Th>',
    '      <Th>Email</Th>',
    '      <Th>Status</Th>',
    '      <Th>Actions</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody>',
    '    <tr v-for="user in users" :key="user.id">',
    '      <Td>{{ user.name }}</Td>',
    '      <Td>{{ user.email }}</Td>',
    '      <Td>',
    '        <span :class="getStatusBadge(user.status)">',
    '          {{ user.status }}',
    '        </span>',
    '      </Td>',
    '      <Td>',
    '        <PrimaryButton @click="editUser(user)">Edit</PrimaryButton>',
    '        <DangerButton @click="deleteUser(user)">Delete</DangerButton>',
    '      </Td>',
    '    </tr>',
    '  </Tbody>',
    '</Table>'
];

const tableVariantsExample = [
    '<!-- Default table -->',
    '<Table variant="default">',
    '  <!-- content -->',
    '</Table>',
    '',
    '<!-- Minimal table -->',
    '<Table variant="minimal">',
    '  <!-- content -->',
    '</Table>',
    '',
    '<!-- Elevated table -->',
    '<Table variant="elevated" bordered>',
    '  <!-- content -->',
    '</Table>',
    '',
    '<!-- Striped table -->',
    '<Table striped hover>',
    '  <!-- content -->',
    '</Table>'
];

const stickyTableExample = [
    '<Table sticky>',
    '  <Thead>',
    '    <tr>',
    '      <Th>Name</Th>',
    '      <Th>Email</Th>',
    '      <Th>Status</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody>',
    '    <!-- Long content that scrolls -->',
    '  </Tbody>',
    '</Table>'
];

const composableExample = [
    'import { useTable, useTableSort } from "@netblink/vue-components";',
    '',
    'const { sort, getSortDirection, isSorted } = useTableSort();',
    '',
    'const {',
    '  rows,',
    '  pagination,',
    '  selected,',
    '  isLoading',
    '} = useTable({',
    '  resource: "users",',
    '  sortable: true,',
    '  selectable: true',
    '});'
];

// Props documentation — verified against src/components/Tables/types.ts and Table.vue/Th.vue/Td.vue
const tableProps = [
    // Appearance
    { prop: 'variant', type: "'default' | 'minimal' | 'elevated'", default: "'default'", description: 'Visual style preset' },
    { prop: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Cell text size' },
    { prop: 'striped', type: 'boolean', default: 'false', description: 'Alternate row colors' },
    { prop: 'bordered', type: 'boolean', default: 'false', description: 'Outer border + rounded corners' },
    { prop: 'hover', type: 'boolean', default: 'false', description: 'Row hover background' },
    { prop: 'sticky', type: 'boolean', default: 'false', description: 'Pin the header while scrolling (uses useStickyTableHeader)' },
    { prop: 'responsive', type: 'boolean', default: 'true', description: 'Stack cells into a label/value layout on small screens (works with Td `label`)' },
    { prop: 'separate', type: 'boolean', default: 'false', description: 'Render rows with vertical spacing (border-separate)' },
    // Data / pagination
    { prop: 'data', type: 'TableRow[]', default: '-', description: 'Optional — typically you compose rows via the Thead/Tbody slots instead' },
    { prop: 'columns', type: 'TableColumn[]', default: '-', description: 'Optional — only relevant for auto-generated headers' },
    { prop: 'pagination', type: 'TablePagination', default: '-', description: 'Laravel-style paginator payload; renders <Pagination> below the table' },
    { prop: 'showPagination', type: 'boolean', default: 'true', description: 'Show the pagination footer when `pagination` is set' },
    { prop: 'showPerPage', type: 'boolean', default: 'false', description: 'Show the per-page selector in the pagination footer' },
    { prop: 'defaultPerPage', type: 'number', default: '25', description: 'Initial per-page value' },
    { prop: 'loading', type: 'boolean', default: 'false', description: 'Render a loading state in Tbody' },
    { prop: 'emptyMessage', type: 'string', default: "'No records found'", description: 'Message shown when there are no rows' },
    { prop: 'loadingMessage', type: 'string', default: "'Loading...'", description: 'Message shown while loading' },
    // Collapsible
    { prop: 'collapsible', type: 'boolean', default: 'false', description: 'Render the table inside a collapsable section (uses collapseId for the trigger)' },
    { prop: 'collapseId', type: 'string', default: '-', description: 'DOM id used to wire the table to its external trigger' },
    // Legacy (accepted for backward compatibility)
    { prop: 'seperate / collapsable / collapse_id / links / overflow', type: '-', default: '-', description: 'Legacy aliases of the props above — kept for back-compat. Prefer the modern names.' },
];

const thProps = [
    { prop: 'orderBy', type: 'string', default: '-', description: 'Column key emitted to the sort store when this header is clicked' },
    { prop: 'column', type: 'string', default: '-', description: 'Alias for `orderBy` (used by useTableSort to identify the column)' },
    { prop: 'sortable', type: 'boolean', default: 'false', description: 'Render sort arrows and make the cell clickable (requires orderBy/column)' },
    { prop: 'align', type: "'left' | 'center' | 'right'", default: "'left'", description: 'Text alignment' },
    { prop: 'width', type: 'string', default: '-', description: 'Column width (Tailwind w-* token or any CSS value like "10rem")' },
    { prop: 'responsive', type: 'boolean', default: 'true', description: 'Mark this header as participating in responsive layout' },
];

const tdProps = [
    { prop: 'label', type: 'string', default: '-', description: 'On small screens the cell renders as "label: content" — useful for responsive tables' },
    { prop: 'align', type: "'left' | 'center' | 'right'", default: "'left'", description: 'Text alignment' },
    { prop: 'width', type: 'string', default: '-', description: 'Cell width (CSS value)' },
    { prop: 'nowrap', type: 'boolean', default: 'false', description: 'Prevent text wrapping in this cell' },
    { prop: 'responsive', type: 'boolean', default: 'true', description: 'Participate in responsive layout (paired with the parent Table)' },
];

const trProps = [
    { prop: 'selectable', type: 'boolean', default: 'false', description: 'Render a checkbox in the first cell to enable row selection' },
    { prop: 'selected', type: 'boolean', default: 'false', description: 'Whether the checkbox is checked' },
    { prop: 'hoverable', type: 'boolean', default: 'false', description: 'Apply hover styling on this row' },
    { prop: 'clickable', type: 'boolean', default: 'false', description: 'Cursor pointer + click-through styling' },
    { prop: 'variant', type: "'default' | 'success' | 'warning' | 'danger' | 'info'", default: "'default'", description: 'Row tinting variant' },
];
</script>

<template>
    <div class="space-y-12">
        <!-- Basic Table -->
        <section id="basic-table">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Basic Table
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    The basic table structure uses Table, Thead, Tbody, Th, and Td components for full control over the table layout.
                </p>

                <!-- Basic Table Example -->
                <Table class="mb-6">
                    <Thead>
                        <tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Status</Th>
                            <Th>Role</Th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr v-for="user in users.slice(0, 5)" :key="user.id">
                            <Td>{{ user.name }}</Td>
                            <Td>{{ user.email }}</Td>
                            <Td>
                                <span :class="['px-2 py-1 rounded-full text-xs font-medium', getStatusBadge(user.status)]">
                                    {{ user.status }}
                                </span>
                            </Td>
                            <Td>{{ user.role }}</Td>
                        </tr>
                    </Tbody>
                </Table>

                <CodePreview :code="basicTableExample" />
            </div>
        </section>

        <!-- Sortable Table -->
        <section id="sortable-table">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Sortable Table
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Add sorting functionality to table headers. Works with Inertia.js for server-side sorting.
                </p>

                <!-- Sortable Table Example -->
                <Table class="mb-6">
                    <Thead>
                        <tr>
                            <Th sortable orderBy="name">Name</Th>
                            <Th sortable orderBy="email">Email</Th>
                            <Th sortable orderBy="role">Role</Th>
                            <Th sortable orderBy="created_at">Created</Th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr v-for="user in users.slice(0, 5)" :key="user.id">
                            <Td>{{ user.name }}</Td>
                            <Td>{{ user.email }}</Td>
                            <Td>{{ user.role }}</Td>
                            <Td>{{ formatDate(user.created_at) }}</Td>
                        </tr>
                    </Tbody>
                </Table>

                <CodePreview :code="sortableTableExample" />
            </div>
        </section>

        <!-- Responsive Table -->
        <section id="responsive-table">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Responsive Table
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Tables automatically adapt to smaller screens. Use the 'label' prop on Td components for better mobile display.
                </p>

                <!-- Responsive Table Example -->
                <Table responsive class="mb-6">
                    <Thead>
                        <tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Status</Th>
                            <Th>Role</Th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr v-for="user in users.slice(0, 3)" :key="user.id">
                            <Td label="Name">{{ user.name }}</Td>
                            <Td label="Email">{{ user.email }}</Td>
                            <Td label="Status">
                                <span :class="['px-2 py-1 rounded-full text-xs font-medium', getStatusBadge(user.status)]">
                                    {{ user.status }}
                                </span>
                            </Td>
                            <Td label="Role">{{ user.role }}</Td>
                        </tr>
                    </Tbody>
                </Table>

                <CodePreview :code="responsiveTableExample" />
            </div>
        </section>

        <!-- Enhanced Table -->
        <section id="enhanced-table">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Enhanced Table
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    The EnhancedTable component provides auto-column generation, built-in sorting, selection, and custom cell rendering.
                    Here's an example using a standard table with enhanced features:
                </p>

                <!-- Enhanced Table Example -->
                <div class="mb-6">
                    <Table striped hover>
                        <Thead>
                            <tr>
                                <Th>ID</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Status</Th>
                                <Th>Role</Th>
                                <Th>Created</Th>
                                <Th>Actions</Th>
                            </tr>
                        </Thead>
                        <Tbody>
                            <tr v-for="user in users.slice(0, 5)" :key="user.id" class="hover:bg-gray-50">
                                <Td>{{ user.id }}</Td>
                                <Td>{{ user.name }}</Td>
                                <Td>{{ user.email }}</Td>
                                <Td>
                                    <span :class="['px-2 py-1 rounded-full text-xs font-medium', getStatusBadge(user.status)]">
                                        {{ user.status }}
                                    </span>
                                </Td>
                                <Td>{{ user.role }}</Td>
                                <Td>{{ formatDate(user.created_at) }}</Td>
                                <Td>
                                    <div class="flex gap-2">
                                        <PrimaryButton @click="editUser(user)">Edit</PrimaryButton>
                                        <DangerButton @click="deleteUser(user)">Delete</DangerButton>
                                    </div>
                                </Td>
                            </tr>
                        </Tbody>
                    </Table>
                </div>

                <!-- Simple Auto-Generated Table Example -->
                <div class="mb-6">
                    <h4 class="mb-2 font-medium">Auto-Generated Columns (Simple Data)</h4>
                    <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        Here's how EnhancedTable can auto-generate columns from simple data:
                    </p>
                    <Table striped>
                        <Thead>
                            <tr>
                                <Th v-for="key in Object.keys(users[0])" :key="key">
                                    {{ key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ') }}
                                </Th>
                            </tr>
                        </Thead>
                        <Tbody>
                            <tr v-for="user in users.slice(0, 3)" :key="user.id">
                                <Td v-for="key in Object.keys(user)" :key="key">
                                    <template v-if="key === 'status'">
                                        <span :class="['px-2 py-1 rounded-full text-xs font-medium', getStatusBadge(user[key])]">
                                            {{ user[key] }}
                                        </span>
                                    </template>
                                    <template v-else-if="key === 'created_at'">
                                        {{ formatDate(user[key]) }}
                                    </template>
                                    <template v-else>
                                        {{ user[key] }}
                                    </template>
                                </Td>
                            </tr>
                        </Tbody>
                    </Table>
                </div>

                <CodePreview :code="enhancedTableExample" />
            </div>
        </section>

        <!-- Table Variants -->
        <section id="table-variants">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Table Variants
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Different table styling variants to match your design system.
                </p>

                <!-- Variant matrix — one rendered example, the rest demonstrated via the code preview. -->
                <div class="mb-6 grid gap-6 lg:grid-cols-2">
                    <div>
                        <h4 class="mb-2 font-medium">variant="default"</h4>
                        <Table variant="default">
                            <Thead>
                                <tr>
                                    <Th>Order ID</Th>
                                    <Th>Customer</Th>
                                    <Th>Total</Th>
                                </tr>
                            </Thead>
                            <Tbody>
                                <tr v-for="order in orders.slice(0, 3)" :key="order.id">
                                    <Td>#{{ order.id }}</Td>
                                    <Td>{{ order.customer }}</Td>
                                    <Td>{{ formatCurrency(order.total) }}</Td>
                                </tr>
                            </Tbody>
                        </Table>
                    </div>
                    <div>
                        <h4 class="mb-2 font-medium">striped + hover</h4>
                        <Table striped hover>
                            <Thead>
                                <tr>
                                    <Th>Order ID</Th>
                                    <Th>Customer</Th>
                                    <Th>Total</Th>
                                </tr>
                            </Thead>
                            <Tbody>
                                <tr v-for="order in orders.slice(0, 3)" :key="order.id">
                                    <Td>#{{ order.id }}</Td>
                                    <Td>{{ order.customer }}</Td>
                                    <Td>{{ formatCurrency(order.total) }}</Td>
                                </tr>
                            </Tbody>
                        </Table>
                    </div>
                    <div>
                        <h4 class="mb-2 font-medium">variant="minimal"</h4>
                        <Table variant="minimal">
                            <Thead>
                                <tr>
                                    <Th>Order ID</Th>
                                    <Th>Customer</Th>
                                    <Th>Total</Th>
                                </tr>
                            </Thead>
                            <Tbody>
                                <tr v-for="order in orders.slice(0, 3)" :key="order.id">
                                    <Td>#{{ order.id }}</Td>
                                    <Td>{{ order.customer }}</Td>
                                    <Td>{{ formatCurrency(order.total) }}</Td>
                                </tr>
                            </Tbody>
                        </Table>
                    </div>
                    <div>
                        <h4 class="mb-2 font-medium">variant="elevated" bordered</h4>
                        <Table variant="elevated" bordered>
                            <Thead>
                                <tr>
                                    <Th>Order ID</Th>
                                    <Th>Customer</Th>
                                    <Th>Total</Th>
                                </tr>
                            </Thead>
                            <Tbody>
                                <tr v-for="order in orders.slice(0, 3)" :key="order.id">
                                    <Td>#{{ order.id }}</Td>
                                    <Td>{{ order.customer }}</Td>
                                    <Td>{{ formatCurrency(order.total) }}</Td>
                                </tr>
                            </Tbody>
                        </Table>
                    </div>
                </div>

                <CodePreview :code="tableVariantsExample" />
            </div>
        </section>

        <!-- Sticky Header -->
        <section id="sticky-header">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Sticky Header
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Keep table headers visible while scrolling through long tables.
                </p>

                <!-- Sticky Header Example -->
                <div class="max-h-96 overflow-y-auto">
                    <Table sticky>
                        <Thead>
                            <tr>
                                <Th>ID</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Status</Th>
                                <Th>Role</Th>
                                <Th>Created</Th>
                            </tr>
                        </Thead>
                        <Tbody>
                            <tr v-for="(user, index) in [...users, ...users, ...users]" :key="`sticky-${user.id}-${index}`">
                                <Td>{{ user.id }}</Td>
                                <Td>{{ user.name }}</Td>
                                <Td>{{ user.email }}</Td>
                                <Td>
                                    <span :class="['px-2 py-1 rounded-full text-xs font-medium', getStatusBadge(user.status)]">
                                        {{ user.status }}
                                    </span>
                                </Td>
                                <Td>{{ user.role }}</Td>
                                <Td>{{ formatDate(user.created_at) }}</Td>
                            </tr>
                        </Tbody>
                    </Table>
                </div>

                <CodePreview :code="stickyTableExample" />
            </div>
        </section>

        <!-- Using Composables -->
        <section id="composables">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Using Table Composables
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Use table composables for advanced functionality like sorting, selection, and Inertia integration.
                </p>

                <!-- Composable Example -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-900/40 rounded-lg">
                    <h4 class="mb-2 font-medium">Table Composables Demo:</h4>
                    <div class="text-sm text-gray-600 dark:text-gray-400">
                        <p>Sort State: {{ sortState ? `${sortState.column} ${sortState.direction}` : 'None' }}</p>
                        <p>Available Functions: sort(), getSortDirection(), isSorted()</p>
                        <p>Mock Data Loaded: {{ users.length }} users, {{ orders.length }} orders</p>
                    </div>
                </div>

                <CodePreview :code="composableExample" />
            </div>
        </section>

        <!-- Props Documentation -->
        <section id="props">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Component Props
            </h3>

            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <CollapsableSection header="Table Props" class="mb-6">
                    <PropsTable :rows="tableProps" />
                </CollapsableSection>

                <CollapsableSection header="Th (Table Header Cell) Props" class="mb-6">
                    <PropsTable :rows="thProps" />
                </CollapsableSection>

                <CollapsableSection header="Td (Table Cell) Props" class="mb-6">
                    <PropsTable :rows="tdProps" />
                </CollapsableSection>

                <CollapsableSection header="Tr (Table Row) Props">
                    <PropsTable :rows="trProps" />
                </CollapsableSection>
            </div>
        </section>

        <!-- Migration / back-compat notes -->
        <section id="migration">
            <CollapsableSection header="Migration & back-compat notes">
                <p class="mb-4 text-gray-600 dark:text-gray-400">All older table code still works; these are the modern equivalents:</p>
                <ul class="list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li><code>seperate</code> → <code>separate</code></li>
                    <li><code>collapsable</code> → <code>collapsible</code></li>
                    <li><code>collapse_id</code> → <code>collapseId</code></li>
                    <li><code>links</code> (array) → <code>pagination</code> (Laravel paginator payload)</li>
                </ul>
            </CollapsableSection>
        </section>
    </div>
</template>
