import { useMemo } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const mods = [
    {
        category: '航空器',
        title: '垃圾场金刚',
        subTitle: 'Scrapyard Monster',
        author: 'LordFrites',
        release: 'flightsim.to',
        img: require('./imgs/the-scrapyard-monster-105139-1685560176-Zsvzo.webp'),
    },
    {
        category: '航空器扩展',
        title: '塞斯纳172SP 增强包体验',
        author: 'bagolu',
        release: 'flightsim.to',
        img: require('./imgs/the-scrapyard-monster-105139-1685560176-Zsvzo.webp'),
    },
    {
        category: '机场',
        title: '日照岚山通用机场',
        author: 'leanoon 天涯摘星',
        release: 'flightsim.to',
        img: require('./imgs/the-scrapyard-monster-105139-1685560176-Zsvzo.webp'),
    },
    {
        category: '机场扩展',
        title: '纽约肯尼迪13跑道短五边引进灯',
        author: 'TMongun',
        release: 'flightsim.to',
        img: require('./imgs/the-scrapyard-monster-105139-1685560176-Zsvzo.webp'),
    },
];

// Functional Component =======================================================

const ThePage = extend({
    styles,
})(({ className, params: { type } }) => {
    return (
        <div className={classNames([className])}>
            {mods.map((mod, index) => (
                <Mod {...mod} key={index} />
            ))}
        </div>
    );
});

export default ThePage;

// ============================================================================

const Mod = ({ category, title, subTitle, author, release, img }) => {
    return (
        <div className={`${classNameModule}-item`}>
            <img src={img} alt={title} />
            <div className="wrapper">
                <strong>{title}</strong>
            </div>
        </div>
    );
};
