# @netblink/vue-components migration report

Upgraded from 2.0.20 to 2.0.49.

Steps: v2-patch

## Choices made

- Alert no longer shows a close button by default: **adopt**, Use the new default (no close button) (2 sites, choice id `alert-dismissible`)
- Table sticky header is now off by default: **adopt**, Use the new default (not sticky) (1 site, choice id `table-sticky`)

## Manual changes needed

- **resources/js/Pages/Users.vue:8**: Alert `message` prop removed: put the text in the default slot.

## Check visually

None.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
