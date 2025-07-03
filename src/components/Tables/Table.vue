<script setup lang="ts">
import { Pagination } from '../../index';
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { getInertiaRouter } from '@/Helpers';

const router = getInertiaRouter();

interface TableProps {
    total?: number;
    links?: any[];
    collapsable?: boolean;
    collapse_id?: string;
    sticky?: boolean;
    overflow?: boolean;
    seperate?: boolean;
    showPerPage?: boolean;
    defaultPerPage?: number;
    responsive?: boolean;
}

const props = defineProps<TableProps>();

const table = ref<HTMLElement | null>(null);
const table_container = ref<HTMLElement | null>(null);
const sticky_wrapper = ref<HTMLElement | null>(null);
const sticky_header = ref<HTMLElement | null>(null);

const handleScroll = () => {
    const tableEl = table.value;
    if (!tableEl) return;
    const headerPosition = tableEl.getBoundingClientRect().top;
    const nav = document.querySelector('nav') as HTMLElement;
    const navHeight = nav ? nav.offsetHeight : 0;
    const posY = headerPosition - navHeight;
    const wrapperEl = sticky_wrapper.value as HTMLElement;
    const distFromBot = tableEl.getBoundingClientRect().height + headerPosition - navHeight * 2;

    if (posY <= 0 && distFromBot > 0) {
        if (wrapperEl.dataset.sticky === 'true') return;
        initSticky();
        wrapperEl.style.display = 'block';
        wrapperEl.dataset.sticky = 'true';
        wrapperEl.style.top = `${navHeight}px`;
        wrapperEl.style.width = table_container.value?.offsetWidth + 'px';
        return;
    }
    wrapperEl.dataset.sticky = '';
    wrapperEl.style.display = '';
};

const updateScrollX = () => {
    if (sticky_header.value && table_container.value) {
        sticky_header.value.style.marginLeft = -table_container.value.scrollLeft + 'px';
    }
};

const initSticky = () => {
    if (!table.value) return;
    const header = table.value.querySelector('thead tr');
    let cloneContainer = sticky_header.value;
    if (!cloneContainer) return;
    cloneContainer.innerHTML = '';
    let ths = header?.querySelectorAll('th');
    ths?.forEach((th) => {
        const clone = th.cloneNode(true) as HTMLElement;
        clone.style.width = (th as HTMLElement).offsetWidth + 'px';
        cloneContainer.appendChild(clone);
        clone.addEventListener('click', () => {
            (th as HTMLElement).click();
        });
    });
    const wrapperEl = sticky_wrapper.value;
    if (wrapperEl && table_container.value) {
        wrapperEl.style.width = table_container.value.offsetWidth + 'px';
    }
};

if (props.sticky) {
    onMounted(() => {
        initSticky();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', initSticky, { passive: true });
        table_container.value?.addEventListener('scroll', updateScrollX, { passive: true });
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
            'rounded-xl border border-gray-200 bg-white shadow': true,
        }"
        :id="collapse_id"
        data-te-collapse-item
    >
        <p v-if="total != null" class="px-4 pt-4 text-sm text-gray-600">Found: {{ total }}</p>
        <div class="flex flex-col">
            <div :class="{ 'overflow-x-auto': overflow }" ref="table_container">
                <table
                    class="min-w-full overflow-hidden rounded-lg text-left text-sm font-light [&_td]:relative [&_tr]:relative [&_tr]:rounded-lg [&_tr]:before:absolute [&_tr]:before:-z-0 [&_tr]:before:size-full [&_tr]:before:bg-transparent [&_tr]:before:transition-all [&_tr]:hover:before:bg-gray-50/50"
                    :class="{
                        '[&>*>tr]:border-l-primary-500 mb-14 [&>*>tr]:border-l-4': collapsable,
                        'border-separate border-spacing-y-5 px-2': seperate,
                        '[&_thead]:max-sm:hidden': responsive,
                        '[&_.td-label]:max-sm:!block [&_td]:max-sm:flex [&_td]:max-sm:justify-between [&_td]:max-sm:border-b [&_td]:max-sm:!px-2 [&_td:last-child]:max-sm:!border-b-0':
                            responsive,
                        '[&_tr]:max-sm:mb-2 [&_tr]:max-sm:flex [&_tr]:max-sm:flex-col [&_tr]:max-sm:rounded-md [&_tr]:max-sm:border [&_tr]:max-sm:border-gray-200 [&_tr]:max-sm:shadow-md':
                            responsive,
                    }"
                    ref="table"
                >
                    <div
                        v-if="sticky"
                        ref="sticky_wrapper"
                        class="fixed isolate z-40 hidden w-full overflow-hidden rounded-t-xl bg-neutral-100 shadow"
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
