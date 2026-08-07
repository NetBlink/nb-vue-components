<script setup lang="ts">
import { ref } from 'vue';
import { Switch, Spinner, SecondaryButton, CodePreview } from '../../index';
import { NbIcon } from '../../icons';
import { faArrowUp, faArrowDown, faUsers, faCartShopping, faCreditCard, faChartLine, faCircleCheck, faTriangleExclamation, faUserPlus, faInbox } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

// Demo-only toggle: flips every card into its skeleton / spinner state.
const loading = ref(false);

const stats = [
    { label: 'Active Users', value: '8,412', delta: 12.4, icon: faUsers, tile: 'bg-primary-100 text-primary-600 dark:bg-primary-500/20 dark:text-primary-300' },
    { label: 'Orders', value: '1,203', delta: 4.1, icon: faCartShopping, tile: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300' },
    { label: 'Revenue', value: '€94,820', delta: -2.8, icon: faCreditCard, tile: 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-300' },
    { label: 'Conversion', value: '3.9%', delta: 0.6, icon: faChartLine, tile: 'bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-300' },
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

const defaultActivity = [
    { id: 1, message: 'Order #4821 was paid', time: '2 minutes ago', icon: faCircleCheck, bubble: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300' },
    { id: 2, message: 'Nina Bakker created an account', time: '18 minutes ago', icon: faUserPlus, bubble: 'bg-primary-100 text-primary-600 dark:bg-primary-500/20 dark:text-primary-300' },
    { id: 3, message: 'Payment for #4809 failed', time: '1 hour ago', icon: faTriangleExclamation, bubble: 'bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-300' },
    { id: 4, message: 'Stock sync completed', time: '3 hours ago', icon: faCircleCheck, bubble: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300' },
];

const activity = ref([...defaultActivity]);

const snippet = [
    '<!-- KPI grid: skeletons while loading, tinted icon tile + signed delta when loaded -->',
    '<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">',
    '    <div v-for="stat in stats" :key="stat.label" class="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">',
    '        <div v-if="loading" class="animate-pulse space-y-3">',
    '            <div class="h-3 w-24 rounded bg-gray-200 dark:bg-gray-700"></div>',
    '            <div class="h-7 w-32 rounded bg-gray-200 dark:bg-gray-700"></div>',
    '            <div class="h-3 w-20 rounded bg-gray-200 dark:bg-gray-700"></div>',
    '        </div>',
    '        <div v-else class="flex items-start justify-between">',
    '            <div>',
    '                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ stat.label }}</p>',
    '                <p class="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">{{ stat.value }}</p>',
    '                <p class="mt-1 flex items-center gap-1 text-sm font-medium"',
    '                   :class="stat.delta >= 0 ? \'text-green-600 dark:text-green-400\' : \'text-red-600 dark:text-red-400\'">',
    '                    <NbIcon :name="stat.delta >= 0 ? faArrowUp : faArrowDown" class="h-3 w-3" />',
    '                    {{ stat.delta >= 0 ? \'+\' : \'\' }}{{ stat.delta }}%',
    '                </p>',
    '            </div>',
    '            <div class="rounded-lg p-3" :class="stat.tile"><NbIcon :name="stat.icon" class="h-5 w-5" /></div>',
    '        </div>',
    '    </div>',
    '</div>',
    '',
    '<div class="mt-6 grid gap-6 lg:grid-cols-3">',
    '    <!-- Chart card: plain flex of rounded bars with px heights, no chart library -->',
    '    <div class="rounded-lg border border-gray-200 bg-white p-5 lg:col-span-2 dark:border-gray-700 dark:bg-gray-800">',
    '        <h3 class="text-base font-semibold text-gray-800 dark:text-gray-100">Orders this week</h3>',
    '        <div v-if="loading" class="flex h-48 items-center justify-center"><Spinner size="lg" /></div>',
    '        <div v-else class="mt-6 flex h-48 items-end gap-1 sm:gap-3">',
    '            <div v-for="bar in bars" :key="bar.day" class="flex min-w-0 flex-1 flex-col items-center gap-2">',
    '                <div class="bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-300 w-full rounded-t transition-all"',
    '                     :style="{ height: bar.height * 1.6 + \'px\' }"></div>',
    '                <span class="text-xs text-gray-500 dark:text-gray-400">{{ bar.day }}</span>',
    '            </div>',
    '        </div>',
    '    </div>',
    '',
    '    <!-- Activity feed: bordered header, icon-bubble rows, empty state -->',
    '    <div class="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">',
    '        <div class="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-700">',
    '            <div>',
    '                <h3 class="text-base font-semibold text-gray-800 dark:text-gray-100">Recent Activity</h3>',
    '                <p class="text-xs text-gray-500 dark:text-gray-400">Last 24 hours</p>',
    '            </div>',
    '            <SecondaryButton size="xs" @click="activity = []">Clear</SecondaryButton>',
    '        </div>',
    '        <ul v-if="activity.length" class="divide-y divide-gray-100 dark:divide-gray-700">',
    '            <li v-for="item in activity" :key="item.id" class="flex gap-3 px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/40">',
    '                <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full" :class="item.bubble">',
    '                    <NbIcon :name="item.icon" class="h-4 w-4" />',
    '                </span>',
    '                <div class="min-w-0">',
    '                    <p class="truncate text-sm text-gray-800 dark:text-gray-100">{{ item.message }}</p>',
    '                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ item.time }}</p>',
    '                </div>',
    '            </li>',
    '        </ul>',
    '        <div v-else class="px-5 py-10 text-center">',
    '            <NbIcon :name="faInbox" size="2xl" class="mx-auto text-gray-400 dark:text-gray-500" />',
    '            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">No activity yet</p>',
    '        </div>',
    '    </div>',
    '</div>',
];
</script>

<template>
    <section id="block-dashboard">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Dashboard Overview</h3>

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A dashboard landing composition: a KPI stat-card grid with signed deltas and tinted icon tiles, a bar chart card, and an activity
                feed panel. The chart is a flex row of rounded bars with pixel heights; no chart library is bundled with this
                package. Flip the Loading switch to see the skeleton cards and the Spinner-guarded chart; Clear empties the feed to its empty state.
            </p>

            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="mb-4 flex justify-end">
                    <Switch v-model="loading" noLabel rightDescription="Loading state" />
                </div>

                <!-- KPI grid -->
                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div
                        v-for="stat in stats"
                        :key="stat.label"
                        class="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
                    >
                        <div v-if="loading" class="animate-pulse space-y-3">
                            <div class="h-3 w-24 rounded bg-gray-200 dark:bg-gray-700"></div>
                            <div class="h-7 w-32 rounded bg-gray-200 dark:bg-gray-700"></div>
                            <div class="h-3 w-20 rounded bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                        <div v-else class="flex items-start justify-between">
                            <div>
                                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ stat.label }}</p>
                                <p class="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">{{ stat.value }}</p>
                                <p
                                    class="mt-1 flex items-center gap-1 text-sm font-medium"
                                    :class="stat.delta >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'"
                                >
                                    <NbIcon :name="stat.delta >= 0 ? faArrowUp : faArrowDown" class="h-3 w-3" />
                                    {{ stat.delta >= 0 ? '+' : '' }}{{ stat.delta }}%
                                </p>
                            </div>
                            <div class="rounded-lg p-3" :class="stat.tile">
                                <NbIcon :name="stat.icon" class="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Lower row: chart + activity feed -->
                <div class="mt-6 grid gap-6 lg:grid-cols-3">
                    <div class="rounded-lg border border-gray-200 bg-white p-5 lg:col-span-2 dark:border-gray-700 dark:bg-gray-800">
                        <div class="flex flex-wrap items-center justify-between gap-1">
                            <h4 class="text-base font-semibold text-gray-800 dark:text-gray-100">Orders this week</h4>
                            <span class="text-xs text-gray-500 dark:text-gray-400">CSS only, no chart library</span>
                        </div>

                        <div v-if="loading" class="flex h-48 items-center justify-center">
                            <Spinner size="lg" />
                        </div>
                        <div v-else class="mt-6 flex h-48 items-end gap-1 sm:gap-3">
                            <div v-for="bar in bars" :key="bar.day" class="flex min-w-0 flex-1 flex-col items-center gap-2">
                                <div
                                    class="bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-300 w-full rounded-t transition-all"
                                    :style="{ height: bar.height * 1.6 + 'px' }"
                                ></div>
                                <span class="text-xs text-gray-500 dark:text-gray-400">{{ bar.day }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                        <div class="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-700">
                            <div>
                                <h4 class="text-base font-semibold text-gray-800 dark:text-gray-100">Recent Activity</h4>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Last 24 hours</p>
                            </div>
                            <SecondaryButton size="xs" @click="activity = []">Clear</SecondaryButton>
                        </div>

                        <ul v-if="activity.length" class="divide-y divide-gray-100 dark:divide-gray-700">
                            <li
                                v-for="item in activity"
                                :key="item.id"
                                class="flex gap-3 px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/40"
                            >
                                <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full" :class="item.bubble">
                                    <NbIcon :name="item.icon" class="h-4 w-4" />
                                </span>
                                <div class="min-w-0">
                                    <p class="truncate text-sm text-gray-800 dark:text-gray-100">{{ item.message }}</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ item.time }}</p>
                                </div>
                            </li>
                        </ul>
                        <div v-else class="px-5 py-10 text-center">
                            <NbIcon :name="faInbox" size="2xl" class="mx-auto text-gray-400 dark:text-gray-500" />
                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">No activity yet</p>
                            <button
                                type="button"
                                class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mt-3 text-sm"
                                @click="activity = [...defaultActivity]"
                            >
                                Restore demo data
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <CodePreview :code="snippet" filename="DashboardOverview.vue" />
        </DocDemoCard>
    </section>
</template>
