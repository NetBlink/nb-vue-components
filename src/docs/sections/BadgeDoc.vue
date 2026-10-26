<script setup lang="ts">
import { Badge, CodePreview, CollapsableSection, PropsTable } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const variants = ['neutral', 'primary', 'accent', 'success', 'warning', 'danger', 'info'] as const;
const orders = [
    { id: 1042, status: 'paid' },
    { id: 1043, status: 'pending' },
    { id: 1044, status: 'in_progress' },
    { id: 1045, status: 'cancelled' },
    { id: 1046, status: 'refunded' },
];

const code = [
    '<Badge variant="success">Active</Badge>',
    '<Badge variant="warning" dot>Syncing</Badge>',
    '<Badge size="md" variant="info">Beta</Badge>',
    '',
    '<!-- Colour and label from the status word -->',
    '<Badge :status="order.status" />',
    '',
    '// app.js: add or override status words',
    'app.use(Componentsnb, {',
    "    badge: { statuses: { refunded: 'info', on_hold: 'warning' } },",
    '});',
];

const props = [
    { prop: 'variant', type: "'neutral' | 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'info'", default: "'neutral'", description: 'Colour. Ignored when status is set. Add your own through the variants config' },
    { prop: 'size', type: "'sm' | 'md'", default: "'sm'", description: 'Size' },
    { prop: 'dot', type: 'boolean', default: 'false', description: 'Leading status dot' },
    { prop: 'status', type: 'string', default: '-', description: 'A status word: picks the colour from the status map and becomes the capitalised label' },
    { prop: 'label', type: 'string', default: '-', description: 'Text, when not using the default slot' },
];
</script>

<template>
    <section id="badge">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Badge</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                Small rounded label for statuses, counts and tags. Pass
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">status</code> and it colours and labels itself from the status map, so
                there is no <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">getStatusColor()</code> to write. Unknown words stay neutral.
            </p>

            <div class="mb-6 flex flex-wrap items-center gap-2">
                <Badge v-for="v in variants" :key="v" :variant="v">{{ v }}</Badge>
            </div>
            <div class="mb-6 flex flex-wrap items-center gap-2">
                <Badge v-for="v in variants" :key="v" :variant="v" dot size="md">{{ v }}</Badge>
            </div>

            <div class="mt-8 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">From a status</div>
            <div class="mb-6 flex flex-wrap items-center gap-3">
                <span v-for="order in orders" :key="order.id" class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    #{{ order.id }} <Badge :status="order.status" />
                </span>
            </div>
            <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
                Built-in words include paid, active, approved, completed (success), pending, processing, in progress, draft (warning), failed, rejected,
                cancelled, overdue (danger) and new (info). Add your own with the
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">badge.statuses</code> plugin option.
            </p>

            <CodePreview :code="code" />
            <CollapsableSection header="Badge Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
