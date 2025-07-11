<script setup lang="ts">
import { ref, computed } from 'vue';
import {
    H2,
    Table,
    Thead,
    Tbody,
    Th,
    Td,
    Tr,
    EnhancedTable,
    PrimaryButton,
    SecondaryButton,
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
    return badges[status as keyof typeof badges] || 'bg-gray-100 text-gray-800';
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

// Props documentation
const tableProps = [
    { prop: 'data', type: 'Array', default: '[]', description: 'Array of data objects to display' },
    { prop: 'columns', type: 'Array', default: '[]', description: 'Column definitions for auto-generated tables' },
    { prop: 'sortable', type: 'Boolean', default: 'false', description: 'Enable sorting functionality' },
    { prop: 'selectable', type: 'Boolean', default: 'false', description: 'Enable row selection' },
    { prop: 'responsive', type: 'Boolean', default: 'true', description: 'Enable responsive design' },
    { prop: 'striped', type: 'Boolean', default: 'false', description: 'Alternate row colors' },
    { prop: 'bordered', type: 'Boolean', default: 'false', description: 'Add table borders' },
    { prop: 'hover', type: 'Boolean', default: 'false', description: 'Enable hover effects' },
    { prop: 'sticky', type: 'Boolean', default: 'false', description: 'Make header sticky on scroll' },
    { prop: 'size', type: 'String', default: 'md', description: 'Table size: sm, md, lg' },
    { prop: 'variant', type: 'String', default: 'default', description: 'Table variant: default, minimal, elevated' },
    { prop: 'emptyMessage', type: 'String', default: 'No records found', description: 'Message shown when no data' },
    { prop: 'loading', type: 'Boolean', default: 'false', description: 'Show loading state' }
];

const thProps = [
    { prop: 'orderBy', type: 'String', default: 'null', description: 'Column key for sorting' },
    { prop: 'sortable', type: 'Boolean', default: 'false', description: 'Enable sorting for this column' },
    { prop: 'align', type: 'String', default: 'left', description: 'Text alignment: left, center, right' },
    { prop: 'width', type: 'String', default: 'auto', description: 'Column width (CSS value)' }
];

const tdProps = [
    { prop: 'label', type: 'String', default: 'null', description: 'Label for responsive display' },
    { prop: 'align', type: 'String', default: 'left', description: 'Text alignment: left, center, right' },
    { prop: 'width', type: 'String', default: 'auto', description: 'Cell width (CSS value)' },
    { prop: 'nowrap', type: 'Boolean', default: 'false', description: 'Prevent text wrapping' }
];
</script>

<template>
    <div class="space-y-12">
        <!-- Basic Table -->
        <section id="basic-table">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">
                Basic Table
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
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
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">
                Sortable Table
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
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
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">
                Responsive Table
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
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
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">
                Enhanced Table
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
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
                    <p class="mb-4 text-sm text-gray-600">
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
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">
                Table Variants
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
                    Different table styling variants to match your design system.
                </p>

                <!-- Default Variant -->
                <div class="mb-6">
                    <h4 class="mb-2 font-medium">Default</h4>
                    <Table variant="default">
                        <Thead>
                            <tr>
                                <Th>Order ID</Th>
                                <Th>Customer</Th>
                                <Th>Total</Th>
                                <Th>Status</Th>
                            </tr>
                        </Thead>
                        <Tbody>
                            <tr v-for="order in orders.slice(0, 3)" :key="order.id">
                                <Td>#{{ order.id }}</Td>
                                <Td>{{ order.customer }}</Td>
                                <Td>{{ formatCurrency(order.total) }}</Td>
                                <Td>
                                    <span :class="['px-2 py-1 rounded-full text-xs font-medium', getStatusBadge(order.status)]">
                                        {{ order.status }}
                                    </span>
                                </Td>
                            </tr>
                        </Tbody>
                    </Table>
                </div>

                <!-- Minimal Variant -->
                <div class="mb-6">
                    <h4 class="mb-2 font-medium">Minimal</h4>
                    <Table variant="minimal">
                        <Thead>
                            <tr>
                                <Th>Order ID</Th>
                                <Th>Customer</Th>
                                <Th>Total</Th>
                                <Th>Status</Th>
                            </tr>
                        </Thead>
                        <Tbody>
                            <tr v-for="order in orders.slice(0, 3)" :key="order.id">
                                <Td>#{{ order.id }}</Td>
                                <Td>{{ order.customer }}</Td>
                                <Td>{{ formatCurrency(order.total) }}</Td>
                                <Td>
                                    <span :class="['px-2 py-1 rounded-full text-xs font-medium', getStatusBadge(order.status)]">
                                        {{ order.status }}
                                    </span>
                                </Td>
                            </tr>
                        </Tbody>
                    </Table>
                </div>

                <!-- Elevated Variant -->
                <div class="mb-6">
                    <h4 class="mb-2 font-medium">Elevated</h4>
                    <Table variant="elevated" bordered>
                        <Thead>
                            <tr>
                                <Th>Order ID</Th>
                                <Th>Customer</Th>
                                <Th>Total</Th>
                                <Th>Status</Th>
                            </tr>
                        </Thead>
                        <Tbody>
                            <tr v-for="order in orders.slice(0, 3)" :key="order.id">
                                <Td>#{{ order.id }}</Td>
                                <Td>{{ order.customer }}</Td>
                                <Td>{{ formatCurrency(order.total) }}</Td>
                                <Td>
                                    <span :class="['px-2 py-1 rounded-full text-xs font-medium', getStatusBadge(order.status)]">
                                        {{ order.status }}
                                    </span>
                                </Td>
                            </tr>
                        </Tbody>
                    </Table>
                </div>

                <!-- Striped and Hover -->
                <div class="mb-6">
                    <h4 class="mb-2 font-medium">Striped with Hover</h4>
                    <Table striped hover>
                        <Thead>
                            <tr>
                                <Th>Order ID</Th>
                                <Th>Customer</Th>
                                <Th>Total</Th>
                                <Th>Status</Th>
                            </tr>
                        </Thead>
                        <Tbody>
                            <tr v-for="order in orders.slice(0, 3)" :key="order.id">
                                <Td>#{{ order.id }}</Td>
                                <Td>{{ order.customer }}</Td>
                                <Td>{{ formatCurrency(order.total) }}</Td>
                                <Td>
                                    <span :class="['px-2 py-1 rounded-full text-xs font-medium', getStatusBadge(order.status)]">
                                        {{ order.status }}
                                    </span>
                                </Td>
                            </tr>
                        </Tbody>
                    </Table>
                </div>

                <CodePreview :code="tableVariantsExample" />
            </div>
        </section>

        <!-- Sticky Header -->
        <section id="sticky-header">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">
                Sticky Header
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
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
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">
                Using Table Composables
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
                    Use table composables for advanced functionality like sorting, selection, and Inertia integration.
                </p>

                <!-- Composable Example -->
                <div class="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 class="mb-2 font-medium">Table Composables Demo:</h4>
                    <div class="text-sm text-gray-600">
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
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">
                Component Props
            </h3>

            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <CollapsableSection header="Table Props" class="mb-6">
                    <PropsTable :rows="tableProps" />
                </CollapsableSection>

                <CollapsableSection header="Th (Table Header) Props" class="mb-6">
                    <PropsTable :rows="thProps" />
                </CollapsableSection>

                <CollapsableSection header="Td (Table Cell) Props">
                    <PropsTable :rows="tdProps" />
                </CollapsableSection>
            </div>
        </section>

        <!-- Migration Guide -->
        <section id="migration">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">
                Migration Guide
            </h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
                    All existing table implementations continue to work. Here are the improvements and new features available:
                </p>

                <div class="space-y-4">
                    <div>
                        <h4 class="font-medium text-green-600">✅ Backward Compatible</h4>
                        <p class="text-sm text-gray-600">All existing table code works without changes</p>
                    </div>
                    
                    <div>
                        <h4 class="font-medium text-blue-600">🆕 New Features</h4>
                        <ul class="text-sm text-gray-600 list-disc list-inside">
                            <li>EnhancedTable with auto-column generation</li>
                            <li>Table composables for advanced functionality</li>
                            <li>Better TypeScript support</li>
                            <li>Improved responsive design</li>
                            <li>Multiple table variants</li>
                            <li>Row selection capabilities</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="font-medium text-yellow-600">🔄 Recommended Updates</h4>
                        <ul class="text-sm text-gray-600 list-disc list-inside">
                            <li>Use <code>separate</code> instead of <code>seperate</code></li>
                            <li>Use <code>collapsible</code> instead of <code>collapsable</code></li>
                            <li>Consider using EnhancedTable for new implementations</li>
                            <li>Leverage composables for complex table logic</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
