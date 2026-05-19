<script setup lang="ts">
import { computed, useSlots } from 'vue';
import DOMPurify from 'isomorphic-dompurify';
import { useNbIcons } from './inject';
import { resolve } from './resolve';
import type { IconLike } from './types';

interface Props {
    /** What to render — see IconLike. Required unless the default slot is used. */
    name?: IconLike;
    /** Sizing token — see size table below. */
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3x' | number | string;
}

const props = withDefaults(defineProps<Props>(), {
    name: undefined,
    size: 'md',
});

const slots = useSlots();
const registry = useNbIcons();

const sizeClass = computed<string | undefined>(() => {
    if (typeof props.size === 'number' || (typeof props.size === 'string' && !['sm', 'md', 'lg', 'xl', '2xl', '3x'].includes(props.size))) return undefined;
    switch (props.size) {
        case 'sm': return 'h-4 w-4';
        case 'lg': return 'h-6 w-6';
        case 'xl': return 'h-8 w-8';
        case '2xl': return 'h-12 w-12';
        case '3x': return 'h-16 w-16';
        case 'md':
        default:   return 'h-5 w-5';
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

const sanitizedSvg = computed(() => {
    if (descriptor.value.kind !== 'svg') return '';
    return DOMPurify.sanitize(descriptor.value.svg, { USE_PROFILES: { svg: true, svgFilters: true } });
});
</script>

<template>
    <span v-if="slots.default" :class="sizeClass" :style="sizeStyle" class="inline-flex items-center justify-center">
        <slot />
    </span>
    <component
        v-else-if="descriptor.kind === 'component'"
        :is="descriptor.component"
        v-bind="descriptor.props"
        :class="sizeClass"
        :style="sizeStyle"
    />
    <span
        v-else-if="descriptor.kind === 'svg'"
        :class="sizeClass"
        :style="sizeStyle"
        v-html="sanitizedSvg"
    />
    <i
        v-else-if="descriptor.kind === 'class'"
        :class="[descriptor.cls, sizeClass]"
        :style="sizeStyle"
        aria-hidden="true"
    />
    <!-- kind === 'empty' renders nothing -->
</template>
