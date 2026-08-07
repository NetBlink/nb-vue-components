<script setup lang="ts">
/**
 * A `Td` that acts as the toggle for the `TrCollapse` sharing its `collapse_id`, rendered
 * with a pointer cursor and the `aria-expanded`/`aria-controls` wiring. Use this when only
 * one cell should expand the row; use `TrCollapseHandler` to make the entire row clickable.
 */
import Td from './Td.vue';

interface TdCollapseHandlerProps {
    collapse_id?: string;
}
defineProps<TdCollapseHandlerProps>();
</script>
<template>
    <Td data-te-collapse-init :data-te-target="'#' + collapse_id" aria-expanded="false" :aria-controls="collapse_id" class="cursor-pointer">
        <slot />
    </Td>
</template>
