# @netblink/vue-components migration report

Upgraded from 3.0.1 to 3.2.1.

Steps: v3-to-v3-2

## Choices made

- Modal is deprecated in favour of NewModal: **adopt**, Rename Modal to NewModal (same props) (2 sites, choice id `modal-to-newmodal`)

## Manual changes needed

- **resources/js/Pages/Dynamic.vue:10**: Modal left as is in this file: `Modal` is used as a value on this line (`:is`, `h()` or another script reference), which renaming its import would break. Switch to NewModal by hand: `modal-custom-class` becomes `class`, add `align-top` unless it was centred.
- **resources/js/Pages/Raw.vue:6**: Modal left as is in this file: `Modal` is used as a value on this line (`:is`, `h()` or another script reference), which renaming its import would break. Switch to NewModal by hand: `modal-custom-class` becomes `class`, add `align-top` unless it was centred.

## Check visually

None.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
