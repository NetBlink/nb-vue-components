<script setup>
import { ref } from 'vue';
import { Dropdown, DropdownLink, NavCollapse } from '@netblink/vue-components';

const open = ref(false);
const menu = ref(false);
</script>

<template>
    <nav>
        <Dropdown align="end">
            <template #trigger>
                <button>Account</button>
            </template>
            <template #content>
                <DropdownLink href="/profile">Profile</DropdownLink>
                <DropdownLink>Log out</DropdownLink>
            </template>
        </Dropdown>
        <Dropdown align="end">
            <template #trigger>
                <button>More</button>
            </template>
        </Dropdown>
        <NavCollapse :open="open" title="Reports">
            <a href="/reports">All</a>
        </NavCollapse>
        <NavCollapse v-model:open="menu" title="Settings" />
    </nav>
</template>
