<script setup lang="ts">
import { computed } from 'vue';

interface RadioButtonEmits {
    /** Emitted when the radio button value changes */
    'update:modelValue': [value: string];
}

interface RadioButtonProps {
    /** Unique identifier for the radio button */
    id?: string;
    /** Name attribute for grouping radio buttons */
    name?: string;
    /** Value of the radio button */
    value?: string;
    /** Whether the radio button is checked (deprecated - use modelValue) */
    isChecked?: boolean;
    /** The current selected value (used with v-model) */
    modelValue?: string;
    /** Label text for the radio button */
    label?: string;
    /** Form object containing field values and errors */
    form?: {
        [key: string]: any;
        errors?: { [key: string]: string };
    };
    /** Field name for form binding */
    field?: string;
}

const emit = defineEmits<RadioButtonEmits>();
const props = withDefaults(defineProps<RadioButtonProps>(), {
    id: undefined,
    name: undefined,
    value: undefined,
    isChecked: false,
    modelValue: undefined,
    label: undefined,
    form: undefined,
    field: undefined,
});

/**
 * Handle radio button value change
 */
const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (props.form && props.field) {
        props.form[props.field] = target.value;
    }
    emit('update:modelValue', target.value);
};

// Computed value for checking if this radio is selected
const isSelected = computed(() => {
    if (props.form && props.field) {
        return props.form[props.field] === props.value;
    }
    return props.modelValue === props.value;
});

// Generate unique ID if not provided
const radioId = computed(() => {
    return props.id || `radio-${props.field || 'radio'}-${props.value}`;
});
</script>

<template>
    <div class="flex items-center space-x-3">
        <input
            :id="radioId"
            type="radio"
            :name="name || field"
            :value="value"
            :checked="isSelected"
            @change="updateValue"
            class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
        />
        <label :for="radioId" class="cursor-pointer text-sm font-medium text-gray-700">
            {{ label }}
        </label>
    </div>
</template>
