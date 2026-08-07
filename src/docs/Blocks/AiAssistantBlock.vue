<script setup lang="ts">
import { computed, nextTick, onUnmounted, ref } from 'vue';
import { TextInput, PrimaryButton, SecondaryButton, CodePreview } from '../../index';
import { NbIcon } from '../../icons';
import { faWandMagicSparkles, faWrench, faChevronDown, faPaperPlane, faStop, faArrowRotateRight, faUser } from '@fortawesome/free-solid-svg-icons';
import DocDemoCard from '../HelperComponents/DocDemoCard.vue';

interface Tool {
    label: string;
    result: string;
}

interface Message {
    id: number;
    role: 'user' | 'assistant';
    text: string;
    full: string;
    tool?: Tool;
}

const suggestions = ['How does pricing work?', "Summarise last week's incidents", 'Draft a release note'];

const canned: Record<string, { text: string; tool?: Tool }> = {
    'How does pricing work?': {
        text: 'Pricing is per seat and billed monthly. The Team plan is €19 per user, the Business plan is €39 per user and adds SSO, audit logs and priority support. Annual billing takes 20% off either plan, and unused seats are prorated on your next invoice.',
        tool: {
            label: "Searched docs for 'pricing'",
            result: 'docs/billing/plans.md:12\n  team:     19 EUR / seat / month\n  business: 39 EUR / seat / month  (sso, audit-log)\n  annual discount: 0.20\n  proration: enabled',
        },
    },
    "Summarise last week's incidents": {
        text: 'There were three incidents last week. Two were caused by the same migration step timing out on the staging database, and one was an expired TLS certificate on the webhook endpoint. Total customer-facing downtime was 14 minutes, all during the maintenance window.',
        tool: {
            label: "Searched incidents for 'last 7 days'",
            result: 'INC-1841  migration timeout   sev3  6m\nINC-1842  migration timeout   sev3  5m\nINC-1847  tls cert expired    sev2  3m',
        },
    },
    'Draft a release note': {
        text: 'Version 2.4 ships a redesigned settings page, faster table sorting on large datasets, and dark mode fixes across the form components. Two long-standing bugs in the file upload flow are resolved, and the deprecated select variants now log a migration hint in development.',
    },
};

// The fallback carries a tool step too, so the retrieval affordance is visible
// for any typed message - not only for the three suggestion chips.
const fallback = {
    tool: {
        label: 'Searched workspace for context',
        result: 'no high-confidence match\n  scanned: docs/, incidents/, releases/\n  returned 0 passages above threshold',
    },
    text: 'I do not have that in context yet, but here is the shape of an answer: a short summary first, then the supporting detail, then a suggested next step. Connect your own backend and swap this canned reply for a real streamed response.',
};

let nextId = 4;
const messages = ref<Message[]>([
    { id: 1, role: 'user', text: 'What can you help me with?', full: '' },
    {
        id: 2,
        role: 'assistant',
        text: 'I can search your docs, summarise incidents and draft copy. Ask me anything, or pick one of the suggestions below.',
        full: 'I can search your docs, summarise incidents and draft copy. Ask me anything, or pick one of the suggestions below.',
    },
]);

const draft = ref('');
const streaming = ref(false);
const listEl = ref<HTMLElement | null>(null);
let timer: ReturnType<typeof setInterval> | null = null;

const lastAssistant = computed(() => {
    const last = messages.value[messages.value.length - 1];
    return last && last.role === 'assistant' ? last : null;
});

function stop() {
    if (timer) clearInterval(timer);
    timer = null;
    streaming.value = false;
}

function scrollDown() {
    nextTick(() => listEl.value?.scrollTo({ top: listEl.value.scrollHeight }));
}

// ponytail: word-by-word setInterval stands in for a real token stream; swap for
// fetch + ReadableStream when wiring a backend.
function stream(message: Message) {
    stop();
    const words = message.full.split(' ');
    let i = 0;
    message.text = '';
    streaming.value = true;
    timer = setInterval(() => {
        message.text += (i ? ' ' : '') + words[i++];
        scrollDown();
        if (i >= words.length) stop();
    }, 55);
}

function send(text?: string) {
    const content = (text ?? draft.value).trim();
    if (!content || streaming.value) return;
    draft.value = '';

    const reply = canned[content] ?? fallback;
    messages.value.push({ id: nextId++, role: 'user', text: content, full: content });
    messages.value.push({ id: nextId++, role: 'assistant', text: '', full: reply.text, tool: reply.tool });
    scrollDown();
    stream(messages.value[messages.value.length - 1]);
}

function regenerate() {
    if (lastAssistant.value && !streaming.value) stream(lastAssistant.value);
}

onUnmounted(stop);

const snippet = [
    '<div class="flex flex-col rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">',
    '    <div class="flex items-center gap-3 border-b border-gray-200 p-4 dark:border-gray-700">',
    '        <span class="flex size-9 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-300">',
    '            <NbIcon :name="faWandMagicSparkles" size="sm" />',
    '        </span>',
    '        <p class="min-w-0 flex-1 truncate font-semibold text-gray-800 dark:text-gray-100">Assistant</p>',
    '        <span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300">gpt-4o-mini</span>',
    '    </div>',
    '',
    '    <div ref="listEl" class="max-h-80 space-y-4 overflow-y-auto p-4">',
    '        <div v-for="message in messages" :key="message.id" class="flex gap-3" :class="message.role === \'user\' ? \'justify-end\' : \'\'">',
    '            <span v-if="message.role === \'assistant\'" class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-300">',
    '                <NbIcon :name="faWandMagicSparkles" size="sm" />',
    '            </span>',
    '',
    '            <div v-if="message.role === \'user\'" class="max-w-[80%] rounded-lg bg-primary-600 px-3 py-2 text-sm text-white">{{ message.text }}</div>',
    '',
    '            <div v-else class="min-w-0 flex-1">',
    '                <div class="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-900/40 dark:text-gray-200">',
    '                    <details v-if="message.tool" class="group mb-2 rounded border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">',
    '                        <summary class="flex cursor-pointer list-none items-center gap-2 px-2 py-1.5 text-xs text-gray-600 dark:text-gray-400">',
    '                            <NbIcon :name="faWrench" size="sm" class="text-primary-500" />',
    '                            <span class="min-w-0 flex-1 truncate">{{ message.tool.label }}</span>',
    '                            <NbIcon :name="faChevronDown" size="sm" class="transition group-open:rotate-180" />',
    '                        </summary>',
    '                        <pre class="overflow-x-auto border-t border-gray-200 p-2 font-mono text-xs dark:border-gray-700">{{ message.tool.result }}</pre>',
    '                    </details>',
    '',
    '                    <span class="whitespace-pre-wrap">{{ message.text }}</span>',
    '                    <span v-if="streaming && message === lastAssistant" class="ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-primary-500 align-text-bottom" />',
    '                </div>',
    '                <button v-if="!streaming && message === lastAssistant" @click="regenerate" class="mt-1 inline-flex items-center gap-1 text-xs text-gray-500 hover:text-primary-600 dark:text-gray-400">',
    '                    <NbIcon :name="faArrowRotateRight" size="sm" /> Regenerate',
    '                </button>',
    '            </div>',
    '        </div>',
    '    </div>',
    '',
    '    <div class="space-y-2 border-t border-gray-200 p-4 dark:border-gray-700">',
    '        <div class="flex flex-wrap gap-2">',
    '            <button v-for="s in suggestions" :key="s" :disabled="streaming" @click="send(s)"',
    '                class="rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600 hover:border-primary-500 hover:text-primary-600 disabled:opacity-50 dark:border-gray-600 dark:text-gray-300">',
    '                {{ s }}',
    '            </button>',
    '        </div>',
    '        <div class="flex flex-wrap items-center gap-2">',
    '            <TextInput v-model="draft" class="min-w-0 flex-1" placeholder="Ask anything…" :disabled="streaming" @keyup.enter="send()" />',
    '            <SecondaryButton v-if="streaming" @click="stop"><NbIcon :name="faStop" size="sm" /></SecondaryButton>',
    '            <PrimaryButton type="button" :disabled="streaming || !draft.trim()" @click="send()"><NbIcon :name="faPaperPlane" size="sm" /></PrimaryButton>',
    '        </div>',
    '    </div>',
    '</div>',
];
</script>

<template>
    <section id="block-ai-assistant">
        <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">AI Assistant</h3>

        <DocDemoCard>
            <p class="mb-4 text-gray-600 dark:text-gray-400">
                A chat panel composed from TextInput, PrimaryButton and SecondaryButton: replies stream in word by word with a blinking cursor, an inline
                tool-call step expands to its raw result, and Stop aborts the stream while Regenerate replays the last answer.
            </p>

            <div class="mb-6 rounded border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <div class="mx-auto flex max-w-2xl flex-col rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                    <div class="flex items-center gap-3 border-b border-gray-200 p-4 dark:border-gray-700">
                        <span
                            class="bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-300 flex size-9 shrink-0 items-center justify-center rounded-lg"
                        >
                            <NbIcon :name="faWandMagicSparkles" size="sm" />
                        </span>
                        <div class="min-w-0 flex-1">
                            <p class="truncate text-sm font-semibold text-gray-800 dark:text-gray-100">Netblink Assistant</p>
                            <p class="truncate text-xs text-gray-500 dark:text-gray-400">Answers from your workspace</p>
                        </div>
                        <span class="shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                            gpt-4o-mini
                        </span>
                    </div>

                    <div ref="listEl" class="max-h-80 space-y-4 overflow-y-auto p-4">
                        <div v-for="message in messages" :key="message.id" class="flex gap-3" :class="message.role === 'user' ? 'justify-end' : ''">
                            <span
                                v-if="message.role === 'assistant'"
                                class="bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-300 flex size-8 shrink-0 items-center justify-center rounded-lg"
                            >
                                <NbIcon :name="faWandMagicSparkles" size="sm" />
                            </span>

                            <div
                                v-if="message.role === 'user'"
                                class="bg-primary-600 flex max-w-[80%] items-start gap-2 rounded-lg px-3 py-2 text-sm text-white"
                            >
                                <span class="min-w-0 break-words">{{ message.text }}</span>
                                <NbIcon :name="faUser" size="sm" class="mt-0.5 opacity-70" />
                            </div>

                            <div v-else class="min-w-0 flex-1">
                                <div
                                    class="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-900/40 dark:text-gray-200"
                                >
                                    <details
                                        v-if="message.tool"
                                        class="group mb-2 rounded border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
                                    >
                                        <summary
                                            class="flex cursor-pointer list-none items-center gap-2 px-2 py-1.5 text-xs text-gray-600 dark:text-gray-400 [&::-webkit-details-marker]:hidden"
                                        >
                                            <NbIcon :name="faWrench" size="sm" class="text-primary-500" />
                                            <span class="min-w-0 flex-1 truncate">{{ message.tool.label }}</span>
                                            <NbIcon :name="faChevronDown" size="sm" class="transition group-open:rotate-180" />
                                        </summary>
                                        <pre
                                            class="overflow-x-auto border-t border-gray-200 p-2 font-mono text-xs text-gray-600 dark:border-gray-700 dark:text-gray-400"
                                            >{{ message.tool.result }}</pre
                                        >
                                    </details>

                                    <span class="break-words whitespace-pre-wrap">{{ message.text }}</span>
                                    <span
                                        v-if="streaming && message === lastAssistant"
                                        class="bg-primary-500 ml-0.5 inline-block h-4 w-1.5 animate-pulse align-text-bottom"
                                    />
                                </div>

                                <button
                                    v-if="!streaming && message === lastAssistant"
                                    type="button"
                                    @click="regenerate"
                                    class="focusable hover:text-primary-600 dark:hover:text-primary-400 mt-1 inline-flex items-center gap-1 rounded text-xs text-gray-500 dark:text-gray-400"
                                >
                                    <NbIcon :name="faArrowRotateRight" size="sm" />
                                    Regenerate
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-2 border-t border-gray-200 p-4 dark:border-gray-700">
                        <div class="flex flex-wrap gap-2">
                            <button
                                v-for="suggestion in suggestions"
                                :key="suggestion"
                                type="button"
                                :disabled="streaming"
                                @click="send(suggestion)"
                                class="focusable hover:border-primary-500 hover:text-primary-600 dark:hover:border-primary-400 rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-300"
                            >
                                {{ suggestion }}
                            </button>
                        </div>

                        <div class="flex flex-wrap items-center gap-2">
                            <TextInput
                                v-model="draft"
                                class="min-w-0 flex-1"
                                placeholder="Ask anything…"
                                :disabled="streaming"
                                @keyup.enter="send()"
                            />
                            <SecondaryButton v-if="streaming" @click="stop">
                                <NbIcon :name="faStop" size="sm" />
                                <span class="ml-1.5">Stop</span>
                            </SecondaryButton>
                            <PrimaryButton type="button" :disabled="streaming || !draft.trim()" @click="send()">
                                <NbIcon :name="faPaperPlane" size="sm" />
                                <span class="ml-1.5">Send</span>
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>

            <CodePreview :code="snippet" filename="AiAssistantPanel.vue" />
        </DocDemoCard>
    </section>
</template>
