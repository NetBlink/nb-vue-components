import {
    mergeDataIntoQueryString,
    shouldIntercept,
    Method,
    VisitOptions,
} from '@inertiajs/core';
import { defineComponent, h } from 'vue';
import { getInertiaRouter } from '../Helpers';
const Link = defineComponent({
    name: 'Link',
    props: {
        as: {
            type: String,
            default: 'a',
        },
        data: {
            type: Object,
            default: () => ({}),
        },
        href: {
            type: String,
            required: true,
        },
        method: {
            type: String,
            default: 'get',
        },
        replace: {
            type: Boolean,
            default: false,
        },
        preserveScroll: {
            type: Boolean,
            default: false,
        },
        preserveState: {
            type: Boolean,
            default: null,
        },
        only: {
            type: Array,
            default: () => [],
        },
        headers: {
            type: Object,
            default: () => ({}),
        },
        queryStringArrayFormat: {
            type: String,
            default: 'brackets',
        },
    },
    setup(props, { slots, attrs }) {
        return () => {
            const router = getInertiaRouter();
            const as = props.as.toLowerCase();
            const method = props.method.toLowerCase();
            const [href, data] = mergeDataIntoQueryString(
                method as Method,
                props.href || '',
                props.data,
                props.queryStringArrayFormat as 'indices' | 'brackets'
            );

            if (as === 'a' && method !== 'get') {
                console.warn(
                    `Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.\n\nPlease specify a more appropriate element using the "as" attribute. For example:\n\n<Link href="${href}" method="${method}" as="button">...</Link>`
                );
            }

            return h(
                props.as,
                {
                    ...attrs,
                    ...(as === 'a' ? { href } : {}),
                    onClick: (event) => {
                        if (shouldIntercept(event)) {
                            event.preventDefault();

                            router.visit(href, {
                                data: data,
                                method: method as Method,
                                replace: props.replace,
                                preserveScroll: props.preserveScroll,
                                preserveState:
                                    props.preserveState ?? method !== 'get',
                                only: props.only as string[],
                                headers: props.headers,
                                onCancelToken: attrs.onCancelToken as any,
                                onBefore: attrs.onBefore as any,
                                onStart: attrs.onStart as any,
                                onProgress: attrs.onProgress as any,
                                onFinish: attrs.onFinish as any,
                                onCancel: attrs.onCancel as any,
                                onSuccess: attrs.onSuccess as any,
                                onError: attrs.onError as any,
                            } as VisitOptions);
                        }
                    },
                },
                slots
            );
        };
    },
});

export default Link;
