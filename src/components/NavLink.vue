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
 * @part root - the `Link`
 * @part icon - the icon slot wrapper
 * @part label - the label `<span>`
 */

import { computed } from 'vue';
import Link from '../overrides/InertiaLink';
import type { NbParts, UiProp } from '../ui/parts';
import type { MotionLevel } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface NavLinkProps {
    /** Destination URL - performs an Inertia visit */
    href: string;
    /** Apply active styling (the parent decides activeness) */
    active?: boolean;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['NavLink']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = defineProps<NavLinkProps>();

const { cls, attrs } = useUi('NavLink', props);

const classes = computed(() =>
    props.active
        ? 'cursor-pointer focusable flex items-center p-2 text-base font-normal rounded-lg bg-accent-100 text-accent-900 dark:bg-primary-900/50 dark:text-primary-100'
        : 'cursor-pointer focusable flex items-center p-2 text-base font-normal rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
);
</script>

<template>
    <Link v-bind="attrs()" :href="href" :class="cls('root', classes)">
        <div v-if="$slots.icon" :class="cls('icon', 'flex size-4 items-center justify-center')">
            <slot name="icon" />
        </div>
        <!-- ml-3 only when an icon actually renders, otherwise the label sits on a phantom indent -->
        <span :class="cls('label', 'flex-1 whitespace-nowrap', { 'ml-3': $slots.icon })">
            <slot />
        </span>
    </Link>
</template>
