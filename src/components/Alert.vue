<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import NbIcon from '../icons/NbIcon.vue';

interface Props {
    /** The type/variant of the alert */
    type?: 'success' | 'error' | 'warning' | 'info';
    /** Alert title (optional) */
    title?: string;
    /** Whether the alert can be dismissed */
    dismissible?: boolean;
    /** Whether the alert is initially visible */
    modelValue?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    type: 'info',
    title: undefined,
    dismissible: false,
    modelValue: true,
});

const emit = defineEmits<{
    'update:modelValue': [value: boolean];
    dismiss: [];
}>();

// Local visibility state
const isVisible = ref(props.modelValue);

// Watch for external changes to modelValue
const show = computed({
    get: () => isVisible.value,
    set: (value: boolean) => {
        isVisible.value = value;
        emit('update:modelValue', value);
    },
});

// Sync isVisible with modelValue changes from parent
watch(
    () => props.modelValue,
    (newValue) => {
        isVisible.value = newValue;
    },
    { immediate: true }
);

// Alert type styles
const alertClasses = computed(() => {
    const baseClasses = 'relative w-full rounded-lg border px-4 py-3 text-sm';

    switch (props.type) {
        case 'success':
            return `${baseClasses} border-green-200 bg-green-50 text-green-800 dark:border-green-800/70 dark:bg-green-950/60 dark:text-green-100`;
        case 'error':
            return `${baseClasses} border-red-200 bg-red-50 text-red-800 dark:border-red-800/70 dark:bg-red-950/60 dark:text-red-100`;
        case 'warning':
            return `${baseClasses} border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-700/70 dark:bg-yellow-950/60 dark:text-yellow-100`;
        case 'info':
        default:
            return `${baseClasses} border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800/70 dark:bg-blue-950/60 dark:text-blue-100`;
    }
});

// Icon for each alert type
const alertIcon = computed<'$success' | '$error' | '$warning' | '$info'>(() => {
    switch (props.type) {
        case 'success': return '$success';
        case 'error':   return '$error';
        case 'warning': return '$warning';
        case 'info':
        default:        return '$info';
    }
});

// Handle dismiss
const handleDismiss = () => {
    show.value = false;
    emit('dismiss');
};

/*
 * Height/opacity transition hooks.
 *
 * The ordering matters: the start state must be *committed* by the browser
 * before the end state is written, otherwise both land in one style recalc and
 * there is nothing to interpolate - the alert snaps instead of animating.
 * Reading `offsetHeight` forces that commit (`flush` below).
 *
 * Easing and durations mirror the --ease-emphasised / --duration-* theme
 * tokens so alerts move like the rest of the system.
 */
const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
const ENTER_MS = 400;
const LEAVE_MS = 200;
const HIDDEN = { height: '0px', opacity: '0', transform: 'translateY(-8px)' };

const flush = (el: HTMLElement) => el.offsetHeight;

const applyTransition = (el: HTMLElement, ms: number) => {
    el.style.transition = `height ${ms}ms ${EASE}, opacity ${ms}ms ${EASE}, transform ${ms}ms ${EASE}`;
};

const onBeforeEnter = (el: Element) => {
    Object.assign((el as HTMLElement).style, HIDDEN);
};

const onEnter = (el: Element, done: () => void) => {
    const element = el as HTMLElement;
    const height = element.scrollHeight;

    flush(element);
    applyTransition(element, ENTER_MS);

    element.style.height = `${height}px`;
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';

    setTimeout(done, ENTER_MS);
};

const onAfterEnter = (el: Element) => {
    const element = el as HTMLElement;
    // Drop the transition first so switching to `auto` is not itself animated.
    element.style.transition = '';
    element.style.height = 'auto';
};

const onBeforeLeave = (el: Element) => {
    const element = el as HTMLElement;
    element.style.height = `${element.scrollHeight}px`;
};

const onLeave = (el: Element, done: () => void) => {
    const element = el as HTMLElement;

    flush(element);
    applyTransition(element, LEAVE_MS);

    Object.assign(element.style, HIDDEN);

    setTimeout(done, LEAVE_MS);
};

const onAfterLeave = (el: Element) => {
    const element = el as HTMLElement;
    element.style.height = '';
    element.style.opacity = '';
    element.style.transform = '';
    element.style.transition = '';
};
</script>

<template>
    <Transition
        name="alert"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
        @after-leave="onAfterLeave"
        :css="false"
    >
        <div v-if="show" :class="alertClasses" role="alert" style="overflow: hidden">
            <div class="flex">
                <!-- Icon -->
                <div class="flex-shrink-0">
                    <NbIcon
                        :name="alertIcon"
                        class="h-5 w-5"
                        :class="{
                            'text-green-500 dark:text-green-300': type === 'success',
                            'text-red-500 dark:text-red-300': type === 'error',
                            'text-yellow-500 dark:text-yellow-300': type === 'warning',
                            'text-blue-500 dark:text-blue-300': type === 'info',
                        }"
                    />
                </div>

                <!-- Content -->
                <div class="ml-3 flex-1">
                    <h3 v-if="title" class="mb-1 text-sm font-medium">
                        {{ title }}
                    </h3>
                    <div class="text-sm">
                        <slot />
                    </div>
                </div>

                <!-- Dismiss button -->
                <div v-if="dismissible" class="ml-auto flex-shrink-0">
                    <button
                        @click="handleDismiss"
                        class="inline-flex rounded-md p-1.5 transition-colors duration-150 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                        :class="{
                            'text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50 dark:text-green-300 dark:hover:bg-green-900/40 dark:focus:ring-green-400 dark:focus:ring-offset-green-950': type === 'success',
                            'text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50 dark:text-red-300 dark:hover:bg-red-900/40 dark:focus:ring-red-400 dark:focus:ring-offset-red-950': type === 'error',
                            'text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50 dark:text-yellow-300 dark:hover:bg-yellow-900/40 dark:focus:ring-yellow-400 dark:focus:ring-offset-yellow-950': type === 'warning',
                            'text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50 dark:text-blue-300 dark:hover:bg-blue-900/40 dark:focus:ring-blue-400 dark:focus:ring-offset-blue-950': type === 'info',
                        }"
                        aria-label="Dismiss alert"
                    >
                        <NbIcon name="$close" class="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    </Transition>
</template>
