import { useMemo } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

// import Cell from '@components/cell';
import FooterInfo from '@components/footer-info';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const changes = [
    {
        title: '深度机模上架 XBOX 版市场',
        // infos: [],
        img: require('./imgs/xbox.png'),
        backgroundStyles: {
            backgroundPosition: `0% 0%`,
        },
    },
    {
        title: '游戏启动速度优化',
        // infos: [],
        img: require('./imgs/launch.png'),
    },
    {
        title: '气流改进',
        infos: ['真实滑翔 & 高空巡航不再颠'],
        img: require('./imgs/thermals.png'),
        backgroundStyles: {
            backgroundSize: `auto 135%`,
            backgroundPosition: `40% 50%`,
        },
    },
    {
        title: '湍流辅助',
        infos: ['自由调节晃动幅度'],
        img: require('./imgs/windsock.webp'),
        backgroundStyles: {
            backgroundSize: `auto 100%`,
            backgroundPosition: `0% 50%`,
        },
    },
    {
        title: '大量飞机改进',
        infos: ['A310 & Bell 407 & 塞斯纳奖状 ...'],
        img: require('./imgs/aircrafts-improvements.png'),
        backgroundStyles: {
            backgroundSize: `100% auto`,
            backgroundPosition: `12.5% 65%`,
        },
    },
    {
        title: '世界更新改进',
        infos: ['优化地景细节'],
        img: require('./imgs/nz.webp'),
        backgroundStyles: {
            backgroundSize: `100% auto`,
            backgroundPosition: `50% 15%`,
        },
    },
    {
        title: '世界枢纽 (内测)',
        infos: ['所有人都可以改地景'],
        img: require('./imgs/hub.png'),
        backgroundStyles: {
            backgroundSize: `300% auto`,
            backgroundPosition: `70% 52%`,
        },
    },
    {
        title: '实时交通改进',
        infos: ['相关插件也终获修复'],
        img: require('./imgs/traffic.png'),
        backgroundStyles: {
            backgroundSize: `400% auto`,
            backgroundPosition: `15% 60%`,
        },
    },
    {
        title: '弹出仪表功能改进 (PC)',
        infos: ['记忆窗口尺寸和位置'],
        img: require('./imgs/popout.png'),
        backgroundStyles: {
            backgroundSize: `175% auto`,
            backgroundPosition: `70% 80%`,
        },
    },
    {
        title: '航电改进',
        infos: ['佳明插件 & 开发框架'],
        img: require('./imgs/garmin.png'),
        backgroundStyles: {
            backgroundSize: `100% auto`,
            backgroundPosition: `12.5% 90%`,
        },
    },
];

const uppers = changes.slice(0, 2);
const lowers = changes.slice(2);

// Functional Component =======================================================

const SU12NotebleChanges = extend({
    styles,
})(({ className, params: { type } }) => {
    const isMask = useMemo(() => type === 'mask', [type]);
    const isDemo = useMemo(() => type === 'demo', [type]);

    return (
        <div
            className={classNames(className, {
                'is-mask-mode': isMask === true,
            })}
        >
            <div className="upper">
                {uppers.map(
                    ({ title, infos, img, backgroundStyles = {} }, index) => (
                        <Cell
                            key={index}
                            mask={isMask}
                            title={title}
                            infos={infos}
                            img={img}
                            backgroundStyles={backgroundStyles}
                            data-index={index}
                        />
                    )
                )}
            </div>
            <div className="lower">
                {lowers.map(
                    ({ title, infos, img, backgroundStyles = {} }, index) => (
                        <Cell
                            key={index}
                            mask={isMask}
                            title={title}
                            infos={infos}
                            img={img}
                            backgroundStyles={backgroundStyles}
                            data-index={index}
                        />
                    )
                )}
            </div>
            <FooterInfo className="info" date="2023/03/20" />
        </div>
    );
});

export default SU12NotebleChanges;

// Functional Component =======================================================

const Cell = ({
    className,
    title,
    infos,
    img,
    mask = false,
    backgroundStyles = {},
}) => {
    return (
        <div
            className={classNames([
                `${classNameModule}-cell`,
                {
                    'is-mask': mask === true,
                },
            ])}
        >
            <em
                style={{ backgroundImage: `url(${img})`, ...backgroundStyles }}
            />
            <strong>{title}</strong>
            {infos?.map((info, index) => (
                <span key={index}>{info}</span>
            ))}
        </div>
    );
};
