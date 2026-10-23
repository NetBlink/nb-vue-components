<script setup lang="ts">
/**
 * The hidden detail row of an expandable table row: a full-width `colspan` cell whose
 * content is revealed when a matching `TrCollapseHandler` or `TdCollapseHandler` with the
 * same `collapse_id` is clicked. Toggling is done by Tailwind Elements' `data-te-collapse`
 * behaviour, so the host app must have that initialised.
 *
 * @part root - the `<tr>`
 * @part content - the collapsing container inside the cell
 */
import type { NbParts, UiProp } from '../../ui/parts';
import { useUi } from '../../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface TrCollapseProps {
    collapse_id?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['TrCollapse']>;
}
const props = defineProps<TrCollapseProps>();

const { cls, attrs } = useUi('TrCollapse', props);
</script>
<template>
    <tr v-bind="attrs()" :class="cls('root')">
        <td colspan="999">
            <div :id="collapse_id" :class="cls('content', '!visible hidden')" data-te-collapse-item>
                <slot />
            </div>
        </td>
    </tr>
</template>
