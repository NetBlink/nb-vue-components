<script setup lang="ts">

import { computed, defineModel, type ModelRef } from 'vue';
import { 
    Textarea, 
    Switch, 
    Checkbox 
} from '../../index';

import { InputWrapper, BaseInput, SelectInput, PasswordInput, InputWithActions } from './inputs';

import { useInputValue } from '../../composables/useInputValue';
import { usePasswordToggle } from '../../composables/usePasswordToggle';
import { useFormIntegration } from '../../composables/useFormIntegration';
import { useInputUtils } from '../../composables/useInputUtils';

import type { InputProps, InputEmits } from './types';

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
});

const emit = defineEmits<InputEmits>();

const model: ModelRef<any> = defineModel();

const {
    getComputedLabel,
    getComputedName,
    getComputedAutocomplete,
    isPasswordType,
    isSelectType
} = useInputUtils();

const {
    value,
    setValueSilently,
    getPreviousValue
} = useInputValue(props.field, props.form, model, emit);

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

    <Switch
        v-else-if="inputType === 'switch'"
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

    <Checkbox
        v-else-if="inputType === 'checkbox'"
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

    <!-- Select Input -->
    <InputWrapper
        v-else-if="inputType === 'select'"
        :field="field"
        :label="label"
        :no-label="noLabel"
        :sublabel="sublabel"
        :tooltip="tooltip"
        :required="required"
        :label-custom-class="labelCustomClass"
        :computed-label="computedLabel"
        :has-form-errors="hasFormErrors"
        :form-error="formError"
    >
        <SelectInput
            :field="field"
            :name="name"
            :required="required"
            :disabled="disabled"
            :input-custom-class="inputCustomClass"
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
        :label-custom-class="labelCustomClass"
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
            :input-custom-class="inputCustomClass"
            :computed-name="computedName"
            :computed-autocomplete="computedAutocomplete"
            :display-type="displayType"
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
        :label-custom-class="labelCustomClass"
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
            :input-custom-class="inputCustomClass"
            :button-custom-class="buttonCustomClass"
            :addon="addon"
            :submit-btn="submitBtn"
            :whats-app="whatsApp"
            :computed-name="computedName"
            :computed-autocomplete="computedAutocomplete"
            :form="form"
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
        :label-custom-class="labelCustomClass"
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
            :input-custom-class="inputCustomClass"
            :computed-name="computedName"
            :computed-autocomplete="computedAutocomplete"
            v-model="value"
        />
    </InputWrapper>
</template>
