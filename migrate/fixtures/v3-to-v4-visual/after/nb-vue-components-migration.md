# @netblink/vue-components migration report

Upgraded from 3.2.1 to 4.0.0-beta.0.

Steps: v3-to-v4

## Choices made

None.

## Manual changes needed

None.

## Check visually

- **resources/js/Pages/Overview.vue:10**: DropdownLink with a `class`: `class` and attrs now land only on the link. 3.x also put them on the menu item wrapper.
- **resources/js/Pages/Overview.vue:13**: Collapse with a `class`: `class` now lands only on the collapsible wrapper and other attrs only on the trigger button. 3.x put both on both; use `:ui="{ trigger: '...' }"` to style the button.
- **resources/js/Pages/Overview.vue:14**: Tooltip with a `class`: `class` and other attrs (`id`, `data-*`, listeners) now land on the tooltip bubble. 3.x dropped them.
- **resources/js/Pages/Overview.vue:16**: Tbody empty row is centred grey text with `py-8` now (it was left-aligned dark text): restore the old look with `:ui="{ empty: 'text-left text-gray-900 sm:py-4' }"`.
- **resources/js/Pages/Overview.vue:18**: EnhancedTable empty row is centred grey text with `py-8` now (it was left-aligned dark text): restore the old look with the plugin option `ui: { Tbody: { empty: 'text-left text-gray-900 sm:py-4' } }` (app-wide, EnhancedTable has no `empty` part).
- **resources/js/Pages/Overview.vue:19**: LogsContent empty line is `text-sm` now (it was the base size): restore it with `:ui="{ empty: 'text-base' }"`.
- Override classes (`class`, `:ui` and the deprecated props) now beat the library defaults they clash with: check pages that relied on a default winning, and drop `!` markers added only to beat a default.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
