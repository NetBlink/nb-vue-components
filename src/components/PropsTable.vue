<script setup lang="ts">
interface PropRow {
    prop: string;
    type: string;
    default: string;
    description: string;
    highlight?: boolean;
}

interface Props {
    rows?: PropRow[];
}

const props = withDefaults(defineProps<Props>(), {
    rows: () => [],
});
</script>

<template>
    <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Prop</th>
                    <th class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Type</th>
                    <th class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Default</th>
                    <th class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">Description</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-if="props.rows.length === 0">
                    <td colspan="4" class="px-6 py-4 text-center text-sm text-gray-500">No props defined</td>
                </tr>
                <tr v-for="(row, index) in props.rows" :key="index" :class="{ 'bg-yellow-50': row.highlight }">
                    <td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">{{ row.prop }}</td>
                    <td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{{ row.type }}</td>
                    <td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{{ row.default }}</td>
                    <td class="px-6 py-4 text-sm text-gray-500">{{ row.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
