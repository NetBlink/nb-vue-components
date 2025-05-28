declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    data: string;
    hidePlaceholder: boolean;
    hideNoRecordsMessage: boolean;
    recordsFromPagination: boolean;
    noRecordsMessage: string;
    $props: {
        readonly data?: string;
        readonly hidePlaceholder?: boolean;
        readonly hideNoRecordsMessage?: boolean;
        readonly recordsFromPagination?: boolean;
        readonly noRecordsMessage?: string;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    default?: (props: {}) => any;
};
