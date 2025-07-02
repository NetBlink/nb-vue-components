<script setup lang="ts">
/**
 * Base Button component with theme support
 *
 * @component
 *
 * @prop {ComponentTheme} theme - The button theme (default: 'primary')
 * @prop {'button' | 'submit' | 'reset'} type - The button type (default: 'button')
 * @prop {boolean} disabled - Whether the button is disabled
 * @prop {string} customClass - Custom CSS classes to apply
 * @prop {'xs' | 'sm' | 'md' | 'lg'} size - Button size (default: 'md')
 */

import type { ComponentTheme } from '../Types';
import { ComponentTheme as Theme } from '../Types';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

interface Props {
    theme?: ComponentTheme;
    type?: ButtonType;
    disabled?: boolean;
    customClass?: string;
    size?: ButtonSize;
}

const props = withDefaults(defineProps<Props>(), {
    theme: 'primary',
    type: 'button',
    disabled: false,
    customClass: '',
    size: 'md',
});

// Base button styles
const baseStyles =
    'focusable inline-flex cursor-pointer items-center justify-center rounded-md border font-semibold tracking-widest uppercase transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:cursor-not-allowed';

// Size variants
const sizeVariants = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-xs',
    lg: 'px-6 py-3 text-sm',
};

// Theme variants
const themeVariants: Record<ComponentTheme, string> = {
    [Theme.PRIMARY]:
        'bg-primary hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500 active:bg-primary-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]',

    [Theme.SECONDARY]: 'border-gray-300 bg-white text-gray-700 shadow hover:bg-gray-50 focus:ring-accent-500 disabled:opacity-25',

    [Theme.DANGER]:
        'bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-red-500 active:bg-red-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]',

    [Theme.WARNING]:
        'bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-600 focus:ring-yellow-500 active:bg-yellow-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]',

    [Theme.INFO]:
        'bg-primary-500 hover:bg-primary-400 focus:bg-primary-600 focus:ring-primary-500 active:bg-primary-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]',

    [Theme.SUCCESS]:
        'bg-green-600 hover:bg-green-500 focus:bg-green-700 focus:ring-green-500 active:bg-green-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]',

    [Theme.NO_STYLE]: '',
};
</script>

<template>
    <button
        :type="type"
        :disabled="disabled"
        :class="[
            // Apply base styles and size only if not no-style theme
            props.theme !== Theme.NO_STYLE ? [baseStyles, sizeVariants[props.size]] : [],
            // Always apply theme variant
            themeVariants[props.theme],
            // Custom classes
            props.customClass,
        ]"
    >
        <slot />
    </button>
</template>
