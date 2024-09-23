import { extend } from 'koot';
import classNames from 'classnames';

import Page from '../';

import styles from './index.module.less';

// ============================================================================

const editions = [
    {
        name: 'Standard',
        nameZh: '标准版',
        price: 70,
        priceRMB: 490,
        gamepass: true,
        aircrafts: 70,
        aircraftsVs2020equivalent: 30,
        airports: 150,
    },
    {
        name: 'Deluxe',
        nameZh: '豪华版',
        price: 100,
        priceRMB: 700,
        aircrafts: 80,
        aircraftsVsPreviousTier: 10,
        aircraftsVs2020equivalent: 35,
        airports: 155,
    },
    {
        name: 'Premium Deluxe',
        nameZh: '高级豪华版',
        price: 130,
        priceRMB: 910,
        aircrafts: 95,
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
        aircrafts: 125,
        aircraftsVsPreviousTier: 30,
        aircraftsNote: (
            <>
                此30款为过去4年间
                <br />
                微软第一方出品的所有航空器
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
            {editions.map((edition) => (
                <div
                    key={edition.name}
                    className="edition"
                    data-edition={edition.name}
                >
                    <h2>{edition.nameZh}</h2>
                    <h3>{edition.name.toUpperCase()}</h3>
                    <div className="info price">
                        ${edition.price} 美元
                        <br />
                        约￥{edition.priceRMB} 人民币
                        {edition.gamepass ? (
                            <div className="gamepass">Game Pass 畅玩</div>
                        ) : null}
                        {edition.physical && <div>有限量实体版</div>}
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
                                含 2020 同级别所有航空器
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
                </div>
            ))}
        </Page>
    );
});

export default Editions;
