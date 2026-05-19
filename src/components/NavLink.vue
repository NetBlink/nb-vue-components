<script setup lang="ts">
/**
 * NavLink — sidebar / header navigation link wrapping an Inertia `<Link>`.
 *
 * The caller decides activeness (typically via `route().current(...)`); this
 * component only applies the active styling. Renders an optional left icon
 * via the `#icon` slot.
 *
 * @prop {string}  href — destination URL (Inertia visit)
 * @prop {boolean} [active=false] — apply the active styling
 * @slot default — link label
 * @slot icon — optional icon rendered to the left of the label
 */

import { computed } from 'vue';
import Link from '../overrides/InertiaLink';

interface Props {
    /** Destination URL — performs an Inertia visit */
    href: string;
    /** Apply active styling (the parent decides activeness) */
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
