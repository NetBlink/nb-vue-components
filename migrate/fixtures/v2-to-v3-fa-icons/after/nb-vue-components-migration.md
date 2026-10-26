# @netblink/vue-components migration report

Upgraded from 2.0.48 to 3.0.1.

Steps: v2-patch, v2-to-v3

## Choices made

- Icons now come from an icon preset: **keep**, Keep FontAwesome icons (adds the FA preset) (3 sites, choice id `icons`)

## Manual changes needed

- **resources/js/Pages/Unsure.vue:8**: `FontAwesomeIcon` is neither imported from @fortawesome/vue-fontawesome here nor registered in the entry: if it is FontAwesome's, replace it with `<NbIcon name="$whatsapp" />`.

## Check visually

None.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
