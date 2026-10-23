/**
 * Form component types and interfaces
 */

import type { Ref, ComputedRef } from 'vue';
import type { NbParts, UiProp } from '../../ui/parts';
import type { MotionLevel } from '../../ui/motion';
import type { NbClassValue } from '../../ui/merge';

/** Internal: resolves one of Input's parts, handed to the input sub-components. */
export type InputPartResolver = (part: NbParts['Input'], ...defaults: NbClassValue[]) => string;

export interface InertiaForm {
    [key: string]: any;
    errors?: Record<string, string>;
    processing?: boolean;
    wasSuccessful?: boolean;
}

export interface BaseInputProps {
    type?: string;
    field?: string;
    label?: string;
    name?: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    autofocus?: boolean;
    autocomplete?: string;
    noLabel?: boolean;
    sublabel?: string;
    tooltip?: string;
    error?: string;
    form?: InertiaForm;
}

export interface InputProps extends BaseInputProps {
    min?: number | string;
    max?: number | string;
    step?: number | string;
    noNumberSpinners?: boolean;

    rows?: number;

    addon?: string;
    /** Deprecated, use `:ui="{ input: '...' }"` */
    inputCustomClass?: string;
    /** Deprecated, never had an effect */
    checkboxCustomClass?: string;
    /** Deprecated, use `:ui="{ button: '...' }"` */
    buttonCustomClass?: string;
    /** Deprecated, use `:ui="{ label: '...' }"` */
    labelCustomClass?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Input']>;
    /** Motion level for this instance */
    motion?: MotionLevel;

    submitBtn?: string;
    whatsApp?: string;

    hidePasswordToggler?: boolean;

    leftDescription?: string | boolean;
    rightDescription?: string | boolean;
    switchDescription?: string;

    pattern?: string;
    inputmode?: InputMode;
}

export interface UseInputValueReturn {
    value: Ref<any>;
    prevValue: Ref<any>;
    noForm: Ref<boolean>;
    setValueSilently: (val: any) => void;
    getPreviousValue: () => any;
}

export interface UsePasswordToggleReturn {
    displayType: Ref<string>;
    togglePassword: () => void;
}

export interface UseFormIntegrationReturn {
    hasFormErrors: ComputedRef<boolean>;
    formError: ComputedRef<string | null>;
    updateFormValue: (value: any) => void;
}

export type InputMode =
    | 'text'
    | 'none'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';

export type InputType =
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'time'
    | 'week'
    | 'color'
    | 'file'
    | 'hidden'
    | 'range'
    | 'textarea'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'switch';

export interface InputChangeEvent {
    value: any;
    old_value: any;
}

export interface InputEmits {
    (e: 'changed', event: InputChangeEvent): void;
    (e: 'update:modelValue', value: any): void;
}
