import { isValidElement, ElementType } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import styles from './index.module.less';

// ============================================================================

export type ProcedureItemType =
    | string
    | JSX.Element
    | [string, string]
    | [string, string, string]
    | [number, string, string]
    | [number, string, string, string];

export interface ProceduresProps {
    title: string;
    list?: Array<Array<string | undefined> | string | ElementType>;
    steps?: Array<ProcedureItemType | ElementType>;
}

// Functional Component =======================================================

const Precedures = extend<ProceduresProps>({
    styles,
})(({ className, title, list, steps }): JSX.Element => {
    return (
        <div className={className}>
            <h3>{title}</h3>
            <div className="body">
                {(list || steps || []).map((item, index) =>
                    item === '' ? (
                        <strong className="title" key={index}>
                            {item}
                        </strong>
                    ) : !Array.isArray(item) || isValidElement(item) ? (
                        <span className="info" key={index}>
                            {item}
                        </span>
                    ) : (
                        <dl
                            className={classNames([
                                'item',
                                {
                                    'mod-no-left':
                                        typeof item[0] === 'undefined',
                                    [`mod-level-${item[0]}`]:
                                        typeof item[0] === 'number',
                                    'mod-no-dots':
                                        typeof item[0] === 'number' &&
                                        item.length === 2,
                                },
                            ])}
                            key={index}
                        >
                            {typeof item[0] === 'number' &&
                            item.length === 2 ? (
                                <dt>{item[1]}</dt>
                            ) : (
                                <>
                                    <dt>
                                        {item
                                            .slice(
                                                typeof item[0] === 'number'
                                                    ? 1
                                                    : 0,
                                                -1,
                                            )
                                            .join(' ')}
                                    </dt>
                                    <dd className="action">{item.at(-1)}</dd>
                                </>
                            )}
                        </dl>
                    ),
                )}
            </div>
        </div>
    );
});

export default Precedures;
