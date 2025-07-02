<script setup>
const props = defineProps({
    columns: {
        type: Number,
        required: false,
        default: 5,
    },
});
</script>

<template>
    <tr>
        <td v-for="i in columns" :key="i" class="px-6 py-4">
            <div class="h-4 w-full animate-pulse rounded bg-gray-200"></div>
        </td>
    </tr>
</template>
