<script setup>
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { Input, NbIcon } from '@netblink/vue-components';

const open = () => {};
</script>

<template>
    <div>
        <Input v-model="phone" />
        <Fa icon="fas fa-expand" />
        <NbIcon @click="() => open()" name="$whatsapp" class="h-4"></NbIcon>
    </div>
</template>
