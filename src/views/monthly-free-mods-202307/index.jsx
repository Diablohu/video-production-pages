import { extend } from 'koot';
import classNames from 'classnames';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const mods = [
    [
        {
            category: '飞行员形象',
            title: '人类最好的朋友',
            author: 'Got Friends',
            release: 'got-friends.com',
            img: require('./imgs/best_friends.png'),
            imgStyle: {
                backgroundSize: `auto 120%`,
                backgroundPosition: `60% 70%`,
            },
        },
        {
            category: '飞行员形象',
            title: 'Otto Pilot',
            author: 'bagolu',
            release: 'flightsim.to',
            img: require('./imgs/otto_pilot.png'),
            imgStyle: {
                backgroundSize: `auto 250%`,
                backgroundPosition: `45% 40%`,
            },
        },
    ],
    {
        category: '航空器',
        title: '波音787-8 “梦想客机”',
        author: 'Kurorin くろりん',
        release: 'flightsim.to',
        img: require('./imgs/b788.png'),
        imgStyle: {
            backgroundSize: `auto 125%`,
            backgroundPosition: `35% 50%`,
        },
    },
    {
        category: '城市 + 机场',
        title: '科威特城 & 国际机场',
        author: 'YAG',
        release: 'flightsim.to',
        img: require('./imgs/kuwait.png'),
        imgStyle: {
            backgroundSize: `auto 150%`,
            backgroundPosition: `55% 50%`,
        },
    },
    {
        category: '着陆挑战 + 航空器',
        title: <>红牛“正中靶心”</>,
        author: '微软 / ASOBO / 红牛',
        release: '游戏内市场',
        img: require('./imgs/redbull.png'),
        imgStyle: {
            backgroundSize: `auto 120%`,
            backgroundPosition: `70% 80%`,
        },
    },
];

// Functional Component =======================================================

const ThePage = extend({
    styles,
})(({ className, params: { type } }) => {
    return (
        <div className={classNames([className])}>
            <List mods={mods} />
        </div>
    );
});

export default ThePage;

// ============================================================================

const List = ({ mods }) => {
    return (
        <div className={`${classNameModule}-list`}>
            {mods.map((mod, index) =>
                Array.isArray(mod) ? (
                    <List mods={mod} key={index} />
                ) : (
                    <Mod {...mod} key={index} />
                )
            )}
        </div>
    );
};

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
