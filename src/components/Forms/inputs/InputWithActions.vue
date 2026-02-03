<script setup lang="ts">
/**
 * InputWithActions - Input with addon, submit button, and WhatsApp link
 */

import { computed } from 'vue';
import { TextInput, SubmitButton } from '../../../index';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import type { InputProps, InertiaForm } from '../types';

interface InputWithActionsProps
    extends Pick<
        InputProps,
        | 'field'
        | 'name'
        | 'required'
        | 'disabled'
        | 'placeholder'
        | 'autofocus'
        | 'pattern'
        | 'min'
        | 'max'
        | 'step'
        | 'autocomplete'
        | 'inputCustomClass'
        | 'buttonCustomClass'
        | 'addon'
        | 'submitBtn'
        | 'whatsApp'
        | 'noNumberSpinners'
    > {
    type?: string;
    modelValue?: any;
    computedName?: string;
    computedAutocomplete?: string;
    form?: InertiaForm;
}

const props = withDefaults(defineProps<InputWithActionsProps>(), {
    type: 'text',
    required: false,
    disabled: false,
    autofocus: false,
    inputCustomClass: '',
    buttonCustomClass: '',
    noNumberSpinners: false,
});

const emit = defineEmits<{
    'update:modelValue': [value: any];
}>();

const model = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
});

const inputClasses = computed(() => ({
    'rounded-l-none shadow-none': props.addon,
    'rounded-r-none': props.submitBtn || props.whatsApp,
    [props.inputCustomClass]: !!props.inputCustomClass,
}));
</script>

<template>
    <div class="relative flex w-full max-w-full items-stretch">
        <span
            v-if="addon"
            class="flex items-center rounded-l-md rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500"
            :class="{ shadow: !disabled }"
        >
            {{ addon }}
        </span>

        <TextInput
            :id="field"
            :type="type"
            :class="inputClasses"
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

        <template v-if="form">
            <SubmitButton
                v-if="submitBtn"
                :form="form"
                class="z-2 inline-block rounded-l-none"
                :class="buttonCustomClass"
                :id="`submit-button-${field}`"
            >
                {{ submitBtn }}
            </SubmitButton>

            <SubmitButton v-if="$slots?.submit" :form="form" class="z-2 inline-block rounded-l-none" :class="buttonCustomClass" id="button-input">
                <slot name="submit" />
            </SubmitButton>
        </template>

        <a
            v-if="whatsApp"
            class="bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg"
            :class="buttonCustomClass"
            :href="whatsApp"
            target="_blank"
        >
            <FontAwesomeIcon icon="fab fa-whatsapp" size="2xl" />
        </a>
    </div>
</template>
