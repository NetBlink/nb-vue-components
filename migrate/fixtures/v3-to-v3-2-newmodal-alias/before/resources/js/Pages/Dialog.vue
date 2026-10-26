<script setup>
import { ref } from 'vue';
import { Modal as Dialog } from '@netblink/vue-components';

const x = ref(false);
</script>

<template>
    <Dialog :show="x" @close="x = false" modal-custom-class="w-96">Old</Dialog>
</template>
