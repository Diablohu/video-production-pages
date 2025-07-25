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
                    content: '预先下载数据包 *',
                },
                <small>* 不支持：卫星图、地形和摄影测量数据</small>,
            ],
            columnSpan: 9,
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
            columnSpan: 9,
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
            // implemented: false,
            title: <>内置市场</>,
            infos: ['第三方开发商可开放租赁', '默认显示开发商名称'],
            columnSpan: 6,
            img: require('./imgs/20241026220555_1.jpg'),
            backgroundSize: 'auto 300%',
            backgroundPosition: '35% 70%',
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
                    content: '设定配载时触发登机 *',
                },
                <small>* 可选行为，原行为也有保留</small>,
            ],
            columnSpan: 6,
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
                {
                    type: 'new',
                    content: '锁定档案',
                },
            ],
            columnSpan: 6,
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
            columnSpan: 3,
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
            title: <>图像设置</>,
            infos: [
                {
                    type: 'new',
                    content: '帧率限制',
                },
            ],
            columnSpan: 6,
            img: require('./imgs/2025-02-23-03-44-52.png'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '50% 75%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
                // '--mask-min-width': '200%',
            },
        },
        {
            title: <>拍照模式</>,
            infos: [
                {
                    type: 'new',
                    content: '更改照片目录',
                },
            ],
            columnSpan: 6,
            img: require('./imgs/2025-03-13-22-12-09.png'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '20% 70%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
            },
        },
        // {
        //     title: <>世界地图</>,
        //     infos: ['为固定翼过滤直升机坪'],
        //     columnSpan: 4,
        //     img: require('../../gameplay/imgs/earth.jpg'),
        //     backgroundSize: 'auto 150%',
        //     backgroundPosition: '50% 35%',
        //     bgMaskOrientation: 'vertical',
        //     style: {
        //         '--mask-height-vertical': '100%',
        //         // '--mask-min-width': '200%',
        //     },
        // },
        {
            title: <>VR 模式</>,
            infos: [
                <>
                    继续修正
                    <br />
                    交互问题
                </>,
            ],
            columnSpan: 3,
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

const cellGroupCareer: CellGroupType = {
    name: 'career',
    title: '飞行员生涯',
    cells: [
        {
            // implemented: false,
            delayed: true,
            title: <>空客大型机</>,
            infos: ['进驻职业生涯'],
            img: require('./imgs/20250214233202_1.jpg'),
            backgroundSize: 'auto 140%',
            backgroundPosition: '50% 100%',
            bgMaskOrientation: 'horizontal',
            style: {
                // '--mask-height-vertical': '100%',
                '--mask-min-width': '100%',
            },
        },
        {
            title: <>PC-12 NGx</>,
            infos: ['修正：高空缺氧'],
            img: require('./imgs/20250203013916_1.jpg'),
            backgroundSize: 'auto 225%',
            backgroundPosition: '35% 85%',
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
