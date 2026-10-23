# @netblink/vue-components migration report

Upgraded from 2.0.48 to 3.0.1.

Steps: v2-patch, v2-to-v3

## Choices made

- Icons now come from an icon preset: **keep**, Keep FontAwesome icons (adds the FA preset) (1 site, choice id `icons`)

## Manual changes needed

- **src/main.ts:1**: Call `setInertiaRouter(router);` (from @inertiajs/vue3 `router`) after creating the app.
- **src/main.ts:1**: Call `setInertiaPage(usePage());` (from @inertiajs/vue3 `usePage`) after `setInertiaRouter(router);`.

## Check visually

None.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
