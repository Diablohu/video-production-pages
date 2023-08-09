import { extend } from 'koot';

import styles from './index.module.less';

// ============================================================================

const schedule = [
    {
        time: '23年8月',
        title: 'V2 Block 1',
        price: '免费更新',
        list: [
            '电传模型v2 (FlyByWire)',
            '气动模型v2 (Flight Model)',
            '全新 VNAV',
            '航电系统优化',
            '部分屏幕和仪表重做',
            '代码运行效率优化',
        ],
        updated: true,
    },
    {
        time: '23年9月',
        title: 'V2 Block 2',
        price: '免费更新',
        list: [
            'IAE 发动机版本',
            '视效更新',
            '电子平板v2 (EFB)',
            '更多的航电优化',
        ],
    },
    {
        time: '23年底',
        title: 'A319 + A321',
        price: '40英镑',
        list: ['扩展包', '捆绑销售', '需要有 Fenix A320'],
    },
    {
        time: '24年初',
        title: '鲨鱼鳍',
        price: '免费更新',
        list: ['鲨鱼鳍翼尖 (Sharklet)', '所有机型'],
    },
];

// Functional Component =======================================================

const ThirdPartyFenixA320V2Rollout = extend({
    styles,
})(({ className }) => {
    return (
        <div className={className}>
            <p>ThirdPartyFenixA320V2Rollout!</p>
        </div>
    );
});

export default ThirdPartyFenixA320V2Rollout;
