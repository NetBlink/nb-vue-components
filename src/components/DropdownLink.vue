<script setup>
import Link from '../overrides/InertiaLink';
</script>

<template>
    <Link
        class="focusable block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden"
    >
        <slot />
    </Link>
</template>
