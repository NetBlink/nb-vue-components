<script setup>
import { ref } from 'vue';
import { Alert, Dropdown, Modal, NavCollapse, NewModal, Table } from '@netblink/vue-components';

const open = ref(false);
const edit = ref(false);
const help = ref(false);
</script>

<template>
    <div>
        <Dropdown align="left">
            <template #trigger>Actions</template>
        </Dropdown>
        <NavCollapse :show="open" title="Filters" />
        <Alert>Order saved.</Alert>
        <Table :rows="rows" />
        <NewModal :show="help" max-width="lg" @close="help = false">Help</NewModal>
        <Modal :show="edit" @close="edit = false">Edit</Modal>
    </div>
</template>
