<script setup lang="ts">
//@ts-nocheck
import { computed } from 'vue';
import Link from '../../overrides/InertiaLink';
import { moneyFormat, getRoute } from '../../Helpers';

interface ItemId {
    id: string;
    routeName?: string | null;
    routeData?: string;
    prefix?: boolean;
}
interface Title {
    text: string;
    href?: string | null;
    routeName?: string | null;
    routeData?: string | null;
}
interface Pill {
    text: string;
    color?: string;
    routeName?: string | null;
    href?: string | null;
    routeData?: string | null;
}
interface Option {
    text: string;
    color?: string;
    routeName?: string | null;
    href?: string | null;
    routeData?: string | null;
}
interface Amount {
    text?: string;
    amount: string;
}
interface TableItemCardProps {
    item?: Record<string, any>;
    itemId?: ItemId;
    extraText?: string;
    title?: Title;
    pills?: Pill[];
    options?: Option[];
    timeStamp?: string;
    amount?: Amount;
}
const props = defineProps<TableItemCardProps>();

// Resolved once in setup; null when the host app exposes no route() helper.
const route = getRoute();

/**
 * Build an href from an explicit `href` or a route name, returning null when it
 * can't be resolved so the caller renders plain text instead of throwing.
 */
// `prefix` defaults to true when omitted.
const idLabel = computed(() => {
    if (!props.itemId) return '';
    const prefix = props.itemId.prefix || props.itemId.prefix === undefined ? '#' : '';
    return `${prefix}${props.itemId.id}`;
});

const hrefFor = (entry?: { href?: string | null; routeName?: string | null; routeData?: unknown }, fallbackData?: unknown) => {
    if (!entry) return null;
    if (entry.href) return entry.href;
    if (!route || !entry.routeName) return null;
    try {
        return route(entry.routeName, entry.routeData ?? fallbackData);
    } catch {
        return null;
    }
};
</script>

<template>
    <div
        class="mt-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:shadow-black/40"
    >
        <div class="max-xxs:text-xxs mb-2 flex w-full flex-wrap items-start justify-between gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div v-if="props.itemId || props.timeStamp" class="xs:w-fit mb-2 h-fit w-full">
                <!-- ID -->
                <!-- Built as one expression: splitting the '#' onto its own template
                     line made Vue emit whitespace, rendering "# 1001". -->
                <template v-if="props.itemId">
                    <Link v-if="hrefFor(props.itemId, props.itemId.id)" :href="hrefFor(props.itemId, props.itemId.id)">{{ idLabel }}</Link>
                    <span v-else>{{ idLabel }}</span>
                </template>
                <!-- Timestamp -->
                <span v-if="props.timeStamp" class="ml-1">
                    <template v-if="props.itemId">-</template>
                    {{ props.timeStamp }}
                </span>
            </div>
            <!-- Pills -->
            <div class="flex w-fit flex-wrap gap-1">
                <template v-for="(pill, index) in pills" :key="index">
                    <span
                        v-if="pill.text"
                        class="bg-primary-600 rounded-md px-2 py-0.5 text-xs font-medium whitespace-nowrap text-white"
                        :style="{
                            backgroundColor: pill.color ? pill.color : null,
                        }"
                    >
                        {{ pill.text }}
                    </span>
                </template>
            </div>
        </div>
        <!-- Title -->
        <template v-if="props.title">
            <Link v-if="hrefFor(props.title)" :href="hrefFor(props.title)" class="font-semibold">
                {{ props.title.text }}
            </Link>
            <p v-else class="font-semibold">
                {{ props.title.text }}
            </p>
        </template>
        <!-- Engineer Note -->
        <div class="mb-1">
            <p class="text-primary-700 dark:text-primary-300 w-full text-sm font-semibold whitespace-normal" v-if="props.extraText">
                Engineer Note:
                <span class="w-full font-normal break-words">{{ props.extraText }}</span>
            </p>
        </div>
        <!-- Options. No colour falls through to the card's own text colour so it
             stays readable in dark mode - it used to be hardcoded to #000. -->
        <div class="mb-1 flex flex-col gap-0.5 text-sm text-gray-700 dark:text-gray-300">
            <template v-for="(option, index) in options" :key="index">
                <Link
                    v-if="hrefFor(option)"
                    :href="hrefFor(option)"
                    :style="{ color: option.color || undefined }"
                    class="hover:underline"
                >
                    {{ option.text }}
                </Link>
                <span v-else :style="{ color: option.color || undefined }">
                    {{ option.text }}
                </span>
            </template>
        </div>
        <!-- Text in money format -->
        <div v-if="props.amount?.amount" class="text-sm font-semibold text-gray-900 dark:text-gray-100">
            <span>{{ props.amount.text + moneyFormat(props.amount.amount) }}</span>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
