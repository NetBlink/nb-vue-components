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
 */

import { InputLabel, TextInput, InputError, SubmitButton } from '../../index';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquareCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { onMounted, ref, watch, defineModel } from 'vue';
library.add(faWhatsapp, faSquareCheck, faSquare, faEye, faEyeSlash);

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
    <div :class="noLabel ? 'mb-2' : 'mb-4'">
        <InputLabel
            :customClass="labelCustomClass"
            v-if="!noLabel"
            :for="field"
            :value="label ? label : field ? ucwords(field) : ''"
            :sublabel="sublabel"
            :required="required"
        />
        <div class="relative flex w-full max-w-full items-stretch">
            <label v-if="type === 'switch' || type === 'checkbox'" class="flex items-center">
                <slot v-if="$slots?.leftDescription" name="leftDescription" />
                <span v-else-if="leftDescription" class="mr-1">
                    {{ leftDescription ? leftDescription : 'Disable' }}
                </span>
                <input
                    :id="field"
                    type="checkbox"
                    class="hidden"
                    v-model="value"
                    :disabled="props.disabled"
                    :required="props.required"
                    :name="name ?? field"
                />
                <div
                    tabindex="0"
                    v-if="type === 'switch'"
                    class="toggle-switch focusable ml-0!"
                    :class="{
                        checked: value,
                        disabled: props.disabled,
                    }"
                />
                <div
                    tabindex="0"
                    v-else
                    class="focusable text-primary mr-1 p-1"
                    :class="{
                        'text-gray-500!': props.disabled,
                        [checkboxCustomClass]: checkboxCustomClass,
                    }"
                >
                    <Transition name="popup" mode="out-in">
                        <FontAwesomeIcon key="checked" v-if="props.form[field]" v-bind:icon="'fas fa-square-check'" />
                        <FontAwesomeIcon key="unchecked" v-else v-bind:icon="'far fa-square'" />
                    </Transition>
                </div>
                <slot v-if="$slots?.rightDescription" name="rightDescription" />
                <span v-else-if="rightDescription">
                    {{ rightDescription }}
                </span>
            </label>
            <select
                v-else-if="type === 'select'"
                v-model="value"
                :id="field"
                :required="props.required"
                :disabled="props.disabled"
                :name="name ?? field"
                class="focusable block w-full rounded disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500"
                :class="{ [inputCustomClass]: !!inputCustomClass }"
            >
                <slot />
            </select>
            <template v-else>
                <span
                    v-if="addon"
                    class="border-gray flex items-center rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500"
                >
                    {{ addon }}
                </span>
                <textarea
                    v-if="type === 'textarea'"
                    :id="field"
                    class="focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
                    :class="{
                        'rounded-l-none!': addon,
                        'rounded-r-none!': !!submitBtn || whatsApp || $slots?.submit,
                        [inputCustomClass]: !!inputCustomClass,
                    }"
                    :rows="props.rows"
                    v-model="value"
                    :required="props.required"
                    :disabled="props.disabled"
                    :autocomplete="autocomplete ?? field"
                    :placeholder="props.placeholder"
                    :autofocus="props.autofocus"
                    :name="name ?? field"
                />
                <div v-else class="relative flex w-full">
                    <TextInput
                        :id="field"
                        :type="displayType"
                        class="focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
                        :class="{
                            'rounded-l-none!': addon,
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

<style scoped lang="postcss">
.toggle-switch {
    @apply relative mx-2 inline-block h-6 w-12 flex-none cursor-pointer rounded-xl bg-gray-300 transition-all;
    box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.08) inset;
}

.toggle-switch::before {
    @apply absolute top-0.5 left-0.5 block h-5 w-5 rounded-full bg-white bg-linear-to-br from-transparent to-gray-200;
    box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.08);
    content: '';
    transition: left 150ms;
    will-change: left;
}
.toggle-switch:hover {
    box-shadow: 0.0625em 0.0625em 0.125em rgba(0, 0, 0, 0.12) inset;
}

.toggle-switch:hover::before {
    background-image: radial-gradient(circle at 0.375em 0.375em, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.0375) 1em);
    box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.12);
}

.checked {
    @apply bg-primary;
}

.checked::before {
    background-image: radial-gradient(circle at 0.375em 0.375em, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.05) 1em);
    left: 1.625em;
}
</style>
