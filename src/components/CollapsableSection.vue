<script setup lang="ts">
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui';
import { onMounted, ref, watch } from 'vue';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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
                <FontAwesomeIcon :icon="faChevronDown" class="h-5 w-5" />
            </div>
        </CollapsibleTrigger>

        <CollapsibleContent class="data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden">
            <div class="p-6">
                <slot />
            </div>
        </CollapsibleContent>
    </CollapsibleRoot>
</template>
