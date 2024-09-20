import { type FC } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Cell from '@components/cell';
import Page, { TitleCell, InfoCell } from '../';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

type AircraftTypes =
    | 'jetliner'
    | 'military-cargo'
    | 'midsized-liner'
    | 'turbo-prop'
    | 'piston-prop'
    | 'helicopter'
    | 'gyrocopter'
    | 'glider'
    | 'military'
    | 'private-jet'
    | 'evtol'
    | 'light-sport'
    | 'airship'
    | 'hot-air-balloon'
    | 'powered-paragliding';
type AircraftType = {
    name: string;
    code?: string;
    type?: AircraftTypes;
    description?: string;
    developers?: string[];
    img?: string;
    style?: Record<string, string>;
    isDeluxe?: boolean;
    isPremiumDeluxe?: boolean;
};

const typeName: Record<AircraftTypes, string> = {
    jetliner: '大型喷气客机 / 货机',
    'military-cargo': '大型军用运输机',
    'midsized-liner': '中型涡桨客机 / 货机',
    'turbo-prop': '涡轮螺旋桨',
    'piston-prop': '活塞螺旋桨',
    helicopter: '直升机',
    gyrocopter: '旋翼机',
    glider: '滑翔机',
    military: '军事战机',
    'private-jet': '商务 / 私人喷气机',
    evtol: '电动垂直起降',
    'light-sport': '轻型运动',
    airship: '飞艇',
    'hot-air-balloon': '热气球',
    'powered-paragliding': '动力滑翔伞',
};

const aircrafts: AircraftType[] = [
    {
        name: '空客 A321LR',
        code: 'A321',
        type: 'jetliner',
        img: require('./imgs/a321lr.jpg'),
        style: {
            '--img-size': 'auto 400%',
            '--img-position': '0% 42.5%',
        },
    },
    {
        name: '空客 A330-200/-300/-300P2F',
        code: 'A332/A333',
        type: 'jetliner',
        developers: ['iniBuilds'],
        img: require('./imgs/a330.jpg'),
        style: {
            '--img-size': 'auto 250%',
            '--img-position': '25% 60%',
        },
    },
    {
        name: '空客 A330-743L 大白鲸XL',
        code: '',
        type: 'jetliner',
        developers: ['iniBuilds'],
        img: require('./imgs/beluga-xl.jpg'),
        style: {
            '--img-size': 'auto 300%',
            '--img-position': '85% 40%',
        },
    },
    {
        name: '波音 737 MAX 8',
        code: 'B38M',
        type: 'jetliner',
        developers: ['ASOBO'],
        img: require('./imgs/b38m.jpg'),
        style: {
            '--img-size': 'auto 110%',
            '--img-position': '67% 55%',
        },
    },
    {
        name: '波音 747-400 超级灭火机',
        type: 'jetliner',
        img: require('./imgs/b744-supertanker.jpg'),
        style: {
            '--img-size': 'auto 300%',
            '--img-position': '95% 25%',
        },
        isPremiumDeluxe: true,
    },
    {
        name: '波音 747-400 LCE 梦想运输机',
        type: 'jetliner',
        img: require('./imgs/b744-dreamlifter.jpg'),
        style: {
            '--img-size': 'auto 250%',
            '--img-position': '95% 45%',
        },
        isPremiumDeluxe: true,
    },
    {
        name: '波音 747-8F',
        type: 'jetliner',
        img: require('./imgs/b748.jpg'),
        style: {
            '--img-size': 'auto 100%',
            '--img-position': '100% 0%',
        },
    },

    {
        name: '空客 A400M 星图',
        code: '',
        type: 'military-cargo',
        developers: ['iniBuilds'],
        img: require('./imgs/a400m.webp'),
        style: {
            '--img-size': 'auto 300%',
            '--img-position': '60% 52%',
        },
    },
    {
        name: '波音 C-17 环球霸王III',
        type: 'military-cargo',
        img: require('./imgs/c17.jpg'),
        style: {
            '--img-size': 'auto 100%',
            '--img-position': '100% 0%',
        },
        isPremiumDeluxe: true,
    },

    {
        name: 'Heart Aerospace ES-30',
        type: 'midsized-liner',
        img: require('./imgs/es30.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '100% 55%',
        },
    },
    {
        name: '萨博 340B',
        type: 'midsized-liner',
        img: require('./imgs/340b.jpg'),
        style: {
            '--img-size': 'auto 125%',
            '--img-position': '0% 20%',
        },
        isPremiumDeluxe: true,
    },

    {
        name: '西锐 SF50 VisionJet',
        code: '',
        type: 'private-jet',
        developers: ['FlightFX'],
        img: require('./imgs/sf50.jpg'),
        style: {
            '--img-size': 'auto 175%',
            '--img-position': '55% 60%',
        },
    },
    {
        name: '皮拉图斯 PC-24',
        code: '',
        type: 'private-jet',
        img: require('./imgs/pc24.jpg'),
        style: {
            '--img-size': 'auto 120%',
            '--img-position': '50% 5%',
        },
        isPremiumDeluxe: true,
    },

    {
        name: '空中拖拉机 AT-802',
        code: '',
        type: 'turbo-prop',
        img: require('./imgs/at802.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '90% 30%',
        },
    },
    {
        name: '比奇 C90 GTX 空中国王',
        code: '',
        type: 'turbo-prop',
        img: require('./imgs/c90.jpg'),
        style: {
            '--img-size': 'auto 120%',
            '--img-position': '90% 30%',
        },
        isPremiumDeluxe: true,
    },
    {
        name: '塞斯纳 408 天空信使',
        code: '',
        type: 'turbo-prop',
        img: require('./imgs/c408.jpg'),
        style: {
            '--img-size': 'auto 120%',
            '--img-position': '25% 30%',
        },
        isDeluxe: true,
    },
    {
        name: '德哈维兰 CL-415',
        code: '',
        type: 'turbo-prop',
        developers: ['ASOBO'],
        img: require('./imgs/cl415.jpg'),
        style: {
            '--img-size': 'auto 250%',
            '--img-position': '80% 55%',
        },
    },
    {
        name: '德哈维兰 DHC-6 双水獭',
        code: '',
        type: 'turbo-prop',
        developers: ['Aerosoft', 'iniBuilds', 'S&H'],
        img: require('./imgs/dhc6.jpg'),
        style: {
            '--img-size': 'auto 275%',
            '--img-position': '30% 55%',
        },
    },
    {
        name: '多尼尔 海星',
        code: '',
        type: 'turbo-prop',
        img: require('./imgs/seastar.jpg'),
        style: {
            '--img-size': 'auto 130%',
            '--img-position': '100% 40%',
        },
        isDeluxe: true,
    },
    {
        name: 'DracoX',
        code: '',
        type: 'turbo-prop',
        developers: ['GotFriends'],
        img: require('./imgs/dracox.jpg'),
        style: {
            '--img-size': 'auto 200%',
            '--img-position': '20% 75%',
        },
    },
    {
        name: '皮拉图斯 PC-12 NGx',
        code: '',
        type: 'turbo-prop',
        developers: ['Carenado', 'WorkingTitle'],
        img: require('./imgs/pc-12-ngx.jpg'),
        style: {
            '--img-size': 'auto 200%',
            '--img-position': '20% 48%',
        },
    },

    {
        name: 'AeroElvira Optica',
        code: '',
        type: 'piston-prop',
        developers: ['GotFriends'],
        img: require('./imgs/ea7.png'),
        style: {
            '--img-size': 'auto 190%',
            '--img-position': '92.5% 50%',
        },
    },
    {
        name: 'Albatross G111/HU16',
        code: '',
        type: 'piston-prop',
        img: require('./imgs/g111.jpg'),
        style: {
            '--img-size': 'auto 130%',
            '--img-position': '100% 90%',
        },
        isDeluxe: true,
    },
    {
        name: '塞斯纳 188 农业车',
        code: '',
        type: 'piston-prop',
        developers: ['Carenado'],
        img: require('./imgs/c188.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '0% 50%',
        },
        isDeluxe: true,
    },
    {
        name: '塞斯纳 400 Corvalis TT',
        code: '',
        type: 'piston-prop',
        img: require('./imgs/c400.jpg'),
        style: {
            '--img-size': 'auto 130%',
            '--img-position': '20% 20%',
        },
    },
    {
        name: '塞斯纳 404 泰坦',
        code: '',
        type: 'piston-prop',
        img: require('./imgs/c404.jpg'),
        style: {
            '--img-size': 'auto 130%',
            '--img-position': '100% 20%',
        },
        isDeluxe: true,
    },

    {
        name: '空客直升机 H125',
        code: '',
        type: 'helicopter',
        developers: ['ASOBO'],
        img: require('./imgs/h125.jpg'),
        style: {
            '--img-size': 'auto 175%',
            '--img-position': '75% 70%',
        },
    },
    {
        name: '空客直升机 H225',
        code: '',
        type: 'helicopter',
        img: require('./imgs/h225.jpg'),
        style: {
            '--img-size': 'auto 110%',
            '--img-position': '100% 80%',
        },
        isPremiumDeluxe: true,
    },
    {
        name: '波音 CH47D 支奴干',
        code: '',
        type: 'helicopter',
        img: require('./imgs/ch47d.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '50% 50%',
        },
        isPremiumDeluxe: true,
    },
    {
        name: '埃里克森 S-64F 空中吊车',
        code: '',
        type: 'helicopter',
        developers: ['BlackBird'],
        img: require('./imgs/s64skycrane.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '45% 15%',
        },
    },
    {
        name: '罗宾逊 R66',
        code: '',
        type: 'helicopter',
        developers: ['Carenado'],
        img: require('./imgs/r66.jpg'),
        style: {
            '--img-size': 'auto 125%',
            '--img-position': '20% 75%',
        },
    },

    {
        name: '麦格尼 M-24 猎户座',
        code: '',
        type: 'gyrocopter',
        developers: ['BlueMesh'],
        img: require('./imgs/m24.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '45% 27.5%',
        },
    },

    {
        name: 'Archer 午夜',
        code: '',
        type: 'evtol',
        img: require('./imgs/midnight.jpg'),
        style: {
            '--img-size': 'auto 200%',
            '--img-position': '50% 50%',
        },
    },
    {
        name: 'Jeston One',
        code: '',
        type: 'evtol',
        developers: ['FlightFX'],
        img: require('./imgs/jetson-one.jpg'),
        style: {
            '--img-size': 'auto 180%',
            '--img-position': '70% 55%',
        },
    },
    {
        name: 'Joby S4',
        code: '',
        type: 'evtol',
        developers: ['FlightFX'],
        img: require('./imgs/joby-s4.jpg'),
        style: {
            '--img-size': 'auto 125%',
            '--img-position': '45% 75%',
        },
    },

    {
        name: 'CGS Hawk Arrow II',
        code: '',
        type: 'light-sport',
        img: require('./imgs/hawk-arrow-ii.jpg'),
        style: {
            '--img-size': 'auto 200%',
            '--img-position': '40% 80%',
        },
    },
    {
        name: 'MX MXS-R',
        code: '',
        type: 'light-sport',
        developers: ['iniBuilds'],
        img: require('./imgs/mxs-r.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '95% 50%',
        },
    },
    {
        name: 'Zivko Edge 540',
        code: '',
        type: 'light-sport',
        developers: ['iniBuilds'],
        img: require('./imgs/zivko-edge-540.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '40% 50%',
        },
    },
    {
        name: 'Zlin Savage Norden',
        code: '',
        type: 'light-sport',
        img: require('./imgs/savage-norden.jpg'),
        style: {
            '--img-size': 'auto 200%',
            '--img-position': '40% 40%',
        },
        isPremiumDeluxe: true,
    },

    {
        name: '蝙蝠 金牛座M',
        code: '',
        type: 'glider',
        img: require('./imgs/taurus-m.jpg'),
        style: {
            '--img-size': 'auto 200%',
            '--img-position': '100% 40%',
        },
        isPremiumDeluxe: true,
    },
    {
        name: 'Stemme S12-G',
        code: '',
        type: 'glider',
        developers: ['GotFriends'],
        img: require('./imgs/stemme-s12.webp'),
        style: {
            '--img-size': 'auto 175%',
            '--img-position': '95% 70%',
        },
    },

    {
        name: '费尔柴尔德 A-10 雷电II',
        code: '',
        type: 'military',
        developers: ['DC Designs'],
        img: require('./imgs/a10.jpg'),
        style: {
            '--img-size': 'auto 160%',
            '--img-position': '40% 70%',
        },
    },

    {
        name: '飞艇工业 天舟600',
        code: '',
        type: 'airship',
        img: require('./imgs/skyship600.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '95% 40%',
        },
    },

    {
        name: '标准热气球',
        code: '',
        type: 'hot-air-balloon',
        img: require('./imgs/hot-air-balloon.jpg'),
        style: {
            '--img-size': 'auto 125%',
            '--img-position': '95% 20%',
        },
    },
    {
        name: 'FlyDoo 热气球',
        type: 'hot-air-balloon',
        img: require('./imgs/flydoo.jpg'),
        style: {
            '--img-size': 'auto 200%',
            '--img-position': '20% 40%',
        },
    },

    {
        name: 'Powrachute Sky Rascal',
        type: 'powered-paragliding',
        img: require('./imgs/sky-rascal.jpg'),
        style: {
            '--img-size': 'auto 100%',
            '--img-position': '100% 40%',
        },
    },

    {
        name: '雷诺竞赛飞机（标准版）',
        description: 'L39信天翁、P51野马、T6德州佬',
        img: require('./imgs/p51.jpg'),
        style: {
            '--img-size': 'auto 175%',
            '--img-position': '70% 40%',
        },
    },
];

// Functional Component =======================================================

const ThisPage = extend({
    styles,
})(({ className }) => {
    return (
        <Page updateDate={true} classNameBody={classNames(className)}>
            <div className="aircrafts">
                <TitleCell>全新航空器</TitleCell>
                <div className="cells">
                    {aircrafts.map((aircraft) => (
                        <Aircraft
                            key={`${aircraft.code}_${aircraft.name}`}
                            {...aircraft}
                        />
                    ))}
                </div>
            </div>
            <div className="avionics">
                <TitleCell>全新航电系统</TitleCell>
                <div className="cells">
                    <InfoCell
                        className="cell"
                        title={
                            <>
                                霍尼韦尔
                                <br />
                                Primus Epic 2.0
                            </>
                        }
                        infos={['WorkingTitle']}
                        img={require('./imgs/honeywell-primus-epic-2.jpg')}
                        infoCell
                        bgMaskOrientation="horizontal"
                        style={{
                            '--mask-min-width': '120%',
                            '--mask-gradient-angle': '15deg',
                            backgroundSize: 'auto 140%',
                            backgroundPosition: '45% 90%',
                        }}
                    />
                    <InfoCell
                        className="cell"
                        title={<>LXNAV ADI</>}
                        infos={['GotFriends']}
                        img={require('./imgs/lxnav-adi.jpg')}
                        infoCell
                        // bgMaskOrientation="horizontal"
                        style={{
                            // '--mask-min-width': '50%',
                            // '--mask-gradient-angle': '15deg',
                            backgroundSize: 'auto 500%',
                            backgroundPosition: '66% 62%',
                        }}
                    />
                    <div className="sub">
                        <TitleCell>第一方航空器</TitleCell>
                        <div className="cells">
                            <InfoCell
                                className="cell"
                                title="标配……"
                                infos={[
                                    'EFB',
                                    '绕机检查',
                                    '故障、损伤、污渍',
                                    '客机客舱与乘客',
                                ]}
                                img={require('./imgs/cabin.webp')}
                                infoCell
                                bgMaskOrientation="horizontal"
                                style={{
                                    // '--mask-min-width': '50%',
                                    // '--mask-gradient-angle': '15deg',
                                    backgroundSize: 'auto 100%',
                                    backgroundPosition: '35% 70%',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
});

export default ThisPage;

// Functional Component =======================================================

const Aircraft: FC<AircraftType> = ({
    name,
    code,
    type,
    description,
    developers = [],
    img = '',
    style,

    isDeluxe = false,
    isPremiumDeluxe = false,
}) => {
    return (
        <Cell
            className={classNames(
                [`${classNameModule}-aircraft`, `is-type-${type}`],
                {
                    'mod-is-deluxe': isDeluxe,
                    'mod-is-premium-deluxe': isPremiumDeluxe,
                },
            )}
        >
            <dl style={style}>
                {img && (
                    <>
                        <span className="img">
                            <span
                                className="picture"
                                style={{
                                    backgroundImage: `url(${img})`,
                                }}
                            />
                        </span>
                        <span
                            className="img-blur"
                            style={{
                                backgroundImage: `url(${img})`,
                            }}
                        />
                    </>
                )}
                <dt className="name">{name}</dt>
                {/* <dd>
                    {typeName[type]} / {developers.join(' + ')}
                </dd> */}
                <dd>
                    {type && type in typeName ? typeName[type] : description}
                </dd>
            </dl>
        </Cell>
    );
};
