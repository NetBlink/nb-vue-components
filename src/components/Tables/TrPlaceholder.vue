<script setup>
import { Td } from '../../index';

const props = defineProps({
    placeholders: {
        type: Number,
        required: false,
        default: 5,
    },
});
</script>

<template>
    <tr v-for="i in placeholders">
        <Td colspan="999">
            <div class="tr-placeholder h-8 w-full animate-pulse rounded-md bg-gray-500 bg-opacity-75"></div>
        </Td>
    </tr>
</template>
