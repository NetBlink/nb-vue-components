<script setup lang="ts">
/**
 * PasswordInput - Pure password input with toggle visibility
 */

import { computed } from 'vue';
import { TextInput } from '../../../index';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import type { InputProps } from '../types';

interface PasswordInputProps extends Pick<InputProps, 
    'field' | 'name' | 'required' | 'disabled' | 'placeholder' | 
    'autofocus' | 'pattern' | 'autocomplete' | 'hidePasswordToggler' | 'inputCustomClass'
> {
    modelValue?: any;
    computedName?: string;
    computedAutocomplete?: string;
    displayType?: string;
}

const props = withDefaults(defineProps<PasswordInputProps>(), {
    required: false,
    disabled: false,
    autofocus: false,
    hidePasswordToggler: false,
    inputCustomClass: '',
    displayType: 'password',
});

const emit = defineEmits<{
    'update:modelValue': [value: any];
    'toggle-password': [];
}>();

const model = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
});

const showToggle = computed(() => !props.hidePasswordToggler);

const handleToggle = () => {
    emit('toggle-password');
};
</script>

<template>
    <div class="relative flex w-full">
        <TextInput
            :id="field"
            :type="displayType"
            :class="{ [inputCustomClass]: !!inputCustomClass }"
            v-model="model"
            :required="required"
            :disabled="disabled"
            :autocomplete="computedAutocomplete"
            :placeholder="placeholder"
            :autofocus="autofocus"
            :pattern="pattern"
            :name="computedName"
        />

        <!-- Password toggle -->
        <div
            v-if="showToggle"
            @click="handleToggle"
            class="absolute top-1/2 -translate-y-1/2 right-1 z-2 flex size-8 rounded-lg hover:bg-primary-100 cursor-pointer items-center justify-center transition-all text-sm leading-normal text-gray-600"
            :class="{ 'bg-primary-50': displayType !== 'password' }"
        >
            <FontAwesomeIcon 
                :icon="displayType === 'password' ? faEye : faEyeSlash" 
            />
        </div>
    </div>
</template>
