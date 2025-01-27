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
            infos: ['DirectX 12'],
            img: require('./imgs/a330-takeoff.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '15% 30%',
            bgMaskOrientation: 'horizontal',
            // rowSpan: 3,
            columnSpan: 2,
        },
        {
            title: <>通用 EFB</>,
            developers: ['ASOBO', 'WorkingTitle'],
            infos: ['允许外部访问'],
            img: require('./imgs/planner-lido-chard.png'),
            backgroundSize: 'auto 170%',
            backgroundPosition: '12.75% 40%',
            bgMaskOrientation: 'horizontal',
            // rowSpan: 4,
            columnSpan: 1,
        },
        {
            title: <>通用 EFB</>,
            developers: ['ASOBO', 'WorkingTitle'],
            infos: ['允许外部访问'],
            img: require('./imgs/planner-lido-chard.png'),
            backgroundSize: 'auto 170%',
            backgroundPosition: '12.75% 40%',
            bgMaskOrientation: 'horizontal',
            // rowSpan: 4,
            columnSpan: 1,
        },
        {
            title: <>通用 EFB</>,
            developers: ['ASOBO', 'WorkingTitle'],
            infos: ['允许外部访问'],
            img: require('./imgs/planner-lido-chard.png'),
            backgroundSize: 'auto 170%',
            backgroundPosition: '12.75% 40%',
            bgMaskOrientation: 'horizontal',
            // rowSpan: 4,
            columnSpan: 1,
        },
        {
            title: <>通用 EFB</>,
            developers: ['ASOBO', 'WorkingTitle'],
            infos: ['允许外部访问'],
            img: require('./imgs/planner-lido-chard.png'),
            backgroundSize: 'auto 170%',
            backgroundPosition: '12.75% 40%',
            bgMaskOrientation: 'horizontal',
            // rowSpan: 4,
            columnSpan: 1,
        },
        {
            title: '我的储藏库',
            infos: ['开关插件无需重启'],
            img: require('./imgs/replay.jpg'),
            backgroundSize: 'auto 1000%',
            backgroundPosition: '58% 37.5%',
            bgMaskOrientation: 'horizontal',
            // rowSpan: 2,
            columnSpan: 2,
            style: {
                '--mask-max-width': '50%',
            },
        },
    ],
};

const cellGroupMid: CellGroupType = {
    name: 'experience',
    title: '飞行体验修正',
    cells: [
        {
            title: '升级气流模拟（CFD）',
            infos: [
                '真实尾流',
                '直升机涡环',
                '气流影响植被',
                '扬尘、飞雪、吹水……',
            ],
            // img: require('./imgs/technical-alpha-c172-ground-dirt-3.png'),
            // backgroundSize: 'auto 150%',
            // backgroundPosition: '60% 55%',
            img: require('./imgs/helicopter-smoke.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '30% 75%',
            bgMaskOrientation: 'horizontal',
            columnSpan: 6,
            rowSpan: 2,
            style: {
                '--mask-min-width': '100%',
            },
        },
        {
            title: '升级物理模拟',
            infos: [
                '增强地面物理',
                '飞溅泥土',
                '留下轮胎印',
                '布料 & 绳索 & 3D水体',
            ],
            img: require('./imgs/hotairballoon.jpg'),
            backgroundSize: 'auto 165%',
            backgroundPosition: '0% 65%',
            bgMaskOrientation: 'horizontal',
            columnSpan: 6,
            rowSpan: 2,
        },
        {
            title: '绕机检查',
            // infos: ['绕机检查'],
            img: require('./imgs/a330-walkaround.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '0% 70%',
            bgMaskOrientation: 'horizontal',
            columnSpan: 3,
            className: 'mod-small',
        },
        {
            title: '直升机 AP',
            // infos: ['绕机检查'],
            img: require('./imgs/h225.png'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '0% 15%',
            bgMaskOrientation: 'horizontal',
            columnSpan: 3,
            className: 'mod-small',
        },
        {
            title: '雨刷',
            // infos: [],
            img: require('./imgs/wiper.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '100% 25%',
            bgMaskOrientation: 'horizontal',
            columnSpan: 2,
            className: 'mod-tiny',
        },
        {
            title: '机型配置',
            // infos: [],
            img: require('./imgs/dhc6-float.jpg'),
            backgroundSize: 'auto 700%',
            backgroundPosition: '40% 32.5%',
            bgMaskOrientation: 'horizontal',
            columnSpan: 2,
            className: 'mod-tiny',
        },
        {
            title: 'VDGS',
            // infos: ['绕机检查'],
            img: require('./imgs/vdgs.jpg'),
            backgroundSize: 'auto 300%',
            backgroundPosition: '95% 87%',
            bgMaskOrientation: 'horizontal',
            columnSpan: 2,
            className: 'mod-tiny',
        },
    ],
};

const cellGroupRight: CellGroupType = {
    name: 'environment',
    title: '其他修正',
    cells: [
        {
            title: '翻新画面渲染',
            infos: ['光线追踪投影', '改进大气散射', '改进漫反射', '极光'],
            img: require('./imgs/dubai.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '50% 40%',
            bgMaskOrientation: 'horizontal',
            style: {
                gridRow: '1 / span 3',
                gridColumn: '1 / span 2',
            },
        },
        {
            title: '翻新全球地形',
            infos: ['3D地形 & 点缀', '3D植被 & 农田', '四季 & 地域变化'],
            // img: require('./imgs/yosemite.jpg'),
            // backgroundSize: 'auto 185%',
            // backgroundPosition: '30% 70%',
            img: require('./imgs/autumn.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '60% 70%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '80%',
                '--mask-max-width': '80%',
                gridRow: '4 / span 3',
                gridColumn: '1 / span 1',
            },
        },
        {
            title: '扩展全球数据',
            developers: ['ORBX', 'PuffinFlight'],
            infos: ['直升机机坪', '滑翔机机库', '油井平台', '低空障碍'],
            img: require('./imgs/oilrig.jpg'),
            backgroundSize: 'auto 220%',
            backgroundPosition: '42% 58%',
            rowSpan: 3,
            columnSpan: 1,
            bgMaskOrientation: 'horizontal',
            style: {
                gridRow: '7 / span 3',
                gridColumn: '1 / span 1',
            },
        },
        {
            title: (
                <>
                    <small>24小时</small>世界数据回溯
                </>
            ),
            // img: require('./imgs/yosemite.jpg'),
            // backgroundSize: 'auto 185%',
            // backgroundPosition: '30% 70%',
            img: require('./imgs/Fuji_MSFS_2024.png'),
            // className: 'small-cell',
            backgroundSize: 'auto 140%',
            backgroundPosition: '40% 100%',
            bgMaskOrientation: 'vertical',
            style: {
                gridRow: '4 / span 2',
                gridColumn: '2 / span 1',
                paddingLeft: '20px',
                paddingBottom: '10px',
            },
        },
        {
            title: (
                <>
                    <small>新的云层</small>
                    高空卷云
                </>
            ),
            rowSpan: 2,
            columnSpan: 1,
            img: require('./imgs/cirrusclouds-1726680805016.png'),
            // className: 'small-cell',
            backgroundSize: 'auto 150%',
            backgroundPosition: '50% 90%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-min-width': '100%',
                '--mask-max-width': '100%',
                gridRow: '6 / span 2',
                gridColumn: '2 / span 1',
                paddingLeft: '20px',
                paddingBottom: '10px',
            },
        },
        {
            title: (
                <>
                    <small>空中和水面</small>实时交通
                </>
            ),
            developers: ['GAIST', 'AIG'],
            img: require('./imgs/miami.jpg'),
            className: 'small-cell',
            backgroundSize: 'auto 1300%',
            backgroundPosition: '17% 55%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '80%',
                '--mask-max-width': '80%',
                gridRow: '8 / span 1',
                gridColumn: '2 / span 1',
            },
        },
        {
            title: (
                <>
                    <small>更多</small>动物群
                </>
            ),
            img: require('./imgs/animal.jpg'),
            className: 'small-cell',
            backgroundSize: 'auto 500%',
            backgroundPosition: '50% 45%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '80%',
                '--mask-max-width': '80%',
                gridRow: '9 / span 1',
                gridColumn: '2 / span 1',
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
            infos={[cellGroupLeft, cellGroupMid, cellGroupRight]}
        ></Page>
    );
});

export default ThisPage;
