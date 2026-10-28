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
 * @motion off - the active colours switch instantly
 * @motion simple - colours change quickly
 * @motion smooth - background and colour ease in
 * @motion fancy - the active highlight pops in on a spring and links lift slightly on hover
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

const { cls, attrs, level } = useUi('NavLink', props);

const BASE = 'cursor-pointer focusable flex items-center rounded-lg px-3 py-2 text-sm font-medium';
const ACTIVE = 'bg-primary-100 text-primary-800 dark:bg-primary-900/60 dark:text-primary-100';
const IDLE = 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100';
const MOTION: Record<MotionLevel, string> = {
    off: '',
    simple: 'transition-colors duration-150',
    smooth: 'transition-colors duration-200 ease-(--ease-emphasised)',
    fancy: 'transition-[color,background-color,translate] duration-300 ease-(--ease-spring) hover:-translate-y-px',
};

// fancy: the highlight pops in when a link becomes active.
const classes = computed(() => [BASE, props.active ? ACTIVE : IDLE, MOTION[level.value], props.active && level.value === 'fancy' && 'animate-pop-in']);
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
