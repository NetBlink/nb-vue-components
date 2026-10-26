<script setup>
import { Tbody } from '@netblink/vue-components';

defineProps({ orders: Array, missing: String });
</script>

<template>
    <table>
        <Tbody :items="orders" no-records-message="No orders yet" />
        <Tbody :items="orders" :noRecordsMessage="missing" />
        <Tbody :items="orders" empty-message="Nothing" no-records-message="Unused" />
    </table>
</template>
