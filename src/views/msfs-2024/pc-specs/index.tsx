import { type FC } from 'react';
import { extend } from 'koot';

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
    LOW = '低',
    MEDIUM = '中',
    HIGH = '高',
    ULTRA = '超高',
}

type SpecType = {
    tier: Specs;
    target?: {
        resolution: [number, number];
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
        storage: 50,
        xboxEquivalent: 'XBOX Series S',
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
        xboxEquivalent: 'XBOX Series X',
    },
    {
        tier: Specs.IDEAL,
        target: {
            resolution: [2560, 1440],
            framerate: 40,
            preset: Presets.ULTRA,
        },
        os: 'Windows 10 最新版本',
        directX: 'DX12',
        cpu: ['AMD Ryzen 9 7900X', 'Intel i7-14700K'],
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
        cpu: ['AMD Ryzen 7 Pro 2700X', 'Intel i7-9800X'],
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
    return <div className={`${classNameModule}-spec-table`}></div>;
};
