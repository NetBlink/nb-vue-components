<script setup lang="ts">
/**
 * InputWithActions - Input with addon, submit button, and WhatsApp link
 */

import { computed } from 'vue';
import { baseLayer } from '../../../ui/merge';
import { TextInput, SubmitButton } from '../../../index';
import NbIcon from '../../../icons/NbIcon.vue';
import { normalizeClass } from 'vue';
import type { InputProps, InertiaForm, InputPartResolver } from '../types';

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
    cls?: InputPartResolver;
}

const props = withDefaults(defineProps<InputWithActionsProps>(), {
    type: 'text',
    required: false,
    disabled: false,
    autofocus: false,
    noNumberSpinners: false,
    cls: (_part: string, ...defaults: unknown[]) => normalizeClass(defaults),
});

const emit = defineEmits<{
    'update:modelValue': [value: any];
}>();

const model = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
});

const isGrouped = computed(() => !!(props.addon || props.submitBtn || props.whatsApp));

const inputClasses = computed(() => ({
    'rounded-l-none shadow-none': props.addon,
    'rounded-r-none': props.submitBtn || props.whatsApp,
    // The ring lives on the wrapper so it encircles addon + input + button as one
    // control; the bare input must not draw a second ring inside it. (The input
    // keeps its own focus border colour, as it always has.)
    'focus:ring-0': isGrouped.value,
}));
</script>

<template>
    <div
        :class="
            cls('group', 'relative flex w-full max-w-full items-stretch rounded-md', {
                'focus-within:ring-primary-500 dark:focus-within:ring-primary-400 focus-within:ring-2': isGrouped,
            })
        "
    >
        <span
            v-if="addon"
            :class="
                cls(
                    'addon',
                    'flex items-center rounded-l-md rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-3 text-center text-sm whitespace-nowrap text-gray-500 dark:border-gray-600 dark:bg-gray-900/60 dark:text-gray-400',
                    { shadow: !disabled }
                )
            "
        >
            {{ addon }}
        </span>

        <TextInput
            :id="field"
            :type="type"
            :class="cls('input')" :ui="{ root: baseLayer(inputClasses) }"
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
                :class="cls('button')" :ui="{ root: baseLayer('z-2 rounded-l-none') }"
                :id="`submit-button-${field}`"
            >
                {{ submitBtn }}
            </SubmitButton>

            <SubmitButton
                v-if="$slots?.submit"
                :form="form"
                :class="cls('button')" :ui="{ root: baseLayer('z-2 rounded-l-none') }"
                id="button-input"
            >
                <slot name="submit" />
            </SubmitButton>
        </template>

        <!-- Mirrors Button's primary variant so in-input actions read as the same control -->
        <a
            v-if="whatsApp"
            :class="
                cls(
                    'button',
                    'bg-primary-600 hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-800 z-2 inline-flex cursor-pointer items-center justify-center rounded-md rounded-l-none border border-transparent px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out focus:ring-0 focus:ring-offset-0 focus:outline-hidden'
                )
            "
            :href="whatsApp"
            target="_blank"
        >
            <NbIcon name="$whatsapp" size="2xl" />
        </a>
    </div>
</template>
