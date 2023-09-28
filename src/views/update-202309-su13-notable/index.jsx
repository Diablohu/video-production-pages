import { useMemo } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Cell from '@components/cell';
import FooterInfo from '@components/footer-info';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

// Functional Component =======================================================

const SU12NotebleChanges = extend({
    styles,
})(({ className, params: { type } }) => {
    const isMask = useMemo(() => type === 'mask', [type]);
    const isDemo = useMemo(() => type === 'demo', [type]);
    const isDark = useMemo(() => type === 'dark', [type]);

    return (
        <div
            className={classNames(className, {
                'is-mask-mode': isMask === true,
                'is-dark-mode': isDark === true,
            })}
        >
            <div className="grid left">
                <h2
                    style={{
                        gridColumn: '1 / span 6',
                    }}
                >
                    航空器改进
                </h2>
                <TheCell
                    title="波音787-10"
                    infos={[
                        'EFB',
                        'SimBrief 飞行计划导入',
                        '配载导入与设定',
                        '气象预报导入',
                        '阶段式爬升',
                        '完善航电内检查单',
                        '优化操控',
                        '修复舱外视角',
                    ]}
                    img={require('./imgs/B78X.png')}
                    style={{
                        gridRow: 'span 2',
                        gridColumn: 'span 3',
                        backgroundSize: 'auto 275%',
                        backgroundPosition: '32.5% 47.5%',
                    }}
                />
                <TheCell
                    title="波音747-8I"
                    infos={[
                        'SimBrief 飞行计划导入',
                        '配载导入与设定',
                        '气象预报导入',
                        '阶段式爬升',
                        '完善航电内检查单',
                        '优化燃油系统',
                        '优化操控',
                    ]}
                    img={require('./imgs/B748.png')}
                    style={{
                        gridRow: 'span 2',
                        gridColumn: 'span 3',
                        backgroundSize: 'auto 200%',
                        backgroundPosition: '60% 40%',
                    }}
                />
                <TheCell
                    title="塞斯纳奖状CJ4"
                    infos={[
                        'SimBrief 飞行计划导入',
                        'FIX INFO 打点画线',
                        '内饰灯光',
                    ]}
                    img={require('./imgs/C25C.png')}
                    style={{
                        gridColumn: 'span 2',
                        backgroundSize: 'auto 250%',
                        backgroundPosition: '30% 0%',
                    }}
                />
                <TheCell
                    title="塞斯纳奖状经度"
                    infos={['航向同步', '不再“顶表飞”', '气象雷达更多细节功能']}
                    img={require('./imgs/C700.png')}
                    style={{
                        gridColumn: 'span 2',
                        backgroundSize: 'auto 300%',
                        backgroundPosition: '50% 80%',
                    }}
                />
                <TheCell
                    title="休斯H-4“大力神”"
                    infos={[
                        '拖船',
                        '机库木架',
                        '8引擎独立控制',
                        '水体和油门阻力',
                    ]}
                    img={require('./imgs/H4.png')}
                    style={{
                        gridColumn: 'span 2',
                        backgroundSize: 'auto 150%',
                        backgroundPosition: '0% 50%',
                    }}
                />
                {/* <TheCell
                    title="声光细节优化"
                    infos={['空客A310', '莱特飞行器', '圣路易精神号', '……']}
                    img={require('./imgs/A310.png')}
                    style={{
                        gridColumn: 'span 2',
                        backgroundSize: 'auto 300%',
                        backgroundPosition: '35% 57.5%',
                    }}
                /> */}
            </div>

            <div className="grid right">
                <h2>系统改进</h2>
                <TheCell
                    infos={[
                        '修复“白点”“白框”',
                        '优化“动态暂停”：锁定速度',
                        '优化“飞行日志”：更大容量',
                        '“地平线”不再明显',
                        '[PC] 尝试修复长程飞行掉帧现象',
                    ]}
                    img={require('./imgs/white-border.png')}
                    style={{
                        backgroundSize: 'auto 275%',
                        backgroundPosition: '40% 43%',
                    }}
                />
                <h2>佳明航电改进</h2>
                <TheCell
                    infos={[
                        '修复舱外视角导航',
                        '优化 VOR / LOC 截获',
                        '细节优化',
                    ]}
                    img={require('./imgs/WXR.png')}
                    style={{
                        backgroundSize: 'auto 225%',
                        backgroundPosition: '40% 80%',
                    }}
                />
            </div>

            <div className="grid bottom">
                <TheCell
                    title="世界改进"
                    infos={['优化景观模型']}
                    img={require('./imgs/world.png')}
                    style={{
                        // backgroundSize: '',
                        backgroundPosition: '40% 32.5%',
                    }}
                />
                <TheCell
                    img={require('./imgs/sdk.png')}
                    style={{
                        gridColumn: 'span 2',
                    }}
                    className="sdk"
                >
                    <strong>开发工具</strong>
                    {/* <span>世界枢纽</span> */}
                    <span>
                        SimBrief
                        <br />
                        开发框架
                    </span>
                    <span>
                        波音 EFB
                        <br />
                        开发框架
                    </span>
                    <span>
                        活塞发动机
                        <br />
                        参数优化
                    </span>
                </TheCell>
            </div>

            <FooterInfo className="info" date="2023/09/28" />
        </div>
    );
});

export default SU12NotebleChanges;

// Functional Component =======================================================

const TheCell = ({ className, ...props }) => {
    return (
        <Cell
            className={classNames([`${classNameModule}-cell`, className])}
            {...props}
        />
    );
};
