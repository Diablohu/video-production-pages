import { extend } from 'koot';
import classNames from 'classnames';

import Page, { type CellGroupType } from '../';

import styles from './index.module.less';

// ============================================================================

const cellGroupCareer: CellGroupType = {
    title: '全新玩法：飞行员生涯',
    cells: [
        {
            title: '选择你的生涯',
            infos: [
                '商业飞行',
                '贵宾包机',
                '搜救',
                '空中救护',
                '空中救火',
                '空中广告',
                '直升机运输',
                '偏远地区运输',
                '农业作业',
                '科研航拍',
            ],
            rowSpan: 2,
            columnSpan: 2,
            img: require('./imgs/vip-charter.jpg'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '30% 50%',
            bgMaskOrientation: 'horizontal',
        },
        {
            title: '机型认证',
            infos: [],
            columnSpan: 1,
            img: require('./imgs/a330.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '50% 60%',
            bgMaskOrientation: 'horizontal',
        },
        {
            title: '灾害场景',
            infos: [],
            columnSpan: 1,
            img: require('./imgs/tornado.jpg'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '100% 50%',
            bgMaskOrientation: 'horizontal',
        },
    ],
};

const cellGroupOther: CellGroupType = {
    title: '更多体验',
    cells: [
        {
            title: '空中竞速',
            infos: ['多人对抗', '整合雷诺竞赛'],
            rowSpan: 2,
            img: require('./imgs/racing.jpg'),
            backgroundSize: 'auto 190%',
            backgroundPosition: '65% 30%',
            // bgMaskOrientation: 'horizontal',
        },
        {
            title: '玩法继承',
            infos: ['前作模式全部保留'],
            img: require('./imgs/earth.jpg'),
            backgroundSize: '150% auto',
            backgroundPosition: '0% 30%',
            bgMaskOrientation: 'horizontal',
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
            classNameBody={classNames(className)}
            infos={[cellGroupCareer, cellGroupOther]}
        ></Page>
    );
});

export default ThisPage;
