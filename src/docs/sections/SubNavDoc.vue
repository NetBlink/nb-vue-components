<script setup lang="ts">
import { ref, computed } from 'vue';
import { SubNav, CodePreview, CollapsableSection, PropsTable } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

// The docs have no router, so each demo marks its active item itself; in an app the current URL decides.
const current = ref('/settings/profile');
const pages = computed(() =>
    [
        { label: 'Profile', href: '/settings/profile' },
        { label: 'Security', href: '/settings/security' },
        { label: 'Notifications', href: '/settings/notifications', badge: 3 },
        { label: 'Billing', href: '/settings/billing' },
    ].map((item) => ({ ...item, active: item.href === current.value })),
);
const pick = (event: MouseEvent) => {
    const href = (event.target as HTMLElement).closest('a')?.getAttribute('href');
    if (href) {
        event.preventDefault();
        current.value = href;
    }
};

const code = [
    '<SubNav :items="[',
    "    { label: 'Profile', href: route('settings.profile') },",
    "    { label: 'Security', href: route('settings.security') },",
    "    { label: 'Notifications', href: route('settings.notifications'), badge: 3 },",
    ']" />',
    '',
    '<SubNav :items="items" variant="underline" />',
    '<SubNav :items="items" variant="segmented" />',
];

const props = [
    { prop: 'items', type: '{ label, href, active?, badge? }[]', default: '-', description: 'The links. Without active flags the longest href matching the current URL is active', required: true },
    { prop: 'variant', type: "'pills' | 'underline' | 'segmented'", default: "'pills'", description: 'Look, matching Tabs' },
    { prop: 'label', type: 'string', default: "'Section navigation'", description: 'Accessible name of the navigation landmark' },
];
</script>

<template>
    <section id="sub-nav">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">SubNav</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                Links between sibling pages styled like <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">Tabs</code>, with the same sliding
                marker. Use it for settings sections and sub-pages; use Tabs to switch panels on one page.
            </p>
            <div class="mb-6 space-y-5" @click="pick">
                <SubNav :items="pages" />
                <SubNav :items="pages" variant="underline" />
                <div class="max-w-lg"><SubNav :items="pages" variant="segmented" /></div>
            </div>
            <CodePreview :code="code" />
            <CollapsableSection header="SubNav Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
