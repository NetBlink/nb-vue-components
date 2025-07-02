<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheckCircle, faTimesCircle, faExclamationTriangle, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

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
            return `${baseClasses} border-green-200 bg-green-50 text-green-800`;
        case 'error':
            return `${baseClasses} border-red-200 bg-red-50 text-red-800`;
        case 'warning':
            return `${baseClasses} border-yellow-200 bg-yellow-50 text-yellow-800`;
        case 'info':
        default:
            return `${baseClasses} border-blue-200 bg-blue-50 text-blue-800`;
    }
});

// Icon for each alert type
const alertIcon = computed(() => {
    switch (props.type) {
        case 'success':
            return faCheckCircle;
        case 'error':
            return faTimesCircle;
        case 'warning':
            return faExclamationTriangle;
        case 'info':
        default:
            return faInfoCircle;
    }
});

// Handle dismiss
const handleDismiss = () => {
    show.value = false;
    emit('dismiss');
};

// Transition hooks for smooth height animation
const onBeforeEnter = (el: Element) => {
    const element = el as HTMLElement;
    element.style.height = '0';
    element.style.opacity = '0';
    element.style.transform = 'translateY(-8px) scale(0.95)';
};

const onEnter = (el: Element, done: () => void) => {
    const element = el as HTMLElement;
    const height = element.scrollHeight;

    element.style.transition = 'all 400ms ease-out';

    // Use requestAnimationFrame to ensure the styles are applied
    requestAnimationFrame(() => {
        element.style.height = `${height}px`;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0) scale(1)';
    });

    setTimeout(done, 400);
};

const onAfterEnter = (el: Element) => {
    const element = el as HTMLElement;
    element.style.height = 'auto';
};

const onBeforeLeave = (el: Element) => {
    const element = el as HTMLElement;
    const height = element.scrollHeight;
    element.style.height = `${height}px`;
};

const onLeave = (el: Element, done: () => void) => {
    const element = el as HTMLElement;

    element.style.transition = 'all 350ms ease-in';

    requestAnimationFrame(() => {
        element.style.height = '0';
        element.style.opacity = '0';
        element.style.transform = 'translateY(-8px) scale(0.95)';
    });

    setTimeout(done, 350);
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
                    <FontAwesomeIcon
                        :icon="alertIcon"
                        class="h-5 w-5"
                        :class="{
                            'text-green-400': type === 'success',
                            'text-red-400': type === 'error',
                            'text-yellow-400': type === 'warning',
                            'text-blue-400': type === 'info',
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
                            'text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50': type === 'success',
                            'text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50': type === 'error',
                            'text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50': type === 'warning',
                            'text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50': type === 'info',
                        }"
                        aria-label="Dismiss alert"
                    >
                        <FontAwesomeIcon :icon="faTimes" class="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    </Transition>
</template>
