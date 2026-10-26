<script setup>
import { Modal, PrimaryButton } from '@netblink/vue-components';

defineProps({ open: Boolean });
</script>

<template>
    <Modal :show="open" :align-center="wide" />
    <Modal :show="open" />
</template>
