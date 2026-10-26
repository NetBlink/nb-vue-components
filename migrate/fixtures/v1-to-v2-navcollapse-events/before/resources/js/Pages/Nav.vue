<script setup>
import { ref } from 'vue';
import { NavCollapse } from '@netblink/vue-components';

const a = ref(false);
const b = ref(false);
</script>

<template>
    <nav>
        <NavCollapse :show="a" @update:show="a = $event">A</NavCollapse>
        <NavCollapse :show="b" v-on:update:show="(v) => (b = v)">B</NavCollapse>
    </nav>
</template>
