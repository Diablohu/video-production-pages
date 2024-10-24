import {
    useMemo,
    type FC,
    type HTMLAttributes,
    type DetailedHTMLProps,
} from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Cell, { type CellProps } from '@components/cell';
import Page from '@views/page';

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
    cells?: CellType[];
} & Pick<
    CellProps,
    'title' | 'infos' | 'img' | 'bgMaskOrientation' | 'className' | 'style'
>;

/** 信息组 */
export interface CellGroupType {
    /** 标题 */
    title: CellType['title'];
    cells: CellType[];
    name?: string;
}

// Functional Component =======================================================

const MSFS2024Page = extend<{
    classNameBody?: string;
    infos?: CellGroupType[];
    infosClassName?: string;
}>({
    styles,
})(({
    className,
    classNameBody,
    children,
    infos,
    infosClassName,
    ...props
}) => {
    const isInfos = useMemo(() => Array.isArray(infos), [infos]);

    return (
        <Page
            updateDate={true}
            className={classNames(className)}
            classNameBody={classNames(classNameBody, [
                {
                    [`${classNameModule}-infos`]: isInfos,
                    infosClassName,
                },
            ])}
            {...props}
        >
            {Array.isArray(infos) &&
                infos.map((group, index) => (
                    <div
                        key={index}
                        className="group"
                        data-title={group.title}
                        data-name={group.name}
                    >
                        <TitleCell className="title">{group.title}</TitleCell>
                        <div className="grid">
                            {group.cells.map(({ className, ...cell }, index) =>
                                Array.isArray(cell.cells) ? (
                                    <div
                                        key={index}
                                        className="grid"
                                        style={{
                                            ...cell.style,
                                            gridRow: cell.rowSpan
                                                ? `span ${cell.rowSpan}`
                                                : undefined,
                                            gridColumn: cell.columnSpan
                                                ? `span ${cell.columnSpan}`
                                                : undefined,
                                        }}
                                    >
                                        {cell.cells.map(
                                            ({ className, ...cell }, index) => (
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
                    </div>
                ))}
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
    CellProps & {
        className?: string;
        rowSpan?: number;
        columnSpan?: number;
        backgroundSize?: string;
        backgroundPosition?: string;
        title: CellType['title'];
    }
> = ({
    className,
    rowSpan,
    columnSpan,
    backgroundSize,
    backgroundPosition,
    style = {},
    ...props
}) => {
    return (
        <Cell
            className={classNames([`${classNameModule}-cell`, className])}
            style={{
                gridRow: rowSpan ? `span ${rowSpan}` : undefined,
                gridColumn: columnSpan ? `span ${columnSpan}` : undefined,
                backgroundSize,
                backgroundPosition,
                ...style,
            }}
            infoCell
            data-title={props.title}
            {...props}
        />
    );
};
