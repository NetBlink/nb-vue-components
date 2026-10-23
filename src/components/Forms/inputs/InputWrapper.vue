<script setup lang="ts">
/**
 * InputWrapper - Wrapper component for form inputs with label and error handling
 */

import { InputLabel, InputError } from '../../../index';
import type { InputProps } from '../types';
import type { NbClassValue } from '../../../ui/merge';

interface InputWrapperProps extends Pick<InputProps, 
    'field' | 'label' | 'noLabel' | 'sublabel' | 'tooltip' | 'required'
> {
    computedLabel?: string;
    hasFormErrors?: boolean;
    formError?: string | null;
    /** Resolved classes from the owning `Input` */
    rootClass?: NbClassValue;
    labelClass?: NbClassValue;
    errorClass?: NbClassValue;
}

const props = withDefaults(defineProps<InputWrapperProps>(), {
    noLabel: false,
    required: false,
});
</script>

<template>
    <div :class="rootClass">
        <InputLabel
            v-if="!noLabel"
            :class="labelClass"
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
            :class="errorClass" 
        />
    </div>
</template>
