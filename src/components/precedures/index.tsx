import { isValidElement, ElementType } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import styles from './index.module.less';

// ============================================================================

export type ProcedureItemType =
    | string
    | JSX.Element
    | [string, string]
    | [string, string, string];

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
                                },
                            ])}
                            key={index}
                        >
                            <dt>
                                {item.length > 2 && `${item.at(1)} `}
                                {item.at(0)}
                            </dt>
                            <dd className="action">{item.at(-1)}</dd>
                        </dl>
                    ),
                )}
            </div>
        </div>
    );
});

export default Precedures;
