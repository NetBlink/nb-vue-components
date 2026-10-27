<script setup lang="ts">
import { Timeline, IconCircle, CodePreview, CollapsableSection, PropsTable, InlineCode } from '../../index';
import { faTruck, faCreditCard, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const events = [
    { title: 'Order delivered', description: 'Signed for by R. Vermeer at the front desk.', time: '12 min ago', variant: 'success' as const },
    { title: 'Out for delivery', description: 'DHL Express picked up the parcel in Rotterdam.', time: '3 hours ago', variant: 'info' as const, icon: faTruck },
    { title: 'Address needs review', description: 'The house number was missing and has been auto-corrected.', time: 'Yesterday', variant: 'warning' as const },
    { title: 'Payment failed', description: 'The first attempt on card ending 4242 was declined.', time: '2 days ago', variant: 'danger' as const, icon: faCreditCard },
    { title: 'Order placed', description: '3 items · Invoice #INV-2043 created.', time: '2 days ago', variant: 'neutral' as const, icon: faBoxOpen },
];

const code = [
    '<Timeline :items="events" />',
    '<Timeline :items="events" layout="cards" />',
    '',
    '// each event',
    "{ title: 'Order delivered', description: '...', time: '12 min ago', variant: 'success', icon: faTruck }",
    '',
    '<!-- The coloured disc on its own -->',
    '<IconCircle :icon="faTruck" variant="info" size="sm" />',
];

const props = [
    { prop: 'items', type: '{ title, description?, time?, icon?, variant? }[]', default: '-', description: 'The events in display order. The icon defaults from the variant', required: true },
    { prop: 'layout', type: "'line' | 'cards'", default: "'line'", description: 'Connected rail, or tinted rows' },
];
const circleProps = [
    { prop: 'icon', type: 'IconLike', default: '-', description: 'The icon', required: true },
    { prop: 'variant', type: "'neutral' | 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'info'", default: "'primary'", description: 'Colour' },
    { prop: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Disc size' },
];
</script>

<template>
    <section id="timeline">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Timeline and IconCircle</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                A chronological list of events with coloured icon markers. The markers are
                <InlineCode>IconCircle</InlineCode>, also used by EmptyState and the stat tiles, and
                available on its own. Use the scoped <InlineCode>#item</InlineCode> slot for a custom event body.
            </p>

            <div class="mb-6 grid gap-8 lg:grid-cols-2">
                <Timeline :items="events" />
                <Timeline :items="events.slice(0, 3)" layout="cards" />
            </div>

            <div class="mb-6 flex items-center gap-3">
                <IconCircle :icon="faTruck" variant="info" size="sm" />
                <IconCircle :icon="faCreditCard" variant="danger" />
                <IconCircle :icon="faBoxOpen" variant="accent" size="lg" />
            </div>

            <CodePreview :code="code" />
            <CollapsableSection header="Timeline Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
            <CollapsableSection header="IconCircle Props" class="mt-4">
                <PropsTable :rows="circleProps" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
