<script setup lang="ts">
import { computed, useAttrs } from 'vue';

/**
 * Section component with optional header and customizable styling
 *
 * @component
 *
 * @prop {string} header - Optional header text to display at the top
 * @prop {boolean} overflow - Whether to hide overflow content (default: false)
 * @prop {string} variant - Section variant for different default styles
 * @prop {boolean} unstyled - Remove all default styling to allow full customization
 */

interface Props {
    header?: string;
    overflow?: boolean;
    variant?: 'default' | 'outlined' | 'minimal';
    unstyled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    overflow: false,
    variant: 'default',
    unstyled: false,
});

const attrs = useAttrs();

// Base classes
const baseClasses = computed(() => {
    if (props.unstyled) {
        return '';
    }

    const base = 'rounded-lg';

    switch (props.variant) {
        case 'outlined':
            return `${base} border border-gray-300`;
        case 'minimal':
            return base;
        case 'default':
        default:
            return `${base} border border-gray-200 bg-white shadow`;
    }
});

const containerClasses = computed(() => {
    const classes = [];

    // Add base classes if not unstyled
    if (!props.unstyled) {
        classes.push(baseClasses.value);
    }

    // Add overflow class if needed
    if (props.overflow) {
        classes.push('overflow-hidden');
    }

    // Add custom class if provided (this will override defaults due to CSS specificity)
    if (attrs.class && typeof attrs.class === 'string') {
        classes.push(attrs.class);
    }

    return classes.filter(Boolean).join(' ');
});

// Get non-class attributes to pass through
const nonClassAttrs = computed(() => {
    const { class: _, ...rest } = attrs;
    return rest;
});
</script>
<template>
    <div :class="containerClasses" v-bind="nonClassAttrs">
        <div v-if="header" class="border-b border-gray-200 bg-gray-50/50 px-6 py-4">
            <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-gray-900">{{ header }}</h3>
                <div v-if="$slots.headerButton">
                    <slot name="headerButton" />
                </div>
            </div>
        </div>
        <div class="p-6">
            <slot />
        </div>
    </div>
</template>
