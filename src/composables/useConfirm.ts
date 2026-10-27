import { shallowRef } from 'vue';

/** What `confirm()` asks. */
export interface ConfirmOptions {
    /** The question, e.g. "Delete this invoice?" */
    title: string;
    /** One or two sentences on what happens */
    description?: string;
    /** Label of the confirming button. Default "Confirm" */
    confirmLabel?: string;
    /** Label of the cancelling button. Default "Cancel" */
    cancelLabel?: string;
    /** Destructive action: danger button, and Cancel gets the focus */
    danger?: boolean;
}

export interface PendingConfirm extends ConfirmOptions {
    id: number;
    resolve: (confirmed: boolean) => void;
}

let nextId = 0;
let mounted = 0;

/** Internal: questions waiting for the mounted `<ConfirmDialog>`, oldest first. */
export const confirmQueue = shallowRef<PendingConfirm[]>([]);

const dialogs = shallowRef<symbol[]>([]);

/**
 * Internal: a `<ConfirmDialog>` registers itself so `confirm()` knows someone will answer.
 * The first mounted one renders the questions; when it unmounts the next takes over. If the
 * dialog that was showing questions goes away (an Inertia page change, say), those questions
 * are answered "no" so a stale question never appears on the next page.
 */
export const registerConfirmDialog = (): { owns: () => boolean; release: () => void } => {
    const id = Symbol('ConfirmDialog');
    mounted++;
    dialogs.value = [...dialogs.value, id];
    return {
        owns: () => dialogs.value[0] === id,
        release: () => {
            mounted--;
            const wasOwner = dialogs.value[0] === id;
            dialogs.value = dialogs.value.filter((d) => d !== id);
            if (wasOwner) {
                const pending = confirmQueue.value;
                confirmQueue.value = [];
                pending.forEach((q) => q.resolve(false));
            }
        },
    };
};

/** Internal: answer the oldest question. */
export const settleConfirm = (confirmed: boolean): void => {
    const [head, ...rest] = confirmQueue.value;
    if (!head) return;
    confirmQueue.value = rest;
    head.resolve(confirmed);
};

/**
 * Ask the user to confirm, and wait for the answer: `if (await confirm({ title: 'Delete?', danger: true })) ...`.
 * Questions queue up and show one at a time. Rendered by the `<Toaster />` in your layout (or a
 * `<ConfirmDialog />`); with neither mounted it falls back to the browser's own confirm box.
 */
export function confirm(options: ConfirmOptions): Promise<boolean> {
    if (!mounted && typeof window !== 'undefined' && typeof window.confirm === 'function') {
        return Promise.resolve(window.confirm(options.description ? `${options.title}\n\n${options.description}` : options.title));
    }
    return new Promise((resolve) => {
        confirmQueue.value = [...confirmQueue.value, { ...options, id: nextId++, resolve }];
    });
}

/** `confirm` as a composable, for symmetry with `useToast()`. */
export function useConfirm(): typeof confirm {
    return confirm;
}
