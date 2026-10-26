<script setup lang="ts">
/**
 * Overlapping row of `Avatar`s, each ringed so the overlap reads clearly. Past
 * `max`, the rest collapse into a "+N" bubble. Avatars passed with `v-for` count
 * one by one.
 *
 * @part root - the row
 * @part item - the wrapper around each avatar
 * @part more - the "+N" bubble
 */
import { Fragment, computed, useSlots, type VNode } from 'vue';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface AvatarGroupProps {
    /** How many avatars to show before the "+N" bubble */
    max?: number;
    /** Size of the "+N" bubble; match it to the avatars */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['AvatarGroup']>;
}

const props = withDefaults(defineProps<AvatarGroupProps>(), {
    max: undefined,
    size: 'md',
});

const { cls, attrs } = useUi('AvatarGroup', props);
const slots = useSlots();

const SIZES = { xs: 'h-6 w-6 text-[10px]', sm: 'h-8 w-8 text-xs', md: 'h-10 w-10 text-sm', lg: 'h-12 w-12 text-base', xl: 'h-16 w-16 text-lg' };
const OVERLAP = { xs: '-space-x-1.5', sm: '-space-x-2', md: '-space-x-2.5', lg: '-space-x-3', xl: '-space-x-4' };

const flatten = (nodes: VNode[]): VNode[] =>
    nodes.flatMap((node) => (node.type === Fragment && Array.isArray(node.children) ? flatten(node.children as VNode[]) : typeof node.type === 'symbol' ? [] : [node]));

// Re-read on every render: slots are not reactive.
const items = () => flatten(slots.default?.() ?? []);
const shown = () => (props.max !== undefined ? items().slice(0, props.max) : items());
const hidden = () => (props.max !== undefined ? Math.max(0, items().length - props.max) : 0);

const ring = computed(() => 'rounded-full ring-2 ring-white dark:ring-gray-800');
</script>

<template>
    <div v-bind="attrs()" :class="cls('root', 'flex items-center', OVERLAP[size])">
        <span v-for="(item, index) in shown()" :key="index" :class="cls('item', 'relative inline-flex', ring)">
            <component :is="item" />
        </span>
        <span
            v-if="hidden()"
            :class="cls('more', 'relative inline-flex items-center justify-center bg-gray-100 font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-200', ring, SIZES[size])"
            :aria-label="`${hidden()} more`"
        >
            +{{ hidden() }}
        </span>
    </div>
</template>
