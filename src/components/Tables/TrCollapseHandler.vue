<script setup lang="ts">
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
