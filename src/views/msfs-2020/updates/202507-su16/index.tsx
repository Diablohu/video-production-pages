import { extend } from 'koot';

import Page, { type CellGroupType } from '../../../msfs-2024';

import styles from './index.module.less';

// ============================================================================

const cellGroupDigitalTwin: CellGroupType = {
    name: 'digital-twin',
    title: '虚拟地球',
    cells: [
        {
            title: <>数据翻新</>,
            infos: ['与 2024 平台保持数据一致'],
            // rowSpan: 2,
            columnSpan: 2,
            img: require('../../../msfs-2024/gameplay/imgs/earth.jpg'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '50% 35%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
                // '--mask-min-width': '200%',
            },
        },
        {
            title: (
                <>
                    <small>
                        <strong>卫星图</strong>
                    </small>
                </>
            ),
            infos: [],
            img: require('../../../msfs-2024/gameplay/imgs/earth.jpg'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '50% 35%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
                // '--mask-min-width': '200%',
            },
        },
        {
            title: (
                <>
                    <small>
                        <strong>地形 DEM</strong>
                    </small>
                </>
            ),
            infos: [],
            img: require('../../../msfs-2024/gameplay/imgs/earth.jpg'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '50% 35%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
                // '--mask-min-width': '200%',
            },
        },
        {
            title: (
                <>
                    <small>
                        <strong>机场</strong>
                    </small>
                </>
            ),
            infos: [],
            img: require('../../../msfs-2024/gameplay/imgs/earth.jpg'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '50% 35%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
                // '--mask-min-width': '200%',
            },
        },
        {
            title: (
                <>
                    <small>
                        <strong>道路</strong>
                    </small>
                </>
            ),
            infos: [],
            img: require('../../../msfs-2024/gameplay/imgs/earth.jpg'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '50% 35%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
                // '--mask-min-width': '200%',
            },
        },
        {
            title: (
                <>
                    <small>不包含 2024 平台新技术</small>
                </>
            ),
            infos: ['3D绿植、四季景观、郊外摄影测量……'],
            columnSpan: 2,
            img: require('../../../msfs-2024/gameplay/imgs/earth.jpg'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '50% 35%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
                // '--mask-min-width': '200%',
            },
        },
    ],
};

const cellGroupAircrafts: CellGroupType = {
    name: 'aircrafts',
    title: '机型 / 航电',
    cells: [
        {
            title: <>塞斯纳奖状经度</>,
            infos: [
                {
                    type: 'new',
                    content: 'FMS 初始化流程',
                },
                {
                    type: 'new',
                    content: 'PFD 俯仰限制指示',
                },
                {
                    type: 'new',
                    content: '语音警告：自动油门断开',
                },
            ],
            rowSpan: 2,
            columnSpan: 3,
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
        {
            title: <>波音 787-10</>,
            infos: ['修正：操作扰流板造成失控'],
            columnSpan: 3,
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
        {
            title: <>TBM 930</>,
            infos: [
                {
                    type: 'new',
                    content: 'FMS 初始化流程',
                },
            ],
            columnSpan: 3,
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

const cellGroupAvionics: CellGroupType = {
    name: 'avionics',
    cells: [
        {
            title: <>G1000</>,
            infos: [
                {
                    type: 'new',
                    content: 'PFD 虚拟航道',
                },
            ],
            // rowSpan: 2,
            columnSpan: 3,
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
        {
            title: <>G3000 / G5000</>,
            infos: [
                {
                    type: 'new',
                    content: '语音警告：VNAV 下高点',
                },
                {
                    type: 'new',
                    content: '可关闭 TAWS 地形警告',
                },
            ],
            // rowSpan: 2,
            columnSpan: 3,
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
        {
            title: <>G3X Touch</>,
            infos: ['APPR 按钮可用'],
            // rowSpan: 2,
            columnSpan: 2,
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
        {
            title: <>Primus Epic 2</>,
            infos: ['大量优化'],
            columnSpan: 2,
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
        {
            title: <>UNS-1Ew</>,
            infos: ['大量优化'],
            columnSpan: 2,
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

const cellGroupOther: CellGroupType = {
    name: 'other',
    title: '其他内容',
    cells: [
        {
            title: <></>,
            infos: ['修正：全球时区数据'],
            img: require('./imgs/20250525170926_1.jpg'),
            backgroundSize: '130% auto',
            backgroundPosition: '0% 90%',
            bgMaskOrientation: 'horizontal',
            type: 'center',
            style: {
                '--mask-min-width': '500%',
                paddingBottom: '0',
            },
        },
        {
            title: <></>,
            infos: ['优化：XBOX 版稳定性'],
            img: require('./imgs/20250525170926_1.jpg'),
            backgroundSize: '130% auto',
            backgroundPosition: '0% 90%',
            bgMaskOrientation: 'horizontal',
            type: 'center',
            style: {
                '--mask-min-width': '500%',
                paddingBottom: '0',
            },
        },
        {
            title: <></>,
            infos: ['即将开放：世界枢纽'],
            img: require('./imgs/20250525170926_1.jpg'),
            backgroundSize: '130% auto',
            backgroundPosition: '0% 90%',
            bgMaskOrientation: 'horizontal',
            type: 'center',
            style: {
                '--mask-min-width': '500%',
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
            edition="2020"
            footerContent="公测版已实装 & 官方预告内容"
            classNameBody={className}
            infos={[
                cellGroupDigitalTwin,
                cellGroupAircrafts,
                cellGroupAvionics,
                cellGroupOther,
            ]}
            subtitle={
                <>
                    <small>Sim Update</small> 16
                </>
            }
        ></Page>
    );
});

export default ThisPage;
