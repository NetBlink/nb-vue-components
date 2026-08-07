<script setup lang="ts">
import { computed, ref } from 'vue';
import { NbIcon } from '../../icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
    Button,
    CodePreview,
    Input,
    NewModal,
    Pagination,
    PrimaryButton,
    SecondaryButton,
    Select,
    Stats,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

interface UserRow {
    id: number;
    name: string;
    email: string;
    plan: string;
    status: 'active' | 'pending' | 'archived';
    created: string;
}

const rows = ref<UserRow[]>([
    { id: 1, name: 'Ada Lovelace', email: 'ada@example.com', plan: 'Enterprise', status: 'active', created: '2024-01-12' },
    { id: 2, name: 'Grace Hopper', email: 'grace@example.com', plan: 'Pro', status: 'active', created: '2024-02-03' },
    { id: 3, name: 'Alan Turing', email: 'alan@example.com', plan: 'Pro', status: 'pending', created: '2024-02-19' },
    { id: 4, name: 'Katherine Johnson', email: 'katherine@example.com', plan: 'Starter', status: 'active', created: '2024-03-07' },
    { id: 5, name: 'Linus Torvalds', email: 'linus@example.com', plan: 'Starter', status: 'archived', created: '2024-03-21' },
    { id: 6, name: 'Barbara Liskov', email: 'barbara@example.com', plan: 'Enterprise', status: 'pending', created: '2024-04-02' },
]);

const search = ref('');
const status = ref('');

const statusOptions = [
    { value: '', label: 'All statuses' },
    { value: 'active', label: 'Active' },
    { value: 'pending', label: 'Pending' },
    { value: 'archived', label: 'Archived' },
];

const countBy = (name: string) => rows.value.filter((r) => r.status === name).length;

/*
 * ponytail: Stats keys its tiles by `value`, so two categories with an equal
 * count log a duplicate-key warning in dev. Harmless here; swap to DataTile
 * (keyed by name) if that ever matters.
 */
const stats = computed(() => [
    { name: 'all', label: 'All users', value: rows.value.length },
    { name: 'active', label: 'Active', value: countBy('active') },
    { name: 'pending', label: 'Pending', value: countBy('pending') },
    { name: 'archived', label: 'Archived', value: countBy('archived') },
]);

const visible = computed(() => {
    const q = search.value.trim().toLowerCase();
    return rows.value.filter(
        (r) => (!status.value || r.status === status.value) && (!q || `${r.name} ${r.email} ${r.plan}`.toLowerCase().includes(q))
    );
});

// Stats never emits null in the docs (selection is read from the query string),
// so the "all" tile is what clears the filter.
const filterByStat = (name: string | null) => {
    status.value = !name || name === 'all' ? '' : name;
};

const statusClass = (s: UserRow['status']) =>
    ({
        active: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
        pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
        archived: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
    })[s];

const remove = (id: number) => {
    rows.value = rows.value.filter((r) => r.id !== id);
};

// Create modal
const showCreate = ref(false);
const form = ref({ name: '', email: '', plan: 'Starter', status: 'pending' });

const openCreate = () => {
    form.value = { name: '', email: '', plan: 'Starter', status: 'pending' };
    showCreate.value = true;
};

const create = () => {
    if (!form.value.name.trim()) return;
    rows.value.unshift({
        id: Math.max(0, ...rows.value.map((r) => r.id)) + 1,
        name: form.value.name.trim(),
        email: form.value.email.trim() || 'new@example.com',
        plan: form.value.plan,
        status: form.value.status as UserRow['status'],
        created: new Date().toISOString().slice(0, 10),
    });
    showCreate.value = false;
};

// Static pagination links, shaped like a Laravel paginator payload.
const page = ref(1);
const links = computed(() => [
    { url: '?page=' + Math.max(1, page.value - 1), label: '&laquo;', active: false },
    { url: '?page=1', label: '1', active: page.value === 1 },
    { url: '?page=2', label: '2', active: page.value === 2 },
    { url: '?page=3', label: '3', active: page.value === 3 },
    { url: '?page=' + Math.min(3, page.value + 1), label: '&raquo;', active: false },
]);
const goToPage = (url: string) => {
    if (url) page.value = Number(new URLSearchParams(url.slice(1)).get('page')) || 1;
};

const snippet = [
    '<div class="mb-4 flex flex-wrap items-center justify-between gap-2">',
    '  <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Users</h2>',
    '  <SecondaryButton @click="showCreate = true">',
    '    <NbIcon :name="faPlus" class="mr-2 h-3 w-3" /> Create New',
    '  </SecondaryButton>',
    '</div>',
    '',
    '<Stats :stats="stats" statusName="status" @updateSearch="(s) => router.get(route(\'users.index\'), { status: s })" />',
    '',
    '<div class="my-4 flex flex-wrap items-end gap-2">',
    '  <div class="w-full sm:w-64">',
    '    <Input type="search" name="search" no-label placeholder="Search users…" v-model="filters.search" />',
    '  </div>',
    '  <div class="w-full sm:w-48">',
    '    <Select name="status" no-label :options="statusOptions" v-model="filters.status" />',
    '  </div>',
    '</div>',
    '',
    '<!-- Table renders its own overflow-x wrapper and Pagination from :links -->',
    '<Table :links="users.links" :total="users.total" hover bordered>',
    '  <Thead>',
    '    <Th sortable orderBy="name">User</Th>',
    '    <Th sortable orderBy="plan">Plan</Th>',
    '    <Th>Status</Th>',
    '    <Th sortable orderBy="created_at">Created</Th>',
    '    <Th class="w-0"><span class="sr-only">Actions</span></Th>',
    '  </Thead>',
    '  <Tbody :data="users.data" emptyMessage="No users match your filters.">',
    '    <Tr v-for="user in users.data" :key="user.id">',
    '      <!-- `label` is what the cell shows in the stacked mobile layout -->',
    '      <Td label="User">',
    '        <div class="font-medium text-gray-900 dark:text-gray-100">{{ user.name }}</div>',
    '        <div class="text-xs text-gray-500 dark:text-gray-400">{{ user.email }}</div>',
    '      </Td>',
    '      <Td label="Plan">{{ user.plan }}</Td>',
    '      <Td label="Status">',
    '        <span class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium capitalize" :class="statusClass(user.status)">',
    '          {{ user.status }}',
    '        </span>',
    '      </Td>',
    '      <Td label="Created" nowrap>',
    '        <span class="text-gray-500 dark:text-gray-400">{{ user.created_at }}</span>',
    '      </Td>',
    '      <Td>',
    '        <div class="flex justify-end gap-2">',
    '          <PrimaryButton size="xs" @click="edit(user)">Edit</PrimaryButton>',
    '          <Button theme="danger" size="xs" @click="destroy(user)">Delete</Button>',
    '        </div>',
    '      </Td>',
    '    </Tr>',
    '  </Tbody>',
    '</Table>',
    '',
    '<NewModal v-model:open="showCreate" title="Create user" description="Adds a row to the table above.">',
    '  <div class="space-y-4">',
    '    <Input :form="form" field="name" label="Name" required />',
    '    <Input :form="form" field="email" label="Email" type="email" />',
    '    <Select :form="form" field="plan" label="Plan" :options="[\'Starter\', \'Pro\', \'Enterprise\']" />',
    '  </div>',
    '  <template #footer>',
    '    <SecondaryButton @click="showCreate = false">Cancel</SecondaryButton>',
    '    <PrimaryButton :disabled="form.processing" @click="form.post(route(\'users.store\'))">Create</PrimaryButton>',
    '  </template>',
    '</NewModal>',
];
</script>

<template>
    <section id="block-index-page">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
            CRUD Index Page
        </h3>
        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                The canonical list screen: header action,
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">Stats</code> tiles doubling as filters, a search row, a
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">Table</code> with an actions column and empty state,
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">Pagination</code>, and a
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">NewModal</code> create form. Everything below is live — filter,
                search, delete and create rows.
            </p>

            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <!-- Header row -->
                <div class="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <h4 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Users</h4>
                    <SecondaryButton @click="openCreate">
                        <NbIcon :name="faPlus" class="mr-2 h-3 w-3" />
                        Create New
                    </SecondaryButton>
                </div>

                <!-- Stats strip: tiles filter the table -->
                <Stats :stats="stats" @updateSearch="filterByStat" />

                <!-- Search row -->
                <div class="my-4 flex flex-wrap items-end gap-2">
                    <div class="w-full sm:w-64">
                        <Input type="search" name="search" no-label placeholder="Search name, email or plan…" v-model="search" />
                    </div>
                    <div class="w-full sm:w-48">
                        <Select name="status" no-label :options="statusOptions" v-model="status" />
                    </div>
                    <button
                        v-if="status || search"
                        type="button"
                        class="text-primary-600 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-200 cursor-pointer px-2 py-2 text-sm"
                        @click="((status = ''), (search = ''))"
                    >
                        Clear filters
                    </button>
                    <span class="ml-auto self-center text-sm text-gray-500 dark:text-gray-400">
                        Showing {{ visible.length }} of {{ rows.length }}
                    </span>
                </div>

                <!-- Table -->
                <Table hover bordered>
                    <Thead>
                        <Th sortable orderBy="name">User</Th>
                        <Th sortable orderBy="plan">Plan</Th>
                        <Th>Status</Th>
                        <Th sortable orderBy="created">Created</Th>
                        <Th class="w-0"><span class="sr-only">Actions</span></Th>
                    </Thead>
                    <Tbody :data="visible" empty-message="No users match your filters.">
                        <Tr v-for="user in visible" :key="user.id">
                            <Td label="User">
                                <div class="font-medium text-gray-900 dark:text-gray-100">{{ user.name }}</div>
                                <div class="text-xs text-gray-500 dark:text-gray-400">{{ user.email }}</div>
                            </Td>
                            <Td label="Plan">{{ user.plan }}</Td>
                            <Td label="Status">
                                <span class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium capitalize" :class="statusClass(user.status)">
                                    {{ user.status }}
                                </span>
                            </Td>
                            <Td label="Created" nowrap>
                                <span class="text-gray-500 dark:text-gray-400">{{ user.created }}</span>
                            </Td>
                            <Td>
                                <div class="flex justify-end gap-2">
                                    <PrimaryButton type="button" size="xs">Edit</PrimaryButton>
                                    <Button theme="danger" size="xs" @click="remove(user.id)">Delete</Button>
                                </div>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>

                <!-- Pagination (static demo links) -->
                <div class="mt-4">
                    <Pagination :links="links" link-return @change="goToPage" />
                </div>
            </div>

            <!-- Create modal -->
            <NewModal v-model:open="showCreate" title="Create user" description="Adds a row to the table above.">
                <div class="space-y-4">
                    <Input name="new_name" label="Name" required v-model="form.name" />
                    <Input name="new_email" type="email" label="Email" v-model="form.email" />
                    <Select name="new_plan" label="Plan" :options="['Starter', 'Pro', 'Enterprise']" v-model="form.plan" />
                    <Select name="new_status" label="Status" :options="statusOptions.slice(1)" v-model="form.status" />
                </div>
                <template #footer>
                    <SecondaryButton @click="showCreate = false">Cancel</SecondaryButton>
                    <PrimaryButton type="button" :disabled="!form.name.trim()" @click="create">Create</PrimaryButton>
                </template>
            </NewModal>

            <CodePreview :code="snippet" />
        </DocDemoCard>
    </section>
</template>
