<script setup lang="ts">
import { Skeleton, Card, CodePreview, CollapsableSection, PropsTable } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const code = [
    '<Skeleton :lines="3" />',
    '<Skeleton shape="row" />',
    '<Skeleton shape="circle" width="3rem" />',
    '<Skeleton shape="rect" height="8rem" />',
];

const props = [
    { prop: 'shape', type: "'text' | 'circle' | 'rect' | 'row'", default: "'text'", description: 'Text lines, a circle, a block, or a list row (circle plus two lines)' },
    { prop: 'lines', type: 'number', default: '3', description: 'Lines for text' },
    { prop: 'width', type: 'string', default: '-', description: 'Any CSS width, e.g. 12rem or 60%' },
    { prop: 'height', type: 'string', default: '-', description: 'Height for rect and circle' },
];
</script>

<template>
    <section id="skeleton">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Skeleton</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                Pulsing placeholders shown while content loads, shaped like what is coming. The pulse runs at every motion level.
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">TrPlaceholder</code> is the table-row equivalent.
            </p>
            <div class="mb-6 grid gap-4 md:grid-cols-3">
                <Card><Skeleton :lines="4" /></Card>
                <Card><div class="space-y-4"><Skeleton v-for="n in 3" :key="n" shape="row" /></div></Card>
                <Card><div class="space-y-3"><Skeleton shape="rect" height="6rem" /><Skeleton :lines="2" /></div></Card>
            </div>
            <CodePreview :code="code" />
            <CollapsableSection header="Skeleton Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
