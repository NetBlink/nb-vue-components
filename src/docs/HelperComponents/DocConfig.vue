<script setup lang="ts">
/**
 * DocConfig - the "copy this and you're done" block, on the pages where getting
 * set up is actually the hard part (Getting Started, Icons, Toasts).
 *
 * Pages whose components are self-explanatory from their own examples don't get
 * one; a config block there is just a second copy of the page.
 *
 * Takes several blocks because a real config usually spans more than one file
 * (an entry point plus a layout, say).
 */
import { ref } from 'vue';
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui';
import { CodePreview } from '../../index';
import NbIcon from '../../icons/NbIcon.vue';

export interface ConfigBlock {
    /** Shown in the CodePreview header - use a real path, it tells you where this goes. */
    filename: string;
    code: string[];
    language?: string;
}

interface Props {
    blocks: ConfigBlock[];
    /** Overrides the default heading. */
    title?: string;
    /** Start expanded. Open by default - this is usually the answer people came for. */
    open?: boolean;
}

const props = withDefaults(defineProps<Props>(), { title: 'Copy-paste config', open: true });

const isOpen = ref(props.open);
</script>

<template>
    <!--
        The heading sits outside the trigger deliberately. The docs sidebar
        builds its sub-nav from `h3[id]` and injects a `#` permalink into it -
        nesting that inside a toggle would mean clicking the permalink also
        collapses the section.
    -->
    <CollapsibleRoot v-model:open="isOpen">
        <div class="border-primary-200 dark:border-primary-800/70 mb-4 flex items-center justify-between gap-4 border-b-2 pb-2">
            <h3 id="config" class="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
                <NbIcon name="$success" class="text-primary-600 dark:text-primary-400 size-5" />
                {{ title }}
            </h3>

            <CollapsibleTrigger
                class="focus:ring-primary-500 flex shrink-0 cursor-pointer items-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:outline-hidden dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            >
                {{ isOpen ? 'Hide' : 'Show' }}
                <NbIcon name="$expand" class="size-4 transition-transform duration-300" :class="{ 'rotate-180': isOpen }" />
            </CollapsibleTrigger>
        </div>

        <CollapsibleContent class="data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden">
            <div class="border-primary-200 bg-primary-50/40 dark:border-primary-800/60 dark:bg-primary-950/20 rounded-lg border p-6">
                <p class="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    <slot>Everything this page needs, ready to paste. Delete the options you don't want - they all have sane defaults.</slot>
                </p>

                <CodePreview v-for="block in blocks" :key="block.filename" :code="block.code" :filename="block.filename" :language="block.language" />
            </div>
        </CollapsibleContent>
    </CollapsibleRoot>
</template>
