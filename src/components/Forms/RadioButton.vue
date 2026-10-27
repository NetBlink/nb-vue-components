<script setup lang="ts">
/**
 * One radio option with its label. Render several sharing the same `name` (or the same
 * `:form` + `field` pair) to form a group, selection is derived by comparing this
 * option's `value` against the bound field, and choosing it writes straight back to the
 * Inertia form. There is no wrapping fieldset or error display; add those yourself.
 *
 * @part root - the row wrapper
 * @part input - the radio `<input>`
 * @part label - the `<label>`
 * @motion off - the dot appears instantly
 * @motion simple - the dot appears instantly
 * @motion smooth - the colour fades
 * @motion fancy - the dot pops on a spring
 */
import { computed } from 'vue';
import { levelAtLeast, type MotionLevel } from '../../ui/motion';
import type { NbParts, UiProp } from '../../ui/parts';
import { useUi } from '../../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface RadioButtonEmits {
    /** Emitted when the radio button value changes */
    'update:modelValue': [value: string];
}

export interface RadioButtonProps {
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
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['RadioButton']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
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

const { cls, attrs, level } = useUi('RadioButton', props);

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
    <div v-bind="attrs()" :class="cls('root', 'flex items-center space-x-3')">
        <input
            :id="radioId"
            type="radio"
            :name="name || field"
            :value="value"
            :checked="isSelected"
            @change="updateValue"
            :class="
                cls(
                    'input',
                    'text-primary-600 focus:ring-primary-500 dark:checked:bg-primary-500 h-4 w-4 border-gray-300 focus:ring-2 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-offset-gray-800',
                    { 'transition-colors duration-150': levelAtLeast(level, 'smooth'), 'checked:animate-check-pop': level === 'fancy' }
                )
            "
        />
        <label :for="radioId" :class="cls('label', 'cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-200')">
            {{ label }}
        </label>
    </div>
</template>
