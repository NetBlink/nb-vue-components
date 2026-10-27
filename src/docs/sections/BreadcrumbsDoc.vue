<script setup lang="ts">
import { Breadcrumbs, CodePreview, CollapsableSection, PropsTable, InlineCode } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const trail = [
    { label: 'Dashboard', href: '#' },
    { label: 'Customers', href: '#' },
    { label: 'Acme Ltd', href: '#' },
    { label: 'Invoices', href: '#' },
    { label: 'INV-2043' },
];

const code = [
    '<Breadcrumbs :items="[',
    "    { label: 'Customers', href: route('customers.index') },",
    "    { label: customer.name, href: route('customers.show', customer) },",
    "    { label: 'Invoices' },",
    ']" />',
    '',
    '<!-- Hide the middle on small screens -->',
    '<Breadcrumbs :items="trail" collapse />',
];

const props = [
    { prop: 'items', type: '{ label, href? }[]', default: '-', description: 'The trail, first to current. Items with href become Inertia links; the last is the current page', required: true },
    { prop: 'collapse', type: 'boolean', default: 'false', description: 'On small screens show only the first and the last two items' },
];
</script>

<template>
    <section id="breadcrumbs">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Breadcrumbs</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                The trail of links to the current page, marked up as a breadcrumb landmark with the last item as the current page.
                <InlineCode>PageHeader</InlineCode> renders one from its
                <InlineCode>breadcrumbs</InlineCode> prop. Change the separator with the
                <InlineCode>#separator</InlineCode> slot.
            </p>
            <div class="mb-6 space-y-4">
                <Breadcrumbs :items="trail" />
                <Breadcrumbs :items="trail" collapse />
                <Breadcrumbs :items="trail.slice(0, 3)">
                    <template #separator>›</template>
                </Breadcrumbs>
            </div>
            <CodePreview :code="code" />
            <CollapsableSection header="Breadcrumbs Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
