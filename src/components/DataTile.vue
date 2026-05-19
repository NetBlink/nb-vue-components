<script setup lang="ts">
/**
 * DataTile — themed statistic tile with a background icon.
 *
 * Renders a card with a large value, a label below it, and a FontAwesome icon
 * watermark behind the value. Hover animates a coloured underline. Set
 * `selected` to show a ring outline — wire it to your own selection state.
 *
 * @prop {string|number} value — value rendered as the big number
 * @prop {string}        label — label rendered under the value
 * @prop {IconLike}      [icon] — icon shown in the background; pass an alias, a Vue component, an FA icon object, etc.
 * @prop {ComponentTheme}[theme='primary'] — primary | secondary | success | danger | warning
 * @prop {boolean}       [selected=false] — show a ring outline
 * @prop {string}        [customStatClass=''] — extra classes on the outer card
 * @prop {string}        [customStatValueClass=''] — extra classes on the value area
 * @prop {string}        [customStatLabelClass=''] — extra classes on the label area
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
    /** Colour theme — primary | secondary | success | danger | warning */
    theme?: ComponentTheme;
}

const props = withDefaults(defineProps<Props>(), {
    selected: false,
    customStatClass: '',
    customStatValueClass: '',
    customStatLabelClass: '',
    theme: 'primary',
});

const themeClasses = computed(() => {
    switch (props.theme) {
        case 'secondary':
            return {
                base: 'border-secondary-200 bg-secondary-50 ring-secondary-500',
                hoverText: 'group-hover:text-secondary-600',
                gradient: 'from-secondary-500 to-secondary-600',
            };
        case 'danger':
            return {
                base: 'border-danger-200 bg-danger-50 ring-danger-500',
                hoverText: 'group-hover:text-danger-600',
                gradient: 'from-danger-500 to-danger-600',
            };
        case 'success':
            return {
                base: 'border-success-200 bg-success-50 ring-success-500',
                hoverText: 'group-hover:text-success-600',
                gradient: 'from-success-500 to-success-600',
            };
        case 'warning':
            return {
                base: 'border-warning-200 bg-warning-50 ring-warning-500',
                hoverText: 'group-hover:text-warning-600',
                gradient: 'from-warning-500 to-warning-600',
            };
        default:
            return {
                base: 'border-primary-200 bg-primary-50 ring-primary-500',
                hoverText: 'group-hover:text-primary-600',
                gradient: 'from-primary-500 to-primary-600',
            };
    }
});
</script>

<template>
    <div
        class="group relative cursor-pointer overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:bg-gray-800 dark:hover:shadow-black/40"
        :class="{
            [themeClasses.base]: true,
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
                        :class="[themeClasses.hoverText]"
                        class="absolute top-1/2 right-2 h-4/5 -translate-y-1/2 text-gray-400 opacity-50 transition-colors dark:text-gray-600"
                    />
                </slot>
            </div>
            <div :class="[themeClasses.hoverText]" class="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors dark:text-gray-100">
                {{ value }}
            </div>
        </div>

        <div class="border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 px-6 py-3 dark:border-gray-700 dark:bg-gray-900/40" :class="[customStatLabelClass]">
            <div :class="[themeClasses.hoverText]" class="text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors dark:text-gray-400">
                {{ label }}
            </div>
        </div>

        <div
            :class="[themeClasses.gradient]"
            class="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100"
        ></div>
    </div>
</template>
