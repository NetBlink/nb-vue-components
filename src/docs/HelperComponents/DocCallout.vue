<script setup lang="ts">
/**
 * DocCallout - tinted note box used across the docs pages.
 *
 * Replaces the hand-rolled `border-blue-200 bg-blue-50/50 text-blue-900` divs
 * that were light-mode only and turned into dark-text-on-dark-panel once the
 * docs gained a dark theme.
 */
interface Props {
    tone?: 'info' | 'warning' | 'danger' | 'success';
}

withDefaults(defineProps<Props>(), { tone: 'info' });

const tones = {
    info: 'border-blue-200 bg-blue-50/60 text-blue-900 dark:border-blue-800/70 dark:bg-blue-950/40 dark:text-blue-100',
    warning: 'border-amber-200 bg-amber-50/60 text-amber-900 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-100',
    danger: 'border-red-200 bg-red-50/60 text-red-900 dark:border-red-800/70 dark:bg-red-950/40 dark:text-red-100',
    success: 'border-green-200 bg-green-50/60 text-green-900 dark:border-green-800/70 dark:bg-green-950/40 dark:text-green-100',
};
</script>

<template>
    <div class="rounded-lg border p-4 text-sm" :class="tones[tone]">
        <slot />
    </div>
</template>
