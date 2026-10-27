<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';
import { ContentLoader, Skeleton, Avatar, SecondaryButton, CodePreview, CollapsableSection, PropsTable, InlineCode } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const loading = ref(false);
const lines = ref(2);
let timer: ReturnType<typeof setTimeout> | undefined;
const reload = () => {
    loading.value = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
        lines.value = lines.value === 2 ? 4 : 2;
        loading.value = false;
    }, 1200);
};
onBeforeUnmount(() => clearTimeout(timer));

const code = [
    '<ContentLoader :loading="loading" :delay="150">',
    '    <template #loading><Skeleton shape="row" /></template>',
    '    <UserCard :user="user" />',
    '</ContentLoader>',
];

const props = [
    { prop: 'loading', type: 'boolean', default: '-', description: 'Show the placeholder instead of the content', required: true },
    { prop: 'delay', type: 'number', default: '0', description: 'Only show the placeholder once loading has taken this long (ms)' },
    { prop: 'motion', type: "'off' | 'simple' | 'smooth' | 'fancy'", default: '-', description: 'Motion level for this instance' },
];
</script>

<template>
    <section id="content-loader">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">ContentLoader</h2>
        <DocDemoCard class="mt-4">
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                Swaps a placeholder for the real content with a cross-fade, and eases the height when they differ. Put a <InlineCode>Skeleton</InlineCode> in
                <InlineCode>#loading</InlineCode>; <InlineCode>delay</InlineCode> stops quick loads from flashing it.
            </p>
            <SecondaryButton size="sm" class="mb-4" @click="reload">Reload</SecondaryButton>
            <ContentLoader :loading="loading" data-demo-loader class="max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                <template #loading><Skeleton shape="row" /></template>
                <div class="flex items-start gap-3">
                    <Avatar name="Jane Cooper" />
                    <div class="text-sm">
                        <p class="font-medium text-gray-900 dark:text-gray-100">Jane Cooper</p>
                        <p v-for="n in lines" :key="n" class="text-gray-500 dark:text-gray-400">Detail line {{ n }}</p>
                    </div>
                </div>
            </ContentLoader>
            <CodePreview :code="code" />
            <CollapsableSection header="ContentLoader Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
