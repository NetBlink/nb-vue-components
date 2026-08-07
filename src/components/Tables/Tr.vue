<script setup lang="ts">
/**
 * Renders a single row of a table and is the row primitive you fill with `Td` cells.
 * Supports hover, `clickable` and `selectable` states plus success/warning/danger/info
 * variants, emitting `click` and `select`. On narrow screens it collapses to a stacked
 * card so each cell sits on its own line, and returns to a real `table-row` from `sm` up.
 */
import { computed } from 'vue';
import type { TableRowProps } from './types';

const props = withDefaults(defineProps<TableRowProps>(), {
    selectable: false,
    selected: false,
    hoverable: true,
    clickable: false,
    variant: 'default'
});

const emit = defineEmits<{
    click: [event: MouseEvent];
    select: [selected: boolean];
}>();

const handleClick = (event: MouseEvent) => {
    if (props.selectable) {
        emit('select', !props.selected);
    }
    if (props.clickable) {
        emit('click', event);
    }
};

const trClasses = computed(() => [
    'border-b border-gray-200 dark:border-gray-700 last:border-b-0 transition-colors',
    {
        'hover:bg-gray-50': props.hoverable && !props.selected,
        'bg-blue-50 border-blue-200': props.selected,
        'cursor-pointer': props.clickable || props.selectable,
        'border-green-200 bg-green-50': props.variant === 'success',
        'border-yellow-200 bg-yellow-50': props.variant === 'warning',
        'border-red-200 bg-red-50': props.variant === 'danger',
        'border-blue-200 bg-blue-50': props.variant === 'info',
        'sm:table-row': true,
        'flex flex-col mb-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm bg-white sm:mb-0 sm:rounded-none sm:border-0 sm:shadow-none sm:bg-transparent': true
    }
]);
</script>

<template>
    <tr 
        :class="trClasses"
        @click="handleClick"
    >
        <slot />
    </tr>
</template>
