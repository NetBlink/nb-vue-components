<script setup lang="ts">
import { ref } from 'vue';
import { Lightbox, CodePreview, CollapsableSection, PropsTable, type LightboxImage } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const swatch = (a: string, b: string, label: string) =>
    `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><defs><linearGradient id="g" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="1200" height="800" fill="url(#g)"/><text x="600" y="430" font-family="sans-serif" font-size="64" fill="white" text-anchor="middle">${label}</text></svg>`)}`;

const images: LightboxImage[] = [
    { src: swatch('#0ea5e9', '#1e3a8a', 'Front'), alt: 'Front of the unit', caption: 'Front: scratch on the lower left panel' },
    { src: swatch('#f59e0b', '#7c2d12', 'Side'), alt: 'Side of the unit', caption: 'Side: dent near the hinge' },
    { src: swatch('#10b981', '#064e3b', 'Back'), alt: 'Back of the unit' },
];
const open = ref(false);
const index = ref(0);
const show = (i: number) => {
    index.value = i;
    open.value = true;
};

const code = [
    '<button v-for="(image, i) in images" :key="image.src" @click="index = i; open = true">',
    '    <img :src="image.src" :alt="image.alt" />',
    '</button>',
    '',
    '<Lightbox v-model:open="open" v-model:index="index" :images="images" />',
];

const props = [
    { prop: 'images', type: '{ src, alt?, caption? }[]', default: '-', description: 'The images', required: true },
    { prop: 'open', type: 'boolean', default: 'false', description: 'Shown (v-model:open)' },
    { prop: 'index', type: 'number', default: '0', description: 'Current image (v-model:index)' },
    { prop: 'motion', type: "'off' | 'simple' | 'smooth' | 'fancy'", default: '-', description: 'Motion level for this instance' },
];
</script>

<template>
    <section id="lightbox">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Lightbox</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                Click a picture to view it full screen. Arrows, the arrow keys or a swipe move between images; Esc closes.
            </p>
            <div class="mb-6 flex flex-wrap gap-3">
                <button
                    v-for="(image, i) in images"
                    :key="image.src"
                    type="button"
                    class="focusable overflow-hidden rounded-md ring-1 ring-gray-200 dark:ring-gray-700"
                    :aria-label="`View ${image.alt}`"
                    @click="show(i)"
                >
                    <img :src="image.src" alt="" class="h-24 w-36 object-cover" />
                </button>
            </div>
            <Lightbox v-model:open="open" v-model:index="index" :images="images" />
            <CodePreview :code="code" />
            <CollapsableSection header="Lightbox Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
