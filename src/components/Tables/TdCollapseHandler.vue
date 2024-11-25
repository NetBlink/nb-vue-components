<script setup>
import Td from './Td.vue';
defineProps({
    collapse_id: {
        type: String,
        default: 'collapse',
    },
});
</script>
<template>
    <Td data-te-collapse-init :data-te-target="'#' + collapse_id" aria-expanded="false" :aria-controls="collapse_id" class="cursor-pointer">
        <slot />
    </Td>
</template>
