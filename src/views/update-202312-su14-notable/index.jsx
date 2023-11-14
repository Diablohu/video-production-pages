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
                        gridColumn: 'span 2',
                    }}
                >
                    高品质航空器
                </h2>
                <TheCell
                    title="空客 A320 NEO"
                    infos={['iniBuilds']}
                    img={require('./imgs/a20n.jpg')}
                    style={{
                        backgroundSize: 'auto 150%',
                        backgroundPosition: '60% 100%',
                    }}
                />
                <TheCell
                    title="西瑞 SR22T G6"
                    infos={['WorkingTitle']}
                    img={require('./imgs/sr22.webp')}
                    style={{
                        backgroundSize: 'auto 125%',
                        backgroundPosition: '40% 30%',
                    }}
                />
            </div>

            <div className="grid right">
                <h2
                    style={{
                        gridColumn: 'span 2',
                    }}
                >
                    系统改进
                </h2>
                <TheCell
                    title="ATC"
                    infos={[
                        '改进雷达引导',
                        '改进高度变化指令',
                        '改进用词',
                        '新辅助选项：使用预先设定的跑道',
                        '修复非英语版客户端的发音',
                    ]}
                    img={require('./imgs/sr22.webp')}
                    style={{
                        gridRow: 'span 2',
                        backgroundSize: 'auto 275%',
                        backgroundPosition: '40% 43%',
                    }}
                />
                <TheCell
                    title="环境景观"
                    infos={['改进天空渲染', '改进冰雪覆盖']}
                    img={require('./imgs/sr22.webp')}
                    style={{
                        backgroundSize: 'auto 225%',
                        backgroundPosition: '40% 80%',
                    }}
                />
                <TheCell
                    title="游戏性"
                    infos={['改进多人模式', '优化长途航班帧率']}
                    img={require('./imgs/sr22.webp')}
                    style={{
                        backgroundSize: 'auto 225%',
                        backgroundPosition: '40% 80%',
                    }}
                />
            </div>

            <div className="grid bottom">
                <TheCell
                    title="航空器质量更新"
                    infos={['优化景观模型']}
                    img={require('./imgs/sr22.webp')}
                    style={{
                        // backgroundSize: '',
                        backgroundPosition: '40% 32.5%',
                    }}
                />
                <TheCell
                    img={require('./imgs/sr22.webp')}
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
