<script setup lang="ts">
/**
 * Toast - a single queued notification, rendered by `<Toaster>`.
 *
 * You very rarely mount this yourself; raise notifications with the `toast`
 * helper and let the Toaster render them. It is exported so a host app can
 * build a bespoke viewport if the shipped one doesn't fit.
 *
 * The `snackbar` variant is the same component in a different suit: one
 * inverted bar sized to its content, Material-style, rather than a stacked card.
 *
 * @prop {ToastItem} item - queue entry to render
 * @emits close - reka-ui asked to close (timer elapsed, swipe, Escape, close button)
 */

import { computed } from 'vue';
import { ToastAction, ToastClose, ToastDescription, ToastRoot, ToastTitle } from 'reka-ui';
import NbIcon from '../icons/NbIcon.vue';
import Spinner from './Spinner.vue';
import type { IconLike } from '../icons/types';
import type { ToastItem, ToastType } from '../composables/useToast';

const props = defineProps<{ item: ToastItem }>();
const emit = defineEmits<{ close: [] }>();

const isSnackbar = computed(() => props.item.variant === 'snackbar');
const type = computed<ToastType>(() => props.item.type ?? 'info');

const TYPE_ICON: Record<ToastType, IconLike | null> = {
    success: '$success',
    error: '$error',
    warning: '$warning',
    info: '$info',
    // progress renders a Spinner instead - see `showSpinner` below.
    progress: null,
};

// An explicit `icon` still wins over the spinner, so a progress toast can carry
// a domain icon if that reads better than a generic one.
const showSpinner = computed(() => type.value === 'progress' && props.item.icon === undefined);

const icon = computed<IconLike | null>(() => {
    if (props.item.icon === false || showSpinner.value) return null;
    return props.item.icon ?? TYPE_ICON[type.value];
});

// A snackbar that already offers an action doesn't need a second way out;
// anything else gets a close button unless told otherwise.
const dismissible = computed(() => props.item.dismissible ?? (isSnackbar.value ? !props.item.action : true));

/*
 * reka-ui's own `type` is an aria-live sensitivity, not a visual variant:
 * `foreground` interrupts the screen reader immediately. Reserve that for
 * errors - everything else is announced politely when the user is idle.
 */
const sensitivity = computed<'foreground' | 'background'>(() => (type.value === 'error' ? 'foreground' : 'background'));

/*
 * Neutral card, coloured icon - deliberately no thick tinted border. A heavy
 * colour band around a small surface reads as decoration rather than status.
 */
const rootClasses = computed(() =>
    isSnackbar.value
        ? 'pointer-events-auto flex w-auto max-w-full items-center gap-3 rounded-lg bg-gray-900 px-4 py-3 text-sm text-gray-50 shadow-lg dark:bg-gray-700'
        : 'pointer-events-auto flex w-full items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800'
);

const ICON_COLOURS: Record<ToastType, string> = {
    success: 'text-green-500 dark:text-green-400',
    error: 'text-red-500 dark:text-red-400',
    warning: 'text-yellow-500 dark:text-yellow-400',
    info: 'text-primary-600 dark:text-primary-400',
    progress: 'text-primary-600 dark:text-primary-400',
};

// On the inverted snackbar the card palette has too little contrast, so the
// icon lifts a step.
const SNACKBAR_ICON_COLOURS: Record<ToastType, string> = {
    success: 'text-green-400',
    error: 'text-red-400',
    warning: 'text-yellow-300',
    info: 'text-primary-300',
    progress: 'text-primary-300',
};

const iconClasses = computed(() => (isSnackbar.value ? SNACKBAR_ICON_COLOURS[type.value] : ICON_COLOURS[type.value]));

const actionClasses = computed(() =>
    isSnackbar.value
        ? 'text-primary-300 hover:text-primary-200 focus-visible:ring-primary-400 shrink-0 cursor-pointer rounded-md px-1 text-xs font-semibold tracking-widest uppercase focus-visible:ring-2 focus-visible:outline-hidden'
        : 'focus:ring-primary-500 shrink-0 cursor-pointer rounded-md border border-gray-300 bg-white px-2.5 py-1 text-xs font-semibold tracking-widest text-gray-700 uppercase shadow-xs transition hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:outline-hidden dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
);

const closeClasses = computed(() =>
    isSnackbar.value
        ? 'shrink-0 cursor-pointer rounded-md p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-gray-100 focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:outline-hidden'
        : 'focus:ring-primary-500 shrink-0 cursor-pointer rounded-md p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 focus:ring-2 focus:outline-hidden dark:hover:bg-gray-700 dark:hover:text-gray-200'
);

const onAction = () => {
    props.item.action?.onClick?.();
    // Acting on a toast normally means you're done with it.
    if (props.item.action?.close !== false) emit('close');
};

/*
 * A clickable body becomes a real <button> rather than a div with a handler, so
 * it is focusable and works from the keyboard for free. The close and action
 * buttons stay siblings of it - nesting them inside would be invalid HTML.
 */
const onBodyClick = () => {
    if (!props.item.onClick) return;
    props.item.onClick();
    emit('close');
};
</script>

<template>
    <!--
        force-mount: left to itself reka unmounts the toast the moment its exit
        animation ends, which is earlier than the queue drops it. The element
        vanishing behind the Toaster's back is a layout change nothing gets to
        compensate, so the toasts below it snap up a row. Keeping it mounted
        makes the queue the only thing that removes toasts, and the Toaster
        animates every removal it performs.
    -->
    <ToastRoot
        :open="item.open"
        :duration="item.duration"
        :type="sensitivity"
        force-mount
        :class="rootClasses"
        @update:open="(open: boolean) => !open && emit('close')"
    >
        <Spinner v-if="showSpinner" size="xs" :color="iconClasses" class="shrink-0" :class="isSnackbar ? '' : 'mt-0.5'" />
        <NbIcon v-else-if="icon" :name="icon" class="mt-0.5 size-5 shrink-0" :class="[iconClasses, isSnackbar && 'mt-0']" />

        <component
            :is="item.onClick ? 'button' : 'div'"
            :type="item.onClick ? 'button' : undefined"
            class="min-w-0 flex-1"
            :class="item.onClick ? 'focus-visible:ring-primary-500 cursor-pointer rounded-md text-left focus-visible:ring-2 focus-visible:outline-hidden' : ''"
            @click="onBodyClick"
        >
            <ToastTitle
                v-if="item.title"
                :class="isSnackbar ? 'text-sm' : 'text-sm font-semibold text-gray-900 dark:text-gray-100'"
            >
                {{ item.title }}
            </ToastTitle>
            <ToastDescription
                v-if="item.description"
                :class="isSnackbar ? 'mt-0.5 text-xs text-gray-300' : 'mt-1 text-sm text-gray-600 dark:text-gray-400'"
            >
                {{ item.description }}
            </ToastDescription>
            <slot />
        </component>

        <ToastAction
            v-if="item.action"
            :alt-text="item.action.altText ?? item.action.label"
            :class="actionClasses"
            @click="onAction"
        >
            {{ item.action.label }}
        </ToastAction>

        <ToastClose v-if="dismissible" :class="closeClasses" aria-label="Dismiss notification">
            <NbIcon name="$close" class="size-4" />
        </ToastClose>
    </ToastRoot>
</template>
