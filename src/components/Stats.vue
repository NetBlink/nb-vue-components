<script setup lang="ts">
import { computed } from 'vue';
import { getInertiaPage } from '../Helpers';

/**
 * Stats component for displaying statistical data with clickable filters
 *
 * @component
 *
 * @prop {object} stats - Object containing statistical data
 * @prop {string} statusName - Name of the status parameter for routing
 * @prop {string} customContainerClass - Custom CSS classes for the container
 * @prop {string} customStatClass - Custom CSS classes for each stat item
 * @prop {string} customStatLabelClass - Custom CSS classes for stat labels
 * @prop {string} customStatValueClass - Custom CSS classes for stat values
 */

interface StatItem {
    name: string;
    value: number;
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
            class="group relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
            :class="{
                'border-primary-200 bg-primary-50 ring-primary-500 ring-2': ifSelected(s.name),
                [customStatClass]: customStatClass,
            }"
            @click="onClick(s.name)"
        >
            <!-- Value Section -->
            <div class="px-6 py-4" :class="[customStatValueClass]">
                <div class="group-hover:text-primary-600 text-2xl font-bold text-gray-900 transition-colors">
                    {{ s.value }}
                </div>
            </div>

            <!-- Label Section -->
            <div class="border-t border-gray-100 bg-gray-50/50 px-6 py-3" :class="[customStatLabelClass]">
                <div class="text-sm font-medium text-gray-600 transition-colors group-hover:text-gray-900">
                    {{ s.label ?? s.name }}
                </div>
            </div>

            <!-- Hover Effect Indicator -->
            <div
                class="from-primary-500 to-primary-600 absolute bottom-0 left-0 h-1 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100"
            ></div>
        </div>
    </div>
</template>
