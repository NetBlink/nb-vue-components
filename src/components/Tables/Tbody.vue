<script setup lang="ts">
import { TrPlaceholder, Td, getInertiaPage } from '../../index';
import { computed } from 'vue';

interface TbodyProps {
    /** Key in page props to get data from */
    data?: string;
    /** Whether to hide the loading placeholder */
    hidePlaceholder?: boolean;
    /** Whether to hide the "no records" message */
    hideNoRecordsMessage?: boolean;
    /** Whether to get records from pagination data structure */
    recordsFromPagination?: boolean;
    /** Message to show when no records are found */
    noRecordsMessage?: string;
    /** Whether to skip deferred loading (for documentation/standalone usage) */
    skipDeferred?: boolean;
}

const props = withDefaults(defineProps<TbodyProps>(), {
    data: '',
    hidePlaceholder: false,
    hideNoRecordsMessage: false,
    recordsFromPagination: true,
    noRecordsMessage: 'No records found',
    skipDeferred: false,
});

const records = computed(() => {
    if (props.skipDeferred) return null;
    try {
        const page = getInertiaPage();
        const records = page.props[props.data] ?? null;
        if (props.recordsFromPagination) return (records as any)?.data ?? null;
        return records;
    } catch {
        return null;
    }
});
</script>

<template>
    <tbody>
        <!-- Deferred loading for Inertia contexts -->
        <template v-if="!skipDeferred">
            <template v-if="!hideNoRecordsMessage && records">
                <tr v-if="!records.length">
                    <Td colspan="999" class="no-records-message text-center! text-gray-500">{{ noRecordsMessage }}</Td>
                </tr>
            </template>
            <slot />
        </template>

        <!-- Direct rendering for documentation/standalone usage -->
        <template v-else>
            <slot />
        </template>
    </tbody>
</template>
