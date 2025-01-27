import { StrictMode, useState, useEffect, useCallback, useRef } from 'react';
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
    const BGSelectRef = useRef(null);

    const [viewType, setViewType] = useState('');

    useEffect(() => {
        document.documentElement.setAttribute('data-view-type', viewType);
    }, [viewType]);

    const onButtonClick = useCallback((evt) => {
        setViewType(
            evt.nativeEvent.target.getAttribute('data-view-type') || '',
        );
    }, []);

    const updateBgFromSelect = useCallback((select = BGSelectRef.current) => {
        const src = select.value;
        const opacity = select.selectedOptions[0].dataset.opacity;
        const blur = select.selectedOptions[0].dataset.blur;
        [
            {
                enabled: !!src,
                name: '--background-image',
                value: `url(${src})`,
            },
            {
                enabled: !!opacity,
                name: '--background-opacity',
                value: opacity,
            },
            {
                enabled: !!blur,
                name: '--background-blur',
                value: `${blur}px`,
            },
        ].forEach(({ enabled, name, value }) => {
            if (enabled) {
                document.documentElement.style.setProperty(name, value);
            } else {
                document.documentElement.style.removeProperty(name);
            }
        });
    }, []);

    const onBgImgSelectChange = useCallback(
        (evt) => {
            updateBgFromSelect(evt.nativeEvent.target);
        },
        [updateBgFromSelect],
    );

    // 默认选择第一张背景图
    useEffect(() => {
        const select = BGSelectRef.current;
        if (select) {
            select.selectedIndex = 0;
            select.dispatchEvent(new Event('change'));
            updateBgFromSelect(select);
        }
    }, [updateBgFromSelect]);

    return (
        <div className={`${classNameModule}-controls`}>
            {['output', 'mask', 'backdrop-mask', 'watermark'].map((t) => (
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
                <select onChange={onBgImgSelectChange} ref={BGSelectRef}>
                    {[
                        {
                            name: 'Dark 4',
                            src: require('../assets/bg-dark-4.png'),
                        },
                        {
                            name: 'Light',
                            src: require('../assets/bg-light.png'),
                        },
                        {
                            name: 'MSFS 2024 Cover',
                            src: require('../assets/msfs2024/cover.jpg'),
                            opacity: 0.5,
                            blur: 10,
                        },
                        {
                            name: 'MSFS 2024 / 1',
                            src: require('../assets/background-images/msfs2024/20241221000406_1.jpg'),
                            opacity: 0.25,
                            blur: 5,
                        },
                        {
                            name: 'MSFS 2024 / 2',
                            src: require('../assets/background-images/msfs2024/20250101003826_1.jpg'),
                            // opacity: 0.25,
                            // blur: 5,
                        },
                        {
                            name: 'MSFS 2024 / 3',
                            src: require('../assets/background-images/msfs2024/20250101004241_1.jpg'),
                            opacity: 0.25,
                            blur: 5,
                        },
                        {
                            name: 'MSFS 2024 / 4',
                            src: require('../assets/background-images/msfs2024/2025-01-01-02-21-19.png'),
                            opacity: 0.25,
                            // blur: 5,
                        },
                        {
                            name: 'MSFS 2024 / 5',
                            src: require('../assets/background-images/msfs2024/2025-01-02-05-00-44.png'),
                            // opacity: 0.25,
                            // blur: 5,
                        },
                        {
                            name: 'MSFS 2024 / 6',
                            src: require('../assets/background-images/msfs2024/2025-01-04-02-34-39.png'),
                            opacity: 0.25,
                            // blur: 5,
                        },
                        {
                            name: 'MSFS 2024 / 7',
                            src: require('../assets/background-images/msfs2024/2025-01-11-04-33-09.png'),
                            opacity: 1 / 2,
                            blur: 5,
                        },
                        {
                            name: 'MSFS 2024 / 8',
                            src: require('../assets/background-images/msfs2024/2025-01-19-22-33-45.png'),
                            opacity: 1 / 3,
                            blur: 5,
                        },
                        {
                            name: 'MSFS 2024 / 9',
                            src: require('../assets/background-images/msfs2024/2025-01-19-22-38-54.png'),
                            opacity: 1 / 3,
                            blur: 5,
                        },
                        {
                            name: 'MSFS 2024 / 10',
                            src: require('../assets/background-images/msfs2024/2025-01-19-22-39-57.png'),
                            opacity: 1 / 3,
                            blur: 5,
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
                            opacity: 0.25,
                            blur: 5,
                        },
                        {
                            name: 'MSFS 2024 Tech Alpha 5',
                            src: require('../assets/background-images/msfs2024/5.png'),
                            opacity: 0.5,
                            // blur: 10,
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
                            data-opacity={item?.opacity}
                            data-blur={item?.blur}
                        >
                            {Array.isArray(item) ? item[0] : item?.name}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};
