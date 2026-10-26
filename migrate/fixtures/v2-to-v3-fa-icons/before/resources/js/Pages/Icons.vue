<script setup>
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { Input } from '@netblink/vue-components';

const open = () => {};
</script>

<template>
    <div>
        <Input v-model="phone" />
        <Fa icon="fas fa-expand" />
        <Fa @click="() => open()" icon="fab fa-whatsapp" class="h-4"></Fa>
    </div>
</template>
