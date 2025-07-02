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
 * @prop {string} customLinkClass - Custom CSS classes for pagination links
 * @prop {string} customActiveLinkClass - Custom CSS classes for active link
 * @prop {string} customListClass - Custom CSS classes for the pagination list
 * @prop {boolean} preserveScroll - Whether to preserve scroll position
 * @prop {boolean} preserveState - Whether to preserve component state
 * @prop {Array} only - Array of properties to preserve during navigation
 * @prop {boolean} showPerPage - Whether to show per-page selector
 * @prop {number} defaultPerPage - Default number of items per page
 */

import Link from '../overrides/InertiaLink';
import { computed, ref } from 'vue';
import { Input } from '../index';

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
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
}

const emit = defineEmits<{
    change: [url: string];
}>();

const props = withDefaults(defineProps<Props>(), {
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
    <div class="pagination flex justify-between">
        <div>
            <Input type="select" v-model="perPage" class="per-page-input w-20" @changed="perPageChanged" v-if="showPerPage">
                <option v-for="option in perPageOptions" :key="option" :value="option" :selected="option == perPage">
                    {{ option }}
                </option>
            </Input>
        </div>

        <nav aria-label="Page navigation" v-if="filteredLinks.length > 3">
            <ul class="list-style-none flex" :class="{ [customListClass]: customListClass }">
                <li v-for="(link, k) in filteredLinks" :key="k">
                    <template v-if="linkReturn">
                        <button
                            v-if="link.url === null"
                            class="focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
                            :class="{
                                [customLinkClass]: customLinkClass,
                            }"
                            v-html="link.label"
                            @click="handleChange('')"
                        />
                        <button
                            v-else
                            class="focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                            :class="{
                                'text-primary font-bold': link.active,
                                [customLinkClass]: customLinkClass,
                                [customActiveLinkClass]: link.active && customActiveLinkClass,
                            }"
                            v-html="link.label"
                            @click="handleChange(link.url)"
                        />
                    </template>
                    <template v-else>
                        <Link
                            v-if="link.url === null"
                            class="focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
                            :class="{
                                [customLinkClass]: customLinkClass,
                            }"
                            v-html="link.label"
                            :href="''"
                        />
                        <Link
                            v-else
                            class="focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                            :class="{
                                'text-primary font-bold': link.active,
                                [customLinkClass]: customLinkClass,
                                [customActiveLinkClass]: link.active && customActiveLinkClass,
                            }"
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
