/**
 * Mock data service for component previews and testing
 */

export interface User {
    id: number;
    name: string;
    email: string;
    status: 'active' | 'inactive' | 'pending';
    avatar?: string;
    role: string;
    created_at: string;
    last_login?: string;
}

export interface Order {
    id: number;
    customer: string;
    email: string;
    total: number;
    status: 'pending' | 'processing' | 'completed' | 'cancelled';
    items: number;
    created_at: string;
}

export interface LogEntry {
    id: number;
    event: string;
    description: string;
    causer: { id: number; name: string };
    created_at: string;
    properties: Record<string, any>;
}

export interface StatItem {
    name: string;
    value: number;
    label: string;
    color?: string;
    trend?: 'up' | 'down' | 'stable';
}

// Mock Users Data
export const mockUsers: User[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        status: 'active',
        role: 'Admin',
        created_at: '2024-01-15T10:30:00Z',
        last_login: '2024-01-20T14:22:00Z',
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        status: 'active',
        role: 'Editor',
        created_at: '2024-01-14T09:15:00Z',
        last_login: '2024-01-19T16:45:00Z',
    },
    {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        status: 'pending',
        role: 'User',
        created_at: '2024-01-13T11:22:00Z',
    },
    {
        id: 4,
        name: 'Alice Wilson',
        email: 'alice.wilson@example.com',
        status: 'inactive',
        role: 'User',
        created_at: '2024-01-12T13:45:00Z',
        last_login: '2024-01-15T10:12:00Z',
    },
    {
        id: 5,
        name: 'Charlie Brown',
        email: 'charlie.brown@example.com',
        status: 'active',
        role: 'Editor',
        created_at: '2024-01-11T15:30:00Z',
        last_login: '2024-01-20T09:33:00Z',
    },
];

// Mock Orders Data
export const mockOrders: Order[] = [
    {
        id: 1001,
        customer: 'John Doe',
        email: 'john.doe@example.com',
        total: 299.99,
        status: 'completed',
        items: 3,
        created_at: '2024-01-20T14:30:00Z',
    },
    {
        id: 1002,
        customer: 'Jane Smith',
        email: 'jane.smith@example.com',
        total: 159.5,
        status: 'processing',
        items: 2,
        created_at: '2024-01-20T12:15:00Z',
    },
    {
        id: 1003,
        customer: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        total: 89.99,
        status: 'pending',
        items: 1,
        created_at: '2024-01-20T10:45:00Z',
    },
    {
        id: 1004,
        customer: 'Alice Wilson',
        email: 'alice.wilson@example.com',
        total: 450.0,
        status: 'cancelled',
        items: 5,
        created_at: '2024-01-19T16:20:00Z',
    },
];

// Mock Statistics Data
export const mockStats: StatItem[] = [
    {
        name: 'users',
        value: 1247,
        label: 'Total Users',
        color: 'blue',
        trend: 'up',
    },
    {
        name: 'orders',
        value: 324,
        label: 'Orders Today',
        color: 'green',
        trend: 'up',
    },
    {
        name: 'revenue',
        value: 12590,
        label: 'Revenue (£)',
        color: 'purple',
        trend: 'stable',
    },
    {
        name: 'pending',
        value: 23,
        label: 'Pending Reviews',
        color: 'yellow',
        trend: 'down',
    },
];

// Mock Activity Logs
export const mockLogs: LogEntry[] = [
    {
        id: 1,
        event: 'user.created',
        description: 'New user account was created',
        causer: { id: 1, name: 'System' },
        created_at: '2024-01-20T15:30:00Z',
        properties: {
            user_id: 123,
            email: 'newuser@example.com',
            ip_address: '192.168.1.1',
        },
    },
    {
        id: 2,
        event: 'order.placed',
        description: 'Customer placed a new order',
        causer: { id: 2, name: 'John Doe' },
        created_at: '2024-01-20T14:15:00Z',
        properties: {
            order_id: 1001,
            total: 299.99,
            items: 3,
        },
    },
    {
        id: 3,
        event: 'user.login',
        description: 'User logged into the system',
        causer: { id: 3, name: 'Jane Smith' },
        created_at: '2024-01-20T13:45:00Z',
        properties: {
            ip_address: '192.168.1.45',
            user_agent:
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
    },
    {
        id: 4,
        event: 'order.updated',
        description: 'Order status was updated to processing',
        causer: { id: 1, name: 'Admin User' },
        created_at: '2024-01-20T12:30:00Z',
        properties: {
            order_id: 1002,
            old_status: 'pending',
            new_status: 'processing',
        },
    },
    {
        id: 5,
        event: 'user.updated',
        description: 'User profile information was updated',
        causer: { id: 5, name: 'Charlie Brown' },
        created_at: '2024-01-20T11:15:00Z',
        properties: {
            user_id: 5,
            fields_updated: ['name', 'email'],
            old_email: 'charlie@oldmail.com',
            new_email: 'charlie.brown@example.com',
        },
    },
];

// Mock Select Options
export const mockSelectOptions = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending', label: 'Pending' },
    { value: 'suspended', label: 'Suspended' },
];

export const mockCountries = [
    { value: 'US', label: 'United States' },
    { value: 'GB', label: 'United Kingdom' },
    { value: 'CA', label: 'Canada' },
    { value: 'AU', label: 'Australia' },
    { value: 'DE', label: 'Germany' },
    { value: 'FR', label: 'France' },
    { value: 'ES', label: 'Spain' },
    { value: 'IT', label: 'Italy' },
    { value: 'NL', label: 'Netherlands' },
    { value: 'BE', label: 'Belgium' },
];

export const mockCategories = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'clothing', label: 'Clothing & Accessories' },
    { value: 'home', label: 'Home & Garden' },
    { value: 'books', label: 'Books & Media' },
    { value: 'sports', label: 'Sports & Outdoors' },
    { value: 'beauty', label: 'Beauty & Personal Care' },
    { value: 'automotive', label: 'Automotive' },
    { value: 'toys', label: 'Toys & Games' },
];

// Pagination data
export const mockPagination = {
    current_page: 1,
    last_page: 10,
    per_page: 15,
    total: 147,
    from: 1,
    to: 15,
    data: mockUsers.slice(0, 5), // First 5 users for demo
    links: [
        { url: null, label: '&laquo; Previous', active: false },
        { url: '?page=1', label: '1', active: true },
        { url: '?page=2', label: '2', active: false },
        { url: '?page=3', label: '3', active: false },
        { url: null, label: '...', active: false },
        { url: '?page=10', label: '10', active: false },
        { url: '?page=2', label: 'Next &raquo;', active: false },
    ],
};

// Helper functions
export const generateRandomUser = (): User => {
    const names = [
        'John',
        'Jane',
        'Bob',
        'Alice',
        'Charlie',
        'Diana',
        'Eve',
        'Frank',
    ];
    const surnames = [
        'Doe',
        'Smith',
        'Johnson',
        'Wilson',
        'Brown',
        'Davis',
        'Miller',
        'Garcia',
    ];
    const roles = ['Admin', 'Editor', 'User', 'Moderator'];
    const statuses: User['status'][] = ['active', 'inactive', 'pending'];

    const firstName = names[Math.floor(Math.random() * names.length)];
    const lastName = surnames[Math.floor(Math.random() * surnames.length)];

    return {
        id: Math.floor(Math.random() * 1000) + 100,
        name: `${firstName} ${lastName}`,
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        role: roles[Math.floor(Math.random() * roles.length)],
        created_at: new Date(
            Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
        ).toISOString(),
    };
};

export const generateRandomOrder = (): Order => {
    const customers = mockUsers.map((u) => ({ name: u.name, email: u.email }));
    const statuses: Order['status'][] = [
        'pending',
        'processing',
        'completed',
        'cancelled',
    ];
    const customer = customers[Math.floor(Math.random() * customers.length)];

    return {
        id: Math.floor(Math.random() * 9000) + 1000,
        customer: customer.name,
        email: customer.email,
        total: Math.floor(Math.random() * 500) + 50,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        items: Math.floor(Math.random() * 5) + 1,
        created_at: new Date(
            Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000
        ).toISOString(),
    };
};
