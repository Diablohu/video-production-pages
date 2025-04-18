import { extend } from 'koot';

import Page, { type CellGroupType } from '../../';

import styles from './index.module.less';

// ============================================================================

const cellGroupLeft: CellGroupType = {
    name: 'marketplace',
    title: '内置市场',
    cells: [
        {
            title: <>正式开放</>,
            infos: [
                '免费赠送：塞斯纳185F',
                '免费赠送：CAP-4',
                '旧版插件自动继承',
                '新版插件可选升级',
            ],
            // rowSpan: 3,
            columnSpan: 2,
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
        // {
        //     title: <>新方式：租赁</>,
        //     infos: ['购买时补差价'],
        //     img: require('./imgs/20241201000704_1.jpg'),
        //     backgroundSize: '150% auto',
        //     backgroundPosition: '0 40%',
        //     bgMaskOrientation: 'horizontal',
        //     style: {
        //         '--mask-min-width': '100%',
        //         '--mask-height-horizontal': '100%',
        //     },
        // },
        // {
        //     title: <>新方式：赠礼</>,
        //     infos: ['为好友购买'],
        //     img: require('./imgs/20241026220555_1.jpg'),
        //     backgroundSize: '275% auto',
        //     backgroundPosition: '27% 65%',
        //     bgMaskOrientation: 'horizontal',
        //     style: {
        //         '--mask-min-width': '100%',
        //         '--mask-height-horizontal': '200%',
        //     },
        // },
        {
            title: <>世界更新#19</>,
            infos: ['巴西、苏里南、圭亚那、法属圭亚那'],
            columnSpan: 2,
            img: require('./imgs/MSFS2024_WU19_Rio_12K_300dpi.png'),
            backgroundSize: '275% auto',
            backgroundPosition: '0% 37%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '100%',
            },
        },
        {
            title: <>全新打分机制</>,
            infos: ['技术质量 & 真实度'],
            img: require('./imgs/20250118212354_1.jpg'),
            backgroundSize: 'auto 200%',
            backgroundPosition: '15% 100%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '500%',
            },
        },
        {
            title: <>豪华版内容</>,
            infos: ['部分提供零售'],
            img: require('./imgs/2025-01-11-04-33-09.png'),
            backgroundSize: '700% auto',
            backgroundPosition: '28% 32%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '110%',
                '--mask-height-horizontal': '300%',
            },
        },
        {
            title: '我的储藏库',
            infos: ['开关插件无需重启'],
            img: require('./imgs/20241123034224_1.jpg'),
            backgroundSize: 'auto 225%',
            backgroundPosition: '30% 75%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '300%',
            },
        },
        {
            title: '插件平台',
            infos: ['优化2020兼容环境'],
            img: require('./imgs/20241214235143_1.jpg'),
            backgroundSize: '125% auto',
            backgroundPosition: '20% 55%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '300%',
            },
        },
    ],
};

const cellGroupAircrafts: CellGroupType = {
    name: 'aircrafts',
    title: '机型 / 航电',
    cells: [
        {
            title: (
                <>
                    <small>PC-12 NGx / PC-24</small>Primus Epic 2
                </>
            ),
            infos: ['部分设置可自动保存', '实装：MFD查看航图', '多项交互修正'],
            img: require('./imgs/20250203012746_1.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '50% 55%',
            bgMaskOrientation: 'horizontal',
            rowSpan: 2,
            style: {
                '--mask-min-width': '100%',
            },
        },
        {
            title: '旋翼机',
            infos: ['修复：平台周围地效突变', '修复：飞行开始时无故弹跳'],
            img: require('./imgs/2025-02-06-02-06-12.png'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '40% 60%',
            // bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '100%',
                '--mask-height-vertical': '250%',
            },
        },
        {
            title: '空客大型机',
            infos: ['修复：结束飞行崩溃'],
            img: require('./imgs/20241217220519_1.jpg'),
            backgroundSize: '150% auto',
            backgroundPosition: '0% 70%',
            // bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '100%',
                '--mask-height-vertical': '100%',
            },
        },
    ],
};

const cellGroupAircrafts2: CellGroupType = {
    name: 'aircrafts-2',
    cells: [
        // {
        //     title: '空客大型机',
        //     infos: ['修复：结束飞行崩溃'],
        //     img: require('./imgs/20241217220519_1.jpg'),
        //     backgroundSize: 'auto 175%',
        //     backgroundPosition: '45% 95%',
        //     textSize: 'sm',
        //     // bgMaskOrientation: 'horizontal',
        //     // style: {
        //     //     '--mask-min-width': '100%',
        //     //     '--mask-height-horizontal': '200%',
        //     // },
        // },
        {
            title: '佳明 G1000',
            infos: ['修复：MFD“圆点”'],
            img: require('./imgs/20241129235137_1.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '42% 90%',
            textSize: 'sm',
            // bgMaskOrientation: 'horizontal',
            // style: {
            //     '--mask-min-width': '100%',
            //     '--mask-height-horizontal': '200%',
            // },
        },
        // {
        //     title: '波音 737 MAX-8',
        //     infos: ['更正：减推力起飞', '更正：爬升推力'],
        //     img: require('./imgs/2025-01-03-02-23-13.png'),
        //     backgroundSize: 'auto 800%',
        //     backgroundPosition: '33% 48%',
        //     textSize: 'sm',
        //     // bgMaskOrientation: 'horizontal',
        //     // style: {
        //     //     '--mask-min-width': '100%',
        //     //     '--mask-height-horizontal': '200%',
        //     // },
        // },
        {
            title: 'PC-12 NGx',
            infos: ['实装：机舱加压', '修复：自动油门'],
            img: require('./imgs/20241221001654_1.jpg'),
            backgroundSize: 'auto 400%',
            backgroundPosition: '50% 71%',
            textSize: 'sm',
            // bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '100%',
                // '--mask-height-horizontal': '200%',
                '--mask-opacity': '0.7',
            },
        },
        {
            title: 'SF50 VisionJet',
            infos: ['实装：电子检查单'],
            img: require('./imgs/2025-02-04-04-24-47.png'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '22% 90%',
            textSize: 'sm',
            // bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '100%',
                // '--mask-height-horizontal': '200%',
                '--mask-opacity': '0.5',
            },
        },
        {
            title: '其他大量机型改进',
            infos: ['请参阅补丁说明', '涉及几乎所有机型'],
            img: require('./imgs/2025-01-03-02-23-13.png'),
            backgroundSize: 'auto 800%',
            backgroundPosition: '33% 48%',
            textSize: 'sm',
            // bgMaskOrientation: 'horizontal',
            // style: {
            //     '--mask-min-width': '100%',
            //     '--mask-height-horizontal': '200%',
            // },
        },
    ],
};

const cellGroupRight: CellGroupType = {
    name: 'other',
    title: '更多优化',
    cells: [
        {
            title: 'EFB',
            infos: ['支持滚轮缩放航图', '可查询跑道磁航向'],
            img: require('./imgs/20250206021031_1.jpg'),
            backgroundSize: '150% auto',
            backgroundPosition: '50% 40%',
            // bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            type: 'center',
            style: {
                // '--mask-min-width': '100%',
                // '--mask-height-horizontal': '500%',
                '--mask-height-vertical': '550%',
            },
        },
        {
            title: '飞行员生涯',
            infos: ['修复：襟翼超速', '修复：乘客外挂', '修复：本地午夜报错'],
            img: require('./imgs/20241124224853_1.jpg'),
            backgroundSize: 'auto 450%',
            backgroundPosition: '48% 46%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            type: 'center',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '300%',
            },
        },
        {
            title: '自由飞行',
            infos: [
                '修复：多人模式',
                '自选时间解绑历史气象',
                '自定气象自动保存',
            ],
            img: require('./imgs/2025-01-02-05-00-44.png'),
            backgroundSize: '150% auto',
            backgroundPosition: '50% 65%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            type: 'center',
            style: {
                '--mask-min-width': '0',
                '--mask-height-horizontal': '0',
            },
        },
        {
            title: '其他',
            infos: [
                '修复：建筑“峭壁”材质',
                '修复：飞机注册号失效',
                '修复：按键绑定轴反馈',
            ],
            img: require('./imgs/2025-02-04-04-34-29.png'),
            backgroundSize: '150% auto',
            backgroundPosition: '50% 50%',
            // bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            type: 'center',
            style: {
                // '--mask-min-width': '100%',
                // '--mask-height-horizontal': '500%',
                '--mask-height-vertical': '150%',
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
            updateDate={true}
            classNameBody={className}
            infos={[
                cellGroupLeft,
                cellGroupAircrafts,
                cellGroupAircrafts2,
                cellGroupRight,
            ]}
            subtitle={
                <>
                    <small>Sim Update</small> 01
                </>
            }
        ></Page>
    );
});

export default ThisPage;
