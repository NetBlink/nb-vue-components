<script setup>
import { computed } from 'vue';
import Link from '../overrides/InertiaLink';
const props = defineProps({
    href: String,
    active: Boolean,
});

const classes = computed(() =>
    props.active
        ? 'focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700'
        : 'focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot name="icon" />
        <span class="ml-3 flex-1 whitespace-nowrap">
            <slot />
        </span>
    </Link>
</template>
