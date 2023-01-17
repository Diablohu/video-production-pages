import { extend } from 'koot';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const planes = [
    [
        'Airbus A320',
        'Fenix Simulations',
        '£49.99 英镑',
        require('./imgs/a320.png'),
    ],
    [
        'Boeing 737NG',
        'PMDG Simulations LLC',
        '$34.99 美元 (起)',
        require('./imgs/b737.jpg'),
    ],
    [
        'Cessna 310R',
        'Blackbird Simulations',
        '$39.99 美元',
        require('./imgs/c310r.jpg'),
    ],
    [
        'F-35 Lightning II',
        'IndiaFoxtEcho',
        '$35.99 美元',
        require('./imgs/f35.jpg'),
    ],
    [
        'Airbus H145',
        'Hype Performance Group',
        '$50.00 美元',
        require('./imgs/h145.webp'),
    ],
    [
        'Schempp-Hirth Discus-2c',
        'Got Friends',
        '$15.00 美元',
        require('./imgs/discus2c.webp'),
    ],
    [
        'British Aerospace 146',
        'Just Flight',
        '$64.99 美元',
        require('./imgs/bae146.webp'),
    ],
    ['Kitfox STi', '//42', 'AUD48.00 澳元', require('./imgs/fox.png')],
    [
        'MV-22 Osprey',
        'Miltech Simulations',
        '$35.00 美元',
        require('./imgs/v22.png'),
    ],
    [
        'McDonnell Douglas MD-82',
        'Leonardo Software House',
        '€75.00 欧元',
        require('./imgs/md82.png'),
    ],
    [
        'Kodiak 100 Series II',
        'SimWorks Studios',
        '€29.99 欧元',
        require('./imgs/kodiak.jpg'),
    ],
    [
        'BAC Concorde',
        'DC Designs',
        '$39.99 美元',
        require('./imgs/concorde.jpg'),
    ],
];

// Functional Component =======================================================

const HighQuality3RdPartyPlanes2022 = extend({
    styles,
})(({ className }) => {
    const group1 = planes.slice(0, 6);
    const group2 = planes.slice(6, 9);
    const group3 = planes.slice(9, 12);
    return (
        <div className={className}>
            {group1.map(([name, maker, usd, img]) => (
                <Cell key={img} name={name} maker={maker} usd={usd} img={img} />
            ))}
            <div className="group-2">
                {group2.map(([name, maker, usd, img]) => (
                    <Cell
                        key={img}
                        name={name}
                        maker={maker}
                        usd={usd}
                        img={img}
                    />
                ))}
            </div>
            <div className="group-3">
                {group3.map(([name, maker, usd, img]) => (
                    <Cell
                        key={img}
                        name={name}
                        maker={maker}
                        usd={usd}
                        img={img}
                    />
                ))}
            </div>
        </div>
    );
});

export default HighQuality3RdPartyPlanes2022;

// ============================================================================

const Cell = ({ name, maker, usd, img }) => {
    return (
        <div
            className={`${classNameModule}-cell`}
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <strong>{name}</strong>
            <span>{maker}</span>
            <em>{usd}</em>
        </div>
    );
};
