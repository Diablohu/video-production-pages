import { useMemo } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Cell from '@components/cell';
import FooterInfo from '@components/footer-info';

import styles from './index.module.less';

// ============================================================================

const releases = [];

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
            <div className="changes implemented">
                <div className="contents">
                    <strong>系统改进: 空中交通管制 ATC</strong>
                    <ul>
                        <li>
                            新增一个辅助选项，可指定 ATC
                            倾向于使用当前飞行计划中的，或基于在世界地图界面上所设置环境设定的跑道选择
                            <ul>
                                <li>这一新选项默认开启</li>
                            </ul>
                        </li>
                        <li>
                            改进雷达引导
                            <ul>
                                <li>
                                    如果初始的两个航路点重叠的话，现在也能进行正确的引导
                                </li>
                                <li>
                                    玩家请求新的引导时，ATC
                                    会给出全新的引导和许可
                                </li>
                            </ul>
                        </li>
                        <li>
                            ATC
                            将会在玩家抵达指定高度之前下达新的高度指令，而非在到达前一个高度之后
                            <ul>
                                <li>
                                    原有设计是接近目标高度250英尺时才会触发新指令，现改为2000英尺
                                </li>
                            </ul>
                        </li>
                        <li>
                            改进 ATC 用词
                            <ul>
                                <li>高度变化指令中不再会有“for”</li>
                                <li>起飞许可中不再会出现高度表设定值</li>
                            </ul>
                        </li>
                        <li>修复非英语版本客户端的 ATC 发音问题</li>
                    </ul>
                    <strong>系统改进: 游戏性</strong>
                    <ul>
                        <li>修复多处多人模式中无法看到其他玩家的问题</li>
                        <li>优化长途航班性能</li>
                    </ul>
                    <strong>系统改进: 环境 & 景观</strong>
                    <ul>
                        <li>调整臭氧层的颜色值，天空颜色变得更真实</li>
                        <li>改进实时天气中雪与冰的覆盖精度</li>
                    </ul>
                </div>
                <div className="contents">
                    <strong>航空器改进</strong>
                    <ul>
                        <li>
                            <strong>Boeing 747-8I & 787-10</strong>
                            <ul>
                                <li>
                                    配载时，现在会考虑重心范围，以避免出现极端的重心值
                                </li>
                                <li>
                                    电子检查单：修复整页仅包含自动完成项目的页面会被自动跳过的问题
                                </li>
                                <li>其他细节改进</li>
                            </ul>
                        </li>
                        <li>改进“雷诺竞赛”航空器</li>
                        <li>航空器注册号现不会有小写字母</li>
                        <li>为直升机禁用失速保护</li>
                    </ul>
                    <strong>其他改进</strong>
                    <ul>
                        <li>
                            SDK
                            <ul>
                                <li>滑板型起落架现在可收起</li>
                                <li>为外部视角增加新参数</li>
                                <li>
                                    飞机编辑器增加专家模式，该模式下会取消所有数值限制
                                </li>
                                <li>增加通用的配载管理器</li>
                            </ul>
                        </li>
                        <li>以及超多细节优化和修正...</li>
                    </ul>
                </div>
            </div>
            <div className="changes planned">
                <div className="contents">
                    <strong>
                        全新航空器：AIRBUS A320 NEO
                        <br />
                        (by iniBuilds)
                    </strong>
                    <strong>
                        翻新航空器：CIRRUS SR22T G6
                        <br />
                        (by WorkingTitle)
                    </strong>
                    <strong>航电改进</strong>
                    <ul>
                        <li>G1000 NXi</li>
                    </ul>
                    <strong>系统改进: 环境 & 景观</strong>
                    <ul>
                        <li>
                            改进摄影测量
                            <ul>
                                <li>WU_14 (加拿大)</li>
                            </ul>
                        </li>
                        <li>
                            改进地标和机场地景
                            <ul>
                                <li>WU_07 (澳大利亚)</li>
                                <li>WU_12 (新西兰)</li>
                                <li>WU_13 (大洋洲)</li>
                                <li>WU_14 (加拿大)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className="releases">
                {[...releases].map(({ title, infos = [], img }) => (
                    <Cell
                        className="update-aircraft"
                        key={title}
                        title={title}
                        infos={['已发布更新']}
                        img={img}
                        mask={isMask}
                        textSize="lg"
                    />
                ))}
            </div> */}
            <FooterInfo className="info">
                基于 SU14 公测版已实装改动 | Diablohu | 2023/11/03 | fly-dbh.com
            </FooterInfo>
        </div>
    );
});

export default AAU1;
