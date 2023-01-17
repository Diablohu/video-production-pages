import { useMemo } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Cell from '@components/cell';

import styles from './index.module.less';

// ============================================================================

const aircrafts = [
    {
        title: 'Cessna Citation CJ4',
        infos: ['塞斯纳奖状 CJ4'],
        img: require('./imgs/cj4.jpg'),
    },
    {
        title: 'Cessna Citation Longitude',
        infos: ['塞斯纳奖状经度'],
        img: require('./imgs/longitude.jpg'),
    },
    {
        title: 'Daher TBM 930',
        img: require('./imgs/tbm930.jpg'),
    },
];
const avionics = [
    {
        title: 'Garmin GNS 430W / 530W',
        img: require('./imgs/gns530.png'),
    },
    {
        title: 'Garmin G3000 / G5000',
        img: require('./imgs/g3000.png'),
    },
];

// Functional Component =======================================================

const AAU1 = extend({
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
            {[...aircrafts, ...avionics].map(({ title, infos = [], img }) => (
                <Cell
                    key={title}
                    title={title}
                    infos={infos}
                    img={img}
                    mask={isMask}
                    textSize="lg"
                />
            ))}
        </div>
    );
});

export default AAU1;
