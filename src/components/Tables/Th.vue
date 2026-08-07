<script setup lang="ts">
/**
 * Header cell for a `Thead` row. Set `sortable` together with `column` (or the legacy
 * `orderBy`) to make it clickable: it shows asc/desc arrows reflecting the current order
 * and delegates the actual sorting to the `useTableSort` composable, which drives an
 * Inertia visit rather than sorting in place.
 */
import { computed, onMounted, onUnmounted } from 'vue';
import { useTableSort } from '../../composables/useTable';
import type { TableHeaderCellProps } from './types';

interface ThProps extends TableHeaderCellProps {
    orderBy?: string;
    column?: string; 
}

const props = withDefaults(defineProps<ThProps>(), {
    sortable: false,
    align: 'left',
    responsive: true
});

const columnKey = computed(() => props.column || props.orderBy);

const { getSortDirection, isSorted, sort } = useTableSort();

const sortDirection = computed(() => {
    return columnKey.value ? getSortDirection(columnKey.value) : null;
});

const isCurrentlySorted = computed(() => {
    return columnKey.value ? isSorted(columnKey.value) : false;
});

const isSortable = computed(() => {
    return props.sortable && columnKey.value;
});

const handleSort = () => {
    if (!isSortable.value || !columnKey.value) return;
    sort(columnKey.value);
};

const getArrowColor = (direction: 'asc' | 'desc') => {
    return sortDirection.value === direction && isCurrentlySorted.value
        ? 'text-primary-600 dark:text-primary-300'
        : 'text-gray-400 dark:text-gray-600';
};

const thClasses = computed(() => [
    'px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-900/50 dark:text-gray-400',
    {
        'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900/80': isSortable.value,
        'text-left': props.align === 'left',
        'text-center': props.align === 'center',
        'text-right': props.align === 'right',
        'w-0': props.width === 'auto',
    },
    props.width && props.width !== 'auto' ? `w-${props.width}` : ''
]);

const thStyles = computed(() => ({
    width: props.width && props.width !== 'auto' ? props.width : undefined
}));
</script>
<template>
    <th 
        scope="col" 
        :class="thClasses"
        :style="thStyles"
        @click="handleSort"
    >
        <div class="flex items-center justify-between">
            <slot />
            <span 
                v-if="isSortable" 
                class="sort-arrows ml-2 flex flex-col items-center"
            >
                <svg 
                    class="h-3 w-3 -mb-1"
                    :class="getArrowColor('asc')"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                >
                    <path d="M6 3L2 7h8L6 3z"/>
                </svg>
                <svg 
                    class="h-3 w-3"
                    :class="getArrowColor('desc')"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                >
                    <path d="M6 9L2 5h8L6 9z"/>
                </svg>
            </span>
        </div>
    </th>
</template>
