<script setup>
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
            'focusable inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:bg-primary-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]': !customButtonClass, 
        }"
    >
        <slot />
    </button>
</template>
