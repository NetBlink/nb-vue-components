<script setup lang="ts">
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui';
import { onMounted, ref, watch } from 'vue';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { SecondaryButton } from './index.js';

interface CollapseProps {
    /** Whether the collapse is initially open */
    open?: boolean;
    /** Button text for open and closed states [show, hide] */
    button?: [string, string];
}

const props = withDefaults(defineProps<CollapseProps>(), {
    open: false,
    button: () => ['Show more', 'Show less'] as [string, string],
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
        <CollapsibleTrigger asChild>
            <slot name="trigger">
                <SecondaryButton v-bind="$attrs">
                    <span>
                        {{ isOpen ? button[1] : button[0] }}
                    </span>
                    <FontAwesomeIcon :icon="faChevronCircleDown" class="transition-all" :class="{ 'rotate-180': isOpen }" />
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
