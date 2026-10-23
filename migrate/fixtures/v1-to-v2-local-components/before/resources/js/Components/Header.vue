<script setup>
import { ref } from 'vue';
import Dropdown from './Dropdown.vue';
import { NavCollapse } from '@netblink/vue-components';

const open = ref(false);
</script>

<template>
    <header>
        <Dropdown align="right" width="48" />
        <NavCollapse :show="open" />
    </header>
</template>
