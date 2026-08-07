<script setup lang="ts">
/**
 * The hidden detail row of an expandable table row: a full-width `colspan` cell whose
 * content is revealed when a matching `TrCollapseHandler` or `TdCollapseHandler` with the
 * same `collapse_id` is clicked. Toggling is done by Tailwind Elements' `data-te-collapse`
 * behaviour, so the host app must have that initialised.
 */
interface TrCollapseProps {
    collapse_id?: string;
}
defineProps<TrCollapseProps>();
</script>
<template>
    <tr>
        <td colspan="999">
            <div :id="collapse_id" class="!visible hidden" data-te-collapse-item>
                <slot />
            </div>
        </td>
    </tr>
</template>
