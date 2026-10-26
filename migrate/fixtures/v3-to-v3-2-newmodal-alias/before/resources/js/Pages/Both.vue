<script setup>
import { ref } from 'vue';
import { Modal as M, NewModal } from '@netblink/vue-components';

const x = ref(false);
</script>

<template>
    <div>
        <NewModal :show="x">New</NewModal>
        <M :show="x" @close="x = false" align-center>Old</M>
    </div>
</template>
