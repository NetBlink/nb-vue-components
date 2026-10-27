<script setup lang="ts">
/**
 * Inline `role="alert"` banner in success / error / warning / info variants, with a
 * matching icon, an optional title and default-slot body. Set `dismissible` to add a
 * close button; visibility is two-way bound through `v-model` and the show/hide is
 * animated with a JS height+opacity transition rather than CSS classes.
 *
 * @part root - the alert box
 * @part icon - the type icon
 * @part content - the column holding title and body
 * @part title - the title
 * @part body - the slot wrapper
 * @part dismiss - the dismiss button
 * @motion off - appears and disappears instantly
 * @motion simple - height and opacity, quickly, no movement
 * @motion smooth - height and opacity with a small upward drift
 * @motion fancy - the same on a longer spring
 */
import { ref, computed, watch } from 'vue';
import NbIcon from '../icons/NbIcon.vue';
import type { AlertTypes, NbParts, UiProp } from '../ui/parts';
import type { MotionLevel } from '../ui/motion';
import { useUi } from '../ui/useUi';
import { heightTransition } from '../ui/flip';

defineOptions({ inheritAttrs: false });

export interface AlertProps {
    /** The type/variant of the alert. Add your own through the `variants` config. */
    type?: keyof AlertTypes;
    /** Alert title (optional) */
    title?: string;
    /** Whether the alert can be dismissed */
    dismissible?: boolean;
    /** Whether the alert is initially visible */
    modelValue?: boolean;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Alert']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<AlertProps>(), {
    type: 'info',
    title: undefined,
    dismissible: false,
    modelValue: true,
});

export interface AlertEmits {
    'update:modelValue': [value: boolean];
    dismiss: [];
}

const emit = defineEmits<AlertEmits>();

const { cls, attrs, variant, level } = useUi('Alert', props);

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
const TYPES: Record<string, { root: string; icon: string; dismiss: string }> = {
    success: {
        root: 'border-green-200 bg-green-50 text-green-800 dark:border-green-800/70 dark:bg-green-950/60 dark:text-green-100',
        icon: 'text-green-500 dark:text-green-300',
        dismiss:
            'text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50 dark:text-green-300 dark:hover:bg-green-900/40 dark:focus:ring-green-400 dark:focus:ring-offset-green-950',
    },
    error: {
        root: 'border-red-200 bg-red-50 text-red-800 dark:border-red-800/70 dark:bg-red-950/60 dark:text-red-100',
        icon: 'text-red-500 dark:text-red-300',
        dismiss:
            'text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50 dark:text-red-300 dark:hover:bg-red-900/40 dark:focus:ring-red-400 dark:focus:ring-offset-red-950',
    },
    warning: {
        root: 'border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-700/70 dark:bg-yellow-950/60 dark:text-yellow-100',
        icon: 'text-yellow-500 dark:text-yellow-300',
        dismiss:
            'text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50 dark:text-yellow-300 dark:hover:bg-yellow-900/40 dark:focus:ring-yellow-400 dark:focus:ring-offset-yellow-950',
    },
    info: {
        root: 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800/70 dark:bg-blue-950/60 dark:text-blue-100',
        icon: 'text-blue-500 dark:text-blue-300',
        dismiss:
            'text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50 dark:text-blue-300 dark:hover:bg-blue-900/40 dark:focus:ring-blue-400 dark:focus:ring-offset-blue-950',
    },
};

const typeClasses = computed(() => variant<'root' | 'icon' | 'dismiss'>('type', TYPES, props.type));

// An unknown type keeps the info box, as in 3.x (its icon and button stay uncoloured).
const alertClasses = computed(() => ['relative w-full rounded-lg border px-4 py-3 text-sm', typeClasses.value.root ?? TYPES.info.root]);

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

// Height, the box around it and opacity collapse together (`simple` and up), with a small drift from `smooth`.
const transition = computed(() => heightTransition(level.value, 'simple', { drift: '-8px' }));
</script>

<template>
    <Transition v-bind="transition">
        <div v-if="show" v-bind="attrs()" :class="cls('root', alertClasses)" role="alert">
            <div class="flex">
                <!-- Icon -->
                <div class="flex-shrink-0">
                    <NbIcon :name="alertIcon" :class="cls('icon', 'h-5 w-5', typeClasses.icon)" />
                </div>

                <!-- Content -->
                <div :class="cls('content', 'ml-3 flex-1')">
                    <h3 v-if="title" :class="cls('title', 'mb-1 text-sm font-medium')">
                        {{ title }}
                    </h3>
                    <div :class="cls('body', 'text-sm')">
                        <slot />
                    </div>
                </div>

                <!-- Dismiss button -->
                <div v-if="dismissible" class="ml-auto flex-shrink-0">
                    <button
                        @click="handleDismiss"
                        :class="
                            cls(
                                'dismiss',
                                'inline-flex rounded-md p-1.5 transition-colors duration-150 focus:ring-2 focus:ring-offset-2 focus:outline-none',
                                typeClasses.dismiss
                            )
                        "
                        aria-label="Dismiss alert"
                    >
                        <NbIcon name="$close" class="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    </Transition>
</template>
