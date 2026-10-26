<script setup lang="ts">
/**
 * Pulsing placeholder shown while content loads: `text` lines, a `circle`, a
 * `rect` block, or a `row` (circle plus two lines, the shape of a list item). The
 * pulse is a status indicator, so it keeps running at every motion level.
 * `TrPlaceholder` is the table-row equivalent.
 *
 * @part root - the wrapper
 * @part line - each text line
 * @part circle - the circle
 * @motion all - pulses at every level, like Spinner
 */
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface SkeletonProps {
    /** Shape of the placeholder */
    shape?: 'text' | 'circle' | 'rect' | 'row';
    /** Number of lines for `text` */
    lines?: number;
    /** CSS width (any length), e.g. `12rem` or `60%` */
    width?: string;
    /** CSS height for `rect` and `circle` */
    height?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Skeleton']>;
}

const props = withDefaults(defineProps<SkeletonProps>(), {
    shape: 'text',
    lines: 3,
    width: undefined,
    height: undefined,
});

const { cls, attrs } = useUi('Skeleton', props);

const PULSE = 'animate-pulse rounded bg-gray-200 dark:bg-gray-700';
// The last line of a paragraph is shorter, as real text is.
const lineWidth = (index: number, count: number) => (count > 1 && index === count - 1 ? '60%' : '100%');
</script>

<template>
    <div v-if="shape === 'row'" v-bind="attrs()" :class="cls('root', 'flex items-center gap-3')" :style="{ width }" aria-hidden="true">
        <div :class="cls('circle', PULSE, 'h-10 w-10 shrink-0 rounded-full')" />
        <div class="flex-1 space-y-2">
            <div :class="cls('line', PULSE, 'h-3')" style="width: 70%" />
            <div :class="cls('line', PULSE, 'h-3')" style="width: 45%" />
        </div>
    </div>
    <div
        v-else-if="shape === 'circle'"
        v-bind="attrs()"
        :class="cls('root', cls('circle', PULSE, 'h-10 w-10 rounded-full'))"
        :style="{ width, height: height ?? width }"
        aria-hidden="true"
    />
    <div v-else-if="shape === 'rect'" v-bind="attrs()" :class="cls('root', PULSE, 'h-24 w-full rounded-lg')" :style="{ width, height }" aria-hidden="true" />
    <div v-else v-bind="attrs()" :class="cls('root', 'space-y-2')" :style="{ width }" aria-hidden="true">
        <div v-for="index in lines" :key="index" :class="cls('line', PULSE, 'h-3')" :style="{ width: lineWidth(index - 1, lines) }" />
    </div>
</template>
