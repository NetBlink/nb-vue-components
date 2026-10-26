<script setup lang="ts">
// Internal: the up/down/flat change line shared by DataTile and Stats.
export interface StatTrendValue {
    value: string | number;
    direction: 'up' | 'down' | 'flat';
}

import { computed } from 'vue';

// A bare direction word is accepted too ('up', 'down', 'flat', or 'stable' as some data calls it).
const props = defineProps<{ trend: StatTrendValue | 'up' | 'down' | 'flat' | 'stable' }>();

const normal = computed<{ value?: string | number; direction: 'up' | 'down' | 'flat' }>(() => {
    if (typeof props.trend === 'string') return { direction: props.trend === 'stable' ? 'flat' : props.trend };
    return props.trend;
});

const COLOURS = {
    up: 'text-green-600 dark:text-green-400',
    down: 'text-red-600 dark:text-red-400',
    flat: 'text-gray-500 dark:text-gray-400',
};
const LABELS = { up: 'Up', down: 'Down', flat: 'No change' };
</script>

<template>
    <span class="inline-flex items-center gap-0.5 text-xs font-medium" :class="COLOURS[normal.direction] ?? COLOURS.flat">
        <svg v-if="normal.direction !== 'flat'" class="h-3.5 w-3.5" :class="normal.direction === 'down' && 'rotate-180'" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z" clip-rule="evenodd" />
        </svg>
        <span class="sr-only">{{ LABELS[normal.direction] ?? LABELS.flat }}</span>
        {{ normal.value }}
    </span>
</template>
