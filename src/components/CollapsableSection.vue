<script setup lang="ts">
/**
 * Card-shaped collapsible panel built on reka-ui `Collapsible`: a bordered box whose
 * whole header row is the trigger, with a chevron that rotates when open. Reach for this
 * when the disclosure *is* the container; use `Collapse` instead when you only want a
 * "Show more" button toggling some content inside an existing layout.
 */
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui';
import { onMounted, ref, watch } from 'vue';
import NbIcon from '../icons/NbIcon.vue';

interface CollapsableSectionProps {
    /** Header text for the collapsible section */
    header?: string;
    /** Whether the section is initially open */
    open?: boolean;
    /** Background color for the header */
    headerColor?: string;
}

const props = withDefaults(defineProps<CollapsableSectionProps>(), {
    header: undefined,
    open: false,
    headerColor: undefined,
});

const isOpen = ref(props.open);

watch(
    () => props.open,
    (v) => (isOpen.value = v)
);

onMounted(() => {
    isOpen.value = props.open;
});
</script>
<template>
    <CollapsibleRoot
        :defaultOpen="open"
        v-model:open="isOpen"
        class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
    >
        <CollapsibleTrigger
            class="focusable focus:ring-primary-500 relative flex w-full cursor-pointer items-center justify-between rounded-lg border-b border-gray-200 dark:border-gray-700 bg-gray-50/50 px-6 py-4 text-left transition-colors duration-150 hover:bg-gray-100/50 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:border-gray-700 dark:bg-gray-900/40 dark:hover:bg-gray-900/60 dark:focus:ring-offset-gray-900"
            :style="{ backgroundColor: headerColor }"
        >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                <span v-if="header">{{ header }}</span>
                <slot v-else name="trigger" />
            </h3>
            <div class="text-primary-600 transition-transform duration-300 ease-in-out dark:text-primary-300" :class="{ 'rotate-180': isOpen }">
                <NbIcon name="$expand" class="h-5 w-5" />
            </div>
        </CollapsibleTrigger>

        <CollapsibleContent class="data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden">
            <!-- Matches the trigger's px-6 py-4 so header and body share one inset. -->
            <div class="px-6 py-4">
                <slot />
            </div>
        </CollapsibleContent>
    </CollapsibleRoot>
</template>
