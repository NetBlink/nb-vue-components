<script setup lang="ts">
/**
 * Read-only code block with a header bar showing a filename and a copy-to-clipboard
 * button. Takes `code` as an array of lines (joined with newlines), so snippets can be
 * written as string arrays in docs pages; it does not highlight syntax, only sets a
 * `language-*` class on the `<code>` element.
 */
import { computed, ref } from 'vue';

interface CodePreviewProps {
    /** Array of code lines to display */
    code: string[];
    /** Optional language label shown in the header (e.g. "css", "vue") */
    language?: string;
    /** Optional filename shown in the header instead of "Code Example" */
    filename?: string;
}

const props = defineProps<CodePreviewProps>();

const codeBlock = computed<string>(() => {
    if (!Array.isArray(props.code)) {
        console.error('CodePreview: `code` prop is not an array of strings.', props.code);
        return '';
    }
    return props.code.join('\n');
});
const copyStatus = ref<string>('Copy');

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
            <span class="text-sm font-medium text-gray-700 dark:text-gray-200">{{ filename ?? 'Code Example' }}</span>
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
        <pre class="overflow-x-auto p-4 text-sm"><code :class="`language-${language ?? 'vue'} text-gray-800 dark:text-gray-200 font-mono`">{{ codeBlock }}</code></pre>
    </div>
</template>
