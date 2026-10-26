# @netblink/vue-components migration report

Upgraded from 3.0.1 to 4.0.0-beta.0.

Steps: v3-to-v3-2, v3-to-v4

## Choices made

None.

## Manual changes needed

- No stylesheet importing tailwindcss found: add `@import '@netblink/vue-components/theme.css';` right after `@import 'tailwindcss';` and drop any `@source` pointing at @netblink.
- No app entry file found: add `import '@netblink/vue-components/style.css';` to it.

## Check visually

- Override classes (`class`, `:ui` and the deprecated props) now beat the library defaults they clash with: check pages that relied on a default winning, and drop `!` markers added only to beat a default.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
