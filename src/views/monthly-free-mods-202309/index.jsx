import { extend } from 'koot';
import classNames from 'classnames';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const mods = [
    {
        category: '景观',
        title: 'We Love VFR',
        author: 'PuffinFlight',
        release: 'flightsim.to',
        img: require('./imgs/we-love-vfr.webp'),
        imgStyle: {
            backgroundSize: `auto 100%`,
            backgroundPosition: `60% 100%`,
        },
    },
    {
        category: '机场',
        title: '卢森堡机场',
        author: 'TheRedFox',
        release: 'flightsim.to',
        img: require('./imgs/ellx.png'),
        imgStyle: {
            backgroundSize: `auto 100%`,
            backgroundPosition: `40% 50%`,
        },
    },
    {
        category: '涂装',
        title: 'HAC ATR-42 Snow Miku',
        author: 'Royinbour',
        release: 'flightsim.to',
        img: require('./imgs/atr-snow-miku.png'),
        imgStyle: {
            backgroundSize: `auto 125%`,
            backgroundPosition: `60% 45%`,
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
                ),
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
