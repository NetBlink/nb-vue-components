<script setup lang="ts">
/**
 * BaseInput - Pure input element without wrapper
 */

import { computed } from 'vue';
import { TextInput } from '../../../index';
import type { InputProps } from '../types';

interface BaseInputProps extends Pick<InputProps, 
    'field' | 'name' | 'required' | 'disabled' | 'placeholder' | 
    'autofocus' | 'pattern' | 'min' | 'max' | 'step' | 'autocomplete' | 'inputCustomClass' | 'noNumberSpinners'
> {
    type?: string;
    modelValue?: any;
    computedName?: string;
    computedAutocomplete?: string;
}

const props = withDefaults(defineProps<BaseInputProps>(), {
    type: 'text',
    required: false,
    disabled: false,
    autofocus: false,
    inputCustomClass: '',
    noNumberSpinners: false,
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
    <TextInput
        :id="field"
        :type="type"
        :class="{ [inputCustomClass]: !!inputCustomClass }"
        v-model="model"
        :required="required"
        :disabled="disabled"
        :autocomplete="computedAutocomplete"
        :min="min"
        :max="max"
        :step="step"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :pattern="pattern"
        :name="computedName"
        :no-number-spinners="noNumberSpinners"
    />
</template>
