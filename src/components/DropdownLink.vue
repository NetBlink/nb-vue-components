<script setup>
import Link from '../overrides/InertiaLink';
import { DropdownMenuItem } from 'reka-ui';
import { ref } from 'vue';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <DropdownMenuItem>
        <Link
            v-bind="$attrs"
            :href="href"
            class="focusable block w-full rounded px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden"
        >
            <slot />
        </Link>
    </DropdownMenuItem>
</template>
