<script setup lang="ts">
/**
 * A `Td` that acts as the toggle for the `TrCollapse` sharing its `collapse_id`, rendered
 * with a pointer cursor and the `aria-expanded`/`aria-controls` wiring. Use this when only
 * one cell should expand the row; use `TrCollapseHandler` to make the entire row clickable.
 *
 * @part root - the `<td>`, rendered by `Td`
 */
import Td from './Td.vue';
import type { NbParts, UiProp } from '../../ui/parts';
import { useUi } from '../../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface TdCollapseHandlerProps {
    collapse_id?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['TdCollapseHandler']>;
}
const props = defineProps<TdCollapseHandlerProps>();

const { cls, attrs } = useUi('TdCollapseHandler', props);
</script>
<template>
    <Td v-bind="attrs()" data-te-collapse-init :data-te-target="'#' + collapse_id" aria-expanded="false" :aria-controls="collapse_id" :class="cls('root', 'cursor-pointer')">
        <slot />
    </Td>
</template>
