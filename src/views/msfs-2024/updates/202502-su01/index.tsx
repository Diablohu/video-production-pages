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
            img: require('./imgs/a330-takeoff.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '15% 30%',
            bgMaskOrientation: 'horizontal',
            // rowSpan: 3,
            columnSpan: 2,
        },
        {
            title: <>租赁</>,
            infos: ['购买时补差价'],
            img: require('./imgs/a330-takeoff.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '15% 30%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '300%',
            },
        },
        {
            title: <>赠与</>,
            infos: ['为好友购买'],
            img: require('./imgs/a330-takeoff.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '15% 30%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '300%',
            },
        },
        {
            title: <>全新打分机制</>,
            infos: ['音画质量 & 拟真度'],
            img: require('./imgs/a330-takeoff.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '15% 30%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '300%',
            },
        },
        {
            title: <>高级版本附加内容</>,
            infos: ['零售：可直接购买'],
            img: require('./imgs/a330-takeoff.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '15% 30%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '300%',
            },
        },
        {
            title: '我的储藏库',
            infos: ['开关插件无需重启'],
            img: require('./imgs/a330-takeoff.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '15% 30%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '300%',
            },
        },
        {
            title: '插件平台',
            infos: ['优化2020兼容环境'],
            img: require('./imgs/a330-takeoff.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '15% 30%',
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
            title: '旋翼机',
            infos: ['修复：平台周围地效突变'],
            img: require('./imgs/helicopter-smoke.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '30% 75%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
            },
        },
        {
            title: (
                <>
                    <small>PC-21 NGx / PC-24</small>Primus Epic 2
                </>
            ),
            infos: ['部分设置可自动保存', 'MFD可查看航图', '超多交互修正'],
            img: require('./imgs/helicopter-smoke.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '30% 75%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
            },
        },
    ],
};

const cellGroupAircrafts2: CellGroupType = {
    name: 'aircrafts-2',
    cells: [
        {
            title: '佳明 G1000',
            infos: ['修复：MFD“圆点”'],
            img: require('./imgs/helicopter-smoke.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '30% 75%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '200%',
            },
        },
        {
            title: '波音 737 MAX-8',
            infos: ['更正减推力起飞逻辑', '更正爬升推力逻辑'],
            img: require('./imgs/helicopter-smoke.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '30% 75%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '200%',
            },
        },
        {
            title: '空客大型机',
            infos: ['修复：结束飞行时崩溃'],
            img: require('./imgs/helicopter-smoke.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '30% 75%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '200%',
            },
        },
    ],
};

const cellGroupRight: CellGroupType = {
    name: 'other',
    title: '更多优化',
    cells: [
        {
            title: 'EFB',
            infos: ['航图支持滚轮缩放'],
            img: require('./imgs/dubai.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '50% 40%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '300%',
            },
        },
        {
            title: '飞行员生涯',
            infos: ['修复：本地午夜报错'],
            img: require('./imgs/dubai.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '50% 40%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '300%',
            },
        },
        {
            title: '自由飞行',
            infos: ['不再强制真实气象'],
            img: require('./imgs/dubai.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '50% 40%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                '--mask-height-horizontal': '300%',
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
