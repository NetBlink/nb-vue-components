<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { DataTile } from '@netblink/vue-components';
</script>

<template>
    <DataTile value="42" label="Visits" />
    <FontAwesomeIcon icon="fab fa-whatsapp" size="2xl" />
    <FontAwesomeIcon :icon="faWhatsapp" size="2xl" />
</template>
