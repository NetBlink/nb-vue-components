<script setup>
import { Button, DangerButton, InputLabel, PrimaryButton } from '@netblink/vue-components';

defineProps({ wide: Boolean, extra: String, labelCls: String });
</script>

<template>
    <div>
        <Button class="w-full">Save</Button>
        <PrimaryButton :class="wide ? 'w-full' : 'w-auto'">Go</PrimaryButton>
        <DangerButton class="!px-6 mt-2">Delete</DangerButton>
        <Button :class="[extra, { hidden: !wide }]">Extra</Button>
        <InputLabel class="font-bold mt-1" :class="labelCls" value="Name" />
    </div>
</template>
