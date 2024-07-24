import { type FC } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Page from '@views/page';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

/** 如果为 string，仅渲染 string */
type ValueType = boolean | JSX.Element | string;
export interface TierType {
    title: string;

    /**
     * 按月订阅价格，单位：美元
     */
    pricePerMonth: number;
    /**
     * 按年订阅价格，单位：美元
     */
    pricePerYear?: number;
    platforms: Array<'xbox' | 'pc' | 'cloud'>;

    consoleMultiPlayer: ValueType;
    limitedConsoleGames: ValueType;
    fullGameLibrary: ValueType;
    dayOneRelease: ValueType;
    discounts: ValueType;
    thirdPartyGames: ValueType;
    cloudGaming: ValueType;
}

const gamePassTiers: TierType[] = [
    {
        title: 'Core',
        pricePerMonth: 9.99,
        // pricePerYear: 74.99,
        platforms: ['xbox'],
        consoleMultiPlayer: true,
        limitedConsoleGames: true,
        fullGameLibrary: false,
        dayOneRelease: false,
        discounts: false,
        thirdPartyGames: false,
        cloudGaming: false,
    },
    {
        title: 'Standard',
        pricePerMonth: 14.99,
        platforms: ['xbox'],
        consoleMultiPlayer: true,
        limitedConsoleGames: true,
        fullGameLibrary: true,
        dayOneRelease: false,
        discounts: false,
        thirdPartyGames: false,
        cloudGaming: false,
    },
    {
        title: 'PC',
        pricePerMonth: 11.99,
        platforms: ['pc'],
        consoleMultiPlayer: 'PC平台免费',
        limitedConsoleGames: false,
        fullGameLibrary: <>仅PC游戏</>,
        dayOneRelease: true,
        discounts: true,
        thirdPartyGames: true,
        cloudGaming: false,
    },
    {
        title: 'Cloud',
        pricePerMonth: 9.99,
        platforms: ['cloud'],
        consoleMultiPlayer: true,
        limitedConsoleGames: false,
        fullGameLibrary: <>仅云游戏</>,
        dayOneRelease: false,
        discounts: false,
        thirdPartyGames: false,
        cloudGaming: true,
    },
    {
        title: 'Ultimate',
        pricePerMonth: 19.99,
        platforms: ['xbox', 'pc', 'cloud'],
        consoleMultiPlayer: true,
        limitedConsoleGames: true,
        fullGameLibrary: true,
        dayOneRelease: true,
        discounts: true,
        thirdPartyGames: true,
        cloudGaming: true,
    },
];

// Functional Component =======================================================

const ThisPage = extend({
    styles,
})(({ className, children, ...props }) => {
    return (
        <Page
            updateDate={true}
            className={classNames(className)}
            classNameBody={`${classNameModule}-body`}
            {...props}
        >
            <Column>
                <Cell></Cell>
                <Cell></Cell>
                <Cell>平台</Cell>
                <Cell>
                    游戏机
                    <br />
                    多人游戏
                </Cell>
                <Cell>
                    限量
                    <br />
                    游戏机游戏
                </Cell>
                <Cell>
                    Game Pass
                    <br />
                    完整游戏库
                </Cell>
                <Cell>首日畅玩</Cell>
                <Cell>专享折扣</Cell>
                <Cell>
                    第三方游戏库
                    <br />
                    EA Play, Riot, ...
                </Cell>
                <Cell>云游戏</Cell>
            </Column>
            {gamePassTiers.map((tier) => (
                <Column key={tier.title}>
                    <Cell>
                        <span className="title">
                            {tier.title.toUpperCase()}
                        </span>
                    </Cell>
                    <Cell>
                        ${tier.pricePerMonth}美元/月
                        {tier.pricePerYear && (
                            <>
                                <br />或 ${tier.pricePerYear}美元/年
                            </>
                        )}
                    </Cell>
                    <Cell>
                        {Array.isArray(tier.platforms) &&
                        tier.platforms.length >= 3
                            ? '全平台'
                            : tier.platforms.map((platform) => (
                                  <span key={platform}>
                                      {platform === 'cloud'
                                          ? '云游戏'
                                          : platform === 'pc'
                                            ? 'PC'
                                            : 'XBOX 游戏机'}
                                  </span>
                              ))}
                    </Cell>
                    <Cell>
                        <Mark value={tier.consoleMultiPlayer} />
                    </Cell>
                    <Cell>
                        <Mark value={tier.limitedConsoleGames} />
                    </Cell>
                    <Cell>
                        <Mark value={tier.fullGameLibrary} />
                    </Cell>
                    <Cell>
                        <Mark value={tier.dayOneRelease} />
                    </Cell>
                    <Cell>
                        <Mark value={tier.discounts} />
                    </Cell>
                    <Cell>
                        <Mark value={tier.thirdPartyGames} />
                    </Cell>
                    <Cell>
                        <Mark value={tier.cloudGaming} />
                    </Cell>
                </Column>
            ))}
        </Page>
    );
});

export default ThisPage;

// ============================================================================

const Column: FC = ({ children }) => (
    <div className={`${classNameModule}-column`}>{children}</div>
);

const Cell: FC = ({ children }) => (
    <div className={`${classNameModule}-cell`}>{children}</div>
);

const Mark: FC<{
    value: ValueType;
}> = ({ value }) => (
    <span className={classNames(`${classNameModule}-mark`)} data-value={value}>
        {typeof value === 'string' ? (
            <em>{value}</em>
        ) : value === true ? (
            <span>✓</span>
        ) : value === false ? (
            ''
        ) : (
            <>
                <span>✓</span>
                <em>{value}</em>
            </>
        )}
    </span>
);
