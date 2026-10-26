# @netblink/vue-components migration report

Upgraded from 3.0.1 to 3.2.1.

Steps: v3-to-v3-2

## Choices made

- NewModal honours max-width now (it was fixed at 600px): **keep**, Keep the 600px width (removes max-width) (1 site, choice id `newmodal-maxwidth`)

## Manual changes needed

- **resources/js/app.js:6**: Could not parse this file (Unexpected token, expected "," (6:0)), so it was left as is: add `import '@netblink/vue-components/style.css';`.
- **resources/js/Pages/Broken.vue:3**: Could not parse this file (Unexpected token (3:17)), so it was left as is: make this upgrade's changes to it by hand.

## Check visually

None.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
