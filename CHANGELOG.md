# Changelog - Vue Component Library v2.0

## Overview

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
