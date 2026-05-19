<script setup lang="ts">
import { computed } from 'vue';
import { getInertiaPage } from '../Helpers';

/**
 * Stats — clickable stat tiles used as quick filters.
 *
 * Each item is a `{ name, value, label? }` object. Clicking a tile emits
 * `updateSearch` with the tile's name (or `null` when the same tile is
 * clicked again to clear). Selection state is read from a URL query
 * parameter named by `statusName` (defaults to `status`).
 *
 * @prop {StatItem[]}    stats — `{ name, value, label? }[]` — label falls back to `name` for display
 * @prop {string|null}   [statusName=null] — query-string parameter used to compute the selected tile
 * @prop {string}        [customContainerClass=''] — extra classes on the outer grid
 * @prop {string}        [customStatClass=''] — extra classes on each stat card
 * @prop {string}        [customStatLabelClass=''] — extra classes on each stat label
 * @prop {string}        [customStatValueClass=''] — extra classes on each stat value
 * @emits updateSearch — `(name: string | null)` — fires when a tile is clicked
 */

interface StatItem {
    /** Unique key for the stat — emitted in updateSearch */
    name: string;
    /** Number displayed in the value area */
    value: number;
    /** Display label (falls back to `name` if omitted) */
    label?: string;
}

interface Props {
    stats: StatItem[];
    statusName?: string | null;
    customContainerClass?: string;
    customStatClass?: string;
    customStatLabelClass?: string;
    customStatValueClass?: string;
}

const emit = defineEmits<{
    updateSearch: [status: string | null];
}>();

const props = withDefaults(defineProps<Props>(), {
    statusName: null,
    customContainerClass: '',
    customStatClass: '',
    customStatLabelClass: '',
    customStatValueClass: '',
});

// Access route parameters through the helper pattern
const page = getInertiaPage();

const onClick = (status: string) => {
    let newStatus: string | null = status;
    if (ifSelected(status)) {
        newStatus = null;
    }
    emit('updateSearch', newStatus);
};

const ifSelected = (status: string): boolean => {
    const params: Record<string, string> = {};

    if (page.url.includes('?')) {
        const searchParams = new URLSearchParams(page.url.split('?')[1]);
        searchParams.forEach((value, key) => {
            params[key] = value;
        });
    }

    if (props.statusName != null) {
        return params[props.statusName] == status;
    }
    return params.status == status;
};
</script>

<template>
    <div class="grid gap-4" :class="[customContainerClass]" style="grid-template-columns: repeat(auto-fit, minmax(164px, 1fr))">
        <div
            v-for="s in stats"
            :key="s.value"
            class="group relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-black/40"
            :class="{
                'border-primary-200 bg-primary-50 ring-primary-500 ring-2 dark:border-primary-700 dark:bg-primary-900/30': ifSelected(s.name),
                [customStatClass]: customStatClass,
            }"
            @click="onClick(s.name)"
        >
            <!-- Value Section -->
            <div class="px-6 py-4" :class="[customStatValueClass]">
                <div class="group-hover:text-primary-600 text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors dark:text-gray-100 dark:group-hover:text-primary-300">
                    {{ s.value }}
                </div>
            </div>

            <!-- Label Section -->
            <div class="border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 px-6 py-3 dark:border-gray-700 dark:bg-gray-900/40" :class="[customStatLabelClass]">
                <div class="text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-100">
                    {{ s.label ?? s.name }}
                </div>
            </div>

            <!-- Hover Effect Indicator -->
            <div
                class="from-primary-500 to-primary-600 absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100"
            ></div>
        </div>
    </div>
</template>
