# @netblink/vue-components migration report

Upgraded from 1.0.28 to 4.0.0-beta.0.

Steps: v1-to-v2, v2-patch, v2-to-v3, v3-to-v3-2, v3-to-v4

## Choices made

- Alert no longer shows a close button by default: **keep**, Keep the close button (adds dismissible) (1 site, choice id `alert-dismissible`)
- Table sticky header is now off by default: **keep**, Add sticky to every Table: restores sticky, not the exact old look (3.2 reworks sticky) (1 site, choice id `table-sticky`)
- Icons now come from an icon preset: **keep**, Keep FontAwesome icons (adds the FA preset) (1 site, choice id `icons`)
- NewModal honours max-width now (it was fixed at 600px): **keep**, Keep the 600px width (removes max-width) (1 site, choice id `newmodal-maxwidth`)
- Modal is deprecated in favour of NewModal: **keep**, Keep Modal (1 site, choice id `modal-to-newmodal`)

## Manual changes needed

None.

## Check visually

- **resources/js/Pages/Orders.vue:12**: Dropdown moved from tw-elements to reka-ui: check how it opens, closes and is positioned.
- **resources/js/Pages/Orders.vue:15**: NavCollapse moved from tw-elements to reka-ui: check how it opens, closes and is positioned.
- **resources/js/Pages/Orders.vue:17**: Table sticky was reworked: check the sticky header.
- Override classes (`class`, `:ui` and the deprecated props) now beat the library defaults they clash with: check pages that relied on a default winning, and drop `!` markers added only to beat a default.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
