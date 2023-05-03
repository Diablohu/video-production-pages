import { useMemo } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import styles from './index.module.less';

// ============================================================================

const SU = {
    3: 'SU_12',
    8: 'SU_13',
};
const AAU = {
    1: 'AAU_01',
    6: 'AAU_02',
    12: 'AAU_03',
};
const WU = {
    2: ['WU_12', '新西兰', ''],
    4: ['WU_13', '大洋洲', ''],
    7: ['WU_14 & CU_03', '捷克 & ?', ''],
    10: 'WU_15',
};
const CU = {
    6: ['CU_02', '法国', ''],
    8: 'CU_03',
};
const SP = {
    2: '惊喜<br />AN-225',
    8: '惊喜',
    11: '惊喜',
};
const LL = {
    2: ['DHC-4 驯鹿', 'ORBX', require('./imgs/dhc-4.jpg')],
    // 4: 'LL_09',
    6: ['Laté.631', 'BlueMesh', require('./imgs/latécoère-631.png')],
    7: 'LL_10',
    8: 'LL_11',
    9: 'LL_12',
    10: 'LL_13',
    11: 'LL_14',
};
const FF = {
    2: ['AN-225', 'iniBuilds', require('./imgs/an-225.jpg')],
    3: ['AN-2', 'AT Sim.', require('./imgs/an-2.jpg')],
    6: 'FF_06',
    7: 'FF_07',
    8: 'FF_08',
    9: 'FF_09',
    12: 'FF_10',
};
const ES = {
    4: ['ATR-42/72', 'S&H Sim.', require('./imgs/atr-42.jpg')],
};

// Functional Component =======================================================

const FullYearPlan2023 = extend({
    styles,
})(({ className, params: { type } }) => {
    const mask = useMemo(() => type === 'mask', [type]);
    const isDemo = useMemo(() => type === 'demo', [type]);

    return (
        <div
            className={classNames(className, {
                'is-mask-mode': mask === true,
            })}
            style={{
                backgroundImage:
                    isDemo && `url(${require('./imgs/2023plan-bg.png')})`,
            }}
        >
            <div className="update su">
                系统更新 SU
                <br />
                飞行更新 AAU
            </div>
            <div className="update wu">
                世界更新 WU
                <br />
                城市更新 CU
            </div>
            <div className="update ll">
                当地传奇
                <br />
                Local Legend
            </div>
            <div className="update ff">
                著名航空器
                <br />
                Famous Flyer
            </div>
            <div className="update es">
                专业系列
                <br />
                Expert Series
            </div>

            <div className="title-free">
                免<br />费<br />更<br />新
            </div>
            <div className="title-paid">
                官<br />方<br />赞<br />助
            </div>

            <Group
                className="free-updates sp"
                classNameCell="free-update"
                arr={SP}
                mask={mask}
            />
            <Group
                className="free-updates su"
                classNameCell="free-update"
                arr={SU}
                mask={mask}
            />
            <Group
                className="free-updates aau"
                classNameCell="free-update"
                arr={AAU}
                mask={mask}
            />
            <Group
                className="free-updates wu"
                classNameCell="free-update"
                arr={WU}
                mask={mask}
            />
            <Group
                className="free-updates cu"
                classNameCell="free-update"
                arr={CU}
                mask={mask}
            />

            <div className="months">
                {[...Array(12).keys()].map((i) => (
                    <div className="month" key={i}>
                        <span>{i + 1}月</span>
                    </div>
                ))}
            </div>

            <Group
                className="paid-updates ll"
                classNameCell="paid-update"
                arr={LL}
                mask={mask}
            />
            <Group
                className="paid-updates ff"
                classNameCell="paid-update"
                arr={FF}
                mask={mask}
            />
            <Group
                className="paid-updates es"
                classNameCell="paid-update"
                arr={ES}
                mask={mask}
            />

            <span
                className="current-month"
                style={{
                    gridColumn: `${3 + new Date().getMonth()} / span 1`,
                }}
            />

            <div className="info">
                官方已预告内容 | Diablohu | 2023/05/04 | fly-dbh.com
            </div>
        </div>
    );
});

export default FullYearPlan2023;

// ============================================================================

const Group = ({ className, classNameCell, arr, mask }) => (
    <div className={className}>
        {[...Array(12).keys()].map((i) => {
            const hasContent = arr[i + 1];
            const hasImg = Array.isArray(arr[i + 1]);
            return (
                <div className={classNameCell} key={i}>
                    {hasContent ? (
                        <span
                            className={classNames({
                                'has-content': hasImg,
                            })}
                        >
                            {hasImg &&
                                !!arr[i + 1][arr[i + 1].length - 1] &&
                                (mask === true ? (
                                    <i className="img"></i>
                                ) : (
                                    <img
                                        src={arr[i + 1][arr[i + 1].length - 1]}
                                        alt={arr[i + 1][0]}
                                        className="img"
                                    />
                                ))}
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: hasImg
                                        ? arr[i + 1]
                                              .slice(0, arr[i + 1].length - 1)
                                              .map((s, i) =>
                                                  !i
                                                      ? `<strong>${s}</strong>`
                                                      : s
                                              )
                                              .join('<br/>')
                                        : arr[i + 1],
                                }}
                            ></span>
                        </span>
                    ) : null}
                </div>
            );
        })}
    </div>
);
