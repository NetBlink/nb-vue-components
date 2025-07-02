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

        <!-- Best Practices -->
        <section id="table-best-practices">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800">Best Practices</h3>
            <div class="rounded-lg border border-gray-200 bg-white p-6">
                <div class="space-y-4 text-gray-600">
                    <h4 class="font-semibold text-gray-800">Table Structure</h4>
                    <ul class="ml-4 list-inside list-disc space-y-1">
                        <li>Always use proper semantic HTML structure (table, thead, tbody, th, td)</li>
                        <li>Include meaningful headers for accessibility</li>
                        <li>Use consistent column widths and alignment</li>
                        <li>Consider responsive design for mobile devices</li>
                    </ul>

                    <h4 class="mt-6 font-semibold text-gray-800">Data Presentation</h4>
                    <ul class="ml-4 list-inside list-disc space-y-1">
                        <li>Use status badges for categorical data</li>
                        <li>Format dates and numbers consistently</li>
                        <li>Provide clear action buttons with appropriate themes</li>
                        <li>Use collapsible rows for detailed information</li>
                    </ul>

                    <h4 class="mt-6 font-semibold text-gray-800">Performance</h4>
                    <ul class="ml-4 list-inside list-disc space-y-1">
                        <li>Use pagination for large datasets</li>
                        <li>Implement virtual scrolling for very large tables</li>
                        <li>Use placeholder rows during loading states</li>
                        <li>Consider TableItemCard for mobile-friendly layouts</li>
                    </ul>

                    <h4 class="mt-6 font-semibold text-gray-800">Accessibility</h4>
                    <ul class="ml-4 list-inside list-disc space-y-1">
                        <li>Provide proper table headers and scope attributes</li>
                        <li>Ensure sufficient color contrast for status indicators</li>
                        <li>Make interactive elements keyboard navigable</li>
                        <li>Use aria-labels for complex table interactions</li>
                    </ul>
                </div>
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
