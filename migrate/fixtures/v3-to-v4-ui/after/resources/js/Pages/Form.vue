<script setup>
import { Input, Pagination, Stats, Tooltip } from '@netblink/vue-components';

defineProps({ labelCls: String, listCls: String, linkCls: String, links: Array, stats: Array });
</script>

<template>
    <div>
        <Input v-model="name" :ui="{ input: 'rounded-none', label: labelCls }" />
        <Input v-model="email" :ui="{ input: 'rounded-none border-2', button: 'px-2' }" />
        <Pagination :links="links" :ui="{ list: listCls, link: [linkCls, 'text-sm'], activeLink: 'font-bold' }" />
        <Stats :stats="stats" :ui="{ stat: 'p-2' }" class="gap-2" />
        <Tooltip content="Hi" class="max-w-xs" :ui="{ arrow: 'fill-gray-800' }" />
    </div>
</template>
