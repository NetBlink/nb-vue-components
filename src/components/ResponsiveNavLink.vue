<script setup lang="ts">
/**
 * ResponsiveNavLink - mobile/stacked variant of `NavLink`.
 *
 * Same `href` / `active` API as NavLink, but styled as a full-width row with
 * a left border for use in mobile menus. No `#icon` slot - only the default
 * label slot is rendered.
 *
 * @prop {string}  href - destination URL (Inertia visit)
 * @prop {boolean} [active=false] - apply the active styling
 * @slot default - link label
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
        ? 'cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-hidden focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out dark:border-primary-400 dark:bg-primary-900/40 dark:text-primary-100 dark:focus:bg-primary-900/60 dark:focus:text-primary-50'
        : 'cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-hidden focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:hover:border-gray-600 dark:focus:bg-gray-800 dark:focus:text-gray-100 dark:focus:border-gray-600'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
