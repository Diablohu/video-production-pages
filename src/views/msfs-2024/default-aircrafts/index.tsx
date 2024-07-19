import { type FC } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Cell from '@components/cell';
import Page, { TitleCell } from '../';

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
        | 'light-sport';
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
    military: '军用',
    'private-jet': '私人喷气机',
    evtol: '电动垂直起降',
    'light-sport': '轻型运动',
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
            '--img-position': '75% 55%',
        },
    },
    {
        name: '空客 A330-200 / -300',
        code: 'A332/A333',
        type: 'jet-airliner',
        developers: ['iniBuilds'],
        img: 'https://cdn.koot.dev/msfs-2024/aircrafts/boeing-737-max-8.jpg',
    },
    {
        name: '空客大白鲸 XL',
        code: '',
        type: 'cargo',
        developers: ['iniBuilds'],
        img: 'https://cdn.koot.dev/msfs-2024/aircrafts/boeing-737-max-8.jpg',
    },
    {
        name: '空客 A400M',
        code: '',
        type: 'military-cargo',
        developers: ['iniBuilds'],
        img: 'https://cdn.koot.dev/msfs-2024/aircrafts/boeing-737-max-8.jpg',
    },
    {
        name: '西锐 SF50 Vision Jet',
        code: '',
        type: 'private-jet',
        developers: ['FlightFX'],
        img: 'https://cdn.koot.dev/msfs-2024/aircrafts/boeing-737-max-8.jpg',
    },
    {
        name: '德哈维兰 DHC-6 "双水獭"',
        code: '',
        type: 'turbo-prop',
        developers: ['Aerosoft', 'iniBuilds', 'S&H'],
        img: 'https://cdn.koot.dev/msfs-2024/aircrafts/boeing-737-max-8.jpg',
    },
    {
        name: '皮拉图斯 PC-12 NGx',
        code: '',
        type: 'turbo-prop',
        developers: ['Carenado', 'WorkingTitle'],
        img: 'https://cdn.koot.dev/msfs-2024/aircrafts/boeing-737-max-8.jpg',
    },
    {
        name: 'Canadair CL-415',
        code: '',
        type: 'turbo-prop',
        developers: ['ASOBO'],
        img: 'https://cdn.koot.dev/msfs-2024/aircrafts/boeing-737-max-8.jpg',
    },
    {
        name: 'DracoX',
        code: '',
        type: 'turbo-prop',
        developers: ['GotFriends'],
        img: 'https://cdn.koot.dev/msfs-2024/aircrafts/boeing-737-max-8.jpg',
    },
    {
        name: '塞斯纳188 农业车',
        code: '',
        type: 'piston-prop',
        developers: ['Carenado'],
        img: 'https://cdn.koot.dev/msfs-2024/aircrafts/boeing-737-max-8.jpg',
    },
    {
        name: 'Edgley EA-7 Optica',
        code: '',
        type: 'piston-prop',
        developers: ['GotFriends'],
        img: 'https://cdn.koot.dev/msfs-2024/aircrafts/boeing-737-max-8.jpg',
    },
    {
        name: '空客 H125',
        code: '',
        type: 'helicopter',
        developers: ['ASOBO'],
        img: 'https://cdn.koot.dev/msfs-2024/aircrafts/boeing-737-max-8.jpg',
    },
    {
        name: 'Joby S4',
        code: '',
        type: 'evtol',
        developers: ['FlightFX'],
        img: 'https://cdn.koot.dev/msfs-2024/aircrafts/boeing-737-max-8.jpg',
    },
    {
        name: 'Jeston ONE',
        code: '',
        type: 'evtol',
        developers: ['FlightFX'],
        img: 'https://cdn.koot.dev/msfs-2024/aircrafts/boeing-737-max-8.jpg',
    },
    {
        name: 'MXS-R 红牛版',
        code: '',
        type: 'light-sport',
        developers: ['iniBuilds'],
        img: 'https://cdn.koot.dev/msfs-2024/aircrafts/boeing-737-max-8.jpg',
    },
    {
        name: 'Zivko Edge 540 红牛版',
        code: '',
        type: 'light-sport',
        developers: ['iniBuilds'],
        img: 'https://cdn.koot.dev/msfs-2024/aircrafts/boeing-737-max-8.jpg',
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
                <div className="cells"></div>
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
                    {typeName[type]} / {developers.join(', ')}
                </dd>
            </dl>
        </Cell>
    );
};
