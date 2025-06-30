<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Tooltip } from '../../index';

library.add(faCircleQuestion);

defineProps(['value', 'sublabel', 'required', 'customClass', 'tooltip']);
</script>

<template>
    <label class="mb-1 block text-sm font-medium text-gray-700" :class="customClass">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
        <span v-if="!!sublabel" class="ml-2 text-xs text-gray-500">{{ sublabel }}</span>
        <span class="ml-1 text-red-500" v-if="required">*</span>
        <!-- Debug: Show tooltip prop value -->
        <span v-if="tooltip" class="ml-1 text-xs text-blue-500">[TOOLTIP: {{ tooltip }}]</span>
        <span v-else class="ml-1 text-xs text-red-500">[NO TOOLTIP]</span>
        <Tooltip v-if="tooltip" :content="tooltip" class="ml-1 inline-block">
            <FontAwesomeIcon :icon="faCircleQuestion" class="h-3 w-3 cursor-help text-gray-400 transition-colors hover:text-gray-600" />
        </Tooltip>
    </label>
</template>
