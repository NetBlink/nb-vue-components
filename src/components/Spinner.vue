<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    /** Spinner size */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Custom color classes */
    color?: string;
}

const props = withDefaults(defineProps<Props>(), {
    size: 'md',
    color: undefined,
});

// Size configurations
const sizeClasses = computed(() => {
    switch (props.size) {
        case 'xs':
            return 'h-4 w-4 border-2';
        case 'sm':
            return 'h-6 w-6 border-2';
        case 'md':
            return 'h-8 w-8 border-4'; // Current default size
        case 'lg':
            return 'h-12 w-12 border-4';
        case 'xl':
            return 'h-16 w-16 border-4';
        default:
            return 'h-8 w-8 border-4';
    }
});

// Color classes
const colorClasses = computed(() => {
    if (props.color) {
        return props.color;
    }
    return 'text-primary';
});
</script>

<template>
    <div
        :class="[
            'inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
            sizeClasses,
            colorClasses
        ]"
        role="status"
        aria-label="Loading"
    >
        <span class="sr-only">Loading...</span>
    </div>
</template>
