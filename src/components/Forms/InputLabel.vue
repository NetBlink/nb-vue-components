<script setup>
defineProps(['value', 'sublabel', 'required', 'customClass']);
</script>

<template>
    <label class="mb-1 block text-sm font-medium text-gray-700" :class="customClass">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
        <span v-if="!!sublabel" class="ml-2 text-xs text-gray-500">{{ sublabel }}</span>
        <span class="ml-1 text-red-500" v-if="required">*</span>
    </label>
</template>
