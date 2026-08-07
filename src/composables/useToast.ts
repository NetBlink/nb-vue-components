import { ref } from 'vue';
import type { IconLike } from '../icons/types';

/**
 * Toast / snackbar queue.
 *
 * The queue is a module singleton, so anything with an import can raise a
 * notification - a component, a Pinia action, an axios interceptor, a router
 * guard. Nothing needs to be passed down or injected:
 *
 * ```ts
 * import { toast } from '@netblink/vue-components';
 * toast.success('Saved');
 * ```
 *
 * Rendering is separate: mount exactly one `<Toaster />` in your root layout.
 * It owns placement, order and animation. Queueing without a mounted Toaster
 * is harmless - the items just sit there unrendered.
 */

/**
 * `progress` swaps the status icon for a spinner and never auto-dismisses -
 * it represents work still running. Re-fire with the same `id` and a final
 * type to resolve it in place.
 */
export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'progress';

/** `toast` = stacked card in a corner. `snackbar` = single inverted bar, Material-style. */
export type ToastVariant = 'toast' | 'snackbar';

/** Where the `<Toaster>` viewport is anchored. */
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

/** How items enter. Slide direction is derived from the position. */
export type ToastAnimation = 'slide' | 'fade' | 'scale';

/** Which end of the stack new items join: the anchored screen edge, or away from it. */
export type ToastOrder = 'newest-first' | 'oldest-first';

/** Window event the `<Toaster>` listens for. See `emitToast`. */
export const TOAST_EVENT = 'nb:toast';

export interface ToastActionSpec {
    /** Button text. */
    label: string;
    /** Screen-reader description of what the button does - falls back to `label`. */
    altText?: string;
    onClick?: () => void;
    /** Dismiss the toast after `onClick` runs. Default `true`. */
    close?: boolean;
}

export interface ToastOptions {
    /** Main line. When you pass a string to `toast()`, it lands here. */
    title?: string;
    /** Optional second line, muted. */
    description?: string;
    /** Drives the icon and its colour. Default `'info'`. */
    type?: ToastType;
    /** Default `'toast'`. */
    variant?: ToastVariant;
    /** Visible time in ms. `0` keeps it up until dismissed. Defaults to the Toaster's `duration`. */
    duration?: number;
    /** Override the type's icon, or `false` to drop it. */
    icon?: IconLike | false;
    /** Single action button, e.g. Undo. */
    action?: ToastActionSpec;
    /** Show the close button. Default: `true`, or `false` for a snackbar that already has an action. */
    dismissible?: boolean;
    /** Pass your own id to update an existing toast in place rather than stacking a duplicate. */
    id?: string | number;
    /** Called once the toast has left, however it left. */
    onDismiss?: () => void;
    /**
     * Makes the toast body itself clickable - for "click to view" notifications.
     * Dismisses afterwards, since clicking one means you've dealt with it.
     * Use `action` instead when you want a labelled button.
     */
    onClick?: () => void;
}

export interface ToastItem extends ToastOptions {
    id: string | number;
    /**
     * Flipped to false to start the exit animation; the item is dropped from the
     * queue `EXIT_MS` later. Removing it outright would unmount mid-animation.
     */
    open: boolean;
}

export type ToastInput = string | ToastOptions;

const items = ref<ToastItem[]>([]);
let seq = 0;

/** Matches --duration-quick plus a frame or two of slack. */
const EXIT_MS = 200;

function remove(id: string | number): void {
    const i = items.value.findIndex((t) => t.id === id);
    if (i === -1) return;
    const [item] = items.value.splice(i, 1);
    item.onDismiss?.();
}

function push(input: ToastInput, overrides: ToastOptions = {}): string | number {
    const opts: ToastOptions = typeof input === 'string' ? { title: input, ...overrides } : { ...input, ...overrides };
    const id = opts.id ?? ++seq;

    // Work in progress has no natural timeout - it ends when you say it ends.
    // Set an explicit duration to opt out.
    const duration = opts.type === 'progress' && opts.duration === undefined ? 0 : opts.duration;

    const item: ToastItem = { ...opts, duration, id, open: true };

    // A caller-supplied id means "this is the same notification again" - replace
    // rather than stack, so a progress/retry message doesn't pile up.
    const existing = items.value.findIndex((t) => t.id === id);
    if (existing === -1) items.value.push(item);
    else items.value.splice(existing, 1, item);

    return id;
}

/** Animate out. Omit `id` to dismiss everything currently queued. */
function dismiss(id?: string | number): void {
    const targets = id === undefined ? items.value.slice() : items.value.filter((t) => t.id === id);
    for (const target of targets) {
        if (!target.open) continue; // already leaving
        target.open = false;
        setTimeout(() => remove(target.id), EXIT_MS);
    }
}

/** Drop everything at once with no exit animation - e.g. on a route change. */
function clear(): void {
    for (const item of items.value.splice(0)) item.onDismiss?.();
}

const withType = (type: ToastType) => (input: ToastInput, opts: ToastOptions = {}) => push(input, { ...opts, type });

/**
 * Callable notification API. `toast('…')` raises a plain one; the attached
 * helpers cover the common shapes.
 */
export const toast = Object.assign((input: ToastInput, opts: ToastOptions = {}) => push(input, opts), {
    success: withType('success'),
    error: withType('error'),
    warning: withType('warning'),
    info: withType('info'),
    /**
     * Spinner + sticky. Returns the id so you can resolve it in place:
     *
     * ```ts
     * const id = toast.progress('Uploading report…');
     * await upload();
     * toast.success('Report uploaded', { id });
     * ```
     */
    progress: withType('progress'),
    /** Inverted single-line bar. Pair with `action` for the classic Undo pattern. */
    snackbar: (input: ToastInput, opts: ToastOptions = {}) => push(input, { ...opts, variant: 'snackbar' as ToastVariant }),
    dismiss,
    clear,
    /** The live queue. Read-only in practice - mutate via the methods above. */
    items,
});

/** Composable form, for symmetry with the rest of the library. Same singleton. */
export function useToast() {
    return toast;
}

/**
 * Raise a toast from code that can't import this module - an inline `<script>`
 * in a Blade view, a legacy bundle, a browser extension:
 *
 * ```js
 * window.dispatchEvent(new CustomEvent('nb:toast', {
 *     detail: { type: 'success', title: 'Saved' },
 * }));
 * ```
 *
 * This helper is just the typed shorthand for that dispatch.
 */
export function emitToast(detail: ToastInput): void {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new CustomEvent(TOAST_EVENT, { detail }));
}
