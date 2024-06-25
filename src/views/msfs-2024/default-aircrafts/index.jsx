import { useMemo, useEffect } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Cell from '@components/cell';
import FooterInfo from '@components/footer-info';

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
    /** TODO: 使用 MutationObserver，监控 HTML 标签的 className 变化 */
    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes') {
                    const { target } = mutation;
                    if (target.tagName === 'HTML') {
                        const { className } = target;
                        const viewType = target.getAttribute('data-view-type');
                        console.log(123, viewType);
                    }
                }
            });
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-view-type'],
        });
        return () => {
            observer.disconnect();
        };
    }, []);

    // const isMask = useMemo(() => type === 'mask', [type]);
    // const isDemo = useMemo(() => type === 'demo', [type]);
    // const isDark = useMemo(() => type === 'dark', [type]);

    return (
        <div
            className={classNames(className, {
                // 'is-mask-mode': isMask === true,
                // 'is-demo-mode': isDemo === true,
                // 'is-dark-mode': isDark === true,
            })}
        >
            <FooterInfo className="info" date="2024/06/25" />
        </div>
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
