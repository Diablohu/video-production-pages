import { type FC } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Cell from '@components/cell';
import Page, { TitleCell, InfoCell } from '../';

import aircrafts, { AircraftTypes, type AircraftType } from './lists/aircrafts';

import styles, { wrapper as classNameModule } from './index.module.less';

// Functional Component =======================================================

const ThisPage = extend({
    styles,
})(({ className }) => {
    return (
        <Page updateDate={true} classNameBody={classNames(className)}>
            <div className="aircrafts">
                <TitleCell>
                    <span>
                        <u>* 全新 *</u> 机型 ({aircrafts.length})
                    </span>
                </TitleCell>
                <div className="cells">
                    {aircrafts.map((aircraft) => (
                        <Aircraft
                            key={`${aircraft.code}_${aircraft.name}`}
                            {...aircraft}
                        />
                    ))}
                </div>
            </div>
            <div className="avionics">
                <TitleCell>
                    <span>
                        <u>* 全新 *</u> 航电系统
                    </span>
                </TitleCell>
                <div className="cells">
                    <InfoCell
                        className="cell"
                        title={
                            <>
                                霍尼韦尔
                                <br />
                                Primus Epic 2.0
                            </>
                        }
                        infos={['WorkingTitle']}
                        img={require('./imgs/honeywell-primus-epic-2.jpg')}
                        infoCell
                        bgMaskOrientation="horizontal"
                        style={{
                            '--mask-min-width': '120%',
                            '--mask-gradient-angle': '15deg',
                            backgroundSize: 'auto 140%',
                            backgroundPosition: '45% 90%',
                        }}
                    />
                    <InfoCell
                        className="cell"
                        title={<>LXNAV ADI</>}
                        infos={['GotFriends']}
                        img={require('./imgs/lxnav-adi.jpg')}
                        infoCell
                        // bgMaskOrientation="horizontal"
                        style={{
                            // '--mask-min-width': '50%',
                            // '--mask-gradient-angle': '15deg',
                            backgroundSize: 'auto 500%',
                            backgroundPosition: '66% 62%',
                        }}
                    />
                    <div className="sub">
                        <TitleCell>内置机型</TitleCell>
                        <div className="cells">
                            <InfoCell
                                className="cell"
                                title="标配……"
                                infos={[
                                    'EFB',
                                    '绕机检查',
                                    '故障、损伤、污渍',
                                    '客机客舱与乘客',
                                ]}
                                img={require('./imgs/cabin.webp')}
                                infoCell
                                bgMaskOrientation="horizontal"
                                style={{
                                    // '--mask-min-width': '50%',
                                    // '--mask-gradient-angle': '15deg',
                                    backgroundSize: 'auto 100%',
                                    backgroundPosition: '35% 70%',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
});

export default ThisPage;

// Functional Component =======================================================

const Aircraft: FC<AircraftType> = ({
    name,
    code,
    type,
    description,
    developers = [],
    img = '',
    style,

    isDeluxe = false,
    isPremiumDeluxe = false,
}) => {
    return (
        <Cell
            className={classNames([`${classNameModule}-aircraft`], {
                'mod-is-deluxe': isDeluxe,
                'mod-is-premium-deluxe': isPremiumDeluxe,
            })}
            data-aircraft-type={
                type
                    ? Object.keys(AircraftTypes)[
                          (Object.values(AircraftTypes) as string[]).indexOf(
                              type,
                          )
                      ]
                    : null
            }
        >
            <dl style={style}>
                {img && (
                    <>
                        <span className="img">
                            <span
                                className="picture"
                                style={{
                                    backgroundImage: `url(${img})`,
                                }}
                            />
                        </span>
                        <span
                            className="img-blur"
                            style={{
                                backgroundImage: `url(${img})`,
                            }}
                        />
                    </>
                )}
                <dt className="name">{name}</dt>
                {/* <dd>
                    {typeName[type]} / {developers.join(' + ')}
                </dd> */}
                <dd>{type ?? description}</dd>
            </dl>
        </Cell>
    );
};
