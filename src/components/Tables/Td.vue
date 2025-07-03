<script setup lang="ts">
interface TdProps {
    label?: string;
}
const props = defineProps<TdProps>();
</script>
<template>
    <td
        class="rounded-lg py-2 text-center whitespace-nowrap transition group-hover:bg-red-500 hover:bg-gray-50 has-[>&:hover]:bg-gray-600 md:px-6 md:py-4 md:text-left"
    >
        <span class="td-label hidden font-bold">{{ props.label }}</span>
        <slot />
    </td>
</template>
