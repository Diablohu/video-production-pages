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
            img: require('./imgs/20240629025745_1.jpg'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '30% 60%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
                // '--mask-min-width': '200%',
                '--mask-opacity': '0.7',
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
            img: require('./imgs/20240701020352_1.jpg'),
            backgroundSize: 'auto 200%',
            backgroundPosition: '50% 70%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
                // '--mask-min-width': '200%',
                '--mask-opacity': '0.4',
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
            img: require('./imgs/20240418233621_1.jpg'),
            backgroundSize: 'auto 125%',
            backgroundPosition: '50% 35%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
                // '--mask-min-width': '200%',
                '--mask-opacity': '0.4',
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
            img: require('./imgs/20240120220443_1.jpg'),
            backgroundSize: 'auto 400%',
            backgroundPosition: '60% 55%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-height-vertical': '100%',
                // '--mask-min-width': '200%',
            },
        },
        {
            title: (
                <>
                    <small>不含 2024 平台新技术</small>
                </>
            ),
            infos: ['3D绿植、四季景观、郊外摄影测量……'],
            columnSpan: 2,
            className: 'no-2024-tech',
            img: require('./imgs/2025-02-23-03-44-52.png'),
            backgroundSize: '100% auto',
            backgroundPosition: '50% 50%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '200%',
                '--mask-opacity': '0.6667',
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
            img: require('./imgs/20230624195035_1.jpg'),
            backgroundSize: 'auto 200%',
            backgroundPosition: '45% 75%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.2',
            },
        },
        {
            title: <>波音 787-10</>,
            infos: ['修正：操作扰流板造成失控'],
            columnSpan: 3,
            img: require('./imgs/Microsoft Flight Simulator 2023_9_17 5_19_11.png'),
            backgroundSize: '175% auto',
            backgroundPosition: '0% 50%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.3333',
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
            img: require('./imgs/20230610222315_1.jpg'),
            backgroundSize: '280% auto',
            backgroundPosition: '26% 61%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '90%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.9',
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
            img: require('./imgs/QQ截图20250529172659.png'),
            backgroundSize: '175% auto',
            backgroundPosition: '5% 45%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.666',
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
            img: require('./imgs/20250125062102_1.jpg'),
            backgroundSize: '130% auto',
            backgroundPosition: '0% 60%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.8',
            },
        },
        {
            title: <>G3X Touch</>,
            infos: ['APPR 按钮可用'],
            // rowSpan: 2,
            columnSpan: 2,
            img: require('./imgs/20240621221641_1.jpg'),
            backgroundSize: '250% auto',
            backgroundPosition: '70% 68%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '100%',
                // '--mask-height-horizontal': '100%',
                // '--mask-opacity': '0.666',
            },
        },
        {
            title: <>Primus Epic 2</>,
            infos: ['大量优化'],
            columnSpan: 2,
            img: require('../../../msfs-2024/default-aircrafts/imgs/honeywell-primus-epic-2.jpg'),
            backgroundSize: '130% auto',
            backgroundPosition: '0% 50%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '200%',
                // '--mask-height-horizontal': '100%',
                // '--mask-opacity': '0.666',
            },
        },
        {
            title: <>UNS-1Ew</>,
            infos: ['大量优化'],
            columnSpan: 2,
            img: require('./imgs/60fc116dae317c4a83d61b7a_kholRQBliwPX4HLI4Op4GHHT2u9qTLAT9OEzEWsXSwYfjnLzfm3s7_rRboTqG47aA863MPK_lKOMnnCzyThFThnZputIuPkv0MKSt_bZdJbirYIKTGSamcnqQmaHGbddJSFvWqql.png'),
            backgroundSize: '130% auto',
            backgroundPosition: '0% 45%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '150%',
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
            img: require('./imgs/20240623034215_1.jpg'),
            backgroundSize: '100% auto',
            backgroundPosition: '0% 48%',
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
            img: require('./imgs/20240615030558_1.jpg'),
            backgroundSize: '100% auto',
            backgroundPosition: '0% 85%',
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
            img: require('./imgs/20241109211118_1.jpg'),
            backgroundSize: '300% auto',
            backgroundPosition: '20% 60%',
            bgMaskOrientation: 'horizontal',
            type: 'center',
            style: {
                '--mask-min-width': '500%',
                '--mask-opacity': '0.3333',
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
