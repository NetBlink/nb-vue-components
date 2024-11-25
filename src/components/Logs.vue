<script setup>
import { LogsContent, CollapsibleSection } from '../index';

const props = defineProps({
    header: { default: 'Logs' },
    logs: Object,
});
</script>
<template>
    <CollapsibleSection :header="header">
        <LogsContent :logs="logs" />
    </CollapsibleSection>
</template>
