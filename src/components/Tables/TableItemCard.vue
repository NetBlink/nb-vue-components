<script setup lang="ts">
//@ts-nocheck
import Link from '../../overrides/InertiaLink';
import { moneyFormat } from '../../Helpers';

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
    key?: number;
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
</script>

<template>
    <div :key="props.key" class="mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300">
        <div class="max-xxs:text-xxs mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600">
            <div v-if="props.itemId || props.timeStamp" class="xs:w-fit mb-2 h-fit w-full">
                <!-- ID -->
                <template v-if="props.itemId">
                    <span v-if="!props.itemId.routeName">
                        <template v-if="props.itemId.prefix || props.itemId.prefix == undefined">#</template>
                        {{ props.itemId.id }}
                    </span>
                    <Link v-else :href="route(props.itemId.routeName, props.itemId.routeData ? props.itemId.routeData : props.itemId.id)">
                        <template v-if="props.itemId.prefix || props.itemId.prefix == undefined">#</template>
                        {{ props.itemId.id }}
                    </Link>
                </template>
                <!-- Timestamp -->
                <span v-if="props.timeStamp" class="ml-1">
                    <template v-if="props.itemId">-</template>
                    {{ props.timeStamp }}
                </span>
            </div>
            <!-- Pills -->
            <div class="flex w-fit flex-wrap">
                <template v-for="(pill, index) in pills" :key="index">
                    <span
                        v-if="pill.text"
                        class="bg-primary rounded-md border p-1 px-2 whitespace-nowrap text-white"
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
            <p v-if="!props.title.routeName && !props.title.href" class="font-semibold">
                {{ props.title.text }}
            </p>
            <Link v-else :href="props.title.href ? props.title.href : route(props.title.routeName, props.title.routeData)" class="font-semibold">
                {{ props.title.text }}
            </Link>
        </template>
        <!-- Engineer Note -->
        <div class="mb-1">
            <p class="text-primary w-full font-semibold whitespace-normal" v-if="props.extraText">
                Engineer Note:
                <span class="w-full break-words">{{ props.extraText }}</span>
            </p>
        </div>
        <!-- Options -->
        <div class="mb-1 flex flex-col">
            <template v-for="(option, index) in options" :key="index">
                <span v-if="!option.routeName && !option.href" :style="{ color: option.color ? option.color : '#000' }">
                    {{ option.text }}
                </span>
                <Link
                    v-else
                    :href="option.href ? option.href : route(option.routeName, option.routeData)"
                    :style="{ color: option.color ? option.color : '#000' }"
                    :key="'link-' + index"
                >
                    {{ option.text }}
                </Link>
            </template>
        </div>
        <!-- Text in money format -->
        <div v-if="props.amount?.amount">
            <span>{{ props.amount.text + moneyFormat(props.amount.amount) }}</span>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
