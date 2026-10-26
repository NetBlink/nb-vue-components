<script setup>
import { Dropdown, NavCollapse } from '@netblink/vue-components';

const props = defineProps({ wide: Boolean });
const opts = { show: true, title: 'More' };
</script>

<template>
    <div>
        <Dropdown :align="wide ? 'left' : 'right'">
            <template #trigger>Menu</template>
        </Dropdown>
        <NavCollapse v-bind="opts" />
    </div>
</template>
