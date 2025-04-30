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
import bgimg from './20250101004241_1.jpg';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const schedule = [
    {
        date: '2025-05-01',
        start: '20:00',
        event: '真人空管',
        stream: '京沪快线 @ VATSIM',
    },
    {
        date: '2025-05-02',
        start: '21:00',
        event: '录制现场',
        stream: '油门绑定终极攻略',
    },
    {
        date: '2025-05-03',
    },
    {
        date: '2025-05-04',
    },
    {
        date: '2025-05-05',
        start: '21:00',
        event: '群飞活动',
        stream: '挑战大转盘',
    },
    {
        date: '2025-05-06',
    },
    {
        date: '2025-05-07',
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
                <section
                    className={classNames([
                        'section',
                        'schedule',
                        'mod-start-vacation',
                    ])}
                >
                    <span className="date">
                        <strong>{dayjs('2025-05-08').format('MM / DD')}</strong>
                        <small>
                            {
                                dayString[
                                    parseInt(dayjs('2025-05-08').format('d'))
                                ]
                            }
                        </small>
                    </span>
                    <span className="stream">
                        <strong>开始休假 ~ 05 / 14</strong>
                    </span>
                </section>
            </div>
        </Page>
    );
});

export default ScheduleThreeWeeks;
