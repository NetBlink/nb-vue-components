<script setup lang="ts">
import Link from '../overrides/InertiaLink';
import { DropdownMenuItem } from 'reka-ui';

interface DropdownLinkProps {
    /** The URL to navigate to */
    href: string;
}

const props = defineProps<DropdownLinkProps>();
</script>

<template>
    <DropdownMenuItem>
        <Link
            v-bind="$attrs"
            :href="href"
            class="focusable flex w-full items-center gap-2 rounded px-8 py-6 text-left text-base leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden"
        >
            <slot />
        </Link>
    </DropdownMenuItem>
</template>
