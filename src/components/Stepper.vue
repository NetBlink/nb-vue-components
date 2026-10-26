<script setup lang="ts">
/**
 * Progress through a multi-step flow: numbered markers joined by rails that fill
 * as steps complete. Give each step a `state`, or just pass `current` (0-based) and
 * steps before it count as complete. `clickable` makes markers buttons that emit
 * `select`, for wizards that allow jumping back. Horizontal or vertical.
 *
 * @part root - the `<ol>`
 * @part step - each step
 * @part marker - the numbered or checked circle
 * @part label - the step name
 * @part description - the hint under the name
 * @part connector - the rail to the next step
 * @motion off - markers and rails change colour instantly
 * @motion simple - markers and rails change colour instantly
 * @motion smooth - markers and rails fade to their new colour
 * @motion fancy - the same, and a newly completed marker pops
 */
import { computed } from 'vue';
import type { MotionLevel } from '../ui/motion';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export type StepState = 'complete' | 'current' | 'upcoming';

export interface StepperStep {
    label: string;
    description?: string;
    state?: StepState;
}

export interface StepperProps {
    /** The steps in order */
    steps: StepperStep[];
    /** Index of the current step (0-based), used for steps without a `state` */
    current?: number;
    /** Layout */
    orientation?: 'horizontal' | 'vertical';
    /** Markers become buttons that emit `select` */
    clickable?: boolean;
    /** Accessible name of the list */
    label?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Stepper']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<StepperProps>(), {
    current: 0,
    orientation: 'horizontal',
    clickable: false,
    label: 'Progress',
});

export interface StepperEmits {
    select: [index: number];
}

const emit = defineEmits<StepperEmits>();

const { cls, attrs, level } = useUi('Stepper', props);

const states = computed<StepState[]>(() =>
    props.steps.map((step, index) => step.state ?? (index < props.current ? 'complete' : index === props.current ? 'current' : 'upcoming')),
);

const MARKER: Record<StepState, string> = {
    complete: 'bg-green-500 text-white ring-green-500 dark:ring-green-400',
    current: 'bg-primary-600 text-white ring-primary-600 dark:bg-primary-500 dark:ring-primary-400',
    upcoming: 'bg-white text-gray-400 ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:ring-gray-600',
};

const fade = computed(() => (level.value === 'smooth' || level.value === 'fancy' ? 'transition-colors duration-300' : ''));
const pop = (state: StepState) => (level.value === 'fancy' && state === 'complete' ? 'animate-check-pop' : '');

const vertical = computed(() => props.orientation === 'vertical');
</script>

<template>
    <ol v-bind="attrs()" :aria-label="label" :class="cls('root', vertical ? 'flex flex-col' : 'flex items-start')">
        <li
            v-for="(step, index) in steps"
            :key="`${index}-${step.label}`"
            :aria-current="states[index] === 'current' ? 'step' : undefined"
            :class="cls('step', vertical ? 'flex gap-3' : 'flex flex-1 items-center last:flex-none')"
        >
            <div :class="vertical ? 'flex flex-col items-center' : 'flex flex-col items-center text-center'">
                <component
                    :is="clickable ? 'button' : 'span'"
                    :type="clickable ? 'button' : undefined"
                    :class="
                        cls(
                            'marker',
                            'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ring-2',
                            MARKER[states[index]],
                            fade,
                            pop(states[index]),
                            clickable && 'focusable cursor-pointer focus:ring-offset-2 focus:outline-hidden dark:focus:ring-offset-gray-900',
                        )
                    "
                    :aria-label="clickable ? `Go to step ${index + 1}: ${step.label}` : undefined"
                    @click="clickable && emit('select', index)"
                >
                    <svg v-if="states[index] === 'complete'" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.5 7.57a1 1 0 0 1-1.42 0l-3.5-3.535a1 1 0 1 1 1.42-1.408l2.79 2.817 6.79-6.852a1 1 0 0 1 1.414-.006Z" clip-rule="evenodd" />
                    </svg>
                    <template v-else>{{ index + 1 }}</template>
                </component>
                <span
                    v-if="vertical && index < steps.length - 1"
                    :class="cls('connector', 'my-1 min-h-6 w-0.5 flex-1', states[index] === 'complete' ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700', fade)"
                />
                <template v-if="!vertical">
                    <span :class="cls('label', 'mt-2 text-xs font-medium', states[index] === 'upcoming' ? 'text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-300')">
                        {{ step.label }}
                    </span>
                    <span v-if="step.description" :class="cls('description', 'hidden text-xs text-gray-500 sm:block dark:text-gray-400')">{{ step.description }}</span>
                </template>
            </div>
            <div v-if="vertical" :class="index < steps.length - 1 ? 'pb-6' : ''">
                <p :class="cls('label', 'pt-1 text-sm font-semibold', states[index] === 'upcoming' ? 'text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-gray-100')">
                    {{ step.label }}
                </p>
                <p v-if="step.description" :class="cls('description', 'mt-0.5 text-xs text-gray-500 dark:text-gray-400')">{{ step.description }}</p>
            </div>
            <span
                v-if="!vertical && index < steps.length - 1"
                :class="cls('connector', 'mx-3 mt-4 h-0.5 flex-1 self-start', states[index] === 'complete' ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700', fade)"
                aria-hidden="true"
            />
        </li>
    </ol>
</template>
