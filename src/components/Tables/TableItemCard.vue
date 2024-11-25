<script setup>
import Link from '../../overrides/InertiaLink';
import { moneyFormat } from '../../Helpers';
import { stringify } from 'postcss';

const props = defineProps({
    key: Number,
    item: Object,
    itemId: {
        type: Object,
        id: {
            type: String,
            required: true,
        },
        routeName: {
            type: String,
            default: null,
            required: false,
        },
        routeData: {
            type: String,
            required: false,
        },
        prefix: {
            type: Boolean,
            required: false,
            default: true,
        },
    },
    extraText: String,
    title: {
        type: Object,
        text: {
            type: String,
            required: true,
        },
        href: {
            type: String,
            default: null,
            required: false,
        },
        routeName: {
            type: String,
            default: null,
            required: false,
        },
        routeData: {
            type: String,
            default: null,
            required: false,
        },
    },
    pills: {
        type: Array,
        text: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: false,
        },
    },
    options: {
        type: Object,
        text: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: false,
        },
        routeName: {
            type: String,
            default: null,
            required: false,
        },
        href: {
            type: String,
            default: null,
            required: false,
        },
        routeData: {
            type: String,
            default: null,
            required: false,
        },
    },
    timeStamp: String,
    amount: {
        text: {
            type: String,
            required: false,
            default: 'Amount: ',
        },
        amount: {
            type: String,
            required: true,
            default: '0.00',
        },
    },
});
</script>

<template>
    <div :key="props.key" class="mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300">
        <div class="mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 max-xxs:text-xxs">
            <div v-if="props.itemId || props.timeStamp" class="mb-2 h-fit w-full xs:w-fit">
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
                        class="whitespace-nowrap rounded-md border bg-primary p-1 px-2 text-white"
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
            <p class="w-full whitespace-normal font-semibold text-primary" v-if="props.extraText">
                Engineer Note:
                <span class="w-full break-words">{{ props.extraText }}</span>
            </p>
        </div>
        <!-- Options -->
        <div class="mb-1 flex flex-col">
            <template v-for="(option, index) in options">
                <span v-if="!option.routeName && !option.href" :style="{ color: option.color ? option.color : '#000' }">
                    {{ option.text }}
                </span>
                <Link
                    v-else
                    :href="option.href ? option.href : route(option.routeName, option.routeData)"
                    :style="{ color: option.color ? option.color : '#000' }"
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
