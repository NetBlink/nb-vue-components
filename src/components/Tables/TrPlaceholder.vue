<script setup lang="ts">
/**
 * Loading skeleton for a table body: renders `placeholders` full-width rows containing a
 * pulsing grey bar. `Tbody` inserts it automatically while data is loading or deferred, so
 * you normally only use it directly when driving the loading state by hand.
 *
 * @part row - each skeleton `<tr>`
 * @part bar - the pulsing bar
 * @motion all - the bar keeps pulsing at every level: it is a status indicator
 */
import { Td } from '../../index';
import type { NbParts, UiProp } from '../../ui/parts';
import { useUi } from '../../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface TrPlaceholderProps {
    placeholders?: number;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['TrPlaceholder']>;
}

const props = defineProps<TrPlaceholderProps>();

const { cls, attrs } = useUi('TrPlaceholder', props, { classPart: 'row' });
</script>

<template>
    <tr v-for="i in props.placeholders" :key="i" v-bind="attrs()" :class="cls('row')">
        <Td colspan="999">
            <div :class="cls('bar', 'tr-placeholder bg-opacity-75 h-8 w-full animate-pulse rounded-md bg-gray-500')"></div>
        </Td>
    </tr>
</template>
