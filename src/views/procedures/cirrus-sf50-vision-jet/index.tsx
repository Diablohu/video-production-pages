import { extend } from 'koot';

import Page from '../';

// ============================================================================

const procedures = [
    {
        title: '驾驶舱准备 1/2',
        steps: [
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
    },
    {
        title: '驾驶舱准备 2/2',
        steps: [
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
    },
];

// const uppers = changes.slice(0, 2);
// const lowers = changes.slice(2);

// Functional Component =======================================================

const ThisPage = extend({})(() => {
    return <Page procedures={procedures} />;
});

export default ThisPage;
