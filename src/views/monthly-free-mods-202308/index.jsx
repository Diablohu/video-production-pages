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
        img: require('./imgs/best_friends.png'),
        imgStyle: {
            backgroundSize: `auto 120%`,
            backgroundPosition: `60% 70%`,
        },
    },
    {
        category: '其他',
        title: 'Jayshrike 世界航母',
        author: 'Jayshrike',
        release: 'flightsim.to',
        img: require('./imgs/b788.png'),
        imgStyle: {
            backgroundSize: `auto 125%`,
            backgroundPosition: `35% 50%`,
        },
    },
    {
        category: '机场',
        title: '伦敦盖特威克机场',
        author: 'mkvy',
        release: 'flightsim.to',
        img: require('./imgs/kuwait.png'),
        imgStyle: {
            backgroundSize: `auto 150%`,
            backgroundPosition: `55% 50%`,
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
