<script setup>
import { NewModal, PrimaryButton } from '@netblink/vue-components';

defineProps({ open: Boolean });
</script>

<template>
    <NewModal :show="open" max-width="lg" align-top :padded="false">
        <section class="px-4 py-2">Text</section>
    </NewModal>
</template>
