<!-- Example of using the improved table components -->

<!-- Basic table with manual structure (backward compatible) -->
<Table>
    <Thead>
        <tr>
            <Th orderBy="name">Name</Th>
            <Th orderBy="email">Email</Th>
            <Th>Actions</Th>
        </tr>
    </Thead>
    <Tbody data="users">
        <tr v-for="user in users" :key="user.id">
            <Td>{{ user.name }}</Td>
            <Td>{{ user.email }}</Td>
            <Td>
                <Button @click="editUser(user)">Edit</Button>
            </Td>
        </tr>
    </Tbody>
</Table>

<!-- Enhanced table with auto-generated columns -->
<EnhancedTable 
    :data="users"
    :columns="columns"
    sortable
    selectable
    striped
    hover
    @row-click="handleRowClick"
    @selection-change="handleSelectionChange"
    @sort="handleSort"
>
    <!-- Custom cell content -->
    <template #cell-actions="{ row }">
        <Button @click="editUser(row)">Edit</Button>
        <Button theme="danger" @click="deleteUser(row)">Delete</Button>
    </template>
</EnhancedTable>

<!-- Inertia-based table with auto-columns -->
<EnhancedTable 
    resource="users"
    :auto-generate-columns="true"
    sortable
    responsive
    sticky
    :show-pagination="true"
/>

<!-- Using the composables directly -->
<script setup>
import { useTable, useTableSort } from '@netblink/vue-components';

// Example of using composables
const { 
    sort, 
    getSortDirection, 
    isSorted 
} = useTableSort();

const { 
    rows, 
    pagination, 
    isEmpty, 
    isLoading 
} = useTable({ 
    resource: 'users', 
    sortable: true, 
    defer: true 
});

// Table columns definition
const columns = [
    { key: 'id', label: 'ID', width: '80px', align: 'center' },
    { key: 'name', label: 'Full Name', sortable: true },
    { key: 'email', label: 'Email Address', sortable: true },
    { key: 'created_at', label: 'Created', sortable: true, align: 'right' },
    { key: 'actions', label: 'Actions', width: '120px', align: 'center' }
];

// Event handlers
const handleRowClick = (row, index) => {
    console.log('Row clicked:', row, index);
};

const handleSelectionChange = (selected) => {
    console.log('Selection changed:', selected);
};

const handleSort = (column, direction) => {
    console.log('Sort changed:', column, direction);
};
</script>
