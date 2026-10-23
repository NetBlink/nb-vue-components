<script setup lang="ts">
/**
 * Navigation Collapse component with expandable/collapsible content
 *
 * @component
 *
 * @prop {boolean} open - Whether the collapse is initially open
 * @prop {string} name - Name/title for the collapse section
 * @part root - the `<li>`
 * @part trigger - the toggle `<button>`
 * @part icon - the icon slot wrapper
 * @part label - the name
 * @part chevron - the chevron
 * @part content - the collapsing panel
 * @part list - the `<ul>` around the links
 */

import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui';
import NbIcon from '../icons/NbIcon.vue';
import { computed, ref, watch } from 'vue';
import Link from '../overrides/InertiaLink';
import type { NbParts, UiProp } from '../ui/parts';
import type { MotionLevel } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface NavCollapseProps {
    open?: boolean;
    name: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['NavCollapse']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<NavCollapseProps>(), {
    open: false,
});

const { cls, attrs } = useUi('NavCollapse', props);

const isOpen = ref(props.open);

watch(
    () => props.open,
    (v) => (isOpen.value = v)
);
</script>

<template>
    <!-- `list-none m-0` keeps the bullet marker away even when the parent isn't a properly-styled <ul> (e.g. <nav>). -->
    <li v-bind="attrs()" :class="cls('root', 'list-none m-0 ml-0 before:hidden')">
        <CollapsibleRoot :defaultOpen="open" v-model:open="isOpen">
            <CollapsibleTrigger asChild>
                <button
                    :id="name"
                    :class="
                        cls(
                            'trigger',
                            'focusable group flex w-full cursor-pointer items-center rounded-lg p-2 text-base text-gray-900 dark:text-gray-100 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                        )
                    "
                >
                    <div v-if="$slots.icon" :class="cls('icon', 'flex size-4 items-center justify-center')">
                        <slot name="icon" />
                    </div>
                    <!-- ml-3 only when an icon actually renders, otherwise the label sits on a phantom indent -->
                    <span :class="cls('label', 'flex-1 text-left whitespace-nowrap', { 'ml-3': $slots.icon })">{{ name }}</span>
                    <NbIcon name="$expand" :class="cls('chevron', 'transition-all', { 'rotate-180': isOpen })" />
                </button>
            </CollapsibleTrigger>

            <CollapsibleContent :class="cls('content', 'data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden')">
                <ul :class="cls('list', 'm-0 list-none space-y-1 px-4 py-1 pl-7')">
                    <slot />
                </ul>
            </CollapsibleContent>
        </CollapsibleRoot>
    </li>
</template>
