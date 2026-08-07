<script setup lang="ts">
/**
 * Tabs - tabbed panel switcher built on reka-ui's `Tabs` primitives.
 *
 * Declare the tab strip with `tabs`, then render one `<Tab>` per panel in the
 * default slot. Keyboard navigation, roving focus and ARIA wiring come from
 * reka-ui.
 *
 * ```vue
 * <Tabs :tabs="[{ value: 'fa', label: 'FontAwesome' }, { value: 'hero', label: 'Heroicons' }]">
 *     <Tab value="fa">…</Tab>
 *     <Tab value="hero">…</Tab>
 * </Tabs>
 * ```
 *
 * @prop {TabItem[]} tabs - `{ value, label, icon?, disabled?, badge? }[]`
 * @prop {string} [modelValue] - active tab value (`v-model`); defaults to the first enabled tab
 * @prop {'underline'|'pills'} [variant='underline'] - visual treatment of the tab strip
 * @prop {boolean} [fitted=false] - stretch triggers to fill the strip width
 * @slot default - the `<Tab>` panels
 * @slot trigger - custom trigger content; receives `{ tab, active }`
 */

import { computed } from 'vue';
import { TabsList, TabsRoot, TabsTrigger } from 'reka-ui';
import NbIcon from '../icons/NbIcon.vue';
import type { IconLike } from '../icons/types';

export interface TabItem {
    /** Unique key - matches the `value` of the corresponding `<Tab>` */
    value: string;
    /** Text shown in the tab strip */
    label: string;
    /** Optional icon rendered before the label */
    icon?: IconLike;
    /** Render the trigger as non-interactive */
    disabled?: boolean;
    /** Small count/status rendered after the label */
    badge?: string | number;
}

interface Props {
    tabs: TabItem[];
    variant?: 'underline' | 'pills';
    fitted?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'underline',
    fitted: false,
});

const model = defineModel<string>();

// Falling back to the first enabled tab keeps the component usable without v-model.
const fallback = computed(() => props.tabs.find((t) => !t.disabled)?.value ?? props.tabs[0]?.value);

const listClasses = computed(() => {
    if (props.variant === 'pills') {
        // `inline-flex` shrinks to content, which leaves the triggers' flex-1 nothing
        // to share - a fitted strip has to be a full-width flex row.
        return [props.fitted ? 'flex w-full' : 'inline-flex', 'items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800'];
    }
    return 'flex items-center gap-1 border-b border-gray-200 dark:border-gray-700';
});

const triggerClasses = computed(() => {
    const base =
        'focusable inline-flex cursor-pointer items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50';

    const variant =
        props.variant === 'pills'
            ? 'rounded-md px-3 py-1.5 text-gray-600 hover:text-gray-900 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm dark:text-gray-400 dark:hover:text-gray-100 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-gray-100'
            : // -mb-px pulls the active underline onto the list's own border so they read as one line
              '-mb-px rounded-t-md border-b-2 border-transparent px-4 py-2 text-gray-500 hover:border-gray-300 hover:text-gray-800 data-[state=active]:border-primary-500 data-[state=active]:text-primary-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:data-[state=active]:border-primary-400 dark:data-[state=active]:text-primary-300';

    return [base, variant, props.fitted ? 'flex-1' : ''];
});
</script>

<template>
    <TabsRoot v-model="model" :defaultValue="fallback">
        <TabsList :class="listClasses" :aria-label="$attrs['aria-label'] as string">
            <TabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value" :disabled="tab.disabled" :class="triggerClasses">
                <slot name="trigger" :tab="tab" :active="(model ?? fallback) === tab.value">
                    <NbIcon v-if="tab.icon" :name="tab.icon" class="size-4" />
                    {{ tab.label }}
                    <span
                        v-if="tab.badge !== undefined"
                        class="rounded-full bg-gray-200 px-1.5 py-0.5 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                    >
                        {{ tab.badge }}
                    </span>
                </slot>
            </TabsTrigger>
        </TabsList>

        <slot />
    </TabsRoot>
</template>
