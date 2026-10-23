# @netblink/vue-components migration report

Upgraded from 3.0.1 to 3.2.1.

Steps: v3-to-v3-2

## Choices made

- NewModal honours max-width now (it was fixed at 600px): **adopt**, Use the max-width you set (1 site, choice id `newmodal-maxwidth`)
- Modal is deprecated in favour of NewModal: **adopt**, Rename Modal to NewModal (same props) (5 sites, choice id `modal-to-newmodal`)

## Manual changes needed

- **resources/js/Pages/Confirm.vue:8**: Modal left as is (a dynamic `align-center`): rename it to NewModal by hand, `modal-custom-class` becomes `class`, add `align-top` unless it was centred.
- **resources/js/Pages/Confirm.vue:9**: Modal left as is because another Modal in this file needs a manual change: rename them together.

## Check visually

- **resources/js/Pages/Users.vue:12**: NewModal uses max-width `md` now (was 600px).

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
