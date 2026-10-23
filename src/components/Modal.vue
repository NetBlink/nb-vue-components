<script setup lang="ts">
/**
 * Legacy dialog: teleported to `<body>`, with its own backdrop, escape/backdrop-click
 * closing, body-scroll locking and optional drag-resize handles, driven by `:show` +
 * `@close`. Everything (header, body and footer) goes in the single default slot.
 *
 * Deprecated: use `NewModal`. It accepts the same props and `:show` + `@close`, so
 * renaming the tag is enough, except: `modalCustomClass` becomes `class`, `alignCenter`
 * is NewModal's default (add `align-top` where it was absent to keep the old position),
 * and add `:padded="false"` when the slot already brings its own padding.
 *
 * @deprecated
 * @part root - the fixed full-screen container
 * @part overlay - the backdrop
 * @part content - the panel; `class` lands here
 * @motion off - opens and closes instantly
 * @motion simple - backdrop and panel only fade
 * @motion smooth - backdrop fades, the panel fades and scales in (the 3.x behaviour)
 * @motion fancy - same as smooth
 */
import { computed, onMounted, onUnmounted, watch, ref, type PropType } from 'vue';
import type { NbParts, UiProp } from '../ui/parts';
import type { MotionLevel } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

/**
 * @prop {boolean} show - visibility, paired with `@close` (there is no `update:show`, so `v-model:show` can't close it)
 * @prop {string} [maxWidth='2xl'] - sm | md | lg | xl | 2xl-7xl | '50%' | '60%' | '75%' | '80%' | '90%' | '95%'
 * @prop {boolean} [closeable=true] - allow closing via backdrop click or Escape key
 * @prop {boolean} [hideOverflow=true] - apply overflow-hidden to the modal container
 * @prop {boolean} [alignCenter=false] - vertically center the modal (default top-aligns)
 * @prop {boolean} [showBorder=false] - add the brand-coloured border around the panel
 * @prop {boolean} [resizable=false] - render edge/corner handles so the user can resize the modal
 * @prop {number}  [backdropDuration=200] - backdrop fade duration (ms)
 * @prop {number}  [modalDuration=200] - modal enter/leave duration (ms)
 * @prop {string}  [modalCustomClass=''] - deprecated, use `class`
 * @prop {string}  [backdropCustomClass=''] - deprecated, use `:ui="{ overlay: '...' }"`
 * @emits close - fires when the user clicks the backdrop or presses Escape (only when `closeable` is true)
 */
const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    maxWidth: {
        type: String,
        default: '2xl',
    },
    closeable: {
        type: Boolean,
        default: true,
    },
    hideOverflow: {
        type: Boolean,
        default: true,
    },
    backdropDuration: {
        type: Number,
        default: 200,
    },
    modalDuration: {
        type: Number,
        default: 200,
    },
    alignCenter: {
        type: Boolean,
        default: false,
    },
    showBorder: {
        type: Boolean,
        default: false,
    },
    modalCustomClass: {
        type: String,
        default: '',
    },
    backdropCustomClass: {
        type: String,
        default: '',
    },
    resizable: {
        type: Boolean,
        default: false,
    },
    /** Classes per part, merged over the defaults */
    ui: {
        type: Object as PropType<UiProp<NbParts['Modal']>>,
        default: undefined,
    },
    /** Motion level for this instance */
    motion: {
        type: String as PropType<MotionLevel>,
        default: undefined,
    },
});

const { cls, attrs, level } = useUi('Modal', props, {
    classPart: 'content',
    aliases: { modalCustomClass: 'content', backdropCustomClass: 'overlay' },
});

// `simple` keeps the fade and drops the movement; `off` turns the transitions off.
const panelHidden = computed(() => (level.value === 'simple' ? 'opacity-0' : 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'));
const panelShown = computed(() => (level.value === 'simple' ? 'opacity-100' : 'opacity-100 translate-y-0 sm:scale-100'));

const emit = defineEmits(['close']);
const modalContent = ref(null);

watch(
    () => props.show,
    () => {
        if (props.show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = null;
        }
    }
);

/**
 * Closes the modal and emits the close event
 */
const close = () => {
    if (props.closeable) {
        emit('close');
    }
};

const closeOnEscape = (e) => {
    if (e.key === 'Escape' && props.show) {
        close();
    }
};

onMounted(() => document.addEventListener('keydown', closeOnEscape));

onUnmounted(() => {
    document.removeEventListener('keydown', closeOnEscape);
    document.removeEventListener('mousemove', onResizeMouseMove);
    document.removeEventListener('mouseup', onResizeMouseUp);
    document.body.style.overflow = null;
});

const maxWidthClass = computed(() => {
    let classes = [];

    classes.push(
        {
            sm: 'sm:max-w-sm',
            md: 'sm:max-w-md',
            lg: 'sm:max-w-lg',
            xl: 'sm:max-w-xl',
            '2xl': 'sm:max-w-2xl',
            '3xl': 'sm:max-w-3xl',
            '4xl': 'sm:max-w-4xl',
            '5xl': 'sm:max-w-5xl',
            '6xl': 'sm:max-w-6xl',
            '7xl': 'sm:max-w-7xl',
            '50%': 'sm:max-w-[50%]',
            '60%': 'sm:max-w-[60%]',
            '75%': 'sm:max-w-[75%]',
            '80%': 'sm:max-w-[80%]',
            '90%': 'sm:max-w-[90%]',
            '95%': 'sm:max-w-[95%]',
        }[props.maxWidth]
    );

    if (props.hideOverflow) classes.push('overflow-hidden');

    return classes.join(' ');
});

/* Resize Logic */
const resizing = ref(false);
const resizeAxis = ref(null);
const startX = ref(0);
const startY = ref(0);
const startWidth = ref(0);
const startHeight = ref(0);
const resizedWidth = ref(null);
const resizedHeight = ref(null);
const onResizeMouseDown = (e, axis) => {
    resizing.value = true;
    document.addEventListener('mousemove', onResizeMouseMove);
    document.addEventListener('mouseup', onResizeMouseUp);

    resizeAxis.value = axis;
    startX.value = e.clientX;
    startY.value = e.clientY;
    startWidth.value = modalContent.value.offsetWidth;
    startHeight.value = modalContent.value.offsetHeight;
};
const onResizeMouseUp = (e) => {
    resizing.value = false;
    document.removeEventListener('mousemove', onResizeMouseMove);
    document.removeEventListener('mouseup', onResizeMouseUp);
};

const onResizeMouseMove = (e) => {
    if (!resizing.value) return;

    const dx = (e.clientX - startX.value) * 2;
    const dy = e.clientY - startY.value;

    if (resizeAxis.value.includes('x')) {
        resizedWidth.value = startWidth.value + dx + 'px';
    }
    if (resizeAxis.value.includes('-x')) {
        resizedWidth.value = startWidth.value - dx + 'px';
    }
    if (resizeAxis.value.includes('y')) {
        resizedHeight.value = startHeight.value + dy + 'px';
    }
};
</script>

<template>
    <teleport to="body">
        <!-- transition-opacity gives Vue a real property to time the container's removal
             against, so it stays mounted until the inner leave animations finish. -->
        <transition leave-active-class="transition-opacity duration-200" :css="level !== 'off'">
            <div
                v-show="show"
                v-bind="attrs()"
                :class="cls('root', 'modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0', { flex: alignCenter, 'mb-16 items-center justify-center': alignCenter })"
                scroll-region
            >
                <transition
                    :css="level !== 'off'"
                    enter-active-class="backdrop-transition enter ease-out"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="backdrop-transition leave ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <!-- Duration comes from an inline style, not `duration-[${n}ms]`: Tailwind only
                         generates classes it can find statically, so an interpolated one never exists. -->
                    <div
                        v-show="show"
                        class="fixed inset-0 transform transition-all"
                        :style="{ transitionDuration: `${backdropDuration}ms` }"
                        @click="close"
                    >
                        <div :class="cls('overlay', 'backdrop absolute inset-0 bg-gray-500 opacity-75 dark:bg-black dark:opacity-70')" />
                    </div>
                </transition>

                <transition
                    :css="level !== 'off'"
                    enter-active-class="modal-transition enter ease-out"
                    :enter-from-class="panelHidden"
                    :enter-to-class="panelShown"
                    leave-active-class="modal-transition leave ease-in"
                    :leave-from-class="panelShown"
                    :leave-to-class="panelHidden"
                >
                    <div
                        ref="modalContent"
                        v-show="show"
                        :class="
                            cls('content', 'mb-6 transform rounded-lg bg-white text-gray-900 dark:text-gray-100 shadow-xl transition-all sm:mx-auto sm:w-full dark:bg-gray-800 dark:text-gray-100', {
                                [maxWidthClass]: !!maxWidthClass,
                                // `border-pink` had no matching token, so this rendered the default grey.
                                'border-primary-500 rounded-md border-2 border-solid': showBorder,
                            })
                        "
                        :style="{
                            userSelect: resizing ? 'none' : 'auto',
                            transition: resizing ? 'none' : '',
                            transitionDuration: resizing ? '' : `${modalDuration}ms`,
                            width: resizedWidth || '',
                            height: resizedHeight || '',
                            maxWidth: resizedWidth || '',
                            maxHeight: resizedHeight || '',
                        }"
                    >
                        <slot v-if="show" />

                        <template v-if="resizable">
                            <!-- Resize Handles -->
                            <!-- <div
                                class="absolute left-0 top-0 h-1 w-full cursor-row-resize bg-gray-200"
                                @mousedown="onResizeMouseDown($event, 'y')"
                                @mouseup="onResizeMouseUp"
                            ></div> -->
                            <div
                                class="absolute bottom-0 left-0 h-1 w-full cursor-row-resize"
                                @mousedown="onResizeMouseDown($event, 'y')"
                                @mouseup="onResizeMouseUp"
                            ></div>
                            <div
                                class="absolute left-0 top-0 h-full w-1 cursor-col-resize"
                                @mousedown="onResizeMouseDown($event, '-x')"
                                @mouseup="onResizeMouseUp"
                            ></div>
                            <div
                                class="absolute right-0 top-0 h-full w-1 cursor-col-resize"
                                @mousedown="onResizeMouseDown($event, 'x')"
                                @mouseup="onResizeMouseUp"
                            ></div>

                            <!-- Corners -->
                            <div
                                class="absolute bottom-0 right-0 h-1 w-1 cursor-se-resize"
                                @mousedown="onResizeMouseDown($event, 'xy')"
                                @mouseup="onResizeMouseUp"
                            ></div>
                            <div
                                class="absolute bottom-0 left-0 h-1 w-1 cursor-sw-resize"
                                @mousedown="onResizeMouseDown($event, '-xy')"
                                @mouseup="onResizeMouseUp"
                            ></div>
                        </template>
                    </div>
                </transition>
            </div>
        </transition>
    </teleport>
</template>
