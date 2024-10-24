import DEVELOPERS from './developers';

export type AircraftType = {
    name: string;
    code?: string;
    type?: AircraftTypes;
    description?: string;
    developers?: DEVELOPERS[];
    img?: string;
    style?: Record<string, string>;
    isDeluxe?: boolean;
    isPremiumDeluxe?: boolean;
};

export enum AircraftTypes {
    Jetliner = '大型喷气客机 / 货机',
    MilitaryCargo = '大型军用运输机',
    MidsizedLiner = '中型涡桨客机 / 货机',
    TurboProp = '涡轮螺旋桨',
    PistonProp = '活塞螺旋桨',
    Helicopter = '直升机',
    Gyrocopter = '旋翼机',
    Glider = '滑翔机',
    Military = '军事战机',
    PrivateJet = '商务 / 私人喷气机',
    EVTOL = '电动垂直起降',
    LightSport = '轻型运动',
    Airship = '飞艇',
    HotAirBalloon = '热气球',
    PoweredParagliding = '动力滑翔伞',
}

const aircrafts: AircraftType[] = [
    {
        name: '空客 A321LR',
        code: 'A321',
        type: AircraftTypes.Jetliner,
        developers: [DEVELOPERS.INIBUILDS],
        img: require('../imgs/a321lr.jpg'),
        style: {
            '--img-size': 'auto 400%',
            '--img-position': '0% 42.5%',
        },
    },
    {
        name: '空客 A330-200/-300/-300P2F',
        code: 'A332/A333',
        type: AircraftTypes.Jetliner,
        developers: [DEVELOPERS.INIBUILDS],
        img: require('../imgs/a330.jpg'),
        style: {
            '--img-size': 'auto 250%',
            '--img-position': '25% 60%',
        },
    },
    {
        name: '空客 A330-743L 大白鲸XL',
        code: '',
        type: AircraftTypes.Jetliner,
        developers: [DEVELOPERS.INIBUILDS],
        img: require('../imgs/beluga-xl.jpg'),
        style: {
            '--img-size': 'auto 300%',
            '--img-position': '85% 40%',
        },
    },
    {
        name: '波音 737 MAX 8',
        code: 'B38M',
        type: AircraftTypes.Jetliner,
        developers: [DEVELOPERS.ASOBO, DEVELOPERS.WORKINGTITLE],
        img: require('../imgs/b38m.jpg'),
        style: {
            '--img-size': 'auto 110%',
            '--img-position': '67% 55%',
        },
    },
    {
        name: '波音 747-400 超级灭火机',
        type: AircraftTypes.Jetliner,
        developers: [DEVELOPERS.ASOBO, DEVELOPERS.WORKINGTITLE],
        img: require('../imgs/b744-supertanker.jpg'),
        style: {
            '--img-size': 'auto 300%',
            '--img-position': '95% 25%',
        },
        isPremiumDeluxe: true,
    },
    {
        name: '波音 747-400 LCF 梦想运输机',
        type: AircraftTypes.Jetliner,
        developers: [DEVELOPERS.ASOBO, DEVELOPERS.WORKINGTITLE],
        img: require('../imgs/b744-dreamlifter.jpg'),
        style: {
            '--img-size': 'auto 250%',
            '--img-position': '95% 45%',
        },
        isPremiumDeluxe: true,
    },
    {
        name: '波音 747-8F',
        type: AircraftTypes.Jetliner,
        developers: [DEVELOPERS.ASOBO, DEVELOPERS.WORKINGTITLE],
        img: require('../imgs/b748.jpg'),
        style: {
            '--img-size': 'auto 100%',
            '--img-position': '100% 0%',
        },
    },

    {
        name: '空客 A400M 星图',
        code: '',
        type: AircraftTypes.MilitaryCargo,
        developers: [DEVELOPERS.INIBUILDS],
        img: require('../imgs/a400m.webp'),
        style: {
            '--img-size': 'auto 300%',
            '--img-position': '60% 52%',
        },
    },
    {
        name: '波音 C-17 环球霸王III',
        type: AircraftTypes.MilitaryCargo,
        developers: [DEVELOPERS.MILTECH],
        img: require('../imgs/c17.jpg'),
        style: {
            '--img-size': 'auto 100%',
            '--img-position': '100% 0%',
        },
        isPremiumDeluxe: true,
    },

    {
        name: 'Heart Aerospace ES-30',
        type: AircraftTypes.MidsizedLiner,
        img: require('../imgs/es30.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '100% 55%',
        },
    },
    {
        name: '萨博 340B',
        type: AircraftTypes.MidsizedLiner,
        developers: [DEVELOPERS.CARENADO, DEVELOPERS.WORKINGTITLE],
        img: require('../imgs/340b.jpg'),
        style: {
            '--img-size': 'auto 125%',
            '--img-position': '0% 20%',
        },
        isPremiumDeluxe: true,
    },

    {
        name: '西锐 SF50 VisionJet',
        code: '',
        type: AircraftTypes.PrivateJet,
        developers: [DEVELOPERS.FLIGHTFX],
        img: require('../imgs/sf50.jpg'),
        style: {
            '--img-size': 'auto 175%',
            '--img-position': '55% 60%',
        },
    },
    {
        name: '皮拉图斯 PC-24',
        code: '',
        type: AircraftTypes.PrivateJet,
        developers: [DEVELOPERS.CARENADO, DEVELOPERS.WORKINGTITLE],
        img: require('../imgs/pc24.jpg'),
        style: {
            '--img-size': 'auto 120%',
            '--img-position': '50% 5%',
        },
        isPremiumDeluxe: true,
    },

    {
        name: '空中拖拉机 AT-802',
        code: '',
        type: AircraftTypes.TurboProp,
        img: require('../imgs/at802.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '90% 30%',
        },
    },
    {
        name: '比奇 C90 GTX 空中国王',
        code: '',
        type: AircraftTypes.TurboProp,
        img: require('../imgs/c90.jpg'),
        style: {
            '--img-size': 'auto 120%',
            '--img-position': '90% 30%',
        },
        isPremiumDeluxe: true,
    },
    {
        name: '塞斯纳 408 天空信使',
        code: '',
        type: AircraftTypes.TurboProp,
        img: require('../imgs/c408.jpg'),
        style: {
            '--img-size': 'auto 120%',
            '--img-position': '25% 30%',
        },
        isDeluxe: true,
    },
    {
        name: '德哈维兰 CL-415',
        code: '',
        type: AircraftTypes.TurboProp,
        developers: [DEVELOPERS.ASOBO],
        img: require('../imgs/cl415.jpg'),
        style: {
            '--img-size': 'auto 250%',
            '--img-position': '80% 55%',
        },
    },
    {
        name: '德哈维兰 DHC-6 双水獭',
        code: '',
        type: AircraftTypes.TurboProp,
        developers: [DEVELOPERS.S_H, DEVELOPERS.INIBUILDS],
        img: require('../imgs/dhc6.jpg'),
        style: {
            '--img-size': 'auto 275%',
            '--img-position': '30% 55%',
        },
    },
    {
        name: '多尼尔 海星',
        code: '',
        type: AircraftTypes.TurboProp,
        img: require('../imgs/seastar.jpg'),
        style: {
            '--img-size': 'auto 130%',
            '--img-position': '100% 40%',
        },
        isDeluxe: true,
    },
    {
        name: 'DracoX',
        code: '',
        type: AircraftTypes.TurboProp,
        developers: [DEVELOPERS.GOTFRIENDS],
        img: require('../imgs/dracox.jpg'),
        style: {
            '--img-size': 'auto 200%',
            '--img-position': '20% 75%',
        },
    },
    {
        name: '皮拉图斯 PC-12 NGx',
        code: '',
        type: AircraftTypes.TurboProp,
        developers: [DEVELOPERS.CARENADO, DEVELOPERS.WORKINGTITLE],
        img: require('../imgs/pc-12-ngx.jpg'),
        style: {
            '--img-size': 'auto 200%',
            '--img-position': '20% 48%',
        },
    },

    {
        name: 'AeroElvira Optica',
        code: '',
        type: AircraftTypes.PistonProp,
        developers: [DEVELOPERS.GOTFRIENDS],
        img: require('../imgs/ea7.png'),
        style: {
            '--img-size': 'auto 190%',
            '--img-position': '92.5% 50%',
        },
    },
    {
        name: 'Albatross G111/HU16',
        code: '',
        type: AircraftTypes.PistonProp,
        img: require('../imgs/g111.jpg'),
        style: {
            '--img-size': 'auto 130%',
            '--img-position': '100% 90%',
        },
        isDeluxe: true,
    },
    {
        name: '塞斯纳 188 农业车',
        code: '',
        type: AircraftTypes.PistonProp,
        developers: [DEVELOPERS.CARENADO],
        img: require('../imgs/c188.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '0% 50%',
        },
        isDeluxe: true,
    },
    {
        name: '塞斯纳 400 Corvalis TT',
        code: '',
        type: AircraftTypes.PistonProp,
        img: require('../imgs/c400.jpg'),
        style: {
            '--img-size': 'auto 130%',
            '--img-position': '20% 20%',
        },
    },
    {
        name: '塞斯纳 404 泰坦',
        code: '',
        type: AircraftTypes.PistonProp,
        img: require('../imgs/c404.jpg'),
        style: {
            '--img-size': 'auto 130%',
            '--img-position': '100% 20%',
        },
        isDeluxe: true,
    },

    {
        name: '空客直升机 H125',
        code: '',
        type: AircraftTypes.Helicopter,
        developers: [DEVELOPERS.ASOBO],
        img: require('../imgs/h125.jpg'),
        style: {
            '--img-size': 'auto 175%',
            '--img-position': '75% 70%',
        },
    },
    {
        name: '空客直升机 H225',
        code: '',
        type: AircraftTypes.Helicopter,
        developers: [DEVELOPERS.HPG],
        img: require('../imgs/h225.jpg'),
        style: {
            '--img-size': 'auto 110%',
            '--img-position': '100% 80%',
        },
        isPremiumDeluxe: true,
    },
    {
        name: '波音 CH47D 支奴干',
        code: '',
        type: AircraftTypes.Helicopter,
        developers: [DEVELOPERS.MILTECH],
        img: require('../imgs/ch47d.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '50% 50%',
        },
        isPremiumDeluxe: true,
    },
    {
        name: '埃里克森 S-64F 空中吊车',
        code: '',
        type: AircraftTypes.Helicopter,
        developers: [DEVELOPERS.BLACKBIRD],
        img: require('../imgs/s64skycrane.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '45% 15%',
        },
    },
    {
        name: '罗宾逊 R66',
        code: '',
        type: AircraftTypes.Helicopter,
        developers: [DEVELOPERS.CARENADO],
        img: require('../imgs/r66.jpg'),
        style: {
            '--img-size': 'auto 125%',
            '--img-position': '20% 75%',
        },
    },

    {
        name: '麦格尼 M-24 猎户座',
        code: '',
        type: AircraftTypes.Gyrocopter,
        developers: [DEVELOPERS.BLUEMESH],
        img: require('../imgs/m24.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '45% 27.5%',
        },
    },

    {
        name: 'Archer 午夜',
        code: '',
        type: AircraftTypes.EVTOL,
        developers: [DEVELOPERS.FLIGHTFX],
        img: require('../imgs/midnight.jpg'),
        style: {
            '--img-size': 'auto 200%',
            '--img-position': '50% 50%',
        },
    },
    {
        name: 'Jeston One',
        code: '',
        type: AircraftTypes.EVTOL,
        developers: [DEVELOPERS.FLIGHTFX],
        img: require('../imgs/jetson-one.jpg'),
        style: {
            '--img-size': 'auto 180%',
            '--img-position': '70% 55%',
        },
    },
    {
        name: 'Joby S4',
        code: '',
        type: AircraftTypes.EVTOL,
        developers: [DEVELOPERS.FLIGHTFX],
        img: require('../imgs/joby-s4.jpg'),
        style: {
            '--img-size': 'auto 125%',
            '--img-position': '45% 75%',
        },
    },

    {
        name: 'CGS Hawk Arrow II',
        code: '',
        type: AircraftTypes.LightSport,
        img: require('../imgs/hawk-arrow-ii.jpg'),
        style: {
            '--img-size': 'auto 200%',
            '--img-position': '40% 80%',
        },
    },
    {
        name: 'MX MXS-R',
        code: '',
        type: AircraftTypes.LightSport,
        developers: [DEVELOPERS.INIBUILDS],
        img: require('../imgs/mxs-r.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '95% 50%',
        },
    },
    {
        name: 'Zivko Edge 540',
        code: '',
        type: AircraftTypes.LightSport,
        developers: [DEVELOPERS.INIBUILDS],
        img: require('../imgs/zivko-edge-540.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '40% 50%',
        },
    },
    {
        name: 'Zlin Savage Norden',
        code: '',
        type: AircraftTypes.LightSport,
        developers: [DEVELOPERS.GOTFRIENDS],
        img: require('../imgs/savage-norden.jpg'),
        style: {
            '--img-size': 'auto 200%',
            '--img-position': '40% 40%',
        },
        isPremiumDeluxe: true,
    },

    {
        name: '蝙蝠 金牛座M',
        code: '',
        type: AircraftTypes.Glider,
        developers: [DEVELOPERS.GOTFRIENDS],
        img: require('../imgs/taurus-m.jpg'),
        style: {
            '--img-size': 'auto 200%',
            '--img-position': '100% 40%',
        },
        isPremiumDeluxe: true,
    },
    {
        name: 'Stemme S12-G',
        code: '',
        type: AircraftTypes.Glider,
        developers: [DEVELOPERS.GOTFRIENDS],
        img: require('../imgs/stemme-s12.webp'),
        style: {
            '--img-size': 'auto 175%',
            '--img-position': '95% 70%',
        },
    },

    {
        name: '费尔柴尔德 A-10 雷电II',
        code: '',
        type: AircraftTypes.Military,
        developers: [DEVELOPERS.DC_DESIGNS],
        img: require('../imgs/a10.jpg'),
        style: {
            '--img-size': 'auto 160%',
            '--img-position': '40% 70%',
        },
    },

    {
        name: '飞艇工业 天舟600',
        code: '',
        type: AircraftTypes.Airship,
        img: require('../imgs/skyship600.jpg'),
        style: {
            '--img-size': 'auto 150%',
            '--img-position': '95% 40%',
        },
    },

    {
        name: '标准热气球',
        code: '',
        type: AircraftTypes.HotAirBalloon,
        img: require('../imgs/hot-air-balloon.jpg'),
        style: {
            '--img-size': 'auto 125%',
            '--img-position': '95% 20%',
        },
    },
    {
        name: 'FlyDoo 热气球',
        type: AircraftTypes.HotAirBalloon,
        img: require('../imgs/flydoo.jpg'),
        style: {
            '--img-size': 'auto 200%',
            '--img-position': '20% 40%',
        },
    },

    {
        name: 'Powrachute Sky Rascal',
        type: AircraftTypes.PoweredParagliding,
        img: require('../imgs/sky-rascal.jpg'),
        style: {
            '--img-size': 'auto 100%',
            '--img-position': '100% 40%',
        },
    },

    {
        name: '雷诺竞赛飞机',
        description: 'L39信天翁、P51野马、T6德州佬',
        img: require('../imgs/p51.jpg'),
        style: {
            '--img-size': 'auto 175%',
            '--img-position': '70% 40%',
        },
    },
];

export default aircrafts;
