<script setup>
import { NewModal } from '@netblink/vue-components';
const open = ref(;
</script>

<template>
    <NewModal :show="open" max-width="lg">Hi</NewModal>
</template>
