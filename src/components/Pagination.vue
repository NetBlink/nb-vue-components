<script setup>
import Link from '../overrides/InertiaLink';
import { computed } from 'vue';
import { Input } from '../../index';

const emit = defineEmits(['change']);

const props = defineProps({
    links: Array,
    linkReturn: {
        type: Boolean,
        default: false,
    },
    maxPagesToShow: {
        type: Number,
        default: 20,
    },
    logs: {
        type: Boolean,
        default: false,
    },
    customLinkClass: {
        type: String,
        default: '',
    },
    customActiveLinkClass: {
        type: String,
        default: '',
    },
    customListClass: {
        type: String,
        default: '',
    },
    preserveScroll: {
        type: Boolean,
        default: false,
    },
    preserveState: {
        type: Boolean,
        default: false,
    },
    only: {
        type: Array,
        default: [],
    },
    showPerPage: {
        type: Boolean,
        default: false,
    },
    defaultPerPage: {
        type: Number,
        default: 100,
    },
});

const perPage = ref(props.defaultPerPage);
const perPageOptions = [
    10, 25, 50, 100, 250
];
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
    <div v-if="filteredLinks.length > 3" class="flex justify-between">
        <div>
            <Input type="select" v-model="perPage" class="w-20" @changed="perPageChanged">
                <option v-for="option in perPageOptions" :key="option" :value="option" :selected="option == perPage">
                    {{ option }}
                </option>
            </Input>
        </div>

        <nav aria-label="Page navigation">
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
                                'font-bold text-primary': link.active,
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
                                'font-bold text-primary': link.active,
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
