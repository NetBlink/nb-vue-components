<script setup lang="ts">
/**
 * Link Button component that can render as either a Link or anchor tag
 *
 * @component
 *
 * @prop {string} href - The URL to navigate to
 * @prop {string[]} colourClasses - Deprecated: replaces all default classes. Use `class`, or `theme="no-style"` plus `class`
 * @part root - the `<a>`, or the Inertia `Link` when `method` or `data` is set
 * @prop {ComponentTheme} theme - Predefined theme (primary, secondary, success, danger, warning, info)
 * @prop {string} target - Link target attribute (default: '_self')
 * @prop {boolean} disabled - Whether the button is disabled
 * @prop {string} method - HTTP method for Inertia requests
 * @prop {object} data - Data to send with Inertia requests
 */

import Link from '../overrides/InertiaLink';
import { ComponentTheme as Theme } from '../Types';
import type { ButtonThemes, NbParts, UiProp } from '../ui/parts';
import type { MotionLevel } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

// Base button styles
const baseStyles =
    'focusable inline-flex cursor-pointer items-center justify-center gap-1.5 rounded px-2 text-sm leading-normal font-medium transition-colors duration-200 select-none';

// Theme variants matching Button component exactly
const themeVariants: Record<string, string> = {
    // Matches Button's primary variant - see the contrast note there.
    [Theme.PRIMARY]:
        'bg-primary-600 hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500 active:bg-primary-800 border-transparent text-white',

    [Theme.SECONDARY]:
        'border-gray-300 bg-white text-gray-700 shadow hover:bg-gray-50 focus:ring-primary-500 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:disabled:opacity-60',

    [Theme.DANGER]:
        'bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-red-500 active:bg-red-700 border-transparent text-white',

    [Theme.WARNING]:
        'bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-600 focus:ring-yellow-500 active:bg-yellow-600 border-transparent text-white',

    [Theme.INFO]:
        'bg-primary-500 hover:bg-primary-400 focus:bg-primary-600 focus:ring-primary-500 active:bg-primary-600 border-transparent text-white',

    [Theme.SUCCESS]:
        'bg-green-600 hover:bg-green-500 focus:bg-green-700 focus:ring-green-500 active:bg-green-700 border-transparent text-white',

    [Theme.NO_STYLE]: '',
};

export interface LinkButtonProps {
    href?: string;
    /** Deprecated: replaces all default classes. Use `class` */
    colourClasses?: string[];
    /** Colour theme. Add your own through the `variants` config. */
    theme?: keyof ButtonThemes;
    target?: string;
    disabled?: boolean;
    method?: string;
    data?: Record<string, any>;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['LinkButton']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<LinkButtonProps>(), {
    colourClasses: undefined,
    theme: 'primary',
    target: '_self',
    disabled: false,
});

// colourClasses keeps its 3.x semantics (it replaces the theme styling) in getClasses below.
const { cls, attrs, variant } = useUi('LinkButton', props, { aliases: { colourClasses: 'root' } });

// Anchors never match the `disabled:` CSS variant (there is no :disabled state
// on <a>), so the muted look must be applied as plain classes.
// pointer-events-none also neutralises the theme's hover/active styles.
const disabledClasses = 'pointer-events-none cursor-not-allowed opacity-50 saturate-50';

const getClasses = (): string[] => {
    // Legacy support: use colourClasses if provided
    if (props.colourClasses && props.colourClasses.length > 0) {
        return props.disabled ? [...props.colourClasses, disabledClasses] : [...props.colourClasses];
    }

    // New approach: use theme-based styling
    const classes = [];

    // Apply base styles unless no-style theme
    if (props.theme !== Theme.NO_STYLE) {
        classes.push(baseStyles);
    }

    // Apply theme variant
    classes.push(variant('theme', themeVariants, props.theme).root);

    if (props.disabled) {
        classes.push(disabledClasses);
    }

    return classes;
};

const rootClass = () => cls('root', getClasses());
</script>

<template>
    <Link
        v-if="href && (method || data)"
        :href="href"
        :method="method"
        :data="data"
        v-bind="attrs()"
        :class="rootClass()"
        :disabled="disabled"
        as="button"
        tabindex="0"
    >
        <slot />
    </Link>

    <a
        v-else
        :href="href"
        v-bind="attrs()"
        :target="target"
        :class="rootClass()"
        :tabindex="disabled ? -1 : 0"
        :aria-disabled="disabled"
        @click="disabled && $event.preventDefault()"
    >
        <slot />
    </a>
</template>
