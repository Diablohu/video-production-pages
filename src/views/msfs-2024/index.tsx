import {
    useMemo,
    type FC,
    type HTMLAttributes,
    type DetailedHTMLProps,
} from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Cell, { type CellProps } from '@components/cell';
import Page, { type Props as PageProps } from '@views/page';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

/** 信息单元格 */
export type CellType = {
    /** 开发者 */
    developers?: string[];
    /** 行列数 */
    rowSpan?: number;
    /** 跨列数 */
    columnSpan?: number;
    /** CSS Style: background-size */
    backgroundSize?: string;
    /** CSS Style: background-position */
    backgroundPosition?: string;
    delayed?: boolean;
    cells?: CellType[];
    implemented?: false;
} & Partial<CellProps>;

/** 信息组 */
export interface CellGroupType {
    /** 标题 */
    title?: CellType['title'];
    cells: CellType[];
    name?: string;
}

// Functional Component =======================================================

const MSFS2024Page = extend<
    {
        classNameBody?: string;
        subtitle?: string;
        infos?: CellGroupType[];
        infosClassName?: string;
    } & Pick<PageProps, 'updateDate' | 'footerContent'>
>({
    styles,
})(({
    className,
    classNameBody,
    children,
    subtitle = '',
    infos,
    infosClassName,
    updateDate = true,
    footerContent,
    ...props
}) => {
    const isInfos = useMemo(() => Array.isArray(infos), [infos]);

    return (
        <Page
            updateDate={updateDate}
            footerContent={footerContent}
            className={classNames(className)}
            classNameBody={classNames(classNameBody, [
                {
                    [`${classNameModule}-infos`]: isInfos,
                    infosClassName,
                },
            ])}
            prepend={
                <div className={`${classNameModule}-logo`}>
                    <span className="top"></span>
                    <span className="bottom">
                        {Boolean(subtitle) && <em>{subtitle}</em>}
                    </span>
                </div>
            }
            {...props}
        >
            {Array.isArray(infos) &&
                infos.map((group, index) => {
                    const hasTitle = Boolean(group.title);
                    const hasCells = Array.isArray(group.cells);
                    return (
                        <div
                            key={index}
                            className="group"
                            data-title={group.title}
                            data-name={group.name}
                        >
                            {hasTitle && (
                                <TitleCell className="title">
                                    {group.title}
                                </TitleCell>
                            )}
                            {hasCells && (
                                <div className="grid">
                                    {group.cells.map(
                                        ({ className, ...cell }, index) =>
                                            Array.isArray(cell.cells) ? (
                                                <div
                                                    key={index}
                                                    className="grid"
                                                    style={{
                                                        ...cell.style,
                                                        gridRow: cell.rowSpan
                                                            ? `span ${cell.rowSpan}`
                                                            : undefined,
                                                        gridColumn:
                                                            cell.columnSpan
                                                                ? `span ${cell.columnSpan}`
                                                                : undefined,
                                                    }}
                                                >
                                                    {cell.cells.map(
                                                        (
                                                            {
                                                                className,
                                                                ...cell
                                                            },
                                                            index,
                                                        ) => (
                                                            <InfoCell
                                                                key={index}
                                                                className={classNames(
                                                                    [
                                                                        'cell',
                                                                        className,
                                                                    ],
                                                                )}
                                                                {...cell}
                                                            />
                                                        ),
                                                    )}
                                                </div>
                                            ) : (
                                                <InfoCell
                                                    key={index}
                                                    className={classNames([
                                                        'cell',
                                                        className,
                                                    ])}
                                                    {...cell}
                                                />
                                            ),
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            {children}
        </Page>
    );
});

export default MSFS2024Page;

// ============================================================================

export const TitleCell: FC<
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ className, children, ...props }) => (
    <h2
        className={classNames(`${classNameModule}-title-cell`, className)}
        {...props}
    >
        {children}
    </h2>
);

// ============================================================================

export const InfoCell: FC<
    Partial<CellProps> & {
        className?: string;
        rowSpan?: number;
        columnSpan?: number;
        backgroundSize?: string;
        backgroundPosition?: string;
    } & Partial<Pick<CellType, 'title' | 'implemented'>>
> = ({
    className,
    rowSpan,
    columnSpan,
    backgroundSize,
    backgroundPosition,
    style = {},
    implemented = true,
    extra,
    ...props
}) => {
    return (
        <Cell
            className={classNames([
                `${classNameModule}-cell`,
                className,
                {
                    'is-not-implemented': implemented === false,
                },
            ])}
            style={{
                gridRow: rowSpan ? `span ${rowSpan}` : undefined,
                gridColumn: columnSpan ? `span ${columnSpan}` : undefined,
                backgroundSize,
                backgroundPosition,
                ...style,
            }}
            infoCell
            data-title={props.title}
            extra={
                implemented === false ? (
                    <>
                        <em className="tag-not-implemented">暂未实装</em>
                        {extra}
                    </>
                ) : (
                    extra
                )
            }
            {...props}
        />
    );
};
