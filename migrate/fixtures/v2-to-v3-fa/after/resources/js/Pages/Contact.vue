<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Input, Textarea, NbIcon } from '@netblink/vue-components';
</script>

<template>
    <form>
        <Input v-model="phone" whatsApp />
        <Textarea v-model="note" :whats-app="true" />
        <NbIcon name="$whatsapp" />
        <FontAwesomeIcon icon="fas fa-user" class="h-4" />
    </form>
</template>
