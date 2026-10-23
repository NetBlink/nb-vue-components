# @netblink/vue-components migration report

Upgraded from 3.0.1 to 3.2.1.

Steps: v3-to-v3-2

## Choices made

- NewModal honours max-width now (it was fixed at 600px): **keep**, Keep the 600px width (removes max-width) (1 site, choice id `newmodal-maxwidth`)
- Modal is deprecated in favour of NewModal: **keep**, Keep Modal (2 sites, choice id `modal-to-newmodal`)

## Manual changes needed

None.

## Check visually

None.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
