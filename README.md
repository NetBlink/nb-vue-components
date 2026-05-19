# NB Vue Components

##  Features

- **Vue 3** with Composition API
- **TypeScript** support with full type definitions
- **TailwindCSS** for styling
- **Provider-neutral icons** - works with FontAwesome, Heroicons, Lucide, MDI, or hand-rolled SVGs via the icon-provider system
- **Inertia.js** integration
- **Accessible** components following WCAG guidelines
- **Tree-shakable** ES modules
- **Comprehensive documentation** with live examples

## Installation

Install the latest stable version:

```bash
npm install @netblink/vue-components
```



##  Documentation

**[📖 Full Documentation & Live Examples](https://netblink.github.io/nb-vue-components/)**

Explore all components with interactive examples, props documentation, and usage guides.

##  Component Categories

### Form Controls
- **Input** - Text input with label, validation, and tooltip support
- **Textarea** - Multi-line text input
- **Select** - Dropdown selection
- **RichSelect** - Enhanced select with search and multi-select
- **Checkbox** - Boolean input with custom styling
- **RadioButton** - Single selection from multiple options
- **Switch** - Toggle control
- **FileDropZoneInput** - Drag & drop file upload
- **SearchSelect** - Searchable dropdown
- **SelectMultiple** - Multiple selection dropdown
- **DropdownSearchbar** - Search input with dropdown results

### Buttons
- **Button** - Base button component with theme support
- **PrimaryButton** - Primary call-to-action button
- **SecondaryButton** - Secondary action button
- **DangerButton** - Destructive action button
- **WarningButton** - Warning action button
- **InfoButton** - Information button
- **SuccessButton** - Success action button
- **LinkButton** - Button styled as a link with theme support
- **LinkDropdownButton** - Link button with dropdown
- **SubmitButton** - Form submission button

### Tables
- **Table** - Responsive table with sorting and pagination
- **Thead** / **Tbody** - Table header and body
- **Th** / **Td** - Table header and data cells
- **TableCollapse** - Expandable table rows
- **TableItemCard** - Card view for table items

### Navigation
- **NavLink** - Navigation link component
- **ResponsiveNavLink** - Mobile-responsive navigation
- **NavCollapse** - Collapsible navigation sections
- **Dropdown** - Dropdown menu container
- **DropdownLink** - Individual dropdown items
- **DropdownSeparator** - Visual separator for dropdowns

### Layout & UI
- **Section** - Content section with variant support
- **Modal** / **NewModal** - Dialog overlays
- **Alert** - Notification messages with animations
- **Collapse** - Expandable content areas
- **Tooltip** - Contextual information overlays
- **Spinner** - Loading indicators with size variants
- **Stats** - Statistical display component
- **Pagination** - Page navigation
- **DescriptionList** - Key-value pair displays
- **DottedCarousel** - Image carousel with navigation
- **GravatarImg** - Gravatar image display

### Utility Components
- **InputWrapper** - Standardized input container with label/error handling
- **InputLabel** / **InputError** - Form field labels and error messages
- **UnderConstruction** - Work-in-progress placeholder
- **PropsTable** - Documentation prop tables
- **CodePreview** - Code example display

##  Setup & Configuration

### 1. TailwindCSS Configuration

Add this package to your Tailwind content and merge the theme tokens it expects. The values below are the package defaults; if you want a different look, change any anchor (shade 500) and regenerate the scale via the **Theme builder** in the docs site (it prints the full snippet ready to paste).

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@netblink/vue-components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark:  '#161b1c',
        muted: '#a0a0a0',
        primary: {
          DEFAULT: '#aad3d9',
          50: '#f4f9fb', 100: '#e9f2f5', 200: '#cee5e9', 300: '#aad3d9',
          400: '#72b6be', 500: '#509da7', 600: '#3d808c', 700: '#326772',
          800: '#2d585f', 900: '#294a51', 950: '#1b3036',
        },
        accent: {
          DEFAULT: '#e1b8c3',
          50: '#fbf5f6', 100: '#f7ecef', 200: '#f0dbe1', 300: '#e1b8c3',
          400: '#d399a9', 500: '#c0738b', 600: '#a95574', 700: '#8c445f',
          800: '#763b54', 900: '#66354b', 950: '#381926',
        },
        danger: {
          DEFAULT: '#f36262',
          50: '#fef2f2', 100: '#fde3e3', 200: '#fdcbcb', 300: '#faa7a7',
          400: '#f36262', 500: '#ea4949', 600: '#d72b2b', 700: '#b52020',
          800: '#961e1e', 900: '#7c2020', 950: '#430c0c',
        },
        warning: {
          DEFAULT: '#f3cf62',
          50: '#fefaec', 100: '#fbf0ca', 200: '#f7e190', 300: '#f3cf62',
          400: '#efb730', 500: '#e89818', 600: '#cd7312', 700: '#aa5213',
          800: '#8b4015', 900: '#723615', 950: '#411a07',
        },
        success: {
          DEFAULT: '#87f362',
          50: '#eefee7', 100: '#d9fccb', 200: '#b5fa9c', 300: '#87f362',
          400: '#5fe734', 500: '#3ecd15', 600: '#2ba40c', 700: '#237d0e',
          800: '#206311', 900: '#1e5314', 950: '#0a2e05',
        },
        info: {
          DEFAULT: '#6262f3',
          50: '#eef2ff', 100: '#e0e6ff', 200: '#c6d1ff', 300: '#a4b1fd',
          400: '#7f88fa', 500: '#6262f3', 600: '#5044e7', 700: '#4436cc',
          800: '#392ea5', 900: '#322d82', 950: '#1e1a4c',
        },
      },
      fontFamily: {
        sans:     ['Poppins', 'system-ui', 'sans-serif'],
        opensans: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
      },
      boxShadow: {
        DEFAULT: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
```

**Customising the look:** open the docs site and click the **Theme** button (bottom-right of every page). Edit any value in the modal, watch the docs update live, then copy the full `tailwind.config.js` snippet into your project. Full token reference is on the **Theme &amp; Tokens** docs page.

### 2. Vue Application Setup

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'

// Import TailwindCSS
import './style.css'

const app = createApp(App)

// Mount your app
app.mount('#app')
```

### 3. Icon Provider (optional)

The components draw their own affordances (chevrons, close buttons, etc.) using inline SVGs by default - no setup required. To replace them with icons from a specific provider, install the `createNbIcons` plugin:

```ts
// main.ts
import { createNbIcons } from '@netblink/vue-components/icons';

// Drop-in v2 parity - keeps FontAwesome visuals everywhere:
import { faAliasPreset, faSet } from '@netblink/vue-components/icons/fa';
app.use(createNbIcons({
    aliases: faAliasPreset,
    sets: { fa: faSet },
    defaultSet: 'fa',
}));

// Or pick your own provider (Heroicons example):
import { ChevronDownIcon, XMarkIcon } from '@heroicons/vue/24/outline';
app.use(createNbIcons({
    aliases: { $expand: ChevronDownIcon, $close: XMarkIcon },
}));
```

Components with a user-facing icon prop (`DataTile`, `LogsContent`) accept an `IconLike` value - a built-in alias (`'$expand'`), a set-prefixed string (`'fa:home'`), any Vue component, a raw SVG (`{ svg: '<svg>…</svg>' }`), or a FontAwesome icon object. Every such component also exposes a `#icon` slot for full template-side control.

Upgrading from v2.x? Run the codemod, which injects the FA preset and rewrites the few deprecated forms:

```bash
npx @netblink/vue-components-migrate
```

##  Usage Examples

### Basic Form

```vue
<script setup>
import { 
  Section, 
  Input, 
  Button, 
  Alert 
} from '@netblink/vue-components'
import { ref } from 'vue'

const form = ref({
  name: '',
  email: ''
})
const showSuccess = ref(false)

const submit = () => {
  // Handle form submission
  showSuccess.value = true
}
</script>

<template>
  <Section>
    <Alert 
      v-if="showSuccess"
      type="success" 
      title="Success!"
      message="Form submitted successfully"
      :dismissible="true"
    />
    
    <form @submit.prevent="submit" class="space-y-4">
      <Input
        v-model="form.name"
        label="Full Name"
        placeholder="Enter your name"
        required
      />
      
      <Input
        v-model="form.email"
        type="email"
        label="Email Address"
        placeholder="Enter your email"
        tooltip="We'll never share your email"
        required
      />
      
      <Button type="submit" theme="primary">
        Submit Form
      </Button>
    </form>
  </Section>
</template>
```

### Data Table

```vue
<script setup>
import { 
  Table, 
  Thead, 
  Tbody, 
  Th, 
  Td 
} from '@netblink/vue-components'

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
]
</script>

<template>
  <Table>
    <Thead>
      <Th>Name</Th>
      <Th>Email</Th>
      <Th>Role</Th>
    </Thead>
    <Tbody>
      <tr v-for="user in users" :key="user.id">
        <Td>{{ user.name }}</Td>
        <Td>{{ user.email }}</Td>
        <Td>{{ user.role }}</Td>
      </tr>
    </Tbody>
  </Table>
</template>
```

### Navigation with Dropdown

```vue
<script setup>
import { 
  NavLink, 
  Dropdown, 
  DropdownLink 
} from '@netblink/vue-components'
</script>

<template>
  <nav class="flex items-center space-x-4">
    <NavLink href="/dashboard">Dashboard</NavLink>
    <NavLink href="/projects">Projects</NavLink>
    
    <Dropdown align="end">
      <template #trigger>
        <button class="flex items-center text-gray-700 hover:text-gray-900">
          Account
        </button>
      </template>
      
      <template #content>
        <DropdownLink href="/profile">Profile</DropdownLink>
        <DropdownLink href="/settings">Settings</DropdownLink>
        <DropdownLink href="/logout" method="post">Logout</DropdownLink>
      </template>
    </Dropdown>
  </nav>
</template>
```

##  Development

```bash
# Clone the repository
git clone https://github.com/NetBlink/nb-vue-components.git
cd nb-vue-components

# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build documentation
npm run docs:build

# Build library
npm run build

# Type checking
npm run build:types
```


Made with ❤️ by [NetBlink](https://github.com/NetBlink)
