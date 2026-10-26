# @netblink/vue-components migration report

Upgraded from 3.0.1 to 4.0.0-beta.0.

Steps: v3-to-v3-2, v3-to-v4

## Choices made

None.

## Manual changes needed

- **resources/js/Pages/External.vue:1**: `<template src="./External.html">` is not read by this CLI: make this upgrade's changes to its Section tags by hand.
- **resources/js/Pages/Namespace.vue:6**: `Nb.Section`, `Nb.NewModal` come from a namespace import of @netblink/vue-components, which this CLI does not follow: make this upgrade's changes to them by hand.
- **resources/js/Pages/Pug.vue:5**: `<template lang="pug">` is not read by this CLI: make this upgrade's changes to its NewModal tags by hand.
- **resources/js/Pages/Namespace.vue:7**: `Nb.NewModal` comes from a namespace import of @netblink/vue-components, which this CLI does not follow: make this upgrade's changes to it by hand.

## Check visually

- Override classes (`class`, `:ui` and the deprecated props) now beat the library defaults they clash with: check pages that relied on a default winning, and drop `!` markers added only to beat a default.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
