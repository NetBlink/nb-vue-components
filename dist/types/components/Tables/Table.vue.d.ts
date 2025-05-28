declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    collapsable: boolean;
    collapse_id: string;
    sticky: boolean;
    overflow: boolean;
    seperate: boolean;
    showPerPage: boolean;
    defaultPerPage: number;
    responsive: boolean;
    total?: number;
    links?: unknown[];
    $props: {
        readonly collapsable?: boolean;
        readonly collapse_id?: string;
        readonly sticky?: boolean;
        readonly overflow?: boolean;
        readonly seperate?: boolean;
        readonly showPerPage?: boolean;
        readonly defaultPerPage?: number;
        readonly responsive?: boolean;
        readonly total?: number;
        readonly links?: unknown[];
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    default?: (props: {}) => any;
} & {
    pagination?: (props: {}) => any;
};
