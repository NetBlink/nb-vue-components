<script setup>
import { onMounted, ref } from 'vue';
const props = defineProps({
    code: Array,
});

const codeBlock = ref(null);

onMounted(() => {
    codeBlock.value = props.code.join('\n');
});

const copy = () => {
    console.log(codeBlock.value);
    navigator.clipboard.writeText(codeBlock.value);
};
</script>

<template>
    <div class="relative mt-2 max-w-full overflow-auto overflow-x-scroll rounded-md">
        <div class="absolute right-3 top-1 text-right text-white hover:cursor-pointer" @click="copy">copy</div>
        <pre v-highlightjs><code class="javascript p-4!" >{{ codeBlock }}</code></pre>
    </div>
</template>
