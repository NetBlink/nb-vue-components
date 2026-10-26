# @netblink/vue-components migration report

Upgraded from 3.0.1 to 4.0.0-beta.0.

Steps: v3-to-v3-2, v3-to-v4

## Choices made

- NewModal honours max-width now (it was fixed at 600px): **keep**, Keep the 600px width (removes max-width) (1 site, choice id `newmodal-maxwidth`)

## Manual changes needed

None.

## Check visually

- Override classes (`class`, `:ui` and the deprecated props) now beat the library defaults they clash with: check pages that relied on a default winning, and drop `!` markers added only to beat a default.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
