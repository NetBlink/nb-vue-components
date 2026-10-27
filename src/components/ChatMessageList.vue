<script setup lang="ts">
/**
 * A conversation: your messages on the right, theirs on the left, day separators
 * and an optional typing indicator. It scrolls to new messages unless the reader
 * has scrolled up to read older ones, and new messages slide in.
 *
 * @part root - the scrolling list (`role="log"`)
 * @part day - a day separator
 * @part row - one message row
 * @part bubble - the message bubble
 * @part time - the time under a bubble
 * @part typing - the typing indicator
 * @motion off - messages appear instantly, the typing dots stand still
 * @motion simple - messages fade in quickly
 * @motion smooth - messages slide in, the list scrolls smoothly
 * @motion fancy - the same on a spring
 */
import { nextTick, onMounted, ref, watch } from 'vue';
import Avatar from './Avatar.vue';
import NbTransitionGroup from './NbTransitionGroup.vue';
import NbTransition from './NbTransition.vue';
import { levelAtLeast, type MotionLevel } from '../ui/motion';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface ChatMessage {
    id: string | number;
    /** Who sent it */
    from: 'me' | 'them';
    /** Message text (or use the #message slot) */
    text?: string;
    /** Shown under the bubble, e.g. "09:42" */
    time?: string;
    /** When it was sent; used for the day separators */
    date?: Date | string;
    /** Sender name (theirs), for the avatar */
    author?: string;
    /** Sender picture (theirs) */
    avatar?: string;
}

export interface ChatMessageListProps {
    /** The messages, oldest first */
    messages: ChatMessage[];
    /** Show the typing indicator */
    typing?: boolean;
    /** Label for a day separator (default: Today, Yesterday or the date) */
    dayLabel?: (date: Date) => string;
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['ChatMessageList']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = withDefaults(defineProps<ChatMessageListProps>(), { typing: false, dayLabel: undefined });
const { cls, attrs, level } = useUi('ChatMessageList', props);

const toDate = (value?: Date | string) => (value === undefined ? null : new Date(value));
const dayKey = (date: Date) => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
const defaultLabel = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
    if (dayKey(date) === dayKey(today)) return 'Today';
    if (dayKey(date) === dayKey(yesterday)) return 'Yesterday';
    return date.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: date.getFullYear() === today.getFullYear() ? undefined : 'numeric' });
};
// A separator before the first message of each day that carries a date.
const dayBefore = (index: number): Date | null => {
    const date = toDate(props.messages[index].date);
    if (!date) return null;
    for (let i = index - 1; i >= 0; i--) {
        const previous = toDate(props.messages[i].date);
        if (previous) return dayKey(previous) === dayKey(date) ? null : date;
    }
    return date;
};

const root = ref<HTMLElement>();
let stick = true;
const atBottom = () => !root.value || root.value.scrollHeight - root.value.scrollTop - root.value.clientHeight < 40;
const scrollDown = (smooth: boolean) => root.value?.scrollTo({ top: root.value.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });

watch(
    () => [props.messages.length, props.typing],
    () => (stick = atBottom()),
    { flush: 'pre' },
);
watch(
    () => [props.messages.length, props.typing],
    async () => {
        if (!stick) return;
        await nextTick();
        scrollDown(levelAtLeast(level.value, 'smooth'));
    },
    { flush: 'post' },
);
onMounted(() => scrollDown(false));
</script>

<template>
    <div ref="root" v-bind="attrs()" role="log" aria-live="polite" :class="cls('root', 'overflow-y-auto p-4')">
        <NbTransitionGroup tag="div" preset="slide-up" :motion="level" class="space-y-3">
            <div v-for="(message, index) in messages" :key="message.id">
                <p v-if="dayBefore(index)" :class="cls('day', 'pb-3 text-center text-xs text-gray-400 dark:text-gray-500')">
                    {{ (dayLabel ?? defaultLabel)(dayBefore(index)!) }}
                </p>
                <div :class="cls('row', 'flex items-end gap-2', message.from === 'me' ? 'justify-end' : 'justify-start')">
                    <Avatar v-if="message.from === 'them' && (message.author || message.avatar)" :name="message.author" :src="message.avatar" size="sm" />
                    <div class="max-w-[75%] min-w-0">
                        <div
                            :class="
                                cls(
                                    'bubble',
                                    'rounded-2xl px-3 py-2 text-sm break-words',
                                    message.from === 'me' ? 'bg-primary-600 rounded-br-sm text-white' : 'rounded-bl-sm bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100',
                                )
                            "
                        >
                            <slot name="message" :message="message">{{ message.text }}</slot>
                        </div>
                        <p v-if="message.time" :class="cls('time', 'mt-1 text-xs text-gray-400 dark:text-gray-500', message.from === 'me' && 'text-right')">{{ message.time }}</p>
                    </div>
                </div>
            </div>
        </NbTransitionGroup>
        <NbTransition :motion="level">
            <div v-if="typing" :class="cls('typing', 'mt-3 flex w-fit gap-1 rounded-2xl rounded-bl-sm bg-gray-100 px-3 py-3 dark:bg-gray-700')" aria-label="Typing" role="status">
                <span
                    v-for="dot in 3"
                    :key="dot"
                    class="size-1.5 rounded-full bg-gray-400 dark:bg-gray-300"
                    :class="level !== 'off' && 'animate-typing-dot'"
                    :style="{ animationDelay: `${(dot - 1) * 0.15}s` }"
                />
            </div>
        </NbTransition>
    </div>
</template>
