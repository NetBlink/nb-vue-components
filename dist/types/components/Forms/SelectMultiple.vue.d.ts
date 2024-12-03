declare const _default: import("vue").DefineComponent<{}, {
    $emit: (event: "update:modelValue", ...args: any[]) => void;
    id: string;
    noLabel: boolean;
    list: unknown[];
    optionValue: string;
    optionText: string;
    isDisabled: boolean;
    form?: Record<string, any>;
    label?: string;
    field?: string;
    placeholder?: string;
    $props: {
        readonly id?: string;
        readonly noLabel?: boolean;
        readonly list?: unknown[];
        readonly optionValue?: string;
        readonly optionText?: string;
        readonly isDisabled?: boolean;
        readonly form?: Record<string, any>;
        readonly label?: string;
        readonly field?: string;
        readonly placeholder?: string;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;