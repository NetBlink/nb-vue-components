<script setup lang="ts">
import { computed } from 'vue';
import type { TableHeaderProps } from './types';

const props = withDefaults(defineProps<TableHeaderProps>(), {
    sticky: false,
    responsive: true,
    variant: 'default'
});

const theadClasses = computed(() => [
    'bg-gray-50 border-b border-gray-200',
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
