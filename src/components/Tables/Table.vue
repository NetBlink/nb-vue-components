<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { Pagination } from '../../index';
import { useStickyTableHeader } from '../../composables/useTable';
import type { TableProps } from './types';

const props = withDefaults(defineProps<TableProps>(), {
    sticky: false,
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

const stickyOffset = 60; 
const {
    tableRef,
    headerRef,
    stickyRef,
    isSticky,
    updateStickyState
} = useStickyTableHeader(computed(() => backwardCompatProps.value.sticky), stickyOffset);

const tableClasses = computed(() => [
    'min-w-full divide-y divide-gray-200',
    {
        'text-xs': props.size === 'sm',
        'text-sm': props.size === 'md',
        'text-base': props.size === 'lg',
        
        'border-separate border-spacing-y-2': backwardCompatProps.value.separate,
        'border border-gray-200 rounded-lg': props.bordered,
        
        '[&_tbody_tr:nth-child(even)]:bg-gray-50': props.striped,
        
        '[&_tbody_tr:hover]:bg-gray-50 [&_tbody_tr]:transition-colors': props.hover,
        
        '[&>*>tr]:border-l-primary-500 mb-14 [&>*>tr]:border-l-4': backwardCompatProps.value.collapsible,
        
        'shadow-sm rounded-lg overflow-hidden': props.variant === 'elevated',
        'border-0': props.variant === 'minimal'
    }
]);

const containerClasses = computed(() => [
    'w-full overflow-x-auto',
    {
        'rounded-lg border border-gray-200 bg-white shadow-sm': props.variant === 'elevated',
        'border border-gray-200 rounded-lg': props.bordered && props.variant !== 'elevated'
    }
]);

const wrapperClasses = computed(() => [
    'w-full',
    {
        '!visible hidden': backwardCompatProps.value.collapsible,
    }
]);

onMounted(() => {
    if (backwardCompatProps.value.sticky) {
        updateStickyState();
    }
});

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
            class="px-4 pt-4 text-sm text-gray-600"
        >
            Found: {{ props.total }}
        </div>
        
        <div :class="containerClasses" ref="tableRef">
            <table 
                :class="tableClasses"
                ref="headerRef"
            >
                <div
                    v-if="backwardCompatProps.sticky"
                    ref="stickyRef"
                    class="fixed isolate z-40 hidden w-full overflow-hidden rounded-t-xl bg-neutral-100 shadow"
                    :class="{
                        'max-sm:hidden': props.responsive,
                    }"
                >
                </div>
                
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
