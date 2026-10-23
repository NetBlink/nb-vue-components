<script setup lang="ts">
/**
 * InputWrapper - Wrapper component for form inputs with label and error handling
 */

import { InputLabel, InputError } from '../../../index';
import type { InputProps } from '../types';
import type { NbClassValue } from '../../../ui/merge';
import type { MotionLevel } from '../../../ui/motion';
import { heightTransition } from '../../../ui/flip';

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
    /** Resolved motion level of the owning `Input` */
    level?: MotionLevel;
}

const props = withDefaults(defineProps<InputWrapperProps>(), {
    noLabel: false,
    required: false,
    level: 'smooth',
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

        <Transition v-bind="heightTransition(level)">
            <InputError 
                v-if="hasFormErrors" 
                :message="formError" 
                :class="errorClass" 
            />
        </Transition>
    </div>
</template>
