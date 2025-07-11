<script setup lang="ts">
/**
 * SelectInput - Pure select element without wrapper
 */

import { computed } from 'vue';
import type { InputProps } from '../types';

interface SelectInputProps extends Pick<InputProps, 
    'field' | 'name' | 'required' | 'disabled' | 'inputCustomClass'
> {
    modelValue?: any;
    computedName?: string;
}

const props = withDefaults(defineProps<SelectInputProps>(), {
    required: false,
    disabled: false,
    inputCustomClass: '',
});

const emit = defineEmits<{
    'update:modelValue': [value: any];
}>();

const model = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
});
</script>

<template>
    <select
        v-model="model"
        :id="field"
        :required="required"
        :disabled="disabled"
        :name="computedName"
        class="focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
        :class="{ [inputCustomClass]: !!inputCustomClass }"
    >
        <slot />
    </select>
</template>
