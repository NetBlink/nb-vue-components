<script setup lang="ts">
/**
 * Summary row that toggles the `TrCollapse` sharing its `collapse_id`, with the whole row
 * acting as the trigger and carrying the `aria-expanded`/`aria-controls` wiring. Use
 * `TdCollapseHandler` instead when only one cell of the row should toggle it.
 *
 * @part root - the `<tr>`
 */
import type { NbParts, UiProp } from '../../ui/parts';
import { useUi } from '../../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface TrCollapseHandlerProps {
    collapse_id?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['TrCollapseHandler']>;
}
const props = defineProps<TrCollapseHandlerProps>();

const { cls, attrs } = useUi('TrCollapseHandler', props);
</script>
<template>
    <tr v-bind="attrs()" :class="cls('root')" data-te-collapse-init :data-te-target="'#' + collapse_id" aria-expanded="false" :aria-controls="collapse_id">
        <slot />
    </tr>
</template>
