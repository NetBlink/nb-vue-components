<script setup lang="ts">
import { Section, PageHeader, Card, PrimaryButton, SecondaryButton, CodePreview, InlineCode } from '../../index';
import { NbIcon } from '../../icons';
import { faPlus, faDownload } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const breadcrumbs = [{ label: 'Home', href: '#' }, { label: 'Widgets', href: '#' }, { label: 'Edit Widget' }];

function handleCreate() {
    // demo-only handler
}

const snippet = [
    '<div class="min-h-screen bg-gray-100 p-4 dark:bg-gray-900">',
    '    <PageHeader',
    '        variant="bar"',
    "        :breadcrumbs=\"[{ label: 'Home', href: '/' }, { label: 'Widgets', href: '/widgets' }, { label: 'Edit Widget' }]\"",
    '    >',
    '        <template #actions>',
    '            <SecondaryButton>',
    '                <NbIcon :name="faDownload" class="mr-1.5 h-4 w-4" />',
    '                Export',
    '            </SecondaryButton>',
    '            <PrimaryButton @click="createWidget">',
    '                <NbIcon :name="faPlus" class="mr-1.5 h-4 w-4" />',
    '                New Widget',
    '            </PrimaryButton>',
    '        </template>',
    '    </PageHeader>',
    '',
    '    <Card padding="sm" class="mt-4">',
    '        <div class="space-y-4">',
    '            <Section header="Overview">',
    '                <p class="text-gray-600 dark:text-gray-400">Summary content goes here.</p>',
    '            </Section>',
    '',
    '            <Section header="Details">',
    '                <template #headerButton>',
    '                    <SecondaryButton size="sm">Edit</SecondaryButton>',
    '                </template>',
    '                <p class="text-gray-600 dark:text-gray-400">Detail content goes here.</p>',
    '            </Section>',
    '',
    '            <Section>',
    '                <p class="text-gray-600 dark:text-gray-400">A header-less section for freeform content.</p>',
    '            </Section>',
    '        </div>',
    '    </Card>',
    '</div>',
];
</script>

<template>
    <section id="block-page-shell">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Page Shell</h3>
        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                The page skeleton every app needs: a <InlineCode>PageHeader</InlineCode> bar (breadcrumbs plus right-aligned actions), a
                <InlineCode>Card</InlineCode> for the content, and a stack of <InlineCode>Section</InlineCode> components.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="min-h-[420px] rounded-lg bg-gray-100 p-4 dark:bg-gray-900">
                    <PageHeader variant="bar" :breadcrumbs="breadcrumbs">
                        <template #actions>
                            <SecondaryButton>
                                <NbIcon :name="faDownload" class="mr-1.5 h-4 w-4" />
                                Export
                            </SecondaryButton>
                            <PrimaryButton @click="handleCreate">
                                <NbIcon :name="faPlus" class="mr-1.5 h-4 w-4" />
                                New Widget
                            </PrimaryButton>
                        </template>
                    </PageHeader>

                    <Card padding="sm" class="mt-4">
                        <div class="space-y-4">
                            <Section header="Overview">
                                <p class="text-gray-600 dark:text-gray-400">Summary content goes here.</p>
                            </Section>

                            <Section header="Details">
                                <template #headerButton>
                                    <SecondaryButton size="sm">Edit</SecondaryButton>
                                </template>
                                <p class="text-gray-600 dark:text-gray-400">Detail content goes here.</p>
                            </Section>

                            <Section>
                                <p class="text-gray-600 dark:text-gray-400">A header-less section for freeform content.</p>
                            </Section>
                        </div>
                    </Card>
                </div>
            </div>
            <CodePreview :code="snippet" />
        </DocDemoCard>
    </section>
</template>
