<script setup lang="ts">
/**
 * Indeterminate loading indicator: a CSS-only spinning ring in five preset sizes, with
 * `role="status"` and a visually hidden "Loading..." label for screen readers. Defaults to
 * the primary brand colour; pass `color` to override with your own text-colour classes.
 *
 * @part root - the spinning ring
 * @motion all - keeps spinning at every level, including `off`: it is a status indicator
 */
import { computed } from 'vue';
import type { NbParts, SpinnerSizes, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface SpinnerProps {
    /** Spinner size. Add your own through the `variants` config. */
    size?: keyof SpinnerSizes;
    /** Custom color classes, replacing the default colour */
    color?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Spinner']>;
}

const props = withDefaults(defineProps<SpinnerProps>(), {
    size: 'md',
    color: undefined,
});

const { cls, attrs, variant } = useUi('Spinner', props);

const SIZES: Record<string, string> = {
    xs: 'h-4 w-4 border-2',
    sm: 'h-6 w-6 border-2',
    md: 'h-8 w-8 border-4', // Current default size
    lg: 'h-12 w-12 border-4',
    xl: 'h-16 w-16 border-4',
};

// Size configurations
const sizeClasses = computed(() => variant('size', SIZES, props.size).root ?? SIZES.md);

// Color classes
const colorClasses = computed(() => {
    if (props.color) {
        return props.color;
    }
    // primary-600: the bare `primary` alias (300) is near-invisible on white.
    return 'text-primary-600 dark:text-primary-300';
});
</script>

<template>
    <div
        v-bind="attrs()"
        :class="
            cls('root', [
                'inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
                sizeClasses,
                colorClasses,
            ])
        "
        role="status"
        aria-label="Loading"
    >
        <span class="sr-only">Loading...</span>
    </div>
</template>
