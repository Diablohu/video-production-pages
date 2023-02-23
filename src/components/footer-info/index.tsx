import React from 'react';
import { extend } from 'koot';

import styles from './index.module.less';

// ============================================================================

interface ComponentProps {
    date?: string;
}

// Functional Component =======================================================

const FooterInfo = extend<ComponentProps>({
    styles,
})(({ className, children, date }): JSX.Element => {
    return (
        <div className={className}>
            {children ?? `官方已预告内容 | Diablohu | ${date} | fly-dbh.com`}
        </div>
    );
});

export default FooterInfo;
