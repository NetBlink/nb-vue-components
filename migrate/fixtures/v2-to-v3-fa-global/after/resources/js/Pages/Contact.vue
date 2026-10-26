<script setup>
import { Input, NbIcon } from '@netblink/vue-components';
</script>

<template>
    <div>
        <Input v-model="phone" />
        <nb-icon name="$whatsapp" />
    </div>
</template>
