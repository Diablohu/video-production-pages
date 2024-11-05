import { extend } from 'koot';
import classNames from 'classnames';

import Page, { type CellGroupType } from '../';

import styles from './index.module.less';

// ============================================================================

const cellGroupCareer: CellGroupType = {
    title: '旧版插件',
    cells: [
        {
            title: '自动兼容',
            infos: ['社区目录机制保留', '内置市场自动继承', '仅个别例外'],
            img: require('./imgs/fbw-a20n.png'),
            backgroundSize: 'auto 200%',
            backgroundPosition: '65% 85%',
            bgMaskOrientation: 'horizontal',
        },
        {
            title: '可选升级',
            infos: [
                '利用全新技术',
                '开发商决定费用',
                '第一方机型与机场免费升级',
            ],
            img: require('./imgs/an-225.jpg'),
            backgroundSize: '175% auto',
            backgroundPosition: '22.5% 65%',
            bgMaskOrientation: 'horizontal',
        },
    ],
};

const cellGroupOther: CellGroupType = {
    title: '内置市场',
    cells: [
        {
            title: '租赁',
            infos: ['购买时补差价', '开发商决定费用和时长'],
            img: require('./imgs/kodiak.jpg'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '0% 90%',
            bgMaskOrientation: 'horizontal',
        },
        {
            title: '赠与',
            infos: ['为好友购买'],
            img: require('./imgs/f-14.jpg'),
            backgroundSize: 'auto 133%',
            backgroundPosition: '10% 100%',
            // bgMaskOrientation: 'horizontal',
        },
        {
            title: '全新打分机制',
            infos: ['音画质量', '技术水准', '拟真度'],
            img: require('./imgs/atr-cockpit.jpg'),
            backgroundSize: 'auto 300%',
            backgroundPosition: '35% 45%',
            // bgMaskOrientation: 'horizontal',
        },
        {
            title: '高级版本附加内容',
            infos: ['零售：可直接购买'],
            img: require('./imgs/b78x.jpg'),
            backgroundSize: 'auto 150%',
            backgroundPosition: '55% 100%',
            // bgMaskOrientation: 'horizontal',
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
