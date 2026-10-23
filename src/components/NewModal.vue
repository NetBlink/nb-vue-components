<script setup lang="ts">
/**
 * Accessible dialog built on reka-ui's headless `Dialog` primitives, and the one
 * to use for new code. Open state is driven with `v-model:open`, and named
 * header, description, footer and trigger slots sit alongside the default slot
 * for body content. Covers every `Modal` prop too (`:show` + `@close`, `maxWidth`,
 * `closeable`, ...), so a legacy `<Modal>` swaps over by renaming the tag.
 *
 * Forwards `$attrs` onto the underlying `DialogContent`, so accessibility props
 * (`aria-*`, `role`) and custom classes reach the dialog panel itself.
 *
 * @slot default - body content
 * @slot header - overrides the `title` prop
 * @slot description - overrides the `description` prop
 * @slot footer - right-aligned footer area
 * @slot trigger - element that opens the dialog when clicked
 * @emits close - fires when the user dismisses the dialog (Escape, backdrop click or the close button)
 * @part overlay - the backdrop
 * @part content - the dialog panel; `class` lands here
 * @part title - the `DialogTitle`
 * @part description - the `DialogDescription`
 * @part spacer - the gap under the title and description
 * @part footer - the footer row
 * @part close - the close button
 * @motion off - opens and closes instantly
 * @motion simple - backdrop and panel fade quickly
 * @motion smooth - backdrop fades, the panel slides up in and drops out; the panel animates its height when its content grows or shrinks
 * @motion fancy - the panel grows out of the element that opened it and shrinks back into it on close
 */
import NbIcon from '../icons/NbIcon.vue';
import { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger } from 'reka-ui';
import { computed, nextTick, onMounted, onUnmounted, ref, useSlots, watch, type ComponentPublicInstance } from 'vue';
import type { NbParts, UiProp } from '../ui/parts';
import type { MotionLevel, NbMotionTable } from '../ui/motion';
import { animateResizes } from '../ui/flip';
import { useUi } from '../ui/useUi';

// `$attrs` is bound explicitly onto DialogContent below. Without this the same
// attrs would ALSO land on the root DialogRoot, which is how `v-model:open`
// used to work at all: the `open` attr fell through to DialogRoot by accident.
// Both bindings are declared models now, so the fallthrough is no longer load-bearing.
defineOptions({ inheritAttrs: false });

export interface NewModalProps {
    /** Title rendered in DialogTitle (overridden by the `header` slot) */
    title?: string;
    /** Sub-title rendered in DialogDescription (overridden by the `description` slot) */
    description?: string;
    /** Open the dialog on mount */
    defaultOpen?: boolean;
    /** Let the user drag-resize the dialog from its bottom-right corner */
    resizable?: boolean;
    /** Open state for `:show` + `@close` call sites carried over from `Modal`; `v-model:show` works too */
    show?: boolean;
    /** sm | md | lg | xl | 2xl-7xl | 50% | 60% | 75% | 80% | 90% | 95%, or any CSS length. Default 600px */
    maxWidth?: string;
    /** Allow closing via Escape, backdrop click and the close button */
    closeable?: boolean;
    /** Keep content inside the panel (scrolls when tall). Set false so non-portaled popups can spill out */
    hideOverflow?: boolean;
    /** Top-align the dialog instead of centring it, so growing content doesn't make it jump */
    alignTop?: boolean;
    /** Add the brand-coloured border around the panel */
    showBorder?: boolean;
    /** Built-in panel padding. Set false when the slot brings its own (e.g. a `p-6` wrapper from `Modal`) */
    padded?: boolean;
    /** Backdrop animation duration (ms), defaults to the theme motion tokens */
    backdropDuration?: number;
    /** Panel animation duration (ms), defaults to the theme motion tokens */
    modalDuration?: number;
    /** Deprecated, use `:ui="{ overlay: '...' }"` */
    backdropCustomClass?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['NewModal']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<NewModalProps>(), {
    title: undefined,
    description: undefined,
    defaultOpen: false,
    resizable: false,
    show: undefined,
    maxWidth: undefined,
    closeable: true,
    hideOverflow: true,
    alignTop: false,
    showBorder: false,
    padded: true,
    backdropDuration: undefined,
    modalDuration: undefined,
    backdropCustomClass: '',
});

const emit = defineEmits<{ close: []; 'update:show': [value: boolean] }>();
const { cls, attrs, motionAttrs, anim, level } = useUi('NewModal', props, { classPart: 'content', aliases: { backdropCustomClass: 'overlay' } });
const slots = useSlots();

/*
 * Three supported bindings: `v-model:open` (documented, used across the docs and
 * the apps), plain `v-model` (older call sites) and one-way `:show` + `@close`
 * (Modal's API). Whichever the caller binds wins; if both models are bound they
 * stay in sync. Unbound, the dialog keeps its own state so a `trigger` slot still
 * works with no model at all.
 */
const openModel = defineModel<boolean | undefined>('open', { default: undefined });
const legacyModel = defineModel<boolean | undefined>({ default: undefined });
const uncontrolled = ref(false);

const open = computed<boolean>({
    get() {
        if (openModel.value !== undefined) return openModel.value;
        if (legacyModel.value !== undefined) return legacyModel.value;
        if (props.show !== undefined) return props.show;
        return uncontrolled.value;
    },
    set(value) {
        if (openModel.value !== undefined) openModel.value = value;
        if (legacyModel.value !== undefined) legacyModel.value = value;
        uncontrolled.value = value;
    },
});

// Only reka calls this, i.e. only user-driven changes, so `close` never fires
// for a parent setting the model to false.
const onOpenChange = (value: boolean) => {
    open.value = value;
    // update:show makes `v-model:show` work too; without it the dialog could open but never close.
    emit('update:show', value);
    if (!value) emit('close');
};
onMounted(() => {
    if (props.defaultOpen) {
        open.value = true;
    }
});
onUnmounted(() => {
    open.value = false;
});
watch(
    () => props.defaultOpen,
    (newValue) => {
        open.value = newValue;
    }
);

const preventUnlessCloseable = (event: Event) => {
    if (!props.closeable) event.preventDefault();
};

// Literal rem values instead of Tailwind classes: `--container-*` vars only exist
// in the consumer's CSS when something there uses them.
const widths: Record<string, string> = {
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
};

const contentStyle = computed(() => {
    const style: Record<string, string> = {};
    if (props.maxWidth) {
        const width = widths[props.maxWidth] ?? props.maxWidth;
        // Resizable already caps at 95vw, so the size becomes its starting width instead.
        if (props.resizable) style.width = `min(${width}, 90vw)`;
        else style.maxWidth = width;
    }
    if (props.modalDuration !== undefined) style.animationDuration = `${props.modalDuration}ms`;
    return style;
});

const MOTION: NbMotionTable<'overlay' | 'content'> = {
    simple: {
        overlay: { enter: 'animate-fade-in-quick', leave: 'animate-fade-out' },
        content: { enter: 'animate-fade-in-quick', leave: 'animate-fade-out' },
    },
    smooth: {
        overlay: { enter: 'animate-fade-in', leave: 'animate-fade-out' },
        content: { enter: 'animate-slide-up-fade', leave: 'animate-slide-down-fade-out' },
    },
    fancy: {
        overlay: { enter: 'animate-fade-in', leave: 'animate-fade-out' },
        content: { enter: 'animate-grow-from-origin', leave: 'animate-shrink-to-origin' },
    },
};
const motionFor = (part: 'overlay' | 'content') => anim(part, open.value ? 'enter' : 'leave', MOTION);

/*
 * `fancy`: grow out of whatever opened the dialog. reka moves focus into the
 * dialog after it mounts, so the opener is still `document.activeElement` when
 * `open` flips; a pointer press is the fallback for browsers that don't focus
 * buttons on click. The offset is measured from where the panel will sit, the
 * viewport centre (or its top area when `alignTop`).
 */
const origin = ref<Record<string, string>>({});
let opener: Element | null = null;
let lastPointer: { x: number; y: number } | null = null;
const rememberPointer = (e: PointerEvent) => {
    lastPointer = { x: e.clientX, y: e.clientY };
};

const measureOrigin = () => {
    if (typeof window === 'undefined' || level.value !== 'fancy') return;
    const rect = opener && opener !== document.body ? opener.getBoundingClientRect() : null;
    const point = rect ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 } : lastPointer;
    if (!point) {
        origin.value = {};
        return;
    }
    const centreY = props.alignTop ? window.innerHeight * 0.05 + 160 : window.innerHeight / 2;
    origin.value = {
        '--nb-origin-x': `${Math.round(point.x - window.innerWidth / 2)}px`,
        '--nb-origin-y': `${Math.round(point.y - centreY)}px`,
        '--nb-origin-scale': rect ? String(Math.min(1, Math.max(0.05, rect.width / 600))) : '0.2',
    };
};

watch(
    open,
    (value) => {
        if (value && typeof document !== 'undefined') opener = document.activeElement;
        measureOrigin();
    },
    { flush: 'sync' }
);

// `smooth` and up: animate the panel's height when its content changes size while open.
const contentRef = ref<ComponentPublicInstance | null>(null);
let stopResizes: (() => void) | null = null;
watch(
    () => [open.value, contentRef.value] as const,
    async () => {
        stopResizes?.();
        stopResizes = null;
        await nextTick();
        const el = contentRef.value?.$el as HTMLElement | undefined;
        if (open.value && el instanceof HTMLElement && !props.resizable) stopResizes = animateResizes(el, () => level.value);
    }
);

onMounted(() => window.addEventListener('pointerdown', rememberPointer, { capture: true, passive: true }));
onUnmounted(() => {
    window.removeEventListener('pointerdown', rememberPointer, { capture: true });
    stopResizes?.();
});

// Functions, not computed: slots are not reactive, so a cached check could go stale.
const hasTitle = () => !!props.title || !!slots.header;
const hasDescription = () => !!props.description || !!slots.description;
</script>

<template>
    <DialogRoot :defaultOpen="defaultOpen" :open="open" @update:open="onOpenChange">
        <DialogTrigger v-if="$slots.trigger" asChild>
            <slot name="trigger" />
        </DialogTrigger>
        <DialogPortal>
            <!-- Overlay and panel share z-50 with Dropdown/Tooltip content: those portal in
                 later, so they stack above an open dialog instead of behind it. -->
            <DialogOverlay
                v-bind="motionAttrs()"
                :class="cls('overlay', 'bg-dark/50', motionFor('overlay'), 'fixed inset-0 z-50 dark:bg-black/70')"
                :style="backdropDuration !== undefined ? { animationDuration: `${backdropDuration}ms` } : undefined"
            />
            <!-- Resizable swaps the fixed 600px cap for a 95vw one (CSS resize can
                 never exceed max-width) and adds native `resize: both` plus floor
                 sizes so the dialog can't be collapsed into nothing. CSS resize also
                 needs overflow, so it wins over hideOverflow=false. -->
            <!-- Without a description, aria-describedby would point at a missing id. -->
            <DialogContent
                :class="
                    cls('content', motionFor('content'), 'fixed left-[50%] z-50 translate-x-[-50%] rounded bg-white text-gray-900 shadow-lg/20 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:shadow-black/40', [
                        props.resizable
                            ? 'resize overflow-auto max-h-[90vh] max-w-[95vw] min-h-40 min-w-80 w-[min(600px,90vw)]'
                            : ['w-[90vw] max-w-[600px]', props.hideOverflow ? 'overflow-y-auto max-h-[85vh]' : 'overflow-visible'],
                        props.alignTop ? 'top-[5vh]' : 'top-[50%] translate-y-[-50%]',
                        { 'p-5': props.padded, 'border-primary-500 border-2 border-solid': props.showBorder },
                    ])
                "
                ref="contentRef"
                :style="[origin, contentStyle]"
                v-bind="{ ...(hasDescription() ? {} : { 'aria-describedby': undefined }), ...attrs() }"
                @escape-key-down="preventUnlessCloseable"
                @interact-outside="preventUnlessCloseable"
            >
                <DialogTitle v-if="hasTitle()" :class="cls('title', 'm-0 text-lg font-semibold dark:text-gray-100')">
                    <slot name="header">{{ title }}</slot>
                </DialogTitle>
                <!-- ponytail: generic accessible name when there's no title; pass `title` for a real one -->
                <DialogTitle v-else class="sr-only">Dialog</DialogTitle>
                <DialogDescription v-if="hasDescription()" :class="cls('description', 'mt-2 text-sm leading-normal dark:text-gray-300')">
                    <slot name="description">{{ description }}</slot>
                </DialogDescription>

                <div v-if="hasTitle() || hasDescription()" :class="cls('spacer', 'mb-3')"></div>

                <slot />

                <div v-if="$slots.footer" :class="cls('footer', 'mt-5 flex justify-end gap-1.5')">
                    <slot name="footer" />
                </div>

                <!-- Same rounded-square affordance as Alert's dismiss button, so the
                     two close controls read as one pattern rather than circle vs square. -->
                <DialogClose
                    v-if="closeable"
                    :class="
                        cls(
                            'close',
                            'focusable focus:ring-primary-500 absolute top-3 right-3 inline-flex cursor-pointer appearance-none items-center justify-center rounded-md p-1.5 text-gray-500 transition-colors duration-150 hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200'
                        )
                    "
                    aria-label="Close"
                >
                    <NbIcon name="$close" class="h-5 w-5" />
                </DialogClose>
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>
