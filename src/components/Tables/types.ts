// Table-related TypeScript interfaces and types
export interface TableColumn {
    key: string;
    label: string;
    sortable?: boolean;
    width?: string;
    align?: 'left' | 'center' | 'right';
    responsive?: boolean;
}

export interface TableRow {
    [key: string]: any;
}

export interface TablePagination {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
}

export interface TableSortState {
    column: string | null;
    direction: 'asc' | 'desc';
}

export interface TableProps {
    // Data
    data?: TableRow[];
    columns?: TableColumn[];
    total?: number; // For backward compatibility
    
    // Pagination
    pagination?: TablePagination;
    showPagination?: boolean;
    showPerPage?: boolean;
    defaultPerPage?: number;
    links?: any[]; // Legacy support
    
    // Appearance
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
    responsive?: boolean;
    sticky?: boolean;
    separate?: boolean;
    
    // Legacy props for backward compatibility
    seperate?: boolean; // Misspelled version
    overflow?: boolean; // Legacy prop
    
    // Functionality
    sortable?: boolean;
    loading?: boolean;
    selectable?: boolean;
    
    // Collapse functionality
    collapsible?: boolean;
    collapseId?: string;
    collapsable?: boolean; // Legacy prop
    collapse_id?: string; // Legacy prop
    
    // Messages
    emptyMessage?: string;
    loadingMessage?: string;
    
    // Styling
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'minimal' | 'elevated';
}

export interface TableHeaderProps {
    sticky?: boolean;
    responsive?: boolean;
    variant?: 'default' | 'minimal' | 'elevated';
}

export interface TableHeaderCellProps {
    sortable?: boolean;
    sorted?: boolean;
    sortDirection?: 'asc' | 'desc';
    align?: 'left' | 'center' | 'right';
    width?: string;
    responsive?: boolean;
}

export interface TableBodyProps {
    loading?: boolean;
    data?: TableRow[];
    emptyMessage?: string;
    loadingRows?: number;
    responsive?: boolean;
}

export interface TableCellProps {
    align?: 'left' | 'center' | 'right';
    responsive?: boolean;
    label?: string; // For responsive tables
    width?: string;
    nowrap?: boolean;
}

export interface TableRowProps {
    selectable?: boolean;
    selected?: boolean;
    hoverable?: boolean;
    clickable?: boolean;
    variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}

// Inertia-specific types
export interface InertiaTableData {
    data: TableRow[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
}

export interface InertiaTableProps extends Omit<TableProps, 'data' | 'pagination'> {
    resource?: string; // The key in page props
    defer?: boolean;
    preserveState?: boolean;
    preserveScroll?: boolean;
}

// Event types
export interface TableSortEvent {
    column: string;
    direction: 'asc' | 'desc';
}

export interface TableSelectEvent {
    selected: TableRow[];
    row?: TableRow;
}

export interface TableRowClickEvent {
    row: TableRow;
    index: number;
}
