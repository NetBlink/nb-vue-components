# @netblink/vue-components migration report

Upgraded from 3.2.1 to 4.0.0-beta.0.

Steps: v3-to-v4

## Choices made

- Tbody `noRecordsMessage` is shown now (3.x always showed the default text): **keep**, Keep the text 3.x showed (removes noRecordsMessage) (2 sites, choice id `tbody-empty-message`)

## Manual changes needed

None.

## Check visually

- **resources/js/Pages/Orders.vue:9**: Tbody empty row is centred grey text with `py-8` now (it was left-aligned dark text): restore the old look with `:ui="{ empty: 'text-left text-gray-900 sm:py-4' }"`.
- **resources/js/Pages/Orders.vue:10**: Tbody empty row is centred grey text with `py-8` now (it was left-aligned dark text): restore the old look with `:ui="{ empty: 'text-left text-gray-900 sm:py-4' }"`.
- **resources/js/Pages/Orders.vue:11**: Tbody empty row is centred grey text with `py-8` now (it was left-aligned dark text): restore the old look with `:ui="{ empty: 'text-left text-gray-900 sm:py-4' }"`.
- Override classes (`class`, `:ui` and the deprecated props) now beat the library defaults they clash with: check pages that relied on a default winning, and drop `!` markers added only to beat a default.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
