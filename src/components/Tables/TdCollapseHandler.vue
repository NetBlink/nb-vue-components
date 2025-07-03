<script setup lang="ts">
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
