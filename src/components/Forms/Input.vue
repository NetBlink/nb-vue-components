<script setup>
/**
 * Input component
 *
 * @component
 *
 * @prop {string} type - The type of the input
 * @prop {string} field - The field name
 * @prop {string} label - The label for the input
 * @prop {string} name - The name attribute for the input
 * @prop {boolean} required - Whether the input is required
 * @prop {boolean} disabled - Whether the input is disabled
 * @prop {number|string} min - The minimum value for the input
 * @prop {number|string} max - The maximum value for the input
 * @prop {number|string} step - The step value for the input
 * @prop {number} rows - The number of rows for the textarea
 * @prop {object} form - The form object
 * @prop {string} addon - The addon text
 * @prop {string} placeholder - The placeholder for the input
 * @prop {boolean} noLabel - Whether to hide the label
 * @prop {string} submitBtn - The submit button text
 * @prop {boolean} autofocus - Whether the input should be autofocused
 * @prop {string} pattern - The pattern for the input
 * @prop {string} whatsApp - The WhatsApp link
 * @prop {string} switchDescription - The description for the switch
 * @prop {string} sublabel - The sublabel for the input
 * @prop {string} tooltip - The tooltip text to show next to the label
 */

import { InputLabel, TextInput, InputError, SubmitButton, Tooltip, Textarea, Switch, Checkbox } from '../../index';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquareCheck, faEye, faEyeSlash, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { onMounted, ref, watch, defineModel } from 'vue';
library.add(faWhatsapp, faSquareCheck, faSquare, faEye, faEyeSlash, faCircleQuestion);

const props = defineProps({
    type: String,
    field: String,
    label: String,
    name: String,
    required: Boolean,
    disabled: Boolean,
    min: { type: [Number, String] },
    max: { type: [Number, String] },
    step: { type: [Number, String] },
    rows: { type: Number, default: 3 },
    form: Object,
    addon: String,
    placeholder: String,
    noLabel: Boolean,
    submitBtn: String,
    autofocus: Boolean,
    pattern: String,
    whatsApp: String,
    leftDescription: { type: [String, Boolean], default: false },
    rightDescription: { type: [String, Boolean], default: 'Enable' },
    switchDescription: String,
    sublabel: String,
    hidePasswordToggler: {
        type: Boolean,
        default: false,
    },
    autocomplete: {
        type: String,
        default: null,
    },

    inputCustomClass: {
        type: String,
        default: '',
    },
    checkboxCustomClass: {
        type: String,
        default: '',
    },
    buttonCustomClass: {
        type: String,
        default: '',
    },
    labelCustomClass: {
        type: String,
        default: '',
    },

    error: String,
    tooltip: String,
});
function ucwords(text) {
    let res = [];
    text.split('_')
        .join(' ')
        .split(' ')
        .map(function (v) {
            res.push(v[0].toUpperCase() + v.slice(1));
        });
    return res.join(' ');
}

const emit = defineEmits(['changed', 'update:modelValue']);
const noForm = ref(false);
const model = defineModel();
const value = ref();
const prevValue = ref();
const displayType = ref(props.type);

onMounted(() => {
    noForm.value = !props.form;
    value.value = noForm.value ? model.value : props.form[props.field];
});

watch(
    () => value.value,
    (val, oldval) => {
        if (val === oldval) return;
        if (noForm.value) {
            model.value = val;
        } else {
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

const isSettingSilently = ref(false);
const setValueSilently = (val) => {
    value.value = val;
    isSettingSilently.value = true;
};

const getPreviousValue = () => {
    return prevValue.value;
};

watch(
    () => (props.field ? props.form[props.field] : null),
    (val) => {
        value.value = noForm.value ? model.value : val;
    },
    {
        deep: true,
    }
);

watch(
    () => model.value,
    (val) => {
        value.value = val;
    }
);

const togglePassword = () => {
    displayType.value = displayType.value === 'password' ? 'text' : 'password';
};

defineExpose({
    togglePassword,
    setValueSilently,
    getPreviousValue,
});
</script>

<template>
    <!-- Delegate to Textarea component for textarea type -->
    <Textarea
        v-if="type === 'textarea'"
        :form="form"
        :field="field"
        :label="label"
        :required="required"
        :disabled="disabled"
        :addon="addon"
        :placeholder="placeholder"
        :no-label="noLabel"
        :autofocus="autofocus"
        :rows="rows"
        :name="name"
        :sublabel="sublabel"
        :submit-btn="submitBtn"
        :whats-app="whatsApp"
        :autocomplete="autocomplete"
        :tooltip="tooltip"
        :custom-class="inputCustomClass"
        :label-custom-class="labelCustomClass"
        :button-custom-class="buttonCustomClass"
        :error="error"
        v-model="value"
        @changed="(data) => emit('changed', data)"
    >
        <template v-if="$slots?.submit" #submit>
            <slot name="submit" />
        </template>
    </Textarea>

    <!-- Delegate to Switch component for switch type -->
    <Switch
        v-else-if="type === 'switch'"
        :form="form"
        :field="field"
        :label="label"
        :required="required"
        :disabled="disabled"
        :no-label="noLabel"
        :name="name"
        :sublabel="sublabel"
        :tooltip="tooltip"
        :left-description="leftDescription"
        :right-description="rightDescription"
        :custom-class="inputCustomClass"
        :label-custom-class="labelCustomClass"
        :error="error"
        v-model="value"
        @changed="(data) => emit('changed', data)"
    >
        <template v-if="$slots?.leftDescription" #leftDescription>
            <slot name="leftDescription" />
        </template>
        <template v-if="$slots?.rightDescription" #rightDescription>
            <slot name="rightDescription" />
        </template>
    </Switch>

    <!-- Delegate to Checkbox component for checkbox type -->
    <Checkbox
        v-else-if="type === 'checkbox'"
        :form="form"
        :field="field"
        :label="label"
        :required="required"
        :disabled="disabled"
        :no-label="noLabel"
        :name="name"
        :sublabel="sublabel"
        :tooltip="tooltip"
        :left-description="leftDescription"
        :right-description="rightDescription"
        :custom-class="inputCustomClass"
        :label-custom-class="labelCustomClass"
        :error="error"
        v-model="value"
        @changed="(data) => emit('changed', data)"
    >
        <template v-if="$slots?.leftDescription" #leftDescription>
            <slot name="leftDescription" />
        </template>
        <template v-if="$slots?.rightDescription" #rightDescription>
            <slot name="rightDescription" />
        </template>
    </Checkbox>

    <!-- Original Input implementation for other types -->
    <div v-else :class="noLabel ? 'mb-2' : 'mb-4'">
        <InputLabel
            :customClass="labelCustomClass"
            v-if="!noLabel"
            :for="field"
            :value="label ? label : field ? ucwords(field) : ''"
            :sublabel="sublabel"
            :required="required"
            :tooltip="tooltip"
        />
        <div class="relative flex w-full max-w-full items-stretch">
            <select
                v-if="type === 'select'"
                v-model="value"
                :id="field"
                :required="props.required"
                :disabled="props.disabled"
                :name="name ?? field"
                class="focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
                :class="{ [inputCustomClass]: !!inputCustomClass }"
            >
                <slot />
            </select>
            <template v-else>
                <span
                    v-if="addon"
                    class="flex items-center rounded-l-md rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500"
                    :class="{ shadow: !props.disabled }"
                >
                    {{ addon }}
                </span>
                <div class="relative flex w-full">
                    <TextInput
                        :id="field"
                        :type="displayType"
                        :class="{
                            'rounded-l-none! shadow-none!': addon,
                            'rounded-r-none!': !!submitBtn || whatsApp || $slots?.submit,
                            [inputCustomClass]: !!inputCustomClass,
                        }"
                        v-model="value"
                        :required="props.required"
                        :disabled="props.disabled"
                        :autocomplete="autocomplete ?? field"
                        :min="props.min"
                        :max="props.max"
                        :step="props.step"
                        :placeholder="props.placeholder"
                        :autofocus="props.autofocus"
                        :pattern="props.pattern"
                        :name="name ?? field"
                    />
                    <div
                        v-if="type == 'password' && !hidePasswordToggler"
                        @click="togglePassword"
                        class="absolute top-0 right-0 z-2 flex h-full w-11 cursor-pointer items-center justify-center text-lg leading-normal text-black"
                    >
                        <FontAwesomeIcon v-if="displayType === 'password'" v-bind:icon="faEye" />
                        <FontAwesomeIcon v-else v-bind:icon="faEyeSlash" />
                    </div>
                </div>
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
                        id="button-input"
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
                    <FontAwesomeIcon v-bind:icon="'fab fa-whatsapp'" size="2xl" />
                </a>
            </template>
        </div>
        <InputError v-if="error || form?.errors?.[field]" :message="error ? error : form?.errors?.[field]" class="mt-2" />
    </div>
</template>
