<script setup>
import { ref } from 'vue';
import { Modal, NewModal } from '@netblink/vue-components';

const x = ref(false);
const y = ref(false);
const z = ref(false);
</script>

<template>
    <div>
        <NewModal :show="z" max-width="md" @close="z = false">Hello</NewModal>
        <Modal :show="x" @close="x=false" modal-custom-class="p-0">
            <div>Body</div>
        </Modal>
        <Modal :show="y" @close="y = false" align-center>Centred</Modal>
    </div>
</template>
