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
 * @part root - the `Link`
 * @motion off - the active colours switch instantly
 * @motion simple - colours change quickly
 * @motion smooth - background, border and colour ease in
 * @motion fancy - the same on a spring, and the label nudges right on hover
 */

import { computed } from 'vue';
import Link from '../overrides/InertiaLink';
import type { NbParts, UiProp } from '../ui/parts';
import type { MotionLevel } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface ResponsiveNavLinkProps {
    /** Destination URL - performs an Inertia visit */
    href: string;
    /** Apply active styling (the parent decides activeness) */
    active?: boolean;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['ResponsiveNavLink']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = defineProps<ResponsiveNavLinkProps>();

const { cls, attrs, level } = useUi('ResponsiveNavLink', props);

const BASE = 'cursor-pointer focusable block w-full border-l-4 py-2 pr-4 pl-3 text-left text-base font-medium focus:outline-hidden';
const ACTIVE = 'border-primary-500 bg-primary-100/70 text-primary-800 dark:border-primary-400 dark:bg-primary-900/40 dark:text-primary-100';
const IDLE =
    'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus:border-gray-600 dark:focus:bg-gray-800 dark:focus:text-gray-100';
const MOTION: Record<MotionLevel, string> = {
    off: '',
    simple: 'transition-colors duration-150',
    smooth: 'transition-colors duration-200 ease-(--ease-emphasised)',
    fancy: 'transition-[color,background-color,border-color,padding] duration-300 ease-(--ease-spring) hover:pl-4',
};

const classes = computed(() => [BASE, props.active ? ACTIVE : IDLE, MOTION[level.value]]);
</script>

<template>
    <Link v-bind="attrs()" :href="href" :class="cls('root', classes)">
        <slot />
    </Link>
</template>
