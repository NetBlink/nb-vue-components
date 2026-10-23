<script setup lang="ts">
/**
 * Pagination component for navigating through pages of data
 *
 * @component
 *
 * @prop {Array} links - Array of pagination link objects
 * @prop {boolean} linkReturn - Whether to return links instead of navigating
 * @prop {number} maxPagesToShow - Maximum number of page links to display
 * @prop {boolean} logs - Whether this is used for logs pagination
 * @prop {string} customLinkClass - Deprecated, use `:ui="{ link: '...' }"`
 * @prop {string} customActiveLinkClass - Deprecated, use `:ui="{ activeLink: '...' }"`
 * @prop {string} customListClass - Deprecated, use `:ui="{ list: '...' }"`
 * @prop {boolean} preserveScroll - Whether to preserve scroll position
 * @prop {boolean} preserveState - Whether to preserve component state
 * @prop {Array} only - Array of properties to preserve during navigation
 * @prop {boolean} showPerPage - Whether to show per-page selector
 * @prop {number} defaultPerPage - Default number of items per page
 * @part root - the wrapper
 * @part list - the `<ul>` of page links
 * @part link - each page link
 * @part activeLink - extra classes for the current page, on top of `link`
 * @part disabledLink - a link without a URL (previous/next at the ends)
 */

import Link from '../overrides/InertiaLink';
import { computed, ref } from 'vue';
import { Input } from '../index';
import type { NbParts, UiProp } from '../ui/parts';
import type { MotionLevel } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface PaginationProps {
    links: PaginationLink[];
    linkReturn?: boolean;
    maxPagesToShow?: number;
    logs?: boolean;
    customLinkClass?: string;
    customActiveLinkClass?: string;
    customListClass?: string;
    preserveScroll?: boolean;
    preserveState?: boolean;
    only?: string[];
    showPerPage?: boolean;
    defaultPerPage?: number;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Pagination']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const emit = defineEmits<{
    change: [url: string];
}>();

const props = withDefaults(defineProps<PaginationProps>(), {
    linkReturn: false,
    maxPagesToShow: 20,
    logs: false,
    customLinkClass: '',
    customActiveLinkClass: '',
    customListClass: '',
    preserveScroll: false,
    preserveState: false,
    only: () => [],
    showPerPage: false,
    defaultPerPage: 100,
});

const { cls, attrs } = useUi('Pagination', props, {
    aliases: { customListClass: 'list', customLinkClass: 'link', customActiveLinkClass: 'activeLink' },
});

const LINK = 'focusable relative block cursor-pointer rounded-md bg-transparent px-3 py-1.5 text-sm text-gray-600 transition-colors duration-150 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white';
const ACTIVE = 'bg-primary-50 text-primary-700 font-semibold dark:bg-primary-900/40 dark:text-primary-100';
// 3.x applied customLinkClass to the disabled links too, so the deprecated prop still does.
const disabledClass = () => cls('disabledLink', 'focusable pointer-events-none relative block rounded-md bg-transparent px-3 py-1.5 text-sm text-gray-400 transition-colors duration-150 dark:text-gray-600', props.customLinkClass);
const linkClass = (active: boolean) => (active ? cls('activeLink', cls('link', LINK, ACTIVE)) : cls('link', LINK));

const perPage = ref(props.defaultPerPage);
const perPageOptions = [10, 25, 50, 100, 250];

const filteredLinks = computed(() => {
    if (!props.links || props.links.length <= 3) {
        return props.links;
    }

    const firstLink = props.links[0];
    const lastLink = props.links[props.links.length - 1];
    const activeIndex = props.links.findIndex((link) => link.active);

    let start = Math.max(1, activeIndex - Math.floor(props.maxPagesToShow / 2));
    let end = Math.min(props.links.length - 2, start + props.maxPagesToShow - 1);

    if (end - start < props.maxPagesToShow - 1) {
        start = Math.max(1, end - props.maxPagesToShow + 1);
    }

    return [firstLink, ...props.links.slice(start, end + 1), lastLink];
});

const handleChange = (label) => {
    emit('change', label);
};

const perPageChanged = (e) => {
    let url = new URL(window.location.href);
    url.searchParams.set('per_page', e.target.value);

    if (props.linkReturn) {
        handleChange(url.href);
        return;
    }

    window.location.href = url.href;
};
</script>
<template>
    <div v-bind="attrs()" :class="cls('root', 'pagination flex justify-between')">
        <div>
            <Input type="select" v-model="perPage" class="per-page-input w-20" @changed="perPageChanged" v-if="showPerPage">
                <option v-for="option in perPageOptions" :key="option" :value="option" :selected="option == perPage">
                    {{ option }}
                </option>
            </Input>
        </div>

        <nav aria-label="Page navigation" v-if="filteredLinks.length > 3">
            <ul :class="cls('list', 'list-style-none flex')">
                <li v-for="(link, k) in filteredLinks" :key="k">
                    <template v-if="linkReturn">
                        <button
                            v-if="link.url === null"
                            :class="disabledClass()"
                            v-html="link.label"
                            @click="handleChange('')"
                        />
                        <button
                            v-else
                            :class="linkClass(link.active)"
                            v-html="link.label"
                            @click="handleChange(link.url)"
                        />
                    </template>
                    <template v-else>
                        <Link
                            v-if="link.url === null"
                            :class="disabledClass()"
                            v-html="link.label"
                            :href="''"
                        />
                        <Link
                            v-else
                            :class="linkClass(link.active)"
                            :href="link.url"
                            v-html="link.label"
                            :preserveScroll="preserveScroll || logs"
                            :preserveState="preserveState || logs"
                            :only="logs ? ['logs'] : only"
                        />
                    </template>
                </li>
            </ul>
        </nav>

        <div></div>
    </div>
</template>
