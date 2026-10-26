<script setup>
defineProps({ customClass: String });
</script>

<template>
    <button :class="customClass"><slot /></button>
</template>
