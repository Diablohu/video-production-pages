import { extend } from 'koot';
import classNames from 'classnames';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const mods = [
    {
        category: '实用工具',
        title: '多人模式模型匹配 (M3)',
        author: 'Dannymalloy',
        release: 'flightsim.to',
        img: require('./imgs/f35s.png'),
        imgStyle: {
            backgroundSize: `auto 110%`,
            backgroundPosition: `45% 100%`,
        },
    },
    {
        category: '世界',
        title: '航母 ✅移动 ✅肉球 ✅阻拦索 ✅弹射',
        author: 'Jayshrike',
        release: 'flightsim.to',
        img: require('./imgs/carrier.jpg'),
        imgStyle: {
            backgroundSize: `auto 100%`,
            backgroundPosition: `50% 50%`,
        },
    },
    {
        category: '机场',
        title: '伦敦盖特威克机场',
        author: 'mkvy',
        release: 'flightsim.to',
        img: require('./imgs/egkk.png'),
        imgStyle: {
            backgroundSize: `auto 125%`,
            backgroundPosition: `60% 50%`,
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
