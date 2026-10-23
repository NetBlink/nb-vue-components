<script setup lang="ts">
/**
 * Tab - a single panel inside `<Tabs>`.
 *
 * `value` must match the `value` of the corresponding entry in the parent's
 * `tabs` array. Content is only rendered while the tab is active.
 *
 * @prop {string} value - key linking this panel to its trigger
 * @slot default - panel content
 * @part root - the panel
 * @motion off - panels swap instantly
 * @motion simple - panels swap instantly
 * @motion smooth - the new panel fades in
 * @motion fancy - the new panel fades in with a small rise
 */
import { TabsContent } from 'reka-ui';
import type { NbParts, UiProp } from '../ui/parts';
import type { MotionLevel, NbMotionTable } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface TabProps {
    value: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Tab']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = defineProps<TabProps>();

const { cls, attrs, anim } = useUi('Tab', props);

const MOTION: NbMotionTable<'root'> = {
    smooth: { root: { enter: 'animate-fade-in' } },
    fancy: { root: { enter: 'animate-slide-up-fade' } },
};
</script>

<template>
    <TabsContent
        v-bind="attrs()"
        :value="value"
        :class="cls('root', 'focus-visible:ring-primary-500 mt-4 focus-visible:ring-2 focus-visible:outline-hidden', anim('root', 'enter', MOTION))"
    >
        <slot />
    </TabsContent>
</template>
