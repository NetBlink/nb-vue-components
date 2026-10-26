<script setup lang="ts">
/**
 * Card-shaped collapsible panel built on reka-ui `Collapsible`: a bordered box whose
 * whole header row is the trigger, with a chevron that rotates when open. Reach for this
 * when the disclosure *is* the container; use `Collapse` instead when you only want a
 * "Show more" button toggling some content inside an existing layout.
 *
 * @part root - the bordered card
 * @part trigger - the header row that toggles the section
 * @part header - the heading text
 * @part icon - the chevron wrapper
 * @part content - the collapsing panel
 * @part body - the padded wrapper around the slot
 * @motion off - opens and closes instantly
 * @motion simple - the content's height animates quickly
 * @motion smooth - the content's height animates in and out, the chevron turns
 * @motion fancy - the height opens on a spring
 */
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui';
import { onMounted, ref, watch } from 'vue';
import NbIcon from '../icons/NbIcon.vue';
import type { NbParts, UiProp } from '../ui/parts';
import { levelAtLeast, type MotionLevel, type NbMotionTable } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface CollapsableSectionProps {
    /** Header text for the collapsible section */
    header?: string;
    /** Whether the section is initially open */
    open?: boolean;
    /** Background color for the header */
    headerColor?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['CollapsableSection']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<CollapsableSectionProps>(), {
    header: undefined,
    open: false,
    headerColor: undefined,
});

const { cls, attrs, anim, level } = useUi('CollapsableSection', props);

// Height in and out: quick for `simple`, a spring for `fancy`.
const MOTION: NbMotionTable<'content'> = {
    simple: { content: { enter: 'animate-slide-down-quick', leave: 'animate-slide-up-quick' } },
    smooth: { content: { enter: 'animate-slide-down', leave: 'animate-slide-up' } },
    fancy: { content: { enter: 'animate-slide-down-spring', leave: 'animate-slide-up-spring' } },
};


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
        v-bind="attrs()"
        :class="cls('root', 'rounded-lg border border-gray-200 dark:border-gray-700 bg-white shadow dark:border-gray-700 dark:bg-gray-800')"
    >
        <CollapsibleTrigger
            :class="
                cls(
                    'trigger',
                    'focusable focus:ring-primary-500 relative flex w-full cursor-pointer items-center justify-between rounded-lg border-b border-gray-200 dark:border-gray-700 bg-gray-50/50 px-6 py-4 text-left transition-colors duration-150 hover:bg-gray-100/50 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:border-gray-700 dark:bg-gray-900/40 dark:hover:bg-gray-900/60 dark:focus:ring-offset-gray-900'
                )
            "
            :style="{ backgroundColor: headerColor }"
        >
            <h3 :class="cls('header', 'text-lg font-semibold text-gray-900 dark:text-gray-100')">
                <span v-if="header">{{ header }}</span>
                <slot v-else name="trigger" />
            </h3>
            <div :class="cls('icon', 'text-primary-600', { 'transition-transform duration-300 ease-in-out': levelAtLeast(level, 'smooth') }, 'dark:text-primary-300', { 'rotate-180': isOpen })">
                <NbIcon name="$expand" class="h-5 w-5" />
            </div>
        </CollapsibleTrigger>

        <CollapsibleContent :class="cls('content', anim('content', isOpen ? 'enter' : 'leave', MOTION), 'overflow-hidden')">
            <!-- Matches the trigger's px-6 py-4 so header and body share one inset. -->
            <div :class="cls('body', 'px-6 py-4')">
                <slot />
            </div>
        </CollapsibleContent>
    </CollapsibleRoot>
</template>
