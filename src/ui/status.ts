import { useNbConfig } from './config';

/*
 * Built-in status words. Apps extend or override them with the `badge.statuses`
 * plugin option; anything unknown stays neutral.
 */
const DEFAULT_STATUSES: Record<string, string> = {
    paid: 'success',
    active: 'success',
    approved: 'success',
    completed: 'success',
    complete: 'success',
    success: 'success',
    online: 'success',
    pending: 'warning',
    processing: 'warning',
    in_progress: 'warning',
    draft: 'warning',
    failed: 'danger',
    rejected: 'danger',
    cancelled: 'danger',
    canceled: 'danger',
    error: 'danger',
    overdue: 'danger',
    info: 'info',
    new: 'info',
};

const key = (status: string) => status.trim().toLowerCase().replace(/[\s-]+/g, '_');

/** "in_progress" / "in-progress" / "IN PROGRESS" to "In progress". */
export const statusLabel = (status: string): string => {
    const words = status.trim().replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').toLowerCase();
    return words.charAt(0).toUpperCase() + words.slice(1);
};

/** Maps a status word to a Badge variant and a display label, using the app's `badge.statuses` first. */
export function useBadgeStatus(): (status: string) => { variant: string; label: string } {
    const config = useNbConfig();
    return (status: string) => {
        const k = key(status);
        const custom = Object.entries(config.badge.statuses ?? {}).find(([word]) => key(word) === k)?.[1];
        return { variant: custom ?? DEFAULT_STATUSES[k] ?? 'neutral', label: statusLabel(status) };
    };
}
