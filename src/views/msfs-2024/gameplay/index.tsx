import { extend } from 'koot';
import classNames from 'classnames';

import Page, { type CellGroupType } from '../';

import styles from './index.module.less';

// ============================================================================

const cellGroupCareer: CellGroupType = {
    title: '全新玩法：生涯',
    cells: [
        {
            title: '飞行员生涯',
            infos: [
                '定制形象',
                '赚钱养飞机',
                '机型认证',
                '分支选择：水平翼、直升机',
                '全球随机任务',
                '多样场景：山火、风暴……',
            ],
            rowSpan: 2,
            columnSpan: 2,
            img: require('./imgs/vip-charter.jpg'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '30% 50%',
            bgMaskOrientation: 'horizontal',
        },
        {
            title: '航司管理',
            infos: [],
            columnSpan: 2,
            img: require('./imgs/office.webp'),
            backgroundSize: '150% auto',
            backgroundPosition: '50% 47%',
            bgMaskOrientation: 'horizontal',
        },
        // {
        //     title: '灾害场景',
        //     infos: [],
        //     columnSpan: 1,
        //     img: require('./imgs/tornado.jpg'),
        //     backgroundSize: 'auto 150%',
        //     backgroundPosition: '100% 50%',
        //     bgMaskOrientation: 'horizontal',
        // },
    ],
};

const cellGroupOther: CellGroupType = {
    title: '更多体验',
    cells: [
        {
            title: '挑战联赛',
            infos: ['低空挑战', '着陆挑战', '玩法与排行定期更新'],
            img: require('./imgs/challenge.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '45% 50%',
            columnSpan: 2,
            // bgMaskOrientation: 'horizontal',
        },
        {
            title: '空中竞速',
            infos: ['多人对抗', '整合雷诺竞赛'],
            img: require('./imgs/racing.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '55% 33%',
            // bgMaskOrientation: 'horizontal',
            columnSpan: 2,
        },
        {
            title: '环球摄影',
            infos: ['落地拍摄', '空中拍摄'],
            img: require('./imgs/hot-airballoon.jpg'),
            backgroundSize: 'auto 170%',
            backgroundPosition: '20% 100%',
            // bgMaskOrientation: 'horizontal',
        },
        {
            title: '玩法继承',
            infos: ['前作模式全部保留'],
            img: require('./imgs/earth.jpg'),
            backgroundSize: '150% auto',
            backgroundPosition: '0% 30%',
            bgMaskOrientation: 'horizontal',
            // columnSpan: 2,
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
