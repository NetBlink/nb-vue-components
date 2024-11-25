<script setup>
const props = defineProps({
    href: String,
    title: String,
});
</script>

<template>
    <li>
        <a
            class="focusable inline-flex w-full items-center justify-center whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            :href="href"
            data-te-dropdown-item-ref
        >
            {{ title }}
        </a>
    </li>
</template>
