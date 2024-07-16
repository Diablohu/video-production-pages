import { useMemo, useState } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Procedures from '@components/precedures';
import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const procedures = [
    [
        '启动发动机',
        [
            ['发动机主控', '开'],
            ['GLOW ON 信息消失', '确认'],
            ['点火', '执行'],
            <span>自动点火开始</span>,
            '',
            ['Oil Pre. 至少0.9BAR', '滑油压力', '检查'],
            ['发动机参数', '检查'],
        ],
    ],
    [
        '最终驾驶舱准备 2/2',
        [
            ['驻机刹车', '启用 / 检查'],
            ['高度修压', '调定 & 检查'],
            ['着陆海拔', '检查'],
            ['FMS / COM / NAV', '设定'],
            ['燃油量 / FOB', '检查'],
            ['发动机已用燃油量', '重置'],
            ['Memo Panel', '备忘面板', '检查'],
            ['PWR MGT', '功率管理', 'TO'],
        ],
    ],
    [
        '螺旋桨转动前',
        [
            ['CDLS', '驾驶舱门锁', '开'],
            ['FMS & 起飞性能数据', '确认'],
            ['配平（3个轴）', '调定'],
            ['Tail Prop', '尾椎', '在机上'],
            ['外部舱门', '关闭'],
            ['安全带指示灯', '开'],
            ['Beacon', '信标灯', '开'],
        ],
    ],
    [
        'HOTEL 模式',
        [
            ['Prop Brake', '螺旋桨制动', '开'],
            ['Fuel Pump 2', '2发油泵', '开'],
            ['点火方式', '调定'],
            ['Starter 2', '2发点火', '按下'],
            ['发动机信息', '确认'],
            ['CL 2', '2发状态杆', 'FTR'],
            ['DC GEN 2', '2发直流发电机', '开 / 灯灭'],
            <span>此时可以后推</span>,
            '',
            ['地面电源', '关 / 断开'],
        ],
    ],
    [
        '基于 HOTEL 模式启发',
        [
            <span>取得启动发动机许可</span>,
            '',
            ['HYD AUX PUMP', '辅助液压泵', '按下'],
            ['螺旋桨制动状态', '确认 READY'],
            ['Prop Brake', '螺旋桨制动', '关'],
            ['发动机信息', '确认'],
            ['CL 2', '2发状态杆', 'AUTO'],
            ['AC WILD GEN 2', '2发交流发电机', '开'],
            '启动1发',
            ['Fuel Pump 1', '1发油泵', '开'],
            ['点火方式', '调定'],
            ['Starter 1', '1发点火', '按下'],
            ['发动机信息', '确认'],
            ['CL 1', '1发状态杆', 'AUTO'],
            ['DC GEN 1', '1发直流发电机', '开'],
            ['AC WILD GEN 1', '1发交流发电机', '开'],
            <span>启动发动机完成</span>,
            '',
            ['点火方式', '重置'],
            ['顶板', '无白灯'],
        ],
    ],
    [
        '滑行前',
        [
            ['FWS', 'RECALL'],
            ['Com Hatch', '文档门', '关'],
            ['CL 1+2', '状态杆', 'AUTO'],
            ['防冰', '按需'],
            ['TRU', '开 & 确认'],
            ['Anti-Skid Test', '防滑测试', '执行'],
            ['襟翼', '起飞构型'],
            ['鼻轮转向', '开'],
        ],
    ],
    [
        '滑行',
        [
            <span>取得滑行许可</span>,
            '',
            ['滑行 & 起飞灯', '开'],
            ['刹车', '检查'],
            ['FGCP / FMA', '调定 / 检查'],
            ['TO CONFIG', '起飞构型检查', '执行'],
        ],
    ],
    [
        '起飞前',
        [
            ['起飞简令', '执行'],
            ['Gust Lock', '阵风锁', '关'],
            ['飞行控制', '检查'],
            ['XPDR / TCAS', '应答机', '检查'],
            ['Boost', '增压', '按需'],
            ['气流', '正常'],
            '',
            ['机组', '已通知'],
            ['发动机引气', '按需'],
            ['外部灯光', '开'],
            ['ND', '设置'],
            <span>进入跑道</span>,
            '',
            ['FD 水平指引', '置中'],
            ['脚舵', '置中'],
            ['气象雷达', '按需'],
        ],
    ],
    [
        '起飞后',
        [
            ['起落架', '收上'],
            ['襟翼', '0°'],
            ['PWR MGT / NP', '功率管理', 'CLB / 检查'],
            ['发动机引气', '开'],
            ['滑行 & 起飞灯', '关'],
            '',
            ['高度修压', '调定 & 检查'],
        ],
    ],
    [
        '下高',
        [
            ['FWS', 'RECALL'],
            ['着陆海拔', '检查'],
            ['FMS 进场程序与性能', '设定 & 检查'],
            ['DH / MDA', '决断高度', '调定 & 检查'],
            ['着陆简令', '执行'],
        ],
    ],
    [
        '进近',
        [
            ['安全带指示灯', '开'],
            ['降落灯', '开'],
            ['高度修压', '调定 & 检查'],
            ['客舱高度', '检查'],
        ],
    ],
    [
        '着陆前',
        [
            ['机组', '已通知'],
            ['起落架', '3绿灯'],
            ['襟翼', '构型'],
            ['PWR MGT', '功率管理', 'TO'],
            ['TLU LO SPEED', '检查'],
            ['结冰 AoA 指示灯', '按需'],
            ['外部灯光', '开'],
        ],
    ],
    [
        '着陆后',
        [
            ['气象雷达', 'STBY'],
            ['飞行控制', '锁定'],
            ['襟翼', '0°'],
            ['配平（3个轴）', '重置'],
            ['降落灯 & 频闪灯', '关'],
            ['防 / 除冰', '关'],
            ['探针加热', '关'],
            ['TRU', '关'],
            <span>至少经过2分钟后</span>,
            '',
            ['CL 1', '1发状态杆', 'FTR 然后 SO'],
        ],
    ],
];

// const uppers = changes.slice(0, 2);
// const lowers = changes.slice(2);

// Functional Component =======================================================

const ThisPage = extend({
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
            <Procedures
                title={procedures[currIndex][0]}
                list={procedures[currIndex][1]}
            />
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

export default ThisPage;
