import { extend } from 'koot';

import Page, { type CellGroupType } from '../../';

import styles from './index.module.less';

// ============================================================================

const cellGroupAircrafts: CellGroupType = {
    name: 'aircrafts',
    title: '机型 / 航电',
    cells: [
        {
            title: (
                <>
                    <small>综合改进</small>
                    <em>风挡 & 玻璃</em>
                </>
            ),
            infos: ['反光、反射、雨滴'],
            img: require('./imgs/2025-02-04-03-13-22.png'),
            columnSpan: 3,
            backgroundSize: 'auto 175%',
            backgroundPosition: '0% 70%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                // '--mask-opacity': '0.666',
            },
        },
        {
            title: (
                <>
                    <small>综合改进</small>
                    <em>桨叶视效</em>
                </>
            ),
            infos: ['反桨尘土、水花'],
            img: require('./imgs/20250403234355_1.jpg'),
            columnSpan: 3,
            backgroundSize: 'auto 150%',
            backgroundPosition: '0% 95%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                // '--mask-opacity': '0.666',
            },
        },
        {
            title: (
                <>
                    <small>G3000 & G5000</small>
                </>
            ),
            infos: [
                {
                    type: 'new',
                    content: '电子航图',
                },
                {
                    type: 'new',
                    content: '修压提醒',
                },
            ],
            img: require('./imgs/20250401040817_1.jpg'),
            columnSpan: 2,
            backgroundSize: 'auto 250%',
            backgroundPosition: '39% 30%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-height-vertical': '100%',
                '--mask-opacity': '0.75',
                justifyContent: 'bottom',
                alignItems: 'center',
                paddingLeft: '0',
                textAlign: 'center',
            },
        },
        {
            title: (
                <>
                    <small>Primus Epic 2</small>
                </>
            ),
            infos: [
                {
                    type: 'new',
                    content: '垂直剖面 VSD',
                },
                {
                    type: 'new',
                    content: '近地警告 GPWS',
                },
            ],
            img: require('./imgs/20250329003241_1.jpg'),
            columnSpan: 2,
            backgroundSize: 'auto 300%',
            backgroundPosition: '75% 85%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-height-vertical': '75%',
                '--mask-opacity': '0.5',
                justifyContent: 'bottom',
                alignItems: 'center',
                paddingLeft: '0',
                textAlign: 'center',
            },
        },
        {
            title: (
                <>
                    <small>波音 787-10</small>
                </>
            ),
            infos: [
                {
                    type: 'new',
                    content: '垂直剖面 VSD',
                },
            ],
            img: require('./imgs/Microsoft Flight Simulator 2024 2025_5_23 21_54_48.png'),
            columnSpan: 2,
            backgroundSize: 'auto 200%',
            backgroundPosition: '64% 100%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-height-vertical': '75%',
                '--mask-opacity': '0.5',
                justifyContent: 'bottom',
                alignItems: 'center',
                paddingLeft: '0',
                textAlign: 'center',
            },
        },
        {
            title: (
                <>
                    <small>奖状 CJ4 & 经度</small>
                </>
            ),
            infos: [
                {
                    type: 'new',
                    content: '电子检查单',
                },
            ],
            img: require('./imgs/c25c_checklist.png'),
            columnSpan: 2,
            backgroundSize: 'auto 550%',
            backgroundPosition: '58% 23%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
                '--mask-opacity': '1',
                justifyContent: 'bottom',
                alignItems: 'center',
                paddingLeft: '0',
                textAlign: 'center',
            },
        },
        {
            title: (
                <>
                    <small>西锐 VisionJet</small>
                </>
            ),
            infos: [
                {
                    type: 'new',
                    content: '检查单快捷切换',
                },
            ],
            img: require('./imgs/2025-02-04-04-34-29.png'),
            columnSpan: 2,
            backgroundSize: 'auto 650%',
            backgroundPosition: '56% 54%',
            bgMaskOrientation: 'vertical',
            // textSize: 'sm',
            style: {
                '--mask-height-vertical': '50%',
                '--mask-opacity': '0.5',
                justifyContent: 'bottom',
                alignItems: 'center',
                paddingLeft: '0',
                textAlign: 'center',
            },
        },
        {
            title: (
                <>
                    <small>波音 737 MAX-8</small>
                </>
            ),
            infos: ['应答机支持输入'],
            img: require('../202502-su01/imgs/2025-01-03-02-23-13.png'),
            columnSpan: 2,
            backgroundSize: 'auto 500%',
            backgroundPosition: '34% 46%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
                '--mask-opacity': '0.75',
                justifyContent: 'bottom',
                alignItems: 'center',
                paddingLeft: '0',
                textAlign: 'center',
            },
        },
        // {
        //     title: (
        //         <>
        //             <small>萨博340B</small>
        //         </>
        //     ),
        //     infos: ['超多修正'],
        //     img: require('./imgs/SP-KPC_2019-04-22_130550.jpg'),
        //     backgroundSize: '200% auto',
        //     backgroundPosition: '0% 45%',
        //     bgMaskOrientation: 'horizontal',
        //     // textSize: 'sm',
        //     style: {
        //         // '--mask-min-width': '133%',
        //         '--mask-opacity': '0.5',
        //         justifyContent: 'center',
        //         paddingBottom: '0',
        //     },
        // },
    ],
};

const cellGroupGeneral: CellGroupType = {
    name: 'general',
    title: '综合体验',
    cells: [
        {
            title: <>尾流模拟</>,
            infos: [
                {
                    type: 'new',
                    content: '玩家 & 航班产生尾流',
                },
                '新选项：尾流可视化',
                '新选项：尾流模拟开关',
            ],
            columnSpan: 3,
            img: require('./imgs/leading-edge-technologies.jpg'),
            backgroundSize: '300% auto',
            backgroundPosition: '32% 30%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '125%',
            },
        },
        {
            title: <>全球机场</>,
            infos: [
                '翻新：导航和程序数据',
                {
                    type: 'new',
                    content: '大兴、天河、萧山、……',
                },
                '插件机场不会污染 LIDO 航图',
            ],
            columnSpan: 3,
            img: require('./imgs/20250328214822_1.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '15% 50%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '200%',
            },
        },
        // {
        //     implemented: false,
        //     title: <>内置市场</>,
        //     infos: [
        //         {
        //             type: 'new',
        //             content: '限时租赁',
        //         },
        //         {
        //             type: 'new',
        //             content: '赠礼购买',
        //         },
        //     ],
        //     columnSpan: 3,
        //     img: require('./imgs/20241026220555_1.jpg'),
        //     backgroundSize: 'auto 300%',
        //     backgroundPosition: '40% 70%',
        //     bgMaskOrientation: 'horizontal',
        //     style: {
        //         // '--mask-min-width': '100%',
        //     },
        // },
        {
            title: <>帧率性能优化</>,
            infos: ['优化：3D 素材显存消耗', '改进：LOD 切换算法'],
            columnSpan: 2,
            img: require('./imgs/2025-01-19-22-38-54.png'),
            backgroundSize: 'auto 200%',
            backgroundPosition: '25% 80%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '150%',
            },
        },
        {
            title: <>VR 模式体验</>,
            infos: ['修正交互：工具栏', '修正交互：EFB'],
            columnSpan: 2,
            img: require('./imgs/vr.webp'),
            backgroundSize: 'auto 220%',
            backgroundPosition: '0% 40%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '175%',
                '--mask-opacity': '1',
            },
        },
        {
            title: <>EFB</>,
            infos: [
                {
                    type: 'new',
                    content: '暗色航图',
                },
                {
                    type: 'new',
                    content: '自动保存设置',
                },
                {
                    type: 'new',
                    content: '飞行计划页翻新',
                },
                {
                    type: 'new',
                    content: '手动刷新气象',
                },
                '优化：自动航线算法',
                '设置配载必生效',
                '键入不再触发游戏操作',
            ],
            columnSpan: 2,
            rowSpan: 2,
            img: require('./imgs/2025-03-27／SU02 Beta 1／C208B LPPS LPMA.mp4_20250331_024535.647.png'),
            backgroundSize: 'auto 110%',
            backgroundPosition: '20% 50%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '175%',
                // '--mask-min-height': '500%',
                '--mask-opacity': '1',
            },
        },
        {
            title: <>世界地图</>,
            infos: [
                {
                    type: 'new',
                    content: '水上机场过滤器',
                },
                '确保机场搜索功能可用',
            ],
            columnSpan: 2,
            img: require('../../gameplay/imgs/earth.jpg'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '50% 35%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '200%',
            },
        },
        {
            title: <>视角控制</>,
            infos: [
                // {
                //     type: 'new',
                //     content: '自动曝光系数',
                // },
                '优化：重置视角操作',
                '修正：绑定视角操作',
            ],
            columnSpan: 2,
            img: require('./imgs/20250326032840_1.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '0% 60%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '125%',
                '--mask-opacity': '0.5',
            },
        },
        {
            title: <>渲染技术</>,
            infos: [
                {
                    type: 'new',
                    content: 'FSR 3.1 帧生成',
                },
                {
                    type: 'new',
                    content: 'DLSS 4 多倍帧生成',
                },
            ],
            columnSpan: 2,
            img: require('./imgs/2025-02-23-03-44-52.png'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '20% 90%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '175%',
            },
        },
        {
            title: <>选项设置</>,
            infos: [
                {
                    type: 'new',
                    content: '自动曝光补偿',
                },
                '允许减小滚动缓存',
            ],
            columnSpan: 2,
            img: require('./imgs/20241226022349_1.jpg'),
            backgroundSize: '400% auto',
            backgroundPosition: '59% 52%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '150%',
            },
        },
        {
            title: <>按键绑定</>,
            infos: [
                {
                    type: 'new',
                    content: '导入 & 导出配置',
                },
                '为机型特定绑定增设大类',
            ],
            columnSpan: 2,
            img: require('./imgs/20241123034224_1.jpg'),
            backgroundSize: 'auto 200%',
            backgroundPosition: '10% 95%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '150%',
            },
        },
        {
            title: <></>,
            infos: ['调整：绿植生成规则'],
            columnSpan: 2,
            img: require('./imgs/WU19_MSFS2024_Screenshots_02.jpg'),
            backgroundSize: '150% auto',
            backgroundPosition: '40% 65%',
            bgMaskOrientation: 'horizontal',
            // textSize: 'sm',
            style: {
                '--mask-min-width': '125%',
                justifyContent: 'center',
                paddingBottom: '0',
            },
        },
        {
            title: <></>,
            infos: ['调整：水岸结冰效果'],
            columnSpan: 2,
            img: require('./imgs/2025-01-01-02-17-13.png'),
            backgroundSize: '300% auto',
            backgroundPosition: '0% 55%',
            bgMaskOrientation: 'horizontal',
            // textSize: 'sm',
            style: {
                '--mask-min-width': '100%',
                '--mask-opacity': '0.5',
                justifyContent: 'center',
                paddingBottom: '0',
            },
        },
        {
            title: <></>,
            infos: ['更正：字幕播放速度'],
            columnSpan: 2,
            img: require('./imgs/20240803041415_1.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '30% 45%',
            bgMaskOrientation: 'horizontal',
            // textSize: 'sm',
            style: {
                '--mask-min-width': '125%',
                justifyContent: 'center',
                paddingBottom: '0',
            },
        },
    ],
};

const cellGroupCareer: CellGroupType = {
    name: 'career',
    title: '飞行员生涯',
    cells: [
        {
            title: <></>,
            infos: [
                {
                    type: 'new',
                    content: '任务过滤器',
                },
                '打工任务可调整燃油',
            ],
            rowSpan: 2,
            img: require('./imgs/20241124224853_1.jpg'),
            backgroundSize: 'auto 450%',
            backgroundPosition: '41% 47%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '125%',
            },
        },
        // {
        //     implemented: false,
        //     title: <>空客大型机</>,
        //     infos: ['进驻职业生涯'],
        //     img: require('./imgs/20241218012225_1.jpg'),
        //     backgroundSize: 'auto 140%',
        //     backgroundPosition: '0% 60%',
        //     bgMaskOrientation: 'horizontal',
        //     style: {
        //         // '--mask-height-vertical': '100%',
        //         '--mask-min-width': '100%',
        //     },
        // },
        // {
        //     title: <>打工任务</>,
        //     infos: ['允许调整燃油量'],
        //     img: require('./imgs/2025-01-10-22-51-45.png'),
        //     backgroundSize: 'auto 200%',
        //     backgroundPosition: '10% 65%',
        //     bgMaskOrientation: 'horizontal',
        //     style: {
        //         // '--mask-height-vertical': '100%',
        //         '--mask-min-width': '100%',
        //     },
        // },
        // {
        //     title: <></>,
        //     infos: [
        //         <em
        //             style={{
        //                 fontStyle: 'normal',
        //                 lineHeight: '1.4em',
        //             }}
        //         >
        //             罗宾逊 R-66
        //             <br />
        //             修正停机检查
        //         </em>,
        //     ],
        //     img: require('./imgs/Microsoft Flight Simulator 2024 – Xbox Games Showcase 2024.mp4_20250407_111449.930.jpg'),
        //     backgroundSize: '190% auto',
        //     backgroundPosition: '0% 24%',
        //     bgMaskOrientation: 'horizontal',
        //     style: {
        //         '--mask-min-width': '150%',
        //         justifyContent: 'center',
        //         paddingBottom: '0',
        //     },
        // },
    ],
};

const cellGroupMarketplace: CellGroupType = {
    name: 'marketplace',
    title: '内置市场',
    cells: [
        {
            title: (
                <>
                    <small>部分商品已支持</small>
                </>
            ),
            infos: [
                {
                    type: 'new',
                    content: '限时租赁',
                },
                // {
                //     type: 'new',
                //     content: '赠礼购买',
                // },
            ],
            columnSpan: 3,
            img: require('./imgs/20241026220555_1.jpg'),
            backgroundSize: 'auto 400%',
            backgroundPosition: '20% 68%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '125%',
            },
        },
    ],
};

// Functional Component =======================================================

const ThisPage = extend({
    styles,
})(({ className }) => {
    return (
        <Page
            footerContent="正式更新亮点内容"
            classNameBody={className}
            infos={[
                cellGroupGeneral,
                cellGroupAircrafts,
                cellGroupCareer,
                cellGroupMarketplace,
            ]}
            subtitle={
                <>
                    <small>Sim Update</small> 02
                </>
            }
        ></Page>
    );
});

export default ThisPage;
