<script setup>
import { Deferred } from '@inertiajs/vue3';
import { TrPlaceholder, Td, getInertiaPage } from '../../index'; 
import { computed } from 'vue';

const props = defineProps({
    data: {
        type: String,
        required: false,
        default: '',
    },
    hidePlaceholder: {
        type: Boolean,
        default: false,
    },
    hideNoRecordsMessage: {
        type: Boolean,
        default: false,
    },
    recordsFromPagination: {
        type: Boolean,
        default: true,
    },
    noRecordsMessage: {
        type: String,
        default: 'No records found',
    },
});

const records = computed(() => {
    let page = getInertiaPage();
    let records = page.props[props.data] ?? null;
    // @ts-ignore
    if (props.recordsFromPagination) return records.data ?? null;
    return records;
});
</script>

<template>
    <tbody>
        <Deferred :data="props.data">
            <template #fallback>
                <TrPlaceholder v-if="!hidePlaceholder" />
            </template>

            <template v-if="!hideNoRecordsMessage && records">
                <tr v-if="!records.length">
                    <Td colspan="999" class="no-records-message text-center! text-gray-500">{{ noRecordsMessage }}</Td>
                </tr>
            </template>

            <slot />
        </Deferred>
    </tbody>
</template>
