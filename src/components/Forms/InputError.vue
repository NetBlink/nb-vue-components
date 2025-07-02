<script setup lang="ts">
/**
 * Input Error component for displaying validation error messages
 *
 * @component
 *
 * @prop {string} message - The error message to display
 */

interface Props {
    message?: string;
}

defineProps<Props>();
</script>

<template>
    <div v-show="message">
        <p class="text-sm text-red-600">
            {{ message }}
        </p>
    </div>
</template>
