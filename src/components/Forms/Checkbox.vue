<script setup lang="ts">
/**
 * Single checkbox with label, sublabel, tooltip and error message, plus optional
 * descriptive text on either side of the box. Its model is a boolean on its own, or an
 * array of values when `value` is set so several checkboxes can share one field; it binds
 * through `v-model` or the Inertia `:form` + `field` pattern. `<Input type="checkbox">`
 * renders this, so use it directly only when bypassing `Input`.
 *
 * @part root - the field wrapper
 * @part label - the `InputLabel` above the checkbox
 * @part field - the clickable row holding the box and its descriptions
 * @part description - the left and right description text
 * @part input - the checkbox `<input>`
 * @part error - the `InputError`
 * @motion off - the box ticks and the error appears instantly
 * @motion simple - the box ticks instantly
 * @motion smooth - the box colour fades, the error grows in and out
 * @motion fancy - the tick pops on a spring
 */
import { computed, ref, watch, onMounted, defineModel } from 'vue';
import { InputLabel, InputError } from '../../index';
import type { NbParts, UiProp } from '../../ui/parts';
import { levelAtLeast, type MotionLevel } from '../../ui/motion';
import { heightTransition } from '../../ui/flip';
import { useUi } from '../../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface CheckboxEmits {
    /** Emitted when the checked state changes */
    'update:checked': [value: boolean | any[]];
    /** Emitted when the model value changes */
    'update:modelValue': [value: boolean | any[]];
    /** Emitted when the value changes with old/new values */
    changed: [data: { value: boolean | any[]; old_value: boolean | any[] }];
}

export interface CheckboxProps {
    /** The checked state - can be boolean for single checkbox or array for multiple */
    checked?: boolean | any[];
    /** The value of the checkbox when used in arrays */
    value?: any;
    /** Deprecated, use `:ui="{ input: '...' }"` */
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
    /** Deprecated, use `:ui="{ label: '...' }"` */
    labelCustomClass?: string;
    /** Custom error message */
    error?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Checkbox']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
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

const { cls, attrs, level } = useUi('Checkbox', props, { aliases: { customClass: 'input', labelCustomClass: 'label' } });

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
    <div v-bind="attrs()" :class="cls('root', noLabel ? 'mb-2' : 'mb-4')">
        <InputLabel
            v-if="!noLabel && label"
            :class="cls('label')"
            :for="checkboxId"
            :value="computedLabel"
            :sublabel="sublabel"
            :required="required"
            :tooltip="tooltip"
        />

        <label :class="cls('field', 'flex items-center')">
            <slot v-if="$slots?.leftDescription" name="leftDescription" />
            <span v-else-if="leftDescription" :class="cls('description', 'mr-1')">
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
                :class="
                    cls(
                        'input',
                        'text-primary-600 focus:ring-primary-500 dark:checked:bg-primary-500 rounded border-gray-300 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:shadow-none dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-offset-gray-800 dark:disabled:border-gray-700 dark:disabled:bg-gray-800/50',
                        { 'transition-colors duration-150': levelAtLeast(level, 'smooth'), 'checked:animate-check-pop': level === 'fancy' }
                    )
                "
            />

            <slot v-if="$slots?.rightDescription" name="rightDescription" />
            <span v-else-if="rightDescription" :class="cls('description', 'ml-1')">
                {{ rightDescription === true ? 'Enable' : rightDescription }}
            </span>
        </label>

        <Transition v-bind="heightTransition(level)">
            <InputError v-if="errorMessage" :message="errorMessage" :class="cls('error', 'mt-2')" />
        </Transition>
    </div>
</template>
