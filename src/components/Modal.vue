<script setup>
import { computed, onMounted, onUnmounted, watch } from 'vue';

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

});

const emit = defineEmits(['close']);

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
        }[props.maxWidth]
    );

    if (props.hideOverflow) classes.push('overflow-hidden');

    return classes.join(' ');
});
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
                        v-show="show"
                        class="mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full"
                        :class="{
                            maxWidthClass,
                            ' border-pink rounded-md border-2 border-solid': showBorder, 
                            [modalCustomClass]: !!modalCustomClass}"
                    >
                        <slot v-if="show" />
                    </div>
                </transition>
            </div>
        </transition>
    </teleport>
</template>
