<script setup lang="ts">
/**
 * One entry in a `LinkDropdownButton` menu. It renders its own `<li>` wrapping a plain
 * `<a href>` with the menu's hover/focus styling, so it does a full page load rather than
 * an Inertia visit, use `DropdownLink` when you want client-side navigation.
 */
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
            class="focusable flex w-full cursor-pointer items-center rounded bg-transparent px-3 py-1.5 text-sm font-normal whitespace-nowrap text-gray-700 transition-colors duration-150 hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
            :href="href"
        >
            {{ title }}
        </a>
    </li>
</template>
