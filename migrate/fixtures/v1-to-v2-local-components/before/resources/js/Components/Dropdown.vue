<script setup>
defineProps({ align: String, width: String });
</script>

<template>
    <div :class="align"><slot /></div>
</template>
