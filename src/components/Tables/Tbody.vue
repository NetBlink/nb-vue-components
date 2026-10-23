<script setup lang="ts">
/**
 * The `<tbody>` primitive, which also owns the table's loading and empty states: it shows
 * `TrPlaceholder` skeleton rows while loading and a centred "No records found" row when the
 * data is empty. Pass `data` as an array, or as the string name of an Inertia prop, in
 * which case it reads that prop and wraps the rows in Inertia's `<Deferred>` so deferred
 * props stream in with the placeholder as fallback.
 *
 * @part root - the `<tbody>`
 * @part empty - the `Td` showing the empty message
 */
import { computed } from 'vue';
import { Deferred } from '@inertiajs/vue3';
import { TrPlaceholder, Td } from '../../index';
import { useInertiaTable } from '../../composables/useTable';
import type { TableBodyProps, TableRow } from './types';
import type { NbParts, UiProp } from '../../ui/parts';
import type { MotionLevel } from '../../ui/motion';
import { useUi } from '../../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface TbodyProps {
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

    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Tbody']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
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

const { cls, attrs } = useUi('Tbody', props);

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
    <tbody v-if="!shouldUseDefer" v-bind="attrs()" :class="cls('root')">
        <TrPlaceholder v-if="showPlaceholder" :placeholders="loadingRows" />
        
        <template v-else-if="showEmptyMessage">
            <tr>
                <Td colspan="999" :class="cls('empty', 'dark:text-gray-400 py-8')">
                    {{ props.emptyMessage || props.noRecordsMessage }}
                </Td>
            </tr>
        </template>
        
        <template v-else>
            <slot />
        </template>
    </tbody>
    
    <tbody v-else v-bind="attrs()" :class="cls('root')">
        <Deferred :data="typeof props.data === 'string' ? props.data : ''">
            <template #fallback>
                <TrPlaceholder v-if="!props.hidePlaceholder" :placeholders="loadingRows" />
            </template>
            
            <template v-if="showEmptyMessage">
                <tr>
                    <Td colspan="999" :class="cls('empty', 'dark:text-gray-400 py-8')">
                        {{ props.emptyMessage || props.noRecordsMessage }}
                    </Td>
                </tr>
            </template>
            
            <slot />
        </Deferred>
    </tbody>
</template>
