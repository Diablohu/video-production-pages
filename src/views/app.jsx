import { StrictMode, useState, useEffect, useCallback } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import styles, { wrapper as classNameModule } from './app.module.less';

// ============================================================================

const App = extend({
    styles,
})(({ className, children, location, ...props }) => (
    <StrictMode>
        <div
            className={classNames([
                className,
                {
                    'is-home':
                        location.pathname === '' || location.pathname === '/',
                },
            ])}
        >
            {/* <Nav location={location} {...props} /> */}
            <Main children={children} />
        </div>
        <Controls />
    </StrictMode>
));
export default App;

// ============================================================================

const Main = (props) => <main {...props} />;

// ============================================================================

const Controls = () => {
    const [viewType, setViewType] = useState('bg-dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-view-type', viewType);
    }, [viewType]);

    const onButtonClick = useCallback((evt) => {
        setViewType(
            evt.nativeEvent.target.getAttribute('data-view-type') || '',
        );
    }, []);

    return (
        <div className={`${classNameModule}-controls`}>
            {[
                'output',
                'mask',
                'bg-dark',
                'bg-light',
                'bg-streaming',
                'watermark',
            ].map((t) => (
                <button
                    key={t}
                    data-view-type={t}
                    onClick={onButtonClick}
                    className={classNames([{ 'is-active': t === viewType }])}
                >
                    {t.toUpperCase()}
                </button>
            ))}
        </div>
    );
};
