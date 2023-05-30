import { useMemo, useState } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Procedures from '@components/precedures';
import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const procedures = [
    [
        'A320 Remote MCDU',
        [
            '解压缩',
            ['remotemcdu-wasm', '至 community'],
            ['A320 Remote MCDU', '至任意目录'],
            '首次启动',
            ['a320_remote_mcdu.exe', '运行'],
            ['防火墙报警', '通过'],
            ['首次启动提示', 'Continue'],
            '测试网页服务器',
            ['a320_remote_mcdu.exe', '运行'],
            ['Start Server', '点击'],
            ['网址 / 二维码', '测试连接'],
            '启用远程 MCDU',
            ['Fenix A320', '加载'],
            ['机长侧 MCDU 屏幕', '弹出'],
            [undefined, '右ALT + 点击'],
            '',
            ['网址 / 二维码', '连接 / 刷新'],
            ['MCDU', '进入'],
        ],
    ],
];

// const uppers = changes.slice(0, 2);
// const lowers = changes.slice(2);

// Functional Component =======================================================

const Page = extend({
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

export default Page;
