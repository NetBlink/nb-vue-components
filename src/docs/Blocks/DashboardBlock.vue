<script setup lang="ts">
import { ref } from 'vue';
import { Switch, Spinner, SecondaryButton, Card, DataTile, IconCircle, Skeleton, EmptyState, CodePreview } from '../../index';
import { faUsers, faCartShopping, faCreditCard, faChartLine, faCircleCheck, faTriangleExclamation, faUserPlus, faInbox } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

// Demo-only toggle: flips every card into its skeleton / spinner state.
const loading = ref(false);

const stats: { label: string; value: string; delta: number; icon: typeof faUsers; variant: 'primary' | 'success' | 'warning' | 'info' }[] = [
    { label: 'Active Users', value: '8,412', delta: 12.4, icon: faUsers, variant: 'primary' },
    { label: 'Orders', value: '1,203', delta: 4.1, icon: faCartShopping, variant: 'success' },
    { label: 'Revenue', value: '€94,820', delta: -2.8, icon: faCreditCard, variant: 'warning' },
    { label: 'Conversion', value: '3.9%', delta: 0.6, icon: faChartLine, variant: 'info' },
];

// Bar heights in px. A percentage would resolve against the label+bar column,
// which has no definite height of its own, and collapse to 0.
const bars = [
    { day: 'Mon', height: 42 },
    { day: 'Tue', height: 61 },
    { day: 'Wed', height: 38 },
    { day: 'Thu', height: 78 },
    { day: 'Fri', height: 95 },
    { day: 'Sat', height: 54 },
    { day: 'Sun', height: 30 },
];

const defaultActivity: { id: number; message: string; time: string; icon: typeof faUsers; variant: 'primary' | 'success' | 'danger' }[] = [
    { id: 1, message: 'Order #4821 was paid', time: '2 minutes ago', icon: faCircleCheck, variant: 'success' },
    { id: 2, message: 'Nina Bakker created an account', time: '18 minutes ago', icon: faUserPlus, variant: 'primary' },
    { id: 3, message: 'Payment for #4809 failed', time: '1 hour ago', icon: faTriangleExclamation, variant: 'danger' },
    { id: 4, message: 'Stock sync completed', time: '3 hours ago', icon: faCircleCheck, variant: 'success' },
];

const activity = ref([...defaultActivity]);

const trendOf = (delta: number) => ({ value: `${delta >= 0 ? '+' : ''}${delta}%`, direction: delta >= 0 ? ('up' as const) : ('down' as const) });

const snippet = [
    '<!-- KPI grid: skeleton cards while loading, DataTile with icon chip + trend when loaded -->',
    '<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">',
    '    <template v-for="stat in stats" :key="stat.label">',
    '        <Card v-if="loading"><Skeleton /></Card>',
    '        <DataTile',
    '            v-else',
    '            :value="stat.value"',
    '            :label="stat.label"',
    '            :icon="stat.icon"',
    '            :iconVariant="stat.variant"',
    "            :trend=\"{ value: `${stat.delta >= 0 ? '+' : ''}${stat.delta}%`, direction: stat.delta >= 0 ? 'up' : 'down' }\"",
    '        />',
    '    </template>',
    '</div>',
    '',
    '<div class="mt-6 grid gap-6 lg:grid-cols-3">',
    '    <!-- Chart card: plain flex of rounded bars with px heights, no chart library -->',
    '    <Card title="Orders this week" class="lg:col-span-2">',
    '        <div v-if="loading" class="flex h-48 items-center justify-center"><Spinner size="lg" /></div>',
    '        <div v-else class="flex h-48 items-end gap-1 sm:gap-3">',
    '            <div v-for="bar in bars" :key="bar.day" class="flex min-w-0 flex-1 flex-col items-center gap-2">',
    '                <div class="bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-300 w-full rounded-t transition-all"',
    "                     :style=\"{ height: bar.height * 1.6 + 'px' }\"></div>",
    '                <span class="text-xs text-gray-500 dark:text-gray-400">{{ bar.day }}</span>',
    '            </div>',
    '        </div>',
    '    </Card>',
    '',
    '    <!-- Activity feed: header band, icon rows, empty state -->',
    "    <Card title=\"Recent Activity\" description=\"Last 24 hours\" padding=\"sm\" :ui=\"{ header: 'border-b border-gray-200 pb-4 dark:border-gray-700', body: 'p-0' }\">",
    '        <template #actions>',
    '            <SecondaryButton size="xs" @click="activity = []">Clear</SecondaryButton>',
    '        </template>',
    '        <ul v-if="activity.length" class="divide-y divide-gray-100 dark:divide-gray-700">',
    '            <li v-for="item in activity" :key="item.id" class="flex gap-3 px-4 py-3">',
    '                <IconCircle :icon="item.icon" :variant="item.variant" size="sm" />',
    '                <div class="min-w-0">',
    '                    <p class="truncate text-sm text-gray-800 dark:text-gray-100">{{ item.message }}</p>',
    '                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ item.time }}</p>',
    '                </div>',
    '            </li>',
    '        </ul>',
    '        <EmptyState v-else :icon="faInbox" title="No activity yet" />',
    '    </Card>',
    '</div>',
];
</script>

<template>
    <section id="block-dashboard">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Dashboard Overview</h3>

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A dashboard landing composition: a KPI grid of <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">DataTile</code>s with icon
                chips and signed trends, a bar chart <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">Card</code>, and an activity feed
                panel. The chart is a flex row of rounded bars with pixel heights; no chart library is bundled with this package. Flip the Loading
                switch to see the skeleton cards and the Spinner-guarded chart; Clear empties the feed to its empty state.
            </p>

            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="mb-4 flex justify-end">
                    <Switch v-model="loading" noLabel rightDescription="Loading state" />
                </div>

                <!-- KPI grid -->
                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <template v-for="stat in stats" :key="stat.label">
                        <Card v-if="loading"><Skeleton /></Card>
                        <DataTile v-else :value="stat.value" :label="stat.label" :icon="stat.icon" :iconVariant="stat.variant" :trend="trendOf(stat.delta)" />
                    </template>
                </div>

                <!-- Lower row: chart + activity feed -->
                <div class="mt-6 grid gap-6 lg:grid-cols-3">
                    <Card title="Orders this week" class="lg:col-span-2">
                        <template #actions>
                            <span class="text-xs text-gray-500 dark:text-gray-400">CSS only, no chart library</span>
                        </template>
                        <div v-if="loading" class="flex h-48 items-center justify-center">
                            <Spinner size="lg" />
                        </div>
                        <div v-else class="flex h-48 items-end gap-1 sm:gap-3">
                            <div v-for="bar in bars" :key="bar.day" class="flex min-w-0 flex-1 flex-col items-center gap-2">
                                <div
                                    class="bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-300 w-full rounded-t transition-all"
                                    :style="{ height: bar.height * 1.6 + 'px' }"
                                ></div>
                                <span class="text-xs text-gray-500 dark:text-gray-400">{{ bar.day }}</span>
                            </div>
                        </div>
                    </Card>

                    <Card
                        title="Recent Activity"
                        description="Last 24 hours"
                        padding="sm"
                        :ui="{ header: 'border-b border-gray-200 pb-4 dark:border-gray-700', body: 'p-0' }"
                    >
                        <template #actions>
                            <SecondaryButton size="xs" @click="activity = []">Clear</SecondaryButton>
                        </template>
                        <ul v-if="activity.length" class="divide-y divide-gray-100 dark:divide-gray-700">
                            <li v-for="item in activity" :key="item.id" class="flex gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/40">
                                <IconCircle :icon="item.icon" :variant="item.variant" size="sm" class="shrink-0" />
                                <div class="min-w-0">
                                    <p class="truncate text-sm text-gray-800 dark:text-gray-100">{{ item.message }}</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ item.time }}</p>
                                </div>
                            </li>
                        </ul>
                        <EmptyState v-else :icon="faInbox" title="No activity yet">
                            <SecondaryButton size="sm" @click="activity = [...defaultActivity]">Restore demo data</SecondaryButton>
                        </EmptyState>
                    </Card>
                </div>
            </div>

            <CodePreview :code="snippet" filename="DashboardOverview.vue" />
        </DocDemoCard>
    </section>
</template>
