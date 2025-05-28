declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    toggleEditing: () => void;
    startEditing: () => void;
    stopEditing: () => void;
    isEditing: () => boolean;
    $emit: (event: "editToggled", ...args: any[]) => void;
    required: boolean;
    label: string;
    editable: boolean;
    forceEditing: boolean;
    value?: string;
    $props: {
        readonly required?: boolean;
        readonly label?: string;
        readonly editable?: boolean;
        readonly forceEditing?: boolean;
        readonly value?: string;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    label?: (props: {}) => any;
} & {
    default?: (props: {}) => any;
} & {
    buttons?: (props: {}) => any;
} & {
    edit?: (props: {}) => any;
};
