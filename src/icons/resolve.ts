import { isVNode } from 'vue';
import type { Component } from 'vue';
import type { IconLike, RawSvg, RenderDescriptor } from './types';
import type { NbIconsRegistry } from './inject';

function isRawSvg(x: unknown): x is RawSvg {
    return typeof x === 'object' && x !== null && typeof (x as RawSvg).svg === 'string';
}

function isComponent(x: unknown): x is Component {
    if (typeof x === 'function') return true;
    if (typeof x === 'object' && x !== null) {
        const obj = x as Record<string, unknown>;
        // Vue defineComponent / SFC compile output / object component
        return (
            typeof obj.render === 'function' ||
            typeof obj.setup === 'function' ||
            typeof obj.template === 'string' ||
            obj.__file !== undefined ||
            isVNode(obj)
        );
    }
    return false;
}

/**
 * Normalize an IconLike into a RenderDescriptor that NbIcon knows how to render.
 *
 * Resolution order:
 *   1. `string` starting with `$` → look up alias (recursively resolve the value).
 *   2. `string` containing `:`   → look up set by prefix, build component descriptor.
 *   3. `string` (other)          → if defaultSet registered, treat as that set's name;
 *                                  otherwise fall back to `class` (raw `<i class="…">`).
 *   4. RawSvg                    → svg descriptor (Note: caller sanitizes).
 *   5. Vue component             → component descriptor.
 *   6. Anything else             → look for the FA set (icon objects route through fa.component).
 */
export function resolve(icon: IconLike | undefined | null, reg: NbIconsRegistry): RenderDescriptor {
    if (icon === undefined || icon === null) return { kind: 'empty' };

    if (typeof icon === 'string') {
        if (icon.startsWith('$')) {
            const aliased = reg.aliases[icon as keyof typeof reg.aliases];
            if (aliased === undefined) {
                if (reg.strict) throw new Error(`[nb-vue-components] unknown icon alias: ${icon}`);
                if (typeof console !== 'undefined') console.warn(`[nb-vue-components] unknown icon alias: ${icon}`);
                return { kind: 'empty' };
            }
            return resolve(aliased, reg);
        }
        const colonAt = icon.indexOf(':');
        if (colonAt > 0) {
            const prefix = icon.slice(0, colonAt);
            const rest = icon.slice(colonAt + 1);
            const set = reg.sets[prefix];
            if (!set) {
                if (reg.strict) throw new Error(`[nb-vue-components] unknown icon set: "${prefix}"`);
                if (typeof console !== 'undefined') console.warn(`[nb-vue-components] unknown icon set: "${prefix}"`);
                return { kind: 'empty' };
            }
            const name = set.resolve ? set.resolve(rest) : rest;
            return { kind: 'component', component: set.component, props: { icon: name } };
        }
        if (reg.defaultSet) {
            const set = reg.sets[reg.defaultSet];
            if (set) {
                const name = set.resolve ? set.resolve(icon) : icon;
                return { kind: 'component', component: set.component, props: { icon: name } };
            }
        }
        return { kind: 'class', cls: icon };
    }

    if (isRawSvg(icon)) return { kind: 'svg', svg: icon.svg };

    if (isComponent(icon)) return { kind: 'component', component: icon as Component, props: {} };

    // Last resort: FA's IconDefinition is an object shaped { prefix, iconName, icon: [...] }.
    // Route it through the registered "fa" set if available.
    const faSet = reg.sets['fa'];
    if (faSet) return { kind: 'component', component: faSet.component, props: { icon } };

    if (reg.strict) throw new Error('[nb-vue-components] unresolvable icon value');
    if (typeof console !== 'undefined') console.warn('[nb-vue-components] unresolvable icon value', icon);
    return { kind: 'empty' };
}
