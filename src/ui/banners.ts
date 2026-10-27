import { onBeforeUnmount, watch, type Ref } from 'vue';

export type StackedBanner = 'environment' | 'impersonation';

/**
 * Banners stick to the top of the page in a fixed order (environment, then impersonation).
 * While shown, each writes its height to `--nb-<name>-offset` on the document root, so the
 * banner below it and sticky headers (PageHeader `sticky`) sit underneath instead of behind it.
 */
export function useStackedBanner(el: Ref<HTMLElement | undefined>, name: StackedBanner): void {
    const variable = `--nb-${name}-offset`;
    const clear = () => typeof document !== 'undefined' && document.documentElement.style.removeProperty(variable);
    watch(
        el,
        (node, _old, onCleanup) => {
            if (!node) return clear();
            const write = () => document.documentElement.style.setProperty(variable, `${node.offsetHeight}px`);
            write();
            if (typeof ResizeObserver === 'undefined') return;
            const observer = new ResizeObserver(write);
            observer.observe(node);
            onCleanup(() => observer.disconnect());
        },
        { flush: 'post', immediate: true },
    );
    onBeforeUnmount(clear);
}
