import { extend } from 'koot';

import Page, { type CellGroupType } from '../../';

import styles from './index.module.less';

// ============================================================================

const cellGroupGeneral: CellGroupType = {
    name: 'general',
    title: '综合体验',
    cells: [
        {
            title: <>帧率表现</>,
            infos: [
                '多项优化',
                <small>・物理模拟多线程</small>,
                <small>・粒子效果</small>,
                <small>・建筑物 & 桥梁</small>,
                <small>・航班 & 船舶</small>,
                <small>・机场停泊车辆</small>,
                <small>・丛林</small>,
            ],
            columnSpan: 4,
            rowSpan: 5,
            img: require('./imgs/2026-03-28-01-33-29.png'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '20% 50%',
            bgMaskOrientation: 'horizontal',
            style: { '--mask-min-width': '100%' },
        },
        {
            title: <>气流模拟</>,
            infos: [
                '增强：尾流效果',
                '改进：直升机在平台边缘的 CFD',
                '调整气流可视化：按颜色区分强度',
                {
                    type: 'new',
                    content: '气流可视化统一控制界面',
                },
            ],
            columnSpan: 8,
            rowSpan: 3,
            img: require('./imgs/2026-01-24-23-21-22.png'),
            backgroundSize: '250% auto',
            backgroundPosition: '65% 27%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-opacity': '0.5',
            },
        },
        {
            // implemented: false,
            title: <>界面交互</>,
            infos: [
                {
                    type: 'new',
                    content: '小地图下方显示模拟倍率',
                },
                {
                    type: 'new',
                    content: '选项：单独隐藏船舶名牌',
                },
                {
                    type: 'new',
                    content: '选项：粒子效果质量',
                },
                {
                    type: 'new',
                    content: '选项：隐藏绕机检查时的按键提示',
                },
            ],
            columnSpan: 8,
            rowSpan: 3,
            img: require('./imgs/20251124154437_1.jpg'),
            backgroundSize: 'auto 300%',
            backgroundPosition: '25% 35%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '150%',
                '--mask-opacity': '0.25',
            },
        },
        {
            title: <>飞行员生涯</>,
            infos: [
                { type: 'new', content: '超重运输执照' },
                { type: 'new', content: 'VTOL 执照' },
                '防止出生时判定坠毁',
            ],
            columnSpan: 4,
            rowSpan: 3,
            img: require('./imgs/2025-12-12-20-50-04.png'),
            backgroundSize: '150% auto',
            backgroundPosition: '40% 90%',
            // type: 'center',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                '--mask-height-vertical': '125%',
                // justifyContent: 'flex-end',
            },
        },
        {
            title: <>VR</>,
            infos: [{ type: 'new', content: '支持 PSVR2' }, '菜单位置独立保存'],
            columnSpan: 4,
            rowSpan: 2,
            img: require('./imgs/20260104033226_1.jpg'),
            backgroundSize: '150% auto',
            backgroundPosition: '0% 70%',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                '--mask-height-vertical': '150%',
                // '--mask-min-width': '150%',
                '--mask-opacity': '0.6667',
            },
        },
        {
            title: <>EFB</>,
            infos: [
                { type: 'new', content: '选项：气压单位' },
                '自动隐藏不可用的 App',
            ],
            columnSpan: 4,
            rowSpan: 2,
            img: require('./imgs/20251213223951_1.jpg'),
            backgroundSize: '300% auto',
            backgroundPosition: '40% 95%',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            // style: { '--mask-height-vertical': '100%' },
        },
        {
            title: <>多人模型映射</>,
            infos: ['旋翼不映射成固定翼', '按规格寻找相近机型'],
            columnSpan: 3,
            rowSpan: 2,
            img: require('./imgs/2025-12-14-03-31-35.png'),
            backgroundSize: '150% auto',
            backgroundPosition: '100% 50%',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                '--mask-height-vertical': '200%',
                '--mask-opacity': '0.15',
            },
        },
        {
            title: <>热点问题修复</>,
            infos: ['多倍帧生成选项', '地标标记'],
            columnSpan: 3,
            rowSpan: 2,
            img: require('./imgs/2026-01-24-23-24-03.png'),
            backgroundSize: '150% auto',
            backgroundPosition: '40% 50%',
            // type: 'center',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                '--mask-opacity': '0.45',
            },
        },
        {
            title: <>内置市场</>,
            infos: [
                {
                    type: 'new',
                    content: '赠礼 (限定货币)',
                },
                {
                    type: 'new',
                    content: 'PS5 版试运营',
                },
            ],
            columnSpan: 3,
            rowSpan: 2,
            img: require('./imgs/20251025012844_1.jpg'),
            backgroundSize: 'cover',
            backgroundPosition: '35% 100%',
            // type: 'center',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                // '--mask-height-vertical': '150%',
                // justifyContent: 'flex-end',
                '--mask-opacity': '0.3333',
            },
        },
        {
            title: <>SDK / API</>,
            infos: [
                {
                    type: 'new',
                    content: '气象雷达倾角',
                },
            ],
            columnSpan: 3,
            rowSpan: 2,
            img: require('./imgs/20251129021014_1.jpg'),
            backgroundSize: 'cover',
            backgroundPosition: '35% 100%',
            // type: 'center',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                // '--mask-height-vertical': '150%',
                // justifyContent: 'flex-end',
                '--mask-opacity': '0.3333',
            },
        },
    ],
};

const cellGroupAircrafts: CellGroupType = {
    name: 'aircrafts',
    title: '机型',
    cells: [
        {
            implemented: false,
            title: 'ATR-42/72-600',
            infos: ['翻新：2024 原生版', '支持生涯模式'],
            columnSpan: 6,
            img: require('./imgs/FSWeekend 2026 LIVE on the FSElite Stage (SATURDAY 21st March 2026).mp4_20260409_020226.590.png'),
            backgroundSize: '133% auto',
            backgroundPosition: '97% 50%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '1',
            },
        },
        {
            implemented: false,
            title: '安东诺夫 AN-2',
            infos: ['翻新：2024 原生版', '支持生涯模式'],
            columnSpan: 6,
            img: require('./imgs/FSWeekend 2026 LIVE on the FSElite Stage (SATURDAY 21st March 2026).mp4_20260409_020221.670.png'),
            backgroundSize: '125% auto',
            backgroundPosition: '0% 92%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                // '--mask-opacity': '0.666',
            },
        },
        {
            implemented: false,
            title: '福克 F.VII',
            infos: ['翻新：2024 原生版', '开发转移到 iniBuilds'],
            columnSpan: 4,
            img: require('./imgs/FSWeekend 2026 LIVE on the FSElite Stage (SATURDAY 21st March 2026).mp4_20260409_020244.397.png'),
            backgroundSize: '133% auto',
            backgroundPosition: '30% 70%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                // '--mask-opacity': '0.666',
            },
        },
        {
            implemented: false,
            title: '马尔凯蒂 S.55',
            infos: ['翻新：2024 原生版'],
            columnSpan: 4,
            img: require('./imgs/FSWeekend 2026 LIVE on the FSElite Stage (SATURDAY 21st March 2026).mp4_20260409_020314.720.png'),
            backgroundSize: '133% auto',
            backgroundPosition: '20% 65%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '200%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.75',
            },
        },
        {
            implemented: false,
            title: 'Latécoère 631',
            infos: ['翻新：2024 原生版'],
            columnSpan: 4,
            img: require('./imgs/FSWeekend 2026 LIVE on the FSElite Stage (SATURDAY 21st March 2026).mp4_20260409_020252.390.png'),
            backgroundSize: '133% auto',
            backgroundPosition: '20% 70%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '200%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.75',
            },
        },
        {
            // implemented: false,
            title: '波音 737 MAX-8',
            infos: ['改进：VNAV & 下滑道逻辑'],
            columnSpan: 6,
            img: require('./imgs/20250326030206_1.jpg'),
            backgroundSize: '200% auto',
            backgroundPosition: '30% 49%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                // '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                // '--mask-opacity': '0.666',
            },
        },
        {
            // implemented: false,
            title: '塞斯纳 208B',
            infos: ['改进：起落架 & 地面物理'],
            columnSpan: 6,
            img: require('./imgs/c208b.jpg'),
            backgroundSize: '175% auto',
            backgroundPosition: '75% 55%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '100%',
                // '--mask-height-horizontal': '100%',
                // '--mask-opacity': '0.666',
            },
        },
        {
            // implemented: false,
            title: '塞斯纳 172',
            infos: [
                {
                    type: 'new',
                    content: '搭载 Avidyne IFD 的型号',
                },
            ],
            columnSpan: 6,
            img: require('./imgs/2026-01-01-23-31-31.png'),
            backgroundSize: '200% auto',
            backgroundPosition: '0% 45%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.5',
            },
        },
        {
            // implemented: false,
            title: '贝尔 407',
            infos: ['开发转移到 iniBuilds'],
            columnSpan: 6,
            img: require('./imgs/683e480751bd3.jpg'),
            backgroundSize: '110% auto',
            backgroundPosition: '0% 55%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                // '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.6667',
            },
        },
    ],
};

const cellGroupAvionics: CellGroupType = {
    name: 'avionics',
    title: '航电',
    cells: [
        {
            // implemented: false,
            title: (
                <>
                    Avidyne
                    <br />
                    IFD 540 / 550
                </>
            ),
            infos: ['向开发者开放'],
            columnSpan: 4,
            img: require('./imgs/2025-12-19／A359 ZPLJ ZPMS 23＞05／A21N RJGG RJBD／PC6T AYGA Aibai AYGW AYWB／XB1 KMHV KLAX／Norden SAR.mp4_20260409_013721.526.png'),
            backgroundSize: '200% auto',
            backgroundPosition: '45% 60%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.666',
            },
        },
        {
            // implemented: false,
            title: <>佳明 G3000 / G5000</>,
            infos: ['改进：VNAV 逻辑', '可显示和过滤直升机坪'],
            columnSpan: 4,
            img: require('./imgs/2025-02-04-03-13-38.png'),
            backgroundSize: '225% auto',
            backgroundPosition: '0% 25%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.5',
            },
        },
        {
            // implemented: false,
            title: (
                <>
                    霍尼韦尔
                    <br />
                    Primus Epic 2
                </>
            ),
            infos: ['改进：VNAV 逻辑'],
            columnSpan: 4,
            img: require('./imgs/20250328235628_1.jpg'),
            backgroundSize: '125% auto',
            backgroundPosition: '0% 75%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                // '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.5',
            },
        },
    ],
};

// Functional Component =======================================================

const ThisPage = extend({ styles })(({ className }) => {
    return (
        <Page
            beta={true}
            footerContent="公测版已实装 & 官方预告内容"
            classNameBody={className}
            infos={[cellGroupGeneral, cellGroupAircrafts, cellGroupAvionics]}
            subtitle={
                <>
                    <small>Sim Update</small> 05
                </>
            }
            subtitleExtra={
                <>
                    <small>+ AAU</small> 04
                </>
            }
        ></Page>
    );
});

export default ThisPage;
