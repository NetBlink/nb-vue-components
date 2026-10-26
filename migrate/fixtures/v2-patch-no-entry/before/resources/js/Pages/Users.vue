<script setup>
import { Alert, Table } from '@netblink/vue-components';
</script>

<template>
    <div>
        <Alert>Saved.</Alert>
        <Alert message="x" />
        <Alert dismissible>Already dismissible.</Alert>
        <Table :rows="rows" />
        <Table :sticky="false" />
    </div>
</template>
