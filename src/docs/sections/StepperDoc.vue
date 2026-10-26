<script setup lang="ts">
import { ref } from 'vue';
import { Stepper, PrimaryButton, SecondaryButton, CodePreview, CollapsableSection, PropsTable } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const steps = [
    { label: 'Account', description: 'Your login' },
    { label: 'Company', description: 'Billing details' },
    { label: 'Team', description: 'Invite people' },
    { label: 'Review', description: 'Check and confirm' },
];
const current = ref(1);

const stages = [
    { label: 'Submitted', state: 'complete' as const },
    { label: 'Under review', description: 'Assigned to two reviewers', state: 'current' as const },
    { label: 'Decision', state: 'upcoming' as const },
    { label: 'Published', state: 'upcoming' as const },
];

const code = [
    '<Stepper :steps="steps" :current="step" />',
    '',
    '<!-- Let people jump back to finished steps -->',
    '<Stepper :steps="steps" :current="step" clickable @select="(i) => (i < step ? (step = i) : null)" />',
    '',
    '<!-- Explicit states, vertical -->',
    '<Stepper orientation="vertical" :steps="[',
    "    { label: 'Submitted', state: 'complete' },",
    "    { label: 'Under review', state: 'current' },",
    "    { label: 'Decision', state: 'upcoming' },",
    ']" />',
];

const props = [
    { prop: 'steps', type: '{ label, description?, state? }[]', default: '-', description: "The steps. state is 'complete' | 'current' | 'upcoming'", required: true },
    { prop: 'current', type: 'number', default: '0', description: 'Current step (0-based), for steps without a state' },
    { prop: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Layout' },
    { prop: 'clickable', type: 'boolean', default: 'false', description: 'Markers become buttons that emit select(index)' },
    { prop: 'label', type: 'string', default: "'Progress'", description: 'Accessible name of the list' },
];
</script>

<template>
    <section id="stepper">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Stepper</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                Progress through a multi-step flow. Pass <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">current</code> and the earlier steps
                count as done, or give each step its own <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">state</code>.
            </p>
            <div class="mb-4">
                <Stepper :steps="steps" :current="current" clickable @select="(i) => (i < current ? (current = i) : null)" />
            </div>
            <div class="mb-8 flex gap-2">
                <SecondaryButton size="sm" :disabled="current === 0" @click="current--">Back</SecondaryButton>
                <PrimaryButton size="sm" :disabled="current === steps.length" @click="current++">{{ current >= steps.length - 1 ? 'Finish' : 'Next' }}</PrimaryButton>
            </div>
            <div class="mb-6 max-w-sm">
                <Stepper orientation="vertical" :steps="stages" />
            </div>
            <CodePreview :code="code" />
            <CollapsableSection header="Stepper Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
