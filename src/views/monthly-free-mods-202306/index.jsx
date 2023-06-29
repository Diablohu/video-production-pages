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
        img: require('./imgs/ScrapyardMonster-RGB.png'),
        imgStyle: {
            backgroundSize: `auto 120%`,
            backgroundPosition: `30% 50%`,
        },
    },
    {
        category: '航空器扩展',
        title: '塞斯纳172SP 体验增强包',
        author: 'bagolu',
        release: 'flightsim.to',
        img: require('./imgs/C172-3.png'),
        imgStyle: {
            backgroundSize: `auto 150%`,
            backgroundPosition: `45% 40%`,
        },
    },
    {
        category: '机场',
        title: '日照岚山通用机场',
        author: 'leanoon 天涯摘星',
        release: 'flightsim.to',
        img: require('./imgs/ZSLS.png'),
        imgStyle: {
            backgroundSize: `auto 150%`,
            backgroundPosition: `35% 50%`,
        },
    },
    {
        category: '机场扩展',
        title: (
            <>
                纽约肯尼迪
                <br />
                13跑道短五边引进灯
            </>
        ),
        author: 'TMongun',
        release: 'flightsim.to',
        img: require('./imgs/KJFK.png'),
        imgStyle: {
            backgroundSize: `auto 175%`,
            backgroundPosition: `70% 60%`,
        },
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

const Mod = ({
    category,
    title,
    subTitle,
    author,
    release,
    img,
    imgStyle = {},
}) => {
    return (
        <div className={`${classNameModule}-item`}>
            <div
                className="img"
                style={{
                    backgroundImage: `url(${img})`,
                    ...imgStyle,
                }}
            />
            <div className="wrapper">
                <span>{author}</span>
                <strong>
                    <small>{category}</small>
                    {title}
                    <small>{subTitle}</small>
                </strong>
            </div>
        </div>
    );
};
