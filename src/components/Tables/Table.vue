<script setup lang="ts">
/**
 * Scroll container and `<table>` shell for the table primitives: compose `Thead`, `Th`,
 * `Tbody`, `Tr` and `Td` inside its default slot, and it applies the striped / bordered /
 * hover / sticky-header / size / variant styling plus a responsive wrapper. It renders its
 * own `Pagination` from a Laravel paginator passed as `pagination` (or legacy `links`) and
 * shows a "Found: n" count when `total` is given. Use `EnhancedTable` instead when you
 * would rather declare `columns` and `data` and have the rows generated for you.
 */
import { computed } from 'vue';
import { Pagination } from '../../index';
import type { TableProps } from './types';

const props = withDefaults(defineProps<TableProps>(), {
    sticky: false,
    stickyMaxHeight: '28rem',
    responsive: true,
    striped: false,
    bordered: false,
    hover: false,
    separate: false,
    collapsible: false,
    showPagination: true,
    showPerPage: false,
    defaultPerPage: 25,
    loading: false,
    size: 'md',
    variant: 'default',
    emptyMessage: 'No records found',
    loadingMessage: 'Loading...'
});

const backwardCompatProps = computed(() => ({
    collapsible: props.collapsible || (props as any).collapsable,
    separate: props.separate || (props as any).seperate,
    collapseId: props.collapseId || (props as any).collapse_id,
    sticky: props.sticky
}));

const tableClasses = computed(() => [
    'min-w-full divide-y divide-gray-200 dark:divide-gray-700',
    {
        'text-xs': props.size === 'sm',
        'text-sm': props.size === 'md',
        'text-base': props.size === 'lg',

        'border-separate border-spacing-y-2': backwardCompatProps.value.separate,
        'border border-gray-200 dark:border-gray-700 rounded-lg dark:border-gray-700': props.bordered,

        '[&_tbody_tr:nth-child(even)]:bg-gray-50 dark:[&_tbody_tr:nth-child(even)]:bg-gray-900/40': props.striped,

        '[&_tbody_tr:hover]:bg-gray-50 [&_tbody_tr]:transition-colors dark:[&_tbody_tr:hover]:bg-gray-900/60': props.hover,

        '[&>*>tr]:border-l-primary-500 mb-14 [&>*>tr]:border-l-4': backwardCompatProps.value.collapsible,

        'shadow-sm rounded-lg overflow-hidden': props.variant === 'elevated',
        'border-0': props.variant === 'minimal',

        /*
         * Native `position: sticky` on the header cells. Applied to `th` rather
         * than `thead` because with border-collapse the thead box is not painted
         * and the header would scroll under transparent cells.
         */
        '[&_thead_th]:sticky [&_thead_th]:top-0 [&_thead_th]:z-10': backwardCompatProps.value.sticky
    }
]);

const containerClasses = computed(() => [
    'w-full overflow-x-auto',
    {
        // Sticky needs a scroll container with a bounded height to stick against.
        'overflow-y-auto': backwardCompatProps.value.sticky,
        'rounded-lg border border-gray-200 dark:border-gray-700 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800': props.variant === 'elevated',
        'border border-gray-200 dark:border-gray-700 rounded-lg dark:border-gray-700': props.bordered && props.variant !== 'elevated'
    }
]);

const containerStyles = computed(() =>
    backwardCompatProps.value.sticky ? { maxHeight: props.stickyMaxHeight } : undefined
);

const wrapperClasses = computed(() => [
    'w-full',
    {
        '!visible hidden': backwardCompatProps.value.collapsible,
    }
]);

const paginationData = computed(() => {
    if (props.pagination) {
        return props.pagination;
    }
    
    const legacyLinks = (props as any).links;
    if (legacyLinks) {
        return {
            links: legacyLinks,
            current_page: 1,
            last_page: 1,
            per_page: props.defaultPerPage,
            total: props.total || 0,
            from: 1,
            to: props.total || 0
        };
    }
    
    return null;
});

const showPaginationComponent = computed(() => {
    return props.showPagination && (paginationData.value?.links?.length || 0) > 0;
});
</script>
<template>
    <div 
        :class="wrapperClasses"
        :id="backwardCompatProps.collapseId"
        data-te-collapse-item
    >
        <div 
            v-if="props.total != null" 
            class="px-4 pt-4 text-sm text-gray-600 dark:text-gray-400"
        >
            Found: {{ props.total }}
        </div>
        
        <div :class="containerClasses" :style="containerStyles">
            <table :class="tableClasses">
                <slot />
            </table>
        </div>
        
        <div v-if="showPaginationComponent" class="mt-6">
            <slot v-if="$slots.pagination" name="pagination" />
            <Pagination
                v-else
                :links="paginationData?.links || []"
                :showPerPage="props.showPerPage"
                :defaultPerPage="props.defaultPerPage"
            />
        </div>
    </div>
</template>
