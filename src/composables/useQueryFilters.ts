import { computed, onScopeDispose, reactive, watch, type ComputedRef } from 'vue';
import { peekInertiaPage, peekInertiaRouter } from '../Helpers';

export interface QueryFiltersOptions {
    /** Wait this long (ms) after typing in a text filter before updating. Default 300 */
    debounce?: number;
    /** Inertia partial reload: only these props are fetched */
    only?: string[];
    /** Set false to update the URL without fetching anything (lists filtered in the browser). Default true */
    visit?: boolean;
}

export interface QueryFilters<T> {
    /** The filters, read from the URL on load; change them and the URL follows */
    filters: T;
    /** True when any filter differs from its default */
    isFiltered: ComputedRef<boolean>;
    /** Back to the defaults */
    reset: () => void;
}

const isEmpty = (value: unknown) => value === '' || value === null || value === undefined || (Array.isArray(value) && value.length === 0);
const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);
const clone = <T>(value: T): T => (Array.isArray(value) ? ([...value] as T) : value);

/** Values worth putting in the URL: not empty and not the default. */
export function toQuery(filters: Record<string, unknown>, defaults: Record<string, unknown>): Record<string, unknown> {
    const query: Record<string, unknown> = {};
    for (const key of Object.keys(defaults)) {
        const value = filters[key];
        if (isEmpty(value) || same(value, defaults[key])) continue;
        query[key] = typeof value === 'boolean' ? (value ? 1 : 0) : value;
    }
    return query;
}

/** Read the filters back from a query string, typed like their defaults. */
export function fromQuery<T extends Record<string, unknown>>(search: string, defaults: T): Partial<T> {
    const params = new URLSearchParams(search);
    const out: Record<string, unknown> = {};
    for (const [key, fallback] of Object.entries(defaults)) {
        if (Array.isArray(fallback)) {
            const values = [...params.entries()].filter(([name]) => name === key || new RegExp(`^${key}\\[\\d*\\]$`).test(name)).map(([, v]) => v);
            if (values.length) out[key] = values;
            continue;
        }
        const raw = params.get(key);
        if (raw === null) continue;
        if (typeof fallback === 'number') out[key] = raw.trim() === '' || Number.isNaN(Number(raw)) ? fallback : Number(raw);
        else if (typeof fallback === 'boolean') out[key] = raw === '1' || raw === 'true';
        else out[key] = raw;
    }
    return out as Partial<T>;
}

// In the browser the address bar is the truth; on the server, Inertia's page URL carries the query.
const currentUrl = (): URL | null => {
    if (typeof window !== 'undefined') return new URL(window.location.href);
    const pageUrl = peekInertiaPage()?.url;
    return pageUrl ? new URL(pageUrl, 'http://localhost') : null;
};

/**
 * Filters that live in the URL query, like a Laravel index page expects: `?search=ab&status[]=open`.
 * Empty and default values stay out of the URL, `page` is dropped when a filter changes, and other
 * query params (sorting, ...) are kept. With Inertia registered it visits the current page with the
 * new query (preserving state and scroll); otherwise, or with `visit: false`, it only updates the URL.
 */
export function useQueryFilters<T extends Record<string, unknown>>(defaults: T, options: QueryFiltersOptions = {}): QueryFilters<T> {
    const { debounce = 300, only, visit = true } = options;
    const start = currentUrl();
    const filters = reactive({ ...defaults, ...(start ? fromQuery(start.search, defaults) : {}) }) as T;

    const isFiltered = computed(() => Object.keys(defaults).some((key) => !same(filters[key], defaults[key])));

    const apply = () => {
        if (typeof window === 'undefined') return;
        const url = currentUrl();
        if (!url) return;
        const query = toQuery(filters, defaults);
        // Keep params this composable doesn't own, except the page number. Array params are kept
        // under their bare name (`tags`, not `tags[]`) so the brackets aren't doubled when re-sent.
        const kept: Record<string, string | string[]> = {};
        for (const name of new Set(url.searchParams.keys())) {
            const base = name.replace(/\[\d*\]$/, '');
            if (base === 'page' || base in defaults) continue;
            const all = url.searchParams.getAll(name);
            kept[base] = base !== name || all.length > 1 ? [...((kept[base] as string[] | undefined) ?? []), ...all] : all[0];
        }
        const router = visit ? peekInertiaRouter() : null;
        if (router) {
            router.get(url.pathname, { ...kept, ...query } as never, { preserveState: true, preserveScroll: true, replace: true, only });
            return;
        }
        const params = new URLSearchParams();
        for (const [name, value] of Object.entries(kept)) {
            if (Array.isArray(value)) value.forEach((v) => params.append(`${name}[]`, v));
            else params.append(name, value);
        }
        for (const [name, value] of Object.entries(query)) {
            if (Array.isArray(value)) value.forEach((v) => params.append(`${name}[]`, String(v)));
            else params.append(name, String(value));
        }
        const search = params.toString();
        window.history.replaceState(window.history.state, '', `${url.pathname}${search ? `?${search}` : ''}${window.location.hash}`);
    };

    let timer: ReturnType<typeof setTimeout> | undefined;
    watch(
        () => Object.fromEntries(Object.keys(defaults).map((key) => [key, clone(filters[key])])),
        (now, before) => {
            clearTimeout(timer);
            const typed = Object.keys(defaults).some((key) => typeof defaults[key] === 'string' && now[key] !== before[key]);
            if (typed && debounce > 0) timer = setTimeout(apply, debounce);
            else apply();
        },
    );

    // A visit still waiting for the debounce must not fire after the component is gone (it would hijack the next page).
    onScopeDispose(() => clearTimeout(timer));

    const reset = () => {
        for (const key of Object.keys(defaults)) (filters as Record<string, unknown>)[key] = clone(defaults[key]);
    };

    return { filters, isFiltered, reset };
}
