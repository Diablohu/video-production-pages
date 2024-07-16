import { useMemo } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import styles from './index.module.less';

// ============================================================================

const monthOffset = 12;

const SU = {
    3: 'SU_12',
    9: 'SU_13',
    12: 'SU_14',
    17: 'SU_15',
    // 18: 'SU_15',
};
const AAU = {
    6: 'AAU_02',
};
const WU = {
    2: ['WU_12', '新西兰', ''],
    4: ['WU_13', '大洋洲 ', ''],
    7: ['WU_14', '中东欧', ''],
    11: ['WU_15', '北欧', ''],
    13: ['WU_16', '加勒比', ''],
    19: ['WU_17', '', true, ''],
};
const CU = {
    5: ['CU_02', '法国', true, ''],
    6: ['CU_03', '美国德州', true, ''],
    8: ['CU_04', '西欧', ''],
    12: ['CU_05', '欧洲', ''],
    16: ['CU_06', '德国西南', ''],
    17: ['CU_07', '欧洲II', ''],
    18: ['CU_08', '拉斯维加斯', ''],
    19: ['CU_09', '美国东北', true, ''],
};
const SP = {
    2: '惊喜<br />AN-225',
    14: '《沙丘》　联动扩展',
    // 18: '惊喜',
    // 19: '惊喜',
};
const LL = {
    2: ['DHC-4 驯鹿', 'ORBX', require('./imgs/dhc-4.jpg')],
    6: ['Laté.631', 'BlueMesh', true, require('./imgs/latécoère-631.png')],
    5: ['Boeing 307', 'Aeroplane H.', true, require('./imgs/boeing-307.jpg')],
    7: ['AE45/145', 'Aeroplane H.', require('./imgs/ae45.jpg')],
    8: ['Do-X', 'O.Messer', require('./imgs/do-x.jpg')],
    11: ['SAAB B 17', 'iniBuilds', require('./imgs/saab17.jpg')],
    13: [
        'Bell 47J',
        'iniBuilds',
        require('./imgs/MSFS_Bell47J_Screenshot_01-scaled.jpg'),
    ],
    16: ['Do-31', 'iniBuilds', require('./imgs/do31.jpg')],
    17: ['Short SC.7', 'iniBuilds', require('./imgs/sc7.jpg')],
    19: ['C46', 'Aeroplane H.', require('./imgs/sc7.jpg')],
    // 21: ['LL_19', ''],
};
const FF = {
    2: ['AN-225', 'iniBuilds', require('./imgs/an-225.jpg')],
    3: ['AN-2', 'AT Sim.', require('./imgs/an-2.jpg')],
    6: ['Ford 4AT', 'Aeroplane H.', require('./imgs/ford-4at.png')],
    11: ['三菱MU-2', 'iniBuilds', require('./imgs/mu-2.jpg')],
    12: ['塞斯纳207', 'Carenado', require('./imgs/cessna-207.png')],
    18: ['C47D', 'Aeroplane H.', require('./imgs/c47d.png')],
    // 21: ['波音707', 'Aeroplane H.', require('./imgs/b707.png')],
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
                        <span>
                            {i > 11 - monthOffset ? (
                                <>
                                    {i === 12 - monthOffset ? '24年' : ''}
                                    {i - (11 - monthOffset)}
                                </>
                            ) : (
                                <>
                                    {i === 0 ? '23年' : ''}
                                    {i + 1 + monthOffset}
                                </>
                            )}
                            月
                        </span>
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
                    gridColumn: `${
                        -3 + new Date().getMonth() - monthOffset
                    } / span 1`,
                }}
            />

            {/* <FuturePlan type="sp">《沙丘》联动DLC</FuturePlan> */}
            <FuturePlan type="su" startOffset={6}>
                １次系统更新（小型）
            </FuturePlan>
            <FuturePlan type="wu" startOffset={6}>
                ３次世界更新
            </FuturePlan>
            <FuturePlan type="ll" startOffset={6}>
                １款当地传奇
            </FuturePlan>
            <FuturePlan type="ff" startOffset={6}>
                ２款著名航空器
            </FuturePlan>

            <div className="info">
                官方已预告内容 | Diablohu | 2024/07/16 | fly-dbh.com
            </div>
        </div>
    );
});

export default FullYearPlan2023;

// ============================================================================

const Group = ({ className, classNameCell, arr, mask }) => (
    <div className={className}>
        {[...Array(12).keys()]
            .map((i) => i + monthOffset)
            .map((i) => {
                return (
                    <Item
                        key={i}
                        item={arr[i + 1]}
                        index={i}
                        classNameCell={classNameCell}
                        mask={mask}
                    />
                );
            })}
    </div>
);

const Item = ({ item, classNameCell, mask, index }) => {
    const hasContent = Array.isArray(item) || typeof item === 'string';
    const hasImg = Array.isArray(item) && !!item[item.length - 1];
    const isCombine = Array.isArray(item) && item[2] === true;
    return (
        <div
            className={classNames([
                classNameCell,
                {
                    'is-combine': isCombine,
                },
            ])}
            data-index={index}
        >
            {hasContent ? (
                <span
                    className={classNames({
                        'has-content': Array.isArray(item),
                        'has-image': hasImg,
                    })}
                >
                    {hasImg && (
                        <i className="img">
                            {mask === true ? null : (
                                <img
                                    src={item[item.length - 1]}
                                    alt={item[0]}
                                />
                            )}
                        </i>
                    )}
                    <span
                        dangerouslySetInnerHTML={{
                            __html: Array.isArray(item)
                                ? item
                                      .slice(0, item.length - 1)
                                      .filter((v) => v !== true)
                                      .map((s, i) =>
                                          !i ? `<strong>${s}</strong>` : s,
                                      )
                                      .join('<br/>')
                                : item,
                        }}
                    ></span>
                </span>
            ) : null}
        </div>
    );
};

const FuturePlan = ({ type, startOffset = 0, children }) => {
    return (
        <div
            className={`future ${type}`}
            style={{
                gridColumnStart: `${12 - monthOffset + 4 + startOffset}`,
            }}
        >
            <div className="wrapper">{children}</div>
        </div>
    );
};
