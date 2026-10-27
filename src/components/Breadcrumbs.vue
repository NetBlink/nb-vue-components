<script setup lang="ts">
/**
 * Trail of links to the current page. Items with an `href` become Inertia links;
 * the last item is the current page (`aria-current="page"`). `collapse` keeps
 * long trails on one line on small screens by hiding the middle items behind an
 * ellipsis. `PageHeader` renders one for you from its `breadcrumbs` prop.
 *
 * @part root - the `<nav>` landmark
 * @part list - the `<ol>`
 * @part item - each `<li>`
 * @part link - a link item
 * @part current - the current page
 * @part separator - the separator between items
 * @motion off - static
 * @motion simple - static
 * @motion smooth - static
 * @motion fancy - fades in when it appears
 */
import Link from '../overrides/InertiaLink';
import type { MotionLevel } from '../ui/motion';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

export interface BreadcrumbsProps {
    /** The trail, first to current */
    items: BreadcrumbItem[];
    /** On small screens show only the first and the last two items */
    collapse?: boolean;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Breadcrumbs']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<BreadcrumbsProps>(), {
    collapse: false,
});

const { cls, attrs, level } = useUi('Breadcrumbs', props);

// With `collapse`, the items between the first and the last two hide below `sm`.
const collapsed = (index: number) => props.collapse && props.items.length > 3 && index > 0 && index < props.items.length - 2;
</script>

<template>
    <nav v-bind="attrs()" aria-label="Breadcrumb" :class="cls('root', 'min-w-0', level === 'fancy' && 'animate-fade-in')">
        <ol :class="cls('list', 'flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-gray-500 dark:text-gray-400')">
            <template v-for="(item, index) in items" :key="`${index}-${item.label}`">
                <!-- Collapsed on small screens: first / … / second-to-last / last. The ellipsis takes item 1's place; the separators after hidden items hide with them. -->
                <li v-if="index > 0" :class="[cls('separator', 'text-gray-400 dark:text-gray-500'), collapsed(index) && index > 1 && 'hidden sm:block']" aria-hidden="true">
                    <slot name="separator">/</slot>
                </li>
                <li v-if="collapse && items.length > 3 && index === 1" :class="cls('separator', 'text-gray-400 sm:hidden dark:text-gray-500')" aria-hidden="true">…</li>
                <li :class="[cls('item', 'min-w-0'), collapsed(index) && 'hidden sm:block']">
                    <span v-if="index === items.length - 1" :class="cls('current', 'font-medium text-gray-800 dark:text-gray-100')" aria-current="page">
                        {{ item.label }}
                    </span>
                    <Link
                        v-else-if="item.href"
                        :href="item.href"
                        :class="cls('link', 'focusable rounded-sm transition-colors duration-150 hover:text-primary-600 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500 dark:hover:text-primary-400')"
                    >
                        {{ item.label }}
                    </Link>
                    <span v-else>{{ item.label }}</span>
                </li>
            </template>
        </ol>
    </nav>
</template>
