import {
    type DetailedHTMLProps,
    type HTMLAttributes,
    type CSSProperties,
} from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

export type CellProps = {
    /** 标题 */
    title: string | JSX.Element;
    /** 细节信息 */
    infos?: Array<
        | string
        | JSX.Element
        | {
              type: 'fix' | 'new' | 'implement' | 'change' | 'remove';
              content: string | JSX.Element;
          }
    >;
    /** 配图 */
    img?: string;
    mask?: boolean;
    textSize?: 'lg' | 'md' | 'sm';
    bgMaskOrientation?: 'horizontal' | 'vertical';
    type?: 'info' | 'center';
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
    type,
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
                    [`mod-infocell`]: !!infoCell || type === 'info',
                    [`mod-light-border`]: !!lightBorder,
                    [`mod-type-center`]: type === 'center',
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
                    {infos?.map((info, index) => {
                        if (typeof info === 'object' && 'content' in info) {
                            return (
                                <span key={index}>
                                    <CellTag type={info.type}></CellTag>
                                    {info.content}
                                </span>
                            );
                        }
                        return <span key={index}>{info}</span>;
                    })}
                </>
            )}
        </div>
    );
});

export default Cell;

// ============================================================================

export const CellTag = extend<
    {
        type: Exclude<
            Required<CellProps>['infos'][0],
            string | JSX.Element
        >['type'];
    } & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
>({})(({ className, type = 'new', children, ...props }) => {
    return (
        <small
            className={classNames([
                className,
                `${classNameModule}-cell-tag`,
                `is-type-${type}`,
            ])}
            {...props}
        >
            {children ??
                (type === 'fix'
                    ? '修正'
                    : type === 'new'
                      ? '新'
                      : type === 'implement'
                        ? '实装'
                        : type === 'change'
                          ? '变更'
                          : type === 'remove'
                            ? '移除'
                            : type)}
        </small>
    );
});
