<script setup lang="ts">
/**
 * Read-only code block with a header bar showing a filename and a copy-to-clipboard
 * button. Takes `code` as an array of lines (joined with newlines), so snippets can be
 * written as string arrays in docs pages; it does not highlight syntax, only sets a
 * `language-*` class on the `<code>` element.
 *
 * @part root - the block
 * @part header - the header bar
 * @part filename - the filename text
 * @part copy - the `CopyButton`
 * @part pre - the `<pre>` holding the code
 */
import { computed } from 'vue';
import CopyButton from './CopyButton.vue';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface CodePreviewProps {
    /** Array of code lines to display */
    code: string[];
    /** Optional language label shown in the header (e.g. "css", "vue") */
    language?: string;
    /** Optional filename shown in the header instead of "Code Example" */
    filename?: string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['CodePreview']>;
}

const props = defineProps<CodePreviewProps>();

const { cls, attrs } = useUi('CodePreview', props);

const codeBlock = computed<string>(() => {
    if (!Array.isArray(props.code)) {
        console.error('CodePreview: `code` prop is not an array of strings.', props.code);
        return '';
    }
    return props.code.join('\n');
});
</script>

<template>
    <div v-bind="attrs()" :class="cls('root', 'relative mt-4 mb-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 dark:border-gray-700 dark:bg-gray-900')">
        <div
            :class="cls('header', 'flex items-center justify-between rounded-t-lg border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900/60 px-4 py-2 dark:border-gray-700 dark:bg-gray-800')"
        >
            <span :class="cls('filename', 'text-sm font-medium text-gray-700 dark:text-gray-200')">{{ filename ?? 'Code Example' }}</span>
            <CopyButton :value="codeBlock" label="Copy code" copied-label="Code copied" :class="cls('copy')" />
        </div>
        <pre :class="cls('pre', 'overflow-x-auto p-4 text-sm')"><code :class="`language-${language ?? 'vue'} text-gray-800 dark:text-gray-200 font-mono`">{{ codeBlock }}</code></pre>
    </div>
</template>
