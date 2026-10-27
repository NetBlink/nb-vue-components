<script setup lang="ts">
import { ref } from 'vue';
import { StarRating, CodePreview, CollapsableSection, PropsTable, InlineCode } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const rating = ref(3);

const code = [
    '<!-- Pick a score -->',
    '<StarRating v-model="form.rating" label="Rate your order" />',
    '',
    '<!-- Show one (halves allowed) -->',
    '<StarRating :model-value="product.rating" readonly size="sm" />',
];

const props = [
    { prop: 'modelValue', type: 'number', default: '0', description: 'The rating; read-only ratings may be fractional' },
    { prop: 'max', type: 'number', default: '5', description: 'Number of stars' },
    { prop: 'readonly', type: 'boolean', default: 'false', description: 'Display only' },
    { prop: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Star size' },
    { prop: 'label', type: 'string', default: "'Rating'", description: 'Accessible name of the group' },
];
</script>

<template>
    <section id="star-rating">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">StarRating</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                Pick a score with the mouse or the arrow keys, or show one with <InlineCode>readonly</InlineCode>.
            </p>
            <div class="mb-6 flex flex-wrap items-center gap-8">
                <div class="flex items-center gap-3">
                    <StarRating v-model="rating" label="Rate this product" size="lg" />
                    <span class="text-sm text-gray-600 dark:text-gray-400">Value: {{ rating }}</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <StarRating :model-value="3.5" readonly size="sm" />
                    3.5 · 128 reviews
                </div>
            </div>
            <CodePreview :code="code" />
            <CollapsableSection header="StarRating Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
