<script setup lang="ts">
/**
 * Responsive Navigation Link component
 *
 * @component
 *
 * @prop {string} href - The URL to navigate to
 * @prop {boolean} active - Whether this link is currently active
 */

import { computed } from 'vue';
import Link from '../overrides/InertiaLink';

interface Props {
    href: string;
    active?: boolean;
}

const props = defineProps<Props>();

const classes = computed(() =>
    props.active
        ? 'cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-hidden focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out'
        : 'cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-hidden focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
