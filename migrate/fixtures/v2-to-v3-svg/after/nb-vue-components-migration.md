# @netblink/vue-components migration report

Upgraded from 2.0.48 to 3.0.1.

Steps: v2-patch, v2-to-v3

## Choices made

- Icons now come from an icon preset: **adopt**, Use the built-in SVG icons (4 sites, choice id `icons`)

## Manual changes needed

- **resources/js/Pages/Contact.vue:8**: Input `whatsApp` shows the `$whatsapp` icon, which the built-in SVG set does not map: register one with `createNbIcons({ aliases: { $whatsapp: YourIcon } })`.
- **resources/js/Pages/Contact.vue:9**: Textarea `whatsApp` shows the `$whatsapp` icon, which the built-in SVG set does not map: register one with `createNbIcons({ aliases: { $whatsapp: YourIcon } })`.

## Check visually

None.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
