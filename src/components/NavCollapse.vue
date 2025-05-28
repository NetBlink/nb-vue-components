<script setup>
// @ts-nocheck
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui';

import { faChevronCircleDown, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { computed, ref, onMounted, watch } from 'vue';
import Link from '../overrides/InertiaLink';
import { Collapse } from 'tw-elements';

const props = defineProps({
    open: { type: Boolean, default: false },
    name: String,
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
    <li>
        <CollapsibleRoot :defaultOpen="open" v-model:open="isOpen">
            <CollapsibleTrigger asChild >
                <button
                    :id="name"
                    @click="onClick"
                    class="focusable group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                    <slot name="icon" />
                    <span class="ml-3 flex-1 whitespace-nowrap text-left">{{ name }}</span>
                    <FontAwesomeIcon :icon="faChevronCircleDown" class="transition-all" :class="{'rotate-180': !isOpen}" />
                </button>
            </CollapsibleTrigger>

            <CollapsibleContent class="data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden">
                <ul class="space-y-1 px-4" >
                    <slot />
                </ul>
            </CollapsibleContent>
        </CollapsibleRoot>
    </li>
</template>
