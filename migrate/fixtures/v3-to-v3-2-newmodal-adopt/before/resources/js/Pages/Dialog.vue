<script setup>
import { Modal, PrimaryButton } from '@netblink/vue-components';

defineProps({ open: Boolean });
</script>

<template>
    <Modal :show="open" max-width="lg">
        <section class="px-4 py-2">Text</section>
    </Modal>
</template>
