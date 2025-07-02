<script setup lang="ts">
/**
 * Simple Select component
 *
 * Works with both array options and slot options, API-compatible with Input component.
 * For advanced features like search, API search, multiple selection, use RichSelect.
 *
 * @component
 *
 * @prop {Object} form - Inertia form object
 * @prop {string} field - Field name in the form object
 * @prop {string} label - Label text displayed above select
 * @prop {Array} options - Array of options [{value, label, disabled?}, ...] or simple array ['opt1', 'opt2']
 * @prop {string} placeholder - Placeholder text (shows as first disabled option)
 * @prop {boolean} required - Whether the field is required
 * @prop {boolean} disabled - Whether the select is disabled
 * @prop {boolean} noLabel - Whether to hide the label
 * @prop {string} tooltip - Tooltip text shown next to label
 * @prop {any} modelValue - Direct value binding (alternative to form/field)
 * @prop {string} name - Name attribute for the select element
 * @prop {string} sublabel - Sub-label text
 * @prop {string} customClass - Custom CSS classes for the select element
 * @prop {string} labelCustomClass - Custom CSS classes for the label
 * @prop {string} error - Custom error message
 */

import { computed, ref, watch, onMounted, defineModel } from 'vue';
import { InputWrapper } from '../../index';

interface SelectOption {
    value: any;
    label: string;
    disabled?: boolean;
}

interface SelectProps {
    /** Form object containing field values and errors */
    form?: {
        [key: string]: any;
        errors?: { [key: string]: string };
    };
    /** Field name for form binding */
    field?: string;
    /** Label text displayed above select */
    label?: string;
    /** Array of options - can be objects {value, label, disabled?} or simple strings */
    options?: (SelectOption | string)[];
    /** Placeholder text */
    placeholder?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Whether the select is disabled */
    disabled?: boolean;
    /** Whether to hide the label */
    noLabel?: boolean;
    /** Tooltip text shown next to label */
    tooltip?: string;
    /** Direct value binding */
    modelValue?: any;
    /** Name attribute for the select */
    name?: string;
    /** Sub-label text */
    sublabel?: string;
    /** Custom CSS classes for the select */
    customClass?: string;
    /** Custom CSS classes for the label */
    labelCustomClass?: string;
    /** Custom error message */
    error?: string;
}

interface SelectEmits {
    /** Emitted when the select value changes */
    (e: 'update:modelValue', value: any): void;
    /** Emitted when value changes with old and new values */
    (e: 'changed', data: { value: any; old_value: any }): void;
}

const props = withDefaults(defineProps<SelectProps>(), {
    options: () => [],
    placeholder: '',
    required: false,
    disabled: false,
    noLabel: false,
    customClass: '',
    labelCustomClass: '',
});

const emit = defineEmits<SelectEmits>();

// Utility function to convert field names to proper case
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

// Normalize options to consistent format
const normalizedOptions = computed(() => {
    if (!props.options) return [];

    return props.options.map((option) => {
        if (typeof option === 'string') {
            return { value: option, label: option, disabled: false };
        }
        return {
            value: option.value,
            label: option.label || String(option.value),
            disabled: option.disabled || false,
        };
    });
});

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
        <select
            :id="field"
            v-model="value"
            :required="required"
            :disabled="disabled"
            :name="name || field"
            class="focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
            :class="customClass"
        >
            <!-- Placeholder option -->
            <option v-if="placeholder" value="" disabled :selected="!value" class="text-gray-500">
                {{ placeholder }}
            </option>

            <!-- Array-based options -->
            <option v-for="option in normalizedOptions" :key="option.value" :value="option.value" :disabled="option.disabled">
                {{ option.label }}
            </option>

            <!-- Slot-based options (for compatibility with Input component usage) -->
            <slot />
        </select>
    </InputWrapper>
</template>
