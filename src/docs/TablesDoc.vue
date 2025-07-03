<script setup lang="ts">
import { ref } from 'vue';
import { Table, Thead, Tbody, Th, Td, CodePreview, CollapsableSection, PropsTable } from '../index';

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', created: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', created: '2024-01-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive', created: '2024-02-01' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active', created: '2024-02-10' },
];

const expandedRows = ref<number[]>([]);
const toggleRow = (id: number) => {
    const idx = expandedRows.value.indexOf(id);
    if (idx > -1) expandedRows.value.splice(idx, 1);
    else expandedRows.value.push(id);
};
const isExpanded = (id: number) => expandedRows.value.includes(id);

const basicTableCode = [
    '<Table :responsive="true">',
    '  <Thead>',
    '    <tr>',
    '      <Th>Name</Th>',
    '      <Th>Email</Th>',
    '      <Th>Role</Th>',
    '      <Th>Status</Th>',
    '      <Th>Created</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody :ignoreDefer="true">',
    '    <tr v-for="user in users" :key="user.id">',
    '      <Td>{{ user.name }}</Td>',
    '      <Td>{{ user.email }}</Td>',
    '      <Td>{{ user.role }}</Td>',
    '      <Td>{{ user.status }}</Td>',
    '      <Td>{{ user.created }}</Td>',
    '    </tr>',
    '  </Tbody>',
    '</Table>',
];

const collapsibleTableCode = [
    '<Table :responsive="true" collapsable>',
    '  <Thead>',
    '    <tr>',
    '      <Th></Th>',
    '      <Th>Name</Th>',
    '      <Th>Email</Th>',
    '      <Th>Role</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody :ignoreDefer="true">',
    '    <template v-for="user in users" :key="user.id">',
    '      <tr>',
    '        <Td><button @click="toggleRow(user.id)">Toggle</button></Td>',
    '        <Td>{{ user.name }}</Td>',
    '        <Td>{{ user.email }}</Td>',
    '        <Td>{{ user.role }}</Td>',
    '      </tr>',
    '      <tr v-if="isExpanded(user.id)">',
    '        <Td colspan="4">Extra details for {{ user.name }}</Td>',
    '      </tr>',
    '    </template>',
    '  </Tbody>',
    '</Table>',
];

const sortableTableCode = [
    '<Table :responsive="true">',
    '  <Thead>',
    '    <tr>',
    '      <Th orderBy="name">Name</Th>',
    '      <Th orderBy="email">Email</Th>',
    '      <Th orderBy="role">Role</Th>',
    '      <Th orderBy="status">Status</Th>',
    '      <Th orderBy="created">Created</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody :ignoreDefer="true">',
    '    <tr v-for="user in users" :key="user.id">',
    '      <Td>{{ user.name }}</Td>',
    '      <Td>{{ user.email }}</Td>',
    '      <Td>{{ user.role }}</Td>',
    '      <Td>{{ user.status }}</Td>',
    '      <Td>{{ user.created }}</Td>',
    '    </tr>',
    '  </Tbody>',
    '</Table>',
];

const stickyTableCode = [
    '<Table :responsive="true" :sticky="true">',
    '  <Thead>',
    '    <tr>',
    '      <Th>Name</Th>',
    '      <Th>Email</Th>',
    '      <Th>Role</Th>',
    '      <Th>Status</Th>',
    '      <Th>Created</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody :ignoreDefer="true">',
    '    <tr v-for="user in users" :key="user.id">',
    '      <Td>{{ user.name }}</Td>',
    '      <Td>{{ user.email }}</Td>',
    '      <Td>{{ user.role }}</Td>',
    '      <Td>{{ user.status }}</Td>',
    '      <Td>{{ user.created }}</Td>',
    '    </tr>',
    '  </Tbody>',
    '</Table>',
];

const paginationTableCode = [
    '<Table :responsive="true" :links="[',
    '  { url: "#", label: "1", active: true },',
    '  { url: "#", label: "2", active: false },',
    '  { url: "#", label: "Next", active: false },',
    ']">',
    '  <Thead>',
    '    <tr>',
    '      <Th>Name</Th>',
    '      <Th>Email</Th>',
    '      <Th>Role</Th>',
    '      <Th>Status</Th>',
    '      <Th>Created</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody :ignoreDefer="true">',
    '    <tr v-for="user in users" :key="user.id">',
    '      <Td>{{ user.name }}</Td>',
    '      <Td>{{ user.email }}</Td>',
    '      <Td>{{ user.role }}</Td>',
    '      <Td>{{ user.status }}</Td>',
    '      <Td>{{ user.created }}</Td>',
    '    </tr>',
    '  </Tbody>',
    '</Table>',
];

const tableProps = [
    { prop: 'total', type: 'number', default: 'undefined', description: 'Total records count' },
    { prop: 'links', type: 'any[]', default: 'undefined', description: 'Pagination links array' },
    { prop: 'collapsable', type: 'boolean', default: 'false', description: 'Enable collapsible rows' },
    { prop: 'collapse_id', type: 'string', default: "'collapse'", description: 'Collapse group id' },
    { prop: 'sticky', type: 'boolean', default: 'true', description: 'Enable sticky/floating header' },
    { prop: 'overflow', type: 'boolean', default: 'true', description: 'Enable horizontal scroll' },
    { prop: 'seperate', type: 'boolean', default: 'false', description: 'Use separated rows' },
    { prop: 'showPerPage', type: 'boolean', default: 'false', description: 'Show per-page selector' },
    { prop: 'defaultPerPage', type: 'number', default: '100', description: 'Default per-page value' },
    { prop: 'responsive', type: 'boolean', default: 'true', description: 'Enable responsive/mobile layout' },
    { prop: 'ignoreDefer', type: 'boolean', default: 'false', description: 'Ignore deferred loading (testing only)' },
];
</script>

<template>
    <div class="space-y-12">
        <section id="table-basic">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Basic Table</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">A simple, responsive table for displaying tabular data.</p>
                <Table :responsive="true">
                    <Thead>
                        <tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Role</Th>
                            <Th>Status</Th>
                            <Th>Created</Th>
                        </tr>
                    </Thead>
                    <Tbody :ignoreDefer="true">
                        <tr v-for="user in users" :key="user.id">
                            <Td>{{ user.name }}</Td>
                            <Td>{{ user.email }}</Td>
                            <Td>{{ user.role }}</Td>
                            <Td>{{ user.status }}</Td>
                            <Td>{{ user.created }}</Td>
                        </tr>
                    </Tbody>
                </Table>
                <CodePreview :code="basicTableCode" />
            </div>
        </section>

        <section id="table-collapsible">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Collapsible Rows</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Expand rows to show additional details.</p>
                <Table :responsive="true" collapsable>
                    <Thead>
                        <tr>
                            <Th></Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Role</Th>
                        </tr>
                    </Thead>
                    <Tbody :ignoreDefer="true">
                        <template v-for="user in users" :key="user.id">
                            <tr>
                                <Td><button @click="toggleRow(user.id)">Toggle</button></Td>
                                <Td>{{ user.name }}</Td>
                                <Td>{{ user.email }}</Td>
                                <Td>{{ user.role }}</Td>
                            </tr>
                            <tr v-if="isExpanded(user.id)">
                                <Td colspan="4">Extra details for {{ user.name }}</Td>
                            </tr>
                        </template>
                    </Tbody>
                </Table>
                <CodePreview :code="collapsibleTableCode" />
            </div>
        </section>

        <section id="table-sortable">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Sortable Columns</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Click column headers to sort the table (requires backend support).</p>
                <Table :responsive="true">
                    <Thead>
                        <tr>
                            <Th orderBy="name">Name</Th>
                            <Th orderBy="email">Email</Th>
                            <Th orderBy="role">Role</Th>
                            <Th orderBy="status">Status</Th>
                            <Th orderBy="created">Created</Th>
                        </tr>
                    </Thead>
                    <Tbody :ignoreDefer="true">
                        <tr v-for="user in users" :key="user.id">
                            <Td>{{ user.name }}</Td>
                            <Td>{{ user.email }}</Td>
                            <Td>{{ user.role }}</Td>
                            <Td>{{ user.status }}</Td>
                            <Td>{{ user.created }}</Td>
                        </tr>
                    </Tbody>
                </Table>
                <CodePreview :code="sortableTableCode" />
            </div>
        </section>

        <section id="table-sticky">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Sticky Header</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
                    The table header stays visible as you scroll (set
                    <code>sticky</code>
                    prop).
                </p>
                <Table :responsive="true" :sticky="true">
                    <Thead>
                        <tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Role</Th>
                            <Th>Status</Th>
                            <Th>Created</Th>
                        </tr>
                    </Thead>
                    <Tbody :ignoreDefer="true">
                        <tr v-for="user in users" :key="user.id">
                            <Td>{{ user.name }}</Td>
                            <Td>{{ user.email }}</Td>
                            <Td>{{ user.role }}</Td>
                            <Td>{{ user.status }}</Td>
                            <Td>{{ user.created }}</Td>
                        </tr>
                    </Tbody>
                </Table>
                <CodePreview :code="stickyTableCode" />
            </div>
        </section>

        <section id="table-pagination">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Pagination</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
                    Show pagination controls using the
                    <code>links</code>
                    prop.
                </p>
                <Table
                    :responsive="true"
                    :links="[
                        { url: '#', label: '1', active: true },
                        { url: '#', label: '2', active: false },
                        { url: '#', label: 'Next', active: false },
                    ]"
                >
                    <Thead>
                        <tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Role</Th>
                            <Th>Status</Th>
                            <Th>Created</Th>
                        </tr>
                    </Thead>
                    <Tbody :ignoreDefer="true">
                        <tr v-for="user in users" :key="user.id">
                            <Td>{{ user.name }}</Td>
                            <Td>{{ user.email }}</Td>
                            <Td>{{ user.role }}</Td>
                            <Td>{{ user.status }}</Td>
                            <Td>{{ user.created }}</Td>
                        </tr>
                    </Tbody>
                </Table>
                <CodePreview :code="paginationTableCode" />
            </div>
        </section>

        <section id="table-props">
            <CollapsableSection header="Table Props & Parameters" class="mt-6">
                <PropsTable :rows="tableProps" />
            </CollapsableSection>
        </section>
    </div>
</template>
