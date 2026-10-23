<script setup lang="ts">
/**
 * Base Button component with theme support
 *
 * @component
 *
 * @prop {ComponentTheme} theme - The button theme (default: 'primary')
 * @prop {'button' | 'submit' | 'reset'} type - The button type (default: 'button')
 * @prop {boolean} disabled - Whether the button is disabled
 * @prop {string} customClass - Deprecated, use `class`
 * @prop {'xs' | 'sm' | 'md' | 'lg'} size - Button size (default: 'md')
 * @part root - the `<button>` element
 */

import type { ButtonSizes, ButtonThemes, NbParts, UiProp } from '../ui/parts';
import type { MotionLevel } from '../ui/motion';
import { useUi } from '../ui/useUi';
import { ComponentTheme as Theme } from '../Types';

defineOptions({ inheritAttrs: false });

type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
    /** Colour theme. Add your own through the `variants` config. */
    theme?: keyof ButtonThemes;
    type?: ButtonType;
    disabled?: boolean;
    /** Deprecated, use `class` */
    customClass?: string;
    size?: keyof ButtonSizes;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Button']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<ButtonProps>(), {
    theme: 'primary',
    type: 'button',
    disabled: false,
    customClass: '',
    size: 'md',
});

const { cls, attrs, variant } = useUi('Button', props, { aliases: { customClass: 'root' } });

// Base button styles
const baseStyles =
    'focusable inline-flex cursor-pointer items-center justify-center rounded-md border font-semibold tracking-widest uppercase transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:cursor-not-allowed';

// Size variants
const sizeVariants: Record<string, string> = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-xs',
    lg: 'px-6 py-3 text-sm',
};

// Theme variants
const themeVariants: Record<string, string> = {
    /*
     * primary-600, not the bare `primary` alias: that alias resolves to the 300
     * step (#aad3d9), which against white text is ~1.6:1 - far under WCAG AA.
     * Still a scale token, so a brand theme overriding --color-primary-600
     * re-themes this without touching the component.
     */
    /*
     * Disabled = opacity + desaturate (the old brightness/grayscale pair read
     * almost identical to the enabled state on the filled themes), and hover/
     * active are gated behind `enabled:` so a disabled button stops reacting
     * to the mouse.
     */
    [Theme.PRIMARY]:
        'bg-primary-600 enabled:hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500 enabled:active:bg-primary-800 border-transparent text-white disabled:opacity-50 disabled:saturate-50',

    // focus ring is primary, not accent: a pink ring on a neutral button next to
    // teal-ringed siblings made focus colour jump around within one button row.
    [Theme.SECONDARY]:
        'border-gray-300 bg-white text-gray-700 shadow enabled:hover:bg-gray-50 focus:ring-primary-500 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:enabled:hover:bg-gray-700 dark:disabled:opacity-60',

    [Theme.DANGER]:
        'bg-red-600 enabled:hover:bg-red-500 focus:bg-red-700 focus:ring-red-500 enabled:active:bg-red-700 border-transparent text-white disabled:opacity-50 disabled:saturate-50',

    [Theme.WARNING]:
        'bg-yellow-500 enabled:hover:bg-yellow-400 focus:bg-yellow-600 focus:ring-yellow-500 enabled:active:bg-yellow-600 border-transparent text-white disabled:opacity-50 disabled:saturate-50',

    [Theme.INFO]:
        'bg-primary-500 enabled:hover:bg-primary-400 focus:bg-primary-600 focus:ring-primary-500 enabled:active:bg-primary-600 border-transparent text-white disabled:opacity-50 disabled:saturate-50',

    [Theme.SUCCESS]:
        'bg-green-600 enabled:hover:bg-green-500 focus:bg-green-700 focus:ring-green-500 enabled:active:bg-green-700 border-transparent text-white disabled:opacity-50 disabled:saturate-50',

    [Theme.NO_STYLE]: '',
};
</script>

<template>
    <button
        v-bind="attrs()"
        :type="type"
        :disabled="disabled"
        :class="
            cls(
                'root',
                // Apply base styles and size only if not no-style theme
                props.theme !== Theme.NO_STYLE ? [baseStyles, variant('size', sizeVariants, props.size).root] : [],
                // Always apply theme variant
                variant('theme', themeVariants, props.theme).root
            )
        "
    >
        <slot />
    </button>
</template>
