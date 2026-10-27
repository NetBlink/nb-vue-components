<script setup lang="ts">
/**
 * Bordered panel for grouping related content: a header (title, description and
 * an `#actions` slot), a body and an optional footer band. Give it `href` to make
 * the whole card an Inertia link, or `clickable` for a keyboard-reachable button
 * card; `selected` marks the chosen one in a picker. Lighter than `Section`, which
 * has a full header band and is meant for page sections.
 *
 * @part root - the card
 * @part header - the row holding title, description and actions
 * @part title - the title
 * @part description - the text under the title
 * @part actions - the right-hand actions slot
 * @part body - the default slot wrapper
 * @part footer - the footer band
 * @motion off - hover and selection change instantly
 * @motion simple - border and shadow fade on hover
 * @motion smooth - border and shadow fade on hover
 * @motion fancy - interactive cards also lift slightly on hover
 */
import { computed, useSlots } from 'vue';
import Link from '../overrides/InertiaLink';
import type { MotionLevel } from '../ui/motion';
import type { NbParts, UiProp } from '../ui/parts';
import { stateLayer } from '../ui/merge';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface CardProps {
    /** Title in the header */
    title?: string;
    /** Text under the title */
    description?: string;
    /** Make the whole card an Inertia link */
    href?: string;
    /** Make the card a button (emits `click`, reachable with Tab, Enter and Space) */
    clickable?: boolean;
    /** Mark the card as the selected one */
    selected?: boolean;
    /** Hover lift and border even when not interactive */
    hover?: boolean;
    /** Inner spacing */
    padding?: 'none' | 'sm' | 'md' | 'lg';
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Card']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<CardProps>(), {
    title: undefined,
    description: undefined,
    href: undefined,
    clickable: false,
    selected: false,
    hover: false,
    padding: 'md',
});

export interface CardEmits {
    click: [event: MouseEvent | KeyboardEvent];
}

const emit = defineEmits<CardEmits>();
const slots = useSlots();

const { cls, attrs, level } = useUi('Card', props);

const PADDING = {
    none: { header: '', body: '', bodyAfterHeader: '', footer: '' },
    sm: { header: 'px-4 pt-4', body: 'p-4', bodyAfterHeader: 'px-4 pt-3 pb-4', footer: 'px-4 py-3' },
    md: { header: 'px-6 pt-5', body: 'p-6', bodyAfterHeader: 'px-6 pt-4 pb-6', footer: 'px-6 py-3' },
    lg: { header: 'px-8 pt-7', body: 'p-8', bodyAfterHeader: 'px-8 pt-5 pb-8', footer: 'px-8 py-4' },
};

const interactive = computed(() => !!props.href || props.clickable);
// Slots are read per render (they are not reactive), so these are plain functions.
const hasHeader = () => !!(props.title || props.description || slots.header || slots.actions);
const hasBody = () => !!slots.default;

const rootClass = computed(() =>
    cls(
        'root',
        'block rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100',
        (interactive.value || props.hover) && 'transition duration-150 hover:border-gray-300 hover:shadow-md dark:hover:border-gray-600',
        (interactive.value || props.hover) && level.value === 'fancy' && 'hover:-translate-y-0.5',
        interactive.value && 'focusable cursor-pointer focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-hidden dark:focus:ring-offset-gray-900',
        props.selected && stateLayer('border-primary-500 ring-2 ring-primary-500/40 dark:border-primary-400'),
    ),
);

const onClick = (event: MouseEvent) => {
    if (props.clickable) emit('click', event);
};

const onKeydown = (event: KeyboardEvent) => {
    if (!props.clickable || (event.key !== 'Enter' && event.key !== ' ')) return;
    // Keys pressed in a child (an action button, an input) belong to that child.
    if (event.target !== event.currentTarget) return;
    event.preventDefault();
    emit('click', event);
};
</script>

<template>
    <component
        :is="href ? Link : 'div'"
        v-bind="attrs()"
        :href="href"
        :class="rootClass"
        :role="clickable && !href ? 'button' : undefined"
        :tabindex="clickable && !href ? 0 : undefined"
        :aria-pressed="clickable && !href && selected ? true : undefined"
        :aria-current="href && selected ? 'true' : undefined"
        @click="onClick"
        @keydown="onKeydown"
    >
        <div v-if="hasHeader()" :class="cls('header', 'flex items-start justify-between gap-4', PADDING[padding].header, !hasBody() && PADDING[padding].header && 'pb-5')">
            <div class="min-w-0">
                <slot name="header">
                    <h3 v-if="title" :class="cls('title', 'text-base font-semibold text-gray-900 dark:text-gray-100')">{{ title }}</h3>
                    <p v-if="description" :class="cls('description', 'mt-1 text-sm text-gray-500 dark:text-gray-400')">{{ description }}</p>
                </slot>
            </div>
            <div v-if="$slots.actions" :class="cls('actions', 'flex shrink-0 items-center gap-2')" @click.stop>
                <slot name="actions" />
            </div>
        </div>
        <div v-if="hasBody()" :class="cls('body', hasHeader() ? PADDING[padding].bodyAfterHeader : PADDING[padding].body)">
            <slot />
        </div>
        <div
            v-if="$slots.footer"
            :class="cls('footer', 'flex items-center justify-end gap-2 rounded-b-lg border-t border-gray-200 bg-gray-50/60 dark:border-gray-700 dark:bg-gray-900/40', PADDING[padding].footer)"
        >
            <slot name="footer" />
        </div>
    </component>
</template>
