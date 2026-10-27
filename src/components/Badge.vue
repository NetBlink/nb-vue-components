<script setup lang="ts">
/**
 * Small rounded label for statuses, counts and tags, in the shared colour
 * vocabulary. Pass `status` (e.g. an order's status field) and the badge picks
 * its colour from the status map (built-in words plus the app's `badge.statuses`
 * plugin option) and shows the word capitalised, replacing hand-written
 * `getStatusColor()` helpers. `dot` adds a leading status dot.
 *
 * @part root - the badge
 * @part dot - the leading dot
 * @part label - the text
 * @motion off - changes instantly
 * @motion simple - changes instantly
 * @motion smooth - changes instantly
 * @motion fancy - a new label or status pops in
 */
import { computed, ref, watch } from 'vue';
import type { MotionLevel } from '../ui/motion';
import type { NbColorVariants, NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';
import { useBadgeStatus } from '../ui/status';

defineOptions({ inheritAttrs: false });

export interface BadgeProps {
    /** Colour. Ignored when `status` is set. Add your own through the `variants` config. */
    variant?: keyof NbColorVariants;
    /** Size */
    size?: 'sm' | 'md';
    /** Show a leading status dot */
    dot?: boolean;
    /** A status word: picks the colour from the status map and becomes the label */
    status?: string;
    /** Text, when not using the default slot */
    label?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Badge']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<BadgeProps>(), {
    variant: 'neutral',
    size: 'sm',
});

const { cls, attrs, variant, level } = useUi('Badge', props);

// fancy: a changed label pops in (not on first render).
const changes = ref(0);
watch(() => [props.label, props.status], () => changes.value++);
const fromStatus = useBadgeStatus();

const VARIANTS: Record<string, { root: string; dot: string }> = {
    neutral: { root: 'bg-gray-100 text-gray-700 dark:bg-gray-700/60 dark:text-gray-200', dot: 'bg-gray-400' },
    primary: { root: 'bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-200', dot: 'bg-primary-500' },
    accent: { root: 'bg-accent-100 text-accent-800 dark:bg-accent-900/40 dark:text-accent-200', dot: 'bg-accent-500' },
    success: { root: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200', dot: 'bg-green-500' },
    warning: { root: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200', dot: 'bg-yellow-500' },
    danger: { root: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200', dot: 'bg-red-500' },
    info: { root: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200', dot: 'bg-blue-500' },
};

const SIZES = { sm: 'px-2.5 py-0.5 text-xs', md: 'px-3 py-1 text-sm' };

const resolved = computed(() => (props.status ? fromStatus(props.status) : null));
const colour = computed(() => variant<'root' | 'dot'>('variant', VARIANTS, resolved.value?.variant ?? props.variant));
const text = computed(() => props.label ?? resolved.value?.label);
</script>

<template>
    <span v-bind="attrs()" :class="cls('root', 'inline-flex items-center gap-1.5 rounded-full font-medium whitespace-nowrap', SIZES[size], colour.root ?? VARIANTS.neutral.root)">
        <span v-if="dot" :class="cls('dot', 'h-1.5 w-1.5 shrink-0 rounded-full', colour.dot ?? VARIANTS.neutral.dot)" aria-hidden="true" />
        <span :key="changes" :class="cls('label', level === 'fancy' && changes > 0 && 'animate-pop-in')"><slot>{{ text }}</slot></span>
    </span>
</template>
