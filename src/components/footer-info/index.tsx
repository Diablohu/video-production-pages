import React from 'react';
import { extend } from 'koot';

import styles from './index.module.less';

// ============================================================================

export interface Props {
    date?: string;
    content?: string;
}

// Functional Component =======================================================

const FooterInfo = extend<Props>({
    styles,
})(({ className, children, date, content = '官方已预告内容' }): JSX.Element => {
    return (
        <div className={className}>
            {children ?? `${content} | Diablohu | ${date} | fly-dbh.com`}
        </div>
    );
});

export default FooterInfo;
