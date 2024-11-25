<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { onMounted } from 'vue';
import { onUnmounted } from 'vue';
import { getInertiaRouter } from '../../Helpers';

library.add(faSortUp, faSortDown);

const props = defineProps({
    orderBy: String,
});
const orderDirection = ref('asc');
const isOrdering = ref(false);
let navigateEvent = null;
const router = getInertiaRouter();

onMounted(() => {
    if (!props.orderBy) return;
    navigateEvent = router.on('navigate', updateOrderDirection);
});

onUnmounted(() => {
    navigateEvent?.(); // Unsubscribe from the event
});

const updateOrderDirection = () => {
    const params = route().params;
    if (params.order_by === props.orderBy) {
        orderDirection.value = params.order_dir;
        isOrdering.value = true;
        return;
    }

    isOrdering.value = false;
};

const toggleOrder = () => {
    if (!props.orderBy) return;

    const newOrderDirection = orderDirection.value === 'asc' ? 'desc' : 'asc';
    const params = route().params;
    params.order_by = props.orderBy;
    params.order_dir = newOrderDirection;

    router.get(route(route().current()), params, {
        preserveState: true,
    });

    orderDirection.value = newOrderDirection;
    isOrdering.value = true;
};

const getArrowColor = (direction) => {
    return orderDirection.value === direction && isOrdering.value ? 'active text-primary' : 'text-gray-400';
};
</script>
<template>
    <th scope="col" class="relative py-4 text-center md:px-6 md:text-left" @click="toggleOrder" :class="orderBy ? 'cursor-pointer' : ''">
        <div class="flex items-center justify-between">
            <slot />
            <span v-if="orderBy" class="order-arrows flex h-full w-4 items-center md:right-4">
                <FontAwesomeIcon icon="fa-sort-up" class="absolute" :class="getArrowColor('desc')" />
                <FontAwesomeIcon icon="fa-sort-down" class="absolute" :class="getArrowColor('asc')" />
            </span>
        </div>
    </th>
</template>
