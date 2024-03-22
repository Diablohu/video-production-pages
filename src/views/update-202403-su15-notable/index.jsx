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
                        gridColumn: 'span 1',
                    }}
                >
                    航空器 & 航电
                </h2>
                <TheCell
                    title="空客 A320 NEO (V2)"
                    infos={['iniBuilds']}
                    img={require('./imgs/a20n.jpg')}
                    style={{
                        backgroundSize: '110% auto',
                        backgroundPosition: '50% calc(100% + 65px)',
                    }}
                />
                <TheCell
                    title="佳明 G3X Touch"
                    infos={['WorkingTitle', '初期适配：VL-3 / XCub / NXCub']}
                    img={require('./imgs/g3x.png')}
                    style={{
                        backgroundSize: '115% auto',
                        backgroundPosition: '25% 100%',
                    }}
                />
            </div>

            <div className="grid mid">
                <h2
                    style={{
                        gridColumn: 'span 1',
                    }}
                >
                    游戏引擎 & 系统
                </h2>
                <TheCell
                    title="大幅改进帧率与稳定性"
                    infos={['重写内存寻址策略', '重写玻璃仪表渲染逻辑']}
                    img={require('./imgs/b789-cockpit.jpg')}
                    style={{
                        backgroundSize: '125% auto',
                        backgroundPosition: '50% 90%',
                    }}
                />
                <TheCell
                    title="改进实时交通"
                    infos={[
                        '重构数据结构',
                        '支持航司与涂装匹配（需第三方接入）',
                    ]}
                    img={require('./imgs/egll.png')}
                    style={{
                        backgroundSize: '175% auto',
                        backgroundPosition: '35% 40%',
                    }}
                />
            </div>

            <div className="grid right">
                <h2
                    style={{
                        gridColumn: 'span 1',
                    }}
                >
                    模拟系统
                </h2>
                <TheCell
                    title="全新地面交互模型"
                    infos={[
                        '不再将起落架都视为同一个平面',
                        '初期适配：A320 NEO / 塞斯纳172 / Cabri G2',
                    ]}
                    img={require('./imgs/c172gears.png')}
                    style={{
                        backgroundSize: 'auto 100%',
                        backgroundPosition: '50% 100%',
                    }}
                />
                <TheCell
                    title="支持双旋翼直升机"
                    infos={['需第三方接入']}
                    img={require('./imgs/ch47.jpg')}
                    style={{
                        backgroundSize: '100% auto',
                        backgroundPosition: '10% 50%',
                    }}
                />
            </div>

            <div className="grid bottom">
                <TheCell
                    title="航空器质量改进"
                    infos={['A310 / PC-6 / 奖状经度']}
                    img={require('./imgs/a310.png')}
                    style={{
                        gridColumn: 'span 3',
                        marginRight: '30px',
                        backgroundSize: '175% auto',
                        backgroundPosition: '55% 75%',
                    }}
                />
                <TheCell
                    title="环境景观"
                    infos={['改进水面结冰']}
                    img={require('./imgs/ice.jpg')}
                    style={{
                        gridColumn: 'span 2',
                        marginLeft: '10px',
                        backgroundSize: '110% auto',
                        backgroundPosition: '0% 40%',
                    }}
                />
                <TheCell
                    title="云游戏版"
                    infos={['支持触控与陀螺仪']}
                    img={require('./imgs/camp.jpg')}
                    style={{
                        gridColumn: 'span 2',
                        marginRight: '10px',
                        backgroundSize: '115% auto',
                        backgroundPosition: '20% 55%',
                    }}
                />
                <TheCell
                    img={require('./imgs/sdk.png')}
                    style={{
                        gridColumn: 'span 3',
                        marginLeft: '30px',
                        backgroundPosition: '0% 50%',
                    }}
                    className="sdk"
                >
                    <strong>开发工具</strong>
                    <span>
                        世界枢纽
                        <br />
                        封测中
                    </span>
                    <span>
                        WASM模块
                        <br />
                        新内存管理机制
                    </span>
                </TheCell>
            </div>

            <FooterInfo className="info" date="2024/03/22" />
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
