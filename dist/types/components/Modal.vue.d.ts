declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
export type Props = {
    /**
     * - Whether the modal is visible or not
     */
    show: boolean;
    /**
     * - The maximum width of the modal
     */
    maxWidth: string;
    /**
     * - Whether the modal can be closed by clicking outside
     */
    closeable: boolean;
    /**
     * - Whether to hide the overflow of the body when the modal is open
     */
    hideOverflow: boolean;
    /**
     * - The duration of the backdrop transition
     */
    backdropDuration: number;
    /**
     * - The duration of the modal transition
     */
    modalDuration: number;
    /**
     * - Whether to align the modal to the center of the screen
     */
    alignCenter: boolean;
    /**
     * - Whether to show a border around the modal
     */
    showBorder: boolean;
    /**
     * - Whether the modal is resizable
     */
    resizable?: boolean;
};
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $emit: (event: "close", ...args: any[]) => void;
    show: boolean;
    maxWidth: string;
    closeable: boolean;
    hideOverflow: boolean;
    backdropDuration: number;
    modalDuration: number;
    alignCenter: boolean;
    showBorder: boolean;
    resizable: boolean;
    $props: {
        readonly show?: boolean;
        readonly maxWidth?: string;
        readonly closeable?: boolean;
        readonly hideOverflow?: boolean;
        readonly backdropDuration?: number;
        readonly modalDuration?: number;
        readonly alignCenter?: boolean;
        readonly showBorder?: boolean;
        readonly resizable?: boolean;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<typeof __VLS_inheritedAttrs>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        modalContent: HTMLDivElement;
    };
    rootEl: any;
};
declare var __VLS_inheritedAttrs: {};
