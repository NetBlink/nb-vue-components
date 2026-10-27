import { Page } from '@inertiajs/core';
import { Router } from '@inertiajs/core';
import { getCurrentInstance } from 'vue';

type RouteFn = (name: string, params?: unknown) => string;

/**
 * Resolve the host app's Ziggy-style `route()` helper.
 *
 * Templates that call a bare `route(...)` resolve it through `_ctx.route`, i.e.
 * the app's `globalProperties`. Apps that only expose `window.route` (or none at
 * all) therefore blow up mid-render with "_ctx.route is not a function". This
 * looks in both places and returns null when neither exists, so components can
 * degrade to plain text instead of throwing.
 *
 * Must be called during `setup()` - it reads the current component instance.
 *
 * @returns the route helper, or null when the app provides none
 */
function getRoute(): RouteFn | null {
    const fromApp = getCurrentInstance()?.appContext.config.globalProperties?.route;
    if (typeof fromApp === 'function') return fromApp as RouteFn;

    const fromWindow = typeof window !== 'undefined' ? (window as unknown as { route?: unknown }).route : undefined;
    if (typeof fromWindow === 'function') return fromWindow as RouteFn;

    return null;
}

/**
 * Format a number with locale-specific formatting
 *
 * @param number - The number to format
 * @returns Formatted number string
 */
function numberFormat(number: number): string {
    return number.toLocaleString('en-GB', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

/**
 * Format a number as currency
 *
 * @param number - The number to format as currency
 * @returns Formatted currency string
 */
function moneyFormat(number: number): string {
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    }).format(number);
}

/**
 * Check if user has a specific permission
 *
 * @param permission - The permission to check
 * @returns Whether the user has the permission
 */
function hasPermission(permission: string): boolean {
    const page = getInertiaPage();
    const userPermissions = (page.props as any)?.auth?.permissions || [];
    return userPermissions.includes(permission);
}

let inertiaRouter: Router | null = null;

/**
 * Set the Inertia router instance
 * This should be called once in your app.js file
 *
 * @param router - The Inertia router instance
 */
function setInertiaRouter(router: Router): void {
    inertiaRouter = router;
}

/**
 * Get the Inertia router instance.
 *
 * Reports the missing wiring but returns `null` rather than throwing: components
 * that only *optionally* need Inertia (and non-Inertia hosts such as the docs
 * site) must still render. Callers are expected to null-check.
 *
 * @returns The Inertia router instance, or null when `setInertiaRouter` was never called
 */
function getInertiaRouter(): Router | null {
    if (inertiaRouter === null) {
        console.error(
            'Inertia router is not set. Please set it first:' +
                '\n\n// app.js' +
                "\nimport { setInertiaRouter } from '@netblink/vue-components';" +
                "\nimport { router } from '@inertiajs/vue3';" +
                '\n// createInertiaApp(...);' +
                '\nsetInertiaRouter(router);\n\n'
        );
    }
    return inertiaRouter;
}

let inertiaPage: Page | null = null;

/**
 * Set the Inertia page instance
 * This should be called once in your app.js file
 *
 * @param page - The Inertia page instance
 */
function setInertiaPage(page: Page): void {
    inertiaPage = page;
}

/**
 * Get the Inertia page instance.
 *
 * Same contract as `getInertiaRouter`: warns, returns `null`, does not throw.
 *
 * @returns The Inertia page instance, or null when `setInertiaPage` was never called
 */
function getInertiaPage(): Page | null {
    if (inertiaPage === null) {
        console.error(
            'Inertia page is not set. Please set it first:' +
                '\n\n// app.js' +
                "\nimport { setInertiaPage } from '@netblink/vue-components';" +
                "\nimport { usePage } from '@inertiajs/vue3';" +
                '\n// createInertiaApp(...);' +
                '\nsetInertiaPage(usePage());\n\n'
        );
    }
    return inertiaPage;
}

/** Human file size: `512 B`, `13 KB`, `4.2 MB`, `1.1 GB`. */
export function formatFileSize(bytes: number): string {
    if (!Number.isFinite(bytes) || bytes < 0) return '';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 ** 2) return `${Math.round(bytes / 1024)} KB`;
    if (bytes < 1024 ** 3) return `${(bytes / 1024 ** 2).toFixed(1)} MB`;
    return `${(bytes / 1024 ** 3).toFixed(1)} GB`;
}

/**
 * Copy text to the clipboard. Uses the Clipboard API where the page allows it (https,
 * localhost) and falls back to a hidden textarea and `execCommand('copy')` elsewhere,
 * such as an intranet app on plain http. Resolves false only when both fail.
 */
export async function copyText(text: string): Promise<boolean> {
    try {
        if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
        }
    } catch {
        // Permission denied or similar: try the fallback below.
    }
    if (typeof document === 'undefined') return false;
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try {
        ok = document.execCommand('copy');
    } catch {
        ok = false;
    }
    document.body.removeChild(area);
    return ok;
}

/** Internal: the page/router when the app registered them, without the setup error. For code that has its own fallback. */
export const peekInertiaPage = (): Page | null => inertiaPage;
export const peekInertiaRouter = (): Router | null => inertiaRouter;

export {
    getRoute,
    numberFormat,
    moneyFormat,
    hasPermission,
    setInertiaRouter,
    getInertiaRouter,
    setInertiaPage,
    getInertiaPage,
};
