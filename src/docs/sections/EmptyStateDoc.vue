<script setup lang="ts">
import { EmptyState, PrimaryButton, SecondaryButton, Card, CodePreview, CollapsableSection, PropsTable } from '../../index';
import { faFolderOpen, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const code = [
    '<EmptyState :icon="faFolderOpen" title="No projects yet" description="Projects you create or are invited to show up here.">',
    '    <PrimaryButton>New project</PrimaryButton>',
    '</EmptyState>',
    '',
    '<!-- One line, inside a list or card -->',
    '<EmptyState compact :icon="faMagnifyingGlass" title="No results for “invoice 2043”" />',
];

const props = [
    { prop: 'icon', type: 'IconLike', default: '-', description: 'Icon above the title (in compact mode, before the text)' },
    { prop: 'title', type: 'string', default: '-', description: 'Title, or the whole message in compact mode' },
    { prop: 'description', type: 'string', default: '-', description: 'Short explanation under the title' },
    { prop: 'compact', type: 'boolean', default: 'false', description: 'One-line form for lists, tables and cards' },
];
</script>

<template>
    <section id="empty-state">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">EmptyState</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                What to show when there is nothing to show yet: an icon, a title, one line of explanation and the action that fixes it.
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">compact</code> is the one-line "No X found" form.
            </p>
            <div class="mb-6 grid items-start gap-4 md:grid-cols-2">
                <Card padding="none">
                    <EmptyState :icon="faFolderOpen" title="No projects yet" description="Projects you create or are invited to show up here.">
                        <SecondaryButton size="sm">Import</SecondaryButton>
                        <PrimaryButton size="sm">New project</PrimaryButton>
                    </EmptyState>
                </Card>
                <Card padding="none">
                    <EmptyState compact :icon="faMagnifyingGlass" title="No results for “invoice 2043”" />
                </Card>
            </div>
            <CodePreview :code="code" />
            <CollapsableSection header="EmptyState Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
