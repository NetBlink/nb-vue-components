<script setup lang="ts">
import { ref } from 'vue';
import { GravatarImg, Card, Badge, IconButton, ChatMessageList, CodePreview, InlineCode, type ChatMessage } from '../../index';
import { faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';


const contact = { name: 'Devon Lane', email: 'devon.lane@example.com' };

const messages = ref<ChatMessage[]>([
    { id: 1, from: 'them', text: 'Hey! Did the staging deploy go through this morning?', time: '09:41', date: new Date() },
    { id: 2, from: 'me', text: 'It did, took two tries, the migration step timed out first.', time: '09:42', date: new Date() },
    { id: 3, from: 'me', text: 'Bumped the statement timeout to 60s and it went green.', time: '09:42', date: new Date() },
    { id: 4, from: 'them', text: 'Nice. Can you write that down somewhere before we both forget?', time: '09:44', date: new Date() },
]);

const draft = ref('');
const typing = ref(false);
let nextId = 5;

// ponytail: canned reply on a timer, no socket, no store; docs demo only
const replies = [
    'Got it, thanks!',
    'Makes sense, I will take a look after standup.',
    'Perfect, adding it to the runbook now.',
    'Ha, fair. Let me check the logs and get back to you.',
];

function now() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}


function send() {
    const text = draft.value.trim();
    if (!text) return;

    messages.value.push({ id: nextId++, from: 'me', text, time: now(), date: new Date() });
    draft.value = '';
    typing.value = true;

    setTimeout(() => {
        typing.value = false;
        messages.value.push({
            id: nextId++,
            from: 'them',
            text: replies[Math.floor(Math.random() * replies.length)],
            time: now(),
            date: new Date(),
        });
        }, 1200);
}

const snippet = [
    '<Card padding="none">',
    '    <!-- Header -->',
    '    <div class="flex items-center gap-3 border-b border-gray-200 p-3 dark:border-gray-700">',
    '        <GravatarImg :email="contact.email" :size="80" class="h-10 w-10 shrink-0 rounded-full" />',
    '        <div class="min-w-0 flex-1">',
    '            <p class="truncate text-sm font-semibold text-gray-800 dark:text-gray-100">{{ contact.name }}</p>',
    '            <Badge dot variant="success" label="Online" />',
    '        </div>',
    '    </div>',
    '',
    '    <!-- Messages: day separators, typing dots, follows new messages unless you scrolled up -->',
    '    <ChatMessageList :messages="messages" :typing="typing" class="max-h-80" />',
    '',
    '    <!-- Composer -->',
    '    <form class="flex items-center gap-2 border-t border-gray-200 p-3 dark:border-gray-700" @submit.prevent="send">',
    '        <IconButton :icon="faPaperclip" label="Attach a file" class="rounded-full" />',
    '        <input',
    '            v-model="draft"',
    '            type="text"',
    '            placeholder="Write a message…"',
    '            class="focusable min-w-0 flex-1 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"',
    '        />',
    '        <IconButton type="submit" :icon="faPaperPlane" label="Send" theme="primary" :disabled="!draft.trim()" class="rounded-full" />',
    '    </form>',
    '</Card>',
];
</script>

<template>
    <section id="block-chat">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Chat Interface</h3>

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A two-person messenger: a GravatarImg header with an online Badge, a <InlineCode>ChatMessageList</InlineCode> (day separators, typing
                indicator, follows new messages), and a composer with an IconButton send. Sending triggers a canned reply.
            </p>

            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <Card padding="none" class="mx-auto max-w-lg">
                    <div class="flex items-center gap-3 border-b border-gray-200 p-3 dark:border-gray-700">
                        <GravatarImg :email="contact.email" :size="80" class="h-10 w-10 shrink-0 rounded-full" />
                        <div class="min-w-0 flex-1">
                            <p class="truncate text-sm font-semibold text-gray-800 dark:text-gray-100">{{ contact.name }}</p>
                            <Badge dot variant="success" label="Online" />
                        </div>
                    </div>

                    <ChatMessageList :messages="messages" :typing="typing" class="max-h-80" />

                    <form class="flex items-center gap-2 border-t border-gray-200 p-3 dark:border-gray-700" @submit.prevent="send">
                        <IconButton :icon="faPaperclip" label="Attach a file" class="rounded-full" />
                        <input
                            v-model="draft"
                            type="text"
                            aria-label="Message"
                            placeholder="Write a message…"
                            class="focusable min-w-0 flex-1 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 placeholder-gray-400 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500"
                        />
                        <IconButton type="submit" :icon="faPaperPlane" label="Send" theme="primary" :disabled="!draft.trim()" class="rounded-full" />
                    </form>
                </Card>
            </div>

            <CodePreview :code="snippet" filename="ChatPanel.vue" />
        </DocDemoCard>
    </section>
</template>

