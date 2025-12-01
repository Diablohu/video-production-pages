import { useMemo, useState } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Procedures from '@components/precedures';
import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const procedures = [
    [
        '驾驶舱准备 1/2',
        [
            <span>外部绕机检查</span>,
            '',
            ['发动机罩', '卸下'],
            ['空速管罩', '卸下'],
            '',
            <span>顶板</span>,
            '',
            ['BAT x4', '电池', 'ON'],
            ['GPU', '外部电源', 'ON'],
            ['IRS x3', '惯性基准系统', 'NAV'],
            ['安全带指示灯', 'ON'],
            ['禁止吸烟指示灯', 'ON'],
            ['电子设备指示灯', 'ON'],
            ['紧急出口灯光', 'ARM'],
            ['NAV', '导航灯', '1 或 2'],
            ['LOGO', '标志灯', 'AUTO 或 ON'],
            '',
            <span>中控台</span>,
            '',
            ['驾驶舱灯光', '按需'],
            ['RMP', '无线电面板', '按需'],
        ],
    ],
    [
        '驾驶舱准备 2/2',
        [
            ['OIS｜飞行计划', '下载'],
            ['OIS｜设置配载 & 燃油量', '按需'],
            ['ECAM｜燃油量', '检查'],
            ['MFD｜飞行初始化', '操作'],
            ['MFD｜燃油量预测', '操作'],
            ['BARO', 'EFIS｜修正海压', '调定'],
            '',
            <span>IRS 惯性导入完成</span>,
            '',
            ['FD', 'FCU｜飞行指引仪', 'ON'],
            '',
            <span>收到放行许可</span>,
            '',
            ['MFD｜离场程序', '按需'],
            ['MFD｜起飞性能 & 减噪程序', '按需'],
            ['MFD｜应答机', '设置'],
            ['FCU｜初始爬升高度', '调定'],
            ['FMA', '确认'],
            '',
            <span>电子检查单</span>,
            '',
            ['COCKPIT PREPARATION', '完成'],
        ],
    ],
    [
        '后推',
        [
            <span>顶板</span>,
            '',
            ['APU', '辅助动力单元', '启动'],
            ['APU BLEED', '辅助动力引气', 'ON'],
            ['GPU', '外部电源', 'OFF'],
            ['燃油泵', 'ON'],
            ['机组供氧', 'ON'],
            '',
            <span></span>,
            '',
            ['中控台｜驻机刹车', '解除'],
            ['OIS｜舱门', '关闭'],
            ['OIS｜紧急滑梯', 'ARM'],
            ['OIS｜GPU', '外部电源', '解除'],
            ['OIS｜轮挡', '解除'],
            ['DOOR', 'ECAM｜舱门信息', '确认'],
            '',
            <span>收到后推许可</span>,
            '',
            ['BEACON', '信标灯', 'ON'],
            ['后推', '开始'],
        ],
    ],
    [
        '启动发动机',
        [
            <span>电子检查单</span>,
            '',
            ['BEFORE START', '完成'],
            '',
            <span>收到开车许可</span>,
            '',
            ['点火开关', 'IGN / START'],
            ['发动机#1开关', 'ON'],
            '',
            <span>发动机#1点火完成</span>,
            '',
            ['发动机#2开关', 'ON'],
            '',
            <span>发动机#2点火完成</span>,
            '',
            ['点火开关', 'NORM'],
            '',
            <span>地面清洁</span>,
            '',
            ['驻机刹车', '设置'],
            ['除冰', '按需'],
            ['操控', '检查'],
            ['安定面配平', '检查'],
            ['舵面配平', 'NEUTRAL'],
            ['APU', '辅助动力单元 & 引气', 'OFF'],
            ['顶板无白字', '检查'],
            '',
            <span>电子检查单</span>,
            '',
            ['AFTER START', '完成'],
        ],
    ],
    [
        '滑行',
        [
            ['FLAPS', '襟翼构型', '检查起飞构型'],
            ['MFD｜TCAS', 'TA'],
            ['WX', 'MFD & EFIS｜气象雷达', 'ON'],
            ['安全带指示灯', 'ON'],
            ['地面扰流板', 'ARM'],
            ['自动刹车', 'RTO'],
            ['T.O CONFIG', '起飞构型检查', '按下'],
            '',
            <span>电子检查单</span>,
            '',
            ['TAXI', '完成'],
            '',
            <span>收到滑行许可</span>,
            '',
            ['NOSE', '鼻轮灯', 'TAXI'],
            ['滑行', '开始'],
        ],
    ],
    [
        '进入跑道',
        [
            <span>收到进入跑道许可</span>,
            '',
            ['NOSE', '鼻轮灯', 'TO'],
            ['LAND', '起降灯', 'ON'],
            ['STROBE', '频闪灯', 'ON 或 AUTO'],
            ['MFD｜TCAS', 'TA / RA'],
            ['客舱', '就绪 或 通知'],
            ['跑道', '确认'],
            ['PACK 1 & 2', '空调组件', '按需'],
            '',
            <span>电子检查单</span>,
            '',
            ['LINE-UP', '完成'],
            ['进入跑道', '开始'],
        ],
    ],
    [
        '起飞',
        [
            <span>收到起飞许可</span>,
            '',
            ['刹车', '踩下'],
            ['油门', '半推力'],
            ['发动机动力', '确认'],
            ['刹车', '解除'],
            ['油门卡位', 'FLX'],
            ['FMA 信息', '确认'],
            ['指示空速100节', '确认'],
            ['到达 VR', '抬轮'],
            '',
            <span>离地，正爬升</span>,
            '',
            ['起落架', '收起'],
            '',
            <span>襟翼回收 (FLAPS 0)</span>,
            '',
            ['地面扰流板', '解除预位'],
            ['NOSE', '鼻轮灯', 'OFF'],
        ],
    ],
    [
        '爬升',
        [
            <span>到达过渡高度 (Transition Altitude)</span>,
            '',
            ['EFIS｜修正海压', 'STD'],
            '',
            <span>超过１万英尺高度</span>,
            '',
            ['LAND', '起降灯', 'OFF'],
        ],
    ],
    [
        '进近',
        [
            ['安全带指示灯', 'ON'],
            '',
            <span>到达过渡高度层 (Transition Level)</span>,
            '',
            ['EFIS｜修正海压', '调定'],
            '',
            <span>低于１万英尺高度</span>,
            '',
            ['LAND', '起降灯', 'ON'],
            '',
            <span>取得进场程序</span>,
            '',
            ['MFD｜进场信息', '按需'],
            ['MFD｜进近信息', '按需'],
            ['自动刹车', 'BTV 或 按需'],
            '',
            <span>电子检查单</span>,
            '',
            ['APPROACH', '完成'],
        ],
    ],
    [
        '着陆',
        [
            <span>放下起落架后</span>,
            '',
            ['NOSE', '鼻轮灯', 'TO'],
            ['地面扰流板', 'ARM'],
            '',
            <span>取得着陆许可</span>,
            '',
            ['着陆', '执行'],
            '',
            <span>电子检查单</span>,
            '',
            ['LANDING', '完成'],
        ],
    ],
    [
        '着陆后',
        [
            ['FLAPS', '襟翼', '收起'],
            ['SPOILERS', '扰流板', '回收'],
            ['WX', 'EFIS｜气象雷达', 'OFF'],
            '',
            <span>脱离跑道</span>,
            '',
            ['NOSE', '鼻轮灯', 'TAXI'],
            ['LAND', '起降灯', 'OFF'],
            ['STROBE', '频闪灯', 'OFF 或 AUTO'],
            ['MFD｜TCAS', 'TA'],
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
