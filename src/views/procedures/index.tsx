import { useMemo, useState, useEffect, useRef } from 'react';
import { extend, getHistory } from 'koot';
import { createHashHistory } from 'history';
import classNames from 'classnames';

import Procedures, { type ProcedureItemType } from '@components/precedures';
// import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

export { ProcedureItemType };

// Functional Component =======================================================

const ProcedurePage = extend<{
    procedures: {
        title: string;
        steps: ProcedureItemType[];
    }[];
    index?: number;
    onIndexChange?: (index: number) => void;
}>({
    // styles,
})(({ className, index, procedures, onIndexChange }) => {
    const CurrIndexRef = useRef(
        index ??
            Number(
                new URLSearchParams(
                    getHistory()?.getCurrentLocation().search,
                ).get('step') ?? '0',
            ),
    );
    const [currIndex, setCurrIndex] = useState(CurrIndexRef.current);

    useEffect(() => {
        if (CurrIndexRef.current !== currIndex) {
            onIndexChange?.(currIndex);
            getHistory()?.push({
                ...getHistory()?.getCurrentLocation(),
                search:
                    '?' +
                    new URLSearchParams({ step: `${currIndex}` }).toString(),
                // query: { step: currIndex.toString() },
            });
        }

        CurrIndexRef.current = currIndex;
    }, [currIndex, onIndexChange]);

    return (
        <div className={classNames(className)}>
            <Procedures
                title={procedures[currIndex].title}
                steps={procedures[currIndex].steps}
            />
            <div className="precedures">
                {procedures.map(({ title }, index) => (
                    <button
                        type="button"
                        key={index}
                        className={classNames([
                            'switch',
                            {
                                'is-on': index === currIndex,
                            },
                        ])}
                        // eslint-disable-next-line react/jsx-no-bind
                        onClick={() => {
                            setCurrIndex(index);
                        }}
                    >
                        {title}
                    </button>
                ))}
            </div>
        </div>
    );
});

export default ProcedurePage;
