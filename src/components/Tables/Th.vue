<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref, onMounted, onUnmounted } from 'vue';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { getInertiaRouter, getInertiaPage } from '../../Helpers';

/**
 * Table header component with sortable functionality
 *
 * @component
 *
 * @prop {string} orderBy - The field name to order by when this header is clicked
 */

library.add(faSortUp, faSortDown);

interface Props {
    orderBy?: string;
}

const props = defineProps<Props>();
const orderDirection = ref<'asc' | 'desc'>('asc');
const isOrdering = ref(false);
let navigateEvent: (() => void) | null = null;
const router = getInertiaRouter();
const page = getInertiaPage();

onMounted(() => {
    if (!props.orderBy) return;
    navigateEvent = router.on('navigate', updateOrderDirection);
    updateOrderDirection(); // Initialize the state
});

onUnmounted(() => {
    navigateEvent?.(); // Unsubscribe from the event
});

const parseUrlParams = (url: string): Record<string, string> => {
    const params: Record<string, string> = {};

    if (url.includes('?')) {
        const searchParams = new URLSearchParams(url.split('?')[1]);
        searchParams.forEach((value, key) => {
            params[key] = value;
        });
    }

    return params;
};

const updateOrderDirection = () => {
    const params = parseUrlParams(page.url);
    if (params.order_by === props.orderBy) {
        orderDirection.value = (params.order_dir as 'asc' | 'desc') || 'asc';
        isOrdering.value = true;
        return;
    }

    isOrdering.value = false;
};

const toggleOrder = () => {
    if (!props.orderBy) return;

    const newOrderDirection: 'asc' | 'desc' = orderDirection.value === 'asc' ? 'desc' : 'asc';
    const currentParams = parseUrlParams(page.url);

    const params = {
        ...currentParams,
        order_by: props.orderBy,
        order_dir: newOrderDirection,
    };

    // Get current route name from page component or use a default path
    const currentPath = page.url.split('?')[0];

    router.get(currentPath, params, {
        preserveState: true,
    });

    orderDirection.value = newOrderDirection;
    isOrdering.value = true;
};

const getArrowColor = (direction: 'asc' | 'desc'): string => {
    return orderDirection.value === direction && isOrdering.value ? 'active text-primary' : 'text-gray-400';
};
</script>
<template>
    <th
        scope="col"
        class="relative border-b border-gray-200 bg-neutral-100 px-4 py-3 text-center font-semibold text-gray-700 transition select-none hover:rounded-t-lg hover:bg-neutral-200 md:px-6 md:text-left"
        @click="toggleOrder"
        :class="orderBy ? 'cursor-pointer' : ''"
    >
        <div class="flex items-center justify-between gap-2">
            <slot />
            <span v-if="orderBy" class="order-arrows flex h-full w-4 items-center md:right-4">
                <FontAwesomeIcon icon="fa-sort-up" class="absolute" :class="getArrowColor('desc')" />
                <FontAwesomeIcon icon="fa-sort-down" class="absolute" :class="getArrowColor('asc')" />
            </span>
        </div>
    </th>
</template>
