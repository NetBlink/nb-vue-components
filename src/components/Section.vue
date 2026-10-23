<script setup lang="ts">
/**
 * Generic content card: a rounded container with consistent `px-6 py-4` padding and an
 * optional header strip driven by the `header` prop plus a `headerButton` slot. Pick a
 * `variant` for the border/shadow treatment, or set `unstyled` to keep only the layout
 * and supply your own classes, which are merged onto the container.
 *
 * @part root - the container
 * @part header - the header strip
 * @part title - the header text
 * @part body - the padded content wrapper
 */
import { computed } from 'vue';
import type { NbParts, SectionVariants, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

/**
 * @component
 *
 * @prop {string} header - Optional header text to display at the top
 * @prop {boolean} overflow - Whether to hide overflow content (default: false)
 * @prop {string} variant - Section variant for different default styles
 * @prop {boolean} unstyled - Remove all default styling to allow full customization
 */

export interface SectionProps {
    header?: string;
    overflow?: boolean;
    /** Border and shadow treatment. Add your own through the `variants` config. */
    variant?: keyof SectionVariants;
    unstyled?: boolean;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Section']>;
}

const props = withDefaults(defineProps<SectionProps>(), {
    overflow: false,
    variant: 'default',
    unstyled: false,
});

const { cls, attrs, variant } = useUi('Section', props);

const VARIANTS: Record<string, string> = {
    outlined: 'rounded-lg border border-gray-300 dark:border-gray-700',
    minimal: 'rounded-lg',
    default: 'rounded-lg border border-gray-200 dark:border-gray-700 bg-white shadow dark:border-gray-700 dark:bg-gray-800',
};

// Base classes. An unknown variant falls back to `default`, as before.
const baseClasses = computed(() => {
    if (props.unstyled) {
        return '';
    }
    return variant('variant', VARIANTS, props.variant).root ?? VARIANTS.default;
});

const containerClasses = computed(() => [baseClasses.value, props.overflow ? 'overflow-hidden' : '']);
</script>
<template>
    <div v-bind="attrs()" :class="cls('root', containerClasses)">
        <div v-if="header" :class="cls('header', 'border-b border-gray-200 dark:border-gray-700 bg-gray-50/50 px-6 py-4 dark:border-gray-700 dark:bg-gray-900/40')">
            <div class="flex items-center justify-between">
                <h3 :class="cls('title', 'text-lg font-semibold text-gray-900 dark:text-gray-100')">{{ header }}</h3>
                <div v-if="$slots.headerButton">
                    <slot name="headerButton" />
                </div>
            </div>
        </div>
        <!-- Same px-6 py-4 inset as the header strip above, so a Section with and
             without a header keeps one consistent content box. -->
        <div :class="cls('body', 'px-6 py-4')">
            <slot />
        </div>
    </div>
</template>
