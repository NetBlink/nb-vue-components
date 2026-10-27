<script setup lang="ts">
/**
 * Renders the questions asked with `confirm()` / `useConfirm()`, one at a time.
 * `<Toaster />` already includes one, so most apps never place it themselves;
 * mount it directly only in an app without a Toaster. If several are mounted,
 * the first one answers.
 *
 * @part root - the dialog panel (NewModal content)
 * @part actions - the button row
 * @motion off - opens and closes instantly
 * @motion simple - a quick fade
 * @motion smooth - the dialog fades and scales in, as NewModal does
 * @motion fancy - the dialog grows out of the button that asked
 */
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import NewModal from './NewModal.vue';
import Button from './Button.vue';
import SecondaryButton from './SecondaryButton.vue';
import { confirmQueue, registerConfirmDialog, settleConfirm, type PendingConfirm } from '../composables/useConfirm';
import { motionTiming } from '../ui/flip';
import type { MotionLevel } from '../ui/motion';
import type { NbParts, UiProp } from '../ui/parts';
import { useUi } from '../ui/useUi';

defineOptions({ inheritAttrs: false });

export interface ConfirmDialogProps {
    /** Classes per part, merged over the defaults */
    ui?: UiProp<NbParts['ConfirmDialog']>;
    /** Motion level for this instance */
    motion?: MotionLevel;
}

const props = defineProps<ConfirmDialogProps>();
const { cls, attrs, level } = useUi('ConfirmDialog', props);

// Only the first mounted dialog answers; the others stay silent.
const active = ref(false);
let registration: ReturnType<typeof registerConfirmDialog> | undefined;
onMounted(() => {
    registration = registerConfirmDialog();
    active.value = registration.owns();
});
onBeforeUnmount(() => {
    registration?.release();
    active.value = false;
});

const current = ref<PendingConfirm | null>(null);
const open = computed({
    get: () => !!current.value,
    set: (value: boolean) => {
        if (!value) answer(false);
    },
});

let waiting = false;
const showNext = () => {
    if (!active.value || current.value || waiting) return;
    current.value = confirmQueue.value[0] ?? null;
};
watch([confirmQueue, active], showNext);

const answer = (confirmed: boolean) => {
    if (!current.value) return;
    current.value = null;
    settleConfirm(confirmed);
    // Let this dialog close before the next question opens.
    waiting = true;
    setTimeout(() => {
        waiting = false;
        showNext();
    }, motionTiming(level.value, 'leave').duration + 50);
};

const cancelButton = ref<InstanceType<typeof SecondaryButton>>();
const confirmButton = ref<InstanceType<typeof Button>>();
watch(current, async (item) => {
    if (!item) return;
    await nextTick();
    requestAnimationFrame(() => {
        const target = item.danger ? cancelButton.value : confirmButton.value;
        ((target?.$el as HTMLElement | undefined)?.closest('button') ?? (target?.$el as HTMLElement | undefined))?.focus?.();
    });
});
</script>

<template>
    <NewModal
        v-if="active"
        v-model:open="open"
        v-bind="attrs()"
        :title="current?.title"
        :description="current?.description"
        :motion="motion"
        :class="cls('root', 'max-w-md')"
    >
        <template #footer>
            <div :class="cls('actions', 'flex w-full justify-end gap-2')">
                <SecondaryButton ref="cancelButton" type="button" @click="answer(false)">{{ current?.cancelLabel ?? 'Cancel' }}</SecondaryButton>
                <Button ref="confirmButton" type="button" :theme="current?.danger ? 'danger' : 'primary'" @click="answer(true)">
                    {{ current?.confirmLabel ?? 'Confirm' }}
                </Button>
            </div>
        </template>
    </NewModal>
</template>
