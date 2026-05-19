<script setup>
import NbIcon from '../../icons/NbIcon.vue';
import { Tooltip } from '../../index';

defineProps(['value', 'sublabel', 'required', 'customClass', 'tooltip']);
</script>

<template>
    <label class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200" :class="customClass">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
        <Tooltip v-if="tooltip" :content="tooltip" class="ml-1 inline-block">
            <NbIcon name="$help" class="mx-1 cursor-help" />
        </Tooltip>
        <span v-if="!!sublabel" class="ml-2 text-xs text-gray-500 dark:text-gray-400">{{ sublabel }}</span>
        <span class="ml-1 text-red-500 dark:text-red-400" v-if="required">*</span>
    </label>
</template>
