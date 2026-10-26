<script setup lang="ts">
/**
 * What to show when there is nothing to show yet: an icon, a title, a short
 * explanation and the actions that fix it (the default slot), centred. `compact`
 * is the one-line "No X found" form for inside lists, tables and cards.
 *
 * @part root - the wrapper
 * @part icon - the `IconCircle`
 * @part title - the title
 * @part description - the explanation
 * @part actions - the default slot wrapper
 */
import IconCircle from './IconCircle.vue';
import NbIcon from '../icons/NbIcon.vue';
import type { IconLike } from '../icons/types';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface EmptyStateProps {
    /** Icon above the title (in compact mode, before the text) */
    icon?: IconLike;
    /** Title, or the whole message in compact mode */
    title?: string;
    /** Short explanation under the title */
    description?: string;
    /** One-line form for lists, tables and cards */
    compact?: boolean;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['EmptyState']>;
}

const props = withDefaults(defineProps<EmptyStateProps>(), {
    icon: undefined,
    title: undefined,
    description: undefined,
    compact: false,
});

const { cls, attrs } = useUi('EmptyState', props);
</script>

<template>
    <div v-if="compact" v-bind="attrs()" :class="cls('root', 'flex items-center justify-center gap-2 px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400')">
        <NbIcon v-if="icon" :name="icon" :class="cls('icon', 'h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500')" aria-hidden="true" />
        <span :class="cls('title')">{{ title }}</span>
        <span v-if="description" :class="cls('description')">{{ description }}</span>
        <div v-if="$slots.default" :class="cls('actions', 'ml-1')"><slot /></div>
    </div>
    <div v-else v-bind="attrs()" :class="cls('root', 'flex flex-col items-center px-6 py-12 text-center')">
        <IconCircle v-if="icon" :icon="icon" variant="neutral" size="lg" :class="cls('icon')" />
        <h3 v-if="title" :class="cls('title', 'text-base font-semibold text-gray-900 dark:text-gray-100', icon && 'mt-4')">{{ title }}</h3>
        <p v-if="description" :class="cls('description', 'mt-1 max-w-sm text-sm text-gray-500 dark:text-gray-400')">{{ description }}</p>
        <div v-if="$slots.default" :class="cls('actions', 'mt-6 flex flex-wrap items-center justify-center gap-3')"><slot /></div>
    </div>
</template>
