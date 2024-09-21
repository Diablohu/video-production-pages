import {
    type DetailedHTMLProps,
    type HTMLAttributes,
    type CSSProperties,
} from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import styles from './index.module.less';

// ============================================================================

export type CellProps = {
    /** 标题 */
    title: string | JSX.Element;
    /** 细节信息 */
    infos?: string[];
    /** 配图 */
    img?: string;
    mask?: boolean;
    textSize?: 'lg' | 'md' | 'sm';
    bgMaskOrientation?: 'horizontal' | 'vertical';
    infoCell?: boolean;
    lightBorder?: boolean;
    style?: CSSProperties & Record<string, string>;
} & Partial<
    Omit<
        DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        'title'
    >
>;

// Functional Component =======================================================

const Cell = extend<CellProps>({
    styles,
})(({
    className,
    title,
    infos,
    img,
    mask = false,
    textSize,
    style = {},
    children,
    bgMaskOrientation = 'vertical',
    infoCell = false,
    lightBorder = true,
    ...props
}) => {
    return (
        <div
            className={classNames([
                className,
                {
                    'is-mask': mask === true,
                    [`mod-text-size-${textSize}`]: !!textSize,
                    [`mod-bg-mask-orientation-${bgMaskOrientation}`]:
                        !!bgMaskOrientation,
                    [`mod-infocell`]: !!infoCell,
                    [`mod-light-border`]: !!lightBorder,
                },
            ])}
            style={{
                backgroundImage: !img ? undefined : `url(${img})`,
                ...style,
            }}
            {...props}
        >
            {children ?? (
                <>
                    <strong>{title}</strong>
                    {infos?.map((info, index) => (
                        <span key={index}>{info}</span>
                    ))}
                </>
            )}
        </div>
    );
});

export default Cell;
