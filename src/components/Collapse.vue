<script setup lang="ts">
/**
 * Minimal show/hide disclosure built on reka-ui `Collapsible`, rendering a
 * `SecondaryButton` whose label comes from the `button` tuple `[shown, hidden]` and can
 * be replaced entirely via the `trigger` slot. Use this for inline "Show more" toggles;
 * use `CollapsableSection` when you want a full bordered card with a header bar.
 *
 * @part root - the collapsible wrapper; `class` lands here
 * @part trigger - the `SecondaryButton`; other attrs land here
 * @part label - the button text
 * @part icon - the chevron in the button
 * @part content - the collapsing panel
 * @part body - the spacing wrapper around the slot
 * @motion off - opens and closes instantly
 * @motion simple - the content's height animates quickly
 * @motion smooth - the content's height animates in and out, the chevron turns
 * @motion fancy - the height opens on a spring
 */
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui';
import { onMounted, ref, watch } from 'vue';
import NbIcon from '../icons/NbIcon.vue';
import { SecondaryButton } from './index.js';
import type { NbParts, UiProp } from '../ui/parts';
import { levelAtLeast, type MotionLevel, type NbMotionTable } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface CollapseProps {
    /** Whether the collapse is initially open */
    open?: boolean;
    /** Button text for open and closed states [show, hide] */
    button?: [string, string];
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Collapse']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<CollapseProps>(), {
    open: false,
    button: () => ['Show more', 'Show less'] as [string, string],
});

const { cls, attrs, anim, level } = useUi('Collapse', props);

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
    <CollapsibleRoot :defaultOpen="open" v-model:open="isOpen" :class="cls('root')">
        <CollapsibleTrigger asChild>
            <slot name="trigger">
                <SecondaryButton v-bind="attrs()" :class="cls('trigger')" :motion="motion">
                    <span :class="cls('label')">
                        {{ isOpen ? button[1] : button[0] }}
                    </span>
                    <NbIcon name="$expand" :class="cls('icon', { 'transition-all': levelAtLeast(level, 'smooth'), 'rotate-180': isOpen })" />
                </SecondaryButton>
            </slot>
        </CollapsibleTrigger>

        <CollapsibleContent :class="cls('content', anim('content', isOpen ? 'enter' : 'leave', MOTION), 'overflow-hidden')">
            <div :class="cls('body', 'mt-2')">
                <slot />
            </div>
        </CollapsibleContent>
    </CollapsibleRoot>
</template>
