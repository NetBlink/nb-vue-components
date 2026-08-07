<script setup>
/**
 * Horizontal snap-scroll carousel with dot navigation underneath. Each top-level child of
 * the default slot becomes a slide, so mark each with `class="min-w-full snap-start"` for
 * the snapping to line up; the dot count is read from the DOM and kept in sync with a
 * MutationObserver, and clicking a dot scrolls smoothly to that slide.
 */
// @ts-nocheck
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

const currentSlide = ref(0);
const activeDot = ref(null);
const container = ref(null);
// Count rendered children directly from the DOM - `$slots.default().length`
// returns 1 when the slot content is a v-for (it's wrapped in a Fragment vnode),
// which gives us only one dot regardless of how many slides exist.
const slideCount = ref(0);
let childObserver = null;

const props = defineProps({
    /** Outer padding offset applied to the scroll math when clicking a dot */
    padding: { default: 0 },
    /** Pixel gap between slides */
    gap: { default: 20 },
});

const DOT_PITCH = 20;
const currentDotPosition = ref(0);

watch(currentSlide, (index) => {
    if (activeDot.value) {
        currentDotPosition.value = `${index * DOT_PITCH}`;
    }
});

const slideTo = (event, index) => {
    if (!container.value?.children[index]) return;
    currentSlide.value = index;
    container.value.scrollTo({
        behavior: 'smooth',
        // offsetLeft is the child's left position within the scroll container,
        // already in the same coordinate space as scrollLeft.
        left: container.value.children[index].offsetLeft - props.padding,
    });
};

const updateCurrentSlide = () => {
    if (!container.value?.children[0]) return;
    const slideWidth = container.value.children[0].getBoundingClientRect().width;
    currentSlide.value = Math.round(container.value.scrollLeft / (slideWidth + props.gap));
};

const refreshSlideCount = () => {
    slideCount.value = container.value?.children.length ?? 0;
};

onMounted(() => {
    refreshSlideCount();
    updateCurrentSlide();
    container.value.addEventListener('scroll', updateCurrentSlide);
    // Slide list can change (v-for items added/removed) - keep dot count in sync
    childObserver = new MutationObserver(refreshSlideCount);
    childObserver.observe(container.value, { childList: true });
});

onBeforeUnmount(() => {
    childObserver?.disconnect();
    container.value?.removeEventListener('scroll', updateCurrentSlide);
});
</script>

<template>
    <div class="relative">
        <div
            class="flex snap-x snap-mandatory overflow-x-auto [&::-webkit-scrollbar]:hidden"
            :style="{ gap: `${gap}px` }"
            ref="container"
            @scroll="onContainerScroll"
        >
            <slot />
        </div>
        <div class="mt-4 flex flex-col items-center justify-center">
            <div class="relative flex w-fit flex-row justify-center gap-3">
                <div
                    class="bg-primary-600 dark:bg-primary-400 absolute h-2 w-2 rounded-full transition-all duration-300"
                    :style="{ left: `${currentDotPosition}px` }"
                    ref="activeDot"
                />
                <div
                    v-for="index in slideCount"
                    :key="index"
                    class="h-2 w-2 cursor-pointer rounded-full bg-accent"
                    @click="slideTo($event, index - 1)"
                />
            </div>
        </div>
    </div>
</template>
