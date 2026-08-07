<script setup lang="ts">
/**
 * Tab - a single panel inside `<Tabs>`.
 *
 * `value` must match the `value` of the corresponding entry in the parent's
 * `tabs` array. Content is only rendered while the tab is active.
 *
 * @prop {string} value - key linking this panel to its trigger
 * @slot default - panel content
 */
import { TabsContent } from 'reka-ui';

interface Props {
    value: string;
}

defineProps<Props>();
</script>

<template>
    <TabsContent
        :value="value"
        class="focus-visible:ring-primary-500 mt-4 focus-visible:ring-2 focus-visible:outline-hidden"
    >
        <slot />
    </TabsContent>
</template>
