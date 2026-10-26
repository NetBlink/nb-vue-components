# @netblink/vue-components migration report

Upgraded from 3.2.1 to 4.0.0-beta.0.

Steps: v3-to-v4

## Choices made

None.

## Manual changes needed

- **resources/js/Pages/Cells.vue:6**: Button in a render function: change its deprecated props by hand if it passes any, `customClass` to `class`. They still work in 4.x and are removed in 5.0.
- **resources/js/Pages/Cells.vue:7**: Tbody in a render function: change its deprecated props by hand if it passes any, `noRecordsMessage` to `emptyMessage`. They still work in 4.x and are removed in 5.0.
- **resources/js/lib/columns.js:4**: Input in a render function: change its deprecated props by hand if it passes any, `inputCustomClass` to `:ui="{ input: '...' }"`, `labelCustomClass` to `:ui="{ label: '...' }"`, `buttonCustomClass` to `:ui="{ button: '...' }"`, `checkboxCustomClass` (no effect, remove it). They still work in 4.x and are removed in 5.0.
- **resources/js/Pages/Cells.vue:12**: Button with a `v-bind` spread, so it was left as is: change the deprecated props in the bound object by hand if it has any, `customClass` to `class`.

## Check visually

- Override classes (`class`, `:ui` and the deprecated props) now beat the library defaults they clash with: check pages that relied on a default winning, and drop `!` markers added only to beat a default.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
