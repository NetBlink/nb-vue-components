<script setup>
const props = defineProps({
    label: {
        type: String,
        required: false,
        default: '',
    },
});
</script>
<template>
    <td
        class="rounded-none bg-white px-4 py-3 text-center whitespace-nowrap text-gray-600 transition-all group-hover:bg-neutral-100 hover:rounded-lg hover:bg-neutral-50 md:px-6 md:py-4 md:text-left"
    >
        <span class="td-label hidden font-bold">{{ props.label }}</span>
        <slot />
    </td>
</template>
