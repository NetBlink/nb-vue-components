<script setup>
import { Input, Select, Stats } from '@netblink/vue-components';

defineProps({ inputUi: Object, base: Object, statsUi: Object, stats: Array });
</script>

<template>
    <div>
        <Input v-model="name" :ui="inputUi" input-custom-class="rounded-none" />
        <Select v-model="role" :ui="{ ...base }" custom-class="w-full" />
        <Stats :stats="stats" :ui="statsUi" custom-stat-class="p-2" custom-container-class="gap-2" />
    </div>
</template>
