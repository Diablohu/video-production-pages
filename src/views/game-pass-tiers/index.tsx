import {
    useMemo,
    type FC,
    type HTMLAttributes,
    type DetailedHTMLProps,
} from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Page from '@views/page';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

export interface TierType {
    title: string;

    /**
     * 按月订阅价格，单位：美元
     */
    pricePerMonth: number;
    /**
     * 按年订阅价格，单位：美元
     */
    pricePerYear: number;

    consoleMultiPlayer: boolean;
    limitedConsoleGames: boolean;
    fullGameLibrary: boolean;
    dayOneRelease: boolean;
    discounts: boolean;
    thirdPartyGames: boolean;
    cloudGaming: boolean;
}

// Functional Component =======================================================

const ThisPage = extend({
    styles,
})(({ className, children, ...props }) => {
    return (
        <Page updateDate={true} className={classNames(className)} {...props}>
            <Column>
                <Cell></Cell>
                <Cell></Cell>
                <Cell>
                    游戏机
                    <br />
                    多人游戏
                </Cell>
                <Cell>
                    游戏机
                    <br />
                    限定游戏
                </Cell>
                <Cell>
                    Game Pass
                    <br />
                    完整游戏库
                </Cell>
                <Cell>首日即刻畅玩</Cell>
                <Cell>特殊折扣</Cell>
                <Cell>
                    第三方游戏库
                    <br />
                    EA Play, Riot, ...
                </Cell>
                <Cell>XBOX 云游戏</Cell>
            </Column>
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
