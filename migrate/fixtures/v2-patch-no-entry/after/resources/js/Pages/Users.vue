<script setup>
import { Alert, Table } from '@netblink/vue-components';
</script>

<template>
    <div>
        <Alert dismissible>Saved.</Alert>
        <Alert dismissible message="x" />
        <Alert dismissible>Already dismissible.</Alert>
        <Table sticky :rows="rows" />
        <Table :sticky="false" />
    </div>
</template>
