<script setup lang="ts">
/**
 * A button that shows only an icon: close buttons, row actions, toolbar tools.
 * `label` is required and becomes the accessible name (and the hover title), since
 * an icon alone tells a screen reader nothing. `ghost` is the quiet toolbar look
 * used by the library's own close buttons; the filled themes match `Button`.
 * Pass `href` to render an Inertia link instead.
 *
 * @part root - the button or link
 * @part icon - the icon
 */
import { computed } from 'vue';
import NbIcon from '../icons/NbIcon.vue';
import Link from '../overrides/InertiaLink';
import type { IconLike } from '../icons/types';
import type { NbParts, UiProp } from '../ui/parts';
import { devWarnOnce, useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

declare const process: { env: Record<string, string | undefined> };

export interface IconButtonProps {
    /** The icon: an alias like `$close`, a set-prefixed name, a component or raw SVG */
    icon: IconLike;
    /** What the button does, for screen readers and the hover title. Required. */
    label: string;
    /** Look. Add your own through the `variants` config. */
    theme?: 'ghost' | 'ghost-danger' | 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';
    /** Size */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** Render an Inertia link to this URL instead of a button */
    href?: string;
    /** Disabled */
    disabled?: boolean;
    /** Button type */
    type?: 'button' | 'submit' | 'reset';
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['IconButton']>;
}

const props = withDefaults(defineProps<IconButtonProps>(), {
    theme: 'ghost',
    size: 'md',
    href: undefined,
    disabled: false,
    type: 'button',
});

export interface IconButtonEmits {
    click: [event: MouseEvent];
}

const emit = defineEmits<IconButtonEmits>();

const { cls, attrs, variant } = useUi('IconButton', props);

if (!props.label) devWarnOnce('IconButton.label', 'IconButton: `label` is required, an icon alone has no accessible name.');

const BASE =
    'focusable inline-flex shrink-0 cursor-pointer items-center justify-center rounded-md border transition-colors duration-150 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-hidden dark:focus:ring-offset-gray-800';

const SIZES: Record<string, { root: string; icon: string }> = {
    xs: { root: 'p-1', icon: 'h-3.5 w-3.5' },
    sm: { root: 'p-1.5', icon: 'h-4 w-4' },
    md: { root: 'p-2', icon: 'h-5 w-5' },
    lg: { root: 'p-2.5', icon: 'h-6 w-6' },
};

const THEMES: Record<string, string> = {
    ghost: 'border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200',
    'ghost-danger': 'border-transparent text-red-500 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-950/60 dark:hover:text-red-300',
    primary: 'border-transparent bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
    secondary: 'border-gray-300 bg-white text-gray-700 shadow hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
    danger: 'border-transparent bg-red-600 text-white hover:bg-red-500 active:bg-red-700',
    success: 'border-transparent bg-green-600 text-white hover:bg-green-500 active:bg-green-700',
    warning: 'border-transparent bg-yellow-500 text-white hover:bg-yellow-400 active:bg-yellow-600',
    info: 'border-transparent bg-primary-500 text-white hover:bg-primary-400 active:bg-primary-600',
};

const DISABLED = 'pointer-events-none cursor-not-allowed opacity-50';

const rootClass = computed(() => cls('root', BASE, variant('size', SIZES, props.size).root ?? SIZES.md.root, variant('theme', THEMES, props.theme).root, props.disabled && DISABLED));
const iconClass = computed(() => cls('icon', variant('size', SIZES, props.size).icon ?? SIZES.md.icon));
</script>

<template>
    <Link v-if="href" v-bind="attrs()" :href="href" :class="rootClass" :aria-label="label" :title="label" :aria-disabled="disabled || undefined" :tabindex="disabled ? -1 : undefined" @click="emit('click', $event)">
        <NbIcon :name="icon" :class="iconClass" aria-hidden="true" />
    </Link>
    <button v-else v-bind="attrs()" :type="type" :disabled="disabled" :class="rootClass" :aria-label="label" :title="label" @click="emit('click', $event)">
        <NbIcon :name="icon" :class="iconClass" aria-hidden="true" />
    </button>
</template>
