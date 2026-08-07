<script setup lang="ts">
/**
 * The `<thead>` primitive, holding a row of `Th` cells. In responsive mode it is hidden
 * below `sm`, since `Tr`/`Td` switch to a stacked card layout with per-cell labels there;
 * set `sticky` to pin the header cells while the table body scrolls.
 */
import { computed } from 'vue';
import type { TableHeaderProps } from './types';

const props = withDefaults(defineProps<TableHeaderProps>(), {
    sticky: false,
    responsive: true,
    variant: 'default'
});

const theadClasses = computed(() => [
    'bg-gray-50 dark:bg-gray-900/40 border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900/50 dark:border-gray-700',
    {
        'hidden sm:table-header-group': props.responsive,
        // Sticky goes on the cells: with border-collapse the thead box itself is not painted.
        '[&_th]:sticky [&_th]:top-0 [&_th]:z-10': props.sticky
    }
]);
</script>
<template>
    <thead :class="theadClasses">
        <slot />
    </thead>
</template>
