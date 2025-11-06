/* eslint-disable import/no-anonymous-default-export */

export default [
    ...[
        // MSFS 2024 Launch Infos =============================================
        ['msfs-2024-editions', require('@views/msfs-2024/editions').default],
        ['msfs-2024-pc-specs', require('@views/msfs-2024/pc-specs').default],
        [
            'msfs-2024-default-aircrafts',
            require('@views/msfs-2024/default-aircrafts').default,
        ],
        ['msfs-2024-gameplay', require('@views/msfs-2024/gameplay').default],
        [
            'msfs-2024-improvements',
            require('@views/msfs-2024/improvements').default,
        ],
        [
            'msfs-2024-marketplace',
            require('@views/msfs-2024/marketplace').default,
        ],

        // MSFS 2024 Updates ==================================================
        [
            'msfs-2024-update-202502-su01',
            require('@views/msfs-2024/updates/202502-su01').default,
        ],
        [
            'msfs-2024-update-202505-su02',
            require('@views/msfs-2024/updates/202505-su02').default,
        ],
        [
            'msfs-2024-update-202507-su03',
            require('@views/msfs-2024/updates/202507-su03').default,
        ],
        [
            'msfs-2024-update-202511-su04',
            require('@views/msfs-2024/updates/202511-su04').default,
        ],
    ].map(([path, component]) => ({
        path,
        component,
        childRoutes: [{ path: ':type' }],
    })),
];
