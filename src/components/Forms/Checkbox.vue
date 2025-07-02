<script setup lang="ts">
import { computed, ref, watch, onMounted, defineModel } from 'vue';
import { InputLabel, InputError, Tooltip } from '../../index';

interface CheckboxEmits {
    /** Emitted when the checked state changes */
    'update:checked': [value: boolean | any[]];
    /** Emitted when the model value changes */
    'update:modelValue': [value: boolean | any[]];
    /** Emitted when the value changes with old/new values */
    changed: [data: { value: boolean | any[]; old_value: boolean | any[] }];
}

interface CheckboxProps {
    /** The checked state - can be boolean for single checkbox or array for multiple */
    checked?: boolean | any[];
    /** The value of the checkbox when used in arrays */
    value?: any;
    /** Custom CSS classes to apply */
    customClass?: string;
    /** ID attribute for the checkbox */
    id?: string;
    /** Form object containing field values and errors */
    form?: {
        [key: string]: any;
        errors?: { [key: string]: string };
    };
    /** Field name for form binding */
    field?: string;
    /** Label text displayed next to checkbox */
    label?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Whether the checkbox is disabled */
    disabled?: boolean;
    /** Whether to hide the label */
    noLabel?: boolean;
    /** Tooltip text shown next to label */
    tooltip?: string;
    /** Direct value binding */
    modelValue?: boolean | any[];
    /** Name attribute for the input */
    name?: string;
    /** Sub-label text */
    sublabel?: string;
    /** Text shown to the left of the checkbox */
    leftDescription?: string | boolean;
    /** Text shown to the right of the checkbox */
    rightDescription?: string | boolean;
    /** Custom CSS classes for the label */
    labelCustomClass?: string;
    /** Custom error message */
    error?: string;
}

const emit = defineEmits<CheckboxEmits>();

const props = withDefaults(defineProps<CheckboxProps>(), {
    checked: false,
    value: null,
    customClass: '',
    id: '',
    form: undefined,
    field: undefined,
    label: undefined,
    required: false,
    disabled: false,
    noLabel: false,
    tooltip: undefined,
    modelValue: undefined,
    name: undefined,
    sublabel: undefined,
    leftDescription: false,
    rightDescription: 'Enable',
    labelCustomClass: '',
    error: undefined,
});

// Helper function for label text
function ucwords(text: string) {
    return text
        .split('_')
        .join(' ')
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}

// Setup form handling similar to Switch
const model = defineModel<boolean | any[]>();
const noForm = ref(false);
const value = ref<boolean | any[]>();
const prevValue = ref<boolean | any[]>();
const isSettingSilently = ref(false);

onMounted(() => {
    noForm.value = !props.form;
    value.value = noForm.value ? model.value : props.form?.[props.field!] ?? props.checked;
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
        emit('update:checked', val);

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

// Watch for checked prop changes (for backward compatibility)
watch(
    () => props.checked,
    (val) => {
        if (!props.form && !model.value) {
            value.value = val;
        }
    }
);

// Computed values
const computedLabel = computed(() => {
    return props.label || (props.field ? ucwords(props.field) : '');
});

const errorMessage = computed(() => {
    return props.error || props.form?.errors?.[props.field!];
});

const checkboxId = computed(() => {
    return props.id || props.field || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
});

// Exposed methods for compatibility
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
    <div :class="noLabel ? 'mb-2' : 'mb-4'">
        <InputLabel
            v-if="!noLabel && label"
            :customClass="labelCustomClass"
            :for="checkboxId"
            :value="computedLabel"
            :sublabel="sublabel"
            :required="required"
            :tooltip="tooltip"
        />

        <label class="flex items-center">
            <slot v-if="$slots?.leftDescription" name="leftDescription" />
            <span v-else-if="leftDescription" class="mr-1">
                {{ leftDescription === true ? 'Disable' : leftDescription }}
            </span>

            <input
                type="checkbox"
                :id="checkboxId"
                :value="value"
                v-model="value"
                :disabled="disabled"
                :required="required"
                :name="name || field"
                class="text-accent-600 focus:ring-accent-500 rounded border-gray-300 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:shadow-none"
                :class="{ [customClass]: customClass }"
            />

            <slot v-if="$slots?.rightDescription" name="rightDescription" />
            <span v-else-if="rightDescription" class="ml-1">
                {{ rightDescription === true ? 'Enable' : rightDescription }}
            </span>
        </label>

        <InputError v-if="errorMessage" :message="errorMessage" class="mt-2" />
    </div>
</template>
