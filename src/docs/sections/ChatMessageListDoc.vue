<script setup lang="ts">
import { ref } from 'vue';
import { ChatMessageList, SecondaryButton, Switch, CodePreview, CollapsableSection, PropsTable, type ChatMessage } from '../../index';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

const yesterday = new Date(Date.now() - 86400000);
const today = new Date();
let next = 100;
const messages = ref<ChatMessage[]>([
    { id: 1, from: 'them', author: 'Devon Lane', text: 'Did the staging deploy go through?', time: '17:20', date: yesterday },
    { id: 2, from: 'me', text: 'Not yet, the migration timed out.', time: '17:24', date: yesterday },
    { id: 3, from: 'them', author: 'Devon Lane', text: 'Morning! Any luck?', time: '09:02', date: today },
    { id: 4, from: 'me', text: 'Bumped the timeout to 60s and it went green.', time: '09:10', date: today },
    { id: 5, from: 'them', author: 'Devon Lane', text: 'Great, shipping it.', time: '09:11', date: today },
]);
const typing = ref(false);
const replies = ['Sounds good.', 'On it.', 'Can you check the logs?', 'Thanks!'];
const receive = () => messages.value.push({ id: next++, from: 'them', author: 'Devon Lane', text: replies[next % replies.length], time: '09:12', date: new Date() });

const code = [
    '<ChatMessageList :messages="messages" :typing="otherIsTyping" class="h-80" />',
    '',
    "// { id, from: 'me' | 'them', text, time: '09:42', date: message.created_at, author, avatar }",
];

const props = [
    { prop: 'messages', type: 'ChatMessage[]', default: '-', description: 'Oldest first', required: true },
    { prop: 'typing', type: 'boolean', default: 'false', description: 'Show the typing indicator' },
    { prop: 'dayLabel', type: '(date: Date) => string', default: 'Today / Yesterday / date', description: 'Label of a day separator' },
    { prop: 'motion', type: "'off' | 'simple' | 'smooth' | 'fancy'", default: '-', description: 'Motion level for this instance' },
];
</script>

<template>
    <section id="chat-message-list">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">ChatMessageList</h3>
        <DocDemoCard>
            <p class="mb-6 text-gray-600 dark:text-gray-400">
                Messages with day separators and a typing indicator. It follows new messages, unless you have scrolled up to read.
            </p>
            <div class="mb-3 flex flex-wrap items-center gap-4">
                <SecondaryButton size="sm" @click="receive">Receive a message</SecondaryButton>
                <Switch v-model="typing" no-label right-description="Typing" />
            </div>
            <ChatMessageList :messages="messages" :typing="typing" class="mb-6 h-72 max-w-lg rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800" />
            <CodePreview :code="code" />
            <CollapsableSection header="ChatMessageList Props" class="mt-6">
                <PropsTable :rows="props" />
            </CollapsableSection>
        </DocDemoCard>
    </section>
</template>
