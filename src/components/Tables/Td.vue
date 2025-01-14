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
    <td class="whitespace-nowrap py-2 text-center md:px-6 md:py-4 md:text-left">
        <span class="td-label hidden font-bold">{{ props.label }}</span>
        <slot />
    </td>
</template>
