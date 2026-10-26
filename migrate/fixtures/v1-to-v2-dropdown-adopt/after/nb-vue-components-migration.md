# @netblink/vue-components migration report

Upgraded from 1.0.28 to 2.0.1.

Steps: v1-to-v2

## Choices made

- Dropdown default alignment changed from right to start: **adopt**, Use the new default (align="start") (1 site, choice id `dropdown-align`)

## Manual changes needed

- **resources/js/Pages/Menu.vue:11**: Dropdown `width` was removed (was `48`): style the dropdown content with a class instead.
- **resources/js/Pages/Menu.vue:17**: DropdownLink needs an `href` now and must sit inside a Dropdown.
- **resources/js/Pages/Rows.vue:8**: TrCollapseHandler still uses tw-elements: keep `tw-elements` installed and initialised (TrCollapse, TrCollapseHandler, TdCollapseHandler and SelectMultiple need it).

## Check visually

- **resources/js/Pages/Menu.vue:11**: Dropdown moved from tw-elements to reka-ui: check how it opens, closes and is positioned.
- **resources/js/Pages/Menu.vue:20**: Dropdown moved from tw-elements to reka-ui: check how it opens, closes and is positioned.
- **resources/js/Pages/Menu.vue:25**: NavCollapse moved from tw-elements to reka-ui: check how it opens, closes and is positioned.
- **resources/js/Pages/Menu.vue:28**: NavCollapse moved from tw-elements to reka-ui: check how it opens, closes and is positioned.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
