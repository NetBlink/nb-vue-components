# @netblink/vue-components migration report

Upgraded from 3.2.1 to 4.0.0-beta.0.

Steps: v3-to-v4

## Choices made

None.

## Manual changes needed

- **resources/js/Pages/Form.vue:9**: Input `inputCustomClass`: `:ui` is bound to an expression, not an object literal, so it was left as is. Move it to `:ui="{ input: '...' }"` by hand.
- **resources/js/Pages/Form.vue:10**: Select `customClass`: `:ui` has a spread, computed key or method, so it was left as is. Move it to `:ui="{ input: '...' }"` by hand.
- **resources/js/Pages/Form.vue:11**: Stats `customStatClass`: `:ui` is bound to an expression, not an object literal, so it was left as is. Move it to `:ui="{ stat: '...' }"` by hand.

## Check visually

- Override classes (`class`, `:ui` and the deprecated props) now beat the library defaults they clash with: check pages that relied on a default winning, and drop `!` markers added only to beat a default.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
