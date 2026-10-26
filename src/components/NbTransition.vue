<script setup lang="ts">
/**
 * `<Transition>` with ready-made presets that follow the motion levels and the
 * theme's motion tokens: `fade`, `slide-up`, `slide-down`, `scale`, and `collapse`
 * (height). Use it for "Saved." flashes, page transitions in a layout
 * (`mode="out-in"`), or anything shown with `v-if`/`v-show`. Prefixed `Nb` so it
 * doesn't clash with Vue's own `<Transition>`.
 *
 * @motion off - appears and disappears instantly
 * @motion simple - a quick fade (collapse still animates its height)
 * @motion smooth - the chosen preset
 * @motion fancy - a stronger, springier version of the preset
 */
import { computed } from 'vue';
import { useNbConfig } from '../ui/config';
import { heightTransition } from '../ui/flip';
import { hydrateMotionAfterMount, resolveMotionLevel, type MotionLevel } from '../ui/motion';

export interface NbTransitionProps {
    /** Animation */
    preset?: 'fade' | 'slide-up' | 'slide-down' | 'scale' | 'collapse';
    /** Passed to `<Transition>`: `out-in` for swapping content such as pages */
    mode?: 'in-out' | 'out-in' | 'default';
    /** Animate on first render too */
    appear?: boolean;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<NbTransitionProps>(), {
    preset: 'fade',
    mode: undefined,
    appear: false,
    motion: undefined,
});

const config = useNbConfig();
hydrateMotionAfterMount();

const level = computed(() => resolveMotionLevel(config.motion, 'NbTransition', props.motion ?? null));

const bindings = computed(() => {
    if (level.value === 'off') return { css: false };
    if (props.preset === 'collapse') return heightTransition(level.value, 'simple');
    if (level.value === 'simple') return { name: 'nb-fade-quick' };
    return { name: level.value === 'fancy' ? `nb-${props.preset}-fancy` : `nb-${props.preset}` };
});
</script>

<template>
    <Transition v-bind="bindings" :mode="mode" :appear="appear">
        <slot />
    </Transition>
</template>
