import { useMemo } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import styles from './index.module.less';

// ============================================================================

const SU = {
    3: 'SU12',
};
const AAU = {
    1: 'AAU1',
    6: 'AAU2',
    12: 'AAU3',
};
const WU = {
    2: ['WU12', '新西兰', ''],
    4: 'WU13',
    5: 'WU14',
    10: 'WU15',
};
const CU = {
    6: 'CU2',
    7: 'CU3',
    8: 'CU4',
};
const SP = {
    2: '惊喜',
    8: '惊喜',
    11: '惊喜',
};
const LL = {
    2: ['LL8', 'DHC-4 驯鹿', require('./imgs/dhc-4.jpg')],
    4: 'LL9',
    5: 'LL10',
    6: 'LL11',
    7: 'LL12',
    8: 'LL13',
    10: 'LL14',
};
const FF = {
    3: ['FF4', 'ATR-42/72', require('./imgs/atr-42.jpg')],
    4: 'FF5',
    5: 'FF6',
    6: 'FF7',
    7: 'FF8',
    8: 'FF9',
    10: 'FF10',
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

            <div className="info">
                官方已预告内容 | Diablohu | 2022/12/05 | fly-dbh.com
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
