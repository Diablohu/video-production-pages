import { extend } from 'koot';
import classNames from 'classnames';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const mask = true;

const planes = [
    ['Junkers JU-52', '$14.99 美元', require('./imgs/ju52.webp')],
    ['Dornier Do J Wal', '$14.99 美元', require('./imgs/doj.jpg')],
    [
        'Granville Brothers Gee Bee Model Z & Model R-2',
        '$14.99 美元',
        require('./imgs/geebee.webp'),
    ],
    ['Beechcraft Bonanza V35', '$14.99 美元', require('./imgs/v35.webp')],
];

// Functional Component =======================================================

const HighQuality3RdPartyPlanes2022 = extend({
    styles,
})(({ className }) => {
    return (
        <div
            className={classNames(className, {
                'is-mask-mode': mask === true,
            })}
        >
            {planes.map(([name, usd, img]) => (
                <Cell key={img} name={name} usd={usd} img={img} />
            ))}
        </div>
    );
});

export default HighQuality3RdPartyPlanes2022;

// ============================================================================

const Cell = ({ name, usd, img }) => {
    return (
        <div
            className={`${classNameModule}-cell`}
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <strong>{name}</strong>
            <em>{usd}</em>
        </div>
    );
};
