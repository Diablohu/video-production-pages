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
            <div className="changes">
                <div className="contents">
                    <strong>综合改进</strong>
                    <ul>
                        <li>
                            优化动态暂停
                            <br />
                            现在会锁定飞机的速度和角速度
                        </li>
                        <li>
                            优化飞行日志
                            <br />
                            现在当超过 16MB 时仍会正常记录
                        </li>
                        <li>
                            修正当使用飞行控制器时，屏幕上出现的不正常的“白点”和“白框”
                        </li>
                    </ul>
                    <strong>航电改进: G1000 / G3000 / G5000</strong>
                    <ul>
                        <li>
                            优化地图与 SVT 中绝对地形显示的颜色，以更贴近现实
                        </li>
                        <li>
                            优化自动驾驶的 VOR/LOC 截获行为，以减少飞过头的情况
                        </li>
                        <li>
                            优化导航地图、最近地图、气象地图上设定航向的显示
                        </li>
                        <li>修正在外部视角时自动驾驶乱飞的问题</li>
                        <li>
                            <strong>G3000 / G5000</strong>
                            <ul>
                                <li>现在可以调节气象雷达的增益</li>
                                <li>可以接收到最低 190.0kHz 的 ADF 频段</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="contents">
                    <strong>航空器改进</strong>
                    <ul>
                        <li>
                            为以下航空器添加 SimBrief 飞行计划导入能力
                            <ul>
                                <li>Boeing 787-10 "Dreamliner"</li>
                                <li>Boeing 747-8I Intercontinental</li>
                                <li>Cessna Citation CJ4</li>
                            </ul>
                            可导入飞行路线和配载，相关功能可在 CDU/FMC 的
                            SETTINGS 页面进行设置，并在路线相关页面进行导入操作
                        </li>
                    </ul>
                    <strong>航空器改进: Boeing 747-8I & 787-10</strong>
                    <ul>
                        <li>
                            <strong>
                                <em>
                                    <u>787 实装 EFB，可进行起飞性能计算</u>
                                </em>
                            </strong>
                        </li>
                        <li>VNAV & CDU: 现支持阶段式爬升</li>
                        <li>检查单: 整体优化，更贴近现实</li>
                        <li>
                            EICAS: 起飞时如果升降舵配平不正确，会显示相应警告
                        </li>
                        <li>ND: 可显示下一个巡航爬升点</li>
                        <li>优化自动驾驶的 LOC 截获行为，以减少飞过头的情况</li>
                        <li>修正在外部视角时自动驾驶乱飞的问题</li>
                        <li>小幅优化刹车性能</li>
                        <li>
                            以及其他总计 <strong>100</strong> 多条改进
                            <br />
                            推荐感兴趣的朋友详读补丁说明
                        </li>
                    </ul>
                </div>
                <div className="contents">
                    <strong>航空器改进: Cessna Citation CJ4</strong>
                    <ul>
                        <li>
                            FMC: 新增 SETTINGS 页，可操作以下功能
                            <ul>
                                <li>SimBrief 相关设置</li>
                                <li>地面电源设置</li>
                                <li>客舱灯光设置</li>
                            </ul>
                        </li>
                        <li>FMC: 新增 FIX INFO 页面和相关功能</li>
                        <li>MFD: 优化地形渲染</li>
                        <li>
                            优化自动驾驶的 VOR/LOC 截获行为，以减少飞过头的情况
                        </li>
                    </ul>
                    <strong>
                        航空器改进: Cessna Citation Longitude & Daher TBM 930
                    </strong>
                    <ul>
                        <li>优化气象雷达的电力消耗</li>
                        <li>优化 HDG 旋钮的点按逻辑</li>
                    </ul>
                    <strong>其他改进</strong>
                    <ul>
                        <li>
                            SDK
                            <ul>
                                <li>为活塞发动机添加更多参数</li>
                                <li>新增 SimBrief 相关 API</li>
                                <li>新增波音 EFB 开发框架</li>
                            </ul>
                        </li>
                        <li>以及超多细节优化和修正...</li>
                    </ul>
                </div>
                <div className="contents">
                    <strong>官方预告过，但未实装...</strong>
                    <ul>
                        <li>
                            完全开放世界枢纽 (World Hub)
                            <ul>
                                <li>
                                    这是一项正在开发中的游戏功能，借助它玩家可以自行提交有关机场地景的修改，比如调整跑道号、风向袋位置、滑行道标记等
                                </li>
                            </ul>
                        </li>
                        <li>
                            优化过往的世界更新
                            <ul>
                                <li>
                                    摄影测量:
                                    WU10（美国2）、CU01（德国）、WU11（加拿大）
                                </li>
                                <li>大量的地标景观</li>
                            </ul>
                        </li>
                        <li>
                            其他航空器的质量更新
                            <ul>
                                <li>Airbus A310</li>
                                <li>莱特飞行器</li>
                                <li>圣路易精神号</li>
                                <li>Grumman G-21 "Goose"</li>
                                <il>Hughes H-4 "Hercules"</il>
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
                基于 SU13 公测版已实装改动 | Diablohu | 2023/08/10 | fly-dbh.com
            </FooterInfo>
        </div>
    );
});

export default AAU1;
