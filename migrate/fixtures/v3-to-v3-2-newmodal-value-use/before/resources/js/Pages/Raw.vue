<script setup>
import { markRaw, ref } from 'vue';
import { Modal } from '@netblink/vue-components';

const x = ref(false);
const dialogs = [markRaw(Modal)];
</script>

<template>
    <Modal :show="x" @close="x = false">Old</Modal>
</template>
