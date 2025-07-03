<script setup lang="ts">
import { Pagination } from '../../index';
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { getInertiaRouter } from '../../Helpers';

const router = getInertiaRouter();

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

const props = defineProps<{
    total?: number;
    links?: PaginationLink[];
    collapsable?: boolean;
    collapse_id?: string;
    sticky?: boolean;
    overflow?: boolean;
    seperate?: boolean;
    showPerPage?: boolean;
    defaultPerPage?: number;
    responsive?: boolean;
}>();

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
        initSticky();

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
        clone.addEventListener('click', () => {
            th.click();
        });
    });

    const wrapperEl = sticky_wrapper.value;
    wrapperEl.style.width = table_container.value.offsetWidth + 'px';
};

if (props.sticky) {
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
            'visible! hidden': collapsable,
            'overflow-hidden': overflow,
        }"
        :id="collapse_id"
        data-te-collapse-item
    >
        <p v-if="total != null" class="text-sm text-gray-600">Found: {{ total }}</p>

        <div class="flex max-w-full flex-col">
            <div :class="{ 'overflow-x-auto': overflow }" ref="table_container">
                <table
                    class="min-w-full overflow-hidden rounded-xl border border-gray-200 bg-white text-left text-sm font-light shadow-sm"
                    :class="{
                        '[&>*>tr]:border-l-primary-500 mb-14 [&>*>tr]:border-l-4': collapsable,
                        'border-separate border-spacing-y-3 px-2': seperate,
                        // reponsive classes
                        // thead & tbody
                        'max-sm:[&_thead]:hidden': responsive,
                        // td&th
                        'max-sm:[&_.td-label]:block! max-sm:[&_td]:flex max-sm:[&_td]:justify-between max-sm:[&_td]:border-b max-sm:[&_td]:px-2! max-sm:[&_td:last-child]:border-b-0!':
                            responsive,
                        // tr
                        'max-sm:[&_tr]:mb-2 max-sm:[&_tr]:flex max-sm:[&_tr]:flex-col max-sm:[&_tr]:rounded-lg max-sm:[&_tr]:border max-sm:[&_tr]:border-gray-200 max-sm:[&_tr]:shadow-md':
                            responsive,
                    }"
                    ref="table"
                >
                    <div
                        v-if="sticky"
                        ref="sticky_wrapper"
                        class="fixed isolate z-40 hidden w-full overflow-hidden rounded-t-xl bg-neutral-100 shadow-md"
                    >
                        <div
                            ref="sticky_header"
                            class="w-max [&>th]:align-middle"
                            :class="{
                                'max-sm:hidden': responsive,
                            }"
                        ></div>
                    </div>
                    <slot />
                </table>
            </div>
        </div>
        <slot v-if="$slots.pagination" name="pagination" />
        <Pagination v-else-if="links" class="mt-6" :links="links" :showPerPage="showPerPage" :defaultPerPage="defaultPerPage" />
    </div>
</template>
