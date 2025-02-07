declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    togglePassword: () => void;
    setValueSilently: (val: any) => void;
    getPreviousValue: () => any;
    $emit: (event: "changed" | "update:modelValue", ...args: any[]) => void;
    required: boolean;
    disabled: boolean;
    rows: number;
    noLabel: boolean;
    autofocus: boolean;
    leftDescription: string | boolean;
    rightDescription: string | boolean;
    hidePasswordToggler: boolean;
    inputCustomClass: string;
    checkboxCustomClass: string;
    buttonCustomClass: string;
    labelCustomClass: string;
    name?: string;
    type?: string;
    form?: Record<string, any>;
    label?: string;
    pattern?: string;
    field?: string;
    min?: string | number;
    max?: string | number;
    step?: string | number;
    addon?: string;
    placeholder?: string;
    submitBtn?: string;
    whatsApp?: string;
    switchDescription?: string;
    sublabel?: string;
    autocomplete?: string;
    error?: string;
    $props: {
        readonly required?: boolean;
        readonly disabled?: boolean;
        readonly rows?: number;
        readonly noLabel?: boolean;
        readonly autofocus?: boolean;
        readonly leftDescription?: string | boolean;
        readonly rightDescription?: string | boolean;
        readonly hidePasswordToggler?: boolean;
        readonly inputCustomClass?: string;
        readonly checkboxCustomClass?: string;
        readonly buttonCustomClass?: string;
        readonly labelCustomClass?: string;
        readonly name?: string;
        readonly type?: string;
        readonly form?: Record<string, any>;
        readonly label?: string;
        readonly pattern?: string;
        readonly field?: string;
        readonly min?: string | number;
        readonly max?: string | number;
        readonly step?: string | number;
        readonly addon?: string;
        readonly placeholder?: string;
        readonly submitBtn?: string;
        readonly whatsApp?: string;
        readonly switchDescription?: string;
        readonly sublabel?: string;
        readonly autocomplete?: string;
        readonly error?: string;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<typeof __VLS_inheritedAttrs>;
    slots: {
        leftDescription?(_: {}): any;
        rightDescription?(_: {}): any;
        default?(_: {}): any;
        submit?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
declare var __VLS_inheritedAttrs: {};
