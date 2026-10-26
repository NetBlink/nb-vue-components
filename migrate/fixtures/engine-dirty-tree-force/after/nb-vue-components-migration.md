# @netblink/vue-components migration report

Upgraded from 3.0.1 to 3.2.1.

Steps: v3-to-v3-2

## Choices made

None.

## Manual changes needed

- No stylesheet importing tailwindcss found: add `@import '@netblink/vue-components/theme.css';` right after `@import 'tailwindcss';` and drop any `@source` pointing at @netblink.
- No app entry file found: add `import '@netblink/vue-components/style.css';` to it.

## Check visually

None.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
