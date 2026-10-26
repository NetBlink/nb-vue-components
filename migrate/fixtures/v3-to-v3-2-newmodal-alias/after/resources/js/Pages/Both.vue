<script setup>
import { ref } from 'vue';
import { NewModal } from '@netblink/vue-components';

const x = ref(false);
</script>

<template>
    <div>
        <NewModal :show="x">New</NewModal>
        <NewModal :show="x" @close="x = false">Old</NewModal>
    </div>
</template>
