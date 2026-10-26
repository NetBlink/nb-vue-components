<script setup>
import { ref } from 'vue';
import { Modal } from '@netblink/vue-components';

const x = ref(false);
</script>

<template>
    <div>
        <component :is="Modal" :show="x" />
        <Modal :show="x" @close="x = false">Old</Modal>
    </div>
</template>
