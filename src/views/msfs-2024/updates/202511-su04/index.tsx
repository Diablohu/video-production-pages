import { extend } from 'koot';

import Page, { type CellGroupType } from '../../';

import styles from './index.module.less';

// ============================================================================

const cellGroupPS5: CellGroupType = {
    name: 'ps5',
    title: (
        <>
            登陆 <em>PlayStation®5</em>
        </>
    ),
    cells: [
        {
            // implemented: false,
            // delayed: true,
            title: <>独立运作</>,
            infos: [
                <>
                    多人模式<em>不互联</em>
                </>,
                <>
                    内置市场<em>不继承</em>
                </>,
            ],
            img: require('./imgs/ps5-pro-lead.webp'),
            backgroundSize: '100% auto',
            backgroundPosition: '100% 20%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-height-vertical': '100%',
                // '--mask-min-width': '120%',
                '--mask-opacity': '0',
            },
        },
    ],
};

const cellGroupGameplay: CellGroupType = {
    name: 'gameplay',
    title: '游戏玩法',
    cells: [
        {
            // implemented: false,
            // delayed: true,
            title: (
                <>
                    <small>新模式</small>红牛航空赛
                </>
            ),
            infos: [],
            img: require('./imgs/Microsoft Flight Simulator 2024 - Announce Trailer - 4K.mkv_20251105_180930.980.png'),
            backgroundSize: '135% auto',
            backgroundPosition: '0% 40%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                // '--mask-height-vertical': '100%',
                // '--mask-min-width': '120%',
            },
        },
        {
            // implemented: false,
            // delayed: true,
            title: (
                <>
                    <small>新模式</small>怪奇物语
                </>
            ),
            infos: [],
            img: require('./imgs/20251209212716_1.jpg'),
            backgroundSize: '250% auto',
            backgroundPosition: '70% 40%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                // '--mask-height-vertical': '100%',
                // '--mask-min-width': '120%',
                '--mask-opacity': '0.5',
            },
        },
        {
            implemented: false,
            // delayed: true,
            title: (
                <>
                    <small>飞行员生涯</small>重型运输
                </>
            ),
            infos: [],
            img: require('./imgs/Microsoft Flight Simulator 2024 - Announce Trailer - 4K.mkv_20251105_181107.581.png'),
            backgroundSize: '115% auto',
            backgroundPosition: '10% 60%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                // '--mask-height-vertical': '100%',
                '--mask-min-width': '120%',
            },
        },
        {
            implemented: false,
            // delayed: true,
            title: (
                <>
                    <small>飞行员生涯</small>eVTOL
                </>
            ),
            infos: [],
            img: require('./imgs/Archer_Midnight.webp'),
            backgroundSize: '200% auto',
            backgroundPosition: '30% 20%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                // '--mask-height-vertical': '100%',
                '--mask-min-width': '120%',
            },
        },
    ],
};

const cellGroupGeneral: CellGroupType = {
    name: 'general',
    title: '综合体验',
    cells: [
        {
            title: <>帧率表现：大改底层</>,
            infos: [
                '改进：CPU 多线程',
                '改进：物理运算效率',
                '改进：机场显存占用',
                '改进：内存垃圾回收',
            ],
            columnSpan: 10,
            img: require('./imgs/20251010232613_1.jpg'),
            backgroundSize: '200% auto',
            backgroundPosition: '55% 65%',
            bgMaskOrientation: 'horizontal',
            style: { '--mask-min-width': '100%' },
        },
        {
            title: <>城市夜景：全面重做</>,
            infos: [
                '改进：根除褐色蒙层',
                '改进：更多地面细节',
                '修正：过曝建筑',
            ],
            columnSpan: 10,
            img: require('./imgs/20251031213838_1.jpg'),
            backgroundSize: '125% auto',
            backgroundPosition: '50% 100%',
            bgMaskOrientation: 'vertical',
            style: {
                // '--mask-min-width': '200%',
                '--mask-opacity': '0.75',
            },
        },
        {
            // implemented: false,
            title: <>界面交互</>,
            infos: ['改进：主菜单流畅度', '改进：市场交互响应'],
            columnSpan: 5,
            img: require('./imgs/2025-10-25-00-14-15.png'),
            backgroundSize: 'auto 180%',
            backgroundPosition: '40% 40%',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: { '--mask-height-vertical': '100%' },
        },
        {
            title: <>画面渲染</>,
            infos: ['修正：外部视角阴影'],
            columnSpan: 5,
            img: require('./imgs/2025-11-05-18-48-43.png'),
            backgroundSize: 'auto 225%',
            backgroundPosition: '30% 70%',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                '--mask-height-vertical': '100%',
                // '--mask-min-width': '150%',
                '--mask-opacity': '1',
            },
        },
        {
            title: <>多人模式</>,
            infos: [{ type: 'new', content: '简易模型' }],
            columnSpan: 5,
            img: require('./imgs/2025-11-01-01-08-05.png'),
            backgroundSize: '350% auto',
            backgroundPosition: '48% 62%',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: { '--mask-height-vertical': '100%' },
        },
        {
            title: <>飞行员形象</>,
            infos: [
                { type: 'new', content: '红牛竞赛服' },
                { type: 'new', content: '怪奇物语主题' },
            ],
            columnSpan: 5,
            img: require('./imgs/20251209221937_1.jpg'),
            backgroundSize: '260% auto',
            backgroundPosition: '90% 50%',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: { '--mask-height-vertical': '100%' },
        },
        {
            title: <>手柄外设</>,
            infos: [{ type: 'new', content: 'PS5 DS 手柄' }, '支持动态扳机'],
            columnSpan: 4,
            img: require('./imgs/dualsense-edge-sony-playstation-controller-4.webp'),
            backgroundSize: 'auto 120%',
            backgroundPosition: '50% 100%',
            type: 'center',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                '--mask-height-vertical': '125%',
                justifyContent: 'flex-end',
            },
        },
        {
            title: <>内置 ATC</>,
            infos: ['修正：空白选项'],
            columnSpan: 4,
            img: require('./imgs/20251023023405_1.jpg'),
            backgroundSize: 'auto 400%',
            backgroundPosition: '77.25% 95%',
            type: 'center',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                // '--mask-height-vertical': '150%',
                '--mask-opacity': '0',
                justifyContent: 'flex-end',
            },
        },
        {
            title: <>内置 EFB</>,
            infos: ['修正：中文乱码', '优化：计划页交互'],
            columnSpan: 4,
            img: require('./imgs/20251105184957_1.jpg'),
            backgroundSize: 'auto 300%',
            backgroundPosition: '35% 5%',
            type: 'center',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                '--mask-height-vertical': '150%',
                justifyContent: 'flex-end',
            },
        },
        {
            title: <>插件管理</>,
            infos: [{ type: 'new', content: '2024 专用目录' }],
            columnSpan: 4,
            img: require('./imgs/2025-10-25-03-03-03.png'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '50% 85%',
            type: 'center',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                '--mask-height-vertical': '75%',
                justifyContent: 'flex-end',
            },
        },
        {
            title: <>辅助选项</>,
            infos: [{ type: 'new', content: '直升机涡环保护' }],
            columnSpan: 4,
            img: require('./imgs/Microsoft Flight Simulator  Local Legend Eurocopter EC135.mkv_20251105_183054.301.png'),
            backgroundSize: '300% auto',
            backgroundPosition: '55% 65%',
            type: 'center',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                '--mask-height-vertical': '75%',
                justifyContent: 'flex-end',
            },
        },
    ],
};

const cellGroupAircrafts: CellGroupType = {
    name: 'aircrafts',
    title: '机型 / 航电',
    cells: [
        {
            // implemented: false,
            title: (
                <>
                    <small>免费赠送</small>BOOM XB-1
                </>
            ),
            infos: ['超音速实验机'],
            columnSpan: 1,
            img: require('./imgs/Microsoft Flight Simulator 2024 Takes Flight on PlayStation 5  Announce Trailer.mp4_20251105_183703.114.png'),
            backgroundSize: '133% auto',
            backgroundPosition: '10% 50%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                // '--mask-opacity': '0.666',
            },
        },
        {
            // implemented: false,
            title: (
                <>
                    <small>免费赠送</small>贝尔 UH-1H
                </>
            ),
            infos: ['经典直升机'],
            columnSpan: 1,
            img: require('./imgs/Microsoft Flight Simulator 2024 Stranger Things Expansion.mkv_20251209_214528.799.png'),
            backgroundSize: '600% auto',
            backgroundPosition: '40% 20%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                // '--mask-opacity': '0.666',
            },
        },
        {
            // implemented: false,
            title: <>所有机型：超多修正</>,
            // infos: ['超多修正'],
            columnSpan: 2,
            img: require('./imgs/2025-10-27-14-11-43.png'),
            backgroundSize: '300% auto',
            backgroundPosition: '70% 25%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.666',
            },
        },
        {
            title: <>空客大飞机</>,
            infos: ['进驻飞行员生涯'],
            img: require('./imgs/20251121232729_1.jpg'),
            backgroundSize: '300% auto',
            backgroundPosition: '37.5% 70%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '175%',
                // '--mask-height-horizontal': '100%',
                // '--mask-opacity': '1',
            },
        },
        {
            title: <>波音大飞机</>,
            infos: ['支持载入巡航风信息'],
            img: require('./imgs/Microsoft Flight Simulator 2024 Takes Flight on PlayStation 5  Announce Trailer.mp4_20251105_183916.308.png'),
            backgroundSize: '200% auto',
            backgroundPosition: '17% 50%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '175%',
                // '--mask-height-horizontal': '100%',
                // '--mask-opacity': '0.666',
            },
        },
        {
            // implemented: false,
            title: <>波音 787-10</>,
            infos: ['完善：3D 模型'],
            img: require('./imgs/353boeing-10_web.webp'),
            backgroundSize: '125% auto',
            backgroundPosition: '50% 50%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '175%',
            },
        },
        {
            // implemented: false,
            title: <>波音 747 变体</>,
            infos: ['完善：3D 模型'],
            img: require('./imgs/Boeing,_N780BA,_B747-409(LCF)_Dreamlifter_-_PAE_(19833251496).jpg'),
            backgroundSize: '120% auto',
            backgroundPosition: '70% 50%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '175%',
            },
        },
        {
            // implemented: false,
            title: <>空客 A400M</>,
            infos: ['修正：冷舱轮挡'],
            img: require('./imgs/20241224235006_1.jpg'),
            backgroundSize: '200% auto',
            backgroundPosition: '20% 80%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '175%',
            },
        },
        {
            implemented: false,
            title: <>空直 H225</>,
            infos: ['完善：3D 模型'],
            img: require('./imgs/airbus-h225-helicopter-5-1024x683.jpg'),
            backgroundSize: '108% auto',
            backgroundPosition: '0% 55%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '100%',
                '--mask-opacity': '0.666',
            },
        },
        {
            // implemented: false,
            title: <>佳明系列航电</>,
            infos: ['修正：CRS 旋钮'],
            columnSpan: 2,
            img: require('./imgs/20251025012906_1.jpg'),
            backgroundSize: '150% auto',
            backgroundPosition: '100% 80%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                // '--mask-opacity': '0.5',
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
            infos={[
                cellGroupPS5,
                cellGroupGameplay,
                cellGroupGeneral,
                cellGroupAircrafts,
            ]}
            subtitle={
                <>
                    <small>Sim Update</small> 04
                </>
            }
        ></Page>
    );
});

export default ThisPage;
