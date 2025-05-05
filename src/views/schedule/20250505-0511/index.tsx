import {
    useMemo,
    type FC,
    type HTMLAttributes,
    type DetailedHTMLProps,
} from 'react';
import { extend } from 'koot';
import classNames from 'classnames';
import dayjs from 'dayjs';

import Page from '@views/page';
import bgimg from '../20250501-3-weeks/20250101004241_1.jpg';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const schedule = [
    {
        date: '2025-05-05',
        start: '20:30',
        event: '群飞活动',
        stream: '挑战大转盘',
    },
    {
        date: '2025-05-06',
    },
    {
        date: '2025-05-07',
    },
    {
        date: '2025-05-08',
    },
    {
        date: '2025-05-09',
    },
    {
        date: '2025-05-10',
    },
    {
        date: '2025-05-11',
    },
];

const dayString = ['日', '一', '二', '三', '四', '五', '六'];

// ============================================================================

const ScheduleThreeWeeks = extend<{
    //
}>({
    styles,
})(({ className, ...props }) => {
    return (
        <Page
            className={className}
            classNameBody={`${classNameModule}-body`}
            style={{
                '--background-image': `url(${bgimg})`,
            }}
        >
            <div className="wrapper">
                <section className="title">
                    <strong>DiabloHu</strong>
                    <span>近期直播计划</span>
                    <small>live.fly-dbh.com</small>
                </section>

                {schedule.map(({ date, start, stream, event }, index) => {
                    const day = dayjs(date);
                    const hasStream = !!stream;
                    return (
                        <section
                            className={classNames([
                                'section',
                                'schedule',
                                {
                                    'mod-has-stream': hasStream,
                                },
                            ])}
                            key={index}
                        >
                            <span className="date">
                                <strong>{day.format('MM / DD')}</strong>
                                <small>
                                    {dayString[parseInt(day.format('d'))]}
                                </small>
                            </span>
                            {hasStream && (
                                <span className="stream">
                                    <small>{start} ~</small>
                                    <strong>
                                        {event && (
                                            <span className="event">
                                                {event}
                                            </span>
                                        )}
                                        {stream}
                                    </strong>
                                </span>
                            )}
                        </section>
                    );
                })}
                <section className={classNames(['start-vacation'])}>
                    <strong>
                        开始休假
                        <br />~ 05 / 14
                    </strong>
                    <small>
                        还拖欠着几个视频待剪辑
                        <br />
                        抱歉了 ＞﹏＜
                    </small>
                </section>
            </div>
        </Page>
    );
});

export default ScheduleThreeWeeks;
