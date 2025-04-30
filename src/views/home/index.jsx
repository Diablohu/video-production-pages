import { useMemo } from 'react';
import { extend } from 'koot';
import { Link } from 'react-router';

import styles from './index.module.less';

// ============================================================================

const sections = [
    ['Schedules', 'schedule'],
    ['MSFS 2024', 'msfs-2024'],
    ['MSFS 2020', 'update'],
    ['Procedures', 'procedures'],
    ['Aircrafts Comparison', 'aircrafts-compare'],
    ['Monthly Free Mods', 'monthly-free-mods'],
];

// ============================================================================

const PageHome = extend({
    pageinfo: () => ({
        title: `${__('pages.home.title')} - ${__('title')}`,
        metas: [{ description: __('pages.home.description') }],
    }),
    styles,
})(({ className, routes }) => {
    const childRoutes = useMemo(() => routes?.[0]?.childRoutes || [], [routes]);
    const sectionList = useMemo(() => {
        let remainingRoutes = [...childRoutes];
        const sectionList = sections.map(([title, pathPrefix]) => {
            const thisList = {
                title,
                prefix: pathPrefix,
                list: [],
            };
            const prefixRegex = new RegExp(`^${pathPrefix}-`, 'i');
            remainingRoutes = remainingRoutes.reduce(
                (remainingRoutes, route) => {
                    if (prefixRegex.test(route.path)) {
                        thisList.list.push({
                            name: route.path.replace(prefixRegex, ''),
                            path: route.path,
                        });
                        return remainingRoutes;
                    }
                    remainingRoutes.push(route);
                    return remainingRoutes;
                },
                [],
            );
            return thisList;
        });

        sectionList.push({
            title: 'Others',
            list: [],
        });
        remainingRoutes.forEach((route) => {
            sectionList.at(-1).list.push({
                name: route.path,
                path: route.path,
            });
        });

        return sectionList;
    }, [childRoutes]);

    return (
        <div className={className}>
            <div className="wrapper">
                {sectionList.map(({ title, list }) => (
                    <dl className="section" key={title}>
                        <dt className="title">{title}</dt>
                        <dd className="body">
                            {list.map(({ name, path }) => (
                                <Link
                                    className="link"
                                    to={`/${path}`}
                                    key={path}
                                >
                                    {name}
                                </Link>
                            ))}
                        </dd>
                    </dl>
                ))}
            </div>
        </div>
    );
});

export default PageHome;
