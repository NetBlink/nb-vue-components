<script setup>
// @ts-nocheck
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui';
import { onMounted, ref, watch } from 'vue';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import SecondaryButton from './SecondaryButton.vue';

const props = defineProps({
    open: {
        type: Boolean,
        default: false,
    },
    button: {
        type: Array,
        default: () => ['Show more', 'Show less'],
    }
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
    <CollapsibleRoot :defaultOpen="open" v-model:open="isOpen">
        <CollapsibleTrigger
            asChild
        >
            <slot name="trigger">
                <SecondaryButton v-bind="$attrs">
                    <span>
                        {{ isOpen ? button[1] : button[0] }}
                    </span> 
                    <FontAwesomeIcon :icon="faChevronCircleDown" class="transition-all" :class="{'rotate-180': isOpen}" />
                </SecondaryButton>
            </slot>
        </CollapsibleTrigger>

        <CollapsibleContent class="data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden">
            <div class="mt-2">
                <slot />
            </div>
        </CollapsibleContent>
    </CollapsibleRoot>
</template>
