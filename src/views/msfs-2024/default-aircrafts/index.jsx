import { useMemo, useEffect } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Page from '@views/page';
import Cell from '@components/cell';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const aircraftsLight = [];
const aircraftsMedium = [];
const aircraftsLarge = [];
const aircraftsMilitary = [];

// Functional Component =======================================================

const MSFS2024DefaultAircrafts = extend({
    styles,
})(({ className, params: { type } }) => {
    return (
        <Page updateDate={true} classNameBody={classNames(className)}>
            123
        </Page>
    );
});

export default MSFS2024DefaultAircrafts;

// Functional Component =======================================================

const Aircraft = ({ className, ...props }) => {
    return (
        <Cell
            className={classNames([`${classNameModule}-cell`, className])}
            {...props}
        />
    );
};
