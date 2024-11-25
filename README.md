# VUE Components

Vue componenets library for Stack with:

-   VUE (3)
-   Inertia
-   TailwindCSS
-   Tailwind Elements
-   Laravel (with ziggy routes)

Install with for newest version:

```bash
npm install git@github.com:samhargreaves/shbc-vue-components.git#release
```

# Documentation

[docs](https://samhargreaves.github.io/shbc-vue-components/)

Available components:

-   Checkbox
-   Input
-   InputError
-   InputLabel
-   TextInput
-   Textarea
-   DropdownSearchbar
-   SearchSelect
-   FileDropZoneInput
-   Table
-   Thead
-   Th
-   Td
-   TrCollapseHandler
-   Alert
-   CollapsibleSection
-   Dropdown
-   DropdownLink
-   LinkButton
-   LinkDropdownButton
-   LinkDropdownButtonItem
-   Logs
-   LogsContent
-   Modal
-   NavLink
-   Pagination
-   PrimaryButton
-   ResponsiveNavLink
-   Section
-   SecondaryButton
-   Spinner
-   Stats

## USAGE:

For this to work you have to configure those values in tailwind (especially colors). For all values for Tailwind you can use page like [UI Colors](https://uicolors.app/create), but remember to add `DEAFULT` value.

```js
{
    theme: {
        extend: {
            colors: {
                dark: "#161b1c",
                muted: "#a0a0a0",
                white: "#ffffff",

                primary: {
                    DEFAULT: "#aad3d9",
                    50: "#f4f9fb",
                    100: "#e9f2f5",
                },
                accent: {
                    DEFAULT: "#e1b8c3",
                    50: "#fbf5f6",
                    100: "#f7ecef",
                },
                danger: {
                    DEFAULT: "#f36262",
                    50: "#fef2f2",
                    100: "#fde3e3",
                },
                warning: {
                    DEFAULT: "#f3cf62",
                    50: "#fefaec",
                    100: "#fbf0ca",
                },
                success: {
                    DEFAULT: "#87f362",
                    50: "#eefee7",
                    100: "#d9fccb",
                },
                info: {
                    DEFAULT: "#6262f3",
                    50: "#eef2ff",
                    100: "#e0e6ff",
                },
            },
            fontSize: {
                xxs: ".65rem",
                xs: ".75rem",
                sm: ".875rem",
                tiny: ".875rem",
                base: "1rem",
                lg: "1.125rem",
                xl: "1.25rem",
                "2xl": "1.5rem",
                "3xl": "1.875rem",
                "4xl": "2.25rem",
                "5xl": "3rem",
                "6xl": "4rem",
                "7xl": "5rem",
                "45px": "45px",
            },
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
                opensans: ["Open Sans", ...defaultTheme.fontFamily.sans],
            },
            fontWeight: {
                light: 300,
                normal: 400,
                semibold: 600,
                bold: 700,
            },
            screens: {
                xxs: "410px",
                xs: "490px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1084px",
                laptop: "1084px",
                "2xl": "1084px",
                "3xl": "1360px",
            },
            borderRadius: {
                none: "0",
                sm: ".125rem",
                DEFAULT: ".25rem",
                md: ".375rem",
                lg: ".5rem",
                full: "9999px",
            },
            boxShadow: {
                DEFAULT: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            },
        },
    }
```

Also you need to add this package to conent seciont and change mode to `jit`, for tailwind to dynamically add styling:

```js
{
    "mode": "jit",
    "content": [
        /*...*/
        "./node_modules/@shbc/**/*.js"
    ]
}
```

After this you can use components like every other:

```jsx
<script setup>
    import { Section, PrimaryButton, InputError } from "@shbc/vue-components";
</script>
<template>
    <Section>
        <PrimaryButton>Click me</PrimaryButton>
        <InputError>Some error</InputError>
    </Section>
</template>
```
