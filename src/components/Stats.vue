<script setup lang="ts">
/**
 * Responsive grid of clickable stat tiles used as quick filters above a table. Clicking a
 * tile emits `updateSearch` with that tile's `name`, or `null` when the already-selected
 * tile is clicked again to clear it. Which tile shows as selected is read from the Inertia
 * page URL's query string (parameter named by `statusName`, default `status`), and falls
 * back to all-unselected outside an Inertia app.
 */
import { computed } from 'vue';
import { getInertiaPage } from '../Helpers';
import type { NbParts, UiProp } from '../ui/parts';
import type { MotionLevel } from '../ui/motion';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

/**
 * @prop {StatItem[]}    stats - `{ name, value, label? }[]` - label falls back to `name` for display
 * @prop {string|null}   [statusName=null] - query-string parameter used to compute the selected tile
 * @prop {string}        [customContainerClass=''] - deprecated, use `class`
 * @prop {string}        [customStatClass=''] - deprecated, use `:ui="{ stat: '...' }"`
 * @prop {string}        [customStatLabelClass=''] - deprecated, use `:ui="{ label: '...' }"`
 * @prop {string}        [customStatValueClass=''] - deprecated, use `:ui="{ value: '...' }"`
 * @emits updateSearch - `(name: string | null)` - fires when a tile is clicked
 * @part root - the grid
 * @part stat - each tile
 * @part value - the value section
 * @part valueText - the number
 * @part label - the label section
 * @part labelText - the label text
 * @part underline - the hover underline
 */

interface StatItem {
    /** Unique key for the stat - emitted in updateSearch */
    name: string;
    /** Number displayed in the value area */
    value: number;
    /** Display label (falls back to `name` if omitted) */
    label?: string;
}

export interface StatsProps {
    stats: StatItem[];
    statusName?: string | null;
    customContainerClass?: string;
    customStatClass?: string;
    customStatLabelClass?: string;
    customStatValueClass?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['Stats']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

export interface StatsEmits {
    updateSearch: [status: string | null];
}

const emit = defineEmits<StatsEmits>();

const props = withDefaults(defineProps<StatsProps>(), {
    statusName: null,
    customContainerClass: '',
    customStatClass: '',
    customStatLabelClass: '',
    customStatValueClass: '',
});

const { cls, attrs } = useUi('Stats', props, {
    aliases: { customContainerClass: 'root', customStatClass: 'stat', customStatLabelClass: 'label', customStatValueClass: 'value' },
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

    // No Inertia page (non-Inertia host, e.g. the docs site) means no query string
    // to read selection from - render every tile unselected rather than blowing up.
    if (page?.url?.includes('?')) {
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
    <div v-bind="attrs()" :class="cls('root', 'grid gap-4')" style="grid-template-columns: repeat(auto-fit, minmax(164px, 1fr))">
        <div
            v-for="s in stats"
            :key="s.value"
            :class="
                cls('stat', 'group relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-black/40', {
                    'border-primary-200 bg-primary-50 ring-primary-500 ring-2 dark:border-primary-700 dark:bg-primary-900/30': ifSelected(s.name),
                })
            "
            @click="onClick(s.name)"
        >
            <!-- Value Section -->
            <div :class="cls('value', 'px-6 py-4')">
                <div :class="cls('valueText', 'group-hover:text-primary-600 text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors dark:text-gray-100 dark:group-hover:text-primary-300')">
                    {{ s.value }}
                </div>
            </div>

            <!-- Label Section -->
            <div :class="cls('label', 'border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 px-6 py-3 dark:border-gray-700 dark:bg-gray-900/40')">
                <div :class="cls('labelText', 'text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-100')">
                    {{ s.label ?? s.name }}
                </div>
            </div>

            <!-- Hover Effect Indicator -->
            <div
                :class="cls('underline', 'from-primary-500 to-primary-600 absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100')"
            ></div>
        </div>
    </div>
</template>
