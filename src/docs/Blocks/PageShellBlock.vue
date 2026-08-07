<script setup lang="ts">
import { Section, PrimaryButton, SecondaryButton, CodePreview } from '../../index';
import { NbIcon } from '../../icons';
import { faPlus, faDownload } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const breadcrumbs = ['Home', 'Widgets', 'Edit Widget'];

function handleCreate() {
    // demo-only handler
}

const snippet = [
    '<div class="min-h-screen bg-gray-100 p-4 dark:bg-gray-900">',
    '    <!-- header bar -->',
    '    <div class="flex flex-wrap items-center gap-2 rounded-lg border border-gray-300 bg-neutral-50 px-4 py-2 shadow dark:border-gray-700 dark:bg-gray-800">',
    '        <ol class="flex flex-1 flex-wrap items-center gap-1 text-sm text-gray-500 dark:text-gray-400">',
    '            <li><a href="/" class="hover:text-primary-600 dark:hover:text-primary-400">Home</a></li>',
    '            <li aria-hidden="true">/</li>',
    '            <li><a href="/widgets" class="hover:text-primary-600 dark:hover:text-primary-400">Widgets</a></li>',
    '            <li aria-hidden="true">/</li>',
    '            <li class="font-medium text-gray-800 dark:text-gray-100">Edit Widget</li>',
    '        </ol>',
    '        <div class="flex flex-wrap gap-2">',
    '            <SecondaryButton>',
    '                <NbIcon :name="faDownload" class="mr-1.5 h-4 w-4" />',
    '                Export',
    '            </SecondaryButton>',
    '            <PrimaryButton @click="createWidget">',
    '                <NbIcon :name="faPlus" class="mr-1.5 h-4 w-4" />',
    '                New Widget',
    '            </PrimaryButton>',
    '        </div>',
    '    </div>',
    '',
    '    <!-- content container -->',
    '    <div class="mt-4 rounded-lg border-2 border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">',
    '        <div class="space-y-4">',
    '            <Section header="Overview">',
    '                <p class="text-gray-600 dark:text-gray-400">Summary content goes here.</p>',
    '            </Section>',
    '',
    '            <Section header="Details">',
    '                <template #headerButton>',
    '                    <SecondaryButton size="sm">Edit</SecondaryButton>',
    '                </template>',
    '                <p class="text-gray-600 dark:text-gray-400">Detail content goes here.</p>',
    '            </Section>',
    '',
    '            <Section>',
    '                <p class="text-gray-600 dark:text-gray-400">A header-less section for freeform content.</p>',
    '            </Section>',
    '        </div>',
    '    </div>',
    '</div>',
];
</script>

<template>
    <section id="block-page-shell">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Page Shell</h3>
        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                The page skeleton every consumer app rebuilds by hand: a header bar (growing breadcrumb + right-aligned action buttons), a bordered content
                container, and a stack of <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">Section</code> components.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="min-h-[420px] rounded-lg bg-gray-100 p-4 dark:bg-gray-900">
                    <!-- header bar -->
                    <div class="flex flex-wrap items-center gap-2 rounded-lg border border-gray-300 bg-neutral-50 px-4 py-2 shadow dark:border-gray-700 dark:bg-gray-800">
                        <ol class="flex flex-1 flex-wrap items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <template v-for="(crumb, index) in breadcrumbs" :key="crumb">
                                <li v-if="index > 0" aria-hidden="true">/</li>
                                <li :class="index === breadcrumbs.length - 1 ? 'font-medium text-gray-800 dark:text-gray-100' : ''">
                                    <a v-if="index < breadcrumbs.length - 1" href="#" class="hover:text-primary-600 dark:hover:text-primary-400">{{ crumb }}</a>
                                    <span v-else>{{ crumb }}</span>
                                </li>
                            </template>
                        </ol>
                        <div class="flex flex-wrap gap-2">
                            <SecondaryButton>
                                <NbIcon :name="faDownload" class="mr-1.5 h-4 w-4" />
                                Export
                            </SecondaryButton>
                            <PrimaryButton @click="handleCreate">
                                <NbIcon :name="faPlus" class="mr-1.5 h-4 w-4" />
                                New Widget
                            </PrimaryButton>
                        </div>
                    </div>

                    <!-- content container -->
                    <div class="mt-4 rounded-lg border-2 border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                        <div class="space-y-4">
                            <Section header="Overview">
                                <p class="text-gray-600 dark:text-gray-400">Summary content goes here.</p>
                            </Section>

                            <Section header="Details">
                                <template #headerButton>
                                    <SecondaryButton size="sm">Edit</SecondaryButton>
                                </template>
                                <p class="text-gray-600 dark:text-gray-400">Detail content goes here.</p>
                            </Section>

                            <Section>
                                <p class="text-gray-600 dark:text-gray-400">A header-less section for freeform content.</p>
                            </Section>
                        </div>
                    </div>
                </div>
            </div>
            <CodePreview :code="snippet" />
        </DocDemoCard>
    </section>
</template>
