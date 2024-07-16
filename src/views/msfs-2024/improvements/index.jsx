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
            img: require('./imgs/airport-2.jpg'),
        },
        {
            title: '飞行计划与航图工具',
            developers: ['WorkingTitle'],
            infos: [
                'ETOPS、燃油计划、航路计划、……',
                'LIDO 航图',
                '同步飞机位置',
                '还有网页版，适配移动端',
            ],
            img: require('./imgs/airport-2.jpg'),
        },
        {
            title: '回放工具',
            developers: ['Fabio'],
            infos: ['实时回放', '生成僚机……'],
            img: require('./imgs/airport-2.jpg'),
            columnSpan: 1,
            bgMaskOrientation: 'horizontal',
        },
        {
            title: '飞行竞速赛',
            infos: ['支持多人对抗', '整合雷诺竞速赛'],
            img: require('./imgs/airport-2.jpg'),
            columnSpan: 1,
            bgMaskOrientation: 'horizontal',
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
                '机体产生的气流影响植被等物体',
                '更真实的尾流',
                '更细致的刚性面与柔性面模拟',
                '第三方可自由控制受力面几何形状',
            ],
            img: require('./imgs/airport-2.jpg'),
        },
        {
            title: '升级物理模拟',
            infos: [
                '布料和绳索模拟，可受 CFD 气流影响',
                '水波可影响航空器和船只',
            ],
            img: require('./imgs/airport-2.jpg'),
        },
        {
            title: '所有内置航空器……',
            infos: [
                '利用改进的 CFD 气动模型',
                '故障、损伤、污渍',
                '有绕机检查流程',
                '可控制飞行员形象自由走动',
            ],
            img: require('./imgs/airport-2.jpg'),
        },
    ],
};

/** @type {Array<CellGroup>} */
const cellGroupRight = {
    title: '世界环境',
    cells: [
        {
            title: '翻新画面渲染',
            infos: ['光线追踪投影', '改进大气散射', '改进漫反射', '支持极光'],
            img: require('./imgs/airport-2.jpg'),
        },
        {
            title: '翻新全球地形',
            infos: [
                '根据卫星图生成3D地形',
                '3D植被、农田、砂石等点缀',
                '更大面积的 TIN 覆盖',
                '根据地域的植被种类',
                '四季变化：植被、湿度',
            ],
            img: require('./imgs/airport-2.jpg'),
        },
        {
            title: '扩展全球数据',
            developers: ['ORBX', 'PuffinFlight'],
            infos: ['直升机机坪', '滑翔机机库', '油井平台', '低空障碍'],
            img: require('./imgs/airport-2.jpg'),
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
                    img: require('./imgs/airport-2.jpg'),
                    bgMaskOrientation: 'horizontal',
                },
                {
                    title: (
                        <>
                            <small>空中和水面</small>实时交通
                        </>
                    ),
                    developers: ['GAIST', 'AIG'],
                    img: require('./imgs/airport-2.jpg'),
                    bgMaskOrientation: 'horizontal',
                },
                {
                    title: (
                        <>
                            <small>更多</small>动物群
                        </>
                    ),
                    img: require('./imgs/airport-2.jpg'),
                    bgMaskOrientation: 'horizontal',
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
                                        style={{
                                            gridRow: cell.rowSpan
                                                ? `span ${cell.rowSpan}`
                                                : undefined,
                                            gridColumn: cell.columnSpan
                                                ? `span ${cell.columnSpan}`
                                                : undefined,
                                        }}
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

const ThisCell = ({ className, ...props }) => {
    return (
        <Cell
            className={classNames([`${classNameModule}-cell`, className])}
            {...props}
        />
    );
};
