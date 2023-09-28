import { useMemo } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import styles from './index.module.less';

// ============================================================================

const SU = {
    3: 'SU_12',
    9: 'SU_13',
    12: 'SU_14',
};
const AAU = {
    1: 'AAU_01',
    6: 'AAU_02',
};
const WU = {
    2: ['WU_12', '新西兰', ''],
    4: ['WU_13', '大洋洲 ', ''],
    7: ['WU_14', '中东欧', ''],
    10: ['WU_15', '北欧', ''],
};
const CU = {
    5: ['CU_02', '法国', true, ''],
    6: ['CU_03', '美国德州', true, ''],
    8: ['CU_04', '西欧', ''],
};
const SP = {
    2: '惊喜<br />AN-225',
    11: '惊喜',
};
const LL = {
    2: ['DHC-4 驯鹿', 'ORBX', require('./imgs/dhc-4.jpg')],
    // 4: 'LL_09',
    6: ['Laté.631', 'BlueMesh', true, require('./imgs/latécoère-631.png')],
    1: ['Boeing 307', 'Aeroplane H.', true, require('./imgs/boeing-307.jpg')],
    7: ['AE45/145', 'Aeroplane H.', require('./imgs/ae45.jpg')],
    8: ['Do-X', 'O.Messer', require('./imgs/do-x.jpg')],
    10: ['SAAB B 17', 'iniBuilds', require('./imgs/saab17.jpg')],
    11: 'LL_14',
};
const FF = {
    2: ['AN-225', 'iniBuilds', require('./imgs/an-225.jpg')],
    3: ['AN-2', 'AT Sim.', require('./imgs/an-2.jpg')],
    6: ['Ford 4AT', 'Aeroplane H.', require('./imgs/ford-4at.png')],
    10: ['三菱MU-2', 'iniBuilds', require('./imgs/mu-2.jpg')],
    11: 'FF_08',
    12: 'FF_09',
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
                    gridColumn: `${4 + new Date().getMonth()} / span 1`,
                }}
            />

            <div className="info">
                官方已预告内容 | Diablohu | 2023/09/28 | fly-dbh.com
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
            const isCombine = hasContent && arr[i + 1][2] === true;
            return (
                <div
                    className={classNames([
                        classNameCell,
                        {
                            'is-combine': isCombine,
                        },
                    ])}
                    data-index={i}
                    key={i}
                >
                    {hasContent ? (
                        <span
                            className={classNames({
                                'has-content': hasImg,
                            })}
                        >
                            {hasImg && !!arr[i + 1][arr[i + 1].length - 1] && (
                                <i className="img">
                                    {mask === true ? null : (
                                        <img
                                            src={
                                                arr[i + 1][
                                                    arr[i + 1].length - 1
                                                ]
                                            }
                                            alt={arr[i + 1][0]}
                                        />
                                    )}
                                </i>
                            )}
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: hasImg
                                        ? arr[i + 1]
                                              .slice(0, arr[i + 1].length - 1)
                                              .filter((v) => v !== true)
                                              .map((s, i) =>
                                                  !i
                                                      ? `<strong>${s}</strong>`
                                                      : s,
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
