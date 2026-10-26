<script setup lang="ts">
import { ref } from 'vue';
import { Card, Badge, IconButton, PrimaryButton, SecondaryButton, CodePreview, CollapsableSection, PropsTable } from '../../index';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const plans = [
    { id: 'starter', title: 'Starter', description: '1 project, community support', price: '£0' },
    { id: 'team', title: 'Team', description: '10 projects, email support', price: '£29' },
    { id: 'business', title: 'Business', description: 'Unlimited projects, priority support', price: '£99' },
];
const plan = ref('team');

const code = [
    '<Card title="Billing" description="Your plan renews on 1 July.">',
    '    <template #actions>',
    '        <IconButton :icon="faEllipsisVertical" label="More options" size="sm" />',
    '    </template>',
    '    <p>Team plan · £29 / month</p>',
    '    <template #footer>',
    '        <SecondaryButton>Cancel plan</SecondaryButton>',
    '        <PrimaryButton>Change plan</PrimaryButton>',
    '    </template>',
    '</Card>',
    '',
    '<!-- Selectable cards -->',
    '<Card v-for="p in plans" :key="p.id" :title="p.title" :description="p.description"',
    '      clickable :selected="plan === p.id" @click="plan = p.id" />',
    '',
    '<!-- The whole card is a link -->',
    '<Card href="/projects/42" title="Website redesign" hover />',
];

const props = [
    { prop: 'title', type: 'string', default: '-', description: 'Title in the header' },
    { prop: 'description', type: 'string', default: '-', description: 'Text under the title' },
    { prop: 'href', type: 'string', default: '-', description: 'Make the whole card an Inertia link' },
    { prop: 'clickable', type: 'boolean', default: 'false', description: 'Make the card a button: emits click, reachable with Tab, Enter and Space' },
    { prop: 'selected', type: 'boolean', default: 'false', description: 'Mark the card as the chosen one (primary ring)' },
    { prop: 'hover', type: 'boolean', default: 'false', description: 'Hover border and shadow even when not interactive' },
    { prop: 'padding', type: "'none' | 'sm' | 'md' | 'lg'", default: "'md'", description: 'Inner spacing' },
];
const slots = [
    { prop: 'default', type: 'slot', default: '-', description: 'Body' },
    { prop: 'header', type: 'slot', default: '-', description: 'Replaces the title and description' },
    { prop: 'actions', type: 'slot', default: '-', description: 'Right side of the header (clicks here do not trigger a clickable card)' },
    { prop: 'footer', type: 'slot', default: '-', description: 'Footer band, right-aligned' },
];
</script>

<template>
    <section id="card">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Card</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                A bordered panel with an optional header (title, description, actions), body and footer band. Lighter than
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">Section</code>, which is meant for whole page sections. Make it a link with
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">href</code> or a selectable button with
                <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">clickable</code>.
            </p>

            <div class="mb-6 grid gap-4 md:grid-cols-2">
                <Card title="Billing" description="Your plan renews on 1 July.">
                    <template #actions>
                        <IconButton :icon="faEllipsisVertical" label="More options" size="sm" />
                    </template>
                    <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-600 dark:text-gray-300">Team plan · £29 / month</span>
                        <Badge status="active" dot />
                    </div>
                    <template #footer>
                        <SecondaryButton size="sm">Cancel plan</SecondaryButton>
                        <PrimaryButton size="sm">Change plan</PrimaryButton>
                    </template>
                </Card>
                <Card title="Just a body" padding="sm">
                    <p class="text-sm text-gray-600 dark:text-gray-400">Cards without a footer or actions stay compact; use <code>padding</code> to tighten or loosen them.</p>
                </Card>
            </div>

            <div class="mt-8 mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">Selectable</div>
            <div class="mb-6 grid gap-4 sm:grid-cols-3">
                <Card v-for="p in plans" :key="p.id" :title="p.title" :description="p.description" clickable :selected="plan === p.id" @click="plan = p.id">
                    <p class="text-2xl font-bold">{{ p.price }}<span class="text-sm font-normal text-gray-500"> / month</span></p>
                </Card>
            </div>

            <CodePreview :code="code" />
            <CollapsableSection header="Card Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
            <CollapsableSection header="Card Slots" class="mt-4">
                <PropsTable :rows="slots" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
