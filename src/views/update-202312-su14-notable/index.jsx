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
                        backgroundSize: 'auto 120%',
                        backgroundPosition: '90% 80%',
                    }}
                />
                <TheCell
                    title="西锐 SR22T G6 GTS"
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
                        '新辅助选项：强制使用预选定的跑道',
                        '修复非英语版客户端的发音',
                    ]}
                    img={require('./imgs/atc.png')}
                    style={{
                        gridRow: 'span 2',
                        backgroundSize: 'auto 275%',
                        backgroundPosition: '85% 70%',
                    }}
                />
                <TheCell
                    title="环境景观"
                    infos={['改进天空渲染', '改进冰雪覆盖']}
                    img={require('./imgs/environment.png')}
                    style={{
                        backgroundSize: 'auto 200%',
                        backgroundPosition: '60% 70%',
                    }}
                />
                <TheCell
                    title="游戏性"
                    infos={[
                        '改进多人模式，确保玩家之间可见',
                        '优化长途航班帧率',
                    ]}
                    img={require('./imgs/multiplayer.jpg')}
                    style={{
                        backgroundSize: 'auto 150%',
                        backgroundPosition: '0% 70%',
                    }}
                />
            </div>

            <div className="grid bottom">
                <TheCell
                    title="航空器质量改进"
                    infos={['波音大客机 / Bell-407 / "雷诺竞赛"']}
                    img={require('./imgs/aircraft.jpg')}
                    style={{
                        backgroundSize: '110% auto',
                        backgroundPosition: '0% 62.5%',
                    }}
                />
                <TheCell
                    img={require('./imgs/sdk.png')}
                    style={{
                        gridColumn: 'span 2',
                        backgroundPosition: '0% 50%',
                    }}
                    className="sdk"
                >
                    <strong>开发工具</strong>
                    {/* <span>世界枢纽</span> */}
                    <span>
                        G1000 航电
                        <br />
                        更多功能
                    </span>
                    <span>
                        滑板型
                        <br />
                        起落架改进
                    </span>
                    <span>
                        飞机编辑器
                        <br />
                        专家模式
                    </span>
                </TheCell>
            </div>

            <FooterInfo className="info" date="2023/12/05" />
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
