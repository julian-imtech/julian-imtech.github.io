import { RouteInfo } from './sidebar-admin.metadata';

export const ADMINMENU: RouteInfo[] = [
    {
        path: '/dashboard-admin/home',
        title: 'Inicio',
        icon: 'fas fa-home',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/dashboard-admin/organization',
        title: 'Mi Organización',
        icon: 'fab fa-houzz',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/dashboard-admin/organization-data',
                title: 'Información',
                icon: 'fas fa-info',//icon-Posterous , fas fa-birthday-cake
                class: 'padding-submenu',
                extralink: false,
                submenu: []
            },
            {
                path: '/dashboard-admin/organization-users',
                title: 'Usuarios',
                icon: 'fas fa-users',
                class: 'has-arrow',
                extralink: false,
                submenu: [{
                    path: '/dashboard-admin/organization-clients-data',
                    title: 'Clientes',
                    icon: 'fas fa-user-alt',//icon-Posterous , fas fa-birthday-cake
                    class: 'padding-submenu',
                    extralink: false,
                    submenu: []
                },{
                    path: '/dashboard-admin/organization-technician-data',
                    title: 'Técnicos',
                    icon: 'fas fa-user-cog',//icon-Posterous , fas fa-birthday-cake
                    class: 'padding-submenu',
                    extralink: false,
                    submenu: []
                },{
                    path: '/dashboard-admin/organization-counters-data',
                    title: 'Contadores',
                    icon: 'fas fa-user-tie',//icon-Posterous , fas fa-birthday-cake
                    class: 'padding-submenu',
                    extralink: false,
                    submenu: []
                },{
                    path: '/dashboard-admin/organization-warehouses-data',
                    title: 'Almacén',
                    icon: 'fas fa-user-tag',//icon-Posterous , fas fa-birthday-cake
                    class: 'padding-submenu',
                    extralink: false,
                    submenu: []
                },]
            },
            {
                path: '/dashboard-admin/admin-organization/devices-list',
                title: 'Dispositivos',
                icon: 'fas fa-microchip',
                class: 'padding-submenu',
                extralink: false,
                submenu: []
            },
            /* {
                path: '/dashboard-admin/organization-agenda',
                title: 'Servicios',
                icon: 'fas fa-calendar-week',
                class: 'padding-submenu',
                extralink: false,
                submenu: []
            }, */
        ]
    },
    {
        path: '/dashboard-admin/organizations',
        title: 'Organizaciones',
        icon: 'fas fa-city',
        extralink: false,
        class: '',
        submenu: [],
        // class: 'has-arrow',
        // submenu: [{
        //         path: '/dashboard-admin/water-organizations',
        //         title: 'Agua',
        //         icon: 'fas fa-tint',
        //         class: 'padding-submenu',
        //         extralink: false,
        //         submenu: []
        //     },{
        //         path: '/dashboard-admin/gas-organizations',
        //         title: 'Gas',
        //         icon: 'fas fa-burn'/* fas fa-smog */,
        //         class: 'padding-submenu',
        //         extralink: false,
        //         submenu: []
        //     },
        // ]
    },
    {
        path: '/dashboard-admin/devices',
        title: 'Dispositivos',
        icon: 'fas fa-microchip',
        class: '',
        extralink: false,
        submenu: []
    },
    // {
    //     path: '/dashboard-admin/orders',
    //     title: 'Pagos/Trans',
    //     icon: 'fas fa-exchange-alt',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/dashboard-admin/orders',
    //     title: 'Planes (Gas)',
    //     icon: 'fas fa-boxes',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    {
        path: '/dashboard-admin/apn-catalog',
        title: 'APN´s',
        //icon: 'fas fa-broadcast-tower',
        icon: 'fas fa-signal',
        class: '',
        extralink: false,
        submenu: []
    },
    /* {
        path: '/dashboard-admin/orders',
        title: 'Usuarios',
        icon: 'fas fa-user-friends',
        class: '',
        extralink: false,
        submenu: []
    }, */
    {
        path: '/dashboard-admin/account-setting',
        title: 'Ajustes de la cuenta',
        icon: 'fas fa-cogs',
        class: '',
        extralink: false,
        submenu: []
    },
    /*     {
        path: '/apps/email',
        title: 'Email',
        icon: 'icon-Mailbox-Empty',
        class: '',
        extralink: false,
        submenu: []
    }, */
];
