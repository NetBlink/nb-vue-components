# NB Vue Components

##  Features

- **Vue 3** with Composition API
- **TypeScript** support with full type definitions
- **TailwindCSS** for styling
- **FontAwesome** icons for consistency
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

Add this package to your Tailwind content and configure the required theme colors:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@netblink/vue-components/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        danger: {
          DEFAULT: "#ef4444",
          50: "#fef2f2",
          100: "#fee2e2",
          500: "#ef4444",
          600: "#dc2626",
        },
        warning: {
          DEFAULT: "#f59e0b",
          50: "#fffbeb",
          100: "#fef3c7",
          500: "#f59e0b",
          600: "#d97706",
        },
        success: {
          DEFAULT: "#10b981",
          50: "#ecfdf5",
          100: "#d1fae5",
          500: "#10b981",
          600: "#059669",
        },
        info: {
          DEFAULT: "#3b82f6",
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
        },
      },
    },
  },
  plugins: [],
}
```

### 2. FontAwesome Icons

Install FontAwesome for Vue:

```bash
npm install @fortawesome/vue-fontawesome @fortawesome/free-solid-svg-icons
```

### 3. Vue Application Setup

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
