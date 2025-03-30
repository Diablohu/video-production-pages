import { useEffect, useState } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';
import dayjs from 'dayjs';

import FooterInfo, {
    type Props as FooterInfoProps,
} from '@components/footer-info';

import styles from './page.module.less';

// ============================================================================

export interface Props {
    updateDate?: FooterInfoProps['date'] | boolean;
    footerContent?: FooterInfoProps['content'];
    classNameBody?: string;
    prepend?: React.ReactNode;
}

export type ViewType = 'output' | 'mask' | 'backdrop-mask' | 'watermark';

// Functional Component =======================================================

const Page = extend<Props>({
    styles,
})(({
    className,
    'data-class-name': classNameModule,
    classNameBody,
    children,
    updateDate,
    footerContent,
    prepend,
}): JSX.Element => {
    const [viewType, setViewType] = useState<ViewType>();

    /** 使用 MutationObserver，监控 HTML 标签的 className 变化 */
    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes') {
                    const { target } = mutation;
                    if ((target as HTMLHtmlElement).tagName === 'HTML') {
                        const viewType = (
                            target as HTMLHtmlElement
                        ).getAttribute('data-view-type') as ViewType;
                        setViewType(viewType);
                    }
                }
            });
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-view-type'],
        });
        return () => {
            setViewType(undefined);
            observer.disconnect();
        };
    }, []);

    return (
        <div
            className={classNames([
                className,
                {
                    [`is-view-${viewType}`]: !!viewType && viewType,
                },
            ])}
        >
            {prepend}
            <article
                className={classNames([
                    `${classNameModule}-body`,
                    classNameBody,
                ])}
            >
                {children}
            </article>
            {!updateDate ? null : (
                <FooterInfo
                    className={`${classNameModule}-footer`}
                    date={
                        updateDate === true
                            ? dayjs() /*.add(8, 'hour')*/
                                  .format('YYYY-MM-DD')
                            : updateDate
                    }
                    content={footerContent}
                />
            )}
        </div>
    );
});

export default Page;
