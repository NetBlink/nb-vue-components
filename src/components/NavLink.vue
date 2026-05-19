<script setup lang="ts">
/**
 * NavLink - sidebar / header navigation link wrapping an Inertia `<Link>`.
 *
 * The caller decides activeness (typically via `route().current(...)`); this
 * component only applies the active styling. Renders an optional left icon
 * via the `#icon` slot.
 *
 * @prop {string}  href - destination URL (Inertia visit)
 * @prop {boolean} [active=false] - apply the active styling
 * @slot default - link label
 * @slot icon - optional icon rendered to the left of the label
 */

import { computed } from 'vue';
import Link from '../overrides/InertiaLink';

interface Props {
    /** Destination URL - performs an Inertia visit */
    href: string;
    /** Apply active styling (the parent decides activeness) */
    active?: boolean;
}

const props = defineProps<Props>();

const classes = computed(() =>
    props.active
        ? 'cursor-pointer focusable flex items-center p-2 text-base font-normal rounded-lg bg-accent-100 text-accent-900 dark:bg-primary-900/50 dark:text-primary-100'
        : 'cursor-pointer focusable flex items-center p-2 text-base font-normal rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
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
