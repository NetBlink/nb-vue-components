<script setup lang="ts">
/**
 * Documentation-only table that renders an array of `{ prop, type, default, description }`
 * rows into a four-column prop reference, with an optional `highlight` flag to tint a row
 * and a "No props defined" empty state. Used by the docs pages, not intended for app UI.
 *
 * @part root - the scroll wrapper
 * @part empty - the cell shown when there are no rows
 */
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

interface PropRow {
    prop: string;
    type: string;
    default: string;
    description: string;
    highlight?: boolean;
}

export interface PropsTableProps {
    rows?: PropRow[];
    /** Shown when there are no rows. Default `'No props defined'` */
    emptyMessage?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['PropsTable']>;
}

const props = withDefaults(defineProps<PropsTableProps>(), {
    rows: () => [],
    emptyMessage: 'No props defined',
});

const { cls, attrs } = useUi('PropsTable', props);
</script>

<template>
    <div v-bind="attrs()" :class="cls('root', 'overflow-x-auto')">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-900/50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-gray-400 uppercase dark:text-gray-400">Prop</th>
                    <th class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-gray-400 uppercase dark:text-gray-400">Type</th>
                    <th class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-gray-400 uppercase dark:text-gray-400">Default</th>
                    <th class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-gray-400 uppercase dark:text-gray-400">Description</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:divide-gray-700 dark:bg-gray-800">
                <tr v-if="props.rows.length === 0">
                    <td colspan="4" :class="cls('empty', 'px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400')">{{ emptyMessage }}</td>
                </tr>
                <tr
                    v-for="(row, index) in props.rows"
                    :key="index"
                    :class="{ 'bg-yellow-50 dark:bg-yellow-500/10': row.highlight }"
                >
                    <td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 dark:text-gray-100">{{ row.prop }}</td>
                    <td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-300">{{ row.type }}</td>
                    <td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-300">{{ row.default }}</td>
                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">{{ row.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
