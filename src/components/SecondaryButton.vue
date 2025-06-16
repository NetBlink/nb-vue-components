<script setup>
// @ts-nocheck
defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <button
        :type="type"
        class="focusable focus:ring-accent-500 inline-flex cursor-pointer items-center rounded border border-gray-300 bg-white px-4 py-2 text-xs font-semibold tracking-widest text-gray-700 uppercase shadow transition duration-150 ease-in-out hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:opacity-25"
    >
        <slot />
    </button>
</template>
