<script setup>
defineProps({
    collapse_id: {
        type: String,
        default: 'collapse',
    },
});
</script>
<template>
    <tr data-te-collapse-init :data-te-target="'#' + collapse_id" aria-expanded="false" :aria-controls="collapse_id">
        <slot />
    </tr>
</template>
