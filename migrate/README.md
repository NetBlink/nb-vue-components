# @netblink/vue-components-migrate

Codemod for upgrading apps from `@netblink/vue-components` v2.x to v3.x.

## What it does

v3.0.0 decouples the component library from FontAwesome. This codemod injects the FA preset into your app's entrypoint so all existing icon visuals are preserved automatically — for projects already using `@fortawesome/free-*-svg-icons`, you should see zero visual diff after the upgrade.

## Usage

```bash
cd my-app
npx @netblink/vue-components-migrate
```

Common flags:

| Flag | Purpose |
| --- | --- |
| `--path <dir>` | restrict the scan to a subdirectory (default: cwd) |
| `--entry <file>` | point at your Vue app entrypoint explicitly if the heuristic misses it |
| `--dry-run` | print the changes without writing |
| `--check` | exit `1` if any change would be made (use in CI) |
| `--yes` | skip interactive prompts |

## What it changes

1. **Your app entrypoint** (`src/main.ts` or wherever you call `app.use(NbVueComponents)`):

   ```ts
   import { createNbIcons } from '@netblink/vue-components/icons';
   import { faAliasPreset, faSet } from '@netblink/vue-components/icons/fa';

   app.use(NbVueComponents);
   app.use(createNbIcons({ aliases: faAliasPreset, sets: { fa: faSet }, defaultSet: 'fa' }));
   ```

2. **Deprecated FA string-form icons** in `.vue` files that import from `@netblink/vue-components`:

   ```diff
   - <FontAwesomeIcon icon="fab fa-whatsapp" />
   + <NbIcon name="$whatsapp" />
   ```

3. Writes a report to `./nb-vue-components-migration.md` listing anything that needs your attention (notably: the `$whatsapp` alias has no default and must be mapped explicitly).

## What it does NOT change

- Your own `<FontAwesomeIcon :icon="faXyz" />` usages keep working via the FA passthrough — they are counted but not rewritten.
- Your `package.json` is not touched. After migration, you can decide independently whether to keep `@fortawesome/*` (recommended if you still want the FA preset).

## Re-runs

The codemod is idempotent. Running it twice has no additional effect.

## Reporting issues

File issues at the [main package repo](https://github.com/NetBlink/nb-vue-components/issues).
