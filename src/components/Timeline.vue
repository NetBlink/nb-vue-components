<script setup lang="ts">
/**
 * Chronological list of events, each with a coloured icon marker, a title, a time
 * and an optional description. `line` (default) joins the markers with a rail;
 * `cards` puts each event in a softly tinted row instead. Use the scoped `#item`
 * slot to render your own event body.
 *
 * @part root - the `<ol>`
 * @part item - each event
 * @part marker - the `IconCircle`
 * @part connector - the rail between markers (`line` layout)
 * @part content - the column holding the text
 * @part title - the title
 * @part time - the time
 * @part description - the description
 */
import IconCircle from './IconCircle.vue';
import type { IconLike } from '../icons/types';
import type { NbColorVariants, NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface TimelineItem {
    title: string;
    description?: string;
    time?: string;
    icon?: IconLike;
    variant?: keyof NbColorVariants;
}

export interface TimelineProps {
    /** The events, in display order */
    items: TimelineItem[];
    /** Connected rail or tinted rows */
    layout?: 'line' | 'cards';
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Timeline']>;
}

const props = withDefaults(defineProps<TimelineProps>(), {
    layout: 'line',
});

const { cls, attrs } = useUi('Timeline', props);

const DEFAULT_ICONS: Record<string, IconLike> = {
    success: '$success',
    danger: '$error',
    warning: '$warning',
    info: '$info',
};

const CARD: Record<string, string> = {
    neutral: 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800',
    primary: 'border-primary-200 bg-primary-50/60 dark:border-primary-900/60 dark:bg-primary-950/30',
    accent: 'border-accent-200 bg-accent-50/60 dark:border-accent-900/60 dark:bg-accent-950/30',
    success: 'border-green-200 bg-green-50/60 dark:border-green-900/60 dark:bg-green-950/30',
    warning: 'border-yellow-200 bg-yellow-50/60 dark:border-yellow-900/60 dark:bg-yellow-950/30',
    danger: 'border-red-200 bg-red-50/60 dark:border-red-900/60 dark:bg-red-950/30',
    info: 'border-blue-200 bg-blue-50/60 dark:border-blue-900/60 dark:bg-blue-950/30',
};

const iconFor = (item: TimelineItem) => item.icon ?? DEFAULT_ICONS[item.variant ?? ''] ?? '$info';
</script>

<template>
    <ol v-bind="attrs()" :class="cls('root', layout === 'cards' ? 'space-y-4' : '')">
        <li
            v-for="(item, index) in items"
            :key="index"
            :class="
                cls(
                    'item',
                    'relative flex items-start gap-3 sm:gap-4',
                    layout === 'cards' ? ['rounded-lg border p-4 sm:p-5', CARD[item.variant ?? 'neutral'] ?? CARD.neutral] : index < items.length - 1 && 'pb-6',
                )
            "
        >
            <span
                v-if="layout === 'line' && index < items.length - 1"
                :class="cls('connector', 'absolute top-11 bottom-1 left-5 w-px -translate-x-1/2 bg-gray-200 dark:bg-gray-700')"
                aria-hidden="true"
            />
            <IconCircle :icon="iconFor(item)" :variant="item.variant ?? 'neutral'" :class="cls('marker', 'relative')" />
            <div :class="cls('content', 'min-w-0 flex-1', layout === 'line' && 'pt-1.5')">
                <slot name="item" :item="item" :index="index">
                    <div class="flex flex-wrap items-baseline justify-between gap-x-4">
                        <p :class="cls('title', 'font-semibold text-gray-800 dark:text-gray-100')">{{ item.title }}</p>
                        <time v-if="item.time" :class="cls('time', 'shrink-0 text-xs text-gray-500 dark:text-gray-400')">{{ item.time }}</time>
                    </div>
                    <p v-if="item.description" :class="cls('description', 'mt-1 text-sm text-gray-600 dark:text-gray-400')">{{ item.description }}</p>
                </slot>
            </div>
        </li>
    </ol>
</template>
