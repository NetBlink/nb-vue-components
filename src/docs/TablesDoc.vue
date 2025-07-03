<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { H2, Table, Thead, Tbody, Th, Td, TableCollapse, CodePreview } from '../index';

// Sample data
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', created: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', created: '2024-01-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive', created: '2024-02-01' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active', created: '2024-02-10' },
];

const expandedRows = ref<number[]>([]);

// Handlers
const toggleRow = (id: number) => {
    const index = expandedRows.value.indexOf(id);
    if (index > -1) {
        expandedRows.value.splice(index, 1);
    } else {
        expandedRows.value.push(id);
    }
};

const isExpanded = (id: number) => {
    return expandedRows.value.includes(id);
};

const handleEdit = (user: any) => {
    console.log('Edit user:', user);
};

const handleDelete = (user: any) => {
    console.log('Delete user:', user);
};

// Code examples
const basicTableExamples = [
    '<Table>',
    '  <Thead>',
    '    <tr>',
    '      <Th>Name</Th>',
    '      <Th>Email</Th>',
    '      <Th>Role</Th>',
    '      <Th>Actions</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody>',
    '    <tr v-for="user in users" :key="user.id">',
    '      <Td>{{ user.name }}</Td>',
    '      <Td>{{ user.email }}</Td>',
    '      <Td>{{ user.role }}</Td>',
    '      <Td>',
    '        <PrimaryButton @click="edit(user)">Edit</PrimaryButton>',
    '      </Td>',
    '    </tr>',
    '  </Tbody>',
    '</Table>',
];

// Props data for tables - simplified
const tableProps = ref([
    { prop: 'class', type: 'string', default: '', description: 'Additional CSS classes for the table' },
    { prop: 'responsive', type: 'boolean', default: 'true', description: 'Enable responsive scrolling' },
]);

const collapsibleTableExamples = [
    '<Table>',
    '  <Thead>',
    '    <tr>',
    '      <Th class="w-8"></Th> <!-- Toggle column -->',
    '      <Th>Name</Th>',
    '      <Th>Email</Th>',
    '      <Th>Role</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody skipDeferred>',
    '    <template v-for="user in users" :key="user.id">',
    '      <!-- Main row -->',
    '      <tr>',
    '        <Td>',
    '          <button @click="toggleRow(user.id)">',
    '            <!-- Toggle icon -->',
    '          </button>',
    '        </Td>',
    '        <Td>{{ user.name }}</Td>',
    '        <Td>{{ user.email }}</Td>',
    '        <Td>{{ user.role }}</Td>',
    '      </tr>',
    '      <!-- Animated collapsible row -->',
    '      <TableCollapse :expanded="isExpanded(user.id)">',
    '        <div class="p-4">',
    '          <!-- Expanded content with smooth animation -->',
    '        </div>',
    '      </TableCollapse>',
    '    </template>',
    '  </Tbody>',
    '</Table>',
];

const sortableTableExamples = [
    '<Table>',
    '  <Thead>',
    '    <tr>',
    '      <Th orderBy="name">Name</Th>',
    '      <Th orderBy="email">Email</Th>',
    '      <Th orderBy="role">Role</Th>',
    '      <Th orderBy="status">Status</Th>',
    '      <Th orderBy="created">Created</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody skipDeferred>',
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

const stickyTableExamples = [
    '<Table :sticky="true">',
    '  <Thead>',
    '    <tr>',
    '      <Th>Name</Th>',
    '      <Th>Email</Th>',
    '      <Th>Role</Th>',
    '      <Th>Status</Th>',
    '      <Th>Created</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody skipDeferred>',
    '    <tr v-for="user in users">',
    '      <Td>{{ user.name }}</Td>',
    '      <Td>{{ user.email }}</Td>',
    '      <Td>{{ user.role }}</Td>',
    '      <Td>{{ user.status }}</Td>',
    '      <Td>{{ user.created }}</Td>',
    '    </tr>',
    '  </Tbody>',
    '</Table>',
];

const paginationTableExamples = [
    '<Table :links="[',
    '  { url: "#", label: "1", active: true },',
    '  { url: "#", label: "2", active: false },',
    '  { url: "#", label: "3", active: false },',
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
    '  <Tbody skipDeferred>',
    '    <tr v-for="user in users">',
    '      <Td>{{ user.name }}</Td>',
    '      <Td>{{ user.email }}</Td>',
    '      <Td>{{ user.role }}</Td>',
    '      <Td>{{ user.status }}</Td>',
    '      <Td>{{ user.created }}</Td>',
    '    </tr>',
    '  </Tbody>',
    '</Table>',
];
</script>

<template>
    <div class="space-y-12">
        <!-- Basic Table -->
        <section id="basic-table">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Basic Table</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">A simple table implementation with consistent styling and proper semantic structure.</p>

                <div class="mb-6">
                    <Table>
                        <Thead>
                            <tr>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Role</Th>
                                <Th>Status</Th>
                                <Th>Created</Th>
                            </tr>
                        </Thead>
                        <Tbody skipDeferred>
                            <tr v-for="user in users" :key="user.id">
                                <Td>{{ user.name }}</Td>
                                <Td>{{ user.email }}</Td>
                                <Td>
                                    <span
                                        class="inline-flex rounded-full px-2 py-1 text-xs font-semibold"
                                        :class="{
                                            'bg-blue-100 text-blue-800': user.role === 'Admin',
                                            'bg-green-100 text-green-800': user.role === 'Editor',
                                            'bg-gray-100 text-gray-800': user.role === 'User',
                                        }"
                                    >
                                        {{ user.role }}
                                    </span>
                                </Td>
                                <Td>
                                    <span
                                        class="inline-flex rounded-full px-2 py-1 text-xs font-semibold"
                                        :class="{
                                            'bg-green-100 text-green-800': user.status === 'Active',
                                            'bg-red-100 text-red-800': user.status === 'Inactive',
                                        }"
                                    >
                                        {{ user.status }}
                                    </span>
                                </Td>
                                <Td>{{ user.created }}</Td>
                            </tr>
                        </Tbody>
                    </Table>
                </div>

                <CodePreview :code="basicTableExamples" />
            </div>
        </section>

        <!-- Collapsible Table -->
        <section id="collapsible-table">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Collapsible Table</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">Tables with expandable rows for showing additional details. Click the arrow to expand rows.</p>

                <div class="mb-6">
                    <Table>
                        <Thead>
                            <tr>
                                <Th class="w-8"></Th>
                                <!-- Collapse toggle column -->
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Role</Th>
                            </tr>
                        </Thead>
                        <Tbody skipDeferred>
                            <template v-for="user in users.slice(0, 2)" :key="user.id">
                                <!-- Main row with toggle button -->
                                <tr class="hover:bg-gray-50">
                                    <Td>
                                        <button
                                            @click="toggleRow(user.id)"
                                            class="flex h-6 w-6 items-center justify-center text-gray-400 transition-colors hover:text-gray-600"
                                        >
                                            <FontAwesomeIcon
                                                :icon="faChevronRight"
                                                class="h-4 w-4 transition-transform duration-200"
                                                :class="{ 'rotate-90': isExpanded(user.id) }"
                                            />
                                        </button>
                                    </Td>
                                    <Td>{{ user.name }}</Td>
                                    <Td>{{ user.email }}</Td>
                                    <Td>{{ user.role }}</Td>
                                </tr>

                                <!-- Collapsible row with details using TableCollapse component -->
                                <TableCollapse :expanded="isExpanded(user.id)">
                                    <div class="space-y-3 p-4">
                                        <h4 class="font-semibold text-gray-800">User Details</h4>
                                        <div class="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <span class="font-medium text-gray-600">ID:</span>
                                                <span class="ml-2">{{ user.id }}</span>
                                            </div>
                                            <div>
                                                <span class="font-medium text-gray-600">Status:</span>
                                                <span class="ml-2">{{ user.status }}</span>
                                            </div>
                                            <div>
                                                <span class="font-medium text-gray-600">Created:</span>
                                                <span class="ml-2">{{ user.created }}</span>
                                            </div>
                                            <div>
                                                <span class="font-medium text-gray-600">Last Login:</span>
                                                <span class="ml-2">2 hours ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </TableCollapse>
                            </template>
                        </Tbody>
                    </Table>
                </div>

                <CodePreview :code="collapsibleTableExamples" />
            </div>
        </section>

        <!-- Sortable Table Example -->
        <section id="sortable-table">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Sortable Table</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
                    Click on the column headers to sort the table. Uses the
                    <code>orderBy</code>
                    prop on
                    <code>Th</code>
                    .
                </p>
                <div class="mb-6">
                    <Table>
                        <Thead>
                            <tr>
                                <Th orderBy="name">Name</Th>
                                <Th orderBy="email">Email</Th>
                                <Th orderBy="role">Role</Th>
                                <Th orderBy="status">Status</Th>
                                <Th orderBy="created">Created</Th>
                            </tr>
                        </Thead>
                        <Tbody skipDeferred>
                            <tr v-for="user in users" :key="user.id">
                                <Td>{{ user.name }}</Td>
                                <Td>{{ user.email }}</Td>
                                <Td>{{ user.role }}</Td>
                                <Td>{{ user.status }}</Td>
                                <Td>{{ user.created }}</Td>
                            </tr>
                        </Tbody>
                    </Table>
                </div>
                <CodePreview :code="sortableTableExamples" />
            </div>
        </section>

        <!-- Sticky Header Table Example -->
        <section id="sticky-header-table">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Sticky/Floating Header Table</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
                    The table header stays visible as you scroll. Uses the
                    <code>sticky</code>
                    prop on
                    <code>Table</code>
                    .
                </p>
                <div class="mb-6" style="max-height: 250px; overflow-y: auto">
                    <Table :sticky="true" style="min-width: 600px">
                        <Thead>
                            <tr>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Role</Th>
                                <Th>Status</Th>
                                <Th>Created</Th>
                            </tr>
                        </Thead>
                        <Tbody skipDeferred>
                            <tr v-for="user in users.concat(users, users)" :key="user.id + '-' + Math.random()">
                                <Td>{{ user.name }}</Td>
                                <Td>{{ user.email }}</Td>
                                <Td>{{ user.role }}</Td>
                                <Td>{{ user.status }}</Td>
                                <Td>{{ user.created }}</Td>
                            </tr>
                        </Tbody>
                    </Table>
                </div>
                <CodePreview :code="stickyTableExamples" />
            </div>
        </section>

        <!-- Pagination Table Example -->
        <section id="pagination-table">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Table with Pagination</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <p class="mb-4 text-gray-600">
                    Showcases the
                    <code>links</code>
                    prop for paginated data. (Demo uses static links.)
                </p>
                <div class="mb-6">
                    <Table
                        :links="[
                            { url: '#', label: '1', active: true },
                            { url: '#', label: '2', active: false },
                            { url: '#', label: '3', active: false },
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
                        <Tbody skipDeferred>
                            <tr v-for="user in users" :key="user.id">
                                <Td>{{ user.name }}</Td>
                                <Td>{{ user.email }}</Td>
                                <Td>{{ user.role }}</Td>
                                <Td>{{ user.status }}</Td>
                                <Td>{{ user.created }}</Td>
                            </tr>
                        </Tbody>
                    </Table>
                </div>
                <CodePreview :code="paginationTableExamples" />
            </div>
        </section>

        <!-- Table Components Props Documentation -->
        <section id="table-components-props">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Table Components Props Reference</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <table class="min-w-full text-sm">
                    <thead class="bg-neutral-50">
                        <tr>
                            <th class="px-4 py-2 text-left font-semibold">Component</th>
                            <th class="px-4 py-2 text-left font-semibold">Prop</th>
                            <th class="px-4 py-2 text-left font-semibold">Type</th>
                            <th class="px-4 py-2 text-left font-semibold">Default</th>
                            <th class="px-4 py-2 text-left font-semibold">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Table.vue -->
                        <tr>
                            <td class="font-mono">Table</td>
                            <td>total</td>
                            <td>number</td>
                            <td></td>
                            <td>Total records count</td>
                        </tr>
                        <tr>
                            <td class="font-mono">Table</td>
                            <td>links</td>
                            <td>PaginationLink[]</td>
                            <td></td>
                            <td>Pagination links array</td>
                        </tr>
                        <tr>
                            <td class="font-mono">Table</td>
                            <td>collapsable</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Enable collapsible rows</td>
                        </tr>
                        <tr>
                            <td class="font-mono">Table</td>
                            <td>collapse_id</td>
                            <td>string</td>
                            <td></td>
                            <td>Collapse group id</td>
                        </tr>
                        <tr>
                            <td class="font-mono">Table</td>
                            <td>sticky</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Enable sticky/floating header</td>
                        </tr>
                        <tr>
                            <td class="font-mono">Table</td>
                            <td>overflow</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Enable horizontal scroll</td>
                        </tr>
                        <tr>
                            <td class="font-mono">Table</td>
                            <td>seperate</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Use separated rows</td>
                        </tr>
                        <tr>
                            <td class="font-mono">Table</td>
                            <td>showPerPage</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Show per-page selector</td>
                        </tr>
                        <tr>
                            <td class="font-mono">Table</td>
                            <td>defaultPerPage</td>
                            <td>number</td>
                            <td></td>
                            <td>Default per-page value</td>
                        </tr>
                        <tr>
                            <td class="font-mono">Table</td>
                            <td>responsive</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Enable responsive/mobile layout</td>
                        </tr>
                        <!-- Thead.vue -->
                        <tr>
                            <td class="font-mono">Thead</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>Styled table header wrapper</td>
                        </tr>
                        <!-- Tbody.vue -->
                        <tr>
                            <td class="font-mono">Tbody</td>
                            <td>data</td>
                            <td>string</td>
                            <td>''</td>
                            <td>Key in page props for data</td>
                        </tr>
                        <tr>
                            <td class="font-mono">Tbody</td>
                            <td>hidePlaceholder</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Hide loading placeholder</td>
                        </tr>
                        <tr>
                            <td class="font-mono">Tbody</td>
                            <td>hideNoRecordsMessage</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Hide "no records" message</td>
                        </tr>
                        <tr>
                            <td class="font-mono">Tbody</td>
                            <td>recordsFromPagination</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Get records from pagination</td>
                        </tr>
                        <tr>
                            <td class="font-mono">Tbody</td>
                            <td>noRecordsMessage</td>
                            <td>string</td>
                            <td>'No records found'</td>
                            <td>Message for no records</td>
                        </tr>
                        <tr>
                            <td class="font-mono">Tbody</td>
                            <td>skipDeferred</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Skip deferred loading</td>
                        </tr>
                        <!-- Th.vue -->
                        <tr>
                            <td class="font-mono">Th</td>
                            <td>orderBy</td>
                            <td>string</td>
                            <td></td>
                            <td>Enable sorting for column</td>
                        </tr>
                        <!-- Td.vue -->
                        <tr>
                            <td class="font-mono">Td</td>
                            <td>label</td>
                            <td>string</td>
                            <td>''</td>
                            <td>Label for mobile/responsive</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<style scoped>
.slide-down-enter-active {
    transition: all 0.3s ease-out;
}

.slide-down-leave-active {
    transition: all 0.3s ease-in;
}

.slide-down-enter-from {
    transform: translateY(-10px);
    opacity: 0;
}

.slide-down-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}
</style>
