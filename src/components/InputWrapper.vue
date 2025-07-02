<script setup lang="ts">
/**
 * InputWrapper component
 *
 * A reusable wrapper that standardizes label, tooltip, sublabel, and error handling
 * across all form input components.
 *
 * @component
 *
 * @prop {string} field - Field name for the input
 * @prop {string} label - Label text (auto-generated from field if not provided)
 * @prop {string} sublabel - Sub-label text shown below main label
 * @prop {string} tooltip - Tooltip text shown next to label
 * @prop {boolean} required - Whether the field is required
 * @prop {boolean} noLabel - Whether to hide the label
 * @prop {string} labelCustomClass - Custom CSS classes for the label
 * @prop {Object} form - Form object containing field values and errors
 * @prop {string} error - Custom error message (overrides form error)
 * @prop {string} htmlFor - HTML for attribute (defaults to field)
 */

import { computed } from 'vue';
import { InputLabel, InputError } from '../index';

interface InputWrapperProps {
    /** Field name for the input */
    field?: string;
    /** Label text (auto-generated from field if not provided) */
    label?: string;
    /** Sub-label text shown below main label */
    sublabel?: string;
    /** Tooltip text shown next to label */
    tooltip?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Whether to hide the label */
    noLabel?: boolean;
    /** Custom CSS classes for the label */
    labelCustomClass?: string;
    /** Form object containing field values and errors */
    form?: {
        [key: string]: any;
        errors?: { [key: string]: string };
    };
    /** Custom error message (overrides form error) */
    error?: string;
    /** HTML for attribute (defaults to field) */
    htmlFor?: string;
}

const props = withDefaults(defineProps<InputWrapperProps>(), {
    field: undefined,
    label: undefined,
    sublabel: undefined,
    tooltip: undefined,
    required: false,
    noLabel: false,
    labelCustomClass: '',
    form: undefined,
    error: undefined,
    htmlFor: undefined,
});

// Helper function to convert field names to readable labels
function ucwords(text: string): string {
    let res: string[] = [];
    text.split('_')
        .join(' ')
        .split(' ')
        .map(function (v) {
            res.push(v[0].toUpperCase() + v.slice(1));
        });
    return res.join(' ');
}

// Computed label text
const computedLabel = computed(() => {
    if (props.label) return props.label;
    if (props.field) return ucwords(props.field);
    return '';
});

// Computed error message
const errorMessage = computed(() => {
    if (props.error) return props.error;
    if (props.form?.errors?.[props.field || '']) {
        return props.form.errors[props.field || ''];
    }
    return null;
});

// Computed HTML for attribute
const forAttribute = computed(() => {
    return props.htmlFor || props.field;
});
</script>

<template>
    <div :class="noLabel ? 'mb-2' : 'mb-4'">
        <!-- Label with tooltip and sublabel -->
        <InputLabel
            v-if="!noLabel && (computedLabel || field)"
            :customClass="labelCustomClass"
            :for="forAttribute"
            :value="computedLabel"
            :sublabel="sublabel"
            :required="required"
            :tooltip="tooltip"
        />

        <!-- Input content slot -->
        <slot />

        <!-- Error message -->
        <InputError v-if="errorMessage" :message="errorMessage" class="mt-2" />
    </div>
</template>
