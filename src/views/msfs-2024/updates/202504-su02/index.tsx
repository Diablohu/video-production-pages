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
                    <small>综合改进</small>风挡 & 玻璃
                </>
            ),
            infos: ['反光、反射、雨水'],
            img: require('./imgs/2025-02-04-03-13-22.png'),
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
            title: <>波音 737 MAX-8</>,
            infos: ['应答机支持输入', '调整非仪表屏幕亮度'],
            img: require('./imgs/c185f.png'),
            backgroundSize: 'auto 190%',
            backgroundPosition: '25% 100%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '100%',
                '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.666',
            },
        },
        {
            title: <>A-10 雷电 II</>,
            infos: ['添加机炮'],
            img: require('./imgs/c185f.png'),
            backgroundSize: 'auto 190%',
            backgroundPosition: '25% 100%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '100%',
                '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.666',
            },
        },
        {
            title: <>Primus Epic 2</>,
            infos: [
                {
                    type: 'new',
                    content: '垂直剖面 VSD',
                },
            ],
            img: require('./imgs/20250329003241_1.jpg'),
            backgroundSize: 'auto 700%',
            backgroundPosition: '68% 73%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '100%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.5',
            },
        },
        {
            title: <></>,
            infos: ['预留……'],
            img: require('./imgs/c185f.png'),
            backgroundSize: 'auto 190%',
            backgroundPosition: '25% 100%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '100%',
                '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.666',
                justifyContent: 'center',
                paddingBottom: '0',
            },
        },
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
                    content: '玩家 & 航班可产生尾流',
                },
                '新选项：尾流可视化',
                '新选项：尾流模拟开关',
            ],
            columnSpan: 3,
            img: require('./imgs/20250203012746_1.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '50% 55%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '150%',
            },
        },
        {
            title: <>内置市场</>,
            infos: [
                {
                    type: 'new',
                    content: '限时租赁',
                },
                {
                    type: 'new',
                    content: '赠礼购买',
                },
            ],
            columnSpan: 3,
            img: require('./imgs/20241026220555_1.jpg'),
            backgroundSize: 'auto 300%',
            backgroundPosition: '40% 70%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '100%',
            },
        },
        {
            title: <>帧率性能优化</>,
            infos: ['排查 3D 素材显存消耗', '改进 LOD 切换算法'],
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
            infos: ['修正工具栏交互', '修正 EFB 交互'],
            columnSpan: 2,
            img: require('./imgs/20250203012746_1.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '50% 55%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '200%',
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
                    content: '选项自动保存',
                },
                '排版优化',
                '键入不再触发游戏操作',
            ],
            columnSpan: 2,
            rowSpan: 2,
            img: require('./imgs/20250203012746_1.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '50% 55%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '200%',
            },
        },
        {
            title: <>世界地图</>,
            infos: [
                {
                    type: 'new',
                    content: '水上机场过滤',
                },
                '确保机场可搜索',
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
            title: <>全球机场</>,
            infos: [
                '翻新数据库',
                {
                    type: 'new',
                    content: '大兴、云冈、……',
                },
            ],
            columnSpan: 2,
            img: require('./imgs/20250328214822_1.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '35% 50%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '200%',
            },
        },
        {
            title: <>画面</>,
            infos: [
                {
                    type: 'new',
                    content: '自动曝光系数',
                },
                '调整手电自动开关规则',
            ],
            columnSpan: 2,
            img: require('./imgs/20241226022349_1.jpg'),
            backgroundSize: 'auto 500%',
            backgroundPosition: '60% 55%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '125%',
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
            img: require('./imgs/20250203012746_1.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '50% 55%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '200%',
            },
        },
        {
            title: <>按键绑定</>,
            infos: [
                {
                    type: 'new',
                    content: '导入 & 导出配置',
                },
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
            infos: ['调整绿植生成规则'],
            columnSpan: 2,
            img: require('./imgs/WU19_MSFS2024_Screenshots_02.jpg'),
            backgroundSize: '150% auto',
            backgroundPosition: '40% 65%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '125%',
                justifyContent: 'center',
                paddingBottom: '0',
            },
        },
        {
            title: <></>,
            infos: ['调整水岸结冰效果'],
            columnSpan: 2,
            img: require('./imgs/20250203012746_1.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '50% 55%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '200%',
                justifyContent: 'center',
                paddingBottom: '0',
            },
        },
        {
            title: <></>,
            infos: ['更正字幕播放速度'],
            columnSpan: 2,
            img: require('./imgs/20240803041415_1.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '30% 45%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
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
            title: <>任务过滤器</>,
            infos: [
                {
                    type: 'new',
                    content: '任务类型过滤',
                },
                {
                    type: 'new',
                    content: '执飞机型过滤',
                },
            ],
            rowSpan: 2,
            img: require('./imgs/20241124224853_1.jpg'),
            backgroundSize: 'auto 200%',
            backgroundPosition: '60% 55%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
            },
        },
        {
            title: <>打工任务</>,
            infos: ['允许调整燃油量'],
            rowSpan: 2,
            img: require('./imgs/20250206021031_1.jpg'),
            backgroundSize: '150% auto',
            backgroundPosition: '50% 40%',
            style: {
                '--mask-height-vertical': '550%',
            },
        },
        {
            title: <></>,
            infos: ['预留……'],
            img: require('./imgs/20250206021031_1.jpg'),
            backgroundSize: '150% auto',
            backgroundPosition: '50% 40%',
            style: {
                '--mask-height-vertical': '550%',
                justifyContent: 'center',
                paddingBottom: '0',
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
            footerContent="公测版已实装 & 官方预告内容"
            classNameBody={className}
            infos={[cellGroupAircrafts, cellGroupGeneral, cellGroupCareer]}
            subtitle={
                <>
                    <small>Sim Update</small> 02
                </>
            }
        ></Page>
    );
});

export default ThisPage;
