import { extend } from 'koot';
import classNames from 'classnames';

import Page from '@views/page';

import styles, { wrapper as classNameModule } from './index.module.less';

// Functional Component =======================================================

const MSFS2024Page = extend({
    styles,
})(({ className, children, ...props }) => {
    return (
        <Page updateDate={true} className={classNames(className)} {...props}>
            {children}
        </Page>
    );
});

export default MSFS2024Page;

// ============================================================================

export const TitleCell = ({ className, children, ...props }) => (
    <h2
        className={classNames(`${classNameModule}-title-cell`, className)}
        {...props}
    >
        {children}
    </h2>
);
