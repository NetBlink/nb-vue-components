<script setup>
import { ref } from 'vue';
import { NewModal as Dialog } from '@netblink/vue-components';

const x = ref(false);
</script>

<template>
    <Dialog :show="x" @close="x = false" class="w-96" align-top>Old</Dialog>
</template>
