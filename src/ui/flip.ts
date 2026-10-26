import { onBeforeUpdate, onUpdated } from 'vue';
import { levelAtLeast, type MotionLevel } from './motion';

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
const SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)';

const readToken = (name: string): string => {
    if (typeof document === 'undefined' || typeof getComputedStyle === 'undefined') return '';
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
};

const readMs = (name: string, fallback: number): number => {
    const raw = readToken(name);
    const value = parseFloat(raw);
    if (Number.isNaN(value)) return fallback;
    return raw.endsWith('ms') ? value : raw.endsWith('s') ? value * 1000 : value;
};

/**
 * The theme's motion tokens, read at run time so an app that overrides
 * `--duration-quick`, `--duration-base` or the easings in its own `@theme` moves
 * JS-driven animations too. The values in theme.css are the fallbacks.
 */
export function motionTokens(): { quick: number; base: number; ease: string; spring: string } {
    return {
        quick: readMs('--duration-quick', 150),
        base: readMs('--duration-base', 400),
        ease: readToken('--ease-emphasised') || EASE,
        spring: readToken('--ease-spring') || SPRING,
    };
}

/** Duration and easing per level for JS-driven motion, derived from the theme tokens. */
export function motionTiming(level: MotionLevel, kind: 'enter' | 'leave' = 'enter'): { duration: number; easing: string } {
    if (level === 'off') return { duration: 0, easing: 'linear' };
    const { quick, base, ease, spring } = motionTokens();
    if (level === 'simple') return { duration: quick, easing: 'ease-out' };
    // With the default tokens: 600ms / 250ms at fancy, 400ms / 200ms at smooth.
    if (level === 'fancy') return kind === 'enter' ? { duration: base * 1.5, easing: spring } : { duration: base * 0.625, easing: ease };
    return kind === 'enter' ? { duration: base, easing: ease } : { duration: base * 0.5, easing: ease };
}

const canAnimate = (el: Element): el is HTMLElement => typeof (el as HTMLElement).animate === 'function';

/**
 * Play a FLIP move with classes instead of the Web Animations API: the element
 * is put back where it was, then `moveClass` (which carries the transition)
 * goes on and the offset comes off. Used when the app overrides `move`.
 */
export function moveWithClass(el: HTMLElement, dx: number, dy: number, moveClass: string): void {
    const classes = moveClass.split(/\s+/).filter(Boolean);
    el.style.transition = 'none';
    el.style.transform = `translate(${dx}px, ${dy}px)`;
    void el.offsetHeight;
    el.style.transition = '';
    el.classList.add(...classes);
    el.style.transform = '';
    let done = false;
    const cleanup = () => {
        if (done) return;
        done = true;
        el.classList.remove(...classes);
        el.removeEventListener('transitionend', cleanup);
    };
    el.addEventListener('transitionend', cleanup);
    setTimeout(cleanup, 2000);
}

/**
 * FLIP reflow for the direct children of a container: wherever an update moves
 * a child, it glides from its old position instead of jumping. New children
 * fade in. Runs from the component's own update hooks, so it covers slot
 * content too (slot content renders inside the child component).
 *
 * `moveClass` is the app's `move` override from the motion config. When set it
 * replaces the built-in animation, and enables the reflow at that level.
 */
export function useFlip(container: () => Element | null | undefined, enabled: () => boolean, level: () => MotionLevel, moveClass: () => string = () => ''): void {
    const active = () => enabled() || !!moveClass();
    let before = new Map<Element, DOMRect>();

    onBeforeUpdate(() => {
        before = new Map();
        const el = container();
        if (!el || !active()) return;
        for (const child of Array.from(el.children)) before.set(child, child.getBoundingClientRect());
    });

    onUpdated(() => {
        const el = container();
        if (!el || !active() || !before.size) return;
        const { duration, easing } = motionTiming(level());
        const custom = moveClass();
        for (const child of Array.from(el.children)) {
            if (!canAnimate(child)) continue;
            const old = before.get(child);
            if (!old) {
                child.animate([{ opacity: 0 }, { opacity: 1 }], { duration, easing: 'ease-out' });
                continue;
            }
            // A move still running from the previous update would skew the new
            // measurement. Keyframe animations from classes are left alone.
            for (const running of child.getAnimations?.() ?? []) {
                if (!('animationName' in running)) running.cancel();
            }
            const now = child.getBoundingClientRect();
            const dx = old.left - now.left;
            const dy = old.top - now.top;
            if (!dx && !dy) continue;
            if (custom) {
                moveWithClass(child, dx, dy, custom);
                continue;
            }
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
        const animation = el.animate(entering ? frames : frames.reverse(), { duration, easing });
        animation.onfinish = animation.oncancel = () => done();
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
