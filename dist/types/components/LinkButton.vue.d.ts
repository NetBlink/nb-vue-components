declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    disabled: boolean;
    target: "_self";
    colourClasses: string[];
    data?: Record<string, any>;
    href?: string;
    method?: string;
    $props: {
        readonly disabled?: boolean;
        readonly target?: "_self";
        readonly colourClasses?: string[];
        readonly data?: Record<string, any>;
        readonly href?: string;
        readonly method?: string;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<typeof __VLS_inheritedAttrs>;
    slots: {
        default?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
declare var __VLS_inheritedAttrs: {};
