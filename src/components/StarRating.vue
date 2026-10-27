<script setup lang="ts">
/**
 * Star rating, to show a score or to pick one. Read-only ratings can be
 * fractional (3.5 fills half of the fourth star). Editable ratings are a radio
 * group: click a star, or use the arrow keys, Home and End.
 *
 * @part root - the wrapper (`radiogroup` when editable, `img` when read-only)
 * @part star - one star (a radio when editable)
 * @part fill - the filled part of a star
 * @motion off - stars fill instantly
 * @motion simple - stars fill instantly
 * @motion smooth - the fill fades in
 * @motion fancy - the picked star pops on a spring
 */
import { computed, nextTick, ref } from 'vue';
import type { MotionLevel } from '../ui/motion';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface StarRatingProps {
    /** The rating */
    modelValue?: number;
    /** Number of stars */
    max?: number;
    /** Display only (allows fractions) */
    readonly?: boolean;
    /** Star size */
    size?: 'sm' | 'md' | 'lg';
    /** Accessible name of the group, e.g. "Rate this order" */
    label?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['StarRating']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

export interface StarRatingEmits {
    'update:modelValue': [value: number];
}

const props = withDefaults(defineProps<StarRatingProps>(), { modelValue: 0, max: 5, readonly: false, size: 'md', label: 'Rating' });
const emit = defineEmits<StarRatingEmits>();

const { cls, attrs, level } = useUi('StarRating', props);

const SIZES = { sm: 'h-4 w-4', md: 'h-5 w-5', lg: 'h-6 w-6' };
const STAR = 'M10 1.6l2.47 5.3 5.78.62-4.3 3.93 1.2 5.7L10 14.27 4.85 17.15l1.2-5.7-4.3-3.93 5.78-.62z';

const hover = ref<number | null>(null);
const popped = ref<number | null>(null);
const shown = computed(() => hover.value ?? props.modelValue);
const fillOf = (n: number) => `${Math.round(Math.max(0, Math.min(1, shown.value - (n - 1))) * 100)}%`;
const plural = (n: number) => `${n} star${n === 1 ? '' : 's'}`;

const radios = ref<HTMLElement[]>([]);
const pick = (n: number, focus = false) => {
    const value = Math.max(1, Math.min(props.max, n));
    emit('update:modelValue', value);
    popped.value = value;
    if (focus) nextTick(() => radios.value[value - 1]?.focus());
};
const onKeydown = (event: KeyboardEvent) => {
    const current = Math.round(props.modelValue) || 0;
    const step = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1 }[event.key];
    if (step) pick(current + step, true);
    else if (event.key === 'Home') pick(1, true);
    else if (event.key === 'End') pick(props.max, true);
    else return;
    event.preventDefault();
};
const tabIndex = (n: number) => ((Math.round(props.modelValue) || 1) === n ? 0 : -1);
const fillMotion = computed(() => (level.value === 'smooth' || level.value === 'fancy' ? 'transition-[width] duration-200' : ''));
</script>

<template>
    <span
        v-if="readonly"
        v-bind="attrs()"
        role="img"
        :aria-label="`${modelValue} out of ${max}`"
        :class="cls('root', 'inline-flex items-center gap-0.5')"
    >
        <span v-for="n in max" :key="n" :class="cls('star', 'relative inline-block', SIZES[size])" aria-hidden="true">
            <svg viewBox="0 0 20 20" class="absolute inset-0 h-full w-full text-gray-300 dark:text-gray-600" fill="currentColor"><path :d="STAR" /></svg>
            <span data-fill :class="cls('fill', 'absolute inset-y-0 left-0 overflow-hidden')" :style="{ width: fillOf(n) }">
                <svg viewBox="0 0 20 20" :class="['h-full text-amber-400', SIZES[size]]" fill="currentColor"><path :d="STAR" /></svg>
            </span>
        </span>
    </span>
    <span v-else v-bind="attrs()" role="radiogroup" :aria-label="label" :class="cls('root', 'inline-flex items-center gap-0.5')" @mouseleave="hover = null" @keydown="onKeydown">
        <button
            v-for="n in max"
            :key="n"
            ref="radios"
            type="button"
            role="radio"
            :aria-checked="Math.round(modelValue) === n"
            :aria-label="plural(n)"
            :tabindex="tabIndex(n)"
            :class="
                cls(
                    'star',
                    'focusable relative inline-block cursor-pointer rounded-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500',
                    SIZES[size],
                    level === 'fancy' && popped === n && 'animate-check-pop',
                )
            "
            @mouseenter="hover = n"
            @click="pick(n)"
            @animationend="popped = null"
        >
            <svg viewBox="0 0 20 20" class="absolute inset-0 h-full w-full text-gray-300 dark:text-gray-600" fill="currentColor" aria-hidden="true"><path :d="STAR" /></svg>
            <span data-fill :class="cls('fill', 'absolute inset-y-0 left-0 overflow-hidden', fillMotion)" :style="{ width: fillOf(n) }" aria-hidden="true">
                <svg viewBox="0 0 20 20" :class="['h-full text-amber-400', SIZES[size]]" fill="currentColor"><path :d="STAR" /></svg>
            </span>
        </button>
    </span>
</template>
