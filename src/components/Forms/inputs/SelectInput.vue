<script setup lang="ts">
/**
 * SelectInput - Pure select element without wrapper
 */

import { computed } from 'vue';
import { normalizeClass } from 'vue';
import type { InputProps, InputPartResolver } from '../types';

interface SelectInputProps extends Pick<InputProps, 
    'field' | 'name' | 'required' | 'disabled'
> {
    modelValue?: any;
    computedName?: string;
    cls?: InputPartResolver;
}

const props = withDefaults(defineProps<SelectInputProps>(), {
    required: false,
    disabled: false,
    cls: (_part: string, ...defaults: unknown[]) => normalizeClass(defaults),
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
        :class="
            cls(
                'input',
                'focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-400 dark:focus:ring-primary-400 dark:disabled:border-gray-700 dark:disabled:bg-gray-800/50 dark:disabled:text-gray-500 dark:[&>option]:bg-gray-800 dark:[&>option]:text-gray-100'
            )
        "
    >
        <slot />
    </select>
</template>
