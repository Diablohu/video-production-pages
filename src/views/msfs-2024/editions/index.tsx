import { extend } from 'koot';

import GlossyContainer from '@components/glossy-container';
import Page from '../';

import styles from './index.module.less';

// ============================================================================

const editions = [
    {
        name: 'Standard',
        nameZh: '标准版',
        price: 70,
        priceRMB: 490,
        priceSteamRMB: 348,
        gamepass: true,
        aircrafts: 75,
        aircraftsVs2020equivalent: 30,
        airports: 150,
    },
    {
        name: 'Deluxe',
        nameZh: '豪华版',
        price: 100,
        priceRMB: 700,
        priceSteamRMB: 498,
        aircrafts: 85,
        aircraftsVsPreviousTier: 10,
        aircraftsVs2020equivalent: 35,
        airports: 155,
    },
    {
        name: 'Premium Deluxe',
        nameZh: '高级豪华版',
        price: 130,
        priceRMB: 910,
        priceSteamRMB: 648,
        aircrafts: 100,
        aircraftsVsPreviousTier: 15,
        aircraftsVs2020equivalent: 45,
        airports: 160,
        physical: true,
    },
    {
        name: 'Aviator',
        nameZh: '飞行员领航版',
        price: 200,
        priceRMB: 1400,
        priceSteamRMB: 998,
        aircrafts: 130,
        aircraftsVsPreviousTier: 30,
        aircraftsNote: (
            <>
                此 30 款为过去 4 年微软第一方出品的
                <br />
                所有航空器（AN-225、ATR 等）
                <br />
                均可单独购买
            </>
        ),
        airports: 160,
        physical: true,
    },
];

// ============================================================================

interface ComponentProps {
    customProps?: string;
}

// Functional Component =======================================================

const Editions = extend<ComponentProps>({
    styles,
})(({ className }): JSX.Element => {
    return (
        <Page updateDate={true} classNameBody={className}>
            <div className="editions">
                {editions.map((edition) => (
                    <GlossyContainer
                        key={edition.name}
                        className="edition glossy-block"
                        data-edition={edition.name}
                    >
                        <h2>{edition.nameZh}</h2>
                        <h3>{edition.name.toUpperCase()}</h3>
                        <div className="info price">
                            ${edition.price} 美元
                            <br />
                            STEAM ￥{edition.priceSteamRMB} 人民币
                            {edition.gamepass ? (
                                <small className="gamepass">
                                    Game Pass 畅玩
                                </small>
                            ) : null}
                            {edition.physical && <small>有限量实体版</small>}
                            {/* 　${edition.price} 美元（约￥{edition.priceRMB}）
                        <br />
                        STEAM 国区：￥{edition.priceSteamRMB}
                        {edition.gamepass ? (
                            <small className="gamepass">Game Pass 畅玩</small>
                        ) : null}
                        {edition.physical && <small>有限量实体版</small>} */}
                        </div>
                        <div className="info aircrafts">
                            <span>
                                {edition.aircrafts}
                                {edition.aircraftsVsPreviousTier
                                    ? `（+${edition.aircraftsVsPreviousTier}）`
                                    : ' '}
                                航空器
                            </span>
                            {edition.aircraftsVs2020equivalent && (
                                <small className="vs-2020">
                                    含 2020 同级别产品的所有航空器
                                    <br />
                                    对比 2020 同级别：+{' '}
                                    {edition.aircraftsVs2020equivalent} 全新
                                </small>
                            )}
                            {edition.aircraftsNote && (
                                <small className="note">
                                    {edition.aircraftsNote}
                                </small>
                            )}
                        </div>
                        <div className="info airports">
                            <span>{edition.airports} 手工机场</span>
                        </div>
                    </GlossyContainer>
                ))}
            </div>
            <GlossyContainer className="release glossy-block">
                <p className="date">上线平台</p>
                <p className="platform">
                    {[
                        'PC STEAM',
                        'PC 微软商店',
                        'XBOX Sereis X|S',
                        'XBOX 云游戏',
                        'Game Pass',
                        'PC VR',
                        'PlayStation 5',
                        'PS VR 2 (2026年)',
                    ].join('　 | 　')}
                </p>
            </GlossyContainer>
        </Page>
    );
});

export default Editions;
