<script setup lang="ts">
import { computed, h, useSlots, type VNode } from 'vue';
import DOMPurify from 'isomorphic-dompurify';
import { useNbIcons } from './inject';
import { resolve } from './resolve';
import type { IconLike } from './types';

interface Props {
    /** What to render - see IconLike. Required unless the default slot is used. */
    name?: IconLike;
    /** Sizing token - see size table below. */
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3x' | number | string;
}

const props = withDefaults(defineProps<Props>(), {
    name: undefined,
    size: 'md',
});

const slots = useSlots();
const registry = useNbIcons();

const sizeClass = computed<string | undefined>(() => {
    if (typeof props.size === 'number') return undefined;
    if (typeof props.size === 'string' && !['sm', 'md', 'lg', 'xl', '2xl', '3x'].includes(props.size)) return undefined;
    switch (props.size) {
        case 'sm':  return 'h-4 w-4';
        case 'lg':  return 'h-6 w-6';
        case 'xl':  return 'h-8 w-8';
        case '2xl': return 'h-12 w-12';
        case '3x':  return 'h-16 w-16';
        case 'md':
        default:    return 'h-5 w-5';
    }
});

const sizeStyle = computed<Record<string, string> | undefined>(() => {
    if (typeof props.size === 'number') {
        const px = `${props.size}px`;
        return { width: px, height: px };
    }
    if (typeof props.size === 'string' && !['sm', 'md', 'lg', 'xl', '2xl', '3x'].includes(props.size)) {
        return { width: props.size, height: props.size };
    }
    return undefined;
});

const descriptor = computed(() => resolve(props.name, registry));

// Every render shape ends up inside an inline-flex <span> wrapper. Without
// this, different icon libraries layout inconsistently - FontAwesome ships
// CSS that forces `display: inline-block; vertical-align: -0.125em`, while
// raw Heroicons SVGs default to `display: inline` and Iconify's <Icon>
// applies its own quirky rules. Wrapping uniformly means `<NbIcon>` sits
// inline with surrounding text the same way regardless of provider.
const wrapperClasses = 'inline-flex shrink-0 items-center justify-center align-[-0.125em]';

const rendered = computed<VNode | null>(() => {
    const cls = sizeClass.value;
    const style = sizeStyle.value;

    if (slots.default) {
        return h('span', { class: [wrapperClasses, cls], style }, slots.default());
    }

    const d = descriptor.value;
    switch (d.kind) {
        case 'component': {
            // The inner icon component fills the wrapper (w-full h-full). We hand
            // it the component's expected props (e.g. `icon` for FontAwesomeIcon
            // or Iconify Icon) and let the wrapper own size + alignment.
            const inner = h(d.component as any, { ...d.props, class: 'h-full w-full' });
            return h('span', { class: [wrapperClasses, cls], style }, inner);
        }
        case 'svg': {
            const sanitized = DOMPurify.sanitize(d.svg, { USE_PROFILES: { svg: true, svgFilters: true } });
            return h('span', { class: [wrapperClasses, cls], style, innerHTML: sanitized });
        }
        case 'class':
            return h('i', { class: [wrapperClasses, d.cls, cls], style, 'aria-hidden': 'true' });
        case 'empty':
        default:
            return null;
    }
});
</script>

<template>
    <component :is="rendered" />
</template>
