import type { Component } from 'vue';

/** Built-in semantic alias names referenced by the library's own components. */
export type AliasName =
    | '$expand'
    | '$close'
    | '$success'
    | '$error'
    | '$warning'
    | '$info'
    | '$search'
    | '$eye'
    | '$eye-off'
    | '$help'
    | '$edit'
    | '$edit-alt'
    | '$construction'
    | '$whatsapp';

/** A `"<set>:<name>"` string referring to a registered IconSet. */
export type SetPrefixed = `${string}:${string}`;

/** Inline-SVG wrapper, e.g. `{ svg: '<svg viewBox="0 0 24 24">…</svg>' }`. */
export interface RawSvg {
    svg: string;
}

/**
 * Anything `<NbIcon name="…" />` and component icon props accept.
 * FA `IconDefinition` is `Record`-shaped at runtime; we accept it as `object`
 * here and let the FA set's resolver handle it (no compile-time dep on FA).
 */
export type IconLike = AliasName | SetPrefixed | string | Component | RawSvg | object;

/** What an IconSet's component renders for one icon. */
export interface IconSet {
    /** Component that knows how to render icons from this set. Receives `name` as a prop. */
    component: Component;
    /** Optional name transform. Default: identity. */
    resolve?: (name: string) => unknown;
}

/** Options passed to `createNbIcons({...})`. */
export interface NbIconsOptions {
    /** Override or extend default aliases. Merged over the built-in defaults. */
    aliases?: Partial<Record<AliasName, IconLike>>;
    /** Named icon sets, keyed by their string prefix (e.g. `"fa"`, `"mdi"`). */
    sets?: Record<string, IconSet>;
    /** Which set handles unprefixed string names. */
    defaultSet?: string;
    /** Dev-only: throw instead of warn on unresolved icons. Default `false`. */
    strict?: boolean;
}

/** Internal: the resolver's normalized output, consumed by NbIcon. */
export type RenderDescriptor =
    | { kind: 'component'; component: Component; props: Record<string, unknown> }
    | { kind: 'svg'; svg: string }
    | { kind: 'class'; cls: string }
    | { kind: 'empty' };
