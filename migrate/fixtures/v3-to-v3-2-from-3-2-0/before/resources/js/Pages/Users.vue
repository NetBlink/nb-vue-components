<script setup>
import { ref } from 'vue';
import { NewModal, Section } from '@netblink/vue-components';

const open = ref(false);
</script>

<template>
    <Section>
        <NewModal :show="open" max-width="lg" @close="open = false">Hello</NewModal>
    </Section>
</template>
