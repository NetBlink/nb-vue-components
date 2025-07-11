<script setup lang="ts">
import { computed, provide } from 'vue';
import { Table, Thead, Tbody, Th, Td } from '../../index';
import { useTable } from '../../composables/useTable';
import type { TableProps, TableRow, TableColumn } from './types';

interface EnhancedTableProps extends TableProps {
    columns?: TableColumn[];
    autoGenerateColumns?: boolean;
    selectable?: boolean;
    sortable?: boolean;
    resource?: string;
}

const props = withDefaults(defineProps<EnhancedTableProps>(), {
    responsive: true,
    striped: false,
    bordered: false,
    hover: true,
    size: 'md',
    variant: 'default',
    autoGenerateColumns: false,
    selectable: false,
    sortable: false,
    showPagination: true
});

const emit = defineEmits<{
    'row-click': [row: TableRow, index: number];
    'selection-change': [selected: TableRow[]];
    'sort': [column: string, direction: 'asc' | 'desc'];
}>();

const table = useTable({
    sortable: props.sortable,
    selectable: props.selectable,
    multiple: true,
    sticky: props.sticky,
    resource: props.resource
});

provide('table', {
    ...table,
    props,
    emit
});

const computedColumns = computed(() => {
    if (props.columns) {
        return props.columns;
    }
    
    if (props.autoGenerateColumns && props.data && props.data.length > 0) {
        return Object.keys(props.data[0]).map(key => ({
            key,
            label: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'),
            sortable: props.sortable,
            width: undefined,
            align: 'left' as const
        }));
    }
    
    return [];
});

const handleRowSelect = (row: TableRow, selected: boolean) => {
    if (table.select) {
        table.select(row);
        emit('selection-change', table.selected?.value || []);
    }
};

const handleRowClick = (row: TableRow, index: number) => {
    emit('row-click', row, index);
};

const handleSort = (column: string) => {
    if (table.sort) {
        table.sort(column);
        const direction = table.getSortDirection?.(column) || 'asc';
        emit('sort', column, direction);
    }
};

const displayData = computed(() => {
    return table.rows?.value || props.data || [];
});
</script>

<template>
    <Table v-bind="props">
        <template v-if="computedColumns.length > 0">
            <Thead>
                <tr>
                    <Th
                        v-for="column in computedColumns"
                        :key="column.key"
                        :column="column.key"
                        :sortable="column.sortable"
                        :width="column.width || undefined"
                        :align="column.align || 'left'"
                        @click="column.sortable ? handleSort(column.key) : null"
                    >
                        {{ column.label }}
                    </Th>
                </tr>
            </Thead>
            <Tbody 
                :data="displayData"
                :loading="table.isLoading?.value"
                :empty-message="props.emptyMessage"
            >
                <tr
                    v-for="(row, index) in displayData"
                    :key="row.id || index"
                    :class="[
                        'border-b border-gray-200 transition-colors hover:bg-gray-50',
                        {
                            'cursor-pointer': props.selectable,
                            'bg-blue-50': table.isSelected?.(row)
                        }
                    ]"
                    @click="handleRowClick(row, index)"
                >
                    <Td
                        v-for="column in computedColumns"
                        :key="column.key"
                        :align="column.align || 'left'"
                        :width="column.width || undefined"
                        :nowrap="column.key === 'id'"
                    >
                        <slot 
                            :name="`cell-${column.key}`" 
                            :row="row" 
                            :column="column" 
                            :value="row[column.key]"
                        >
                            {{ row[column.key] }}
                        </slot>
                    </Td>
                </tr>
            </Tbody>
        </template>
        
        <template v-else>
            <slot />
        </template>
    </Table>
</template>
