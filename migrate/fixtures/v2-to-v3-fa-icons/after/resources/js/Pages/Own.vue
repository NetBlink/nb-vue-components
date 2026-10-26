<script setup>
import FontAwesomeIcon from './FontAwesomeIcon.vue';
import { Input } from '@netblink/vue-components';
</script>

<template>
    <div>
        <Input v-model="phone" />
        <FontAwesomeIcon icon="fab fa-whatsapp" />
    </div>
</template>
