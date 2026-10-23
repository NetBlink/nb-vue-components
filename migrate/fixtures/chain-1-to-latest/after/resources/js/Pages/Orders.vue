<script setup>
import { ref } from 'vue';
import { Alert, Dropdown, Modal, NavCollapse, NewModal, Table } from '@netblink/vue-components';

const open = ref(false);
const edit = ref(false);
const help = ref(false);
</script>

<template>
    <div>
        <Dropdown align="start">
            <template #trigger>Actions</template>
        </Dropdown>
        <NavCollapse :open="open" title="Filters" />
        <Alert dismissible>Order saved.</Alert>
        <Table sticky :rows="rows" />
        <NewModal :show="help" @close="help = false">Help</NewModal>
        <Modal :show="edit" @close="edit = false">Edit</Modal>
    </div>
</template>
