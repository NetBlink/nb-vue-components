<script setup lang="ts">
/**
 * Page section heading: a bold `<h2>` with a brand-coloured underline and an id slugged
 * from the title, so it can be linked to.
 *
 * @part root - the spacing wrapper
 * @part title - the `<h2>`
 */
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface H2Props {
    title: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['H2']>;
}

const props = defineProps<H2Props>();

const { cls, attrs } = useUi('H2', props);
</script>

<template>
    <div v-bind="attrs()" :class="cls('root', 'mt-12 mb-8')">
        <h2 :id="title.toLowerCase().replace(/\s+/g, '-')" :class="cls('title', 'border-primary-600 mb-6 border-b-2 pb-2 text-2xl font-bold text-gray-900')">
            {{ title }}
        </h2>
    </div>
</template>
