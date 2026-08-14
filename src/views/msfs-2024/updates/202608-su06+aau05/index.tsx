import { extend } from 'koot';

import Page, { type CellGroupType } from '../../';

import styles from './index.module.less';

// ============================================================================

const cellGroupGeneral: CellGroupType = {
    name: 'general',
    title: '综合体验',
    cells: [
        {
            title: <>全新玩法</>,
            infos: [
                {
                    type: 'new',
                    content: '郊野之行 *',
                },
                <small>* 前作老模式回归</small>,
            ],
            columnSpan: 5,
            rowSpan: 7,
            img: require('./imgs/2026-07-18-00-35-10.png'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '25% 85%',
            bgMaskOrientation: 'vertical',
            style: {
                '--mask-min-width': '50%',
                '--mask-height-vertical': '125%',
                '--mask-opacity': '0.75',
            },
        },
        {
            title: <>全球机场</>,
            infos: [
                {
                    type: 'new',
                    content: (
                        <span>
                            机坪夜间照明
                            <small>（仅针对自动生成的机场）</small>
                        </span>
                    ),
                },
                {
                    type: 'new',
                    content: (
                        <span>
                            根据地景校正盲降信号
                            <small>（仅针对默认导航数据）</small>
                        </span>
                    ),
                },
            ],
            columnSpan: 7,
            rowSpan: 6,
            img: require('./imgs/20260714172216_1.jpg'),
            backgroundSize: '250% auto',
            backgroundPosition: '40% 45%',
            bgMaskOrientation: 'horizontal',
            // textSize: 'sm',
            style: {
                '--mask-min-width': '100%',
                '--mask-opacity': '1',
            },
        },
        {
            // implemented: false,
            title: <>气流模拟</>,
            infos: [
                {
                    type: 'new',
                    content: <>【气流可视化】湍流来源信息</>,
                },
                {
                    type: 'new',
                    content: '【气流可视化】可显示下沉气流',
                },
                '【直升机CFD】加大涡环效应',
            ],
            columnSpan: 7,
            rowSpan: 5,
            img: require('./imgs/20260707042550_1.jpg'),
            backgroundSize: 'auto 400%',
            backgroundPosition: '90% 29%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '125%',
                '--mask-opacity': '0.5',
            },
        },
        {
            title: <>游戏界面</>,
            infos: [
                { type: 'new', content: '【机场选择】跑道照明提示' },
                { type: 'new', content: '【飞机选择】突出配置按钮' },
                { type: 'new', content: '【顶部工具栏】高亮提示文本' },
                { type: 'new', content: '【世界地图】地名本地化' },
                '【向导观光】提升为活动菜单子类',
                '修复：字幕过快消失',
            ],
            columnSpan: 5,
            rowSpan: 9,
            img: require('./imgs/2026-05-19-03-05-53.png'),
            backgroundSize: 'auto 125%',
            backgroundPosition: '30% 100%',
            // type: 'center',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                '--mask-height-vertical': '125%',
                '--mask-opacity': '1',
                // justifyContent: 'flex-end',
            },
        },
        {
            title: <>全新选项</>,
            infos: [
                { type: 'new', content: '【辅助】自由飞行 - 自动完成绕机检查' },
                { type: 'new', content: '【摄像机】禁用鼠标加速' },
                { type: 'new', content: '【飞行界面】外部视角单独隐藏小地图' },
            ],
            columnSpan: 7,
            rowSpan: 5,
            img: require('./imgs/20260725204930_1.jpg'),
            backgroundSize: '175% auto',
            backgroundPosition: '00% 50%',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                '--mask-height-vertical': '300%',
                // '--mask-min-width': '150%',
                '--mask-opacity': '1',
            },
        },
        {
            title: <>VR</>,
            infos: ['【PSVR2】提升分辨率', '优化：操控杆交互'],
            columnSpan: 3,
            rowSpan: 4,
            img: require('./imgs/20260416011742_1.jpg'),
            backgroundSize: '300% auto',
            backgroundPosition: '80% 15%',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                '--mask-height-vertical': '0%',
                '--mask-opacity': '0.01',
            },
        },
        {
            title: <>图像渲染</>,
            infos: [
                {
                    type: 'new',
                    content: '原生支持 DLSS 4.5',
                },
                {
                    type: 'new',
                    content: '原生支持 FSR 4',
                },
            ],
            columnSpan: 3,
            rowSpan: 4,
            img: require('./imgs/2026-07-04-01-02-22.png'),
            backgroundSize: 'cover',
            backgroundPosition: '40% 50%',
            // type: 'center',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                '--mask-opacity': '0.4',
            },
        },
        {
            title: <>其他改进</>,
            infos: ['动态暂停不再损伤飞机', '优化船舶朝向'],
            columnSpan: 3,
            rowSpan: 4,
            img: require('./imgs/2026-03-28-01-33-29.png'),
            backgroundSize: '300% auto',
            backgroundPosition: '10% 80%',
            // type: 'center',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                // '--mask-height-vertical': '150%',
                // justifyContent: 'flex-end',
                '--mask-opacity': '0.5',
            },
        },
        {
            title: <>导航数据 / SDK</>,
            infos: [
                {
                    type: 'new',
                    content: (
                        <span>
                            GBAS/SBAS 信号<small>（未支持 GLS 进近）</small>
                        </span>
                    ),
                },
            ],
            columnSpan: 3,
            rowSpan: 4,
            img: require('./imgs/20260707152618_1.jpg'),
            backgroundSize: '300% auto',
            backgroundPosition: '65% 53%',
            // type: 'center',
            bgMaskOrientation: 'vertical',
            textSize: 'sm',
            style: {
                // '--mask-height-vertical': '150%',
                // justifyContent: 'flex-end',
                '--mask-opacity': '0.01',
            },
        },
    ],
};

const cellGroupAircrafts: CellGroupType = {
    name: 'aircrafts',
    title: '机型',
    cells: [
        {
            // implemented: false,
            title: '波音 707',
            infos: [
                '全面翻新，支持生涯，深度模拟',
                '开发转移到 WorkingTitle & iniBuilds',
            ],
            columnSpan: 6,
            img: require('./imgs/K10916-P.jpg.webp'),
            backgroundSize: '125% auto',
            backgroundPosition: '30% 68%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.7',
            },
        },
        {
            implemented: false,
            title: '波音 307',
            infos: ['全面翻新，开发转移到 iniBuilds'],
            columnSpan: 6,
            img: require('./imgs/MSFS_307Stratoliner_Screenshot_06.jpg'),
            backgroundSize: '115% auto',
            backgroundPosition: '80% 65%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.75',
            },
        },
        {
            implemented: false,
            title: '贝尔 47J',
            infos: ['全面翻新'],
            columnSpan: 4,
            img: require('./imgs/50663772601_4026e52811_o-scaled.webp'),
            backgroundSize: '115% auto',
            backgroundPosition: '0% 55%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '100%',
                // '--mask-height-horizontal': '100%',
                // '--mask-opacity': '0.666',
            },
        },
        {
            implemented: false,
            title: '柯蒂斯 C-46',
            infos: ['全面翻新'],
            columnSpan: 4,
            img: require('./imgs/MSFS_C46_Commando_Screenshots_04.jpg'),
            backgroundSize: '115% auto',
            backgroundPosition: '20% 55%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '200%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.75',
            },
        },
        {
            implemented: false,
            title: '福特 4AT',
            infos: ['全面翻新'],
            columnSpan: 4,
            img: require('./imgs/MSFS_FordTriMotor_Screenshot_09.jpg'),
            backgroundSize: '135% auto',
            backgroundPosition: '45% 40%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '200%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.75',
            },
        },
        {
            // implemented: false,
            title: '空客 A330',
            infos: ['修复：APU油耗、TCAS幽灵'],
            columnSpan: 4,
            img: require('./imgs/a330.jpg'),
            backgroundSize: '150% auto',
            backgroundPosition: '80% 57%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '150%',
                // '--mask-height-horizontal': '100%',
                // '--mask-opacity': '0.666',
            },
        },
        {
            // implemented: false,
            title: '波音 747',
            infos: ['驾驶舱内添加 EFB'],
            columnSpan: 4,
            img: require('./imgs/r6dqzp_747_exp_aerial_02b_post_2048px-2000x.webp'),
            backgroundSize: '150% auto',
            backgroundPosition: '60% 45%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '150%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.9',
            },
        },
        {
            // implemented: false,
            title: '派珀 M600',
            infos: ['进驻生涯，修复红杆绑定'],
            columnSpan: 4,
            img: require('./imgs/2026-06-19-22-48-13.png'),
            backgroundSize: '400% auto',
            backgroundPosition: '21% 46.5%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '175%',
                '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.6667',
            },
        },
        {
            // implemented: false,
            title: '西瑞 VisionJet G2',
            infos: ['翻新紧急自动降落'],
            columnSpan: 4,
            img: require('./imgs/2026-06-20-22-33-08.png'),
            backgroundSize: '500% auto',
            backgroundPosition: '30% 54%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '175%',
                '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.75',
            },
        },
        {
            // implemented: false,
            title: 'G111 / HU-16',
            infos: ['大量细节修复'],
            columnSpan: 4,
            img: require('./imgs/2024-11-21-00-27-32.PNG.jpg'),
            backgroundSize: '133% auto',
            backgroundPosition: '60% 60%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '150%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.75',
            },
        },
        {
            // implemented: false,
            title: 'Volocity',
            infos: ['大量细节修复'],
            columnSpan: 4,
            img: require('./imgs/56b903907403296bbdc881bfc98a50a671d4906b-2560x1707.jpg'),
            backgroundSize: '125% auto',
            backgroundPosition: '0% 65%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '150%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.5',
            },
        },
    ],
};

const cellGroupAvionics: CellGroupType = {
    name: 'avionics',
    title: '航电',
    cells: [
        {
            // implemented: false,
            title: <>佳明 G3000 / G5000</>,
            infos: [
                { type: 'new', content: '气象雷达可调倾角' },
                '翻新气象雷达界面',
            ],
            columnSpan: 4,
            img: require('./imgs/20260814024055_1.jpg'),
            backgroundSize: '600% auto',
            backgroundPosition: '62.5% 25%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '1',
            },
        },
        {
            // implemented: false,
            title: <>GNS 430 / 530</>,
            infos: ['修复：背光亮度'],
            columnSpan: 4,
            img: require('./imgs/Grand-Caravan-steam-gauges-MSFS-2.jpg'),
            backgroundSize: '300% auto',
            backgroundPosition: '50% 50%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.9',
            },
        },
        {
            // implemented: false,
            title: <>UNS-1Ew</>,
            infos: [{ type: 'new', content: '虚拟下滑道 GP' }],
            columnSpan: 4,
            img: require('./imgs/146-professional-p3d_127_ss_l_201120093723.jpg'),
            backgroundSize: '400% auto',
            backgroundPosition: '60% 10%',
            bgMaskOrientation: 'horizontal',
            textSize: 'sm',
            style: {
                '--mask-min-width': '125%',
                // '--mask-height-horizontal': '100%',
                '--mask-opacity': '0.75',
            },
        },
    ],
};

// Functional Component =======================================================

const ThisPage = extend({ styles })(({ className }) => {
    return (
        <Page
            beta={true}
            footerContent="公测版已实装 & 官方预告内容"
            classNameBody={className}
            infos={[cellGroupGeneral, cellGroupAircrafts, cellGroupAvionics]}
            subtitle={
                <>
                    <small>Sim Update</small> 06
                </>
            }
            subtitleExtra={
                <>
                    <small>+ AAU</small> 05
                </>
            }
        ></Page>
    );
});

export default ThisPage;
