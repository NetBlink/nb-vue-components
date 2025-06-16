<script setup>
// @ts-nocheck
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
    disabled: Boolean,
    customButtonClass: {
        type: String,
    },
});
</script>

<template>
    <button
        :type="type"
        :disabled="disabled"
        :class="{
            [customButtonClass]: !!customButtonClass,
            'focusable bg-primary hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500 active:bg-primary-700 inline-flex cursor-pointer items-center rounded-md border border-transparent px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]':
                !customButtonClass,
        }"
    >
        <slot />
    </button>
</template>
