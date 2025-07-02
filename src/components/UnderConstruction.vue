<script setup lang="ts">
/**
 * Under Construction component
 *
 * A utility component to display a placeholder for sections that are still being developed.
 * Shows a construction icon with customizable message.
 *
 * @component
 *
 * @prop {boolean} full - Whether to take full height (grows to fill container)
 * @prop {string} info - Custom message to display (supports line breaks with \n)
 */

import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

interface UnderConstructionProps {
    /** Whether to take full height (grows to fill container) */
    full?: boolean;
    /** Custom message to display (supports line breaks with \n) */
    info?: string;
}

const props = withDefaults(defineProps<UnderConstructionProps>(), {
    full: false,
    info: 'Section under construction.\nPlease come back later.',
});
</script>

<template>
    <div class="bg-stripes p-ui flex w-full items-center justify-center" :class="{ grow: full }">
        <div class="py-ui px-ui gap-ui-half flex flex-col rounded bg-white text-center">
            <FontAwesomeIcon :icon="faPersonDigging" class="text-primary text-4xl" />
            <h1 class="text-2xl font-bold">Under Construction</h1>
            <p class="whitespace-pre-line text-gray-600">{{ info }}</p>
        </div>
    </div>
</template>

<style scoped>
/* Striped background pattern */
.bg-stripes {
    background-image: repeating-linear-gradient(45deg, #f3f4f6, #f3f4f6 10px, #e5e7eb 10px, #e5e7eb 20px);
}

/* Custom spacing classes (adjust these based on your design system) */
.p-ui {
    padding: 1rem;
}

.py-ui {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.px-ui {
    padding-left: 1rem;
    padding-right: 1rem;
}

.gap-ui-half {
    gap: 0.5rem;
}

.grow {
    flex-grow: 1;
}
</style>
