<script setup>
import { Tbody } from '@netblink/vue-components';

defineProps({ orders: Array, missing: String });
</script>

<template>
    <table>
        <Tbody :items="orders" empty-message="No orders yet" />
        <Tbody :items="orders" :emptyMessage="missing" />
        <Tbody :items="orders" empty-message="Nothing" />
    </table>
</template>
