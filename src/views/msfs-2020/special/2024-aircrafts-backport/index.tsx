import { type FC } from 'react';
import { extend } from 'koot';

import Page, { type Props as PageProps } from '@views/page';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

type BackportedAircraftType = {
    name: string | JSX.Element;
    img: string;
    priceTier: 1 | 2;
    developers: Array<
        'ASOBO' | 'Carenado' | 'BlueMesh' | 'Got Friends' | 'Mike Johnson'
    >;
    infos: string[];
};

// Functional Component =======================================================

const ThisPage = extend({
    styles,
})(({ className }) => {
    return (
        <Page>
            <div className={`${classNameModule}`}>
                <Aircrafts
                    edition="Standard"
                    aircrafts={[
                        {
                            name: 'AeroElvira Optica',
                            img: require('./imgs/optica.png'),
                            priceTier: 1,
                            developers: ['Got Friends'],
                            infos: ['轻型固定翼', '活塞'],
                        },
                        {
                            name: (
                                <>
                                    Air Tractor
                                    <br />
                                    AT-802
                                </>
                            ),
                            img: require('./imgs/at802.png'),
                            priceTier: 2,
                            developers: ['ASOBO'],
                            infos: [
                                '小型固定翼',
                                '涡轮',
                                '双版本：后三点起落架 + 水陆两用浮筒',
                            ],
                        },
                        {
                            name: 'Cessna 400 Corvalis TT',
                            img: require('./imgs/c400.png'),
                            priceTier: 2,
                            developers: ['Carenado'],
                            infos: ['小型固定翼', '活塞', 'G1000 航电'],
                        },
                        {
                            name: 'CGS Hawk Arrow II',
                            img: require('./imgs/arrow-2.png'),
                            priceTier: 1,
                            developers: ['BlueMesh'],
                            infos: ['轻型固定翼', '活塞', 'G3X Touch 航电'],
                        },
                        {
                            name: 'De Havilland Canada CL-415',
                            img: require('./imgs/cl415.png'),
                            priceTier: 2,
                            developers: ['ASOBO'],
                            infos: ['中型固定翼', '涡桨', '水陆两用'],
                        },
                        {
                            name: 'Magni M-24 Orion',
                            img: require('./imgs/m24.png'),
                            priceTier: 1,
                            developers: ['BlueMesh'],
                            infos: ['轻型旋翼机'],
                        },
                        {
                            name: 'Powrachute Sky Rascal',
                            img: require('./imgs/sky-rascal.png'),
                            priceTier: 1,
                            developers: ['BlueMesh'],
                            infos: ['动力滑翔伞'],
                        },
                        {
                            name: (
                                <>
                                    Robinson
                                    <br />
                                    R66
                                </>
                            ),
                            img: require('./imgs/r66.png'),
                            priceTier: 1,
                            developers: ['Carenado'],
                            infos: ['轻型直升机', '涡轮轴'],
                        },
                    ]}
                />

                <h2 data-edition="Premium">
                    豪华版
                    <small>Premium</small>
                </h2>
                <Aircrafts
                    edition="Premium"
                    aircrafts={[
                        {
                            name: (
                                <>
                                    Cessna 188B
                                    <br />
                                    AGTruck
                                </>
                            ),
                            img: require('./imgs/c188.png'),
                            priceTier: 2,
                            developers: ['Carenado'],
                            infos: ['小型固定翼', '活塞'],
                        },
                        {
                            name: (
                                <>
                                    Grumman HU-16 & G-111
                                    <br />
                                    Albatross
                                </>
                            ),
                            img: require('./imgs/hu16.png'),
                            priceTier: 2,
                            developers: ['Mike Johnson'],
                            infos: [
                                '小型固定翼',
                                '活塞',
                                '水陆两用',
                                'G-111：现代改装，G1000 航电',
                            ],
                        },
                    ]}
                />

                <h2 data-edition="Premium Deluxe">
                    高级豪华版
                    <small>Premium Deluxe</small>
                </h2>
                <Aircrafts
                    edition="Premium Deluxe"
                    aircrafts={[
                        {
                            name: (
                                <>
                                    Beechcraft King Air
                                    <br />
                                    C90 GTX
                                </>
                            ),
                            img: require('./imgs/c90.png'),
                            priceTier: 2,
                            developers: ['Carenado'],
                            infos: ['小型固定翼', '涡桨', 'Pro Line 21 航电'],
                        },
                        {
                            name: (
                                <>
                                    Pipistrel
                                    <br />
                                    Taurus M
                                </>
                            ),
                            img: require('./imgs/taurus-m.png'),
                            priceTier: 1,
                            developers: ['Got Friends'],
                            infos: ['滑翔机', '自有动力'],
                        },
                        {
                            name: (
                                <>
                                    Zlin
                                    <br />
                                    Savage Norden
                                </>
                            ),
                            img: require('./imgs/savage-norden.png'),
                            priceTier: 2,
                            developers: ['Got Friends'],
                            infos: [
                                '轻型固定翼',
                                '活塞 + FADEC',
                                'G3X Touch 航电',
                            ],
                        },
                    ]}
                />
            </div>
        </Page>
    );
});

export default ThisPage;

// ============================================================================

const Aircrafts: FC<{
    edition: 'Standard' | 'Premium' | 'Premium Deluxe';
    aircrafts: BackportedAircraftType[];
}> = ({ edition, aircrafts }) => {
    return (
        <div className={`${classNameModule}-aircrafts`} data-edition={edition}>
            {aircrafts.map((aircraft, index) => (
                <div key={index} className={`${classNameModule}-aircraft`}>
                    <span className="image">
                        <em
                            style={{ backgroundImage: `url(${aircraft.img})` }}
                        />
                    </span>
                    <strong className="title">{aircraft.name}</strong>
                    <small className="developers">
                        {aircraft.developers.join(' / ')}
                    </small>
                    <small className="price">
                        {aircraft.priceTier === 1
                            ? 'US$10・RMB￥80'
                            : aircraft.priceTier === 2
                              ? 'US$15・RMB￥120'
                              : ''}
                    </small>
                    <span className="infos">
                        {aircraft.infos.map((info, index) => (
                            <small key={index} className="info">
                                {info}
                            </small>
                        ))}
                    </span>
                </div>
            ))}
        </div>
    );
};
