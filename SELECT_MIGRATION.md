# Select Component Migration Guide

**A. Input with type="select" (Slot-based)**
```vue
<Input type="select" :form="form" field="country" label="Country">
  <option value="">Select...</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
</Input>
```

**B. Select component (Array-based)**
```vue
<Select 
  :form="form" 
  field="country" 
  :options="countries" 
  label="Country" 
  placeholder="Select..." 
/>
```

**B. Rich Select component (Feature-Rich)**
```vue
<RichSelect 
  :form="form" 
  field="languages" 
  :options="languages" 
  multiple 
  searchable 
  grouping 
/>
```

## Migration 

**Before:**
```vue
<SimpleSelect :form="form" field="country" :options="countries" />
```

**After (Option 1 - Keep array approach):**
```vue
<Select :form="form" field="country" :options="countries" />
```

**After (Option 2 - Switch to slots):**
```vue
<Input type="select" :form="form" field="country">
  <option value="">Select...</option>
  <option v-for="country in countries" :key="country.value" :value="country.value">
    {{ country.label }}
  </option>
</Input>
```

### From SelectMultiple
**Before:**
```vue
<SelectMultiple :form="form" field="tags" :options="tagOptions" />
```

**After:**
```vue
<RichSelect :form="form" field="tags" :options="tagOptions" multiple />
```

### From Select2ajax
**Before:**
```vue
<Select2ajax :form="form" field="users" endpoint="/api/users" />
```

**After:**
```vue
<RichSelect 
  :form="form" 
  field="users" 
  :options="[]" 
  apiSearch 
  :apiUrl="/api/users" 
/>
```

### From SearchSelect
**Before:**
```vue
<SearchSelect :form="form" field="products" :options="products" />
```

**After:**
```vue
<RichSelect :form="form" field="products" :options="products" searchable />
```

### From DropdownSearchbar
**Before:**
```vue
<DropdownSearchbar v-model="searchValue" :options="options" />
```

**After:**
```vue
<RichSelect v-model="searchValue" :options="options" searchable clearable />
```

## Component Comparison

| Feature | Input type="select" | Select | RichSelect |
|---------|-------------------|---------|------------|
| Slot options | ✅ | ✅* | ❌ |
| Array options | ❌ | ✅ | ✅ |
| Simple styling | ✅ | ✅ | ❌ |
| Multiple selection | ❌ | ❌ | ✅ |
| Search functionality | ❌ | ❌ | ✅ |
| API search | ❌ | ❌ | ✅ |
| Option grouping | ✅ (optgroup) | ❌ | ✅ |
| Clearable | ❌ | ❌ | ✅ |
| Custom styling | Basic | Basic | Advanced |

## Legacy Component Status

| Component | Status | Migration Path |
|-----------|--------|----------------|
| SimpleSelect | ⚠️ Removed | → `Select` or `Input type="select"` |
| Select (old) | ✅ Renamed | → `RichSelect` |
| SelectMultiple | ⚠️ Deprecated | → `RichSelect` with `multiple` |
| Select2ajax | ⚠️ Deprecated | → `RichSelect` with `apiSearch` |
| SearchSelect | ⚠️ Deprecated | → `RichSelect` with `searchable` |
| DropdownSearchbar | ⚠️ Deprecated | → `RichSelect` with `searchable` |

## Props Compatibility

### Common Props (All Components)
- `form` - Form object
- `field` - Field name
- `label` - Label text
- `required` - Required field
- `disabled` - Disabled state
- `v-model` - Direct value binding

### Select-specific Props
- `options` - Array of options
- `placeholder` - Placeholder text

### RichSelect-specific Props
- `multiple` - Multiple selection
- `searchable` - Enable search
- `apiSearch` - API-based search
- `apiUrl` - API endpoint
- `grouping` - Option grouping
- `clearable` - Clearable selection
- `optionValue` - Value property name
- `optionLabel` - Label property name
