<script setup lang="ts">
import { IconButton, CopyButton, CodePreview, CollapsableSection, PropsTable } from '../../index';
import { faPen, faTrash, faPlus, faArrowsRotate, faDownload } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const themes = ['ghost', 'ghost-danger', 'secondary', 'primary', 'success', 'danger'] as const;
const apiKey = 'nb_live_7f3a9c21e4b84d0f';

const code = [
    '<IconButton :icon="faPen" label="Edit" />',
    '<IconButton :icon="faTrash" label="Delete invoice" theme="ghost-danger" @click="remove" />',
    '<IconButton :icon="faPlus" label="Add item" theme="primary" size="lg" />',
    "<IconButton :icon=\"faDownload\" label=\"Download\" :href=\"route('invoices.pdf', invoice)\" />",
    '',
    '<CopyButton :value="apiKey" label="Copy API key" />',
];

const props = [
    { prop: 'icon', type: 'IconLike', default: '-', description: 'The icon', required: true },
    { prop: 'label', type: 'string', default: '-', description: 'What the button does: the accessible name and hover title. Warns in development when missing', required: true },
    { prop: 'theme', type: "'ghost' | 'ghost-danger' | 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info'", default: "'ghost'", description: 'Look; ghost is the quiet toolbar style' },
    { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", default: "'md'", description: 'Size' },
    { prop: 'href', type: 'string', default: '-', description: 'Render an Inertia link instead of a button' },
    { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disabled' },
];
const copyProps = [
    { prop: 'value', type: 'string | (() => string)', default: '-', description: 'Text to copy', required: true },
    { prop: 'label', type: 'string', default: "'Copy'", description: 'Accessible name of the default button' },
    { prop: 'copiedLabel', type: 'string', default: "'Copied'", description: 'Announced to screen readers after copying' },
    { prop: 'timeout', type: 'number', default: '2000', description: 'How long the copied state lasts (ms)' },
    { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg'", default: "'sm'", description: 'Size of the default button' },
    { prop: 'theme', type: "'ghost' | 'secondary' | 'primary'", default: "'ghost'", description: 'Theme of the default button' },
];
</script>

<template>
    <section id="icon-button">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">IconButton and CopyButton</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                Buttons that show only an icon. <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">label</code> is required: it is what screen
                readers announce and what the hover title shows.
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">CopyButton</code> copies a value and confirms with a check.
            </p>
            <div class="mb-6 flex flex-wrap items-center gap-3">
                <IconButton v-for="t in themes" :key="t" :icon="t === 'ghost-danger' || t === 'danger' ? faTrash : faPen" :label="`${t} button`" :theme="t" />
                <IconButton :icon="faPlus" label="Add item" theme="primary" size="lg" />
                <IconButton :icon="faArrowsRotate" label="Refresh" size="sm" />
                <IconButton :icon="faPen" label="Edit (disabled)" disabled />
            </div>
            <div class="mb-6 flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 font-mono text-sm dark:border-gray-700 dark:bg-gray-800">
                <span class="flex-1 truncate text-gray-700 dark:text-gray-200">{{ apiKey }}</span>
                <CopyButton :value="apiKey" label="Copy API key" />
            </div>
            <CodePreview :code="code" />
            <CollapsableSection header="IconButton Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
            <CollapsableSection header="CopyButton Props" class="mt-4">
                <PropsTable :rows="copyProps" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
