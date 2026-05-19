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
    <div class="relative mt-4 mb-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 dark:border-gray-700 dark:bg-gray-900">
        <div
            class="flex items-center justify-between rounded-t-lg border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900/60 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
        >
            <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Code Example</span>
            <button
                @click="copy"
                class="rounded px-3 py-1 text-sm text-gray-600 dark:text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100"
                :class="{
                    'text-green-600 dark:text-green-400': copyStatus.includes('✓'),
                    'text-red-600 dark:text-red-400': copyStatus.includes('✗'),
                }"
                title="Copy to clipboard"
            >
                {{ copyStatus }}
            </button>
        </div>
        <pre class="overflow-x-auto p-4 text-sm"><code class="language-vue text-gray-800 dark:text-gray-200 font-mono">{{ codeBlock }}</code></pre>
    </div>
</template>
