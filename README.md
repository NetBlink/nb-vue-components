# NB Vue Components

Vue 3 component library for Laravel and Inertia applications. Built with TypeScript, styled with
Tailwind CSS v4, and using [reka-ui](https://reka-ui.com) primitives for the components where
accessibility matters (dialogs, dropdowns, switches, tabs, toasts).

## Installation

```bash
npm install @netblink/vue-components

# peer dependencies
npm install @inertiajs/vue3 reka-ui
npm install @fortawesome/vue-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
```

## Setup

### 1. Register the plugin

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

### 2. Stylesheet

The package ships compiled CSS, so the `dist/style.css` import above is all it needs. There is no
Tailwind `content` or `@source` scanning to configure. Your own stylesheet stays minimal:

```css
/* resources/css/app.css */
@import 'tailwindcss';
@plugin '@tailwindcss/forms';

/* Opt-in: activates `dark:` utilities when `.dark` is on <html>. */
/* Drop this line to use the default prefers-color-scheme behaviour. */
@custom-variant dark (&:where(.dark, .dark *));
```

### 3. Theming

Colours are Tailwind v4 `@theme` tokens, so re-branding is a matter of overriding the scale in your
own CSS. Use the numeric steps rather than the bare alias, since that is what the components
reference:

```css
@theme {
    --color-primary-600: #0f766e; /* buttons, active states, focus rings */
    --color-primary-700: #115e59;
}
```

The docs site has a theme builder that generates a full scale from a single anchor colour and
prints the snippet ready to paste.

### 4. Icons (optional)

Components draw their own affordances (chevrons, close buttons) with inline SVGs, so nothing is
required here. To route them through a specific icon provider, install the `createNbIcons` plugin:

```ts
import { createNbIcons } from '@netblink/vue-components/icons';

// Keeps FontAwesome visuals everywhere, matching v2 behaviour:
import { faAliasPreset, faSet } from '@netblink/vue-components/icons/fa';
app.use(createNbIcons({ aliases: faAliasPreset, sets: { fa: faSet }, defaultSet: 'fa' }));

// Or bring your own (Heroicons):
import { ChevronDownIcon, XMarkIcon } from '@heroicons/vue/24/outline';
app.use(createNbIcons({ aliases: { $expand: ChevronDownIcon, $close: XMarkIcon } }));
```

Components with an icon prop (`DataTile`, `LogsContent`) accept an alias (`'$expand'`), a
set-prefixed string (`'fa:home'`), a Vue component, a raw SVG (`{ svg: '<svg>...</svg>' }`), or a
FontAwesome icon object. Each also exposes an `#icon` slot.

Upgrading from v2.x? The codemod injects the FontAwesome preset and rewrites deprecated forms:

```bash
npx @netblink/vue-components-migrate
```

## Forms: the `:form` + `field` pattern

This is the main thing to know about the library. Every form control binds directly to an Inertia
`useForm` object. Pass the form and the field name, and the component handles its own value, label,
and validation error:

```vue
<script setup>
import { useForm } from '@inertiajs/vue3';
const form = useForm({ name: '', email: '', role: '', notes: '' });
</script>

<template>
    <form @submit.prevent="form.post(route('users.store'))" class="space-y-4">
        <Input :form="form" field="name" label="Full name" required />
        <Input :form="form" field="email" type="email" />
        <Select :form="form" field="role" label="Role" :options="{ admin: 'Admin', editor: 'Editor' }" />
        <Textarea :form="form" field="notes" :rows="3" />

        <!-- reads form.processing itself: disables and shows a spinner -->
        <SubmitButton :form="form">Create user</SubmitButton>
    </form>
</template>
```

`v-model` works on every control too, for anything outside Inertia:

```vue
<Input v-model="query" type="search" noLabel placeholder="Search..." />
<Switch v-model="enabled" noLabel rightDescription="Enable notifications" />
```

## Documentation

**[Full documentation and live examples](https://netblink.github.io/nb-vue-components/)**

The docs site covers every component with interactive demos and props tables. It also ships a
**Blocks** section: 24 complete page patterns (dashboard, CRUD index, show/edit, settings, product
page, chat, auth flows, charts, and more) built only from these components, each with a live demo
and a copy-paste snippet.

### Using this library with an LLM

Point your AI assistant at one of these two files and it will have everything it needs. Both are
generated from the component sources, so they cannot drift from the code.

| File | Use it for |
| --- | --- |
| [`llms.txt`](./llms.txt) | Setup, the `:form` + `field` pattern, conventions, gotchas, and an index of every component and block |
| [`llms-full.txt`](./llms-full.txt) | The same, plus full props, defaults, slots and emits for all 72 components |

The quickest way to use them:

```
Read llms-full.txt from @netblink/vue-components, then build a settings page with it.
```

Nothing needs to be installed or run for this. Both files ship inside the package, so after
`npm install` they sit at `node_modules/@netblink/vue-components/llms-full.txt` and any assistant
working in your project can open them directly.

(Contributors to this library regenerate them with `npm run nb:docs:llms` after changing a
component. That script lives in this repo only.)

## Components

**Forms.** `Input` is the all-in-one control and the usual choice; it renders the label, error and
tooltip and switches implementation on `type`. `TextInput` is the bare input underneath for custom
layouts. Also `Textarea`, `Checkbox`, `RadioButton`, `Switch`, `Select`, `SimpleSelect`,
`RichSelect`, `SearchSelect`, `SelectMultiple`, `Select2ajax`, `FileDropZoneInput`, `Images`,
`InputLabel`, `InputError`, `SubmitButton`.

**Buttons.** `Button` takes a `theme`; `PrimaryButton`, `SecondaryButton`, `DangerButton`,
`WarningButton`, `InfoButton` and `SuccessButton` are wrappers over it. `LinkButton` renders an
anchor or an Inertia link. `SubmitButton` adds the loading state.

**Tables.** `Table` with `Thead`, `Tbody`, `Tr`, `Th`, `Td`. Given `:links` it renders its own
pagination, and `Th sortable orderBy="col"` handles sorting. `TrCollapse`, `TrCollapseHandler` and
`TdCollapseHandler` build expandable rows; `TableItemCard` is the mobile card fallback;
`EnhancedTable` wraps the lot with built-in state.

**Navigation.** `NavLink`, `ResponsiveNavLink`, `NavCollapse`, `Dropdown`, `DropdownLink`,
`DropdownSeparator`, `LinkDropdownButton`, `LinkDropdownButtonItem`, `Pagination`, `Tabs`, `Tab`.

**Layout and feedback.** `Section`, `Modal` and `NewModal` (prefer `NewModal`, which supports
`resizable`), `Alert`, `Toaster` and `Toast` with the `useToast` composable, `Collapse`,
`CollapsableSection`, `Tooltip`, `Spinner`, `Stats`, `DataTile`, `DescriptionList`,
`DescriptionListItem`, `Logs`, `LogsContent`, `GravatarImg`, `DottedCarousel`, `UnderConstruction`.

## Development

```bash
git clone https://github.com/NetBlink/nb-vue-components.git
cd nb-vue-components
npm install

npm run docs:dev      # docs site, hot reload
npm run docs:build    # build docs site
npm run build         # build library
npm run build:types   # type declarations
npm run nb:docs:llms     # regenerate llms.txt and llms-full.txt
```

Built by [NetBlink](https://github.com/NetBlink).
