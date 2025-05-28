declare var __VLS_17: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_17) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxWidth: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideOverflow: {
        type: BooleanConstructor;
        default: boolean;
    };
    backdropDuration: {
        type: NumberConstructor;
        default: number;
    };
    modalDuration: {
        type: NumberConstructor;
        default: number;
    };
    alignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    showBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    modalCustomClass: {
        type: StringConstructor;
        default: string;
    };
    backdropCustomClass: {
        type: StringConstructor;
        default: string;
    };
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxWidth: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideOverflow: {
        type: BooleanConstructor;
        default: boolean;
    };
    backdropDuration: {
        type: NumberConstructor;
        default: number;
    };
    modalDuration: {
        type: NumberConstructor;
        default: number;
    };
    alignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    showBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    modalCustomClass: {
        type: StringConstructor;
        default: string;
    };
    backdropCustomClass: {
        type: StringConstructor;
        default: string;
    };
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClose?: (...args: any[]) => any;
}>, {
    show: boolean;
    maxWidth: string;
    closeable: boolean;
    hideOverflow: boolean;
    backdropDuration: number;
    modalDuration: number;
    alignCenter: boolean;
    showBorder: boolean;
    modalCustomClass: string;
    backdropCustomClass: string;
    resizable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
