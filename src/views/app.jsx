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
        const maskOpacity =
            evt.nativeEvent.target.selectedOptions[0].dataset.maskOpacity;
        const backdropBlur =
            evt.nativeEvent.target.selectedOptions[0].dataset.backdropBlur;
        [
            {
                enabled: !!src,
                name: '--background-image',
                value: `url(${src})`,
            },
            {
                enabled: !!maskOpacity,
                name: '--background-mask-opacity',
                value: maskOpacity,
            },
            {
                enabled: !!backdropBlur,
                name: '--background-mask-backdrop-blur',
                value: `${backdropBlur}px`,
            },
        ].forEach(({ enabled, name, value }) => {
            if (enabled) {
                document.documentElement.style.setProperty(name, value);
            } else {
                document.documentElement.style.removeProperty(name);
            }
        });
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
                        {
                            name: 'MSFS 2024 Cover',
                            src: require('../assets/msfs2024/cover.jpg'),
                            maskOpacity: 0.5,
                            backdropBlur: 10,
                        },
                        [
                            'MSFS 2024 Tech Alpha 1',
                            require('../assets/background-images/msfs2024/1.png'),
                        ],
                        [
                            'MSFS 2024 Tech Alpha 2',
                            require('../assets/background-images/msfs2024/2.png'),
                        ],
                        [
                            'MSFS 2024 Tech Alpha 3',
                            require('../assets/background-images/msfs2024/3.png'),
                        ],
                        {
                            name: 'MSFS 2024 Tech Alpha 4',
                            src: require('../assets/background-images/msfs2024/4.png'),
                            maskOpacity: 0.25,
                            backdropBlur: 5,
                        },
                        {
                            name: 'MSFS 2024 Tech Alpha 5',
                            src: require('../assets/background-images/msfs2024/5.png'),
                            maskOpacity: 0.5,
                            // backdropBlur: 10,
                        },
                        [
                            'MSFS 2024 Tech Alpha 6',
                            require('../assets/background-images/msfs2024/6.png'),
                        ],
                        [
                            'MSFS 2024 Tech Alpha 7',
                            require('../assets/background-images/msfs2024/7.png'),
                        ],
                        [
                            'MSFS 2024 Tech Alpha 8',
                            require('../assets/background-images/msfs2024/8.png'),
                        ],
                    ].map((item) => (
                        <option
                            key={Array.isArray(item) ? item[0] : item?.name}
                            value={Array.isArray(item) ? item[1] : item?.src}
                            data-mask-opacity={item?.maskOpacity}
                            data-backdrop-blur={item?.backdropBlur}
                        >
                            {Array.isArray(item) ? item[0] : item?.name}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};
