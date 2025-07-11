<script setup lang="ts">
import { computed } from 'vue';
import { Deferred } from '@inertiajs/vue3';
import { TrPlaceholder, Td } from '../../index';
import { useInertiaTable } from '../../composables/useTable';
import type { TableBodyProps, TableRow } from './types';

interface TbodyProps {
    // New props
    loading?: boolean;
    data?: TableRow[] | string; // Allow both array of data or string key
    emptyMessage?: string;
    loadingRows?: number;
    responsive?: boolean;
    
    // Legacy props for backward compatibility
    hidePlaceholder?: boolean;
    hideNoRecordsMessage?: boolean;
    recordsFromPagination?: boolean;
    noRecordsMessage?: string;
    ignoreDefer?: boolean;
}

const props = withDefaults(defineProps<TbodyProps>(), {
    loading: false,
    emptyMessage: 'No records found',
    loadingRows: 3,
    responsive: true,
    hidePlaceholder: false,
    hideNoRecordsMessage: false,
    recordsFromPagination: false,
    noRecordsMessage: 'No records found',
    ignoreDefer: false
});

const inertiaTable = typeof props.data === 'string' ? useInertiaTable(props.data) : null;

const tableData = computed(() => {
    if (Array.isArray(props.data)) {
        return props.data;
    }
    
    if (typeof props.data === 'string' && inertiaTable) {
        return props.recordsFromPagination ? inertiaTable.data.value?.data : inertiaTable.rows.value;
    }
    
    return [];
});

const isEmpty = computed(() => {
    return Array.isArray(tableData.value) && tableData.value.length === 0;
});

const showEmptyMessage = computed(() => {
    const hasDataProp = props.data !== undefined;
    return !props.hideNoRecordsMessage && hasDataProp && isEmpty.value;
});

const showPlaceholder = computed(() => {
    return !props.hidePlaceholder && (props.loading || (inertiaTable?.isLoading.value));
});

const shouldUseDefer = computed(() => {
    return !props.ignoreDefer && typeof props.data === 'string';
});

const records = computed(() => tableData.value);
</script>

<template>
    <tbody v-if="!shouldUseDefer">
        <TrPlaceholder v-if="showPlaceholder" :placeholders="loadingRows" />
        
        <template v-else-if="showEmptyMessage">
            <tr>
                <Td colspan="999" class="text-center text-gray-500 py-8">
                    {{ props.emptyMessage || props.noRecordsMessage }}
                </Td>
            </tr>
        </template>
        
        <template v-else>
            <slot />
        </template>
    </tbody>
    
    <tbody v-else>
        <Deferred :data="typeof props.data === 'string' ? props.data : ''">
            <template #fallback>
                <TrPlaceholder v-if="!props.hidePlaceholder" :placeholders="loadingRows" />
            </template>
            
            <template v-if="showEmptyMessage">
                <tr>
                    <Td colspan="999" class="text-center text-gray-500 py-8">
                        {{ props.emptyMessage || props.noRecordsMessage }}
                    </Td>
                </tr>
            </template>
            
            <slot />
        </Deferred>
    </tbody>
</template>
