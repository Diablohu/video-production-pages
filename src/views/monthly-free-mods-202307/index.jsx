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
            release: 'flightsim.to',
            img: require('./imgs/ScrapyardMonster-RGB.png'),
            imgStyle: {
                backgroundSize: `auto 120%`,
                backgroundPosition: `30% 50%`,
            },
        },
        {
            category: '飞行员形象',
            title: 'Otto Pilot',
            author: 'bagolu',
            release: 'flightsim.to',
            img: require('./imgs/C172-3.png'),
            imgStyle: {
                backgroundSize: `auto 150%`,
                backgroundPosition: `45% 40%`,
            },
        },
    ],
    {
        category: '航空器',
        title: '波音787-8 “梦想客机”',
        author: 'Kuro くろりん',
        release: 'flightsim.to',
        img: require('./imgs/C172-3.png'),
        imgStyle: {
            backgroundSize: `auto 150%`,
            backgroundPosition: `45% 40%`,
        },
    },
    {
        category: '城市 + 机场',
        title: '科威特城 & 国际机场',
        author: 'YAG',
        release: 'flightsim.to',
        img: require('./imgs/ZSLS.png'),
        imgStyle: {
            backgroundSize: `auto 150%`,
            backgroundPosition: `35% 50%`,
        },
    },
    {
        category: '城市',
        title: <>马来西亚主要城市建筑群</>,
        author: 'KerStudio',
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
