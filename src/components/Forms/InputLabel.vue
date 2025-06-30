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
        <Tooltip v-if="tooltip" :content="tooltip" class="ml-1 inline-block">
            <FontAwesomeIcon :icon="faCircleQuestion" class="mx-1 cursor-help" />
        </Tooltip>
        <span v-if="!!sublabel" class="ml-2 text-xs text-gray-500">{{ sublabel }}</span>
        <span class="ml-1 text-red-500" v-if="required">*</span>
    </label>
</template>
