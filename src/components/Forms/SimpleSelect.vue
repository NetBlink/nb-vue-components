<script setup lang="ts">
/**
 * Simple Select component that works with options array
 *
 * @component
 *
 * @prop {Object} form - Inertia form object
 * @prop {string} field - Field name in the form object
 * @prop {string} label - Label text displayed above select
 * @prop {Array} options - Array of options [{value, label, disabled?}, ...]
 * @prop {string} placeholder - Placeholder text for empty option
 * @prop {boolean} required - Whether the field is required
 * @prop {boolean} disabled - Whether the select is disabled
 * @prop {boolean} noLabel - Whether to hide the label
 * @prop {string} tooltip - Tooltip text shown next to label
 * @prop {any} modelValue - Direct value binding (alternative to form/field)
 */

import { computed } from 'vue';
import { InputLabel, InputError, Tooltip } from '../../index';

interface Option {
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
    /** Array of options */
    options: Option[];
    /** Placeholder text for empty option */
    placeholder?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Whether the select is disabled */
    disabled?: boolean;
    /** Whether to hide the label */
    noLabel?: boolean;
    /** Tooltip text shown next to label */
    tooltip?: string;
    /** Direct value binding (alternative to form/field) */
    modelValue?: any;
    /** Custom CSS classes */
    customClass?: string;
}

interface SelectEmits {
    /** Emitted when the select value changes */
    'update:modelValue': [value: any];
}

const props = withDefaults(defineProps<SelectProps>(), {
    form: undefined,
    field: undefined,
    label: undefined,
    placeholder: 'Select an option...',
    required: false,
    disabled: false,
    noLabel: false,
    tooltip: undefined,
    modelValue: undefined,
    customClass: '',
});

const emit = defineEmits<SelectEmits>();

// Computed value that works with both form/field and v-model patterns
const value = computed({
    get() {
        if (props.modelValue !== undefined) {
            return props.modelValue;
        }
        return props.form && props.field ? props.form[props.field] : undefined;
    },
    set(newValue) {
        if (props.modelValue !== undefined) {
            emit('update:modelValue', newValue);
        } else if (props.form && props.field) {
            props.form[props.field] = newValue;
        }
    },
});

// Computed error message
const errorMessage = computed(() => {
    if (props.form?.errors && props.field) {
        return props.form.errors[props.field];
    }
    return undefined;
});

// Computed label text
const labelText = computed(() => {
    if (props.label) return props.label;
    if (props.field) {
        return props.field
            .split('_')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    return '';
});

// Generate unique ID
const selectId = computed(() => props.field || `select-${Math.random().toString(36).substr(2, 9)}`);
</script>

<template>
    <div class="relative">
        <!-- Label -->
        <div v-if="!noLabel && (label || field)" class="mb-2 flex items-center gap-2">
            <InputLabel :for="selectId" :value="labelText" :required="required" />
            <Tooltip v-if="tooltip" :content="tooltip" />
        </div>

        <!-- Select -->
        <select
            :id="selectId"
            v-model="value"
            :required="required"
            :disabled="disabled"
            class="focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm transition-colors focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
            :class="[
                customClass,
                {
                    'border-red-500 focus:border-red-500 focus:ring-red-500': errorMessage,
                },
            ]"
        >
            <!-- Placeholder option -->
            <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>

            <!-- Options -->
            <option v-for="option in options" :key="option.value" :value="option.value" :disabled="option.disabled">
                {{ option.label }}
            </option>
        </select>

        <!-- Error Message -->
        <InputError v-if="errorMessage" :message="errorMessage" class="mt-1" />
    </div>
</template>
