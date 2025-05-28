import { extend } from 'koot';

import Page, { type CellGroupType } from '../../../msfs-2024';

import styles from './index.module.less';

// ============================================================================

const cellGroupGeneral: CellGroupType = {
    name: 'general',
    title: '综合体验',
    cells: [
        {
            title: <>全球数据</>,
            infos: [
                {
                    type: 'new',
                    content: '预先下载数据包 *',
                },
                <small>* 不支持：卫星图、地形和摄影测量数据</small>,
            ],
            columnSpan: 3,
            img: require('./imgs/2025-01-19-22-33-45.png'),
            backgroundSize: '115% auto',
            backgroundPosition: '0% 60%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
            },
        },
        {
            title: <>AI航班 & 多人模式</>,
            infos: ['改进：机型和涂装匹配'],
            columnSpan: 3,
            img: require('./imgs/20250401035437_1.jpg'),
            backgroundSize: 'auto 400%',
            backgroundPosition: '70% 80%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '200%',
                '--mask-opacity': '0.75',
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
            backgroundPosition: '35% 70%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-min-width': '100%',
            },
        },
        {
            title: <>EFB</>,
            infos: [
                '设置配载时可触发登机流程 *',
                <small>* 可选行为，原行为也有保留</small>,
            ],
            columnSpan: 2,
            img: require('./imgs/20250518010540_1.jpg'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '70% 80%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
                // '--mask-min-width': '150%',
                // '--mask-opacity': '0.666',
            },
        },
        {
            title: <>按键绑定</>,
            infos: [
                {
                    type: 'new',
                    content: '更名设备',
                },
                {
                    type: 'new',
                    content: '禁用设备',
                },
            ],
            columnSpan: 2,
            img: require('./imgs/20250517191601_1.jpg'),
            backgroundSize: '425% auto',
            backgroundPosition: '0% 47%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '125%',
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
            backgroundSize: 'auto 150%',
            backgroundPosition: '70% 100%',
            type: 'center',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '125%',
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
            img: require('./imgs/2025-03-13-22-12-09.png'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '20% 70%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
            },
        },
        {
            title: <>世界地图</>,
            infos: ['选择固定翼默认不显示直升机坪'],
            columnSpan: 2,
            img: require('./imgs/20250518010540_1.jpg'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '50% 35%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
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
            backgroundSize: 'auto 125%',
            backgroundPosition: '60% 100%',
            type: 'center',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '125%',
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
            img: require('./imgs/20250525170926_1.jpg'),
            backgroundSize: '130% auto',
            backgroundPosition: '0% 90%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                // '--mask-opacity': '0.666',
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
            edition="2020"
            footerContent="公测版已实装 & 官方预告内容"
            classNameBody={className}
            infos={[cellGroupGeneral, cellGroupAircrafts]}
            subtitle={
                <>
                    <small>Sim Update</small> 16
                </>
            }
        ></Page>
    );
});

export default ThisPage;
