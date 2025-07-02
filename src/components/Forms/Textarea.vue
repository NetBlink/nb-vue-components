<script setup lang="ts">
import { computed, ref, watch, onMounted, defineModel } from 'vue';
import { InputWrapper, SubmitButton } from '../../index';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface TextareaProps {
    /** Field name for form binding */
    field?: string;
    /** Label text for the textarea */
    label?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Whether the textarea is disabled */
    disabled?: boolean;
    /** Form object containing field values and errors */
    form?: {
        [key: string]: any;
        errors?: { [key: string]: string };
    };
    /** Addon text or content */
    addon?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Whether to hide the label */
    noLabel?: boolean;
    /** Whether to autofocus the textarea */
    autofocus?: boolean;
    /** The textarea value */
    modelValue?: string;
    /** Number of rows */
    rows?: number;
    /** Name attribute */
    name?: string;
    /** Sub-label text */
    sublabel?: string;
    /** Submit button text */
    submitBtn?: string;
    /** WhatsApp link */
    whatsApp?: string;
    /** Autocomplete attribute */
    autocomplete?: string;
    /** Tooltip text */
    tooltip?: string;
    /** Custom CSS classes for the textarea */
    customClass?: string;
    /** Custom CSS classes for the label */
    labelCustomClass?: string;
    /** Custom CSS classes for the button */
    buttonCustomClass?: string;
    /** Custom error message */
    error?: string;
}

interface TextareaEmits {
    /** Emitted when the textarea value changes */
    (e: 'update:modelValue', value: string): void;
    /** Emitted when value changes with old and new values */
    (e: 'changed', data: { value: string; old_value: string }): void;
}

const props = withDefaults(defineProps<TextareaProps>(), {
    required: false,
    disabled: false,
    noLabel: false,
    autofocus: false,
    rows: 3,
    customClass: '',
    labelCustomClass: '',
    buttonCustomClass: '',
});

const emit = defineEmits<TextareaEmits>();

/**
 * Converts underscored text to title case
 */
function ucwords(text: string): string {
    return text
        .split('_')
        .join(' ')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// State management
const noForm = ref(false);
const model = defineModel();
const value = ref();
const prevValue = ref();
const isSettingSilently = ref(false);

// Initialize component
onMounted(() => {
    noForm.value = !props.form;
    value.value = noForm.value ? model.value : props.form?.[props.field!];
});

// Watch for value changes
watch(
    () => value.value,
    (val, oldval) => {
        if (val === oldval) return;

        if (noForm.value) {
            model.value = val;
        } else if (props.form && props.field) {
            props.form[props.field] = val;
        }

        prevValue.value = oldval;
        emit('update:modelValue', val);

        if (isSettingSilently.value) {
            isSettingSilently.value = false;
            return;
        }

        emit('changed', { value: val, old_value: oldval });
    }
);

// Watch for form field changes
watch(
    () => (props.field && props.form ? props.form[props.field] : null),
    (val) => {
        value.value = noForm.value ? model.value : val;
    },
    { deep: true }
);

// Watch for model value changes (when using v-model directly)
watch(
    () => model.value,
    (val) => {
        value.value = val;
    }
);

// Computed label
const computedLabel = computed(() => {
    return props.label || (props.field ? ucwords(props.field) : '');
});

// Error message
const errorMessage = computed(() => {
    return props.error || props.form?.errors?.[props.field!];
});

// Exposed methods for compatibility with Input component
const setValueSilently = (val: any) => {
    value.value = val;
    isSettingSilently.value = true;
};

const getPreviousValue = () => {
    return prevValue.value;
};

defineExpose({
    setValueSilently,
    getPreviousValue,
});
</script>

<template>
    <InputWrapper
        :field="field"
        :label="computedLabel"
        :sublabel="sublabel"
        :tooltip="tooltip"
        :required="required"
        :noLabel="noLabel"
        :labelCustomClass="labelCustomClass"
        :form="form"
        :error="errorMessage"
        :htmlFor="field"
    >
        <div class="relative flex w-full max-w-full items-stretch">
            <span
                v-if="addon"
                class="border-gray flex items-center rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500"
                :class="{ shadow: !disabled }"
            >
                {{ addon }}
            </span>

            <textarea
                :id="field"
                class="focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
                :class="{
                    'rounded-l-none shadow-none': addon,
                    'rounded-r-none': !!submitBtn || whatsApp || $slots?.submit,
                    [customClass]: !!customClass,
                }"
                :rows="rows"
                v-model="value"
                :required="required"
                :disabled="disabled"
                :autocomplete="autocomplete || field"
                :placeholder="placeholder"
                :autofocus="autofocus"
                :name="name || field"
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
                <SubmitButton
                    v-if="$slots?.submit"
                    :form="form"
                    class="z-2 inline-block rounded-l-none"
                    :class="buttonCustomClass"
                    id="button-textarea"
                >
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
                <FontAwesomeIcon v-bind:icon="faWhatsapp" size="2xl" />
            </a>
        </div>
    </InputWrapper>
</template>
