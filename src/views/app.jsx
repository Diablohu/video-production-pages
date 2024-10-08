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

    const onBgImgSelectChange = useCallback((evt) => {
        const src = evt.nativeEvent.target.value;
        if (src) {
            document.documentElement.style.setProperty(
                '--background-image',
                `url(${src})`,
            );
        } else {
            document.documentElement.style.removeProperty('--background-image');
        }
    }, []);

    return (
        <div className={`${classNameModule}-controls`}>
            {[
                'output',
                'mask',
                'backdrop-mask',
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
            <label>
                BG
                <select onChange={onBgImgSelectChange}>
                    <option value="">--</option>
                    {[
                        [
                            'MSFS 2024 Cover',
                            require('../assets/msfs2024/cover.jpg'),
                        ],
                    ].map(([name, src]) => (
                        <option key={name} value={src}>
                            {name}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};
