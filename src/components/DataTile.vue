<script setup lang="ts">
/**
 * DataTile - themed statistic tile with a background icon.
 *
 * Renders a card with a large value, a label below it, and an icon (any `IconLike`)
 * watermark behind the value. Hover animates a coloured underline. Set
 * `selected` to show a ring outline - wire it to your own selection state.
 *
 * @prop {string|number} value - value rendered as the big number
 * @prop {string}        label - label rendered under the value
 * @prop {IconLike}      [icon] - icon shown in the background; pass an alias, a Vue component, an FA icon object, etc.
 * @prop {ComponentTheme}[theme='primary'] - primary | secondary | success | danger | warning
 * @prop {boolean}       [selected=false] - show a ring outline
 * @prop {string}        [customStatClass=''] - deprecated, use `class`
 * @prop {string}        [customStatValueClass=''] - deprecated, use `:ui="{ value: '...' }"`
 * @prop {string}        [customStatLabelClass=''] - deprecated, use `:ui="{ label: '...' }"`
 * @part root - the card
 * @part value - the value section
 * @part icon - the background icon
 * @part valueText - the big number
 * @part label - the label section
 * @part labelText - the label text
 * @part underline - the hover underline
 * @part chip - the icon chip (with `iconVariant`)
 * @part trend - the change indicator (with `trend`)
 * @part ping - the live dot (with `ping`)
 */

import NbIcon from '../icons/NbIcon.vue';
import IconCircle from './IconCircle.vue';
import StatTrend, { type StatTrendValue } from './StatTrend.vue';
import type { IconLike } from '../icons/types';
import { computed } from 'vue';
import type { DataTileThemes, NbColorVariants, NbParts, UiProp } from '../ui/parts';
import type { MotionLevel } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface DataTileProps {
    /** Big number / value to display */
    value: string | number;
    /** Label rendered under the value */
    label: string;
    /** Icon shown in the background of the value area. Accepts any IconLike. */
    icon?: IconLike;
    /** Show a ring outline (use for "currently active" tiles) */
    selected?: boolean;
    /** Deprecated, use `class` */
    customStatClass?: string;
    /** Deprecated, use `:ui="{ value: '...' }"` */
    customStatValueClass?: string;
    /** Deprecated, use `:ui="{ label: '...' }"` */
    customStatLabelClass?: string;
    /** Show `icon` in a coloured chip beside the value instead of as the background watermark */
    iconVariant?: keyof NbColorVariants;
    /** Change indicator under the value, e.g. `{ value: '12%', direction: 'up' }` */
    trend?: StatTrendValue | 'up' | 'down' | 'flat' | 'stable';
    /** Pulsing "live" dot in the corner */
    ping?: boolean;
    /** Colour theme - primary | secondary | success | danger | warning | info. Add your own through the `variants` config. */
    theme?: keyof DataTileThemes;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['DataTile']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<DataTileProps>(), {
    selected: false,
    customStatClass: '',
    customStatValueClass: '',
    customStatLabelClass: '',
    theme: 'primary',
});

const { cls, attrs, variant, level } = useUi('DataTile', props, {
    aliases: { customStatClass: 'root', customStatValueClass: 'value', customStatLabelClass: 'label' },
});

/*
 * The card itself stays neutral (same shell as `Stats`) so a row of tiles reads
 * as one set. The theme is an accent only - icon tint, hover text, the hover
 * underline and the selected ring - rather than a full coloured border + fill.
 *
 * `secondary` has no colour scale in the theme, so it resolves to grey.
 */
type ThemeClasses = { icon: string; valueText: string; selected: string; underline: string };

const THEMES: Record<string, ThemeClasses> = {
    secondary: {
        icon: 'text-gray-400 dark:text-gray-500',
        valueText: 'group-hover:text-gray-900 dark:group-hover:text-gray-100',
        selected: 'ring-gray-400',
        underline: 'from-gray-400 to-gray-500',
    },
    danger: {
        icon: 'text-danger-400/70 dark:text-danger-500/60',
        valueText: 'group-hover:text-danger-600 dark:group-hover:text-danger-300',
        selected: 'ring-danger-500',
        underline: 'from-danger-500 to-danger-600',
    },
    success: {
        icon: 'text-success-500/60 dark:text-success-500/50',
        valueText: 'group-hover:text-success-700 dark:group-hover:text-success-300',
        selected: 'ring-success-500',
        underline: 'from-success-500 to-success-600',
    },
    warning: {
        icon: 'text-warning-400/70 dark:text-warning-500/60',
        valueText: 'group-hover:text-warning-600 dark:group-hover:text-warning-300',
        selected: 'ring-warning-500',
        underline: 'from-warning-500 to-warning-600',
    },
    info: {
        icon: 'text-info-400/60 dark:text-info-400/50',
        valueText: 'group-hover:text-info-600 dark:group-hover:text-info-300',
        selected: 'ring-info-500',
        underline: 'from-info-500 to-info-600',
    },
    primary: {
        icon: 'text-primary-400/70 dark:text-primary-500/60',
        valueText: 'group-hover:text-primary-600 dark:group-hover:text-primary-300',
        selected: 'ring-primary-500',
        underline: 'from-primary-500 to-primary-600',
    },
};

// `selected` is the ring colour while `selected` is set; unknown themes fall back to primary, as before.
const themeClasses = computed(() => {
    const picked = variant<keyof ThemeClasses>('theme', THEMES, props.theme, 'icon');
    return Object.keys(picked).length ? picked : THEMES.primary;
});
</script>

<template>
    <div
        v-bind="attrs()"
        :class="
            cls('root', 'group relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-black/40', selected ? [themeClasses.selected, 'ring-2'] : [])
        "
    >
        <!-- Live dot (opt-in): the solid dot says "live" at every level; the pulse stops at `off` -->
        <span v-if="ping" :class="cls('ping', 'absolute top-3 right-3 z-10 flex h-2.5 w-2.5')" aria-hidden="true">
            <span v-if="level !== 'off'" class="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 motion-safe:animate-ping" />
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
        </span>

        <!-- Value Section: with `iconVariant` the icon sits in a chip beside the value instead of behind it -->
        <div v-if="iconVariant" :class="cls('value', 'relative flex items-center justify-between gap-3 px-6 py-4')">
            <div class="min-w-0">
                <div :class="cls('valueText', 'relative text-2xl font-bold text-gray-900 transition-colors dark:text-gray-100', themeClasses.valueText)">
                    {{ value }}
                </div>
                <StatTrend v-if="trend" :trend="trend" :class="cls('trend', 'mt-1')" />
            </div>
            <IconCircle v-if="icon" :icon="icon" :variant="iconVariant" :class="cls('chip')" />
        </div>
        <div v-else :class="cls('value', 'relative overflow-clip px-6 py-4')">
            <div class="absolute inset-0 isolate z-0 size-full">
                <slot name="icon">
                    <NbIcon
                        v-if="icon"
                        :name="icon"
                        size="3x"
                        :class="cls('icon', 'absolute top-1/2 right-2 h-4/5 -translate-y-1/2 transition-colors', themeClasses.icon)"
                    />
                </slot>
            </div>
            <div :class="cls('valueText', 'relative text-2xl font-bold text-gray-900 transition-colors dark:text-gray-100', themeClasses.valueText)">
                {{ value }}
            </div>
            <StatTrend v-if="trend" :trend="trend" :class="cls('trend', 'relative mt-1')" />
        </div>

        <div :class="cls('label', 'border-t border-gray-100 bg-gray-50/50 px-6 py-3 dark:border-gray-700 dark:bg-gray-900/40')">
            <div :class="cls('labelText', 'text-sm font-medium text-gray-600 transition-colors group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-100')">
                {{ label }}
            </div>
        </div>

        <div
            :class="cls('underline', 'absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100', themeClasses.underline)"
        ></div>
    </div>
</template>
