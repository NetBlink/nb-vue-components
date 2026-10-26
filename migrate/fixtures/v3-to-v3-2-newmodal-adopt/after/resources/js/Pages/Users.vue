<script setup>
import { ref } from 'vue';
import { NewModal } from '@netblink/vue-components';

const x = ref(false);
const y = ref(false);
const z = ref(false);
</script>

<template>
    <div>
        <NewModal :show="z" max-width="md" @close="z = false">Hello</NewModal>
        <NewModal :show="x" @close="x=false" class="p-0" align-top>
            <div>Body</div>
        </NewModal>
        <NewModal :show="y" @close="y = false">Centred</NewModal>
    </div>
</template>
