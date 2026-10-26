# @netblink/vue-components migration report

Upgraded from 3.0.1 to 3.2.1.

Steps: v3-to-v3-2

## Choices made

None.

## Manual changes needed

- **resources/js/Pages/External.vue:1**: `<template src="./External.html">` is not read by this CLI: make this upgrade's changes to its Section tags by hand.
- **resources/js/Pages/Namespace.vue:6**: `Nb.Section`, `Nb.NewModal` come from a namespace import of @netblink/vue-components, which this CLI does not follow: make this upgrade's changes to them by hand.
- **resources/js/Pages/Pug.vue:5**: `<template lang="pug">` is not read by this CLI: make this upgrade's changes to its NewModal tags by hand.

## Check visually

None.

## Next steps

1. Run `npm install`.
2. Build the app and go through the items above.
