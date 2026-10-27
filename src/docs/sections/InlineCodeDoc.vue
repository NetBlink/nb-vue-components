<script setup lang="ts">
import { InlineCode, CodePreview } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const code = ['<p>Pass <InlineCode>:ui</InlineCode> to style one part, or set <InlineCode>ui.Button</InlineCode> in the plugin options.</p>'];
</script>

<template>
    <section id="inline-code">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">InlineCode</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                Code inside a sentence: a prop, a class, a command. It keeps the line the same height as the lines around it.
            </p>
            <div class="mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                <p class="text-sm">Run <InlineCode>npm run build</InlineCode> before you deploy, then set <InlineCode>APP_ENV=staging</InlineCode>.</p>
                <p class="text-base">Pass <InlineCode>:ui</InlineCode> to style one part, or set <InlineCode>ui.Button</InlineCode> in the plugin options.</p>
                <p class="text-lg">Long values wrap cleanly: <InlineCode>bg-primary-600 hover:bg-primary-700 focus-visible:ring-2</InlineCode>.</p>
            </div>
            <CodePreview :code="code" />
        </DocDemoCard>
    </section>
</template>
