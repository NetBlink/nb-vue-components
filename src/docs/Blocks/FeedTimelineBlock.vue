<script setup lang="ts">
import { ref, computed } from 'vue';
import { Select, CodePreview } from '../../index';
import { NbIcon } from '../../icons';
import { faCheck, faTriangleExclamation, faCircleInfo, faXmark, faInbox } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

// --- Activity timeline -------------------------------------------------
const toneStyles: Record<string, { row: string; circle: string }> = {
    success: {
        row: 'border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/40',
        circle: 'bg-green-600 dark:bg-green-500',
    },
    warning: {
        row: 'border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40',
        circle: 'bg-amber-500 dark:bg-amber-500',
    },
    info: {
        row: 'border-primary-200 bg-primary-50 dark:border-primary-900 dark:bg-primary-950/40',
        circle: 'bg-primary-600 dark:bg-primary-500',
    },
    danger: {
        row: 'border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/40',
        circle: 'bg-red-600 dark:bg-red-500',
    },
};

const toneIcons: Record<string, any> = {
    success: faCheck,
    warning: faTriangleExclamation,
    info: faCircleInfo,
    danger: faXmark,
};

// Newest first.
const timeline = [
    { tone: 'success', title: 'Order delivered', detail: 'Signed for by R. Vermeer at the front desk.', time: '12 min ago' },
    { tone: 'info', title: 'Out for delivery', detail: 'Courier DHL Express picked up the parcel in Rotterdam.', time: '3 hours ago' },
    { tone: 'warning', title: 'Address needs review', detail: 'House number was missing and has been auto-corrected.', time: 'Yesterday' },
    { tone: 'danger', title: 'Payment failed', detail: 'The first attempt on card •••• 4242 was declined.', time: '2 days ago' },
    { tone: 'success', title: 'Order placed', detail: '3 items · Invoice #INV-2043 created.', time: '2 days ago' },
];

const timelineSnippet = [
    '<ol class="space-y-4">',
    '    <li',
    '        v-for="event in events"',
    '        :key="event.id"',
    '        class="flex items-start gap-3 rounded-lg border p-4 sm:gap-4 sm:p-6"',
    '        :class="tones[event.tone].row"',
    '    >',
    '        <span',
    '            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"',
    '            :class="tones[event.tone].circle"',
    '        >',
    '            <NbIcon :name="icons[event.tone]" class="h-5 w-5" />',
    '        </span>',
    '',
    '        <div class="min-w-0 flex-1">',
    '            <div class="flex flex-wrap items-baseline justify-between gap-x-4">',
    '                <p class="font-semibold text-gray-800 dark:text-gray-100">{{ event.title }}</p>',
    '                <time class="shrink-0 text-xs text-gray-500 dark:text-gray-400">{{ event.time }}</time>',
    '            </div>',
    '            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ event.detail }}</p>',
    '        </div>',
    '    </li>',
    '</ol>',
    '',
    '<!-- tones: { success: { row: \'border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/40\',',
    '                        circle: \'bg-green-600 dark:bg-green-500\' }, ... } -->',
];

// --- Log / event stream ------------------------------------------------
const pillStyles: Record<string, string> = {
    error: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300',
    warning: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
    info: 'bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-300',
    debug: 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
};

const logs = [
    { id: 9, at: '2026-08-07 14:02:11', type: 'error', payload: 'vend.dispense failed slot=A4 reason=motor_timeout' },
    { id: 8, at: '2026-08-07 14:02:03', type: 'info', payload: 'payment.captured amount=3.50 method=contactless' },
    { id: 7, at: '2026-08-07 13:58:47', type: 'debug', payload: 'session.start id=8f31c2 idle_ms=41200' },
    { id: 6, at: '2026-08-07 13:41:09', type: 'warning', payload: 'stock.low slot=B2 remaining=2' },
    { id: 5, at: '2026-08-07 13:12:55', type: 'info', payload: 'telemetry.push rows=142 bytes=18kb' },
    { id: 4, at: '2026-08-07 12:47:30', type: 'debug', payload: 'heartbeat rssi=-61 uptime=6d4h' },
    { id: 3, at: '2026-08-07 12:03:18', type: 'error', payload: 'network.timeout endpoint=/api/sync retries=3' },
];

const logType = ref('all');

const logTypeOptions = [
    { value: 'all', label: 'All types' },
    { value: 'error', label: 'Error' },
    { value: 'warning', label: 'Warning' },
    { value: 'info', label: 'Info' },
    { value: 'debug', label: 'Debug' },
    { value: 'critical', label: 'Critical' },
];

const filteredLogs = computed(() => (logType.value === 'all' ? logs : logs.filter((l) => l.type === logType.value)));

const logSnippet = [
    '<div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">',
    '    <div class="w-full sm:w-56">',
    '        <Select v-model="type" field="type" label="Type" :options="[',
    '            { value: \'all\', label: \'All types\' },',
    '            { value: \'error\', label: \'Error\' },',
    '            { value: \'info\', label: \'Info\' },',
    '        ]" />',
    '    </div>',
    '    <p class="text-sm text-gray-500 sm:pb-2 dark:text-gray-400">',
    '        {{ filtered.length }} on this page · {{ total }} total',
    '    </p>',
    '</div>',
    '',
    '<ol',
    '    v-if="filtered.length"',
    '    class="mt-4 max-h-72 divide-y divide-gray-200 overflow-y-auto rounded-lg border border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800"',
    '>',
    '    <li v-for="log in filtered" :key="log.id" class="flex flex-wrap items-start gap-x-3 gap-y-1 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700/40">',
    '        <span class="w-40 shrink-0 font-mono text-xs text-gray-500 dark:text-gray-400">{{ log.at }}</span>',
    '        <span class="w-20 shrink-0 rounded-full px-2 py-0.5 text-center text-xs font-medium" :class="pills[log.type]">',
    '            {{ log.type }}',
    '        </span>',
    '        <span class="w-full min-w-0 truncate font-mono text-xs text-gray-700 sm:w-auto sm:flex-1 dark:text-gray-300">{{ log.payload }}</span>',
    '    </li>',
    '</ol>',
    '',
    '<div v-else class="mt-4 rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800">',
    '    <NbIcon :name="faInbox" size="2xl" class="mx-auto mb-3 text-gray-400 dark:text-gray-500" />',
    '    <p class="text-sm text-gray-500 dark:text-gray-400">No log entries match this filter.</p>',
    '</div>',
];
</script>

<template>
    <section id="block-feed-timeline">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Feeds &amp; Timelines</h3>

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A reverse-chronological activity timeline: each event is a tinted row with a solid icon circle, a bold title with a
                right-aligned relative time, and a detail line. Pure markup plus NbIcon. Swap the tone map for your own statuses.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <ol class="space-y-4">
                    <li
                        v-for="(event, i) in timeline"
                        :key="i"
                        class="flex items-start gap-3 rounded-lg border p-4 sm:gap-4 sm:p-6"
                        :class="toneStyles[event.tone].row"
                    >
                        <span
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
                            :class="toneStyles[event.tone].circle"
                        >
                            <NbIcon :name="toneIcons[event.tone]" class="h-5 w-5" />
                        </span>

                        <div class="min-w-0 flex-1">
                            <div class="flex flex-wrap items-baseline justify-between gap-x-4">
                                <p class="font-semibold text-gray-800 dark:text-gray-100">{{ event.title }}</p>
                                <time class="shrink-0 text-xs text-gray-500 dark:text-gray-400">{{ event.time }}</time>
                            </div>
                            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ event.detail }}</p>
                        </div>
                    </li>
                </ol>
            </div>
            <CodePreview :code="timelineSnippet" filename="ActivityTimeline.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A dense log stream: a Select filters the rows by type, the count line reacts, and each row keeps a monospace timestamp
                column, a colored type pill, and a monospace payload. Pick a type with no entries to see the empty state.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                    <div class="w-full sm:w-56">
                        <Select v-model="logType" field="log_type" label="Type" :options="logTypeOptions" />
                    </div>
                    <p class="text-sm text-gray-500 sm:pb-2 dark:text-gray-400">
                        {{ filteredLogs.length }} on this page · {{ logs.length }} total
                    </p>
                </div>

                <ol
                    v-if="filteredLogs.length"
                    class="mt-4 max-h-72 divide-y divide-gray-200 overflow-y-auto rounded-lg border border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800"
                >
                    <li
                        v-for="log in filteredLogs"
                        :key="log.id"
                        class="flex flex-wrap items-start gap-x-3 gap-y-1 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700/40"
                    >
                        <span class="w-40 shrink-0 font-mono text-xs text-gray-500 dark:text-gray-400">{{ log.at }}</span>
                        <span class="w-20 shrink-0 rounded-full px-2 py-0.5 text-center text-xs font-medium" :class="pillStyles[log.type]">
                            {{ log.type }}
                        </span>
                        <span class="w-full min-w-0 truncate font-mono text-xs text-gray-700 sm:w-auto sm:flex-1 dark:text-gray-300">{{ log.payload }}</span>
                    </li>
                </ol>

                <div
                    v-else
                    class="mt-4 rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800"
                >
                    <NbIcon :name="faInbox" size="2xl" class="mx-auto mb-3 text-gray-400 dark:text-gray-500" />
                    <p class="text-sm text-gray-500 dark:text-gray-400">No log entries match this filter.</p>
                </div>
            </div>
            <CodePreview :code="logSnippet" filename="LogStream.vue" />
        </DocDemoCard>
    </section>
</template>
