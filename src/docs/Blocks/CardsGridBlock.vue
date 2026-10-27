<script setup lang="ts">
import { ref } from 'vue';
import { Dropdown, DropdownLink, DropdownSeparator, GravatarImg, Card, Badge, IconButton, IconCircle, CodePreview } from '../../index';
import { NbIcon } from '../../icons';
import { faEllipsisVertical, faEnvelope, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

// Team member card grid demo state
const members = [
    { name: 'Jane Cooper', role: 'Product Designer', email: 'jane.cooper@example.com', online: true },
    { name: 'Devon Lane', role: 'Backend Engineer', email: 'devon.lane@example.com', online: true },
    { name: 'Cody Fisher', role: 'Support Lead', email: 'cody.fisher@example.com', online: false },
    { name: 'Esther Howard', role: 'Marketing Manager', email: 'esther.howard@example.com', online: false },
    { name: 'Jenny Wilson', role: 'QA Engineer', email: 'jenny.wilson@example.com', online: true },
    { name: 'Guy Hawkins', role: 'DevOps', email: 'guy.hawkins@example.com', online: false },
];

const memberSnippet = [
    '<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">',
    '    <Card v-for="member in members" :key="member.email" padding="sm">',
    '        <div class="flex items-start justify-between">',
    '            <div class="flex items-center gap-3">',
    '                <GravatarImg :email="member.email" :size="64" class="h-12 w-12 rounded-full" />',
    '                <div>',
    '                    <p class="text-sm font-semibold text-gray-800 dark:text-gray-100">{{ member.name }}</p>',
    '                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ member.role }}</p>',
    '                </div>',
    '            </div>',
    '            <Dropdown align="end" :alignOffset="0">',
    '                <template #trigger>',
    '                    <IconButton :icon="faEllipsisVertical" :label="`Actions for ${member.name}`" size="sm" />',
    '                </template>',
    '                <template #content>',
    '                    <DropdownLink :href="`/team/${member.email}`"><NbIcon :name="faCircleUser" class="h-4 w-4" /> View profile</DropdownLink>',
    '                    <DropdownLink :href="`/team/${member.email}/edit`">Edit</DropdownLink>',
    '                    <DropdownSeparator />',
    '                    <DropdownLink href="#" class="text-red-600 dark:text-red-400" @click.prevent="router.delete(`/team/${member.email}`)">',
    '                        Remove',
    '                    </DropdownLink>',
    '                </template>',
    '            </Dropdown>',
    '        </div>',
    '',
    "        <Badge dot class=\"mt-3\" :variant=\"member.online ? 'success' : 'neutral'\" :label=\"member.online ? 'Online' : 'Offline'\" />",
    '    </Card>',
    '</div>',
];

// Inbox conversation list demo state
const conversations = ref([
    {
        id: 1,
        from: 'Marketing Team',
        preview: 'Q3 campaign assets are ready for review, can you take a look before end of day?',
        messages: 4,
        time: '2m ago',
        status: 'Open',
        unread: true,
    },
    {
        id: 2,
        from: 'Devon Lane',
        preview: 'The staging deploy failed again, same error as last time on the migration step.',
        messages: 12,
        time: '18m ago',
        status: 'Urgent',
        unread: true,
    },
    {
        id: 3,
        from: 'Billing',
        preview: 'Your invoice #4471 has been paid successfully. Receipt attached for your records.',
        messages: 1,
        time: '1h ago',
        status: 'Closed',
        unread: false,
    },
    {
        id: 4,
        from: 'Esther Howard',
        preview: 'Thanks for the quick turnaround on the landing page copy, looks great!',
        messages: 3,
        time: '3h ago',
        status: 'Closed',
        unread: false,
    },
]);

const statusVariants = { Open: 'primary', Urgent: 'danger', Closed: 'neutral' } as const;

function openConversation(id: number) {
    const conversation = conversations.value.find((c) => c.id === id);
    if (conversation) conversation.unread = false;
}

const conversationSnippet = [
    '<div class="space-y-3">',
    '    <!-- clickable: role="button", Enter/Space and a hover state come with the Card -->',
    '    <Card',
    '        v-for="conversation in conversations"',
    '        :key="conversation.id"',
    '        clickable',
    '        padding="sm"',
    "        :class=\"conversation.unread && 'ring-2 ring-primary-500/50'\"",
    '        @click="openConversation(conversation.id)"',
    '    >',
    '        <div class="flex items-start gap-3">',
    '            <span class="relative shrink-0">',
    '                <IconCircle :icon="faEnvelope" />',
    '                <span v-if="conversation.unread" class="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-primary-500 ring-2 ring-white dark:ring-gray-800" />',
    '            </span>',
    '            <div class="min-w-0 flex-1">',
    '                <div class="flex items-center justify-between gap-2">',
    '                    <p class="truncate text-sm font-semibold text-gray-800 dark:text-gray-100">{{ conversation.from }}</p>',
    '                    <Badge :variant="statusVariants[conversation.status]" :label="conversation.status" />',
    '                </div>',
    '                <p class="mt-1 truncate text-sm text-gray-600 dark:text-gray-400">{{ conversation.preview }}</p>',
    '                <p class="mt-1 text-xs text-gray-400 dark:text-gray-500">{{ conversation.messages }} messages &middot; {{ conversation.time }}</p>',
    '            </div>',
    '        </div>',
    '    </Card>',
    '</div>',
];
</script>

<template>
    <section id="block-cards">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Cards & Lists</h3>

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A responsive team member grid built from GravatarImg avatars, an online status pill, and a kebab-triggered Dropdown for row actions.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card v-for="member in members" :key="member.email" padding="sm">
                        <div class="flex items-start justify-between">
                            <div class="flex items-center gap-3">
                                <GravatarImg :email="member.email" :size="64" class="h-12 w-12 rounded-full" />
                                <div>
                                    <p class="text-sm font-semibold text-gray-800 dark:text-gray-100">{{ member.name }}</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ member.role }}</p>
                                </div>
                            </div>
                            <Dropdown align="end" :alignOffset="0">
                                <template #trigger>
                                    <IconButton :icon="faEllipsisVertical" :label="`Actions for ${member.name}`" size="sm" />
                                </template>
                                <template #content>
                                    <DropdownLink href="#" @click.prevent><NbIcon :name="faCircleUser" class="h-4 w-4" /> View profile</DropdownLink>
                                    <DropdownLink href="#" @click.prevent>Edit</DropdownLink>
                                    <DropdownSeparator />
                                    <DropdownLink href="#" @click.prevent class="text-red-600 dark:text-red-400">Remove</DropdownLink>
                                </template>
                            </Dropdown>
                        </div>

                        <Badge dot class="mt-3" :variant="member.online ? 'success' : 'neutral'" :label="member.online ? 'Online' : 'Offline'" />
                    </Card>
                </div>
            </div>
            <CodePreview :code="memberSnippet" filename="TeamGrid.vue" />
        </DocDemoCard>

        <DocDemoCard class="mt-6">
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                An inbox-style conversation list: unread items carry a primary ring plus a dot on the avatar bubble, and clicking a card marks it read.
            </p>
            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="space-y-3">
                    <Card
                        v-for="conversation in conversations"
                        :key="conversation.id"
                        clickable
                        padding="sm"
                        :class="['transition-shadow duration-300', conversation.unread && 'ring-2 ring-primary-500/50']"
                        @click="openConversation(conversation.id)"
                    >
                        <div class="flex items-start gap-3">
                            <span class="relative shrink-0">
                                <IconCircle :icon="faEnvelope" />
                                <span
                                    v-if="conversation.unread"
                                    class="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-primary-500 ring-2 ring-white dark:ring-gray-800"
                                />
                            </span>
                            <div class="min-w-0 flex-1">
                                <div class="flex items-center justify-between gap-2">
                                    <p class="truncate text-sm font-semibold text-gray-800 dark:text-gray-100">{{ conversation.from }}</p>
                                    <Badge :variant="statusVariants[conversation.status as keyof typeof statusVariants]" :label="conversation.status" />
                                </div>
                                <p class="mt-1 truncate text-sm text-gray-600 dark:text-gray-400">{{ conversation.preview }}</p>
                                <p class="mt-1 text-xs text-gray-400 dark:text-gray-500">{{ conversation.messages }} messages &middot; {{ conversation.time }}</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <CodePreview :code="conversationSnippet" filename="InboxList.vue" />
        </DocDemoCard>
    </section>
</template>
