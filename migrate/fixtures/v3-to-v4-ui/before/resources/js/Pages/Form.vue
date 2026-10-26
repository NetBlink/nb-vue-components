<script setup>
import { Input, Pagination, Stats, Tooltip } from '@netblink/vue-components';

defineProps({ labelCls: String, listCls: String, linkCls: String, links: Array, stats: Array });
</script>

<template>
    <div>
        <Input v-model="name" input-custom-class="rounded-none" :label-custom-class="labelCls" />
        <Input v-model="email" :ui="{ input: 'border-2' }" input-custom-class="rounded-none" button-custom-class="px-2" />
        <Pagination :links="links" :ui="{ list: listCls, link: 'text-sm' }" :custom-link-class="linkCls" customActiveLinkClass="font-bold" />
        <Stats :stats="stats" :ui="{}" custom-stat-class="p-2" custom-container-class="gap-2" />
        <Tooltip content="Hi" content-class="max-w-xs" arrow-class="fill-gray-800" />
    </div>
</template>
