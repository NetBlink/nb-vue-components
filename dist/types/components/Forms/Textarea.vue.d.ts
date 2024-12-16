declare const _default: import("vue").DefineComponent<{}, {
    $emit: (event: "update:modelValue", ...args: any[]) => void;
    required: boolean;
    disabled: boolean;
    noLabel: boolean;
    autofocus: boolean;
    form?: Record<string, any>;
    label?: string;
    field?: string;
    rows?: number;
    addon?: string;
    placeholder?: string;
    modelValue?: string;
    $props: {
        readonly required?: boolean;
        readonly disabled?: boolean;
        readonly noLabel?: boolean;
        readonly autofocus?: boolean;
        readonly form?: Record<string, any>;
        readonly label?: string;
        readonly field?: string;
        readonly rows?: number;
        readonly addon?: string;
        readonly placeholder?: string;
        readonly modelValue?: string;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
