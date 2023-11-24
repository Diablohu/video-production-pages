import { extend } from 'koot';
import classNames from 'classnames';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const mods = [
    {
        category: '航空器',
        title: (
            <>
                波音787-9
                <br />
                “梦想客机”
            </>
        ),
        author: 'Horizon Simulations',
        release: 'Headwind 安装器 & flightsim.to',
        img: require('./imgs/b789.jpg'),
        imgStyle: {
            backgroundSize: `auto 130%`,
            backgroundPosition: `30% 100%`,
        },
    },
    [
        {
            category: '航空器增强',
            title: (
                <>
                    波音787
                    <br />
                    副驾PFD修正
                </>
            ),
            author: 'Kurorin くろりん',
            release: 'flightsim.to',
            img: require('./imgs/787-pfd.webp'),
            imgStyle: {
                backgroundSize: `auto 150%`,
                backgroundPosition: `95% 100%`,
            },
        },
        {
            category: '涂装',
            title: (
                <>
                    波音787
                    <br />
                    吉祥航空原神号
                </>
            ),
            author: 'LongYoi',
            release: 'flightsim.to',
            img: require('./imgs/genshin787.jpg'),
            imgStyle: {
                backgroundSize: `auto 150%`,
                backgroundPosition: `35% 100%`,
            },
        },
    ],
    {
        category: '飞行员形象',
        title: 'Avitar',
        author: 'Got Friends',
        release: 'got-friends.com',
        img: require('./imgs/avitar.webp'),
        imgStyle: {
            backgroundSize: `auto 100%`,
            backgroundPosition: `70% 0%`,
        },
    },
    {
        category: '官方DLC',
        title: (
            <>
                世界更新15
                <br />
                北欧 & 格陵兰
            </>
        ),
        author: '微软',
        release: '游戏内市场',
        img: require('./imgs/wu15.jpg'),
        imgStyle: {
            backgroundSize: `auto 100%`,
            backgroundPosition: `20% 70%`,
        },
    },
    [
        {
            category: '机场',
            title: (
                <>
                    ENBR
                    <br />
                    挪威卑尔根
                </>
            ),
            author: 'WombiiActual',
            release: 'flightsim.to',
            img: require('./imgs/enbr.webp'),
            imgStyle: {
                backgroundSize: `auto 175%`,
                backgroundPosition: `55% 60%`,
            },
        },
        {
            category: '机场',
            title: (
                <>
                    MHTG
                    <br />
                    洪都拉斯通孔廷
                </>
            ),
            author: 'KAZE',
            release: 'flightsim.to',
            img: require('./imgs/mhtg.webp'),
            imgStyle: {
                backgroundSize: `auto 275%`,
                backgroundPosition: `60% 92%`,
            },
        },
    ],
    [
        {
            category: '机场',
            title: (
                <>
                    SBSP
                    <br />
                    巴西圣保罗
                </>
            ),
            author: 'Zoffy',
            release: 'flightsim.to',
            img: require('./imgs/sbsp.webp'),
            imgStyle: {
                backgroundSize: `auto 175%`,
                backgroundPosition: `60% 100%`,
            },
        },
        {
            category: '机场',
            title: (
                <>
                    NTAA
                    <br />
                    塔希提法阿
                </>
            ),
            author: 'Givenchy987',
            release: 'flightsim.to',
            img: require('./imgs/ntaa.webp'),
            imgStyle: {
                backgroundSize: `auto 120%`,
                backgroundPosition: `40% 70%`,
            },
        },
    ],
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
