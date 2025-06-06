import type { PropType } from 'vue';
import type { Align } from '@/Types';
declare var __VLS_10: {}, __VLS_20: {};
type __VLS_Slots = {} & {
    trigger?: (props: typeof __VLS_10) => any;
} & {
    content?: (props: typeof __VLS_20) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    align: {
        type: PropType<Align>;
        default: "start";
        validator(value: Align): boolean;
    };
    alignOffset: {
        type: NumberConstructor;
        default: number;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    align: {
        type: PropType<Align>;
        default: "start";
        validator(value: Align): boolean;
    };
    alignOffset: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    align: Align;
    alignOffset: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
