<script setup>
import { Collapse, Dropdown, DropdownLink, EnhancedTable, LogsContent, Tbody, Tooltip } from '@netblink/vue-components';

defineProps({ rows: Array, logs: Object, open: Boolean });
</script>

<template>
    <div>
        <Dropdown>
            <DropdownLink href="/a" class="font-bold">A</DropdownLink>
            <DropdownLink href="/b">B</DropdownLink>
        </Dropdown>
        <Collapse :class="{ 'mt-4': open }" title="More">Body</Collapse>
        <Tooltip content="Hi" class="max-w-xs" />
        <table>
            <Tbody :items="rows" />
        </table>
        <EnhancedTable :rows="rows" />
        <LogsContent :logs="logs" />
    </div>
</template>
