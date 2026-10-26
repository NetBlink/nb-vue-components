<script setup lang="ts">
import { PageHeader, Badge, PrimaryButton, SecondaryButton, CodePreview, CollapsableSection, PropsTable } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const crumbs = [
    { label: 'Customers', href: '#' },
    { label: 'Acme Ltd', href: '#' },
    { label: 'Invoices' },
];

const code = [
    '<PageHeader',
    '    title="Invoices"',
    '    description="Everything billed to Acme Ltd."',
    '    :breadcrumbs="crumbs"',
    "    :back=\"route('customers.show', customer)\"",
    '>',
    '    <template #meta><Badge status="active" dot /></template>',
    '    <template #actions>',
    '        <SecondaryButton>Export</SecondaryButton>',
    '        <PrimaryButton>New invoice</PrimaryButton>',
    '    </template>',
    '</PageHeader>',
    '',
    '<!-- The compact bar admin screens use (sticky is optional and separate) -->',
    '<PageHeader variant="bar" :breadcrumbs="crumbs">',
    '    <template #actions><PrimaryButton size="sm">New invoice</PrimaryButton></template>',
    '</PageHeader>',
    '',
    '/* Clear a fixed banner above a sticky header */',
    ':root { --nb-sticky-offset: 3.5rem; }',
];

const props = [
    { prop: 'title', type: 'string', default: '-', description: 'Page title' },
    { prop: 'description', type: 'string', default: '-', description: 'Text under the title' },
    { prop: 'breadcrumbs', type: '{ label, href? }[]', default: '-', description: 'Breadcrumb trail, rendered with Breadcrumbs' },
    { prop: 'back', type: 'string', default: '-', description: 'URL for a "Back" link shown instead of the breadcrumbs on small screens' },
    { prop: 'variant', type: "'default' | 'bar'", default: "'default'", description: 'Title block, or the compact bordered breadcrumb/actions bar' },
    { prop: 'sticky', type: 'boolean', default: 'false', description: 'Stick to the top while scrolling, offset by --nb-sticky-offset' },
    { prop: 'backLabel', type: 'string', default: "'Back'", description: 'Text of the mobile back link' },
];
const slots = [
    { prop: 'actions', type: 'slot', default: '-', description: 'Buttons on the right' },
    { prop: 'meta', type: 'slot', default: '-', description: 'Badges or details under the title (in the bar, beside the actions)' },
    { prop: 'title', type: 'slot', default: '-', description: 'Replaces the title' },
    { prop: 'default', type: 'slot', default: '-', description: 'Extra content in the main column' },
];
</script>

<template>
    <section id="page-header">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">PageHeader</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                The top of a page: breadcrumbs, title, description and actions, with a mobile "Back" link. The
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">bar</code> variant is the compact bordered strip many admin screens use.
            </p>
            <div class="mb-6 space-y-8">
                <PageHeader title="Invoices" description="Everything billed to Acme Ltd." :breadcrumbs="crumbs" back="#">
                    <template #meta><Badge status="active" dot /></template>
                    <template #actions>
                        <SecondaryButton>Export</SecondaryButton>
                        <PrimaryButton>New invoice</PrimaryButton>
                    </template>
                </PageHeader>
                <PageHeader variant="bar" :breadcrumbs="crumbs">
                    <template #actions><PrimaryButton size="sm">New invoice</PrimaryButton></template>
                </PageHeader>
            </div>
            <CodePreview :code="code" />
            <CollapsableSection header="PageHeader Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
            <CollapsableSection header="PageHeader Slots" class="mt-4">
                <PropsTable :rows="slots" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
