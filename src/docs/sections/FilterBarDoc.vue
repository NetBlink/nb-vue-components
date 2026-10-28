<script setup lang="ts">
import { computed } from 'vue';
import { FilterBar, useQueryFilters, Select, Checkbox, Badge, CodePreview, CollapsableSection, PropsTable, InlineCode } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const orders = [
    { id: 1041, customer: 'Ada Lovelace', status: 'paid', tags: ['web'], archived: false },
    { id: 1042, customer: 'Grace Hopper', status: 'pending', tags: ['phone'], archived: false },
    { id: 1043, customer: 'Alan Turing', status: 'paid', tags: ['web', 'gift'], archived: true },
    { id: 1044, customer: 'Katherine Johnson', status: 'cancelled', tags: ['phone', 'gift'], archived: false },
    { id: 1045, customer: 'Linus Torvalds', status: 'pending', tags: ['web'], archived: false },
];

// The docs aren't an Inertia app: visit: false keeps it to the URL while the list filters here.
const { filters, isFiltered, reset } = useQueryFilters({ search: '', status: 'all', tags: [] as string[], archived: false, per_page: 25 }, { visit: false });

const visible = computed(() =>
    orders.filter(
        (o) =>
            o.customer.toLowerCase().includes(filters.search.toLowerCase()) &&
            (filters.status === 'all' || o.status === filters.status) &&
            filters.tags.every((t) => o.tags.includes(t)) &&
            (filters.archived || !o.archived),
    ),
);
const toggleTag = (tag: string) => (filters.tags = filters.tags.includes(tag) ? filters.tags.filter((t) => t !== tag) : [...filters.tags, tag]);

const code = [
    "const { filters, isFiltered, reset } = useQueryFilters({ search: '', status: 'all', tags: [] as string[], archived: false });",
    '',
    '<FilterBar v-model:search="filters.search" :filtered="isFiltered" @clear="reset">',
    '    <Select v-model="filters.status" name="status" no-label :options="statusOptions" />',
    '    <Checkbox v-model="filters.archived" name="archived" no-label right-description="Include archived" />',
    '</FilterBar>',
    '',
    '<!-- ?search=ada&status=paid&tags[]=web&archived=1 → Laravel: $request->input(\'tags\') is an array -->',
];

const props = [
    { prop: 'search', type: 'string', default: '-', description: 'Search text (v-model:search); omit to hide the box' },
    { prop: 'placeholder', type: 'string', default: "'Search…'", description: 'Search box placeholder' },
    { prop: 'filtered', type: 'boolean', default: 'false', description: 'Show "Clear filters"' },
    { prop: 'clearLabel', type: 'string', default: "'Clear filters'", description: 'Clear button label' },
];
const options = [
    { prop: 'debounce', type: 'number', default: '300', description: 'Delay after typing in a text filter (ms)' },
    { prop: 'only', type: 'string[]', default: '-', description: 'Inertia partial reload: props to fetch' },
    { prop: 'visit', type: 'boolean', default: 'true', description: 'false: update the URL only, fetch nothing' },
];
</script>

<template>
    <section id="filter-bar">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Filtering</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                <InlineCode>useQueryFilters()</InlineCode> keeps filters in the URL the way Laravel reads them, and reloads the page with Inertia when they change.
                <InlineCode>FilterBar</InlineCode> lays out the search box, your controls and "Clear filters". Watch the address bar while you try it.
            </p>
            <FilterBar v-model:search="filters.search" :filtered="isFiltered" class="mb-4" @clear="reset">
                <div class="w-40">
                    <Select
                        v-model="filters.status"
                        name="status_filter"
                        no-label
                        :options="[
                            { value: 'all', label: 'All statuses' },
                            { value: 'paid', label: 'Paid' },
                            { value: 'pending', label: 'Pending' },
                            { value: 'cancelled', label: 'Cancelled' },
                        ]"
                    />
                </div>
                <div class="flex gap-1 pb-1.5">
                    <button
                        v-for="tag in ['web', 'phone', 'gift']"
                        :key="tag"
                        type="button"
                        :aria-pressed="filters.tags.includes(tag)"
                        class="rounded-full border px-2.5 py-1 text-xs"
                        :class="filters.tags.includes(tag) ? 'border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200' : 'border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-300'"
                        @click="toggleTag(tag)"
                    >
                        {{ tag }}
                    </button>
                </div>
                <div class="pb-1.5"><Checkbox v-model="filters.archived" name="archived_filter" no-label right-description="Include archived" /></div>
            </FilterBar>
            <p class="mb-2 font-mono text-xs break-all text-gray-500 dark:text-gray-400" data-filters>filters = {{ JSON.stringify(filters) }}</p>
            <ul class="mb-6 divide-y divide-gray-100 rounded-lg border border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
                <li v-for="o in visible" :key="o.id" class="flex items-center justify-between px-4 py-2 text-sm">
                    <span class="text-gray-800 dark:text-gray-100">#{{ o.id }} {{ o.customer }}</span>
                    <Badge :status="o.status" />
                </li>
                <li v-if="!visible.length" class="px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400">No orders match.</li>
            </ul>
            <CodePreview :code="code" />
            <CollapsableSection header="FilterBar Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
            <CollapsableSection header="useQueryFilters options" class="mt-4">
                <PropsTable :rows="options" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
