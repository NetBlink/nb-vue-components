<script setup lang="ts">
/**
 * Minimal show/hide disclosure built on reka-ui `Collapsible`, rendering a
 * `SecondaryButton` whose label comes from the `button` tuple `[shown, hidden]` and can
 * be replaced entirely via the `trigger` slot. Use this for inline "Show more" toggles;
 * use `CollapsableSection` when you want a full bordered card with a header bar.
 */
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui';
import { onMounted, ref, watch } from 'vue';
import NbIcon from '../icons/NbIcon.vue';
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
                    <NbIcon name="$expand" class="transition-all" :class="{ 'rotate-180': isOpen }" />
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
