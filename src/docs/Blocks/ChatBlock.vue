<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { GravatarImg, PrimaryButton, CodePreview } from '../../index';
import { NbIcon } from '../../icons';
import { faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

interface ChatMessage {
    id: number;
    from: 'them' | 'me';
    text: string;
    time: string;
}

const contact = { name: 'Devon Lane', email: 'devon.lane@example.com' };

const messages = ref<ChatMessage[]>([
    { id: 1, from: 'them', text: 'Hey! Did the staging deploy go through this morning?', time: '09:41' },
    { id: 2, from: 'me', text: 'It did — took two tries, the migration step timed out first.', time: '09:42' },
    { id: 3, from: 'me', text: 'Bumped the statement timeout to 60s and it went green.', time: '09:42' },
    { id: 4, from: 'them', text: 'Nice. Can you write that down somewhere before we both forget?', time: '09:44' },
]);

const draft = ref('');
const typing = ref(false);
const pane = ref<HTMLElement | null>(null);
let nextId = 5;

// ponytail: canned reply on a timer — no socket, no store; docs demo only
const replies = [
    'Got it, thanks!',
    'Makes sense — I will take a look after standup.',
    'Perfect, adding it to the runbook now.',
    'Ha, fair. Let me check the logs and get back to you.',
];

function now() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function scrollToBottom() {
    nextTick(() => {
        if (pane.value) pane.value.scrollTop = pane.value.scrollHeight;
    });
}

function send() {
    const text = draft.value.trim();
    if (!text) return;

    messages.value.push({ id: nextId++, from: 'me', text, time: now() });
    draft.value = '';
    typing.value = true;
    scrollToBottom();

    setTimeout(() => {
        typing.value = false;
        messages.value.push({
            id: nextId++,
            from: 'them',
            text: replies[Math.floor(Math.random() * replies.length)],
            time: now(),
        });
        scrollToBottom();
    }, 1200);
}

const snippet = [
    '<div class="flex flex-col rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">',
    '    <!-- Header -->',
    '    <div class="flex items-center gap-3 border-b border-gray-200 p-3 dark:border-gray-700">',
    '        <GravatarImg :email="contact.email" :size="80" class="h-10 w-10 shrink-0 rounded-full" />',
    '        <div class="min-w-0 flex-1">',
    '            <p class="truncate text-sm font-semibold text-gray-800 dark:text-gray-100">{{ contact.name }}</p>',
    '            <span class="inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">',
    '                <span class="size-2 rounded-full bg-green-500" /> Online',
    '            </span>',
    '        </div>',
    '    </div>',
    '',
    '    <!-- Messages -->',
    '    <div ref="pane" class="max-h-80 space-y-3 overflow-y-auto p-4">',
    '        <p class="text-center text-xs text-gray-400 dark:text-gray-500">Today</p>',
    '        <div v-for="message in messages" :key="message.id" class="flex" :class="message.from === \'me\' ? \'justify-end\' : \'justify-start\'">',
    '            <div class="max-w-[75%] min-w-0">',
    '                <div',
    '                    class="rounded-2xl px-3 py-2 text-sm break-words"',
    '                    :class="',
    '                        message.from === \'me\'',
    '                            ? \'rounded-br-sm bg-primary-600 text-white\'',
    '                            : \'rounded-bl-sm bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100\'',
    '                    "',
    '                >',
    '                    {{ message.text }}',
    '                </div>',
    '                <p class="mt-1 text-xs text-gray-400 dark:text-gray-500" :class="message.from === \'me\' ? \'text-right\' : \'\'">{{ message.time }}</p>',
    '            </div>',
    '        </div>',
    '        <div v-if="typing" class="flex gap-1 rounded-2xl rounded-bl-sm bg-gray-100 px-3 py-3 w-fit dark:bg-gray-700">',
    '            <span v-for="dot in 3" :key="dot" class="chat-dot size-1.5 rounded-full bg-gray-400 dark:bg-gray-300" :style="{ animationDelay: `${(dot - 1) * 0.15}s` }" />',
    '        </div>',
    '    </div>',
    '',
    '    <!-- Composer -->',
    '    <form class="flex items-center gap-2 border-t border-gray-200 p-3 dark:border-gray-700" @submit.prevent="send">',
    '        <button type="button" class="focusable shrink-0 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200">',
    '            <NbIcon :name="faPaperclip" size="sm" />',
    '        </button>',
    '        <input',
    '            v-model="draft"',
    '            type="text"',
    '            placeholder="Write a message…"',
    '            class="focusable min-w-0 flex-1 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"',
    '        />',
    '        <PrimaryButton type="submit" :disabled="!draft.trim()" custom-button-class="rounded-full!">',
    '            <NbIcon :name="faPaperPlane" size="sm" />',
    '        </PrimaryButton>',
    '    </form>',
    '</div>',
];
</script>

<template>
    <section id="block-chat">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Chat Interface</h3>

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A two-person messenger: GravatarImg header with an online pill, a scrollable bubble pane with day divider and timestamps, an
                animated typing indicator, and a composer with a PrimaryButton send. Sending scrolls the pane and triggers a canned reply.
            </p>

            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex items-center gap-3 border-b border-gray-200 p-3 dark:border-gray-700">
                        <GravatarImg :email="contact.email" :size="80" class="h-10 w-10 shrink-0 rounded-full" />
                        <div class="min-w-0 flex-1">
                            <p class="truncate text-sm font-semibold text-gray-800 dark:text-gray-100">{{ contact.name }}</p>
                            <span class="inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                                <span class="size-2 rounded-full bg-green-500" />
                                Online
                            </span>
                        </div>
                    </div>

                    <div ref="pane" class="max-h-80 space-y-3 overflow-y-auto p-4">
                        <p class="text-center text-xs text-gray-400 dark:text-gray-500">Today</p>

                        <div
                            v-for="message in messages"
                            :key="message.id"
                            class="flex"
                            :class="message.from === 'me' ? 'justify-end' : 'justify-start'"
                        >
                            <div class="min-w-0 max-w-[75%]">
                                <div
                                    class="rounded-2xl px-3 py-2 text-sm break-words"
                                    :class="
                                        message.from === 'me'
                                            ? 'rounded-br-sm bg-primary-600 text-white'
                                            : 'rounded-bl-sm bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100'
                                    "
                                >
                                    {{ message.text }}
                                </div>
                                <p
                                    class="mt-1 text-xs text-gray-400 dark:text-gray-500"
                                    :class="message.from === 'me' ? 'text-right' : ''"
                                >
                                    {{ message.time }}
                                </p>
                            </div>
                        </div>

                        <div v-if="typing" class="flex w-fit gap-1 rounded-2xl rounded-bl-sm bg-gray-100 px-3 py-3 dark:bg-gray-700">
                            <span
                                v-for="dot in 3"
                                :key="dot"
                                class="chat-dot size-1.5 rounded-full bg-gray-400 dark:bg-gray-300"
                                :style="{ animationDelay: `${(dot - 1) * 0.15}s` }"
                            />
                        </div>
                    </div>

                    <form class="flex items-center gap-2 border-t border-gray-200 p-3 dark:border-gray-700" @submit.prevent="send">
                        <button
                            type="button"
                            aria-label="Attach a file"
                            class="focusable shrink-0 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                        >
                            <NbIcon :name="faPaperclip" size="sm" />
                        </button>
                        <input
                            v-model="draft"
                            type="text"
                            aria-label="Message"
                            placeholder="Write a message…"
                            class="focusable min-w-0 flex-1 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 placeholder-gray-400 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500"
                        />
                        <PrimaryButton type="submit" :disabled="!draft.trim()" custom-button-class="rounded-full!">
                            <NbIcon :name="faPaperPlane" size="sm" />
                        </PrimaryButton>
                    </form>
                </div>
            </div>

            <CodePreview :code="snippet" filename="ChatPanel.vue" />
        </DocDemoCard>
    </section>
</template>

<style scoped>
@keyframes chat-bounce {
    0%,
    60%,
    100% {
        transform: translateY(0);
        opacity: 0.5;
    }
    30% {
        transform: translateY(-4px);
        opacity: 1;
    }
}

.chat-dot {
    animation: chat-bounce 1s infinite ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
    .chat-dot {
        animation: none;
    }
}
</style>
