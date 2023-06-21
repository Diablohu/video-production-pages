import { useMemo } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Cell from '@components/cell';
import FooterInfo from '@components/footer-info';

import styles from './index.module.less';

// ============================================================================

const releases = [
    {
        title: 'ATR-42-600 / 72-600',
        img: require('../2023-full-year-plan/imgs/atr-42.jpg'),
    },
    {
        title: 'AN-225',
        img: require('../update-202303-su12/imgs/an225.jpg'),
    },
    {
        title: 'AN-2',
        img: require('../update-202303-su12/imgs/an2.jpg'),
    },
    {
        title: 'DHC-4 "Caribou"',
        img: require('../update-202303-su12/imgs/dhc4.jpg'),
    },
];

// Functional Component =======================================================

const AAU1 = extend({
    styles,
})(({ className, params: { type } }) => {
    const isMask = useMemo(() => type === 'mask', [type]);
    const isDemo = useMemo(() => type === 'demo', [type]);

    return (
        <div
            className={classNames(className, {
                'is-mask-mode': isMask === true,
            })}
        >
            <div className="changes">
                <div className="contents">
                    <strong>Boeing 747-8I & 787-10</strong>
                    <p>
                        （
                        <strong>
                            <em>
                                <u>表示 787 特有改动</u>
                            </em>
                        </strong>
                        ）
                    </p>
                    <ul>
                        <li>
                            完全重做航电系统
                            <br />
                            PFD、ND、MFD、CDU、EICAS
                        </li>
                        <li>
                            <strong>
                                <em>
                                    <u>
                                        重做 HUD
                                        <br />
                                        完整模式、简洁模式、跑道轮廓线、
                                        <br />
                                        FPV 加速度指示、TOGA & G/S 参考线……
                                    </u>
                                </em>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <em>
                                    <u>全新的 C*U 法则电传操控模型</u>
                                </em>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <em>
                                    <u>除 PFD 外所有屏幕均支持独立设置和操作</u>
                                </em>
                            </strong>
                        </li>
                        <li>
                            支持高级的航路计划管理功能
                            <br />
                            DME ARC、FIX、INTRC、HOLD、
                            <br />
                            DES DIR、DES NOW……
                        </li>
                        <li>支持多个备降机场的飞行时间和燃油计算</li>
                        <li>支持 MFD 检查单</li>
                        <li>
                            基于性能的 VNAV
                            <br />
                            怠速下高、ECON、可定制速度限制
                        </li>
                        <li>完整的自动油门功能</li>
                        <li>
                            推力管理系统支持成本指数（CI）、推力限制和温度预判
                        </li>
                        <li>
                            完整的自动驾驶系统
                            <br />
                            AUTOLAND、FLARE、ROLLOUT
                        </li>
                    </ul>
                </div>
                <div className="contents">
                    <strong>　</strong>
                    <ul>
                        <li>支持 IAN</li>
                        <li>支持 RNP/ANP</li>
                        <li>支持 TCAS II</li>
                        <li>调整引擎和飞行操控模型</li>
                        <li>重做燃油、液压、电力系统</li>
                        <li>
                            <strong>
                                <em>
                                    <u>重做空调系统</u>
                                </em>
                            </strong>
                        </li>
                        <li>可设置惯性导入时间</li>
                        <li>
                            <strong>
                                <em>
                                    <u>可设置 SELCAL 代码</u>
                                </em>
                            </strong>
                        </li>
                        <li>
                            <strong>
                                <em>
                                    <u>整体调整音效</u>
                                </em>
                            </strong>
                        </li>
                        <li>DING DONG~</li>
                        <li>以及其他更多改进……</li>
                    </ul>
                </div>
                <div className="contents">
                    <strong>其他改进</strong>
                    <ul>
                        <li>使用苦力帽旋转视角时屏幕中央不再会有白点</li>
                        <li>断开连接时不再会有弹窗提示，改为消息提醒</li>
                    </ul>
                    <strong> </strong>
                    <ul>
                        <li>
                            所有内置航电
                            <ul>
                                <li>
                                    AP/FD HDG
                                    模式下，现在只有在选择航向相比当前航向偏差超过330°时才会调转左右方向
                                </li>
                                <li>错误修正与优化</li>
                            </ul>
                        </li>
                        <li>
                            [航电] G1000
                            <ul>
                                <li>开放插件支持</li>
                            </ul>
                        </li>
                        <li>
                            [飞机] Cessna Citation Longitude (C700)
                            <ul>
                                <li>修正油门杆反推动画</li>
                                <li>Bearing 信息现在 PFD 分屏模式下可见</li>
                                <li>支持 Dual-Cue FD (十字指引)</li>
                                <li>错误修正与优化</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="releases">
                {[...releases].map(({ title, infos = [], img }) => (
                    <Cell
                        className="update-aircraft"
                        key={title}
                        title={title}
                        infos={['更新补丁']}
                        img={img}
                        mask={isMask}
                        textSize="lg"
                    />
                ))}
            </div>
            <FooterInfo className="info" date="2023/06/22" />
        </div>
    );
});

export default AAU1;
