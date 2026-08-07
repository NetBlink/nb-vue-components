<script setup lang="ts">
/**
 * Toaster - the viewport that renders the notification queue.
 *
 * Mount exactly one, in your root layout, and never think about it again:
 *
 * ```vue
 * <Toaster position="bottom-right" :duration="4000" />
 * ```
 *
 * Everything about *where* and *how* notifications appear is configured here,
 * so raising one stays a one-liner from anywhere in the app. It also listens
 * for `window` `CustomEvent('nb:toast')`, which lets code that can't import the
 * library (an inline script in a Blade view, say) raise one too.
 *
 * @prop {ToastPosition} [position='bottom-right'] - screen corner/edge to anchor to
 * @prop {ToastOrder} [order='newest-first'] - which end new items join
 * @prop {ToastAnimation} [animation='slide'] - entry animation; slide follows `position`
 * @prop {number} [duration=5000] - default visible time in ms; per-toast `duration` wins
 * @prop {number} [max=4] - cap on visible items; the oldest are dismissed past it
 * @prop {string} [width='24rem'] - max width of the stack
 * @prop {boolean} [stack=false] - collapse the queue into a pile; pointing at it expands
 * @prop {boolean} [disableSwipe=false] - turn off swipe-to-dismiss
 * @prop {boolean} [disableEvents=false] - stop listening for `nb:toast` window events
 */

import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { ToastProvider, ToastViewport } from 'reka-ui';
import Toast from './Toast.vue';
import { TOAST_EVENT, toast } from '../composables/useToast';
import type { ToastAnimation, ToastInput, ToastOrder, ToastPosition } from '../composables/useToast';

interface Props {
    position?: ToastPosition;
    order?: ToastOrder;
    animation?: ToastAnimation;
    duration?: number;
    max?: number;
    width?: string;
    stack?: boolean;
    disableSwipe?: boolean;
    disableEvents?: boolean;
    /** Screen-reader label for the viewport landmark. */
    label?: string;
}

const props = withDefaults(defineProps<Props>(), {
    position: 'bottom-right',
    order: 'newest-first',
    animation: 'slide',
    duration: 5000,
    max: 4,
    width: '24rem',
    stack: false,
    disableSwipe: false,
    disableEvents: false,
    label: 'Notifications ({hotkey})',
});

// Top-level binding so the template unwraps the ref for us.
const items = toast.items;

/*
 * Every class below is written out in full. Tailwind extracts class names from
 * source statically, so a built-up string like `top-${edge}-0` produces no CSS.
 */
const VIEWPORT_POSITION: Record<ToastPosition, string> = {
    'top-left': 'top-0 left-0 items-start',
    'top-center': 'top-0 left-1/2 -translate-x-1/2 items-center',
    'top-right': 'top-0 right-0 items-end',
    'bottom-left': 'bottom-0 left-0 items-start',
    'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2 items-center',
    'bottom-right': 'bottom-0 right-0 items-end',
};

// Slide in from whichever edge the viewport hugs.
const SLIDE_IN: Record<ToastPosition, string> = {
    'top-left': 'data-[state=open]:animate-toast-in-left',
    'top-center': 'data-[state=open]:animate-toast-in-top',
    'top-right': 'data-[state=open]:animate-toast-in-right',
    'bottom-left': 'data-[state=open]:animate-toast-in-left',
    'bottom-center': 'data-[state=open]:animate-toast-in-bottom',
    'bottom-right': 'data-[state=open]:animate-toast-in-right',
};

const SWIPE_DIRECTION: Record<ToastPosition, 'left' | 'right' | 'up' | 'down'> = {
    'top-left': 'left',
    'top-center': 'up',
    'top-right': 'right',
    'bottom-left': 'left',
    'bottom-center': 'down',
    'bottom-right': 'right',
};

const enterClass = computed(() => {
    if (props.animation === 'fade') return 'data-[state=open]:animate-fade-in';
    if (props.animation === 'scale') return 'data-[state=open]:animate-toast-scale-in';
    return SLIDE_IN[props.position];
});

/*
 * One exit for every position and animation: a quick fade with a hair of drift.
 * Leaving should get out of the way, so it isn't worth four directional
 * variants nobody will consciously see.
 */
const exitClass = 'data-[state=closed]:animate-slide-down-fade-out';

const stackClass = computed(() => {
    // The queue is chronological, so plain `flex-col` puts the newest last -
    // furthest from a top edge, but nearest a bottom one.
    const anchoredTop = props.position.startsWith('top');
    const newestNearEdge = props.order === 'newest-first';
    return (anchoredTop ? newestNearEdge : !newestNearEdge) ? 'flex-col-reverse' : 'flex-col';
});

/*
 * Cap the stack. Dismissing (rather than dropping) the overflow keeps the exit
 * animation, and `dismiss` skips items already on their way out, so the
 * re-trigger while they linger in the queue is a no-op.
 */
watch(
    () => items.value.length,
    (count) => {
        if (!props.max || count <= props.max) return;
        for (const item of items.value.slice(0, count - props.max)) toast.dismiss(item.id);
    }
);

/*
 * Collapsed stack (`stack`) - the newest toast stays fully visible and the older
 * ones peek out behind it, scaled back. Pointing at the pile expands it into the
 * normal list; moving away collapses it again.
 */
const PEEK = 14; // sliver of each toast left showing behind the front one
const SHRINK = 0.05; // scale lost per step back

const expanded = ref(false);
const collapsed = computed(() => props.stack && !expanded.value);

/*
 * Every movement in the viewport runs through one pass: a toast arriving, one
 * leaving, the pile collapsing or opening. Each toast gets a resting offset -
 * nothing when the stack is expanded, a step deeper into the pile when it is
 * collapsed - and is then moved there from wherever it was last seen, so a
 * change glides rather than cuts.
 *
 * The compensation is the whole point. The toasts live in a flex column, so
 * adding or removing one re-lays out every sibling in a single frame and they
 * teleport a row before any transition gets a say. Measuring where each toast
 * was, letting Vue patch the DOM, then putting them back and animating out of it
 * is the standard FLIP fix - and it has to cover the collapsed pile too, whose
 * offsets are measured against that same shifting layout.
 *
 * Done by hand rather than with <TransitionGroup> because the list element is
 * rendered by reka's ToastViewport, which owns a template ref on it for focus
 * management and the F8 hotkey - handing that element to TransitionGroup breaks
 * both.
 *
 * Everything here drives the standalone `translate` and `scale` properties
 * rather than `transform`, and that is load-bearing. The enter and exit
 * keyframes animate `transform`, and a running CSS animation outranks an inline
 * style - so a toast pushed while it was still sliding in would ignore the
 * compensation entirely and snap a row. The individual properties multiply into
 * the same matrix instead of fighting over it, which also leaves `transform`
 * free for the swipe-to-dismiss rules.
 */
const MOVE_MS = 400; // matches the enter animation, so push and arrival read as one movement
const previousEdges = new Map<string, number>();

const anchoredTop = computed(() => props.position.startsWith('top'));

// Scoped to the document rather than a ref: `data-toast-id` is only ever on our
// own toasts, and exactly one Toaster is supposed to be mounted.
const toastElements = () => Array.from(document.querySelectorAll<HTMLElement>('[data-toast-id]'));

/*
 * Measured against the edge the viewport hugs, because that is the edge that
 * stays put: toasts in the pile are scaled from it (see `transformOrigin`
 * below), so this reading is unaffected by the collapse and the two can be
 * compared across one.
 */
const edgeOf = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return anchoredTop.value ? rect.top : rect.bottom;
};

const rememberPositions = () => {
    previousEdges.clear();
    for (const el of toastElements()) {
        const id = el.dataset.toastId;
        if (id) previousEdges.set(id, edgeOf(el));
    }
};

const layout = () => {
    const elements = toastElements();
    if (!elements.length) return;

    const direction = anchoredTop.value ? 1 : -1;

    /*
     * offsetTop/offsetHeight are layout geometry - unlike getBoundingClientRect
     * they ignore the offsets we're about to write, so re-running this pass is
     * idempotent instead of compounding.
     *
     * Ranked by distance from the anchored edge, so the front toast is simply
     * the smallest, no matter what `order` and the flex direction did to the DOM
     * order.
     */
    const nearEdge = (el: HTMLElement) => (anchoredTop.value ? el.offsetTop : -(el.offsetTop + el.offsetHeight));
    const byDepth = [...elements].sort((a, b) => nearEdge(a) - nearEdge(b));
    const frontEdge = nearEdge(byDepth[0]);

    // Write pass: resting offsets, transitions off so nothing animates yet.
    const resting = new Map<HTMLElement, number>();
    byDepth.forEach((el, depth) => {
        resting.set(el, collapsed.value ? direction * (frontEdge - nearEdge(el) + depth * PEEK) : 0);

        el.style.transition = 'none';
        // Scale from the anchored edge, otherwise shrinking pulls the toast away
        // from the edge it is meant to line up against.
        el.style.transformOrigin = anchoredTop.value ? 'top center' : 'bottom center';
        el.style.zIndex = String(elements.length - depth);
        el.style.scale = collapsed.value ? String(1 - depth * SHRINK) : '';
        el.style.translate = `0 ${resting.get(el)}px`;
    });

    // Read pass, costing one layout for the batch because nothing is written in
    // between. Interleaving reads and writes would force one layout per toast.
    const landed = elements.map(edgeOf);

    // Invert: put anything that has moved back where it was last seen. A toast
    // with no remembered position is new and has its own enter animation.
    elements.forEach((el, i) => {
        const previous = previousEdges.get(el.dataset.toastId ?? '');
        if (previous === undefined || previous === landed[i]) return;
        el.style.translate = `0 ${resting.get(el)! + previous - landed[i]}px`;
    });

    void elements[0].offsetHeight; // commit the offsets before animating out of them

    for (const el of elements) {
        el.style.transition = `translate ${MOVE_MS}ms var(--ease-emphasised), scale ${MOVE_MS}ms var(--ease-emphasised)`;
        el.style.translate = `0 ${resting.get(el)}px`;

        // Drop the inline transition afterwards, otherwise it would also smooth
        // out swipe-to-dismiss and make the drag feel laggy.
        setTimeout(() => {
            el.style.transition = '';
        }, MOVE_MS + 50);
    }
};

// Collapsing and expanding change no markup, so there is nothing to wait for.
watch(collapsed, () => {
    rememberPositions();
    layout();
});

// Keyed on the id list: `open` flipping false must not trigger a move, because
// the leaving toast still occupies its space until it's spliced out.
watch(
    () => items.value.map((item) => item.id).join('|'),
    async () => {
        rememberPositions(); // runs pre-flush, so this still sees the old layout
        await nextTick();
        layout();
    }
);

const onWindowToast = (event: Event) => {
    const detail = (event as CustomEvent<ToastInput>).detail;
    if (detail) toast(detail);
};

onMounted(() => {
    if (!props.disableEvents) window.addEventListener(TOAST_EVENT, onWindowToast);
});

onBeforeUnmount(() => {
    window.removeEventListener(TOAST_EVENT, onWindowToast);
});
</script>

<template>
    <ToastProvider :duration="duration" :swipe-direction="SWIPE_DIRECTION[position]" :disable-swipe="disableSwipe" :label="label">
        <!-- pointer-events-none: the viewport spans the width of the screen, so it
             would otherwise swallow clicks on the page behind it. Each toast turns
             them back on for itself. -->
        <!-- pointerover rather than pointerenter: the viewport itself is never a
             hit target, so it only hears about the pointer via bubbling from a
             toast. pointerleave is boundary-computed over the same chain and does
             fire. focusin/out keeps the pile open for keyboard users. -->
        <ToastViewport
            :class="['pointer-events-none fixed z-100 flex w-full gap-3 p-4', VIEWPORT_POSITION[position], stackClass]"
            :style="{ maxWidth: width }"
            @pointerover="expanded = true"
            @pointerleave="expanded = false"
            @focusin="expanded = true"
            @focusout="expanded = false"
        >
            <Toast
                v-for="item in items"
                :key="item.id"
                :item="item"
                :data-toast-id="item.id"
                :class="[enterClass, exitClass]"
                @close="toast.dismiss(item.id)"
            />
        </ToastViewport>
    </ToastProvider>
</template>
