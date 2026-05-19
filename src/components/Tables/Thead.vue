<script setup lang="ts">
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
        'sticky top-0 z-10': props.sticky
    }
]);
</script>
<template>
    <thead :class="theadClasses">
        <slot />
    </thead>
</template>
