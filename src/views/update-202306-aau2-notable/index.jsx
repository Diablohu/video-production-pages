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
        img: require('./imgs/787.jpg'),
        backgroundStyles: {
            backgroundPosition: `100% 50%`,
        },
    },
    {
        title: '翻新! 波音 747-8 洲际版',
        // infos: [],
        img: require('./imgs/747.jpg'),
        backgroundStyles: {
            backgroundPosition: `10% 0%`,
        },
    },
    {
        title: '佳明 G3000/G5000 更新',
        img: require('./imgs/g3000.png'),
        backgroundStyles: {
            backgroundPosition: `40% 50%`,
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
