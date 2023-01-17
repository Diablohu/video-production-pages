import React from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import styles from './index.module.less';

// ============================================================================

interface ComponentProps {
    title: string;
    infos?: string[];
    img?: string;
    mask?: boolean;
    textSize?: 'lg' | 'md' | 'sm';
}

// Functional Component =======================================================

const Cell = extend<ComponentProps>({
    styles,
})(({ className, title, infos, img, mask = false, textSize }) => {
    return (
        <div
            className={classNames([
                className,
                {
                    'is-mask': mask === true,
                    [`mod-text-size-${textSize}`]: !!textSize,
                },
            ])}
            style={{
                backgroundImage: !img ? undefined : `url(${img})`,
            }}
        >
            <strong>{title}</strong>
            {infos?.map((info, index) => (
                <span key={index}>{info}</span>
            ))}
        </div>
    );
});

export default Cell;
