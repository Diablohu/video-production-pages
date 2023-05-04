import { extend } from 'koot';

import { Link } from 'react-router';

import styles from './index.module.less';

// ============================================================================

const PageHome = extend({
    pageinfo: () => ({
        title: `${__('pages.home.title')} - ${__('title')}`,
        metas: [{ description: __('pages.home.description') }],
    }),
    styles,
})(({ className, routes }) => {
    const updates = [];
    const others = [];

    routes[0].childRoutes.forEach(({ path }) => {
        if (/^update/.test(path)) updates.push(path);
        else others.push(path);
    });

    return (
        <div className={className}>
            <div className="wrapper">
                <h2 className="title">Updates</h2>
                {updates.map((l) => (
                    <Link className="link" to={`/${l}`} key={l}>
                        {l}
                    </Link>
                ))}
                <h2 className="title">Others</h2>
                {others.map((l) => (
                    <Link className="link" to={`/${l}`} key={l}>
                        {l}
                    </Link>
                ))}
            </div>
        </div>
    );
});

export default PageHome;
