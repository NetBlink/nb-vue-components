<script setup>
// @ts-nocheck
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui';
import { onMounted, ref, watch } from 'vue';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
    header: String,
    open: {
        type: Boolean,
        default: false,
    },
    headerColor: {
        type: String,
    },
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
    <CollapsibleRoot :defaultOpen="open" v-model:open="isOpen" class="mt-2 rounded-lg border-2 border-gray-200 dark:border-gray-700">
        <CollapsibleTrigger
            class="focusable relative flex w-full items-center gap-2 justify-center cursor-pointer rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center"
            :style="{ backgroundColor: headerColor }"
        >
            <div class="text-primary overflow-clip w-5">
                <Transition name="collapse-icon" mode="out-in">
                    <FontAwesomeIcon v-if="isOpen" :icon="faMinus" />
                    <FontAwesomeIcon v-else :icon="faPlus" />
                </Transition>
            </div>
            <div v-if="header">{{ header }}</div>
            <slot v-else name="trigger" />
        </CollapsibleTrigger>

        <CollapsibleContent class="data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden">
            <div class="mt-2" :class="{ 'px-4 pb-2': header }">
                <slot />
            </div>
        </CollapsibleContent>
    </CollapsibleRoot>
</template>
