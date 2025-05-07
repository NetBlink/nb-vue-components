<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title: String,
});
</script>

<template>
    <div class="gutters mt-10 flex items-center">
        <h2 :id="title.toLowerCase()" class="mr-4 whitespace-nowrap text-lg font-bold text-primary"># {{ title }}</h2>
        <div class="w-full grow border-t-2 border-dashed border-primary"></div>
    </div>
</template>
