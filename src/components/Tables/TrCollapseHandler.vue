<script setup lang="ts">
/**
 * Summary row that toggles the `TrCollapse` sharing its `collapse_id`, with the whole row
 * acting as the trigger and carrying the `aria-expanded`/`aria-controls` wiring. Use
 * `TdCollapseHandler` instead when only one cell of the row should toggle it.
 */
interface TrCollapseHandlerProps {
    collapse_id?: string;
}
defineProps<TrCollapseHandlerProps>();
</script>
<template>
    <tr data-te-collapse-init :data-te-target="'#' + collapse_id" aria-expanded="false" :aria-controls="collapse_id">
        <slot />
    </tr>
</template>
