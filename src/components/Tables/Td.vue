<script setup lang="ts">
import { computed } from 'vue';
import type { TableCellProps } from './types';

const props = withDefaults(defineProps<TableCellProps>(), {
    align: 'left',
    responsive: true,
    nowrap: false
});

const tdClasses = computed(() => [
    'px-6 py-4 text-sm text-gray-900',
    {
        'text-left': props.align === 'left',
        'text-center': props.align === 'center',
        'text-right': props.align === 'right',
        
        'block border-b border-gray-100 last:border-b-0 sm:table-cell sm:border-b-0': props.responsive,
        'px-4 py-2 sm:px-6 sm:py-4': props.responsive,
        
        'whitespace-nowrap': props.nowrap,
        
        'w-0': props.width === 'auto',
    }
]);

const tdStyles = computed(() => ({
    width: props.width && props.width !== 'auto' ? props.width : undefined
}));
</script>
<template>
    <td 
        :class="tdClasses"
        :style="tdStyles"
    >
        <div v-if="props.label && props.responsive" class="sm:hidden">
            <span class="font-medium text-gray-500">{{ props.label }}:</span>
            <span class="ml-2"><slot /></span>
        </div>
        <div v-else>
            <slot />
        </div>
    </td>
</template>
