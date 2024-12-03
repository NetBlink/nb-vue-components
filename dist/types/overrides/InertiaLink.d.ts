declare const Link: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    as: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: ObjectConstructor;
        default: () => {};
    };
    href: {
        type: StringConstructor;
        required: true;
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    replace: {
        type: BooleanConstructor;
        default: boolean;
    };
    preserveScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    preserveState: {
        type: BooleanConstructor;
        default: any;
    };
    only: {
        type: ArrayConstructor;
        default: () => any[];
    };
    headers: {
        type: ObjectConstructor;
        default: () => {};
    };
    queryStringArrayFormat: {
        type: StringConstructor;
        default: string;
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    as: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: ObjectConstructor;
        default: () => {};
    };
    href: {
        type: StringConstructor;
        required: true;
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    replace: {
        type: BooleanConstructor;
        default: boolean;
    };
    preserveScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    preserveState: {
        type: BooleanConstructor;
        default: any;
    };
    only: {
        type: ArrayConstructor;
        default: () => any[];
    };
    headers: {
        type: ObjectConstructor;
        default: () => {};
    };
    queryStringArrayFormat: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    replace: boolean;
    data: Record<string, any>;
    as: string;
    method: string;
    preserveScroll: boolean;
    preserveState: boolean;
    only: unknown[];
    headers: Record<string, any>;
    queryStringArrayFormat: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default Link;
