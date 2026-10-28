<script setup lang="ts">
/**
 * Full-screen image viewer. Open it at an image (`v-model:open`, `v-model:index`),
 * then page through with the arrows, the arrow keys or a swipe; Esc or the close
 * button closes it and focus returns to whatever opened it.
 *
 * @part overlay - the dark backdrop
 * @part panel - the full-screen layer holding the image and controls
 * @part image - the image
 * @part caption - the caption under the image
 * @part counter - "2 / 5"
 * @part prev - the previous button
 * @part next - the next button
 * @part close - the close button
 * @motion off - opens, closes and changes image instantly
 * @motion simple - quick fades
 * @motion smooth - the image zooms in softly; images cross-fade
 * @motion fancy - the viewer grows out of the thumbnail that opened it
 */
import { computed, ref, watch } from 'vue';
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTitle } from 'reka-ui';
import IconButton from './IconButton.vue';
import NbTransition from './NbTransition.vue';
import type { MotionLevel, NbMotionTable } from '../ui/motion';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface LightboxImage {
    src: string;
    alt?: string;
    caption?: string;
}

export interface LightboxProps {
    /** The images */
    images: LightboxImage[];
    /** Close when the dark area around the image is clicked */
    closeOnBackdrop?: boolean;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Lightbox']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<LightboxProps>(), { closeOnBackdrop: true });
const open = defineModel<boolean>('open', { default: false });
const index = defineModel<number>('index', { default: 0 });

const { cls, attrs, motionAttrs, anim, level } = useUi('Lightbox', props, { classPart: 'panel' });

const count = computed(() => props.images.length);
const shown = computed(() => Math.min(Math.max(index.value, 0), Math.max(count.value - 1, 0)));
const current = computed(() => props.images[shown.value]);
const go = (step: number) => {
    if (count.value < 2) return;
    index.value = (shown.value + step + count.value) % count.value;
};

const MOTION: NbMotionTable<'overlay' | 'panel'> = {
    simple: {
        overlay: { enter: 'animate-fade-in-quick', leave: 'animate-fade-out' },
        panel: { enter: 'animate-fade-in-quick', leave: 'animate-fade-out' },
    },
    smooth: {
        overlay: { enter: 'animate-fade-in', leave: 'animate-fade-out' },
        panel: { enter: 'animate-zoom-in', leave: 'animate-fade-out' },
    },
    fancy: {
        overlay: { enter: 'animate-fade-in', leave: 'animate-fade-out' },
        panel: { enter: 'animate-grow-from-origin', leave: 'animate-shrink-to-origin' },
    },
};
const motionFor = (part: 'overlay' | 'panel') => anim(part, open.value ? 'enter' : 'leave', MOTION);

// fancy: grow out of the thumbnail that opened it (the opener still has focus when `open` flips).
const origin = ref<Record<string, string>>({});
watch(
    open,
    (value) => {
        if (!value || level.value !== 'fancy' || typeof document === 'undefined') return;
        const rect = document.activeElement && document.activeElement !== document.body ? document.activeElement.getBoundingClientRect() : null;
        origin.value = rect
            ? {
                  '--nb-origin-x': `${Math.round(rect.left + rect.width / 2 - window.innerWidth / 2)}px`,
                  '--nb-origin-y': `${Math.round(rect.top + rect.height / 2 - window.innerHeight / 2)}px`,
                  '--nb-origin-scale': String(Math.min(1, Math.max(0.05, rect.width / window.innerWidth))),
              }
            : {};
    },
    { flush: 'sync' },
);

const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') go(1);
    else if (event.key === 'ArrowLeft') go(-1);
    else return;
    event.preventDefault();
};

let swipeX: number | null = null;
let swiped = false;
const onPointerDown = (event: PointerEvent) => {
    swiped = false;
    swipeX = event.pointerType === 'mouse' ? null : event.clientX;
};
const onPointerUp = (event: PointerEvent) => {
    if (swipeX === null) return;
    const dx = event.clientX - swipeX;
    swipeX = null;
    if (Math.abs(dx) > 50) {
        swiped = true;
        go(dx < 0 ? 1 : -1);
    }
};

// The panel fills the screen, so "outside" is the panel itself and the area around the image.
const onPanelClick = (event: MouseEvent) => {
    if (!props.closeOnBackdrop || swiped) return;
    const target = event.target as HTMLElement;
    if (target === event.currentTarget || target.dataset.lightboxBackdrop !== undefined) open.value = false;
};

const PREV = { svg: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 4.5 7 10l5.5 5.5"/></svg>' };
const NEXT = { svg: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 4.5 13 10l-5.5 5.5"/></svg>' };
const CONTROL = 'text-white hover:bg-white/15 hover:text-white focus-visible:ring-white';
</script>

<template>
    <DialogRoot v-model:open="open">
        <DialogPortal>
            <DialogOverlay v-bind="motionAttrs()" :class="cls('overlay', 'fixed inset-0 z-50 bg-black/90 backdrop-blur-sm', motionFor('overlay'))" />
            <DialogContent
                v-bind="attrs()"
                aria-describedby=""
                :class="cls('panel', 'fixed inset-0 z-50 flex touch-pan-y flex-col items-center justify-center gap-3 p-4 focus:outline-none sm:p-10', motionFor('panel'))"
                :style="origin"
                @keydown="onKeydown"
                @pointerdown="onPointerDown"
                @pointerup="onPointerUp"
                @click="onPanelClick"
            >
                <DialogTitle class="sr-only">{{ current?.alt || `Image ${shown + 1} of ${count}` }}</DialogTitle>
                <div data-lightbox-backdrop class="relative flex min-h-0 w-full flex-1 items-center justify-center">
                    <!-- Paging is frequent: a quick cross-fade at every level, so next/previous never feels slow -->
                    <NbTransition mode="out-in" :motion="level === 'off' ? 'off' : 'simple'">
                        <img
                            v-if="current"
                            :key="current.src"
                            :src="current.src"
                            :alt="current.alt ?? ''"
                            draggable="false"
                            :class="cls('image', 'max-h-full max-w-full rounded object-contain shadow-2xl select-none')"
                        />
                    </NbTransition>
                </div>
                <p v-if="current?.caption" :class="cls('caption', 'max-w-2xl text-center text-sm text-white/80')">{{ current.caption }}</p>
                <span v-if="count > 1" :class="cls('counter', 'text-xs tracking-wide text-white/60 tabular-nums')">{{ shown + 1 }} / {{ count }}</span>
                <IconButton v-if="count > 1" :icon="PREV" label="Previous image" size="lg" :class="cls('prev', 'absolute top-1/2 left-2 -translate-y-1/2 sm:left-4', CONTROL)" @click="go(-1)" />
                <IconButton v-if="count > 1" :icon="NEXT" label="Next image" size="lg" :class="cls('next', 'absolute top-1/2 right-2 -translate-y-1/2 sm:right-4', CONTROL)" @click="go(1)" />
                <DialogClose as-child>
                    <IconButton icon="$close" label="Close" :class="cls('close', 'absolute top-2 right-2 sm:top-4 sm:right-4', CONTROL)" />
                </DialogClose>
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>
