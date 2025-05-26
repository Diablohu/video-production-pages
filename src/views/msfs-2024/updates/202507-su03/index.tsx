import { extend } from 'koot';

import Page, { type CellGroupType } from '../../';

import styles from './index.module.less';

// ============================================================================

const cellGroupGeneral: CellGroupType = {
    name: 'general',
    title: '综合体验',
    cells: [
        {
            title: <>储藏库</>,
            infos: [
                {
                    type: 'new',
                    content: '预先下载 *',
                },
                <small>* 不支持预先下载卫星图、地形和摄影测量数据</small>,
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
            title: <>AI航班 & 多人模式</>,
            infos: ['改进：机型和涂装匹配'],
            columnSpan: 3,
            img: require('./imgs/20250328214822_1.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '15% 50%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '200%',
            },
        },
        {
            implemented: false,
            title: <>内置市场</>,
            infos: [
                {
                    type: 'new',
                    content: '赠礼购买',
                },
            ],
            columnSpan: 2,
            img: require('./imgs/20241026220555_1.jpg'),
            backgroundSize: 'auto 300%',
            backgroundPosition: '40% 70%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '100%',
            },
        },
        {
            title: <>EFB</>,
            infos: ['设置配载时可选触发登机'],
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
            title: <>按键绑定</>,
            infos: [
                {
                    type: 'new',
                    content: '设备更名',
                },
                {
                    type: 'new',
                    content: '设备激活／禁用',
                },
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
            title: <>帧率性能</>,
            infos: [
                <>
                    继续优化
                    <br />
                    显存占用
                </>,
            ],
            img: require('./imgs/2025-01-19-22-38-54.png'),
            backgroundSize: 'auto 200%',
            backgroundPosition: '25% 80%',
            bgMaskOrientation: 'horizontal',
            type: 'center',
            style: {
                '--mask-min-width': '150%',
                justifyContent: 'flex-end',
            },
        },
        {
            title: <>拍照模式</>,
            infos: [
                {
                    type: 'new',
                    content: '允许更改照片目录',
                },
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
            title: <>世界地图</>,
            infos: ['选择固定翼默认不显示直升机坪'],
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
            title: <>VR 模式</>,
            infos: [
                <>
                    继续修正
                    <br />
                    交互问题
                </>,
            ],
            img: require('./imgs/vr.webp'),
            backgroundSize: 'auto 220%',
            backgroundPosition: '0% 40%',
            bgMaskOrientation: 'horizontal',
            type: 'center',
            style: {
                '--mask-min-width': '150%',
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
            title: <>波音 737 MAX-8</>,
            infos: ['修正：夜间舱内曝光', '调整配平轮灵敏度'],
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
    ],
};

const cellGroupCareer: CellGroupType = {
    name: 'career',
    title: '飞行员生涯',
    cells: [
        {
            implemented: false,
            title: <>空客大型机</>,
            infos: ['进驻职业生涯'],
            img: require('./imgs/20241218012225_1.jpg'),
            backgroundSize: 'auto 140%',
            backgroundPosition: '0% 60%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-height-vertical': '100%',
                '--mask-min-width': '100%',
            },
        },
        {
            title: <>PC-12 NGx</>,
            infos: ['修正：高空缺氧'],
            img: require('./imgs/20241124224853_1.jpg'),
            backgroundSize: 'auto 225%',
            backgroundPosition: '60% 55%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
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
            infos={[cellGroupGeneral, cellGroupCareer, cellGroupAircrafts]}
            subtitle={
                <>
                    <small>Sim Update</small> 03
                </>
            }
        ></Page>
    );
});

export default ThisPage;
