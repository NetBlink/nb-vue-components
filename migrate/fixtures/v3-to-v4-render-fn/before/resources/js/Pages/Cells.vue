<script setup>
import { h } from 'vue';
import { Button, Tbody } from '@netblink/vue-components';

const props = defineProps({ attrs: Object });
const cell = () => h(Button, { customClass: 'w-full' }, () => 'Edit');
const body = () => h(Tbody, { noRecordsMessage: 'None' });
</script>

<template>
    <div>
        <Button v-bind="props.attrs" custom-class="w-full">Spread</Button>
    </div>
</template>
