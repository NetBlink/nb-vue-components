declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    toggleEditing: () => void;
    startEditing: () => void;
    stopEditing: () => void;
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
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<typeof __VLS_inheritedAttrs>;
    slots: {
        label?(_: {}): any;
        default?(_: {}): any;
        buttons?(_: {}): any;
        edit?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
declare var __VLS_inheritedAttrs: {};
