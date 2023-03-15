import { useMemo } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Cell from '@components/cell';
import FooterInfo from '@components/footer-info';

import styles from './index.module.less';

// ============================================================================

const releases = [
    {
        title: '世界更新_12 / 新西兰',
        infos: ['2023 / 02 / 23'],
        img: require('./imgs/nz.webp'),
    },
    {
        title: '当地传奇_08 / DHC-4 驯鹿',
        infos: ['2023 / 02 / 23'],
        img: require('./imgs/dhc4.jpg'),
    },
    {
        title: '著名航空器_04 / AN-225',
        infos: ['[PC] 2023 / 02 / 27', '[XBOX] 2023 / 03 / 21'],
        img: require('./imgs/an225.jpg'),
    },
    {
        title: '著名航空器_05 / AN-2',
        infos: ['2023 / 03 / 21'],
        img: require('./imgs/an2.jpg'),
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
                    <strong>新特性与重点优化</strong>
                    <ul>
                        <li>
                            优化: 气流
                            <ul>
                                <li>热气流不再会超过云层</li>
                                <li>优化热气流周边的下沉气流</li>
                                <li>
                                    不再会有强制的气流量上限，以解决强热气流环境反而没有颠簸的异象
                                </li>
                                <li>依据高度调整山体乱流的强度</li>
                            </ul>
                        </li>
                        <li>
                            新辅助选项: 湍流
                            <ul>
                                <li>调节气象对玩家航空器的晃动影响的幅度</li>
                                <li>SU_11 的表现对应档位“真实”</li>
                                <li>默认值为“低”，请注意</li>
                            </ul>
                        </li>
                        <li>
                            新功能内测: World Hub
                            <ul>
                                <li>
                                    允许玩家提交地景和机场数据的改动，如建筑位置、滑行道标记、PAPI灯类型和位置等
                                </li>
                                <li>不允许提交自定义3D模型</li>
                                <li>该功能仍为内测</li>
                            </ul>
                        </li>
                        <li>
                            [XBOX / 云游戏] WebAssembly (WASM) 技术完整支持
                            <br />
                            允许利用该项技术的飞机产品上架主机版游戏内市场
                        </li>
                        <li>
                            [PC] 翻新: 弹出玻璃仪表功能
                            <ul>
                                <li>现在会按窗口名记住窗口尺寸和位置</li>
                                <li>自动展开为独立窗口，不再有整合窗口</li>
                            </ul>
                        </li>
                        <li>新本地化版本: 韩语 & 土耳其语</li>
                        <li>新按键绑定: 开关屏幕旁白</li>
                    </ul>
                </div>
                <div className="contents">
                    <strong>内置航空器重大更新</strong>
                    <p>（均包括操控和飞行模型的调教，不再单独列出）</p>
                    <ul>
                        <li>
                            Airbus A310
                            <ul>
                                <li>优化音画表现与驾驶舱材质</li>
                                <li>优化 ToD 计算</li>
                                <li>优化 EFB 交互</li>
                                <li>添加磁偏航</li>
                                <li>修正暂停游戏时仍在消耗燃油的问题</li>
                                <li>不通电状态下不再能够开启雨刷</li>
                            </ul>
                        </li>
                        <li>
                            Douglas DC-3
                            <ul>
                                <li>优化音画表现与驾驶舱材质</li>
                                <li>辅助油箱会正确供油</li>
                                <li>顺桨时，螺旋桨杆可以正确控制所有桨叶</li>
                            </ul>
                        </li>
                        <li>
                            Bell 407 (直升机)
                            <ul>
                                <li>重负载时更容易让引擎过载</li>
                                <li>优化配平操作，移除自动配平开关</li>
                                <li>多人模式下其他玩家的主旋翼现在会旋转了</li>
                                <li>完整 VR 支持</li>
                            </ul>
                        </li>
                        <li>
                            Cessna Citation CJ4
                            <ul>
                                <li>航电优化</li>
                                <li>添加部分缺失的导航逻辑</li>
                            </ul>
                        </li>
                        <li>
                            Daher TBM930 & Cessna Citation Longitude
                            <ul>
                                <li>航电优化</li>
                                <li>添加语音报警</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="contents">
                    <strong>其他优化 & 修正</strong>
                    <ul>
                        <li>已发布的所有世界更新</li>
                        <li>
                            其他内置航空器优化
                            <ul>
                                <li>Curtiss JN-4 “Jenny”</li>
                                <li>Grumman G-21 Goose</li>
                                <li>H-4 Hercules “Spruce Goose”</li>
                                <li>Ryan NYP “Spirit of St. Louis”</li>
                                <li>Wright Flyer</li>
                                <li>Cabri G2 (直升机)</li>
                                <li>DG-1001E (滑翔机)</li>
                            </ul>
                        </li>
                        <li>优化游戏启动流程与下载速度</li>
                        <li>优化“传统”飞行模型</li>
                        <li>优化多屏幕模式下的鼠标碰撞判定</li>
                        <li>
                            修正通过 SimConnect 注入的航空器不遵循飞行计划的问题
                        </li>
                        <li>修正部分实时交通问题，如起飞后高度过低</li>
                        <li>以及大量的其他问题修正</li>
                    </ul>
                    <strong>SDK / 开发工具</strong>
                    <ul>
                        <li>G1000 / G3000 / G5000 插件支持</li>
                        <li>支持最多16个引擎的航空器</li>
                        <li>优化直升机发动机参数及操控逻辑</li>
                        <li>支持 WASM 模块的热更新</li>
                    </ul>
                </div>
            </div>
            <div className="releases">
                {[...releases].map(({ title, infos = [], img }) => (
                    <Cell
                        key={title}
                        title={title}
                        infos={infos}
                        img={img}
                        mask={isMask}
                        textSize="lg"
                    />
                ))}
            </div>
            <FooterInfo className="info" date="2023/02/23" />
        </div>
    );
});

export default AAU1;
