declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    startEditing: () => void;
    stopEditing: () => void;
    toggleEditing: () => void;
    stopEditOnSubmit: boolean;
    form?: Record<string, any>;
    $props: {
        readonly stopEditOnSubmit?: boolean;
        readonly form?: Record<string, any>;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    default?: (props: {}) => any;
};
