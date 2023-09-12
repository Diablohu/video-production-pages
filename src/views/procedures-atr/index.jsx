import { useMemo, useState } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Procedures from '@components/precedures';
import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const procedures = [
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
            ['DC GEN 2', '2发直流发电机', '开'],
        ],
    ],
    [
        '基于 HOTEL 模式启发',
        [
            ['AUX GND HYD', '辅助地面液压', '按下'],
            ['螺旋桨制动状态', '确认 READY'],
            ['Prop Brake', '螺旋桨制动', '关'],
            ['发动机信息', '确认'],
            ['CL 2', '2发状态杆', 'NORM'],
            ['AC WILD GEN 2', '2发交流发电机', '开'],
            '启动1发',
        ],
    ],
];

// const uppers = changes.slice(0, 2);
// const lowers = changes.slice(2);

// Functional Component =======================================================

const Page = extend({
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

export default Page;
