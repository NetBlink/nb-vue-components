declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    align: string;
    width: string;
    contentClasses: string[];
    $props: {
        readonly align?: string;
        readonly width?: string;
        readonly contentClasses?: string[];
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<typeof __VLS_inheritedAttrs>;
    slots: {
        trigger?(_: {}): any;
        content?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
declare var __VLS_inheritedAttrs: {};