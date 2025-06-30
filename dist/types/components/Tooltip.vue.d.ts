type TooltipSide = 'top' | 'bottom' | 'left' | 'right';
interface Props {
    content: string;
    side?: TooltipSide;
    delayDuration?: number;
    disabled?: boolean;
    contentClass?: string;
    arrowClass?: string;
    sideOffset?: number;
    collisionPadding?: number;
}
declare var __VLS_14: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_14) => any;
};
declare const __VLS_component: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{}>, {
    disabled: boolean;
    side: TooltipSide;
    delayDuration: number;
    contentClass: string;
    arrowClass: string;
    sideOffset: number;
    collisionPadding: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
