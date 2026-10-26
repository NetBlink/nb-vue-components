# @netblink/vue-components-migrate

Upgrades an app from any installed `@netblink/vue-components` 1.x, 2.x or 3.x to the latest version this CLI knows (3.2.1), one step per breaking release.

## Usage

```bash
cd my-app
npx @netblink/vue-components-migrate
```

The CLI detects the installed version (package-lock.json, pnpm-lock.yaml or yarn.lock, classic or berry, then node_modules, then the package.json range), picks the steps between it and the target, asks one question per kind of change, shows the files it will change and asks before writing. It bumps `@netblink/vue-components` in package.json but never runs npm or a build in your app. Run `npm install` and build afterwards.

If the only thing to go on is a package.json range with no lower bound (`*`, `x`, `latest`), it stops and asks for `--from`.

It refuses to run on a git tree with uncommitted changes, so you can review the result with `git diff` and undo it with `git checkout .`. Edited files keep their line endings (CRLF stays CRLF) and package.json keeps its indentation.

## Flags

| Flag | Purpose |
| --- | --- |
| `--path <dir>` | app root (default: current directory) |
| `--to <version>` | stop at the newest known version of a major (`--to 2`), or at an exact step version (`--to 2.0.49`) |
| `--from <version>` | the installed version to start from (`--from 2.0.48`), instead of detecting it |
| `--dry-run` | print the full diff, write nothing; never asks, takes the defaults (or `--choices`) |
| `--check` | write nothing, exit 1 if anything would change; never asks, like `--dry-run` |
| `--yes` | no prompts: take the default of every choice and write |
| `--choices <file>` | JSON file of `{ "<choice id>": "keep" \| "adopt" }`, used instead of asking |
| `--force` | run even with uncommitted changes |
| `--entry <file>` | app entry file, when it is not found automatically: an absolute path, or relative to the current directory, then to `--path` |

Without `--entry`, the entry file is looked for in `resources/js/app.ts`, `resources/js/app.js`, `src/main.ts` and `src/main.js`, then in the first `.js`/`.ts` file calling `createInertiaApp(` or `createApp(`.

Exit codes: 0 done (or nothing to do), 1 `--check` found changes, 2 refused or failed (an unexpected error never gives 1).

Files are parsed by extension: `.ts` without JSX (so `<HTMLElement>el` casts work), `.tsx` with it, `.js` with JSX only when it needs it, SFC scripts by their `lang`.

## Choices

Where a prop restores the old behaviour exactly, you choose:

- **keep**: add the prop so the app behaves as before;
- **adopt**: take the new default.

There is one question per kind of change, not per site. Changes that are purely visual are only listed in the report.

## Steps

### `v1-to-v2` (to 2.0.1)

Needs Tailwind 4 (see below).

- Dropdown `align="left"`/`"right"` become `"start"`/`"end"`. `width` and `contentClasses` are removed and reported.
- NavCollapse `show` becomes `open` (`:show`, `v-model:show`, `@update:show`, `v-on:update:show`).
- DropdownLink without `href` is reported.
- Dropdown, LinkDropdownButton, CollapsibleSection and NavCollapse moved to reka-ui: each site is listed to check visually.
- Apps using TrCollapse, TrCollapseHandler, TdCollapseHandler or SelectMultiple are told to keep tw-elements.

| Choice id | Default | keep | adopt |
| --- | --- | --- | --- |
| `dropdown-align` | keep | Dropdowns without align stay right-aligned (`align="end"`) | use the new default (`align="start"`) |

### `v2-patch` (to 2.0.49)

- Adds `setInertiaPage(usePage());` after `setInertiaRouter(router);` in the entry, with its imports. Stats needs it.
- Alert `message` was removed: each use is reported.
- From 2.0.25 to 2.0.31, TrPlaceholder `columns` becomes `placeholders` again.
- LinkButton sites are listed to check visually.

| Choice id | Default | keep | adopt |
| --- | --- | --- | --- |
| `alert-dismissible` | keep | add `dismissible`, keeping the close button | no close button |
| `table-sticky` | keep | add `sticky` (restores sticky, not the exact old look, 3.2 reworks sticky) | not sticky |

### `v2-to-v3` (to 3.0.1)

- Bumps `vue` to `^3.5.0` when the range allows older versions.

| Choice id | Default | keep | adopt |
| --- | --- | --- | --- |
| `icons` | keep | keep FontAwesome icons: adds the FA preset to the entry, adds missing `@fortawesome/*` packages and rewrites `<FontAwesomeIcon icon="fab fa-whatsapp">` to `<NbIcon name="$whatsapp">` | use the built-in SVG icons; each Input/Textarea `whatsApp` prop is reported because `$whatsapp` needs a mapping |

Only the WhatsApp icon is rewritten, because `$whatsapp` means the same icon. Every other `FontAwesomeIcon` stays as it is (FontAwesome stays installed): FA names do not map to the aliases one to one (`$expand` is a chevron, not `fa-expand`). The tag is rewritten only when it is FontAwesome's component, imported from `@fortawesome/vue-fontawesome` in that SFC or registered in the entry with `app.component('...', FontAwesomeIcon)`. A `FontAwesomeIcon` that is neither is reported.

With keep, the entry gets:

```js
import { createNbIcons } from '@netblink/vue-components/icons';
import { faAliasPreset, faSet } from '@netblink/vue-components/icons/fa';

createApp({ render: () => h(App, props) })
    .use(plugin)
    .use(createNbIcons({ aliases: faAliasPreset, sets: { fa: faSet }, defaultSet: 'fa' }))
    .mount(el);
```

### `v3-to-v3-2` (to 3.2.1)

- Adds `@import '@netblink/vue-components/theme.css';` after `@import 'tailwindcss';` in the app stylesheet, drops `@source` lines pointing at @netblink and removes `@keyframes` identical to the library's. Same-named keyframes with a different body are reported.
- Adds `import '@netblink/vue-components/style.css';` to the entry.
- Section, Pagination, LinkDropdownButton, disabled buttons and sticky Tables are listed to check visually.
- An app already on 3.2.0 has the NewModal `max-width` fix and the restyles: it gets neither the `newmodal-maxwidth` question nor the visual checks.

| Choice id | Default | keep | adopt |
| --- | --- | --- | --- |
| `newmodal-maxwidth` | keep | remove `max-width` from NewModal, keeping the 600px width | honour the `max-width` you set |
| `modal-to-newmodal` | keep | keep Modal | rename Modal to NewModal: `modal-custom-class` becomes `class`, `align-top` is added where `align-center` was absent, `:padded="false"` where the slot brings its own padding |

With adopt, an aliased import is followed (`import { Modal as M }`): it becomes `NewModal as M`, or, when NewModal is imported too, `<M>` tags become that NewModal. A file using Modal as a value (`:is="Modal"`, `h(Modal)`, `markRaw(Modal)`) is left as is and reported.

## What is never rewritten

- Your own components that share a library name. Only tags imported from `@netblink/vue-components` in that SFC count.
- Dynamic bindings (`:align="wide ? 'left' : 'right'"`), `v-bind` spreads and render-function calls (`h(NavCollapse, ...)`). They are reported with file and line.
- Files that do not parse: each is reported with file, line and the parser's message, and the other files are still migrated.
- Templates the CLI cannot read (`<template lang="pug">`, `<template src="...">`) and components used through a namespace import (`import * as Nb from '@netblink/vue-components'`, `<Nb.Section>`). They are reported.

## The report

Every run writes `nb-vue-components-migration.md` in the app root with:

- the choices made, with their ids, so you can rerun with `--choices`;
- manual changes needed, with file:line;
- sites to check visually;
- the next steps.

## Tailwind 3

The 1.x to 2.x step needs Tailwind 4. On a Tailwind 3 app the CLI stops before it: run `npx @tailwindcss/upgrade`, commit, then run this CLI again.

## @shbc/vue-components

Not supported. Only apps on `@netblink/vue-components` can be upgraded.

## Switching icon sets

After the upgrade, swap the icon preset in the entry file:

```bash
npx @netblink/vue-components-migrate switch hero   # fa, hero, material, solar or lucide
```

`--dry-run`, `--path`, `--entry` and `--force` work as above (it refuses uncommitted changes too). Aliases you added beside the preset (`aliases: { ...faAliasPreset, $logo: Logo }`) are kept. It prints the packages the new set needs.

## Development

```bash
npm ci
npm run fixtures            # build, then run every fixture
npm run fixtures <name>     # one fixture
```

A fixture is `fixtures/<name>/before/` (the app), `after/` (the expected tree, report included), optional `args.json` (CLI arguments, default `["--yes"]`, a subcommand such as `["switch", "hero"]` first) and optional `expect.json` (`{ exitCode, stdoutIncludes, dirty }`).

`node scripts/snapshot-theme.mjs` refreshes `src/steps/data/theme-keyframes.ts` from the library's `theme.css`.

## Reporting issues

File issues at the [main package repo](https://github.com/NetBlink/nb-vue-components/issues).
