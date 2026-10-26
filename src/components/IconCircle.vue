<script setup lang="ts">
/**
 * An icon on a soft coloured disc. The building block behind timeline markers,
 * empty states and stat-tile chips, also usable on its own next to list rows or
 * card titles. Colours follow the shared status vocabulary (`neutral`, `primary`,
 * `accent`, `success`, `warning`, `danger`, `info`).
 *
 * @part root - the disc
 * @part icon - the icon
 */
import { computed } from 'vue';
import NbIcon from '../icons/NbIcon.vue';
import type { IconLike } from '../icons/types';
import type { NbColorVariants, NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface IconCircleProps {
    /** The icon: an alias like `$info`, a set-prefixed name, a component or raw SVG */
    icon: IconLike;
    /** Colour. Add your own through the `variants` config. */
    variant?: keyof NbColorVariants;
    /** Disc size */
    size?: 'sm' | 'md' | 'lg';
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['IconCircle']>;
}

const props = withDefaults(defineProps<IconCircleProps>(), {
    variant: 'primary',
    size: 'md',
});

const { cls, attrs, variant } = useUi('IconCircle', props);

const VARIANTS: Record<string, { root: string; icon: string }> = {
    neutral: { root: 'bg-gray-100 dark:bg-gray-700/60', icon: 'text-gray-500 dark:text-gray-300' },
    primary: { root: 'bg-primary-100 dark:bg-primary-900/40', icon: 'text-primary-600 dark:text-primary-300' },
    accent: { root: 'bg-accent-100 dark:bg-accent-900/40', icon: 'text-accent-600 dark:text-accent-300' },
    success: { root: 'bg-green-100 dark:bg-green-900/40', icon: 'text-green-600 dark:text-green-300' },
    warning: { root: 'bg-yellow-100 dark:bg-yellow-900/40', icon: 'text-yellow-600 dark:text-yellow-300' },
    danger: { root: 'bg-red-100 dark:bg-red-900/40', icon: 'text-red-600 dark:text-red-300' },
    info: { root: 'bg-blue-100 dark:bg-blue-900/40', icon: 'text-blue-600 dark:text-blue-300' },
};

const SIZES = {
    sm: { root: 'h-8 w-8', icon: 'h-4 w-4' },
    md: { root: 'h-10 w-10', icon: 'h-5 w-5' },
    lg: { root: 'h-12 w-12', icon: 'h-6 w-6' },
};

const colour = computed(() => variant<'root' | 'icon'>('variant', VARIANTS, props.variant));
</script>

<template>
    <span v-bind="attrs()" :class="cls('root', 'inline-flex shrink-0 items-center justify-center rounded-full', SIZES[size].root, colour.root ?? VARIANTS.primary.root)">
        <NbIcon :name="icon" :class="cls('icon', SIZES[size].icon, colour.icon ?? VARIANTS.primary.icon)" aria-hidden="true" />
    </span>
</template>
