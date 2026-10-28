<script setup lang="ts">
/**
 * Shows a placeholder (`#loading`, usually a Skeleton) while `loading` is true and
 * the real content once it is false, cross-fading between them and easing the
 * height change instead of popping. `delay` keeps fast loads from flashing the
 * placeholder: it only appears once loading has lasted that long.
 *
 * @part root - the wrapper (marked `aria-busy` while the placeholder shows)
 * @part loading - the placeholder layer
 * @part content - the content layer
 * @motion off - the placeholder and content swap instantly
 * @motion simple - a quick cross-fade
 * @motion smooth - a cross-fade, and the height eases to the new content
 * @motion fancy - the same with a soft rise on the content
 */
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import { motionTiming } from '../ui/flip';
import { levelAtLeast, type MotionLevel } from '../ui/motion';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface ContentLoaderProps {
    /** Show the placeholder instead of the content */
    loading: boolean;
    /** Wait this long (ms) before showing the placeholder, so quick loads don't flash it */
    delay?: number;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['ContentLoader']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<ContentLoaderProps>(), { delay: 0 });

const { cls, attrs, level } = useUi('ContentLoader', props);

const showLoading = ref(props.loading);
let timer: ReturnType<typeof setTimeout> | undefined;

watch(
    () => props.loading,
    (loading) => {
        clearTimeout(timer);
        if (!loading) showLoading.value = false;
        else if (props.delay > 0) timer = setTimeout(() => (showLoading.value = true), props.delay);
        else showLoading.value = true;
    },
);

const fade = computed(() => {
    if (level.value === 'off') return { css: false };
    if (level.value === 'simple') return { name: 'nb-fade-quick' };
    return { name: level.value === 'fancy' ? 'nb-fade-fancy' : 'nb-fade' };
});
const contentFade = computed(() => (level.value === 'fancy' ? { name: 'nb-slide-up-fancy' } : fade.value));

const root = ref<HTMLElement>();
onBeforeUnmount(() => clearTimeout(timer));

// The outgoing layer is pinned where it is (out of the flow) so the wrapper takes the
// incoming layer's height, and the wrapper eases from its old height to that one.
let fromHeight = 0;
// The layer about to leave is measured before the new one is inserted (the placeholder sits
// above the content in the DOM, so measuring later would pin the content too low).
let leaving: { top: number; left: number; width: number } | null = null;
watch(
    showLoading,
    () => {
        fromHeight = root.value?.offsetHeight ?? 0;
        const layer = root.value?.firstElementChild as HTMLElement | null;
        leaving = layer ? { top: layer.offsetTop, left: layer.offsetLeft, width: layer.offsetWidth } : null;
    },
    { flush: 'pre' },
);
watch(
    showLoading,
    () => {
        const el = root.value;
        if (!el || typeof el.animate !== 'function' || !levelAtLeast(level.value, 'smooth')) return;
        const to = el.offsetHeight;
        if (Math.abs(to - fromHeight) < 1) return;
        const { duration, easing } = motionTiming(level.value);
        el.animate([{ height: `${fromHeight}px`, overflow: 'hidden' }, { height: `${to}px`, overflow: 'hidden' }], { duration, easing });
    },
    { flush: 'post' },
);

const pinLeaving = (el: Element) => {
    const layer = el as HTMLElement;
    const at = leaving ?? { top: layer.offsetTop, left: layer.offsetLeft, width: layer.offsetWidth };
    Object.assign(layer.style, { position: 'absolute', top: `${at.top}px`, left: `${at.left}px`, width: `${at.width}px` });
};
</script>

<template>
    <div ref="root" v-bind="attrs()" :aria-busy="showLoading || undefined" :class="cls('root', 'relative')">
        <Transition v-bind="fade" @before-leave="pinLeaving">
            <div v-if="showLoading" :class="cls('loading')"><slot name="loading" /></div>
        </Transition>
        <Transition v-bind="contentFade" @before-leave="pinLeaving">
            <div v-if="!showLoading" :class="cls('content', 'min-w-0')"><slot /></div>
        </Transition>
    </div>
</template>
