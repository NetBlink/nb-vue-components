# @netblink/vue-components migration report

Upgraded from 3.0.1 to 3.2.1.

Steps: v3-to-v3-2

## Choices made

None.

## Manual changes needed

- **resources/css/app.css:8**: `@keyframes fadeIn` differs from the one in theme.css and overrides it: rename yours or remove it.

## Check visually

- **resources/js/Pages/Dashboard.vue:6**: Section padding is now px-6 py-4 (was p-6).
- **resources/js/Pages/Dashboard.vue:7**: Table sticky was reworked: check the sticky header.
- **resources/js/Pages/Dashboard.vue:9**: Pagination marks the active page with primary-50 now.
- **resources/js/Pages/Dashboard.vue:10**: LinkDropdownButton uses primary-600 now.
- **resources/js/Pages/Dashboard.vue:11**: PrimaryButton has a new disabled style.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
