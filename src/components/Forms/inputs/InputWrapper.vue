<script setup lang="ts">
/**
 * InputWrapper - Wrapper component for form inputs with label and error handling
 */

import { InputLabel, InputError } from '../../../index';
import type { InputProps } from '../types';

interface InputWrapperProps extends Pick<InputProps, 
    'field' | 'label' | 'noLabel' | 'sublabel' | 'tooltip' | 'required' | 'labelCustomClass'
> {
    computedLabel?: string;
    hasFormErrors?: boolean;
    formError?: string | null;
}

const props = withDefaults(defineProps<InputWrapperProps>(), {
    noLabel: false,
    required: false,
    labelCustomClass: '',
});
</script>

<template>
    <div :class="noLabel ? 'mb-2' : 'mb-4'">
        <InputLabel
            v-if="!noLabel"
            :customClass="labelCustomClass"
            :for="field"
            :value="computedLabel"
            :sublabel="sublabel"
            :required="required"
            :tooltip="tooltip"
        />

        <slot />

        <InputError 
            v-if="hasFormErrors" 
            :message="formError" 
            class="mt-2" 
        />
    </div>
</template>
