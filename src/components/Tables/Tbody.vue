<script setup lang="ts">
import { Deferred } from '@inertiajs/vue3';
import TrPlaceholder, { getInertiaPage } from '../../index';
import { computed } from 'vue';
import { Td } from '../../index';

interface TbodyProps {
    data?: string;
    hidePlaceholder?: boolean;
    hideNoRecordsMessage?: boolean;
    recordsFromPagination?: boolean;
    noRecordsMessage?: string;
    ignoreDefer?: boolean;
}
const props = defineProps<TbodyProps>();

const records = computed(() => {
    let page = getInertiaPage();
    let records = props.data ? page.props[props.data] ?? null : null;
    // @ts-ignore
    if (props.recordsFromPagination) return records?.data ?? null;
    return records;
});
</script>

<template>
    <tbody v-if="props.ignoreDefer">
        <template v-if="!props.hideNoRecordsMessage && records">
            <tr v-if="!records.length">
                <Td colspan="999" class="no-records-message !text-center text-gray-500">{{ props.noRecordsMessage }}</Td>
            </tr>
        </template>
        <slot />
    </tbody>
    <tbody v-else>
        <Deferred :data="props.data">
            <template #fallback>
                <TrPlaceholder v-if="!props.hidePlaceholder" />
            </template>
            <template v-if="!props.hideNoRecordsMessage && records">
                <tr v-if="!records.length">
                    <Td colspan="999" class="no-records-message !text-center text-gray-500">{{ props.noRecordsMessage }}</Td>
                </tr>
            </template>
            <slot />
        </Deferred>
    </tbody>
</template>
