import { type FC } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import GlossyContainer from '@components/glossy-container';
import Page from '../';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

interface ComponentProps {
    customProps?: string;
}

// ============================================================================

enum Specs {
    MINIMUN = '最低需求',
    RECOMMENDED = '推荐配置',
    IDEAL = '理想配置',
}
enum Presets {
    LOW = '低（LOW）',
    MEDIUM = '中（MEDIUM）',
    HIGH = '高（HIGH）',
    ULTRA = '超高（ULTRA）',
}

type SpecType = {
    tier: Specs;
    target?: {
        resolution: [number, number, string?];
        scaling?: number;
        framerate: number;
        preset: Presets;
    };
    os?: string;
    directX?: string;
    cpu: string[];
    gpu: string[];
    vram: number;
    ram: number;
    ramNotes?: string[];
    storage: number;
    xboxEquivalent?: string;
};

const rowNames: Record<keyof SpecType, string> = {
    tier: '级别',
    target: '性能目标',
    os: '操作系统',
    directX: 'DirectX 版本',
    cpu: 'CPU',
    gpu: 'GPU',
    vram: '显存',
    ram: '内存',
    ramNotes: '内存备注',
    storage: '存储空间',
    xboxEquivalent: '相当于 XBOX',
};

const pcSpecs: SpecType[] = [
    {
        tier: Specs.MINIMUN,
        target: {
            resolution: [1920, 1080],
            scaling: 0.7,
            framerate: 30,
            preset: Presets.LOW,
        },
        os: 'Windows 10 最新版本',
        directX: 'DX12',
        cpu: ['AMD Ryzen 5 2600X', 'Intel Core i7-6800K'],
        gpu: ['Radeon RX 5700', 'GeForce GTX 970'],
        vram: 4,
        ram: 16,
        ramNotes: [],
        storage: 50,
        // xboxEquivalent: 'XBOX Series S',
    },
    {
        tier: Specs.RECOMMENDED,
        target: {
            resolution: [2560, 1440],
            framerate: 30,
            preset: Presets.HIGH,
        },
        os: 'Windows 10 最新版本',
        directX: 'DX12',
        cpu: ['AMD Ryzen 7 2700X', 'Intel Core i7-10700K'],
        gpu: ['Radeon RX 5700 XT', 'GeForce RTX 2080'],
        vram: 8,
        ram: 32,
        ramNotes: ['可有少量后台程序'],
        storage: 50,
        // xboxEquivalent: 'XBOX Series X',
    },
    {
        tier: Specs.IDEAL,
        target: {
            resolution: [3840, 2160, '4K'],
            framerate: 40,
            preset: Presets.ULTRA,
        },
        os: 'Windows 10 最新版本',
        directX: 'DX12',
        cpu: ['AMD Ryzen 9 7900X', 'Intel Core i7-14700K'],
        gpu: ['Radeon RX 7900 XT', 'GeForce RTX 4080'],
        vram: 12,
        ram: 64,
        ramNotes: ['可有多个后台程序，包括录屏'],
        storage: 50,
    },
];

const pcSpecs2020: SpecType[] = [
    {
        tier: Specs.MINIMUN,
        os: 'Windows 10 1909',
        directX: 'DX11',
        cpu: ['AMD Ryzen 3 1200', 'Intel Core i5-4460'],
        gpu: ['Radeon RX 570', 'GeForce GTX 770'],
        vram: 2,
        ram: 8,
        storage: 150,
    },
    {
        tier: Specs.RECOMMENDED,
        os: 'Windows 10 1909',
        directX: 'DX12',
        cpu: ['AMD Ryzen 5 1500X', 'Intel Core i5-8400'],
        gpu: ['Radeon RX 590', 'GeForce GTX 970'],
        vram: 4,
        ram: 16,
        storage: 150,
    },
    {
        tier: Specs.IDEAL,
        os: 'Windows 10 1909',
        directX: 'DX12',
        cpu: ['AMD Ryzen 7 Pro 2700X', 'Intel Core i7-9800X'],
        gpu: ['Radeon VII', 'GeForce RTX 2080'],
        vram: 8,
        ram: 32,
        storage: 150,
    },
];

// Functional Component =======================================================

const PcSpecs = extend<ComponentProps>({
    styles,
})(({ className }): JSX.Element => {
    return (
        <Page updateDate={true} classNameBody={className}>
            <SpecsTable specs={pcSpecs} title="2024" />
            <SpecsTable
                specs={pcSpecs2020}
                title="2020"
                omit={['target', 'os', 'ramNotes', 'directX']}
            />
        </Page>
    );
});

export default PcSpecs;

// ============================================================================

const SpecsTable: FC<{
    specs: SpecType[];
    title: string;
    omit?: Array<keyof SpecType>;
}> = ({ specs, title, omit = [] }) => {
    return (
        <GlossyContainer
            className={`${classNameModule}-spec-table`}
            data-title={title}
        >
            <div className="highlight"></div>
            <div className="header row">
                <div className="cell title">MSFS {title}</div>
                {specs.map(({ tier }) => (
                    <div
                        key={tier}
                        className={classNames(['cell'])}
                        data-tier={tier}
                    >
                        {tier}
                    </div>
                ))}
            </div>
            {(
                Object.keys(specs[0]).filter(
                    (key) =>
                        !omit.includes(key as keyof SpecType) &&
                        key !== 'tier' &&
                        key !== 'ramNotes' &&
                        key !== 'os',
                ) as Array<keyof SpecType>
            ).map((key) => (
                <div key={key} className="row">
                    <div className="cell title">{rowNames[key]}</div>
                    {specs.map((spec) => (
                        <div
                            key={spec.tier}
                            className="cell"
                            data-tier={spec.tier}
                        >
                            {Array.isArray(spec[key]) ? (
                                <>
                                    {spec[key].map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))}
                                </>
                            ) : key === 'target' ? (
                                <>
                                    <p>
                                        {spec.target?.resolution[0]} x{' '}
                                        {spec.target?.resolution[1]}
                                        {spec.target?.resolution[2]
                                            ? ` (${spec.target?.resolution[2]})`
                                            : null}
                                        {spec.target?.scaling
                                            ? ` @ ${spec.target?.scaling * 100}%`
                                            : null}
                                    </p>
                                    <p>{spec.target?.framerate} FPS</p>
                                    <p>{spec.target?.preset}画质预设</p>
                                </>
                            ) : key === 'ram' ? (
                                <>
                                    <p>{spec[key]} GB</p>
                                    {spec.ramNotes ? (
                                        <small>{spec.ramNotes}</small>
                                    ) : null}
                                </>
                            ) : ['ram', 'vram', 'storage'].includes(key) ? (
                                `${spec[key]} GB`
                            ) : (
                                spec[key]
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </GlossyContainer>
    );
};
