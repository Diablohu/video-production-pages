import { useMemo } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

// import Cell from '@components/cell';
import FooterInfo from '@components/footer-info';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const changes = [
    {
        title: '翻新! 波音 787-10 梦想客机',
        // infos: [],
        img: require('./imgs/Boeing 787-10 B78X.mp4_20230620_040145.545.png'),
        backgroundStyles: {
            backgroundPosition: `25% 50%`,
        },
    },
    {
        title: '翻新! 波音 747-8 洲际版',
        // infos: [],
        img: require('./imgs/Boeing747-8i B748.mkv_20230620_035641.800.png'),
        backgroundStyles: {
            backgroundPosition: `55% 50%`,
        },
    },
    {
        title: '佳明航电优化',
        img: require('./imgs/2023-06-17 (2).mp4_20230620_040510.792.png'),
        backgroundStyles: {
            backgroundPosition: `87.5% 20%`,
            backgroundSize: '300% auto',
        },
    },
];

// const uppers = changes.slice(0, 2);
// const lowers = changes.slice(2);

// Functional Component =======================================================

const SU12NotebleChanges = extend({
    styles,
})(({ className, params: { type } }) => {
    const isMask = useMemo(() => type === 'mask', [type]);
    const isDemo = useMemo(() => type === 'demo', [type]);
    const isDark = useMemo(() => type === 'dark', [type]);

    return (
        <div
            className={classNames(className, {
                'is-mask-mode': isMask === true,
                'is-dark-mode': isDark === true,
            })}
        >
            <div className="upper">
                {changes.map(
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
            <FooterInfo className="info" date="2023/05/04" />
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
