<script setup>
import { ref } from 'vue';
import { NavCollapse } from '@netblink/vue-components';

const a = ref(false);
const b = ref(false);
</script>

<template>
    <nav>
        <NavCollapse :open="a" @update:open="a = $event">A</NavCollapse>
        <NavCollapse :open="b" v-on:update:open="(v) => (b = v)">B</NavCollapse>
    </nav>
</template>
