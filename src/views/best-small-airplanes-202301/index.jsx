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
            image: require('./imgs/c414.webp'),
            imageStyle: {
                top: '0px',
                bottom: '-10px',
                left: '-150px',
            },
        },
        {
            manufacturer: 'Britten-Norman',
            plane: 'BN-2 "Islander"',
            maker: 'BlackBox',
            price: '€30 欧元',
            avionics: 'Garmin GNS 530',
            image: require('./imgs/bn2.webp'),
            imageStyle: {
                top: '-20px',
                bottom: '-10px',
                left: '-170px',
                right: '-80px',
            },
        },
    ],

    turbopropSingle: [
        {
            quality: 'epic',
            manufacturer: 'QUEST',
            plane: 'Kodiak 100 Series II',
            maker: 'Sim Works Studio',
            price: '€30 欧元',
            avionics: 'Garmin G1000',
            pros: ['断路器'],
            image: require('./imgs/kodi.jpg'),
            imageStyle: {
                top: '-90px',
                bottom: '-30px',
                left: '0px',
                right: '-30px',
            },
        },
        {
            manufacturer: 'DAHER',
            plane: 'TBM930',
            maker: 'ASOBO & WorkingTitle',
            price: 'BASE',
            avionics: 'Garmin G3000',
            image: require('./imgs/tbm9.webp'),
            imageStyle: {
                top: '-90px',
                bottom: '-40px',
                left: '0px',
                right: '-50px',
            },
        },
        {
            manufacturer: 'PILATUS',
            plane: 'PC-6 "Turbo Porter"',
            maker: 'ASOBO',
            price: 'BASE',
            avionics: 'Garmin G1000',
            image: require('./imgs/pc6.jpg'),
            imageStyle: {
                top: '-30px',
                bottom: '-0px',
                left: '-180px',
                right: '0px',
            },
        },
    ],
    turbopropTwin: [
        {
            plane: 'DHC-6 "Twin Otter"',
            maker: 'Aerosoft',
            price: '€30 欧元',
            avionics: 'Garmin GNS 530 + 430',
            image: require('./imgs/dhc6.jpg'),
            imageStyle: {
                top: '-90px',
                bottom: '-70px',
                left: '0px',
                right: '-50px',
            },
        },
        {},
    ],

    jetSingle: [
        {
            manufacturer: 'CIRRUS',
            plane: 'Vision SF50',
            maker: 'FlightFX',
            price: '$25 美元',
            avionics: 'Garmin G3000',
            image: require('./imgs/sf50.jpg'),
            imageStyle: {
                top: '-55px',
                bottom: '-40px',
                left: '-30px',
                right: '0px',
            },
        },
    ],
    jetTwin: [
        {
            manufacturer: 'CESSNA',
            plane: 'Citation CJ4',
            maker: 'ASOBO & Working Title',
            price: 'BASE',
            avionics: 'Rockwell Collins Pro Line 21',
            image: require('./imgs/c25c.jpg'),
            imageStyle: {
                top: '-20px',
                bottom: '-20px',
                left: '-0px',
                right: '0px',
            },
        },
        {
            manufacturer: 'CESSNA',
            plane: 'Citation Longitude',
            maker: 'ASOBO & Working Title',
            price: 'PREMIUM',
            avionics: 'Garmin G5000',
            image: require('./imgs/c700.jpg'),
            imageStyle: {
                top: '-120px',
                bottom: '-90px',
                left: '-80px',
                right: '0px',
            },
        },
        {
            manufacturer: 'HONDA',
            plane: 'HA-420 HondaJet',
            maker: 'FlightFX',
            price: '$25 美元',
            avionics: 'Garmin G3000',
            image: require('./imgs/hdjt.jpg'),
            imageStyle: {
                top: '-50px',
                bottom: '-50px',
                left: '-0px',
                right: '0px',
            },
        },
    ],
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
                ['双涡桨', aircrafts.turbopropTwin],
                ['单喷气', aircrafts.jetSingle],
                ['双喷气', aircrafts.jetTwin],
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
                        }) =>
                            !plane ? (
                                <span></span>
                            ) : (
                                <span
                                    key={`${manufacturer}_${plane}`}
                                    className={classNames([
                                        'plane',
                                        {
                                            [`mod-quality-${quality}`]:
                                                !!quality,
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
                                        <span className="avionics">
                                            {avionics}
                                        </span>
                                    )}
                                    <span className="infos">
                                        {[
                                            price === 'BASE'
                                                ? '游戏内置'
                                                : price === 'PREMIUM'
                                                ? '游戏典藏版'
                                                : price,
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
