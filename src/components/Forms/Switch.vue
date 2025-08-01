<script setup lang="ts">
/**
 * Switch component
 *
 * @component
 *
 * @prop {Object} form - Inertia form object
 * @prop {string} field - Field name in the form object
 * @prop {string} label - Label text displayed next to switch
 * @prop {boolean} required - Whether the field is required
 * @prop {boolean} disabled - Whether the switch is disabled
 * @prop {boolean} noLabel - Whether to hide the label
 * @prop {string} tooltip - Tooltip text shown next to label
 * @prop {any} modelValue - Direct value binding (alternative to form/field)
 * @prop {string} name - Name attribute for the input
 * @prop {string} sublabel - Sub-label text
 * @prop {string} leftDescription - Text shown to the left of the switch
 * @prop {string} rightDescription - Text shown to the right of the switch
 * @prop {string} customClass - Custom CSS classes for the switch
 * @prop {string} labelCustomClass - Custom CSS classes for the label
 * @prop {string} error - Custom error message
 */

import { computed, ref, watch, onMounted, defineModel } from 'vue';
import { InputLabel, InputError, Tooltip } from '../../index';

interface SwitchProps {
    /** Form object containing field values and errors */
    form?: {
        [key: string]: any;
        errors?: { [key: string]: string };
    };
    /** Field name for form binding */
    field?: string;
    /** Label text displayed above switch */
    label?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Whether the switch is disabled */
    disabled?: boolean;
    /** Whether to hide the label */
    noLabel?: boolean;
    /** Tooltip text shown next to label */
    tooltip?: string;
    /** Direct value binding */
    modelValue?: boolean;
    /** Name attribute for the input */
    name?: string;
    /** Sub-label text */
    sublabel?: string;
    /** Text shown to the left of the switch */
    leftDescription?: string | boolean;
    /** Text shown to the right of the switch */
    rightDescription?: string | boolean;
    /** Custom CSS classes for the switch */
    customClass?: string;
    /** Custom CSS classes for the label */
    labelCustomClass?: string;
    /** Custom error message */
    error?: string;
}

interface SwitchEmits {
    /** Emitted when the switch value changes */
    (e: 'update:modelValue', value: boolean): void;
    /** Emitted when value changes with old and new values */
    (e: 'changed', data: { value: boolean; old_value: boolean }): void;
}

const props = withDefaults(defineProps<SwitchProps>(), {
    required: false,
    disabled: false,
    noLabel: false,
    leftDescription: false,
    rightDescription: 'Enable',
    customClass: '',
    labelCustomClass: '',
});

const emit = defineEmits<SwitchEmits>();

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
    <div :class="noLabel ? 'mb-2' : 'mb-4'">
        <InputLabel
            v-if="!noLabel"
            :customClass="labelCustomClass"
            :for="field"
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

            <input :id="field" type="checkbox" class="hidden" v-model="value" :disabled="disabled" :required="required" :name="name || field" />

            <div
                tabindex="0"
                class="toggle-switch focusable relative mx-2 ml-0 inline-block h-6 w-12 flex-none cursor-pointer rounded-xl bg-gray-300 transition-all"
                :class="{
                    'checked bg-primary': value,
                    'disabled cursor-not-allowed opacity-50': disabled,
                    [customClass]: customClass,
                }"
                style="box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.08) inset"
            />

            <slot v-if="$slots?.rightDescription" name="rightDescription" />
            <span v-else-if="rightDescription" class="ml-1">
                {{ rightDescription === true ? 'Enable' : rightDescription }}
            </span>
        </label>

        <InputError v-if="errorMessage" :message="errorMessage" class="mt-2" />
    </div>
</template>

<style scoped>
.toggle-switch::before {
    content: '';
    position: absolute;
    top: 0.125rem;
    left: 0.125rem;
    display: block;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.08);
    transition: left 150ms;
    will-change: left;
}

.toggle-switch:hover {
    box-shadow: 0.0625em 0.0625em 0.125em rgba(0, 0, 0, 0.12) inset !important;
}

.toggle-switch:hover::before {
    background-image: radial-gradient(circle at 0.375em 0.375em, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.0375) 1em);
    box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.12);
}

.checked::before {
    background-image: radial-gradient(circle at 0.375em 0.375em, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.05) 1em);
    left: 1.625rem;
}
</style>
