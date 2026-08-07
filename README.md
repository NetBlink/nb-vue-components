# NB Vue Components

Vue 3 component library for Laravel and Inertia applications. TypeScript, Tailwind CSS v4.

**[Documentation and live examples](https://netblink.github.io/nb-vue-components/)**

## Install

```bash
npm install @netblink/vue-components
```

`vue` is the only required peer. FontAwesome and `@iconify/vue` are optional peers, needed only if
you route icons through those providers. Everything else the components use is bundled.

## Setup

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
            .use(Componentsnb, { darkMode: 'class' })
            .mount(el);

        setInertiaRouter(router);
        setInertiaPage(usePage());
    },
});
```

`setInertiaRouter` and `setInertiaPage` are required once. The library never imports Inertia
itself, so components that navigate or read page props use the instances you hand them.

`darkMode` accepts `false` (default), `'class'`, or `'system'`.

The package ships compiled CSS, so there is no Tailwind `content` or `@source` scanning to set up:

```css
/* resources/css/app.css */
@import 'tailwindcss';
@plugin '@tailwindcss/forms';

/* only needed for class-based dark mode */
@custom-variant dark (&:where(.dark, .dark *));
```

## Forms

Every form control binds to an Inertia `useForm` object. Pass the form and the field name, and the
component handles its value, label, and validation error:

```vue
<script setup>
import { useForm } from '@inertiajs/vue3';
const form = useForm({ name: '', email: '', role: '' });
</script>

<template>
    <form @submit.prevent="form.post(route('users.store'))" class="space-y-4">
        <Input :form="form" field="name" label="Full name" required />
        <Input :form="form" field="email" type="email" />
        <Select :form="form" field="role" label="Role" :options="[{ value: 'admin', label: 'Admin' }, { value: 'editor', label: 'Editor' }]" />
        <SubmitButton :form="form">Create user</SubmitButton>
    </form>
</template>
```

`SubmitButton` reads `form.processing` itself and shows its own loading state. `v-model` works on
every control for anything outside Inertia.

## Icons

Nothing to configure. `app.use(Componentsnb)` installs a default registry, and the components draw
their own chevrons, close buttons and status icons from inline SVGs that ship with the package.

To route them through a specific provider instead:

```ts
import { createNbIcons } from '@netblink/vue-components/icons';
import { faAliasPreset, faSet } from '@netblink/vue-components/icons/fa';

app.use(createNbIcons({ aliases: faAliasPreset, sets: { fa: faSet }, defaultSet: 'fa' }));
```

Presets exist for FontAwesome, Heroicons, Material Symbols, Solar and Lucide. `$whatsapp` is the
one alias with no built-in default; map it yourself if you use a component that references it.

Size icons with the `size` prop (`sm` through `3x`, or a number), not with `h-*`/`w-*` classes.

## Theming

Colours are Tailwind v4 `@theme` tokens. Override the numeric steps to re-brand every component:

```css
@theme {
    --color-primary-600: #0f766e;
    --color-primary-700: #115e59;
}
```

The docs site has a theme builder that generates a full scale from one anchor colour.

## Using this with an LLM

Two files ship inside the package and describe the whole library in markdown:

- `llms.txt` covers setup, conventions and an index of every component and block
- `llms-full.txt` adds props, defaults, slots and emits for all 72 components

After `npm install` they sit in `node_modules/@netblink/vue-components/`, so an assistant working
in your project can read them directly. Nothing to install or run:

```
Read node_modules/@netblink/vue-components/llms-full.txt, then build a settings page with it.
```

## Blocks

The docs site includes 24 complete page patterns built only from these components: dashboard, CRUD
index, show/edit, settings, product page, chat, AI assistant, auth flows, charts and more. Each has
a live demo and a copy-paste snippet.

## Development

```bash
npm install
npm run docs:dev        # docs site
npm run build           # library
npm run build:types     # type declarations
npm run nb:docs:llms    # regenerate llms.txt and llms-full.txt
```

Built by [NetBlink](https://github.com/NetBlink).
