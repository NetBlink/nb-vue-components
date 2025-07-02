<script setup lang="ts">
interface LinkDropdownButtonItemProps {
    /** The URL to navigate to */
    href?: string;
    /** The title/text to display */
    title?: string;
}

const props = defineProps<LinkDropdownButtonItemProps>();
</script>

<template>
    <li>
        <a
            class="focusable inline-flex w-full items-center justify-center bg-transparent px-4 py-2 text-sm font-normal whitespace-nowrap text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            :href="href"
        >
            {{ title }}
        </a>
    </li>
</template>
