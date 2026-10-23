<script setup>
import { Alert, TrPlaceholder } from '@netblink/vue-components';
</script>

<template>
    <table>
        <tbody>
            <TrPlaceholder :columns="5" />
        </tbody>
    </table>
    <Alert>Loading.</Alert>
</template>
