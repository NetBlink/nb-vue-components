import { ref, computed, onMounted, onUnmounted, nextTick, type Ref } from 'vue';
import { getInertiaRouter, getInertiaPage } from '../Helpers';
import type { 
    TableSortState, 
    TableRow, 
    TableSortEvent, 
    TableSelectEvent,
    InertiaTableData 
} from '../components/Tables/types';

// Composable for table sorting functionality
export function useTableSort(
    initialSort: TableSortState = { column: null, direction: 'asc' },
    preserveState = true
) {
    const sortState = ref<TableSortState>({ ...initialSort });
    const router = getInertiaRouter();
    
    // Initialize sort state from URL params
    const initializeSortFromUrl = () => {
        try {
            // @ts-ignore - window.route is available in Laravel applications
            const route = window.route;
            if (route && route().params) {
                const params = route().params;
                if (params.order_by && params.order_dir) {
                    sortState.value = {
                        column: params.order_by,
                        direction: params.order_dir
                    };
                }
            }
        } catch (error) {
            console.warn('Failed to initialize sort state from URL:', error);
        }
    };
    
    const sort = (column: string) => {
        if (!column) return;
        
        const newDirection = sortState.value.column === column && sortState.value.direction === 'asc' 
            ? 'desc' 
            : 'asc';
        
        sortState.value = {
            column,
            direction: newDirection
        };
        
        // Update URL with new sort parameters
        try {
            // @ts-ignore - window.route is available in Laravel applications
            const route = window.route;
            if (route) {
                const params = { ...route().params };
                params.order_by = column;
                params.order_dir = newDirection;
                
                router.get(route(route().current()), params, {
                    preserveState,
                    preserveScroll: true
                });
            }
        } catch (error) {
            console.warn('Failed to update URL with sort parameters:', error);
        }
    };
    
    const getSortDirection = (column: string): 'asc' | 'desc' | null => {
        return sortState.value.column === column ? sortState.value.direction : null;
    };
    
    const isSorted = (column: string): boolean => {
        return sortState.value.column === column;
    };
    
    // Initialize on mount
    onMounted(() => {
        initializeSortFromUrl();
    });
    
    return {
        sortState: computed(() => sortState.value),
        sort,
        getSortDirection,
        isSorted
    };
}

// Composable for table selection functionality
export function useTableSelection<T extends TableRow>(
    multiple = false,
    initialSelection: T[] = []
) {
    const selected = ref<T[]>([...initialSelection]);
    
    const select = (row: T) => {
        if (multiple) {
            const index = selected.value.findIndex(item => item.id === row.id);
            if (index > -1) {
                selected.value.splice(index, 1);
            } else {
                selected.value.push(row as any);
            }
        } else {
            selected.value = [row as any];
        }
    };
    
    const selectAll = (rows: T[]) => {
        if (multiple) {
            selected.value = [...rows] as any;
        }
    };
    
    const deselectAll = () => {
        selected.value = [];
    };
    
    const isSelected = (row: T): boolean => {
        return selected.value.some(item => item.id === row.id);
    };
    
    const isAllSelected = (rows: T[]): boolean => {
        return rows.length > 0 && rows.every(row => isSelected(row));
    };
    
    const isIndeterminate = (rows: T[]): boolean => {
        const selectedCount = rows.filter(row => isSelected(row)).length;
        return selectedCount > 0 && selectedCount < rows.length;
    };
    
    return {
        selected: computed(() => selected.value),
        select,
        selectAll,
        deselectAll,
        isSelected,
        isAllSelected,
        isIndeterminate
    };
}

// Composable for sticky table header functionality
export function useStickyTableHeader(
    enabled: Ref<boolean> | boolean = false,
    offset = 0
) {
    const tableRef = ref<HTMLElement | null>(null);
    const headerRef = ref<HTMLElement | null>(null);
    const stickyRef = ref<HTMLElement | null>(null);
    const isSticky = ref(false);
    
    const updateStickyState = () => {
        if (!tableRef.value || !headerRef.value || !stickyRef.value) return;
        
        const enabledValue = typeof enabled === 'boolean' ? enabled : enabled.value;
        if (!enabledValue) return;
        
        const tableRect = tableRef.value.getBoundingClientRect();
        const shouldBeSticky = tableRect.top <= offset && tableRect.bottom > offset;
        
        if (shouldBeSticky !== isSticky.value) {
            isSticky.value = shouldBeSticky;
            
            if (shouldBeSticky) {
                cloneHeader();
                stickyRef.value.style.display = 'block';
                stickyRef.value.style.top = `${offset}px`;
                stickyRef.value.style.width = `${tableRef.value.offsetWidth}px`;
            } else {
                stickyRef.value.style.display = 'none';
            }
        }
    };
    
    const cloneHeader = () => {
        if (!headerRef.value || !stickyRef.value) return;
        
        const header = headerRef.value.querySelector('tr');
        if (!header) return;
        
        stickyRef.value.innerHTML = '';
        const clone = header.cloneNode(true) as HTMLElement;
        
        // Copy cell widths
        const originalCells = header.querySelectorAll('th');
        const cloneCells = clone.querySelectorAll('th');
        
        originalCells.forEach((cell, index) => {
            if (cloneCells[index]) {
                (cloneCells[index] as HTMLElement).style.width = `${(cell as HTMLElement).offsetWidth}px`;
            }
        });
        
        stickyRef.value.appendChild(clone);
        
        // Add click event delegation
        clone.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const closestTh = target.closest('th');
            if (closestTh) {
                const index = Array.from(cloneCells).indexOf(closestTh);
                if (index > -1 && originalCells[index]) {
                    (originalCells[index] as HTMLElement).click();
                }
            }
        });
    };
    
    const handleScroll = () => {
        updateStickyState();
    };
    
    const handleResize = () => {
        nextTick(() => {
            updateStickyState();
        });
    };
    
    onMounted(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize, { passive: true });
    });
    
    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
    });
    
    return {
        tableRef,
        headerRef,
        stickyRef,
        isSticky: computed(() => isSticky.value),
        updateStickyState
    };
}

// Composable for Inertia table data
export function useInertiaTable(
    resource: string,
    options: {
        defer?: boolean;
        preserveState?: boolean;
        preserveScroll?: boolean;
    } = {}
) {
    const page = getInertiaPage();
    
    const data = computed((): InertiaTableData | null => {
        const props = page.props as any;
        const tableData = props[resource];
        
        if (!tableData) return null;
        
        // Handle both paginated and non-paginated data
        if (tableData.data && Array.isArray(tableData.data)) {
            return tableData as InertiaTableData;
        }
        
        if (Array.isArray(tableData)) {
            return {
                data: tableData,
                current_page: 1,
                last_page: 1,
                per_page: tableData.length,
                total: tableData.length,
                from: 1,
                to: tableData.length,
                links: []
            };
        }
        
        return null;
    });
    
    const rows = computed(() => data.value?.data || []);
    const pagination = computed(() => {
        const d = data.value;
        if (!d) return null;
        
        return {
            current_page: d.current_page,
            last_page: d.last_page,
            per_page: d.per_page,
            total: d.total,
            from: d.from,
            to: d.to,
            links: d.links
        };
    });
    
    const isEmpty = computed(() => rows.value.length === 0);
    const isLoading = computed(() => {
        if (!options.defer) return false;
        // This would need to be implemented based on your loading state management
        return false;
    });
    
    return {
        data,
        rows,
        pagination,
        isEmpty,
        isLoading
    };
}

// Main table composable that combines all functionality
export function useTable<T extends TableRow>(
    options: {
        sortable?: boolean;
        selectable?: boolean;
        multiple?: boolean;
        sticky?: boolean;
        resource?: string;
        defer?: boolean;
        preserveState?: boolean;
        preserveScroll?: boolean;
    } = {}
) {
    const sortable = options.sortable ?? false;
    const selectable = options.selectable ?? false;
    const multiple = options.multiple ?? false;
    const sticky = options.sticky ?? false;
    
    // Initialize composables based on options
    const sortComposable = sortable ? useTableSort() : null;
    const selectionComposable = selectable ? useTableSelection<T>(multiple) : null;
    const stickyComposable = sticky ? useStickyTableHeader(sticky) : null;
    const inertiaComposable = options.resource ? useInertiaTable(options.resource, {
        defer: options.defer,
        preserveState: options.preserveState,
        preserveScroll: options.preserveScroll
    }) : null;
    
    return {
        // Sort functionality
        ...(sortComposable ? {
            sortState: sortComposable.sortState,
            sort: sortComposable.sort,
            getSortDirection: sortComposable.getSortDirection,
            isSorted: sortComposable.isSorted
        } : {}),
        
        // Selection functionality
        ...(selectionComposable ? {
            selected: selectionComposable.selected,
            select: selectionComposable.select,
            selectAll: selectionComposable.selectAll,
            deselectAll: selectionComposable.deselectAll,
            isSelected: selectionComposable.isSelected,
            isAllSelected: selectionComposable.isAllSelected,
            isIndeterminate: selectionComposable.isIndeterminate
        } : {}),
        
        // Sticky header functionality
        ...(stickyComposable ? {
            tableRef: stickyComposable.tableRef,
            headerRef: stickyComposable.headerRef,
            stickyRef: stickyComposable.stickyRef,
            isSticky: stickyComposable.isSticky,
            updateStickyState: stickyComposable.updateStickyState
        } : {}),
        
        // Inertia data functionality
        ...(inertiaComposable ? {
            data: inertiaComposable.data,
            rows: inertiaComposable.rows,
            pagination: inertiaComposable.pagination,
            isEmpty: inertiaComposable.isEmpty,
            isLoading: inertiaComposable.isLoading
        } : {})
    };
}
