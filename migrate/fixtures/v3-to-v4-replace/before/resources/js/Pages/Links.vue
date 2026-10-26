<script setup>
import { Input, LinkButton } from '@netblink/vue-components';

defineProps({ tone: String });
</script>

<template>
    <div>
        <LinkButton href="/a" colour-classes="bg-red-600 text-white">A</LinkButton>
        <LinkButton href="/b" :colourClasses="tone">B</LinkButton>
        <Input v-model="agree" type="checkbox" checkbox-custom-class="accent-red-600" />
    </div>
</template>
