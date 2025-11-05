/* eslint-disable import/no-anonymous-default-export */
import routeCheck from 'koot/React/route-check';
import App from '@views/app';

import routesMSFS2024 from './msfs-2024';

/**
 * @type {Object} 路由配置对象
 * 原则上支持任何与 `react-router` (v3) 兼容的对象
 * - 可使用 koot-router 提供的方法封装路由配置对象
 */
export default {
    path: '/',
    component: App, // 项目的根层组件

    indexRoute: {
        /**
         * 标准写法: 打包后，该组件会存在于核心包中
         * - 推荐小型项目或大型项目的小型页面使用
         */
        // component: require('@views/home').default

        /**
         * 代码分割写法: 打包后，该组件会存在于独立的 .js 文件中
         * - 推荐大型项目使用
         * - 推荐使用 koot 提供的 `routeCheck()` 方法保证路由组件的正确渲染 (详情请查阅文档)
         */
        getComponent: (nextState, cb) => {
            import(
                /* webpackChunkName: "PageHome" */
                '@views/home'
            ).then((module) => {
                if (routeCheck(nextState)) cb(null, module.default);
            });
        },
    },

    childRoutes: [
        ...routesMSFS2024,
        ...[
            // Schedules =================================================
            [
                'schedule-2025-05-01',
                require('@views/schedule/20250501-3-weeks').default,
            ],
            [
                'schedule-2025-05-08',
                require('@views/schedule/20250505-0511').default,
            ],

            // MSFS 2020 UPDATES & PATCHES ====================================
            ['update-aau1', require('@views/update-aau1').default],
            [
                'update-202303-su12',
                require('@views/update-202303-su12').default,
            ],
            [
                'update-202303-su12-notable',
                require('@views/update-202303-su12-notable').default,
            ],
            [
                'update-202306-aau2',
                require('@views/update-202306-aau2').default,
            ],
            [
                'update-202306-aau2-notable',
                require('@views/update-202306-aau2-notable').default,
            ],
            [
                'update-202309-su13',
                require('@views/update-202309-su13').default,
            ],
            [
                'update-202309-su13-notable',
                require('@views/update-202309-su13-notable').default,
            ],
            [
                'update-202312-su14',
                require('@views/update-202312-su14').default,
            ],
            [
                'update-202312-su14-notable',
                require('@views/update-202312-su14-notable').default,
            ],
            [
                'update-202403-su15-notable',
                require('@views/update-202403-su15-notable').default,
            ],
            [
                'msfs-2020-update-202507-su16',
                require('@views/msfs-2020/updates/202507-su16').default,
            ],

            // FULL YEAR PLAN =================================================
            [
                '2023-full-year-plan',
                require('@views/2023-full-year-plan').default,
            ],
            [
                '2024-full-year-plan',
                require('@views/2024-full-year-plan').default,
            ],

            // MONTHLY FREE MODS ==============================================
            [
                'monthly-free-mods-202306',
                require('@views/monthly-free-mods-202306').default,
            ],
            [
                'monthly-free-mods-202307',
                require('@views/monthly-free-mods-202307').default,
            ],
            [
                'monthly-free-mods-202308',
                require('@views/monthly-free-mods-202308').default,
            ],
            [
                'monthly-free-mods-202309',
                require('@views/monthly-free-mods-202309').default,
            ],
            [
                'monthly-free-mods-202311',
                require('@views/monthly-free-mods-202311').default,
            ],

            // PROCEDURES =====================================================
            ['procedures-atr', require('@views/procedures-atr').default],
            ['procedures-b78x', require('@views/procedures-b78x').default],
            [
                'procedures-fenix-a320-remote-mcdu',
                require('@views/procedures-fenix-a320-remote-mcdu').default,
            ],
            [
                'procedures-diamond-da42-vi',
                require('@views/procedures/diamond-da42-vi').default,
            ],
            [
                'procedures-airbus-a350',
                require('@views/procedures/airbus-a350').default,
            ],
            [
                'procedures-cirrus-sf50-vision-jet',
                require('@views/procedures/cirrus-sf50-vision-jet').default,
            ],

            // THIRD-PARTY ====================================================
            [
                'third-party-fenix-a320-v2-rollout',
                require('@views/third-party-fenix-a320-v2-rollout').default,
            ],

            // COMPARISON =====================================================
            [
                'aircrafts-compare-single-piston-prop',
                require('@views/aircrafts/compare-single-piston-prop').default,
            ],

            // MISC ===========================================================
            [
                '2022-high-quality-3rd-party-planes',
                require('@views/2022-high-quality-3rd-party-planes').default,
            ],
            [
                '2022-official-planes-example',
                require('@views/2022-official-planes-example').default,
            ],
            [
                'best-small-airplanes-202301',
                require('@views/best-small-airplanes-202301').default,
            ],
            ['game-pass-tiers', require('@views/game-pass-tiers').default],
            [
                'msfs-2020-2024-aircrafts-backport',
                require('@views/msfs-2020/special/2024-aircrafts-backport')
                    .default,
            ],
        ].map(([path, component]) => ({
            path,
            component,
            childRoutes: [{ path: ':type' }],
        })),

        // {
        //     path: 'start',
        //     getComponent: (nextState, cb) => {
        //         import(
        //             /* webpackChunkName: "PageStart" */
        //             '@views/start'
        //         ).then((module) => {
        //             if (routeCheck(nextState)) cb(null, module.default);
        //         });
        //     },
        // },
        // {
        //     path: 'ts',
        //     getComponent: (nextState, cb) => {
        //         import(
        //             /* webpackChunkName: "PageTS" */
        //             '@views/ts-example'
        //         ).then((module) => {
        //             if (routeCheck(nextState)) cb(null, module.default);
        //         });
        //     },
        // },
    ],
};
