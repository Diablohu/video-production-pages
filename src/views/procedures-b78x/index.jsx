import { useMemo, useState, isValidElement } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const procedures = [
    [
        '驾驶舱准备',
        [
            ['燃油 & 负载', 'SET'],
            '顶板',
            ['Battery', '电池', 'ON'],
            ['Hydraulic C1 & C2', '液压', 'OFF'],
            ['Hydraulic L/R DEMAND', '液压', 'OFF'],
            ['NAV', '导航灯', 'ON'],
            '中央操纵台',
            ['Parking Brake', '驻机刹车', 'SET'],
            '顶板',
            ['EXT PWR FWD', '外部电源', 'ON'],
            ['AC Trim Air', '空调', 'ON'],
            ['AC Upper Recirc', '空调', 'ON'],
            ['AC L/R Pack', '空调', 'AUTO'],
            ['IRS L/R', 'ON'],
            ['FD Door Power', 'ON'],
            ['Emer Lights', '紧急灯光', 'ARM'],
            ['Seat Belts', '安全带灯', 'ON'],
            ['照明灯光', '按需'],
        ],
    ],
    [
        '航电准备',
        [
            'CDU 页面',
            ['IDENT / POS INIT', '输入当前机场'],
            ['RTE 1 第一页', '输入起降机场'],
            ['RTE 1 第二页', '输入航路'],
            ['DEP&ARR', '输入起降程序'],
            ['LEGS', '通过ND预览航路'],
            ['RTE 1', '激活航路, 执行'],
            ['RTE 1 / ALTN', '输入备降信息'],
            ['PERF INIT', '输入参数'],
            ['THRUST LIM', '决定推力参数'],
            ['TAKEOFF', '输入起飞参数'],
            <span className="fmc-success">FMC PREFLIGHT COMPLETE</span>,
            'MCP (自动驾驶面板)',
            ['空速', '调节至起飞V2'],
            ['高度', '调节至初始爬升高度'],
            'CDU 页面',
            ['VNAV', '决定参数'],
        ],
    ],
    [
        '启动前',
        [
            <span>取得后推与启动发动机许可</span>,
            '顶板',
            ['Fuel Pump L/R FWD/AFT', '油泵', 'ON'],
            ['Fuel Pump L/R CTR', '油泵', '按需'],
            ['APU', '电力', 'START'],
            ['APU GEN L/R', '电力', 'ON'],
            'EICAS 页面',
            ['SYS STAT', '检查APU信息'],
            ['SYS ELEC', '检查APU供电'],
        ],
    ],
    [
        '后推 & 启动',
        [
            '顶板',
            ['Seat Belts', '安全带灯', 'ON'],
            ['EXT PWR', '所有外部电源', 'OFF'],
            ['Window Heat Primary L/R', '加热', 'ON'],
            ['BEACON', '信标灯', 'ON'],
            '中央操纵台',
            ['Parking Brake', '驻机刹车', 'OFF'],
            <span>后推</span>,
            '同时启动双发',
            ['Fuel Control R', '中央操作台', 'RUN'],
            ['Engine Start R', '顶板', 'START'],
            ['Fuel Control L', '中央操作台', 'RUN'],
            ['Engine Start L', '顶板', 'START'],
            ['EICAS 引擎信息页', '观察N2'],
            <span className="engine-start">
                <span>AUTOSTART</span>＞<span>RUNNING</span>
            </span>,
        ],
    ],
    [
        '启动后 & 滑行',
        [
            ['Parking Brake', '驻机刹车', 'SET'],
            '顶板',
            ['Hydraulic L/R Primary', '液压', 'ON'],
            ['Hydraulic C1 & C2', '液压', 'AUTO'],
            ['Hydraulic L/R DEMAND', '液压', 'AUTO'],
            ['ELEC CTRL L1/L2/R1/R2', '电力', 'ON'],
            ['APU', '电力', 'OFF'],
            '',
            ['XPDR', '应答机', 'TA ONLY'],
            ['Flaps', '襟翼', 'SET'],
            ['Trim', '升降舵配平', 'SET'],
            'MCP (自动驾驶面板)',
            ['高度', '调节至初始爬升高度'],
            ['航向', '调节至跑道磁航向'],
            ['空速', '调节至起飞V2'],
            ['FD', '飞行指引仪', 'ON'],
            ['修压', 'SET'],
            '',
            ['TAXI', '顶板滑行灯', 'ON'],
            ['Parking Brake', '驻机刹车', 'OFF'],
        ],
    ],
    [
        '进入跑道前',
        [
            'EICAS 页面',
            ['SYS FCTL', '检查飞行操控'],
            'PFD',
            ['V1/VR/V2', 'CHECK'],
            'MCP (自动驾驶面板)',
            ['空速', '调节至起飞V2'],
            ['高度', '调节至初始爬升高度'],
            '',
            ['XPDR', '应答机', 'TA/RA'],
            ['Auto Brake', '自动刹车', 'RTO'],
            ['Flaps', '襟翼', 'SET'],
            ['Trim', '升降舵配平', 'SET'],
            '顶板',
            ['LANDING', '起落灯', 'ON'],
            ['STROBE', '频闪灯', 'ON'],
        ],
    ],
    [
        '进入跑道 / 起飞前',
        [
            ['起飞跑道', '确认'],
            'MCP (自动驾驶面板)',
            ['LNAV', 'ARM/按需'],
            ['VNAV', 'ARM/按需'],
            ['A/T L/R', '自动油门', 'ARM'],
            'PFD FMA',
            ['TOGA - TOGA', '确认'],
            '',
            ['MFD', '设置'],
        ],
    ],
    [
        '起飞',
        [
            ['Parking Brake', '驻机刹车', 'OFF'],
            '油门',
            ['提升至30%推力', '验证'],
            ['提升至目标推力 (绿区)', 'SET'],
            ['50kt 前激活 TOGA', 'ON'],
            'PFD FMA',
            ['THR REF', 'CHECK'],
            ['80kt 时 HOLD', 'CHECK'],
        ],
    ],
    [
        '起飞后',
        [
            ['Gear', '起落架', 'UP'],
            ['Flaps', '襟翼', 'UP'],
            ['Auto Brake', '自动刹车', 'OFF'],
            ['Speed Brake', '扰流板', 'DISARM'],
            ['顶板灯开关', '按需'],
            <span>巡航</span>,
            ['修压', 'STD'],
            ['Seat Belts', '安全带灯', 'OFF / 按需'],
            ['顶板灯开关', '按需'],
        ],
    ],
    [
        '下降 & 进近',
        [
            ['Seat Belts', '顶板安全带灯', 'ON'],
            ['MCP 高度', '调节至更低的高度'],
            ['Auto Brake', '自动刹车', '3 / 按需'],
            ['修压', 'SET'],
            ['决断高度', 'SET'],
            'CDU 页面',
            ['APPROACH REF', 'SET'],
        ],
    ],
    [
        '着陆前',
        [
            ['LANDING', '顶板起落灯', 'ON'],
            ['MCP 高度', '调节至复飞高度'],
            ['决断高度', 'SET'],
            ['Auto Brake', '自动刹车', '3 / 按需'],
            ['Gear', '起落架', 'DOWN'],
            ['Flaps', '襟翼', 'CONFIG'],
            ['Speed Brake', '扰流板', 'ARM'],
        ],
    ],
    [
        '着陆后',
        [
            '顶板',
            ['LANDING', '起落灯', 'OFF'],
            ['STROBE', '频闪灯', 'OFF'],
            ['其他灯开关', '按需'],
            ['APU', '电力', 'START'],
            'MCP (自动驾驶面板)',
            ['AP', '自动驾驶', 'OFF'],
            ['AT', '自动油门', 'OFF'],
            ['FD', '飞行指引仪', 'OFF'],
            '',
            ['Auto Brake', '自动刹车', 'OFF'],
            ['Flaps', '襟翼', 'UP'],
            ['Speed Brake', '扰流板', 'DISARM'],
            ['XPDR', '应答机', 'STBY'],
        ],
    ],
];

// const uppers = changes.slice(0, 2);
// const lowers = changes.slice(2);

// Functional Component =======================================================

const ProceduresB78X = extend({
    styles,
})(({ className, params: { type } }) => {
    const isMask = useMemo(() => type === 'mask', [type]);
    const isDemo = useMemo(() => type === 'demo', [type]);
    const isDark = useMemo(() => type === 'dark', [type]);

    const [currIndex, setCurrIndex] = useState(0);

    return (
        <div
            className={classNames(className, {
                'is-mask-mode': isMask === true,
                'is-dark-mode': isDark === true,
            })}
        >
            <div className="list">
                <h3>{procedures[currIndex][0]}</h3>
                <div className="body">
                    {procedures[currIndex][1].map((item, index) =>
                        isValidElement(item) ? (
                            <span className="info">{item}</span>
                        ) : !Array.isArray(item) ? (
                            <strong className="title" key={index}>
                                {item}
                            </strong>
                        ) : (
                            <dl className="item" key={index}>
                                <dt>
                                    {item.length > 2 && `${item.at(1)} `}
                                    {item.at(0)}
                                </dt>
                                <dd className="action">{item.at(-1)}</dd>
                            </dl>
                        )
                    )}
                </div>
            </div>
            <div className="precedures">
                {procedures.map(([name], index) => (
                    <button
                        type="button"
                        key={index}
                        className={classNames([
                            'switch',
                            {
                                'is-on': index === currIndex,
                            },
                        ])}
                        // eslint-disable-next-line react/jsx-no-bind
                        onClick={() => {
                            setCurrIndex(index);
                        }}
                    >
                        {name}
                    </button>
                ))}
            </div>
        </div>
    );
});

export default ProceduresB78X;
