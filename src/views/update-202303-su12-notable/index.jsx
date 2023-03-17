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
        img: require('./imgs/nz.webp'),
    },
    {
        title: '游戏启动速度优化',
        // infos: [],
        img: require('./imgs/nz.webp'),
    },
    {
        title: '气流改进',
        infos: ['高空巡航不再颠'],
        img: require('./imgs/nz.webp'),
    },
    {
        title: '湍流辅助',
        infos: ['自由调节晃动幅度'],
        img: require('./imgs/nz.webp'),
    },
    {
        title: '大量飞机改进',
        infos: ['A310 & Bell 407 & 塞斯纳奖状 & ...'],
        img: require('./imgs/nz.webp'),
    },
    {
        title: '世界更新改进',
        infos: ['优化地景细节'],
        img: require('./imgs/nz.webp'),
    },
    {
        title: '世界枢纽 (内测)',
        infos: ['所有人都可以改地景'],
        img: require('./imgs/nz.webp'),
    },
    {
        title: '弹出仪表功能改进 (PC)',
        infos: ['记忆窗口尺寸和位置'],
        img: require('./imgs/nz.webp'),
    },
    {
        title: '实时交通改进',
        infos: ['相关插件也终获修复'],
        img: require('./imgs/nz.webp'),
    },
    {
        title: '航电改进',
        infos: ['佳明插件 & 开发框架'],
        img: require('./imgs/nz.webp'),
    },
];

const uppers = changes.slice(0, 2);
const lower1 = changes.slice(2, 4);
const lower2 = changes.slice(4);

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
            <div className="upper"></div>
            <div className="lower"></div>
            <FooterInfo className="info" date="2023/02/23" />
        </div>
    );
});

export default SU12NotebleChanges;

// Functional Component =======================================================

const Cell = ({ className, title, infos, img, mask = false }) => {
    return (
        <div
            className={classNames([
                `${classNameModule}-cell`,
                {
                    'is-mask': mask === true,
                },
            ])}
            style={{
                backgroundImage: !img ? undefined : `url(${img})`,
            }}
        >
            <strong>{title}</strong>
            {infos?.map((info, index) => (
                <span key={index}>{info}</span>
            ))}
        </div>
    );
};
