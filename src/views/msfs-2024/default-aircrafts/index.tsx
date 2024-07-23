import { type FC } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Cell from '@components/cell';
import Page, { TitleCell, InfoCell } from '../';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

interface AircraftType {
    name: string;
    code: string;
    type:
        | 'jet-airliner'
        | 'cargo'
        | 'military-cargo'
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
        | 'hot-air-balloon';
    developers: string[];
    img: string;
    style?: Record<string, string>;
}

const typeName: Record<AircraftType['type'], string> = {
    'jet-airliner': '喷气客机',
    cargo: '大型货机',
    'military-cargo': '军用货机',
    'turbo-prop': '涡轮螺旋桨',
    'piston-prop': '活塞螺旋桨',
    helicopter: '直升机',
    gyrocopter: '旋翼机',
    glider: '滑翔机',
    military: '军事战机',
    'private-jet': '私人喷气机',
    evtol: '电动垂直起降',
    'light-sport': '轻型运动',
    airship: '飞艇',
    'hot-air-balloon': '热气球',
};

const aircrafts: AircraftType[] = [
    {
        name: '波音 737 MAX-8',
        code: 'B38M',
        type: 'jet-airliner',
        developers: ['ASOBO'],
        img: require('./imgs/b38m.jpg'),
        style: {
            '--img-size': 'auto 110%',
            '--img-position': '67% 55%',
        },
    },
    {
        name: '空客 A330-200 / -300',
        code: 'A332/A333',
        type: 'jet-airliner',
        developers: ['iniBuilds'],
        img: require('./imgs/a330.jpg'),
        style: {
            '--img-size': 'auto 250%',
            '--img-position': '25% 60%',
        },
    },
    {
        name: '空客 大白鲸 XL',
        code: '',
        type: 'cargo',
        developers: ['iniBuilds'],
        img: require('./imgs/beluga-xl.jpg'),
        style: {
            '--img-size': 'auto 300%',
            '--img-position': '85% 40%',
        },
    },
    {
        name: '空客 A400M',
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
        name: '西锐 SF50 Vision Jet G2',
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
        name: '德哈维兰 DHC-6 "双水獭"',
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
        name: 'Canadair CL-415',
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
        name: '塞斯纳 188 农业车',
        code: '',
        type: 'piston-prop',
        developers: ['Carenado'],
        img: require('./imgs/c188.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '0% 50%',
        },
    },
    {
        name: 'Edgley EA-7 Optica',
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
        name: '空客 H125',
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
        name: '埃里克森 S-64 "空中吊车"',
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
        name: '麦格尼 M24 "猎户座"',
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
        name: 'Jeston ONE',
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
        name: 'MXS-R',
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
        developers: ['？'],
        img: require('./imgs/skyship600.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '95% 40%',
        },
    },
    {
        name: '？？？',
        code: '',
        type: 'hot-air-balloon',
        developers: ['？'],
        img: require('./imgs/hot-air-balloon.jpg'),
        style: {
            '--img-size': 'auto 125%',
            '--img-position': '95% 20%',
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
                            backgroundPosition: '65% 62%',
                        }}
                    />
                    <div className="sub">
                        <TitleCell>机库继承</TitleCell>
                        <div className="cells">
                            <InfoCell
                                className="cell"
                                title={
                                    <>
                                        <small>MSFS 2020</small>
                                        第一方产品免费继承
                                    </>
                                }
                                img={require('./imgs/b748.png')}
                                infoCell
                                bgMaskOrientation="horizontal"
                                style={{
                                    // '--mask-min-width': '50%',
                                    // '--mask-gradient-angle': '15deg',
                                    backgroundSize: 'auto 500%',
                                    backgroundPosition: '65% 70%',
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
    developers = [],
    img,
    style,
}) => {
    return (
        <Cell
            className={classNames([
                `${classNameModule}-aircraft`,
                `is-type-${type}`,
            ])}
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
                <dd>
                    {typeName[type]} / {developers.join(' + ')}
                </dd>
            </dl>
        </Cell>
    );
};
