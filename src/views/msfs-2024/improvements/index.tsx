import { extend } from 'koot';

import Page, { type CellGroupType } from '../';

import styles from './index.module.less';

// ============================================================================

const cellGroupLeft: CellGroupType = {
    title: '系统功能',
    cells: [
        {
            title: '全新客户端',
            infos: ['云端串流', 'CPU多线程优化', '默认 DirectX 12'],
            img: require('./imgs/a330-takeoff.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '15% 30%',
            bgMaskOrientation: 'horizontal',
        },
        {
            title: '飞行计划与航图',
            developers: ['WorkingTitle'],
            infos: [
                '燃油规划',
                '路线规划 + ETOPS',
                'LIDO 航图',
                '提供网页版，适配移动端',
            ],
            img: require('./imgs/planner-lido-chard.png'),
            backgroundSize: 'auto 170%',
            backgroundPosition: '10% 40%',
            bgMaskOrientation: 'horizontal',
        },
        {
            title: '回放工具',
            developers: ['Fabio'],
            infos: ['实时回放', '生成僚机'],
            img: require('./imgs/replay.jpg'),
            backgroundSize: 'auto 800%',
            backgroundPosition: '55% 37%',
            columnSpan: 1,
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-max-width': '50%',
            },
        },
        {
            title: '改进按键绑定',
            infos: ['针对机型配置', '预设方案可共享'],
            img: require('./imgs/binding.png'),
            backgroundSize: 'auto 200%',
            backgroundPosition: '55.5% 70%',
            columnSpan: 1,
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-max-width': '50%',
            },
        },
    ],
};

const cellGroupMid: CellGroupType = {
    title: '飞行体验',
    cells: [
        {
            title: '升级气流模拟（CFD）',
            infos: ['真实尾流', '气流影响植被', '扬尘', '第三方定制受力面'],
            img: require('./imgs/grass.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '5% 30%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
            },
        },
        {
            title: '升级物理模拟',
            infos: ['布料和绳索模拟', '水波影响航空器和船只', '车辙'],
            img: require('./imgs/snow.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '50% 55%',
            bgMaskOrientation: 'horizontal',
        },
        {
            title: '自由行走',
            infos: ['绕机检查', '拍照'],
            img: require('./imgs/walkaround.webp'),
            backgroundSize: 'auto 200%',
            backgroundPosition: '35% 65%',
            bgMaskOrientation: 'horizontal',
        },
    ],
};

const cellGroupRight: CellGroupType = {
    title: '世界环境',
    cells: [
        {
            title: '翻新画面渲染',
            infos: ['光线追踪投影', '改进大气散射', '改进漫反射', '渲染极光'],
            img: require('./imgs/dubai.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '50% 40%',
            bgMaskOrientation: 'horizontal',
        },
        {
            title: '翻新全球地形',
            infos: ['3D地形', '3D植被、农田、砂石点缀', '四季与地域变化'],
            // img: require('./imgs/yosemite.jpg'),
            // backgroundSize: 'auto 185%',
            // backgroundPosition: '30% 70%',
            img: require('./imgs/autumn.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '5% 70%',
            bgMaskOrientation: 'horizontal',
        },
        {
            title: '扩展全球数据',
            developers: ['ORBX', 'PuffinFlight'],
            infos: ['直升机机坪', '滑翔机机库', '油井平台', '低空障碍'],
            img: require('./imgs/oilrig.jpg'),
            backgroundSize: 'auto 220%',
            backgroundPosition: '42% 58%',
            columnSpan: 1,
            bgMaskOrientation: 'horizontal',
        },
        {
            title: '',
            cells: [
                {
                    title: (
                        <>
                            <small>新的云层</small>高空卷云
                        </>
                    ),
                    img: require('./imgs/cirrus.jpg'),
                    backgroundSize: 'auto 250%',
                    backgroundPosition: '30% 30%',
                    bgMaskOrientation: 'horizontal',
                    style: {
                        '--mask-min-width': '80%',
                        '--mask-max-width': '80%',
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
                    backgroundSize: 'auto 1300%',
                    backgroundPosition: '17% 55%',
                    bgMaskOrientation: 'horizontal',
                    style: {
                        '--mask-min-width': '80%',
                        '--mask-max-width': '80%',
                    },
                },
                {
                    title: (
                        <>
                            <small>更多</small>动物群
                        </>
                    ),
                    img: require('./imgs/animal.jpg'),
                    backgroundSize: 'auto 500%',
                    backgroundPosition: '50% 45%',
                    bgMaskOrientation: 'horizontal',
                    style: {
                        '--mask-min-width': '80%',
                        '--mask-max-width': '80%',
                    },
                },
            ],
            columnSpan: 1,
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
