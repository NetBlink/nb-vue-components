<script setup lang="ts">
import { Divider, SecondaryButton, CodePreview, CollapsableSection, PropsTable } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const code = ['<Divider />', '<Divider label="or" />', '', '<!-- between items in a row -->', '<Divider orientation="vertical" />'];

const props = [
    { prop: 'label', type: 'string', default: '-', description: 'Text in the middle of the line (or use the default slot)' },
    { prop: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Direction' },
];
</script>

<template>
    <section id="divider">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Divider</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">A line between groups of content, with an optional label such as "or".</p>
            <div class="mb-6 max-w-md space-y-6">
                <Divider />
                <Divider label="or" />
                <div class="flex items-center">
                    <SecondaryButton size="sm">Bold</SecondaryButton>
                    <Divider orientation="vertical" />
                    <SecondaryButton size="sm">Link</SecondaryButton>
                </div>
            </div>
            <CodePreview :code="code" />
            <CollapsableSection header="Divider Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
