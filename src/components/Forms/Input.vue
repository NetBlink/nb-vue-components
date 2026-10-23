<script setup lang="ts">
/**
 * The all-in-one form control and the default choice for any field: it renders the label,
 * sublabel, tooltip and error message around the input and switches implementation on the
 * `type` prop, delegating to `Textarea`, `Switch`, `Checkbox`, a native select, a password
 * field with a show/hide toggle, or a plain input with addon/submit/WhatsApp actions.
 * Binds either through `v-model` or the Inertia `:form` + `field` pattern, pulling
 * validation errors straight off `form.errors`. `TextInput` is the bare unstyled-chrome
 * `<input>` underneath, use it only when you are building your own field layout.
 *
 * @part root - the field wrapper (for textarea, switch and checkbox, that component's root)
 * @part label - the `InputLabel`
 * @part group - the row holding the input with its addon, buttons or password toggle
 * @part input - the control itself
 * @part addon - the leading addon text
 * @part button - the submit and WhatsApp buttons
 * @part toggle - the password show/hide button
 * @part error - the `InputError`
 * @motion off - the error appears instantly
 * @motion simple - the error appears instantly
 * @motion smooth - the error grows in and out
 * @motion fancy - the error grows in on a spring
 */
import { computed, defineModel, type ModelRef } from 'vue';
import { Textarea, Switch, Checkbox } from '../../index';

import { InputWrapper, BaseInput, SelectInput, PasswordInput, InputWithActions } from './inputs';

import { useInputValue } from '../../composables/useInputValue';
import { usePasswordToggle } from '../../composables/usePasswordToggle';
import { useFormIntegration } from '../../composables/useFormIntegration';
import { useInputUtils } from '../../composables/useInputUtils';

import type { InputProps, InputEmits } from './types';
import { useUi } from '../../ui/useUi';

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<InputProps>(), {
    type: 'text',
    rows: 3,
    required: false,
    disabled: false,
    noLabel: false,
    autofocus: false,
    hidePasswordToggler: false,
    leftDescription: false,
    rightDescription: 'Enable',
    inputCustomClass: '',
    checkboxCustomClass: '',
    buttonCustomClass: '',
    labelCustomClass: '',
    autocomplete: null,
    inputmode: null,
    noNumberSpinners: false,
});

const emit = defineEmits<InputEmits>();

const { cls, attrs, level } = useUi('Input', props, {
    aliases: { inputCustomClass: 'input', labelCustomClass: 'label', buttonCustomClass: 'button' },
});

// Textarea, Switch and Checkbox take this component's layer as their instance `ui`,
// so their own `ui.Textarea` / `ui.Switch` / `ui.Checkbox` config still applies underneath.
const childUi = () => ({
    root: cls('root'),
    label: cls('label'),
    group: cls('group'),
    input: cls('input'),
    addon: cls('addon'),
    button: cls('button'),
    error: cls('error'),
});

const model: ModelRef<any> = defineModel();

const { getComputedLabel, getComputedName, getComputedAutocomplete, isPasswordType, isSelectType } = useInputUtils();

const { value, setValueSilently, getPreviousValue } = useInputValue(props.field, props.form, model, emit);

const { displayType, togglePassword } = usePasswordToggle(props.type);

const { hasFormErrors, formError } = useFormIntegration(props.form, props.field, props.error);

const computedLabel = getComputedLabel(props.label, props.field);
const computedName = getComputedName(props.name, props.field);
const computedAutocomplete = getComputedAutocomplete(props.autocomplete, props.field);

const hasActions = computed(() => {
    return props.addon || props.submitBtn || props.whatsApp;
});

const inputType = computed(() => {
    if (props.type === 'textarea') return 'textarea';
    if (props.type === 'switch') return 'switch';
    if (props.type === 'checkbox') return 'checkbox';
    if (props.type === 'select') return 'select';
    if (isPasswordType(props.type)) return 'password';
    if (hasActions.value) return 'with-actions';
    return 'base';
});

defineExpose({
    togglePassword,
    setValueSilently,
    getPreviousValue,
});
</script>

<template>
    <Textarea
        v-if="inputType === 'textarea'"
        v-bind="attrs()"
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
        :name="computedName"
        :sublabel="sublabel"
        :submit-btn="submitBtn"
        :whats-app="whatsApp"
        :autocomplete="computedAutocomplete"
        :tooltip="tooltip"
        :ui="childUi()"
        :motion="motion"
        :error="error"
        :inputmode="inputmode"
        v-model="value"
        @changed="(data) => emit('changed', data)"
    >
        <template v-if="$slots?.submit" #submit>
            <slot name="submit" />
        </template>
    </Textarea>

    <Switch
        v-else-if="inputType === 'switch'"
        v-bind="attrs()"
        :form="form"
        :field="field"
        :label="label"
        :required="required"
        :disabled="disabled"
        :no-label="noLabel"
        :name="computedName"
        :sublabel="sublabel"
        :tooltip="tooltip"
        :left-description="leftDescription"
        :right-description="rightDescription"
        :ui="childUi()"
        :motion="motion"
        :error="error"
        :inputmode="inputmode"
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

    <Checkbox
        v-else-if="inputType === 'checkbox'"
        v-bind="attrs()"
        :form="form"
        :field="field"
        :label="label"
        :required="required"
        :disabled="disabled"
        :no-label="noLabel"
        :name="computedName"
        :sublabel="sublabel"
        :tooltip="tooltip"
        :left-description="leftDescription"
        :right-description="rightDescription"
        :ui="childUi()"
        :motion="motion"
        :error="error"
        :inputmode="inputmode"
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

    <!-- Select Input -->
    <InputWrapper
        v-else-if="inputType === 'select'"
        :field="field"
        :label="label"
        :no-label="noLabel"
        :sublabel="sublabel"
        :tooltip="tooltip"
        :required="required"
        v-bind="attrs()"
        :root-class="cls('root', noLabel ? 'mb-2' : 'mb-4')"
        :label-class="cls('label')"
        :error-class="cls('error', 'mt-2')"
        :level="level"
        :computed-label="computedLabel"
        :has-form-errors="hasFormErrors"
        :form-error="formError"
    >
        <SelectInput
            :field="field"
            :name="name"
            :required="required"
            :disabled="disabled"
            :cls="cls"
            :computed-name="computedName"
            v-model="value"
        >
            <slot />
        </SelectInput>
    </InputWrapper>

    <!-- Password Input -->
    <InputWrapper
        v-else-if="inputType === 'password'"
        :field="field"
        :label="label"
        :no-label="noLabel"
        :sublabel="sublabel"
        :tooltip="tooltip"
        :required="required"
        v-bind="attrs()"
        :root-class="cls('root', noLabel ? 'mb-2' : 'mb-4')"
        :label-class="cls('label')"
        :error-class="cls('error', 'mt-2')"
        :level="level"
        :computed-label="computedLabel"
        :has-form-errors="hasFormErrors"
        :form-error="formError"
    >
        <PasswordInput
            :field="field"
            :name="name"
            :required="required"
            :disabled="disabled"
            :placeholder="placeholder"
            :autofocus="autofocus"
            :pattern="pattern"
            :autocomplete="autocomplete"
            :hide-password-toggler="hidePasswordToggler"
            :cls="cls"
            :computed-name="computedName"
            :computed-autocomplete="computedAutocomplete"
            :display-type="displayType"
            :inputmode="inputmode"
            v-model="value"
            @toggle-password="togglePassword"
        />
    </InputWrapper>

    <!-- Input with Actions -->
    <InputWrapper
        v-else-if="inputType === 'with-actions'"
        :field="field"
        :label="label"
        :no-label="noLabel"
        :sublabel="sublabel"
        :tooltip="tooltip"
        :required="required"
        v-bind="attrs()"
        :root-class="cls('root', noLabel ? 'mb-2' : 'mb-4')"
        :label-class="cls('label')"
        :error-class="cls('error', 'mt-2')"
        :level="level"
        :computed-label="computedLabel"
        :has-form-errors="hasFormErrors"
        :form-error="formError"
    >
        <InputWithActions
            :type="type"
            :field="field"
            :name="name"
            :required="required"
            :disabled="disabled"
            :placeholder="placeholder"
            :autofocus="autofocus"
            :pattern="pattern"
            :min="min"
            :max="max"
            :step="step"
            :autocomplete="autocomplete"
            :cls="cls"
            :addon="addon"
            :submit-btn="submitBtn"
            :whats-app="whatsApp"
            :computed-name="computedName"
            :computed-autocomplete="computedAutocomplete"
            :inputmode="inputmode"
            :form="form"
            :no-number-spinners="noNumberSpinners"
            v-model="value"
        >
            <template v-if="$slots?.submit" #submit>
                <slot name="submit" />
            </template>
        </InputWithActions>
    </InputWrapper>

    <!-- Base Input -->
    <InputWrapper
        v-else
        :field="field"
        :label="label"
        :no-label="noLabel"
        :sublabel="sublabel"
        :tooltip="tooltip"
        :required="required"
        v-bind="attrs()"
        :root-class="cls('root', noLabel ? 'mb-2' : 'mb-4')"
        :label-class="cls('label')"
        :error-class="cls('error', 'mt-2')"
        :level="level"
        :computed-label="computedLabel"
        :has-form-errors="hasFormErrors"
        :form-error="formError"
    >
        <BaseInput
            :type="type"
            :field="field"
            :name="name"
            :required="required"
            :disabled="disabled"
            :placeholder="placeholder"
            :autofocus="autofocus"
            :pattern="pattern"
            :min="min"
            :max="max"
            :step="step"
            :autocomplete="autocomplete"
            :cls="cls"
            :computed-name="computedName"
            :computed-autocomplete="computedAutocomplete"
            :inputmode="inputmode"
            :no-number-spinners="noNumberSpinners"
            v-model="value"
        />
    </InputWrapper>
</template>
