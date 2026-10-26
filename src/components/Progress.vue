<script setup lang="ts">
/**
 * Horizontal progress bar: `value` out of `max`, with an optional label and
 * percentage above it. `indeterminate` shows a sweeping bar for work of unknown
 * length. Exposed as `role="progressbar"` with the current values.
 *
 * @part root - the wrapper
 * @part header - the row above the bar holding label and value
 * @part label - the label
 * @part value - the percentage
 * @part track - the grey track
 * @part bar - the coloured fill
 * @motion off - the fill jumps to the new width
 * @motion simple - the fill jumps to the new width
 * @motion smooth - the fill glides to the new width
 * @motion fancy - the fill glides to the new width on a longer curve
 * @motion all - the indeterminate sweep runs at every level, like Spinner
 */
import { computed } from 'vue';
import type { MotionLevel } from '../ui/motion';
import type { NbColorVariants, NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface ProgressProps {
    /** Current value */
    value?: number;
    /** Value that means done */
    max?: number;
    /** Fill colour. Add your own through the `variants` config. */
    theme?: keyof NbColorVariants;
    /** Bar thickness */
    size?: 'sm' | 'md' | 'lg';
    /** Text above the bar (also the accessible name) */
    label?: string;
    /** Show the percentage above the bar */
    showValue?: boolean;
    /** Unknown length: a sweeping bar instead of a fill */
    indeterminate?: boolean;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Progress']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<ProgressProps>(), {
    value: 0,
    max: 100,
    theme: 'primary',
    size: 'md',
    label: undefined,
    showValue: false,
    indeterminate: false,
});

const { cls, attrs, variant, level } = useUi('Progress', props);

const THEMES: Record<string, string> = {
    neutral: 'bg-gray-500 dark:bg-gray-400',
    primary: 'bg-primary-600 dark:bg-primary-500',
    accent: 'bg-accent-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
    info: 'bg-blue-500',
};

const SIZES = { sm: 'h-1.5', md: 'h-2', lg: 'h-3' };

const percent = computed(() => (props.max > 0 ? Math.min(100, Math.max(0, (props.value / props.max) * 100)) : 0));

const barMotion = computed(() => {
    if (props.indeterminate) return 'w-2/5 animate-[nbProgressIndeterminate_1.2s_ease-in-out_infinite]';
    if (level.value === 'fancy') return 'transition-[width] duration-700 ease-[var(--ease-emphasised)]';
    if (level.value === 'smooth') return 'transition-[width] duration-500 ease-out';
    return '';
});
</script>

<template>
    <div v-bind="attrs()" :class="cls('root', 'w-full')">
        <div v-if="label || (showValue && !indeterminate)" :class="cls('header', 'mb-1.5 flex items-center justify-between gap-3 text-xs font-medium text-gray-600 dark:text-gray-300')">
            <span v-if="label" :class="cls('label')">{{ label }}</span>
            <span v-if="showValue && !indeterminate" :class="cls('value', 'ml-auto tabular-nums')">{{ Math.round(percent) }}%</span>
        </div>
        <div
            :class="cls('track', 'w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700', SIZES[size])"
            role="progressbar"
            :aria-label="label"
            :aria-valuemin="0"
            :aria-valuemax="max"
            :aria-valuenow="indeterminate ? undefined : value"
            :aria-busy="indeterminate || undefined"
        >
            <div :class="cls('bar', 'h-full rounded-full', variant('theme', THEMES, theme).root ?? THEMES.primary, barMotion)" :style="indeterminate ? undefined : { width: `${percent}%` }" />
        </div>
    </div>
</template>
