<script setup>
import { Button, DangerButton, InputLabel, PrimaryButton } from '@netblink/vue-components';

defineProps({ wide: Boolean, extra: String, labelCls: String });
</script>

<template>
    <div>
        <Button custom-class="w-full">Save</Button>
        <PrimaryButton :customButtonClass="wide ? 'w-full' : 'w-auto'">Go</PrimaryButton>
        <DangerButton class="mt-2" custom-class="!px-6">Delete</DangerButton>
        <Button :class="{ hidden: !wide }" :custom-class="extra">Extra</Button>
        <InputLabel class="mt-1" :class="labelCls" custom-class="font-bold" value="Name" />
    </div>
</template>
