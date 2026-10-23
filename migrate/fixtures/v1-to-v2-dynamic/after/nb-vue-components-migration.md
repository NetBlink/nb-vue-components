# @netblink/vue-components migration report

Upgraded from 1.0.28 to 2.0.1.

Steps: v1-to-v2

## Choices made

None.

## Manual changes needed

- **resources/js/Pages/Nav.vue:10**: Dropdown `:align="wide ? 'left' : 'right'"` is dynamic: its values must be start, center or end now (left was start, right was end).
- **resources/js/Pages/Nav.vue:13**: NavCollapse with a `v-bind` spread: rename `show` to `open` in the bound object.

## Check visually

- **resources/js/Pages/Nav.vue:10**: Dropdown moved from tw-elements to reka-ui: check how it opens, closes and is positioned.
- **resources/js/Pages/Nav.vue:13**: NavCollapse moved from tw-elements to reka-ui: check how it opens, closes and is positioned.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
