<script setup lang="ts">
/**
 * Loading skeleton for a table body: renders `placeholders` full-width rows containing a
 * pulsing grey bar. `Tbody` inserts it automatically while data is loading or deferred, so
 * you normally only use it directly when driving the loading state by hand.
 */
import { Td } from '../../index';

interface TrPlaceholderProps {
    placeholders?: number;
}

const props = defineProps<TrPlaceholderProps>();
</script>

<template>
    <tr v-for="i in props.placeholders" :key="i">
        <Td colspan="999">
            <div class="tr-placeholder bg-opacity-75 h-8 w-full animate-pulse rounded-md bg-gray-500"></div>
        </Td>
    </tr>
</template>
