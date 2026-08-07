<script setup lang="ts">
import { ref, computed } from 'vue';
import {
    Table,
    Thead,
    Tbody,
    Th,
    Td,
    PrimaryButton,
    DangerButton,
    CodePreview,
    CollapsableSection,
    PropsTable,
    EnhancedTable,
    TableItemCard,
    TrCollapse,
    TrCollapseHandler,
    TdCollapseHandler,
    TrPlaceholder,
    Pagination,
} from '../index';
import { useTableSort } from '../composables/useTable';
import { mockUsers, mockOrders, type User, type Order } from '../mockData';

// Pagination sits with tables because that is what it is nearly always paired with.
const currentPage = ref(1);
// Mock pagination data
const createPaginationLinks = (current: number, total: number) => {
    const links = [];

    // Previous link
    links.push({
        url: current > 1 ? `?page=${current - 1}` : null,
        label: 'Previous',
        active: false,
    });

    // Page number links
    for (let i = 1; i <= total; i++) {
        links.push({
            url: `?page=${i}`,
            label: i.toString(),
            active: i === current,
        });
    }

    // Next link
    links.push({
        url: current < total ? `?page=${current + 1}` : null,
        label: 'Next',
        active: false,
    });

    return links;
};

const paginationLinks = computed(() => createPaginationLinks(currentPage.value, 15));

const handlePageChange = (url: string) => {
    const urlObj = new URL(url, window.location.origin);
    const page = parseInt(urlObj.searchParams.get('page') || '1');
    currentPage.value = page;
};

const paginationExamples = [
    '<!-- Inertia-style pagination using Laravel\'s links payload -->',
    '<Pagination :links="paginationLinks" />',
    '',
    '<!-- Disable navigation, emit a `change` event instead (use this when you handle URLs yourself) -->',
    '<Pagination :links="paginationLinks" :linkReturn="true" @change="handlePageChange" />',
    '',
    '<!-- Show a per-page selector alongside the page links -->',
    '<Pagination :links="paginationLinks" :showPerPage="true" :defaultPerPage="25" />',
];

const paginationProps = [
    { prop: 'links', type: 'PaginationLink[]', default: '-', description: 'Laravel-style links array: `{ url, label, active }[]`', required: true },
    { prop: 'linkReturn', type: 'boolean', default: 'false', description: 'When true, render <button> elements and emit `change(url)` instead of using Inertia Link', highlight: true },
    { prop: 'maxPagesToShow', type: 'number', default: '20', description: 'Maximum visible page links (first/last always shown)' },
    { prop: 'logs', type: 'boolean', default: 'false', description: 'Convenience flag for paginating server-side logs - sets preserveScroll/preserveState and only=[\'logs\']' },
    { prop: 'preserveScroll', type: 'boolean', default: 'false', description: 'Forwarded to Inertia Link' },
    { prop: 'preserveState', type: 'boolean', default: 'false', description: 'Forwarded to Inertia Link' },
    { prop: 'only', type: 'string[]', default: '[]', description: 'Forwarded to Inertia Link (partial reload property names)' },
    { prop: 'showPerPage', type: 'boolean', default: 'false', description: 'Render a per-page selector with options [10, 25, 50, 100, 250]' },
    { prop: 'defaultPerPage', type: 'number', default: '100', description: 'Initial value for the per-page selector' },
    { prop: 'customLinkClass', type: 'string', default: "''", description: 'Extra classes on each link' },
    { prop: 'customActiveLinkClass', type: 'string', default: "''", description: 'Extra classes on the active link' },
    { prop: 'customListClass', type: 'string', default: "''", description: 'Extra classes on the <ul>' },
];

const paginationEvents = [
    { prop: '@change', type: 'event(url: string)', default: '-', description: 'Fires when a page link is clicked (only when linkReturn is true)' },
];
import DocDemoCard from './HelperComponents/DocDemoCard.vue';

// Table sorting composable example
const { sortState } = useTableSort();

// Sample data for examples
const users = ref(mockUsers);
const orders = ref(mockOrders);

// Status badge styling
const getStatusBadge = (status: string) => {
    const badges = {
        active: 'bg-green-100 text-green-800',
        inactive: 'bg-red-100 text-red-800',
        pending: 'bg-yellow-100 text-yellow-800',
        completed: 'bg-green-100 text-green-800',
        processing: 'bg-blue-100 text-blue-800',
        cancelled: 'bg-red-100 text-red-800'
    };
    return badges[status as keyof typeof badges] || 'bg-gray-100 dark:bg-gray-900/60 text-gray-800 dark:text-gray-200';
};

// Event handlers for demo
const handleRowClick = (row: any, index: number) => {
    console.log('Row clicked:', row, index);
};

const handleSelectionChange = (selected: any[]) => {
    console.log('Selection changed:', selected);
};

const handleSort = (column: string, direction: 'asc' | 'desc') => {
    console.log('Sort changed:', column, direction);
};

const editUser = (user: any) => {
    console.log('Edit user:', user);
};

const deleteUser = (user: any) => {
    console.log('Delete user:', user);
};

// Format date helper
const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
};

// Format currency helper
const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    }).format(amount);
};

// Code examples
const basicTableExample = [
    'import { Table, Thead, Tbody, Th, Td } from "@netblink/vue-components";',
    '',
    '<Table>',
    '  <Thead>',
    '    <tr>',
    '      <Th>Name</Th>',
    '      <Th>Email</Th>',
    '      <Th>Status</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody>',
    '    <tr v-for="user in users" :key="user.id">',
    '      <Td>{{ user.name }}</Td>',
    '      <Td>{{ user.email }}</Td>',
    '      <Td>{{ user.status }}</Td>',
    '    </tr>',
    '  </Tbody>',
    '</Table>'
];

const sortableTableExample = [
    '<Table>',
    '  <Thead>',
    '    <tr>',
    '      <Th sortable orderBy="name">Name</Th>',
    '      <Th sortable orderBy="email">Email</Th>',
    '      <Th sortable orderBy="created_at">Created</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody>',
    '    <tr v-for="user in users" :key="user.id">',
    '      <Td>{{ user.name }}</Td>',
    '      <Td>{{ user.email }}</Td>',
    '      <Td>{{ formatDate(user.created_at) }}</Td>',
    '    </tr>',
    '  </Tbody>',
    '</Table>'
];

const responsiveTableExample = [
    '<Table responsive>',
    '  <Thead>',
    '    <tr>',
    '      <Th>Name</Th>',
    '      <Th>Email</Th>',
    '      <Th>Status</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody>',
    '    <tr v-for="user in users" :key="user.id">',
    '      <Td label="Name">{{ user.name }}</Td>',
    '      <Td label="Email">{{ user.email }}</Td>',
    '      <Td label="Status">{{ user.status }}</Td>',
    '    </tr>',
    '  </Tbody>',
    '</Table>'
];

const enhancedTableExample = [
    'import { Table, Thead, Tbody, Th, Td, PrimaryButton, DangerButton } from "@netblink/vue-components";',
    '',
    '<!-- Enhanced table with features -->',
    '<Table striped hover>',
    '  <Thead>',
    '    <tr>',
    '      <Th>Name</Th>',
    '      <Th>Email</Th>',
    '      <Th>Status</Th>',
    '      <Th>Actions</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody>',
    '    <tr v-for="user in users" :key="user.id">',
    '      <Td>{{ user.name }}</Td>',
    '      <Td>{{ user.email }}</Td>',
    '      <Td>',
    '        <span :class="getStatusBadge(user.status)">',
    '          {{ user.status }}',
    '        </span>',
    '      </Td>',
    '      <Td>',
    '        <PrimaryButton @click="editUser(user)">Edit</PrimaryButton>',
    '        <DangerButton @click="deleteUser(user)">Delete</DangerButton>',
    '      </Td>',
    '    </tr>',
    '  </Tbody>',
    '</Table>'
];

const tableVariantsExample = [
    '<!-- Default table -->',
    '<Table variant="default">',
    '  <!-- content -->',
    '</Table>',
    '',
    '<!-- Minimal table -->',
    '<Table variant="minimal">',
    '  <!-- content -->',
    '</Table>',
    '',
    '<!-- Elevated table -->',
    '<Table variant="elevated" bordered>',
    '  <!-- content -->',
    '</Table>',
    '',
    '<!-- Striped table -->',
    '<Table striped hover>',
    '  <!-- content -->',
    '</Table>'
];

const stickyTableExample = [
    '<!-- `sticky` turns the Table into its own bounded scroll container and pins',
    '     the header cells with native position: sticky. No outer wrapper needed. -->',
    '<Table sticky stickyMaxHeight="24rem">',
    '  <Thead>',
    '    <tr>',
    '      <Th>Name</Th>',
    '      <Th>Email</Th>',
    '      <Th>Status</Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody>',
    '    <!-- Long content that scrolls -->',
    '  </Tbody>',
    '</Table>'
];

const composableExample = [
    'import { useTable, useTableSort } from "@netblink/vue-components";',
    '',
    'const { sort, getSortDirection, isSorted } = useTableSort();',
    '',
    'const {',
    '  rows,',
    '  pagination,',
    '  selected,',
    '  isLoading',
    '} = useTable({',
    '  resource: "users",',
    '  sortable: true,',
    '  selectable: true',
    '});'
];

// Props documentation - verified against src/components/Tables/types.ts and Table.vue/Th.vue/Td.vue
const tableProps = [
    // Appearance
    { prop: 'variant', type: "'default' | 'minimal' | 'elevated'", default: "'default'", description: 'Visual style preset' },
    { prop: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Cell text size' },
    { prop: 'striped', type: 'boolean', default: 'false', description: 'Alternate row colors' },
    { prop: 'bordered', type: 'boolean', default: 'false', description: 'Outer border + rounded corners' },
    { prop: 'hover', type: 'boolean', default: 'false', description: 'Row hover background' },
    { prop: 'sticky', type: 'boolean', default: 'false', description: 'Pin the header while scrolling. Makes the table its own vertical scroll container and pins the header cells with native position: sticky.' },
    { prop: 'stickyMaxHeight', type: 'string', default: "'28rem'", description: 'Height of the scroll area when `sticky` is on. Any CSS length.' },
    { prop: 'responsive', type: 'boolean', default: 'true', description: 'Stack cells into a label/value layout on small screens (works with Td `label`)' },
    { prop: 'separate', type: 'boolean', default: 'false', description: 'Render rows with vertical spacing (border-separate)' },
    // Data / pagination
    { prop: 'data', type: 'TableRow[]', default: '-', description: 'Optional - typically you compose rows via the Thead/Tbody slots instead' },
    { prop: 'columns', type: 'TableColumn[]', default: '-', description: 'Optional - only relevant for auto-generated headers' },
    { prop: 'pagination', type: 'TablePagination', default: '-', description: 'Laravel-style paginator payload; renders <Pagination> below the table' },
    { prop: 'showPagination', type: 'boolean', default: 'true', description: 'Show the pagination footer when `pagination` is set' },
    { prop: 'showPerPage', type: 'boolean', default: 'false', description: 'Show the per-page selector in the pagination footer' },
    { prop: 'defaultPerPage', type: 'number', default: '25', description: 'Initial per-page value' },
    { prop: 'loading', type: 'boolean', default: 'false', description: 'Render a loading state in Tbody' },
    { prop: 'emptyMessage', type: 'string', default: "'No records found'", description: 'Message shown when there are no rows' },
    { prop: 'loadingMessage', type: 'string', default: "'Loading...'", description: 'Message shown while loading' },
    // Collapsible
    { prop: 'collapsible', type: 'boolean', default: 'false', description: 'Render the table inside a collapsable section (uses collapseId for the trigger)' },
    { prop: 'collapseId', type: 'string', default: '-', description: 'DOM id used to wire the table to its external trigger' },
    // Legacy (accepted for backward compatibility)
    { prop: 'seperate / collapsable / collapse_id / links / overflow', type: '-', default: '-', description: 'Legacy aliases of the props above - kept for back-compat. Prefer the modern names.' },
];

const thProps = [
    { prop: 'orderBy', type: 'string', default: '-', description: 'Column key emitted to the sort store when this header is clicked' },
    { prop: 'column', type: 'string', default: '-', description: 'Alias for `orderBy` (used by useTableSort to identify the column)' },
    { prop: 'sortable', type: 'boolean', default: 'false', description: 'Render sort arrows and make the cell clickable (requires orderBy/column)' },
    { prop: 'align', type: "'left' | 'center' | 'right'", default: "'left'", description: 'Text alignment' },
    { prop: 'width', type: 'string', default: '-', description: 'Column width (Tailwind w-* token or any CSS value like "10rem")' },
    { prop: 'responsive', type: 'boolean', default: 'true', description: 'Mark this header as participating in responsive layout' },
];

const tdProps = [
    { prop: 'label', type: 'string', default: '-', description: 'On small screens the cell renders as "label: content" - useful for responsive tables' },
    { prop: 'align', type: "'left' | 'center' | 'right'", default: "'left'", description: 'Text alignment' },
    { prop: 'width', type: 'string', default: '-', description: 'Cell width (CSS value)' },
    { prop: 'nowrap', type: 'boolean', default: 'false', description: 'Prevent text wrapping in this cell' },
    { prop: 'responsive', type: 'boolean', default: 'true', description: 'Participate in responsive layout (paired with the parent Table)' },
];

const trProps = [
    { prop: 'selectable', type: 'boolean', default: 'false', description: 'Render a checkbox in the first cell to enable row selection' },
    { prop: 'selected', type: 'boolean', default: 'false', description: 'Whether the checkbox is checked' },
    { prop: 'hoverable', type: 'boolean', default: 'false', description: 'Apply hover styling on this row' },
    { prop: 'clickable', type: 'boolean', default: 'false', description: 'Cursor pointer + click-through styling' },
    { prop: 'variant', type: "'default' | 'success' | 'warning' | 'danger' | 'info'", default: "'default'", description: 'Row tinting variant' },
];

// ---- EnhancedTable ----

const enhancedTableComponentExample = [
    'import { EnhancedTable } from "@netblink/vue-components";',
    '',
    '<!-- Column-definition mode: pass columns + data, get automatic headers and cells -->',
    '<EnhancedTable',
    '  :columns="columns"',
    '  :data="items"',
    '  sortable',
    '  selectable',
    '  @row-click="onRowClick"',
    '  @selection-change="onSelectionChange"',
    '  @sort="onSort"',
    '>',
    '  <!-- Override any cell via a named slot cell-{key} -->',
    '  <template #cell-status="{ value }">',
    '    <span class="rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-800">',
    '      {{ value }}',
    '    </span>',
    '  </template>',
    '</EnhancedTable>',
    '',
    '<!-- Manual-slot mode: omit columns and compose rows yourself -->',
    '<EnhancedTable :data="items" striped>',
    '  <Thead><tr><Th>Name</Th><Th>Email</Th></tr></Thead>',
    '  <Tbody>',
    '    <tr v-for="item in items" :key="item.id">',
    '      <Td>{{ item.name }}</Td>',
    '      <Td>{{ item.email }}</Td>',
    '    </tr>',
    '  </Tbody>',
    '</EnhancedTable>',
];

const enhancedTableComponentProps = [
    { prop: 'columns', type: 'TableColumn[]', default: '-', description: 'Column definitions. When provided, headers and cells are auto-rendered.' },
    { prop: 'autoGenerateColumns', type: 'boolean', default: 'false', description: 'Derive column definitions from the keys of the first data row.' },
    { prop: 'selectable', type: 'boolean', default: 'false', description: 'Enable row selection. Selected rows are emitted via selection-change.' },
    { prop: 'sortable', type: 'boolean', default: 'false', description: 'Enable column sorting. Sort events are emitted via sort.' },
    { prop: 'resource', type: 'string', default: '-', description: 'Inertia page-prop key. Passed to useTable so it can hydrate rows and pagination automatically.' },
    { prop: '...TableProps', type: '-', default: '-', description: 'All Table props (variant, size, striped, bordered, hover, responsive, sticky, data, pagination, loading, etc.) are forwarded to the underlying Table.' },
];

const enhancedTableComponentEvents = [
    { prop: 'row-click', type: '(row: TableRow, index: number) => void', default: '-', description: 'Fired when the user clicks a data row.' },
    { prop: 'selection-change', type: '(selected: TableRow[]) => void', default: '-', description: 'Fired whenever the set of selected rows changes.' },
    { prop: 'sort', type: '(column: string, direction: "asc" | "desc") => void', default: '-', description: 'Fired when a sortable column header is clicked.' },
];

const enhancedTableComponentSlots = [
    { prop: 'default', type: 'slot', default: '-', description: 'Used in manual mode (no columns prop). Render Thead/Tbody as normal.' },
    { prop: 'cell-{key}', type: 'slot', default: '-', description: 'Override the cell for the column matching {key}. Receives { row, column, value }.' },
];

const enhancedTableDemoColumns = [
    { key: 'name', label: 'Name', sortable: true, align: 'left' as const },
    { key: 'email', label: 'Email', sortable: false, align: 'left' as const },
    { key: 'status', label: 'Status', sortable: true, align: 'left' as const },
    { key: 'role', label: 'Role', sortable: false, align: 'left' as const },
];

// ---- TableItemCard ----

const tableItemCardExample = [
    'import { TableItemCard } from "@netblink/vue-components";',
    '',
    '<TableItemCard',
    '  :itemId="{ id: \'42\', routeName: \'orders.show\', routeData: \'42\' }"',
    '  :title="{ text: \'Premium Widget\', href: \'/products/42\' }"',
    '  :pills="[{ text: \'In Stock\', color: \'#16a34a\' }]"',
    '  :options="[{ text: \'Qty: 3\' }, { text: \'SKU: WG-042\' }]"',
    '  timeStamp="Jan 15, 2025"',
    '  :amount="{ text: \'Total: \', amount: \'129.99\' }"',
    '>',
    '  <!-- Optional default slot for any extra content -->',
    '  <span class="text-sm text-gray-500">Shipped via DHL</span>',
    '</TableItemCard>',
];

const tableItemCardProps = [
    { prop: 'itemId', type: 'ItemId', default: '-', description: 'Object describing the ID badge. Fields: id (string), routeName?, routeData?, prefix? (boolean, defaults true to prepend #).' },
    { prop: 'title', type: 'Title', default: '-', description: 'Card title. Fields: text (string), href?, routeName?, routeData?. A link is rendered when href or routeName is set.' },
    { prop: 'pills', type: 'Pill[]', default: '-', description: 'Array of colored badge objects. Each pill has text, color?, href?, routeName?, routeData?.' },
    { prop: 'options', type: 'Option[]', default: '-', description: 'Array of text lines shown below the title. Each option has text, color?, href?, routeName?, routeData?.' },
    { prop: 'timeStamp', type: 'string', default: '-', description: 'Timestamp string shown alongside the ID badge.' },
    { prop: 'extraText', type: 'string', default: '-', description: 'Highlighted note text displayed below the title (labelled "Engineer Note").' },
    { prop: 'amount', type: 'Amount', default: '-', description: 'Monetary value to display. Fields: text? (label prefix), amount (string formatted by moneyFormat helper).' },
    { prop: 'item', type: 'Record<string, any>', default: '-', description: 'Raw row object. Available for use in the default slot.' },
];

const tableItemCardSlots = [
    { prop: 'default', type: 'slot', default: '-', description: 'Appended at the bottom of the card. Use for action buttons or extra detail rows.' },
];

// Demo data for TableItemCard
const tableItemCardDemoItems = [
    {
        itemId: { id: '1001', prefix: true },
        title: { text: 'Office Chair Deluxe' },
        pills: [{ text: 'Active', color: '#16a34a' }],
        options: [{ text: 'Qty: 2' }, { text: 'SKU: CH-1001' }],
        timeStamp: 'Mar 10, 2025',
        amount: { text: 'Total: ', amount: '349.98' },
    },
    {
        itemId: { id: '1002', prefix: true },
        title: { text: 'Standing Desk Pro' },
        pills: [{ text: 'Pending', color: '#ca8a04' }],
        options: [{ text: 'Qty: 1' }, { text: 'SKU: DS-2000' }],
        timeStamp: 'Mar 11, 2025',
        amount: { text: 'Total: ', amount: '899.00' },
    },
];

// ---- Collapse row family (TrCollapse, TrCollapseHandler, TdCollapseHandler) ----

const collapseRowFamilyExample = [
    'import {',
    '  Table, Thead, Tbody, Th, Td,',
    '  TrCollapseHandler, TdCollapseHandler, TrCollapse',
    '} from "@netblink/vue-components";',
    '',
    '<!--',
    '  TrCollapseHandler  - a <tr> that initialises the Tailwind Elements',
    '                        collapse trigger (data-te-collapse-init).',
    '  TdCollapseHandler  - a <td> that does the same, useful when only one',
    '                        cell should act as the toggle (e.g. an arrow icon).',
    '  TrCollapse         - the hidden <tr> that appears when the trigger fires.',
    '  All three share the collapse_id prop which must be unique per row.',
    '-->',
    '<Table>',
    '  <Thead>',
    '    <tr>',
    '      <Th>Order</Th>',
    '      <Th>Customer</Th>',
    '      <Th>Total</Th>',
    '      <Th></Th>',
    '    </tr>',
    '  </Thead>',
    '  <Tbody>',
    '    <template v-for="order in orders" :key="order.id">',
    '      <!-- Visible row - the whole row is the toggle -->',
    '      <TrCollapseHandler :collapse_id="`detail-${order.id}`">',
    '        <Td>#{{ order.id }}</Td>',
    '        <Td>{{ order.customer }}</Td>',
    '        <Td>{{ order.total }}</Td>',
    '        <!-- Alternatively, make only one cell the toggle -->',
    '        <TdCollapseHandler :collapse_id="`detail-${order.id}`">',
    '          Details',
    '        </TdCollapseHandler>',
    '      </TrCollapseHandler>',
    '',
    '      <!-- Collapsible detail row -->',
    '      <TrCollapse :collapse_id="`detail-${order.id}`">',
    '        <p class="p-4 text-sm text-gray-600">',
    '          Extra information about order #{{ order.id }}.',
    '        </p>',
    '      </TrCollapse>',
    '    </template>',
    '  </Tbody>',
    '</Table>',
];

const trCollapseHandlerProps = [
    { prop: 'collapse_id', type: 'string', default: '-', description: 'DOM id linking this trigger row to a TrCollapse panel. Must match the collapse_id on the corresponding TrCollapse.' },
];

const tdCollapseHandlerProps = [
    { prop: 'collapse_id', type: 'string', default: '-', description: 'DOM id linking this trigger cell to a TrCollapse panel. Renders as a Td with cursor-pointer styling and Tailwind Elements collapse attributes.' },
];

const trCollapseProps = [
    { prop: 'collapse_id', type: 'string', default: '-', description: 'DOM id for the collapsible panel div inside this row. Matches the collapse_id on the trigger.' },
];

const trCollapseSlots = [
    { prop: 'default', type: 'slot', default: '-', description: 'Content rendered inside the hidden panel. Receives no bindings.' },
];

// ---- TrPlaceholder ----

const trPlaceholderExample = [
    'import { Table, Thead, Tbody, Th, TrPlaceholder } from "@netblink/vue-components";',
    '',
    '<Table>',
    '  <Thead>',
    '    <tr><Th>Name</Th><Th>Email</Th><Th>Status</Th></tr>',
    '  </Thead>',
    '  <Tbody>',
    '    <!-- Show animated skeleton rows while data loads -->',
    '    <TrPlaceholder v-if="isLoading" :placeholders="5" />',
    '    <tr v-else v-for="user in users" :key="user.id">',
    '      <Td>{{ user.name }}</Td>',
    '      <Td>{{ user.email }}</Td>',
    '      <Td>{{ user.status }}</Td>',
    '    </tr>',
    '  </Tbody>',
    '</Table>',
];

const trPlaceholderProps = [
    { prop: 'placeholders', type: 'number', default: '-', description: 'Number of animated skeleton rows to render. Each row spans the full table width via colspan="999".' },
];

const isLoadingDemo = ref(true);
setTimeout(() => { isLoadingDemo.value = false; }, 2000);
</script>

<template>
    <div class="space-y-10">
        <header class="space-y-3">
            <p class="max-w-3xl text-gray-600 dark:text-gray-400">Data table components with sorting, responsive layout, sticky headers, and composable helpers.</p>
        </header>

        <!-- Basic Table -->
        <section id="basic-table">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Basic Table
            </h3>
            <DocDemoCard>

                <!-- Basic Table Example -->
                <Table class="mb-6">
                    <Thead>
                        <tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Status</Th>
                            <Th>Role</Th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr v-for="user in users.slice(0, 5)" :key="user.id">
                            <Td>{{ user.name }}</Td>
                            <Td>{{ user.email }}</Td>
                            <Td>
                                <span :class="['px-2 py-1 rounded-full text-xs font-medium', getStatusBadge(user.status)]">
                                    {{ user.status }}
                                </span>
                            </Td>
                            <Td>{{ user.role }}</Td>
                        </tr>
                    </Tbody>
                </Table>

                <CodePreview :code="basicTableExample" />
            </DocDemoCard>
        </section>

        <!-- Sortable Table -->
        <section id="sortable-table">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Sortable Table
            </h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Sortable headers. Works with Inertia.js for server-side sorting.
                </p>

                <!-- Sortable Table Example -->
                <Table class="mb-6">
                    <Thead>
                        <tr>
                            <Th sortable orderBy="name">Name</Th>
                            <Th sortable orderBy="email">Email</Th>
                            <Th sortable orderBy="role">Role</Th>
                            <Th sortable orderBy="created_at">Created</Th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr v-for="user in users.slice(0, 5)" :key="user.id">
                            <Td>{{ user.name }}</Td>
                            <Td>{{ user.email }}</Td>
                            <Td>{{ user.role }}</Td>
                            <Td>{{ formatDate(user.created_at) }}</Td>
                        </tr>
                    </Tbody>
                </Table>

                <CodePreview :code="sortableTableExample" />
            </DocDemoCard>
        </section>

        <!-- Responsive Table -->
        <section id="responsive-table">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Responsive Table
            </h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Tables adapt to smaller screens. Use the <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">label</code> prop on Td for mobile display.
                </p>

                <!-- Responsive Table Example -->
                <Table responsive class="mb-6">
                    <Thead>
                        <tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Status</Th>
                            <Th>Role</Th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr v-for="user in users.slice(0, 3)" :key="user.id">
                            <Td label="Name">{{ user.name }}</Td>
                            <Td label="Email">{{ user.email }}</Td>
                            <Td label="Status">
                                <span :class="['px-2 py-1 rounded-full text-xs font-medium', getStatusBadge(user.status)]">
                                    {{ user.status }}
                                </span>
                            </Td>
                            <Td label="Role">{{ user.role }}</Td>
                        </tr>
                    </Tbody>
                </Table>

                <CodePreview :code="responsiveTableExample" />
            </DocDemoCard>
        </section>

        <!-- Enhanced Table -->
        <section id="enhanced-table">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Enhanced Table
            </h3>
            <DocDemoCard>

                <!-- Enhanced Table Example -->
                <div class="mb-6">
                    <Table striped hover>
                        <Thead>
                            <tr>
                                <Th>ID</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Status</Th>
                                <Th>Role</Th>
                                <Th>Created</Th>
                                <Th>Actions</Th>
                            </tr>
                        </Thead>
                        <Tbody>
                            <tr v-for="user in users.slice(0, 5)" :key="user.id" class="hover:bg-gray-50">
                                <Td>{{ user.id }}</Td>
                                <Td>{{ user.name }}</Td>
                                <Td>{{ user.email }}</Td>
                                <Td>
                                    <span :class="['px-2 py-1 rounded-full text-xs font-medium', getStatusBadge(user.status)]">
                                        {{ user.status }}
                                    </span>
                                </Td>
                                <Td>{{ user.role }}</Td>
                                <Td>{{ formatDate(user.created_at) }}</Td>
                                <Td>
                                    <div class="flex gap-2">
                                        <PrimaryButton @click="editUser(user)">Edit</PrimaryButton>
                                        <DangerButton @click="deleteUser(user)">Delete</DangerButton>
                                    </div>
                                </Td>
                            </tr>
                        </Tbody>
                    </Table>
                </div>

                <!-- Simple Auto-Generated Table Example -->
                <div class="mb-6">
                    <div class="mb-2 font-medium">Auto-Generated Columns (Simple Data)</div>
                    <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        Here's how EnhancedTable can auto-generate columns from simple data:
                    </p>
                    <Table striped>
                        <Thead>
                            <tr>
                                <Th v-for="key in Object.keys(users[0])" :key="key">
                                    {{ key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ') }}
                                </Th>
                            </tr>
                        </Thead>
                        <Tbody>
                            <tr v-for="user in users.slice(0, 3)" :key="user.id">
                                <Td v-for="key in Object.keys(user)" :key="key">
                                    <template v-if="key === 'status'">
                                        <span :class="['px-2 py-1 rounded-full text-xs font-medium', getStatusBadge(user[key])]">
                                            {{ user[key] }}
                                        </span>
                                    </template>
                                    <template v-else-if="key === 'created_at'">
                                        {{ formatDate(user[key]) }}
                                    </template>
                                    <template v-else>
                                        {{ user[key] }}
                                    </template>
                                </Td>
                            </tr>
                        </Tbody>
                    </Table>
                </div>

                <CodePreview :code="enhancedTableExample" />
            </DocDemoCard>
        </section>

        <!-- Table Variants -->
        <section id="table-variants">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Table Variants
            </h3>
            <DocDemoCard>

                <!-- Variant matrix - one rendered example, the rest demonstrated via the code preview. -->
                <div class="mb-6 grid gap-6 lg:grid-cols-2">
                    <div>
                        <div class="mb-2 font-medium">variant="default"</div>
                        <Table variant="default">
                            <Thead>
                                <tr>
                                    <Th>Order ID</Th>
                                    <Th>Customer</Th>
                                    <Th>Total</Th>
                                </tr>
                            </Thead>
                            <Tbody>
                                <tr v-for="order in orders.slice(0, 3)" :key="order.id">
                                    <Td>#{{ order.id }}</Td>
                                    <Td>{{ order.customer }}</Td>
                                    <Td>{{ formatCurrency(order.total) }}</Td>
                                </tr>
                            </Tbody>
                        </Table>
                    </div>
                    <div>
                        <div class="mb-2 font-medium">striped + hover</div>
                        <Table striped hover>
                            <Thead>
                                <tr>
                                    <Th>Order ID</Th>
                                    <Th>Customer</Th>
                                    <Th>Total</Th>
                                </tr>
                            </Thead>
                            <Tbody>
                                <tr v-for="order in orders.slice(0, 3)" :key="order.id">
                                    <Td>#{{ order.id }}</Td>
                                    <Td>{{ order.customer }}</Td>
                                    <Td>{{ formatCurrency(order.total) }}</Td>
                                </tr>
                            </Tbody>
                        </Table>
                    </div>
                    <div>
                        <div class="mb-2 font-medium">variant="minimal"</div>
                        <Table variant="minimal">
                            <Thead>
                                <tr>
                                    <Th>Order ID</Th>
                                    <Th>Customer</Th>
                                    <Th>Total</Th>
                                </tr>
                            </Thead>
                            <Tbody>
                                <tr v-for="order in orders.slice(0, 3)" :key="order.id">
                                    <Td>#{{ order.id }}</Td>
                                    <Td>{{ order.customer }}</Td>
                                    <Td>{{ formatCurrency(order.total) }}</Td>
                                </tr>
                            </Tbody>
                        </Table>
                    </div>
                    <div>
                        <div class="mb-2 font-medium">variant="elevated" bordered</div>
                        <Table variant="elevated" bordered>
                            <Thead>
                                <tr>
                                    <Th>Order ID</Th>
                                    <Th>Customer</Th>
                                    <Th>Total</Th>
                                </tr>
                            </Thead>
                            <Tbody>
                                <tr v-for="order in orders.slice(0, 3)" :key="order.id">
                                    <Td>#{{ order.id }}</Td>
                                    <Td>{{ order.customer }}</Td>
                                    <Td>{{ formatCurrency(order.total) }}</Td>
                                </tr>
                            </Tbody>
                        </Table>
                    </div>
                </div>

                <CodePreview :code="tableVariantsExample" />
            </DocDemoCard>
        </section>

        <!-- Sticky Header -->
        <section id="sticky-header">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Sticky Header
            </h3>
            <DocDemoCard>

                <!-- Sticky Header Example. No outer scroll wrapper: `sticky` makes the
                     Table its own bounded scroll container (see `stickyMaxHeight`). -->
                <div>
                    <Table sticky stickyMaxHeight="24rem">
                        <Thead>
                            <tr>
                                <Th>ID</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Status</Th>
                                <Th>Role</Th>
                                <Th>Created</Th>
                            </tr>
                        </Thead>
                        <Tbody>
                            <tr v-for="(user, index) in [...users, ...users, ...users]" :key="`sticky-${user.id}-${index}`">
                                <Td>{{ user.id }}</Td>
                                <Td>{{ user.name }}</Td>
                                <Td>{{ user.email }}</Td>
                                <Td>
                                    <span :class="['px-2 py-1 rounded-full text-xs font-medium', getStatusBadge(user.status)]">
                                        {{ user.status }}
                                    </span>
                                </Td>
                                <Td>{{ user.role }}</Td>
                                <Td>{{ formatDate(user.created_at) }}</Td>
                            </tr>
                        </Tbody>
                    </Table>
                </div>

                <CodePreview :code="stickyTableExample" />
            </DocDemoCard>
        </section>

        <!-- Using Composables -->
        <section id="pagination">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">Pagination</h3>
            <DocDemoCard>

                <div class="mb-6 flex justify-center">
                    <Pagination :links="paginationLinks" :linkReturn="true" @change="handlePageChange" />
                </div>

                <div class="mb-6 text-center text-sm text-gray-600 dark:text-gray-400">Current page: {{ currentPage }} of 15</div>

                <CodePreview :code="paginationExamples" />

                <div class="mt-6">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Pagination Props</div>
                    <PropsTable :rows="paginationProps" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Events</div>
                    <PropsTable :rows="paginationEvents" />
                </div>
            </DocDemoCard>
        </section>

        <section id="composables">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Using Table Composables
            </h3>
            <DocDemoCard>

                <!-- Composable Example -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-900/40 rounded-lg">
                    <div class="mb-2 font-medium">Table Composables Demo:</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">
                        <p>Sort State: {{ sortState ? `${sortState.column} ${sortState.direction}` : 'None' }}</p>
                        <p>Available Functions: sort(), getSortDirection(), isSorted()</p>
                        <p>Mock Data Loaded: {{ users.length }} users, {{ orders.length }} orders</p>
                    </div>
                </div>

                <CodePreview :code="composableExample" />
            </DocDemoCard>
        </section>

        <!-- Props Documentation -->
        <section id="props">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                Component Props
            </h3>

            <DocDemoCard>
                <CollapsableSection header="Table Props" class="mb-6">
                    <PropsTable :rows="tableProps" />
                </CollapsableSection>

                <CollapsableSection header="Th (Table Header Cell) Props" class="mb-6">
                    <PropsTable :rows="thProps" />
                </CollapsableSection>

                <CollapsableSection header="Td (Table Cell) Props" class="mb-6">
                    <PropsTable :rows="tdProps" />
                </CollapsableSection>

                <CollapsableSection header="Tr (Table Row) Props">
                    <PropsTable :rows="trProps" />
                </CollapsableSection>
            </DocDemoCard>
        </section>

        <!-- EnhancedTable component -->
        <section id="enhanced-table-component">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                EnhancedTable
            </h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    EnhancedTable wraps Table with two rendering modes. Pass a <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">columns</code> array to get automatic headers and cells with per-cell slot overrides (<code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">#cell-{key}</code>). Omit columns and compose Thead/Tbody yourself for full manual control. It also wires up <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">useTable</code> internally so sorting and row selection work out of the box.
                </p>

                <div class="mb-6">
                    <EnhancedTable
                        :columns="enhancedTableDemoColumns"
                        :data="users.slice(0, 4)"
                        striped
                        hover
                        @row-click="handleRowClick"
                        @sort="handleSort"
                    >
                        <template #cell-status="{ value }">
                            <span :class="['rounded-full px-2 py-1 text-xs font-medium', getStatusBadge(value)]">
                                {{ value }}
                            </span>
                        </template>
                    </EnhancedTable>
                </div>

                <CodePreview :code="enhancedTableComponentExample" />

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Props</div>
                    <PropsTable :rows="enhancedTableComponentProps" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Events</div>
                    <PropsTable :rows="enhancedTableComponentEvents" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Slots</div>
                    <PropsTable :rows="enhancedTableComponentSlots" />
                </div>
            </DocDemoCard>
        </section>

        <!-- TableItemCard -->
        <section id="table-item-card">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                TableItemCard
            </h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    TableItemCard is the mobile-first card alternative to a table row. It displays an ID badge, timestamp, pill tags, a linked title, option lines, and an optional monetary amount. Render a list of these components instead of a <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">Table</code> when the viewport is too narrow for columnar data.
                </p>

                <div class="mb-6 space-y-2">
                    <TableItemCard
                        v-for="demoItem in tableItemCardDemoItems"
                        :key="demoItem.itemId.id"
                        :itemId="demoItem.itemId"
                        :title="demoItem.title"
                        :pills="demoItem.pills"
                        :options="demoItem.options"
                        :timeStamp="demoItem.timeStamp"
                        :amount="demoItem.amount"
                    />
                </div>

                <CodePreview :code="tableItemCardExample" />

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Props</div>
                    <PropsTable :rows="tableItemCardProps" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Slots</div>
                    <PropsTable :rows="tableItemCardSlots" />
                </div>
            </DocDemoCard>
        </section>

        <!-- TrCollapseHandler -->
        <section id="tr-collapse-handler">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                TrCollapseHandler
            </h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    A <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">&lt;tr&gt;</code> that acts as a Tailwind Elements collapse trigger. Clicking the entire row toggles the paired <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">TrCollapse</code> whose <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">collapse_id</code> matches. See the combined demo below in the TrCollapse section.
                </p>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Props</div>
                    <PropsTable :rows="trCollapseHandlerProps" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Slots</div>
                    <PropsTable :rows="[{ prop: 'default', type: 'slot', default: '-', description: 'Table cells (Td) to render inside this trigger row.' }]" />
                </div>
            </DocDemoCard>
        </section>

        <!-- TdCollapseHandler -->
        <section id="td-collapse-handler">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                TdCollapseHandler
            </h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    A <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">Td</code> that initialises a Tailwind Elements collapse trigger. Use this when only a single cell (e.g. an expand arrow) should toggle the detail row, rather than the whole <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">TrCollapseHandler</code>. The cell receives <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">cursor-pointer</code> styling automatically.
                </p>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Props</div>
                    <PropsTable :rows="tdCollapseHandlerProps" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Slots</div>
                    <PropsTable :rows="[{ prop: 'default', type: 'slot', default: '-', description: 'Content inside the trigger cell, such as a chevron icon or the word Details.' }]" />
                </div>
            </DocDemoCard>
        </section>

        <!-- TrCollapse + combined demo -->
        <section id="tr-collapse">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                TrCollapse
            </h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    A hidden <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">&lt;tr&gt;</code> that expands when its paired trigger fires. It wraps a full-width cell (<code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">colspan="999"</code>) containing a Tailwind Elements collapsible panel div. Pair it with <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">TrCollapseHandler</code> or <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">TdCollapseHandler</code> by sharing the same <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">collapse_id</code>.
                </p>

                <!-- Combined demo: TrCollapseHandler + TdCollapseHandler + TrCollapse in one table -->
                <div class="mb-6">
                    <Table hover>
                        <Thead>
                            <tr>
                                <Th>Order</Th>
                                <Th>Customer</Th>
                                <Th>Total</Th>
                                <Th></Th>
                            </tr>
                        </Thead>
                        <Tbody>
                            <template v-for="order in orders.slice(0, 3)" :key="order.id">
                                <TrCollapseHandler :collapse_id="`demo-detail-${order.id}`">
                                    <Td>#{{ order.id }}</Td>
                                    <Td>{{ order.customer }}</Td>
                                    <Td>{{ formatCurrency(order.total) }}</Td>
                                    <TdCollapseHandler :collapse_id="`demo-detail-${order.id}`">
                                        Details
                                    </TdCollapseHandler>
                                </TrCollapseHandler>
                                <TrCollapse :collapse_id="`demo-detail-${order.id}`">
                                    <p class="p-4 text-sm text-gray-600 dark:text-gray-400">
                                        Order #{{ order.id }} placed by {{ order.customer }}. Total: {{ formatCurrency(order.total) }}.
                                    </p>
                                </TrCollapse>
                            </template>
                        </Tbody>
                    </Table>
                </div>

                <CodePreview :code="collapseRowFamilyExample" />

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">TrCollapse Props</div>
                    <PropsTable :rows="trCollapseProps" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">TrCollapse Slots</div>
                    <PropsTable :rows="trCollapseSlots" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">TrCollapseHandler Props</div>
                    <PropsTable :rows="trCollapseHandlerProps" />
                </div>

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">TdCollapseHandler Props</div>
                    <PropsTable :rows="tdCollapseHandlerProps" />
                </div>
            </DocDemoCard>
        </section>

        <!-- TrPlaceholder -->
        <section id="tr-placeholder">
            <h3 class="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-semibold text-gray-800 dark:border-gray-700 dark:text-gray-100">
                TrPlaceholder
            </h3>
            <DocDemoCard>
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                    Renders <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">n</code> animated skeleton rows to fill a table while data is loading. Each row contains a single cell that spans all columns via <code class="rounded bg-gray-100 dark:bg-gray-900/60 px-1">colspan="999"</code> and shows a pulsing gray bar. Replace it with real rows once loading completes.
                </p>

                <div class="mb-6">
                    <Table>
                        <Thead>
                            <tr>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Status</Th>
                            </tr>
                        </Thead>
                        <Tbody>
                            <TrPlaceholder v-if="isLoadingDemo" :placeholders="4" />
                            <template v-else>
                                <tr v-for="user in users.slice(0, 4)" :key="user.id">
                                    <Td>{{ user.name }}</Td>
                                    <Td>{{ user.email }}</Td>
                                    <Td>{{ user.status }}</Td>
                                </tr>
                            </template>
                        </Tbody>
                    </Table>
                    <p class="mt-2 text-xs text-gray-400">Skeleton visible for 2 s on page load, then real data appears.</p>
                </div>

                <CodePreview :code="trPlaceholderExample" />

                <div class="mt-4">
                    <div class="mb-3 font-semibold text-gray-800 dark:text-gray-200">Props</div>
                    <PropsTable :rows="trPlaceholderProps" />
                </div>
            </DocDemoCard>
        </section>

        <!-- Migration / back-compat notes -->

        <section id="migration">
            <CollapsableSection header="Migration & back-compat notes">
                <p class="mb-4 text-gray-600 dark:text-gray-400">All older table code still works; these are the current equivalents:</p>
                <ul class="list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li><code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">seperate</code> → <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">separate</code></li>
                    <li><code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">collapsable</code> → <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">collapsible</code></li>
                    <li><code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">collapse_id</code> → <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">collapseId</code></li>
                    <li><code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">links</code> (array) → <code class="rounded bg-gray-100 px-1 dark:bg-gray-900/60">pagination</code> (Laravel paginator payload)</li>
                </ul>
            </CollapsableSection>
        </section>
    </div>
</template>
