<!-- Test file to verify table functionality -->
<template>
    <div class="p-6">
        <h2 class="text-xl font-bold mb-4">Table Test</h2>
        
        <!-- Simple table test -->
        <Table class="mb-6">
            <Thead>
                <tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Status</Th>
                </tr>
            </Thead>
            <Tbody>
                <tr v-for="user in testUsers" :key="user.id">
                    <Td>{{ user.name }}</Td>
                    <Td>{{ user.email }}</Td>
                    <Td>{{ user.status }}</Td>
                </tr>
            </Tbody>
        </Table>
        
        <p>Users count: {{ testUsers.length }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Table, Thead, Tbody, Th, Td } from '../index';

const testUsers = ref([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'pending' }
]);
</script>
