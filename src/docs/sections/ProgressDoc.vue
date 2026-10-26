<script setup lang="ts">
import { ref } from 'vue';
import { Progress, SecondaryButton, CodePreview, CollapsableSection, PropsTable } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const value = ref(35);
const step = () => (value.value = value.value >= 100 ? 0 : Math.min(100, value.value + 20));

const code = [
    '<Progress :value="35" label="Profile completeness" show-value />',
    '<Progress :value="80" theme="success" size="sm" />',
    '<Progress indeterminate label="Importing contacts" />',
];

const props = [
    { prop: 'value', type: 'number', default: '0', description: 'Current value' },
    { prop: 'max', type: 'number', default: '100', description: 'Value that means done' },
    { prop: 'theme', type: "'neutral' | 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'info'", default: "'primary'", description: 'Fill colour' },
    { prop: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Bar thickness' },
    { prop: 'label', type: 'string', default: '-', description: 'Text above the bar, and its accessible name' },
    { prop: 'showValue', type: 'boolean', default: 'false', description: 'Percentage above the bar' },
    { prop: 'indeterminate', type: 'boolean', default: 'false', description: 'Sweeping bar for work of unknown length' },
];
</script>

<template>
    <section id="progress">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Progress</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                A progress bar with an optional label and percentage, exposed to screen readers as a progressbar. From the smooth motion level the
                fill glides to its new width; the indeterminate sweep runs at every level, like Spinner.
            </p>
            <div class="mb-6 max-w-md space-y-5">
                <Progress :value="value" label="Profile completeness" show-value />
                <Progress :value="80" theme="success" size="sm" />
                <Progress :value="45" theme="warning" size="lg" />
                <Progress indeterminate label="Importing contacts" />
                <SecondaryButton size="sm" @click="step">Advance</SecondaryButton>
            </div>
            <CodePreview :code="code" />
            <CollapsableSection header="Progress Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
