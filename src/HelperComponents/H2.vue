<script setup lang="ts">
interface H2Props {
    title: string;
}

const props = defineProps<H2Props>();
</script>

<template>
    <div class="mt-12 mb-8">
        <h2 :id="title.toLowerCase().replace(/\s+/g, '-')" class="border-primary-600 mb-6 border-b-2 pb-2 text-2xl font-bold text-gray-900">
            {{ title }}
        </h2>
    </div>
</template>
