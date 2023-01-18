import { useMemo, Fragment } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Cell from '@components/cell';

import styles from './index.module.less';

// ============================================================================

const aircrafts = {
    pistonSingle: [
        {
            manufacturer: 'CESSNA',
            plane: '172 "Skyhawk" (G1000)',
            maker: 'ASOBO',
            price: 'BASE',
            avionics: 'Garmin G1000',
            image: require('./imgs/c172.jpg'),
            imageStyle: {
                top: '-70px',
                bottom: '-30px',
                left: '-25px',
            },
        },
        {
            plane: 'DHC-2 "Beaver"',
            maker: 'BlackBird (原MilViz)',
            price: 'BASE',
            avionics: 'Garmin GNS 530',
            image: require('./imgs/dhc2.jpg'),
            imageStyle: {
                top: '-20px',
                bottom: '-10px',
                left: '-40px',
            },
        },
    ],
    pistonTwin: [
        {
            quality: 'legendary',
            manufacturer: 'CESSNA',
            plane: '310R',
            maker: 'BlackBird (原MilViz)',
            price: '$40 美元',
            avionics: 'Garmin GNS 530 + 430',
            pros: ['断路器', '损伤继承', '随机故障'],
            image: require('./imgs/c310.jpg'),
            imageStyle: {
                top: '-50px',
                bottom: '-30px',
                left: '-25px',
            },
        },
        {
            manufacturer: 'CESSNA',
            plane: '414A "CHANCELLOR"',
            maker: 'FlySimware',
            price: '$40 美元',
            avionics: 'Garmin GNS 530',
        },
        {
            manufacturer: 'Britten-Norman',
            plane: 'BN-2 "Islander"',
            maker: 'BlackBox',
            price: '€30 欧元',
            avionics: 'Garmin GNS 530',
        },
    ],
    turbopropSingle: [
        {
            manufacturer: 'DAHER',
            plane: 'TBM930',
            maker: 'ASOBO & WorkingTitle',
            price: 'BASE',
            avionics: 'Garmin G3000',
        },
        {
            manufacturer: 'PILATUS',
            plane: 'PC-6 "Turbo Porter"',
            maker: 'ASOBO',
            price: 'BASE',
            avionics: 'Garmin G1000',
        },
        {
            quality: 'epic',
            manufacturer: 'QUEST',
            plane: 'Kodiak 100 Series II',
            maker: 'Sim Works Studio',
            price: '€30 欧元',
            avionics: 'Garmin G1000',
            pros: ['断路器'],
        },
    ],
    turbopropTwin: [],
    jetSingle: [],
    jetTwin: [],
};

// Functional Component =======================================================

const BestSmallAirplanes202301 = extend({
    styles,
})(({ className, params: { type } }) => {
    return (
        <div className={className}>
            {[
                ['单活塞', aircrafts.pistonSingle],
                ['双活塞', aircrafts.pistonTwin],
                ['单涡桨', aircrafts.turbopropSingle],
                ['双涡桨', []],
                ['单喷气', []],
                ['双喷气', []],
            ].map(([title, group]) => (
                <Fragment key={title}>
                    <div className="title">
                        <h2>{title}</h2>
                    </div>
                    {group.map(
                        ({
                            quality,
                            manufacturer,
                            plane,
                            image,
                            imageStyle,
                            maker,
                            price,
                            avionics,
                            pros,
                        }) => (
                            <span
                                key={`${manufacturer}_${plane}`}
                                className={classNames([
                                    'plane',
                                    {
                                        [`mod-quality-${quality}`]: !!quality,
                                    },
                                ])}
                            >
                                {image && (
                                    <>
                                        <span className="img">
                                            <span
                                                className="picture"
                                                style={{
                                                    backgroundImage: `url(${image})`,
                                                    ...imageStyle,
                                                }}
                                            />
                                        </span>
                                        <span
                                            className="img-blur"
                                            style={{
                                                backgroundImage: `url(${image})`,
                                            }}
                                        />
                                    </>
                                )}
                                <span className="name">
                                    {manufacturer && (
                                        <span>{manufacturer}</span>
                                    )}
                                    <span>{plane}</span>
                                </span>
                                {avionics && (
                                    <span className="avionics">{avionics}</span>
                                )}
                                <span className="infos">
                                    {[
                                        price === 'BASE' ? '游戏内置' : price,
                                        maker,
                                    ]
                                        .filter((v) => !!v)
                                        .join(' / ')}
                                </span>
                                {Array.isArray(pros) && pros.length && (
                                    <ul className="pros">
                                        {pros.map((p, index) => (
                                            <li key={index}>{p}</li>
                                        ))}
                                    </ul>
                                )}
                            </span>
                        )
                    )}
                </Fragment>
            ))}
        </div>
    );
});

export default BestSmallAirplanes202301;

// ============================================================================
