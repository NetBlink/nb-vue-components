declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    collapse_id: string;
    $props: {
        readonly collapse_id?: string;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, HTMLTableRowElement>;
type __VLS_TemplateResult = {
    attrs: Partial<typeof __VLS_inheritedAttrs>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLTableRowElement;
};
declare var __VLS_inheritedAttrs: {};
