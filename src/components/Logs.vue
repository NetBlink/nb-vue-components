<script setup>
/**
 * Logs - activity timeline wrapped in a collapsible section.
 *
 * @prop {string}  header - heading text in the section header bar
 * @prop {Object}  logs - Laravel-style paginated result `{ total, data[], links? }`
 * @prop {boolean} open - start expanded
 */
import { LogsContent, CollapsibleSection } from '../index';

const props = defineProps({
    header: { default: 'Logs' },
    logs: Object,
    open: { type: Boolean, default: false },
});
</script>
<template>
    <CollapsibleSection :header="header" :open="open">
        <LogsContent :logs="logs" />
    </CollapsibleSection>
</template>
