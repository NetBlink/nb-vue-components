<script setup lang="ts">
/**
 * A single navigation entry inside a `Dropdown`, wrapping an Inertia `Link` in a reka-ui
 * `DropdownMenuItem` so keyboard navigation and menu semantics come for free. Extra
 * attributes fall through to the `Link`, so `method`, `as` and the like work as usual.
 */
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
            class="focusable flex w-full cursor-pointer items-center gap-2 rounded px-3 py-1.5 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
            <slot />
        </Link>
    </DropdownMenuItem>
</template>
