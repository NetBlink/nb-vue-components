<script setup>
import { ref, onMounted, watch } from 'vue';

const currentSlide = ref(0);
const activeDot = ref(null);
const container = ref(null);

const props = defineProps({
    padding: { default: 0 },
    gap: { default: 20 },
});

const currentDotPosition = ref(0);

watch(currentSlide, (index) => {
    if (activeDot.value) {
        currentDotPosition.value = `${index * 20}`;
    }
});

const slideTo = (event, index) => {
    currentSlide.value = index;
    container.value.scrollTo({
        behavior: 'smooth',
        left:
            container.value.scrollLeft +
            container.value.getBoundingClientRect().left +
            container.value.children[index].getBoundingClientRect().left -
            props.padding -
            props.gap,
    });
};

const updateCurrentSlide = () => {
    const slideWidth = container.value.children[0].getBoundingClientRect().width;
    currentSlide.value = Math.round(container.value.scrollLeft / (slideWidth + props.gap));
};

onMounted(() => {
    updateCurrentSlide();
    container.value.addEventListener('scroll', updateCurrentSlide);
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
                    class="absolute h-2 w-2 rounded-full bg-primary transition-all duration-300"
                    :style="{ left: `${currentDotPosition}px` }"
                    ref="activeDot"
                />
                <div
                    v-for="(slide, index) in Array($slots.default().length).fill('')"
                    :key="index"
                    class="h-2 w-2 cursor-pointer rounded-full bg-accent"
                    @click="slideTo($event, index)"
                />
            </div>
        </div>
    </div>
</template>
