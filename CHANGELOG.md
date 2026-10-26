# Changelog - Vue Component Library

## [3.2.1] - 2026-10-23

### Fixed
- `NewModal` bound with `v-model:show` opened but could never be closed: it now emits `update:show` alongside `close`.

## [3.2.0] - 2026-10-23

### Added
- `@netblink/vue-components/theme.css`: the Tailwind side of the package (colour, motion and breakpoint tokens, keyframes, custom utilities, toast swipe and collapse-icon rules) plus an `@source` for the built components. Import it after `tailwindcss`. Previously this only lived in the unpublished `src/main.css`, and Tailwind v4 never scans `node_modules`, so consumers had to copy it by hand.
- `@netblink/vue-components/style.css` export for the components' scoped CSS. The documented `dist/style.css` path never existed and was blocked by `exports`.
- `NewModal` covers every `Modal` prop: `:show` + `@close`, `maxWidth`, `closeable`, `hideOverflow`, `showBorder`, `backdropDuration`, `modalDuration`, `backdropCustomClass`, plus `alignTop` and `padded`. A `<Modal>` swaps over by renaming the tag (see "Migrating from Modal" in the docs).
- Lucide preset (`lucideAliasPreset`, `lucideSet`) in `@netblink/vue-components/icons/lucide`, Iconify-backed like Heroicons. The subpath was an empty placeholder before.

### Fixed
- `NewModal` stacked above portaled Dropdown, LinkDropdownButton and Tooltip content (`z-[100]` vs `z-50`), so those opened behind it. The backdrop (`z-30`) also sat under typical sticky headers.
- `NewModal` without a title or description no longer triggers reka-ui's accessibility warnings.
- `NbIcon` default `md` size overrode smaller size classes (`class="h-4 w-4"`, `size-3`), so those icons rendered at 20px.
- `Tooltip` animations used v3 `tailwindcss-animate` classes that don't exist in v4. They now use the theme's motion tokens like `Dropdown`.
- `bg-dotted` utility had an invalid `background-position`.
- Installing `createNbIcons()` after `app.use(Componentsnb)` no longer triggers Vue's "already provides" warning.
- Unknown icon aliases (e.g. an unmapped `$whatsapp`) warn once instead of on every render.

### Deprecated
- `Modal`. It keeps working; use `NewModal` for new code.

## [3.1.1] - 2026-08-07

### Changed
- README and llms preamble fact-checked: stale install and codemod claims removed.

## [3.1.0] - 2026-08-07

### Added
- `Tabs`/`Tab`, `Toaster`/`Toast` and `Collapse` components.
- Blocks catalog in the docs: 24 prebuilt compositions.
- JSDoc descriptions on every component, and generated `llms.txt` / `llms-full.txt`.
- `NewModal` `resizable` prop.

### Fixed
- `NewModal` `v-model:open` and `v-model` are declared models (they only worked through attribute fallthrough before).
- `Td` label, disabled buttons, null-safe `$page` access in `Images`.

### Changed
- Docs cleanup: Tailwind v3 removed from Setup and Theme Builder, Motion and dark-mode sections, Theme Builder Motion tab, previously undocumented components documented.

## [3.0.0] - 2026-05-19

### Breaking
- FontAwesome is no longer a build-time dependency of this package. Consumers must either install the FA preset (`@netblink/vue-components/icons/fa`) or migrate their alias overrides to another provider. The upgrade CLI (`migrate/`, released as a GitHub release tarball, see its README) automates the first option.
- `DataTile.icon` prop changed type from `IconProp` (FA) to `IconLike`. Existing `:icon="faXyz"` calls continue to work as long as the FA preset is registered.
- The internal hardcoded `<FontAwesomeIcon icon="fab fa-whatsapp" …>` form in `InputWithActions` was replaced with `<NbIcon name="$whatsapp" …>`. Consumers who use `InputWithActions` or `Textarea`'s WhatsApp affordance must register a `$whatsapp` alias.

### Added
- `<NbIcon>` rendering primitive (`@netblink/vue-components/icons`).
- `createNbIcons({ aliases, sets, defaultSet, strict })` Vue plugin for configuring providers.
- `useNbIcons()` composable.
- `faAliasPreset` + `faSet` drop-in preset preserving v2.x visuals.
- 15 built-in alias names (`$expand`, `$close`, `$success`, `$error`, `$warning`, `$info`, `$search`, `$eye`, `$eye-off`, `$help`, `$edit`, `$edit-alt`, `$construction`, `$sun`, `$moon`) shipping default inline SVGs, plus `$whatsapp` with no default.
- `#icon` slot escape hatch on `DataTile`.

### Removed
- Direct `@fortawesome/*` imports from every internal component (the FA packages are now optional peer dependencies, only required when consumers opt into the FA preset).
- Dead `library.add(...)` and unused FA imports across several components.

## v2.0 - Overview

Major update transitioning from tw-elements to Reka UI with enhanced TypeScript support and improved accessibility.

## Breaking Changes

**None** - All components maintain backwards compatibility.

## Infrastructure Changes

- **Component Library**: Migrated from `tw-elements` to [Reka UI](https://reka-ui.com/)
  - Better accessibility built-in
  - No premium paywall restrictions
  - More modern and actively maintained
  - Better TypeScript support (weirdly tbh)

- **Tailwind CSS**: Updated to v4.0
  - See [Tailwind upgrade guide](https://tailwindcss.com/docs/upgrade-guide)

## New Components

### Tooltip
**New component** using Reka UI with built-in accessibility.

```vue
<Tooltip content="Helpful information">
  <button>Hover me</button>
</Tooltip>
```

**Props:**
- `content` (string, required) - Tooltip text
- `side` ('top' | 'bottom' | 'left' | 'right') - Position (default: 'top')
- `delayDuration` (number) - Hover delay in ms (default: 100)
- `disabled` (boolean) - Disable tooltip
- `contentClass` (string) - Custom content styling
- `arrowClass` (string) - Custom arrow styling
- `sideOffset` (number) - Distance from trigger (default: 4)
- `collisionPadding` (number) - Viewport padding (default: 8)

**Features:**
- Trigger as child pattern
- Matches component library design system
- Automatic collision detection
- Smooth animations

### Button
**New base component** with theme system for consistent button styling.

```vue
<Button theme="primary" size="lg">Save Changes</Button>
```

**Props:**
- `theme` ('primary' | 'secondary' | 'danger') - Button theme (default: 'primary')
- `type` ('button' | 'submit' | 'reset') - Button type (default: 'button')
- `size` ('xs' | 'sm' | 'md' | 'lg') - Button size (default: 'md')
- `disabled` (boolean) - Disabled state
- `customClass` (string) - Additional CSS classes

**Themes:**
- **Primary**: Blue background, white text
- **Secondary**: White background, gray border
- **Danger**: Red background, white text
- **Warning**: Yellow background, white text
- **Info**: Blue background, white text
- **Success**: Green background, white text
- **No-style**: No default styling applied

```vue
<!-- All available button themes -->
<PrimaryButton>Primary Action</PrimaryButton>
<SecondaryButton>Secondary Action</SecondaryButton>
<DangerButton>Delete</DangerButton>
<WarningButton>Warning</WarningButton>
<InfoButton>Information</InfoButton>
<SuccessButton>Save</SuccessButton>

<!-- Or use the base Button component -->
<Button theme="warning">Custom Warning</Button>
<Button theme="no-style" customClass="my-custom-styles">Unstyled</Button>
```

## Component Updates

### Dropdown
- **Changed**: `align` property now type-safe: `'start' | 'center' | 'end'`
- **Changed**: `content-classes` can be used as `class`, `$attrs` moved to Content component
- **Warning**: Don't use `<ul>` lists inside dropdown content anymore

### DropdownSeparator
- **Added**: Pre-styled separator component for dropdowns

### CollapsibleSection
- **Added**: `#trigger` slot alongside existing `header` prop
- **Updated**: Icon indicator with Vue animation support (transition name: `collapse-icon`)

### NavCollapse
- **Changed**: Prop `show` renamed to `open`

### LinkDropdownButton
- **Added**: `open` prop for controlling dropdown state

### PrimaryButton
- **Changed**: Now uses base Button component with `theme="primary"`
- **Added**: Size support via `size` prop
- **Backwards Compatible**: All existing props still work

### SecondaryButton
- **Changed**: Now uses base Button component with `theme="secondary"`
- **Added**: Size support via `size` prop
- **Added**: `disabled` prop support
- **Added**: `customClass` prop for additional styling

### DangerButton
- **Changed**: Now uses base Button component with `theme="danger"`
- **Added**: Size support via `size` prop
- **Added**: `customClass` prop for additional styling

### SubmitButton
- **Added**: Theme support: `'primary' | 'secondary' | 'danger'` (default: 'primary')
- **Added**: Size support via `size` prop
- **Backwards Compatible**: All existing functionality preserved (loading states, form integration)
- **Enhanced**: Loading spinner now works with all themes

```vue
<SubmitButton theme="danger" :loading="isDeleting">
  Delete Account
</SubmitButton>
```

### Input
- **Added**: `tooltip` prop - displays question mark icon with tooltip next to label
- **Enhancement**: Tooltip icon appears before required asterisk (*) and matches label text styling

```vue
<Input 
  field="email" 
  label="Email Address"
  required
  tooltip="We'll use this for important notifications"
/>
```

### InputLabel
- **Added**: `tooltip` prop support
- **Enhancement**: Question mark icon positioned before required asterisk
- **Enhancement**: Icon styling matches label text size and color

## Migration Guide

### Button System

**Old way (still works):**
```vue
<PrimaryButton>Save</PrimaryButton>
<SecondaryButton>Cancel</SecondaryButton>
<DangerButton>Delete</DangerButton>
```

**New way (recommended):**
```vue
<Button theme="primary">Save</Button>
<Button theme="secondary">Cancel</Button>
<Button theme="danger">Delete</Button>
```

**With new features:**
```vue
<Button theme="primary" size="lg">Large Save Button</Button>
<SubmitButton theme="danger" :loading="isDeleting">Delete</SubmitButton>
```

### Input Tooltips

**Before:**
```vue
<Input field="email" label="Email Address" required />
<!-- Separate tooltip implementation needed -->
```

**After:**
```vue
<Input 
  field="email" 
  label="Email Address" 
  required
  tooltip="We'll use this for important notifications"
/>
```

## CSS Animations

### Collapse Icon Animation
Add this CSS for animated collapse indicators:

```css
.collapse-icon-enter-active,
.collapse-icon-leave-active {
    transition: all 0.2s ease-out;
    rotate: 0;
    opacity: 1;
}

.collapse-icon-enter-from {
    opacity: 0.5;
    transform: rotate(90deg);
}

.collapse-icon-leave-to {
    opacity: 0.5;
    transform: rotate(-90deg);
}
```
