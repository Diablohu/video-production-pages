import { type DetailedHTMLProps, type HTMLAttributes } from 'react';
import { extend } from 'koot';

import styles from './index.module.less';

// Functional Component =======================================================

const GlossyContainer = extend<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>({
    styles,
})(({ children, ...props }): JSX.Element => {
    return <div {...props}>{children}</div>;
});

export default GlossyContainer;
