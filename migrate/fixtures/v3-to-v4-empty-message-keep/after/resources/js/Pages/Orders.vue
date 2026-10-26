<script setup>
import { Tbody } from '@netblink/vue-components';

defineProps({ orders: Array, missing: String });
</script>

<template>
    <table>
        <Tbody :items="orders" />
        <Tbody :items="orders" />
        <Tbody :items="orders" empty-message="Nothing" />
    </table>
</template>
