import { extend } from 'koot';

import Page, { type CellGroupType } from '../../';

import styles from './index.module.less';

// ============================================================================

const cellGroupLeft: CellGroupType = {
    name: 'marketplace',
    title: '内置市场',
    cells: [
        {
            title: '正式开放',
            infos: ['旧版插件自动继承', '新版插件可选升级'],
            // rowSpan: 3,
            columnSpan: 2,
            img: require('./imgs/20241126031220_1.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '10% 26%',
            // bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '100%',
                '--mask-height-vertical': '125%',
            },
        },
        {
            title: <>新方式：租赁</>,
            infos: ['购买时补差价'],
            img: require('./imgs/20241201000704_1.jpg'),
            backgroundSize: '150% auto',
            backgroundPosition: '0 40%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '100%',
            },
        },
        {
            title: <>新方式：赠礼</>,
            infos: ['为好友购买'],
            img: require('./imgs/20241026220555_1.jpg'),
            backgroundSize: '275% auto',
            backgroundPosition: '27% 65%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '200%',
            },
        },
        {
            title: <>全新打分机制</>,
            infos: ['音画表现 & 拟真度'],
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
            title: <>高级附加内容</>,
            infos: ['提供零售'],
            img: require('./imgs/20240803041415_1.jpg'),
            backgroundSize: '175% auto',
            backgroundPosition: '55% 47%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '100%',
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
                    <small>PC-21 NGx / PC-24</small>Primus Epic 2
                </>
            ),
            infos: ['部分设置可自动保存', 'MFD可查看航图', '超多交互修正'],
            img: require('./imgs/20250203012746_1.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '50% 55%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
            },
        },
        {
            title: '旋翼机',
            infos: ['修复：平台周围地效突变', '修复：飞行开始时无故弹跳'],
            img: require('./imgs/2025-02-06-02-06-12.png'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '60% 60%',
            // bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '100%',
                '--mask-height-vertical': '85%',
            },
        },
    ],
};

const cellGroupAircrafts2: CellGroupType = {
    name: 'aircrafts-2',
    cells: [
        {
            title: '空客大型机',
            infos: ['修复：结束飞行时崩溃'],
            img: require('./imgs/20241217220519_1.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '45% 95%',
            // bgMaskOrientation: 'horizontal',
            // style: {
            //     '--mask-min-width': '100%',
            //     '--mask-height-horizontal': '200%',
            // },
        },
        {
            title: '波音 737 MAX-8',
            infos: ['更正减推力起飞逻辑', '更正爬升推力逻辑'],
            img: require('./imgs/2025-01-03-02-23-13.png'),
            backgroundSize: 'auto 800%',
            backgroundPosition: '33% 48%',
            // bgMaskOrientation: 'horizontal',
            // style: {
            //     '--mask-min-width': '100%',
            //     '--mask-height-horizontal': '200%',
            // },
        },
        {
            title: '佳明 G1000',
            infos: ['修复：MFD“圆点”'],
            img: require('./imgs/20241129235137_1.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '40% 85%',
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
            infos: ['支持滚轮缩放航图'],
            img: require('./imgs/20250206021031_1.jpg'),
            backgroundSize: '150% auto',
            backgroundPosition: '50% 40%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '500%',
            },
        },
        {
            title: '飞行员生涯',
            infos: ['修复：本地午夜报错'],
            img: require('./imgs/20241124224853_1.jpg'),
            backgroundSize: 'auto 450%',
            backgroundPosition: '48% 47%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '300%',
            },
        },
        {
            title: '自由飞行',
            infos: ['不再强制真实气象'],
            img: require('./imgs/2025-01-02-05-00-44.png'),
            backgroundSize: '150% auto',
            backgroundPosition: '50% 65%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '0',
                '--mask-height-horizontal': '0',
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
        ></Page>
    );
});

export default ThisPage;
