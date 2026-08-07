<script setup lang="ts">
/**
 * Navigation Collapse component with expandable/collapsible content
 *
 * @component
 *
 * @prop {boolean} open - Whether the collapse is initially open
 * @prop {string} name - Name/title for the collapse section
 */

import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui';
import NbIcon from '../icons/NbIcon.vue';
import { computed, ref, watch } from 'vue';
import Link from '../overrides/InertiaLink';

interface Props {
    open?: boolean;
    name: string;
}

const props = withDefaults(defineProps<Props>(), {
    open: false,
});

const isOpen = ref(props.open);

watch(
    () => props.open,
    (v) => (isOpen.value = v)
);
</script>

<template>
    <!-- `list-none m-0` keeps the bullet marker away even when the parent isn't a properly-styled <ul> (e.g. <nav>). -->
    <li class="list-none m-0 ml-0 before:hidden">
        <CollapsibleRoot :defaultOpen="open" v-model:open="isOpen">
            <CollapsibleTrigger asChild>
                <button
                    :id="name"
                    class="focusable group flex w-full cursor-pointer items-center rounded-lg p-2 text-base text-gray-900 dark:text-gray-100 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                    <div v-if="$slots.icon" class="flex size-4 items-center justify-center">
                        <slot name="icon" />
                    </div>
                    <!-- ml-3 only when an icon actually renders, otherwise the label sits on a phantom indent -->
                    <span class="flex-1 text-left whitespace-nowrap" :class="{ 'ml-3': $slots.icon }">{{ name }}</span>
                    <NbIcon name="$expand" class="transition-all" :class="{ 'rotate-180': isOpen }" />
                </button>
            </CollapsibleTrigger>

            <CollapsibleContent class="data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden">
                <ul class="m-0 list-none space-y-1 px-4 py-1 pl-7">
                    <slot />
                </ul>
            </CollapsibleContent>
        </CollapsibleRoot>
    </li>
</template>
