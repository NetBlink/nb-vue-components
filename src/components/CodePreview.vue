<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface CodePreviewProps {
    /** Array of code lines to display */
    code: string[];
}

const props = defineProps<CodePreviewProps>();

const codeBlock = ref<string>('');
const copyStatus = ref<string>('Copy');

/**
 * Joins code array into a single string on mount
 */
onMounted(() => {
    if (Array.isArray(props.code)) {
        codeBlock.value = props.code.join('\n');
    } else {
        console.error('CodePreview: `code` prop is not an array of strings.', props.code);
    }
});

/**
 * Copies the code to clipboard
 */
const copy = async (): Promise<void> => {
    try {
        await navigator.clipboard.writeText(codeBlock.value);
        copyStatus.value = '✓ Copied!';
        setTimeout(() => {
            copyStatus.value = 'Copy';
        }, 2000);
    } catch (error) {
        console.error('Failed to copy code:', error);
        copyStatus.value = '✗ Failed';
        setTimeout(() => {
            copyStatus.value = 'Copy';
        }, 2000);
    }
};
</script>

<template>
    <div class="relative mt-4 mb-6 rounded-lg border border-gray-200 bg-gray-50">
        <div class="flex items-center justify-between rounded-t-lg border-b border-gray-200 bg-gray-100 px-4 py-2">
            <span class="text-sm font-medium text-gray-700">Code Example</span>
            <button
                @click="copy"
                class="rounded px-3 py-1 text-sm text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-800"
                :class="{ 'text-green-600': copyStatus.includes('✓'), 'text-red-600': copyStatus.includes('✗') }"
                title="Copy to clipboard"
            >
                {{ copyStatus }}
            </button>
        </div>
        <pre class="overflow-x-auto p-4 text-sm"><code class="language-vue text-gray-800 font-mono">{{ codeBlock }}</code></pre>
    </div>
</template>
