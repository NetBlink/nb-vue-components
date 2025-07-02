import { Page } from '@inertiajs/core';
import { Router } from '@inertiajs/core';

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
 * Get the Inertia router instance
 *
 * @returns The Inertia router instance
 * @throws Error if router is not set
 */
function getInertiaRouter(): Router {
    if (inertiaRouter === null) {
        console.error(
            'Inertia router is not set. Please set it first:' +
                '\n\n// app.js' +
                "\nimport { setInertiaRouter } from '@netblink/vue-components';" +
                "\nimport { router } from '@inertiajs/vue3';" +
                '\n// createInertiaApp(...);' +
                '\nsetInertiaRouter(router);\n\n'
        );
        throw new Error('Inertia router not initialized');
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
 * Get the Inertia page instance
 *
 * @returns The Inertia page instance
 * @throws Error if page is not set
 */
function getInertiaPage(): Page {
    if (inertiaPage === null) {
        console.error(
            'Inertia page is not set. Please set it first:' +
                '\n\n// app.js' +
                "\nimport { setInertiaPage } from '@netblink/vue-components';" +
                "\nimport { usePage } from '@inertiajs/vue3';" +
                '\n// createInertiaApp(...);' +
                '\nsetInertiaPage(usePage());\n\n'
        );
        throw new Error('Inertia page not initialized');
    }
    return inertiaPage;
}

export {
    numberFormat,
    moneyFormat,
    hasPermission,
    setInertiaRouter,
    getInertiaRouter,
    setInertiaPage,
    getInertiaPage,
};
