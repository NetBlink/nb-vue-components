<script setup lang="ts">
interface TheadProps {}
defineProps<TheadProps>();
</script>
<template>
    <thead class="border-b bg-neutral-100 font-medium dark:border-neutral-500">
        <slot />
    </thead>
</template>
