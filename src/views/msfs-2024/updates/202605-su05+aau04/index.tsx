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
                <small>・粒子效果</small>,
                <small>・建筑物、桥梁</small>,
                <small>・航班、船舶</small>,
                <small>・机场停泊车辆</small>,
                <small>・丛林</small>,
            ],
            columnSpan: 5,
            rowSpan: 2,
            img: require('./imgs/20251010232613_1.jpg'),
            backgroundSize: '200% auto',
            backgroundPosition: '55% 65%',
            bgMaskOrientation: 'horizontal',
            style: { '--mask-min-width': '100%' },
        },
        {
            title: <>气流模拟</>,
            infos: [
                '增强：尾流效果',
                '改进：CFD 模拟',
                '调整气流可视化：按颜色区分强度',
                {
                    type: 'new',
                    content: '气流可视化控制界面',
                },
            ],
            columnSpan: 7,
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
                    content: '选项：隐藏绕机检查模式的按键提示',
                },
                {
                    type: 'new',
                    content: '选项：粒子效果质量',
                },
            ],
            columnSpan: 7,
            img: require('./imgs/2025-10-25-00-14-15.png'),
            backgroundSize: 'auto 180%',
            backgroundPosition: '40% 40%',
            bgMaskOrientation: 'vertical',
            // textSize: 'sm',
            style: { '--mask-height-vertical': '100%' },
        },
        {
            title: <>VR</>,
            infos: [{ type: 'new', content: '支持 PSVR2' }, '菜单位置独立保存'],
            columnSpan: 4,
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
            title: <>EFB</>,
            infos: [
                { type: 'new', content: '选项：气压单位' },
                '自动隐藏不可用的 App',
            ],
            columnSpan: 4,
            img: require('./imgs/2025-11-01-01-08-05.png'),
            backgroundSize: '350% auto',
            backgroundPosition: '48% 62%',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: { '--mask-height-vertical': '100%' },
        },
        {
            title: <>多人模式模型匹配</>,
            infos: ['确保旋翼机不匹配固定翼', '按翼展等规格寻找相近机型'],
            columnSpan: 4,
            img: require('./imgs/20251209221937_1.jpg'),
            backgroundSize: '260% auto',
            backgroundPosition: '90% 50%',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: { '--mask-height-vertical': '100%' },
        },
        {
            title: <>飞行员生涯</>,
            infos: ['防止出生时判定坠毁'],
            columnSpan: 4,
            img: require('./imgs/dualsense-edge-sony-playstation-controller-4.webp'),
            backgroundSize: 'auto 120%',
            backgroundPosition: '50% 100%',
            // type: 'center',
            // bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                '--mask-height-vertical': '125%',
                justifyContent: 'flex-end',
            },
        },
        {
            title: <>热点问题修复</>,
            infos: ['多倍帧生成选项', '地标标记'],
            columnSpan: 4,
            img: require('./imgs/20251023023405_1.jpg'),
            backgroundSize: 'auto 400%',
            backgroundPosition: '77.25% 95%',
            // type: 'center',
            // bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                // '--mask-height-vertical': '150%',
                '--mask-opacity': '0',
                justifyContent: 'flex-end',
            },
        },
        {
            title: <>SDK</>,
            infos: [
                {
                    type: 'new',
                    content: 'API：调整气象雷达倾角',
                },
            ],
            columnSpan: 4,
            img: require('./imgs/20251105184957_1.jpg'),
            backgroundSize: 'auto 300%',
            backgroundPosition: '35% 5%',
            // type: 'center',
            // bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                '--mask-height-vertical': '150%',
                justifyContent: 'flex-end',
            },
        },
    ],
};

const cellGroupAircrafts: CellGroupType = {
    name: 'aircrafts',
    title: '机型',
    cells: [
        {
            // implemented: false,
            title: 'ATR-42/72-600',
            infos: ['翻新：2024 原生版', '支持生涯模式'],
            columnSpan: 6,
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
            title: '安东诺夫 AN-2',
            infos: ['翻新：2024 原生版', '支持生涯模式'],
            columnSpan: 6,
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
            title: '福克 F.VII',
            infos: ['翻新：2024 原生版', '开发转移到 iniBuilds'],
            columnSpan: 4,
            img: require('./imgs/Microsoft Flight Simulator 2024 Takes Flight on PlayStation 5  Announce Trailer.mp4_20251105_183703.114.png'),
            backgroundSize: '133% auto',
            backgroundPosition: '10% 50%',
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
            title: '马尔凯蒂 S.55',
            infos: ['翻新：2024 原生版'],
            columnSpan: 4,
            img: require('./imgs/Microsoft Flight Simulator 2024 Takes Flight on PlayStation 5  Announce Trailer.mp4_20251105_183703.114.png'),
            backgroundSize: '133% auto',
            backgroundPosition: '10% 50%',
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
            title: 'Latécoère 631',
            infos: ['翻新：2024 原生版'],
            columnSpan: 4,
            img: require('./imgs/Microsoft Flight Simulator 2024 Takes Flight on PlayStation 5  Announce Trailer.mp4_20251105_183703.114.png'),
            backgroundSize: '133% auto',
            backgroundPosition: '10% 50%',
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
            title: '波音 737 MAX-8',
            infos: ['改进：VNAV & 下滑道逻辑'],
            columnSpan: 6,
            img: require('./imgs/Microsoft Flight Simulator 2024 Takes Flight on PlayStation 5  Announce Trailer.mp4_20251105_183703.114.png'),
            backgroundSize: '133% auto',
            backgroundPosition: '10% 50%',
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
            infos: ['改进：起落架 & 地面交互'],
            columnSpan: 6,
            img: require('./imgs/Microsoft Flight Simulator 2024 Takes Flight on PlayStation 5  Announce Trailer.mp4_20251105_183703.114.png'),
            backgroundSize: '133% auto',
            backgroundPosition: '10% 50%',
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
            title: '塞斯纳 172',
            infos: [
                {
                    type: 'new',
                    content: '搭载 Avidyne IFD 的型号',
                },
            ],
            columnSpan: 6,
            img: require('./imgs/Microsoft Flight Simulator 2024 Takes Flight on PlayStation 5  Announce Trailer.mp4_20251105_183703.114.png'),
            backgroundSize: '133% auto',
            backgroundPosition: '10% 50%',
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
            title: '贝尔 407',
            infos: ['开发转移到 iniBuilds'],
            columnSpan: 6,
            img: require('./imgs/Microsoft Flight Simulator 2024 Takes Flight on PlayStation 5  Announce Trailer.mp4_20251105_183703.114.png'),
            backgroundSize: '133% auto',
            backgroundPosition: '10% 50%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                // '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                // '--mask-opacity': '0.666',
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
                    IFD 540/550
                </>
            ),
            infos: ['开放给第三方'],
            columnSpan: 4,
            img: require('./imgs/Microsoft Flight Simulator 2024 Takes Flight on PlayStation 5  Announce Trailer.mp4_20251105_183703.114.png'),
            backgroundSize: '133% auto',
            backgroundPosition: '10% 50%',
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
            title: <>佳明 G3000/G5000</>,
            infos: ['改进：VNAV 逻辑', '可显示和过滤直升机坪'],
            columnSpan: 4,
            img: require('./imgs/Microsoft Flight Simulator 2024 Takes Flight on PlayStation 5  Announce Trailer.mp4_20251105_183703.114.png'),
            backgroundSize: '133% auto',
            backgroundPosition: '10% 50%',
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
            title: (
                <>
                    霍尼韦尔
                    <br />
                    Primus Epic 2
                </>
            ),
            infos: ['改进：VNAV 逻辑'],
            columnSpan: 4,
            img: require('./imgs/Microsoft Flight Simulator 2024 Takes Flight on PlayStation 5  Announce Trailer.mp4_20251105_183703.114.png'),
            backgroundSize: '133% auto',
            backgroundPosition: '10% 50%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                // '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                // '--mask-opacity': '0.666',
            },
        },
    ],
};

// Functional Component =======================================================

const ThisPage = extend({ styles })(({ className }) => {
    return (
        <Page
            beta={true}
            footerContent="公测版已实装内容"
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
