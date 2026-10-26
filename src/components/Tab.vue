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
 * @motion smooth - the new panel fades in, the old one fades out
 * @motion fancy - the new panel fades in with a small rise, the old one fades out with a small drop
 */
import { TabsContent, injectTabsRootContext } from 'reka-ui';
import { computed, ref, watch } from 'vue';
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
    smooth: { root: { enter: 'animate-fade-in', leave: 'animate-fade-out' } },
    fancy: { root: { enter: 'animate-slide-up-fade', leave: 'animate-slide-down-fade-out' } },
};

const tabs = injectTabsRootContext();
const active = computed(() => tabs.modelValue.value === props.value);
const leave = computed(() => anim('root', 'leave', MOTION));
const panel = ref<{ $el?: unknown } | null>(null);

/*
 * reka-ui keeps the old panel until its leave animation ends. It leaves the
 * flow at its current width while it fades, so the new panel takes its place
 * instead of stacking under it for a moment.
 */
watch(
    active,
    (now) => {
        const el = panel.value?.$el;
        if (el instanceof HTMLElement) el.style.width = now || !leave.value ? '' : `${el.offsetWidth}px`;
    },
    { flush: 'pre' }
);

const motionClasses = computed(() => (active.value ? anim('root', 'enter', MOTION) : leave.value && [leave.value, 'pointer-events-none absolute']));
</script>

<template>
    <TabsContent
        ref="panel"
        v-bind="attrs()"
        :value="value"
        :class="cls('root', 'focus-visible:ring-primary-500 mt-4 focus-visible:ring-2 focus-visible:outline-hidden', motionClasses)"
    >
        <slot />
    </TabsContent>
</template>
