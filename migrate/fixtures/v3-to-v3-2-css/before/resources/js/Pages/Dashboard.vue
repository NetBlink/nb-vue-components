<script setup>
import { Section, Pagination, LinkDropdownButton, PrimaryButton, SecondaryButton, Table } from '@netblink/vue-components';
</script>

<template>
    <Section title="Orders">
        <Table sticky :rows="rows" />
        <Table :rows="rows" />
        <Pagination :links="links" />
        <LinkDropdownButton label="Actions" />
        <PrimaryButton :disabled="busy">Save</PrimaryButton>
        <SecondaryButton>Cancel</SecondaryButton>
    </Section>
</template>
