import { onBeforeUpdate, onUpdated } from 'vue';
import { levelAtLeast, type MotionLevel } from './motion';

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
const SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)';

/** Duration and easing per level for JS-driven motion, mirroring the theme tokens. */
export function motionTiming(level: MotionLevel, kind: 'enter' | 'leave' = 'enter'): { duration: number; easing: string } {
    if (level === 'off') return { duration: 0, easing: 'linear' };
    if (level === 'simple') return { duration: 150, easing: 'ease-out' };
    if (level === 'fancy') return kind === 'enter' ? { duration: 600, easing: SPRING } : { duration: 250, easing: EASE };
    return kind === 'enter' ? { duration: 400, easing: EASE } : { duration: 200, easing: EASE };
}

const canAnimate = (el: Element): el is HTMLElement => typeof (el as HTMLElement).animate === 'function';

/**
 * FLIP reflow for the direct children of a container: wherever an update moves
 * a child, it glides from its old position instead of jumping. New children
 * fade in. Runs from the component's own update hooks, so it covers slot
 * content too (slot content renders inside the child component).
 */
export function useFlip(container: () => Element | null | undefined, enabled: () => boolean, level: () => MotionLevel): void {
    let before = new Map<Element, DOMRect>();

    onBeforeUpdate(() => {
        before = new Map();
        const el = container();
        if (!el || !enabled()) return;
        for (const child of Array.from(el.children)) before.set(child, child.getBoundingClientRect());
    });

    onUpdated(() => {
        const el = container();
        if (!el || !enabled() || !before.size) return;
        const { duration, easing } = motionTiming(level());
        for (const child of Array.from(el.children)) {
            if (!canAnimate(child)) continue;
            const old = before.get(child);
            if (!old) {
                child.animate([{ opacity: 0 }, { opacity: 1 }], { duration, easing: 'ease-out' });
                continue;
            }
            const now = child.getBoundingClientRect();
            const dx = old.left - now.left;
            const dy = old.top - now.top;
            if (!dx && !dy) continue;
            child.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], { duration, easing });
        }
        before.clear();
    });
}

/**
 * `<Transition>` hooks that animate height (and opacity) in and out, for content
 * that appears inside a layout, such as a field error. No hooks at all below
 * `minLevel`, so the element appears instantly as before.
 */
export function heightTransition(level: MotionLevel, minLevel: MotionLevel = 'smooth') {
    if (!levelAtLeast(level, minLevel)) return { css: false };
    const run = (el: Element, done: () => void, entering: boolean) => {
        if (!canAnimate(el)) return done();
        const height = `${el.scrollHeight}px`;
        const { duration, easing } = motionTiming(level, entering ? 'enter' : 'leave');
        const frames = [
            { height: '0px', opacity: 0, overflow: 'hidden' },
            { height, opacity: 1, overflow: 'hidden' },
        ];
        el.animate(entering ? frames : frames.reverse(), { duration, easing }).onfinish = done;
    };
    return {
        css: false,
        onEnter: (el: Element, done: () => void) => run(el, done, true),
        onLeave: (el: Element, done: () => void) => run(el, done, false),
    };
}

/**
 * Animates an element's height whenever its content resizes it, for a panel
 * whose content grows or shrinks while it is open. Returns a stop function.
 */
export function animateResizes(el: HTMLElement, level: () => MotionLevel, enabled: () => boolean = () => true): () => void {
    if (typeof ResizeObserver === 'undefined' || !canAnimate(el)) return () => undefined;
    let last = el.getBoundingClientRect().height;
    let running = false;
    const observer = new ResizeObserver(() => {
        const height = el.getBoundingClientRect().height;
        if (running || Math.abs(height - last) < 1 || !enabled() || !levelAtLeast(level(), 'smooth')) {
            last = height;
            return;
        }
        const { duration, easing } = motionTiming(level());
        running = true;
        const animation = el.animate([{ height: `${last}px`, overflow: 'hidden' }, { height: `${height}px`, overflow: 'hidden' }], { duration, easing });
        animation.onfinish = animation.oncancel = () => {
            running = false;
            last = el.getBoundingClientRect().height;
        };
        last = height;
    });
    observer.observe(el);
    return () => observer.disconnect();
}
