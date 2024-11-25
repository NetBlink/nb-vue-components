<script setup>
import { Pagination } from '../../index';
import { nextTick } from 'vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { getInertiaRouter } from '@/Helpers';

const router = getInertiaRouter();

const props = defineProps({
    total: Number,
    links: Array,
    collapsable: {
        type: Boolean,
        default: false,
    },
    collapse_id: {
        type: String,
        default: 'collapse',
    },
    sticky: {
        type: Boolean,
        default: true,
    },
    overflow: {
        type: Boolean,
        default: true,
    },
    seperate: {
        type: Boolean,
        default: false,
    },
});

const table = ref(null);
const table_container = ref(null);
const sticky_wrapper = ref(null);
const sticky_header = ref(null);

const handleScroll = () => {
    const tableEl = table.value;
    const headerPosition = tableEl.getBoundingClientRect().top;
    const navHeight = document.querySelector('nav').offsetHeight;
    const posY = headerPosition - navHeight;
    const wrapperEl = sticky_wrapper.value;
    const distFromBot = tableEl.getBoundingClientRect().height + headerPosition - navHeight * 2;

    if (posY <= 0 && distFromBot > 0) {
        if (wrapperEl.dataset.sticky === 'true') return;

        wrapperEl.style.display = 'block';
        wrapperEl.dataset.sticky = 'true';

        wrapperEl.style.top = `${navHeight}px`;
        wrapperEl.style.width = table_container.value.offsetWidth + 'px';

        return;
    }

    wrapperEl.dataset.sticky = '';
    wrapperEl.style.display = '';
};

const updateScrollX = () => {
    sticky_header.value.style.marginLeft = -table_container.value.scrollLeft + 'px';
};

const initSticky = () => {
    if (!table.value) return;
    const header = table.value.querySelector('thead tr');
    let cloneContainer = sticky_header.value;
    cloneContainer.innerHTML = '';
    let ths = header?.querySelectorAll('th');
    ths?.forEach((th) => {
        const clone = th.cloneNode(true);
        clone.style.width = th.offsetWidth + 'px';
        cloneContainer.appendChild(clone);
    });

    const wrapperEl = sticky_wrapper.value;
    wrapperEl.style.width = table_container.value.offsetWidth + 'px';
};

if (props.sticky) {
    router.on('navigate', () => {
        nextTick(() => {
            initSticky();
        });
    });

    onMounted(() => {
        initSticky();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', initSticky, { passive: true });
        table_container.value.addEventListener('scroll', updateScrollX, { passive: true });
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', initSticky);
        table_container.value?.removeEventListener('scroll', updateScrollX);
    });
}
</script>
<template>
    <div
        :class="{
            '!visible hidden': collapsable,
            'overflow-hidden': overflow,
        }"
        :id="collapse_id"
        data-te-collapse-item
    >
        <p v-if="total" class="text-sm text-gray-600">Found: {{ total }}</p>

        <div class="flex flex-col">
            <div :class="{ 'overflow-x-auto': overflow }" ref="table_container">
                <table
                    class="min-w-full text-left text-sm font-light"
                    :class="{
                        'mb-14 [&>*>tr]:border-l-4 [&>*>tr]:border-l-primary-500': collapsable,
                        ' border-separate border-spacing-y-5 px-2': seperate,
                    }"
                    ref="table"
                >
                    <div v-if="sticky" ref="sticky_wrapper" class="fixed isolate z-40 hidden w-full overflow-hidden bg-neutral-100">
                        <div ref="sticky_header" class="w-max [&>th]:align-middle"></div>
                    </div>
                    <slot />
                </table>
            </div>
        </div>
        <slot v-if="$slots.pagination" name="pagination" />
        <Pagination v-else-if="links" class="mt-6" :links="links" />
    </div>
</template>
