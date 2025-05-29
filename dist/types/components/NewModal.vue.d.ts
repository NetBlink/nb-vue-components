declare var __VLS_14: {}, __VLS_32: {}, __VLS_38: {}, __VLS_40: {}, __VLS_42: {};
type __VLS_Slots = {} & {
    trigger?: (props: typeof __VLS_14) => any;
} & {
    header?: (props: typeof __VLS_32) => any;
} & {
    description?: (props: typeof __VLS_38) => any;
} & {
    default?: (props: typeof __VLS_40) => any;
} & {
    footer?: (props: typeof __VLS_42) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:open"?: (...args: any[]) => any;
}>, {
    open: boolean;
    defaultOpen: boolean;
    show: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
