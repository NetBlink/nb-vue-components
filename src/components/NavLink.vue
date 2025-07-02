<script setup lang="ts">
/**
 * Navigation Link component
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
        ? 'cursor-pointer focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700'
        : 'cursor-pointer focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <div v-if="$slots.icon" class="flex size-4 items-center justify-center">
            <slot name="icon" />
        </div>
        <span class="ml-3 flex-1 whitespace-nowrap">
            <slot />
        </span>
    </Link>
</template>
