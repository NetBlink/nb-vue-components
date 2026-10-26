# @netblink/vue-components migration report

Upgraded from 3.2.1 to 4.0.0-beta.0.

Steps: v3-to-v4

## Choices made

None.

## Manual changes needed

- **resources/js/Pages/Links.vue:9**: LinkButton `colourClasses` was left as is (it works until 5.0). Replaced the theme and base classes entirely in 3.x and still does while deprecated. A `class` or `ui.root` merges instead, so the faithful rewrite is `theme="no-style"` plus `:class="[...]"` (the array value can be joined into one string).
- **resources/js/Pages/Links.vue:10**: LinkButton `colourClasses` was left as is (it works until 5.0). Replaced the theme and base classes entirely in 3.x and still does while deprecated. A `class` or `ui.root` merges instead, so the faithful rewrite is `theme="no-style"` plus `:class="[...]"` (the array value can be joined into one string).
- **resources/js/Pages/Links.vue:11**: Input `checkboxCustomClass` was left as is. Never had an effect in 3.x (Input did not pass it on). Remove it; to style the checkbox use `:ui="{ input: '...' }"` with `type="checkbox"`.

## Check visually

- Override classes (`class`, `:ui` and the deprecated props) now beat the library defaults they clash with: check pages that relied on a default winning, and drop `!` markers added only to beat a default.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
