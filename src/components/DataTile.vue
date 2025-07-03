<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed } from 'vue';
import type { ComponentTheme } from '../Types';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
    value: string | number;
    label: string;
    icon?: IconProp;
    selected?: boolean;
    customStatClass?: string;
    customStatValueClass?: string;
    customStatLabelClass?: string;
    theme?: ComponentTheme;
}

const props = withDefaults(defineProps<Props>(), {
    selected: false,
    customStatClass: '',
    customStatValueClass: '',
    customStatLabelClass: '',
    theme: 'primary',
});

const themeClasses = computed(() => {
    switch (props.theme) {
        case 'secondary':
            return {
                base: 'border-secondary-200 bg-secondary-50 ring-secondary-500',
                hoverText: 'group-hover:text-secondary-600',
                gradient: 'from-secondary-500 to-secondary-600',
            };
        case 'danger':
            return {
                base: 'border-danger-200 bg-danger-50 ring-danger-500',
                hoverText: 'group-hover:text-danger-600',
                gradient: 'from-danger-500 to-danger-600',
            };
        case 'success':
            return {
                base: 'border-success-200 bg-success-50 ring-success-500',
                hoverText: 'group-hover:text-success-600',
                gradient: 'from-success-500 to-success-600',
            };
        case 'warning':
            return {
                base: 'border-warning-200 bg-warning-50 ring-warning-500',
                hoverText: 'group-hover:text-warning-600',
                gradient: 'from-warning-500 to-warning-600',
            };
        default:
            return {
                base: 'border-primary-200 bg-primary-50 ring-primary-500',
                hoverText: 'group-hover:text-primary-600',
                gradient: 'from-primary-500 to-primary-600',
            };
    }
});
</script>

<template>
    <div
        class="group relative cursor-pointer overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-200 hover:shadow-md"
        :class="{
            [themeClasses.base]: true,
            'ring-2': selected,
            [customStatClass]: customStatClass,
        }"
    >
        <!-- Value Section -->
        <div class="relative overflow-clip px-6 py-4" :class="[customStatValueClass]">
            <div class="absolute inset-0 isolate z-0 size-full">
                <FontAwesomeIcon
                    :icon="icon"
                    :class="[themeClasses.hoverText]"
                    size="3x"
                    class="absolute top-1/2 right-2 h-4/5 -translate-y-1/2 text-gray-400 opacity-50 transition-colors"
                />
            </div>
            <div :class="[themeClasses.hoverText]" class="text-2xl font-bold text-gray-900 transition-colors">
                {{ value }}
            </div>
        </div>

        <div class="border-t border-gray-100 bg-gray-50/50 px-6 py-3" :class="[customStatLabelClass]">
            <div :class="[themeClasses.hoverText]" class="text-sm font-medium text-gray-600 transition-colors">
                {{ label }}
            </div>
        </div>

        <div
            :class="[themeClasses.gradient]"
            class="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100"
        ></div>
    </div>
</template>
