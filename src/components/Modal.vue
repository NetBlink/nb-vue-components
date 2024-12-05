<script setup lang="ts">
import { computed, onMounted, onUnmounted, watch, ref } from 'vue';

/**
 * @typedef {Object} Props
 * @property {boolean} show - Whether the modal is visible or not
 * @property {string} maxWidth - The maximum width of the modal
 * @property {boolean} closeable - Whether the modal can be closed by clicking outside
 * @property {boolean} hideOverflow - Whether to hide the overflow of the body when the modal is open
 * @property {number} backdropDuration - The duration of the backdrop transition
 * @property {number} modalDuration - The duration of the modal transition
 * @property {boolean} alignCenter - Whether to align the modal to the center of the screen
 * @property {boolean} showBorder - Whether to show a border around the modal
 * @property {boolean} [resizable=false] - Whether the modal is resizable
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
});

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
        <transition leave-active-class="duration-200">
            <div
                v-show="show"
                class="modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0"
                :class="{ flex: alignCenter, 'mb-16 items-center justify-center': alignCenter }"
                scroll-region
            >
                <transition
                    :enter-active-class="`backdrop-transition enter ease-out duration-[${backdropDuration}ms]`"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    :leave-active-class="`backdrop-transition leave ease-in duration-[${backdropDuration}ms]`"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div v-show="show" class="fixed inset-0 transform transition-all" @click="close">
                        <div class="backdrop absolute inset-0 bg-gray-500 opacity-75"
                            :class="{[backdropCustomClass]: !!backdropCustomClass}" />
                    </div>
                </transition>

                <transition
                    :enter-active-class="`modal-transition enter ease-out duration-[${modalDuration}ms]`"
                    enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to-class="opacity-100 translate-y-0 sm:scale-100"
                    :leave-active-class="`modal-transition leave ease-in duration-[${modalDuration}ms]`"
                    leave-from-class="opacity-100 translate-y-0 sm:scale-100"
                    leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div
                        ref="modalContent"
                        v-show="show"
                        class="mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full"
                        :class="{
                            maxWidthClass,
                            'border-pink rounded-md border-2 border-solid': showBorder, 
                            [modalCustomClass]: !!modalCustomClass}"
                        :style="{
                            userSelect: resizing ? 'none' : 'auto',
                            transition: resizing ? 'none' : '',
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
