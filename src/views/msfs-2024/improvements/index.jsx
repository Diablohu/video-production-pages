import { useMemo, useEffect } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import Page from '@views/page';
import Cell from '@components/cell';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

/**
 * 信息单元格
 * @typedef {Object} Cell *
 *
 * @property {string} title 标题
 * @property {Array<string>} [developers] 开发者
 * @property {Array<string>} [infos] 细节信息
 * @property {string} [img] 配图
 * @property {number} [rowSpan=3] 行列数
 * @property {number} [columnSpan=2] 跨列数
 * @property {string} [backgroundSize] CSS Style: background-size
 * @property {string} [backgroundPosition] CSS Style: background-position
 * @property {string} [bgMaskOrientation]
 * @property {Array<Cell>} [cells]
 *
 */

/**
 * 信息组
 * @typedef {Object} CellGroup *
 *
 * @property {string} title 标题
 * @property {Array<Cell>} cells
 *
 */

/** @type {Array<CellGroup>} */
const cellGroupLeft = {
    title: '系统功能',
    cells: [
        {
            title: '全新客户端',
            infos: ['更多素材云端串流', 'CPU多线程优化', '默认使用 DirectX12'],
            img: require('./imgs/a330-takeoff.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '15% 30%',
            bgMaskOrientation: 'horizontal',
        },
        {
            title: '飞行计划与航图工具',
            developers: ['WorkingTitle'],
            infos: [
                '燃油规划',
                '路线规划 + ETOPS',
                'LIDO 航图',
                '提供网页版，适配移动端',
            ],
            img: require('./imgs/planner-lido-chard.png'),
            backgroundSize: 'auto 170%',
            backgroundPosition: '0% 40%',
            bgMaskOrientation: 'horizontal',
        },
        {
            title: '回放工具',
            developers: ['Fabio'],
            infos: ['实时回放', '生成僚机……'],
            img: require('./imgs/replay.jpg'),
            backgroundSize: 'auto 800%',
            backgroundPosition: '55% 37%',
            columnSpan: 1,
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-max-width': '50%',
            },
        },
        {
            title: '飞行竞速',
            infos: ['多人对抗', '整合雷诺竞赛'],
            img: require('./imgs/racing.jpg'),
            backgroundSize: 'auto 135%',
            backgroundPosition: '30% 50%',
            columnSpan: 1,
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-max-width': '50%',
            },
        },
    ],
};

/** @type {Array<CellGroup>} */
const cellGroupMid = {
    title: '飞行体验',
    cells: [
        {
            title: '改进 CFD 气动模型',
            infos: [
                '更真实的尾流',
                '气流影响植被等物体',
                '更细致的刚性面与柔性面模拟',
                '第三方可自由控制受力面几何形状',
            ],
            img: require('./imgs/grass.jpg'),
            backgroundSize: 'auto 250%',
            backgroundPosition: '5% 30%',
            bgMaskOrientation: 'horizontal',
            style: {
                '--mask-min-width': '90%',
            },
        },
        {
            title: '升级物理模拟',
            infos: ['布料和绳索模拟', '水波影响航空器和船只'],
            img: require('./imgs/hotairballoon.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '0% 55%',
            bgMaskOrientation: 'horizontal',
        },
        {
            title: '所有内置航空器……',
            infos: [
                '利用改进的 CFD 气动模型',
                '故障、损伤、污渍',
                '有绕机检查流程',
                '可控制飞行员形象自由走动',
            ],
            img: require('./imgs/zin.jpg'),
            backgroundSize: 'auto 275%',
            backgroundPosition: '30% 80.5%',
            bgMaskOrientation: 'horizontal',
        },
    ],
};

/** @type {Array<CellGroup>} */
const cellGroupRight = {
    title: '世界环境',
    cells: [
        {
            title: '翻新画面渲染',
            infos: ['光线追踪投影', '改进大气散射', '改进漫反射', '渲染极光'],
            img: require('./imgs/dubai.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '50% 40%',
            bgMaskOrientation: 'horizontal',
        },
        {
            title: '翻新全球地形',
            infos: [
                '根据卫星图生成3D地形',
                '3D植被、农田、砂石点缀',
                '更大面积的 TIN 覆盖',
                '根据地域的植被种类',
                '四季变化：植被、湿度',
            ],
            // img: require('./imgs/yosemite.jpg'),
            // backgroundSize: 'auto 185%',
            // backgroundPosition: '30% 70%',
            img: require('./imgs/autumn.jpg'),
            backgroundSize: 'auto 175%',
            backgroundPosition: '0% 70%',
            bgMaskOrientation: 'horizontal',
        },
        {
            title: '扩展全球数据',
            developers: ['ORBX', 'PuffinFlight'],
            infos: ['直升机机坪', '滑翔机机库', '油井平台', '低空障碍'],
            img: require('./imgs/oilrig.jpg'),
            backgroundSize: 'auto 220%',
            backgroundPosition: '44% 58%',
            columnSpan: 1,
            bgMaskOrientation: 'horizontal',
        },
        {
            cells: [
                {
                    title: (
                        <>
                            <small>新的云层</small>高空卷云
                        </>
                    ),
                    img: require('./imgs/cirrus.jpg'),
                    backgroundSize: 'auto 250%',
                    backgroundPosition: '0% 30%',
                    bgMaskOrientation: 'horizontal',
                    style: {
                        '--mask-min-width': '80%',
                        '--mask-max-width': '80%',
                    },
                },
                {
                    title: (
                        <>
                            <small>空中和水面</small>实时交通
                        </>
                    ),
                    developers: ['GAIST', 'AIG'],
                    img: require('./imgs/miami.jpg'),
                    backgroundSize: 'auto 1300%',
                    backgroundPosition: '17% 55%',
                    bgMaskOrientation: 'horizontal',
                    style: {
                        '--mask-min-width': '80%',
                        '--mask-max-width': '80%',
                    },
                },
                {
                    title: (
                        <>
                            <small>更多</small>动物群
                        </>
                    ),
                    img: require('./imgs/animal.jpg'),
                    backgroundSize: 'auto 500%',
                    backgroundPosition: '50% 45%',
                    bgMaskOrientation: 'horizontal',
                    style: {
                        '--mask-min-width': '80%',
                        '--mask-max-width': '80%',
                    },
                },
            ],
            columnSpan: 1,
        },
    ],
};

// Functional Component =======================================================

const ThisPage = extend({
    styles,
})(({ className, params: { type } }) => {
    return (
        <Page updateDate={true} classNameBody={classNames(className)}>
            {[cellGroupLeft, cellGroupMid, cellGroupRight].map(
                (group, index) => (
                    <div key={index} className="group">
                        <h2 className="title">{group.title}</h2>
                        <div className="grid">
                            {group.cells.map((cell, index) =>
                                Array.isArray(cell.cells) ? (
                                    <div
                                        key={index}
                                        className="grid"
                                        style={{
                                            gridRow: cell.rowSpan
                                                ? `span ${cell.rowSpan}`
                                                : undefined,
                                            gridColumn: cell.columnSpan
                                                ? `span ${cell.columnSpan}`
                                                : undefined,
                                        }}
                                    >
                                        {cell.cells.map((cell, index) => (
                                            <ThisCell
                                                key={index}
                                                className="cell"
                                                {...cell}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <ThisCell
                                        key={index}
                                        className="cell"
                                        {...cell}
                                    />
                                ),
                            )}
                        </div>
                    </div>
                ),
            )}
        </Page>
    );
});

export default ThisPage;

// Functional Component =======================================================

const ThisCell = ({
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
            {...props}
        />
    );
};
