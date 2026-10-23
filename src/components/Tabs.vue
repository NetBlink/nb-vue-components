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
 * @part root - the tabs wrapper
 * @part list - the tab strip
 * @part trigger - each tab button
 * @part icon - the icon in a tab
 * @part badge - the count badge in a tab
 * @part indicator - the sliding active marker (smooth and fancy motion only)
 * @motion off - the active tab switches instantly
 * @motion simple - colour change only, the marker jumps
 * @motion smooth - the underline (or pill) slides to the new tab
 * @motion fancy - the marker slides on a spring
 */

import { computed, onMounted, ref } from 'vue';
import { TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'reka-ui';
import NbIcon from '../icons/NbIcon.vue';
import type { IconLike } from '../icons/types';
import type { NbParts, TabsVariants, UiProp } from '../ui/parts';
import { levelAtLeast, type MotionLevel } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

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

export interface TabsProps {
    tabs: TabItem[];
    /** Visual treatment. Add your own through the `variants` config. */
    variant?: keyof TabsVariants;
    fitted?: boolean;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Tabs']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<TabsProps>(), {
    variant: 'underline',
    fitted: false,
});

const { cls, attrs, variant, level } = useUi('Tabs', props);

const TRIGGER_BASE =
    'focusable inline-flex cursor-pointer items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50';

/*
 * `marker` is the active underline or pill drawn by the trigger itself. From
 * `smooth` up an indicator element draws the same marker and slides between
 * tabs, so the trigger drops its own once the indicator has measured.
 */
const VARIANTS: Record<string, { list: string; trigger: string; marker: string; indicator: string }> = {
    pills: {
        list: 'items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800',
        trigger:
            'rounded-md px-3 py-1.5 text-gray-600 hover:text-gray-900 data-[state=active]:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 dark:data-[state=active]:text-gray-100',
        marker: 'data-[state=active]:bg-white data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700',
        indicator: 'top-1 bottom-1 rounded-md bg-white shadow-sm dark:bg-gray-700',
    },
    // -mb-px pulls the active underline onto the list's own border so they read as one line
    underline: {
        list: 'flex items-center gap-1 border-b border-gray-200 dark:border-gray-700',
        trigger:
            '-mb-px rounded-t-md border-b-2 border-transparent px-4 py-2 text-gray-500 hover:border-gray-300 hover:text-gray-800 data-[state=active]:text-primary-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:data-[state=active]:text-primary-300',
        marker: 'data-[state=active]:border-primary-500 dark:data-[state=active]:border-primary-400',
        indicator: '-bottom-px h-0.5 bg-primary-500 dark:bg-primary-400',
    },
};

// Only after mount: the indicator measures the active tab on the client, so the
// first paint (and any server render) still draws the marker on the trigger.
const mounted = ref(false);
onMounted(() => requestAnimationFrame(() => (mounted.value = true)));

const model = defineModel<string>();

// Falling back to the first enabled tab keeps the component usable without v-model.
const fallback = computed(() => props.tabs.find((t) => !t.disabled)?.value ?? props.tabs[0]?.value);

const variantClasses = computed(() => variant<'list' | 'trigger' | 'marker' | 'indicator'>('variant', VARIANTS, props.variant, 'list'));

const sliding = computed(() => mounted.value && levelAtLeast(level.value, 'smooth') && !!variantClasses.value.indicator);

const listClasses = computed(() => {
    if (props.variant === 'pills') {
        // `inline-flex` shrinks to content, which leaves the triggers' flex-1 nothing
        // to share - a fitted strip has to be a full-width flex row.
        return [props.fitted ? 'flex w-full' : 'inline-flex', variantClasses.value.list, sliding.value ? 'relative' : ''];
    }
    return [variantClasses.value.list, sliding.value ? 'relative' : ''];
});

const triggerClasses = computed(() => [
    TRIGGER_BASE,
    variantClasses.value.trigger,
    sliding.value ? 'relative z-10' : variantClasses.value.marker,
    props.fitted ? 'flex-1' : '',
]);

const indicatorClasses = computed(() => [
    'absolute left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) transition-[width,translate]',
    level.value === 'fancy' ? 'duration-500 ease-(--ease-spring)' : 'duration-300 ease-(--ease-emphasised)',
    variantClasses.value.indicator,
]);
</script>

<template>
    <TabsRoot v-model="model" :defaultValue="fallback" v-bind="attrs()" :class="cls('root')">
        <TabsList :class="cls('list', listClasses)" :aria-label="$attrs['aria-label'] as string">
            <TabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value" :disabled="tab.disabled" :class="cls('trigger', triggerClasses)">
                <slot name="trigger" :tab="tab" :active="(model ?? fallback) === tab.value">
                    <NbIcon v-if="tab.icon" :name="tab.icon" :class="cls('icon', 'size-4')" />
                    {{ tab.label }}
                    <span
                        v-if="tab.badge !== undefined"
                        :class="cls('badge', 'rounded-full bg-gray-200 px-1.5 py-0.5 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-200')"
                    >
                        {{ tab.badge }}
                    </span>
                </slot>
            </TabsTrigger>
            <TabsIndicator v-if="sliding" :class="cls('indicator', indicatorClasses)" />
        </TabsList>

        <slot />
    </TabsRoot>
</template>
