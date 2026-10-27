<script setup lang="ts">
import { ref } from 'vue';
import { AttachmentList, CodePreview, CollapsableSection, PropsTable, InlineCode, type AttachmentItem } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const files = ref<AttachmentItem[]>([
    { name: 'invoice-2043.pdf', size: 13 * 1024, url: '#', value: 1 },
    { name: 'site-photos.zip', size: 4.2 * 1024 * 1024, url: '#', value: 2 },
    { name: 'contract-signed.pdf', size: 512, url: '#', value: 3 },
]);

// Demo server: removing the signed contract is refused.
const remove = (item: AttachmentItem) =>
    new Promise<void>((resolve, reject) => setTimeout(() => (item.value === 3 ? reject(new Error('Not allowed')) : resolve()), 700));
const onRemoved = (item: AttachmentItem) => (files.value = files.value.filter((f) => f.value !== item.value));

const code = [
    "import { AttachmentList, formatFileSize } from '@netblink/vue-components';",
    '',
    '<AttachmentList',
    '    :items="order.files.map((f) => ({ name: f.name, size: f.size, url: f.download_url, value: f.id }))"',
    "    :remove=\"(file) => axios.delete(route('files.destroy', file.value))\"",
    '    @removed="(file) => router.reload({ only: [\'order\'] })"',
    '/>',
];

const props = [
    { prop: 'items', type: '{ name, size?, url?, thumbnail?, value? }[]', default: '-', description: 'The files', required: true },
    { prop: 'remove', type: '(item) => Promise<void> | void', default: '-', description: 'Show remove buttons; reject to keep the file' },
    { prop: 'motion', type: "'off' | 'simple' | 'smooth' | 'fancy'", default: '-', description: 'Motion level for this instance' },
];
</script>

<template>
    <section id="attachment-list">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">AttachmentList</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                Files that belong to a record. Sizes come from <InlineCode>formatFileSize()</InlineCode>, which you can use on its own too. Here the signed contract
                refuses to be removed.
            </p>
            <AttachmentList :items="files" :remove="remove" class="mb-6 max-w-lg" @removed="onRemoved" />
            <CodePreview :code="code" />
            <CollapsableSection header="AttachmentList Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
