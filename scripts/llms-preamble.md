# @netblink/vue-components

A Vue 3 component library for Laravel + Inertia applications. Tailwind CSS v4, TypeScript,
built on [reka-ui](https://reka-ui.com) primitives. Dark mode is opt-in.

This file is written for AI coding assistants. It is the fastest path from "build me a settings
page with this library" to correct, idiomatic code.

## Install

```bash
npm install @netblink/vue-components

# peer dependencies
npm install @inertiajs/vue3 reka-ui
npm install @fortawesome/vue-fontawesome @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-solid-svg-icons
```

## Register

```js
// resources/js/app.js
import { createApp, h } from 'vue';
import { createInertiaApp, router, usePage } from '@inertiajs/vue3';
import Componentsnb, { setInertiaRouter, setInertiaPage } from '@netblink/vue-components';
import '@netblink/vue-components/dist/style.css';

createInertiaApp({
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            // darkMode: false (default) | 'class' | 'system'
            .use(Componentsnb, { darkMode: 'class' })
            .mount(el);

        // Components that navigate or read page props need these once.
        setInertiaRouter(router);
        setInertiaPage(usePage());
    },
});
```

The package ships compiled CSS, so importing `dist/style.css` above is all that is needed — there
is no Tailwind `@source` scanning to configure. Your own stylesheet:

```css
/* resources/css/app.css */
@import 'tailwindcss';
@plugin '@tailwindcss/forms';

/* Opt-in: activates `dark:` utilities when `.dark` is on <html>. */
/* Drop this line to use the default `prefers-color-scheme` behaviour. */
@custom-variant dark (&:where(.dark, .dark *));
```

## The single most important convention: `:form` + `field`

Every form control integrates directly with Inertia's `useForm`. Pass the form object and the
field name — the component then owns its own value binding, label, and validation error display.
**Prefer this over `v-model`.** It is the idiomatic usage across all consuming apps.

```vue
<script setup>
import { useForm } from '@inertiajs/vue3';
const form = useForm({ name: '', email: '', role: '', notes: '' });
</script>

<template>
    <form @submit.prevent="form.post(route('users.store'))" class="space-y-4">
        <!-- label is auto-derived from the field name; errors render automatically -->
        <Input :form="form" field="name" label="Full name" required />
        <Input :form="form" field="email" type="email" />

        <Select :form="form" field="role" label="Role" :options="{ admin: 'Admin', editor: 'Editor' }" />
        <Textarea :form="form" field="notes" :rows="3" />
        <Checkbox :form="form" field="terms" rightDescription="I agree to the terms" />

        <!-- SubmitButton reads form.processing itself: disables + spinner, no extra wiring -->
        <SubmitButton :form="form">Create user</SubmitButton>
    </form>
</template>
```

`v-model` is supported on every control for non-Inertia use:

```vue
<Input v-model="query" type="search" noLabel placeholder="Search…" />
<Switch v-model="enabled" noLabel rightDescription="Enable notifications" />
```

## Icons

Use `NbIcon`. Size it with the **`size` prop**, never with `h-*`/`w-*` classes — those fight the
component's own wrapper and leave the glyph at its default size.

```vue
<script setup>
import { NbIcon } from '@netblink/vue-components';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
    <NbIcon :name="faPlus" size="sm" />       <!-- sm md lg xl 2xl 3x, or a number/CSS length -->
    <NbIcon name="$close" size="lg" />        <!-- $-prefixed aliases resolve from the registry -->
</template>
```

## Buttons

`PrimaryButton`, `SecondaryButton`, `DangerButton`, `WarningButton`, `InfoButton`, `SuccessButton`
are thin wrappers over `Button`. Use `Button` with `theme` when the theme is dynamic. `LinkButton`
renders an anchor (or an Inertia `Link` when given `method`/`data`) with the same themes.
`SubmitButton` adds the loading state.

```vue
<PrimaryButton size="sm" @click="open = true">New</PrimaryButton>
<Button theme="danger" size="xs" @click="destroy">Delete</Button>
<LinkButton :href="route('users.index')" theme="secondary">Back</LinkButton>
<SubmitButton :loading="saving">Save</SubmitButton>
```

## Tables

`Table` renders its own horizontal-scroll wrapper and, given `:links`, its own pagination.
`Th` with `sortable` + `orderBy` handles sort links. On `Td`, the `label` prop supplies the
stacked mobile presentation — omit it and the table will not degrade on small screens.

```vue
<Table :links="users.meta.links" :total="users.meta.total" hover bordered>
    <Thead>
        <Th sortable orderBy="name">User</Th>
        <Th>Status</Th>
        <Th class="w-0"><span class="sr-only">Actions</span></Th>
    </Thead>
    <Tbody :data="users.data" emptyMessage="No users match your filters.">
        <Tr v-for="user in users.data" :key="user.id">
            <Td label="User">
                <div class="font-medium text-gray-900 dark:text-gray-100">{{ user.name }}</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">{{ user.email }}</div>
            </Td>
            <Td label="Status">{{ user.status }}</Td>
            <Td>
                <div class="flex justify-end gap-2">
                    <PrimaryButton size="xs" @click="edit(user)">Edit</PrimaryButton>
                    <Button theme="danger" size="xs" @click="destroy(user)">Delete</Button>
                </div>
            </Td>
        </Tr>
    </Tbody>
</Table>
```

## Modals

`NewModal` is preferred for new code (reka-ui `Dialog`, `v-model:open`). `Modal` is the older
variant kept for compatibility.

```vue
<NewModal v-model:open="showCreate" title="New user" description="Invite a teammate.">
    <div class="space-y-4">
        <Input :form="form" field="name" label="Full name" required />
    </div>
    <template #footer>
        <SecondaryButton @click="showCreate = false">Cancel</SecondaryButton>
        <PrimaryButton :disabled="form.processing" @click="form.post(route('users.store'))">Create</PrimaryButton>
    </template>
</NewModal>

<!-- resizable adds a drag handle at the bottom-right corner -->
<NewModal v-model:open="showNotes" resizable title="Release notes">…</NewModal>
```

## Toasts

Mount one `Toaster` in your layout, then raise toasts from anywhere with `useToast`.
`stack` collapses multiple toasts into a pile that fans out on hover.

```vue
<!-- layout -->
<Toaster position="bottom-right" stack />
```

```js
import { useToast } from '@netblink/vue-components';
const toast = useToast();
toast.success('Saved', { description: 'Your changes are live.' });
toast.error('Could not save');
```

## Dark mode

Every component ships dark variants; they activate under the strategy passed at registration
(`darkMode: 'class'` toggles on a `dark` class on `<html>`). When you write your own markup
around these components, pair every colour utility with a `dark:` variant:

| Light | Dark |
| --- | --- |
| `bg-white` | `dark:bg-gray-800` |
| `bg-gray-50` | `dark:bg-gray-900/40` |
| `text-gray-800` | `dark:text-gray-100` |
| `text-gray-600` | `dark:text-gray-400` |
| `border-gray-200` | `dark:border-gray-700` |

## Theming

Colours come from Tailwind v4 `@theme` tokens. Override the scale in your own CSS to re-brand
every component at once — use the numeric steps, not the bare alias:

```css
@theme {
    --color-primary-600: #0f766e; /* buttons, active states, focus rings */
    --color-primary-700: #115e59;
}
```

## Gotchas that cost real debugging time

- **`NavLink`, `ResponsiveNavLink` and `DropdownLink` swallow fallthrough `@click`.** They wrap the
  Inertia `Link`, which sets its own handler after spreading attrs. Put your handler on a wrapping
  element instead.
- **`Dropdown` portals its content to `<body>`.** Classes bound on `<Dropdown>` land on the floating
  panel, not the trigger — wrap the trigger in a `<div>` if you need to style or hide it.
- **`Td label` is required for mobile.** Without it a cell has no stacked small-screen rendering.
- **Size `NbIcon` with `size`, not `h-*`/`w-*`.**
- **Non-GET `LinkButton`/`DropdownLink` need `as="button"`** (`method="post"` on an anchor warns).
- **`NavCollapse` takes `name` and `open` only.** Older app code passes `parent`/`active`; those are
  ignored. Drive expansion with `:open`.
- **`NewModal` accepts both `v-model:open` and `v-model`.** `v-model:open` is the documented and
  most common form. Note that it currently works through attribute fallthrough onto the underlying
  `DialogRoot` rather than a declared named model — prefer it for consistency with existing apps,
  but do not add `inheritAttrs: false` to the component without declaring the model explicitly.
