<script setup lang="ts">
/**
 * `<TransitionGroup>` for lists: items fade or slide in and out with the same
 * presets as `NbTransition`, and from `smooth` up the remaining items glide to
 * their new places when the list is filtered, sorted or changed. Give every child
 * a stable `key`. Prefixed `Nb` so it doesn't clash with Vue's own component.
 *
 * @motion off - items appear, disappear and reorder instantly
 * @motion simple - items fade quickly, the rest reorder instantly
 * @motion smooth - the chosen preset, and moving items glide
 * @motion fancy - a stronger preset, and moving items glide on a spring
 */
import { computed } from 'vue';
import { useNbConfig } from '../ui/config';
import { hydrateMotionAfterMount, resolveMotionLevel, type MotionLevel } from '../ui/motion';

export interface NbTransitionGroupProps {
    /** Enter/leave animation for each item */
    preset?: 'fade' | 'slide-up' | 'slide-down' | 'scale';
    /** Element that wraps the list */
    tag?: string;
    /** Animate the initial items too */
    appear?: boolean;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<NbTransitionGroupProps>(), {
    preset: 'fade',
    tag: 'div',
    appear: false,
    motion: undefined,
});

const config = useNbConfig();
hydrateMotionAfterMount();

const level = computed(() => resolveMotionLevel(config.motion, 'NbTransitionGroup', props.motion ?? null));

const bindings = computed(() => {
    if (level.value === 'off') return { css: false };
    if (level.value === 'simple') return { name: 'nb-fade-quick' };
    const name = level.value === 'fancy' ? `nb-${props.preset}-fancy` : `nb-${props.preset}`;
    return { name, moveClass: level.value === 'fancy' ? 'nb-move-fancy' : 'nb-move', leaveActiveClass: `${name}-leave-active nb-leaving` };
});
</script>

<template>
    <TransitionGroup v-bind="bindings" :tag="tag" :appear="appear">
        <slot />
    </TransitionGroup>
</template>
