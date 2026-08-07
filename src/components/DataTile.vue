<script setup lang="ts">
/**
 * DataTile - themed statistic tile with a background icon.
 *
 * Renders a card with a large value, a label below it, and a FontAwesome icon
 * watermark behind the value. Hover animates a coloured underline. Set
 * `selected` to show a ring outline - wire it to your own selection state.
 *
 * @prop {string|number} value - value rendered as the big number
 * @prop {string}        label - label rendered under the value
 * @prop {IconLike}      [icon] - icon shown in the background; pass an alias, a Vue component, an FA icon object, etc.
 * @prop {ComponentTheme}[theme='primary'] - primary | secondary | success | danger | warning
 * @prop {boolean}       [selected=false] - show a ring outline
 * @prop {string}        [customStatClass=''] - extra classes on the outer card
 * @prop {string}        [customStatValueClass=''] - extra classes on the value area
 * @prop {string}        [customStatLabelClass=''] - extra classes on the label area
 */

import NbIcon from '../icons/NbIcon.vue';
import type { IconLike } from '../icons/types';
import { computed } from 'vue';
import type { ComponentTheme } from '../Types';

interface Props {
    /** Big number / value to display */
    value: string | number;
    /** Label rendered under the value */
    label: string;
    /** Icon shown in the background of the value area. Accepts any IconLike. */
    icon?: IconLike;
    /** Show a ring outline (use for "currently active" tiles) */
    selected?: boolean;
    /** Extra classes on the outer card */
    customStatClass?: string;
    /** Extra classes on the value section */
    customStatValueClass?: string;
    /** Extra classes on the label section */
    customStatLabelClass?: string;
    /** Colour theme - primary | secondary | success | danger | warning */
    theme?: ComponentTheme;
}

const props = withDefaults(defineProps<Props>(), {
    selected: false,
    customStatClass: '',
    customStatValueClass: '',
    customStatLabelClass: '',
    theme: 'primary',
});

/*
 * The card itself stays neutral (same shell as `Stats`) so a row of tiles reads
 * as one set. The theme is an accent only - icon tint, hover text, the hover
 * underline and the selected ring - rather than a full coloured border + fill.
 *
 * `secondary` has no colour scale in the theme, so it resolves to grey.
 */
const themeClasses = computed(() => {
    switch (props.theme) {
        case 'secondary':
            return {
                icon: 'text-gray-400 dark:text-gray-500',
                hoverText: 'group-hover:text-gray-900 dark:group-hover:text-gray-100',
                ring: 'ring-gray-400',
                gradient: 'from-gray-400 to-gray-500',
            };
        case 'danger':
            return {
                icon: 'text-danger-400/70 dark:text-danger-500/60',
                hoverText: 'group-hover:text-danger-600 dark:group-hover:text-danger-300',
                ring: 'ring-danger-500',
                gradient: 'from-danger-500 to-danger-600',
            };
        case 'success':
            return {
                icon: 'text-success-500/60 dark:text-success-500/50',
                hoverText: 'group-hover:text-success-700 dark:group-hover:text-success-300',
                ring: 'ring-success-500',
                gradient: 'from-success-500 to-success-600',
            };
        case 'warning':
            return {
                icon: 'text-warning-400/70 dark:text-warning-500/60',
                hoverText: 'group-hover:text-warning-600 dark:group-hover:text-warning-300',
                ring: 'ring-warning-500',
                gradient: 'from-warning-500 to-warning-600',
            };
        case 'info':
            return {
                icon: 'text-info-400/60 dark:text-info-400/50',
                hoverText: 'group-hover:text-info-600 dark:group-hover:text-info-300',
                ring: 'ring-info-500',
                gradient: 'from-info-500 to-info-600',
            };
        default:
            return {
                icon: 'text-primary-400/70 dark:text-primary-500/60',
                hoverText: 'group-hover:text-primary-600 dark:group-hover:text-primary-300',
                ring: 'ring-primary-500',
                gradient: 'from-primary-500 to-primary-600',
            };
    }
});
</script>

<template>
    <div
        class="group relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-black/40"
        :class="{
            [themeClasses.ring]: selected,
            'ring-2': selected,
            [customStatClass]: customStatClass,
        }"
    >
        <!-- Value Section -->
        <div class="relative overflow-clip px-6 py-4" :class="[customStatValueClass]">
            <div class="absolute inset-0 isolate z-0 size-full">
                <slot name="icon">
                    <NbIcon
                        v-if="icon"
                        :name="icon"
                        size="3x"
                        :class="[themeClasses.icon]"
                        class="absolute top-1/2 right-2 h-4/5 -translate-y-1/2 transition-colors"
                    />
                </slot>
            </div>
            <div :class="[themeClasses.hoverText]" class="relative text-2xl font-bold text-gray-900 transition-colors dark:text-gray-100">
                {{ value }}
            </div>
        </div>

        <div class="border-t border-gray-100 bg-gray-50/50 px-6 py-3 dark:border-gray-700 dark:bg-gray-900/40" :class="[customStatLabelClass]">
            <div class="text-sm font-medium text-gray-600 transition-colors group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-100">
                {{ label }}
            </div>
        </div>

        <div
            :class="[themeClasses.gradient]"
            class="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100"
        ></div>
    </div>
</template>
