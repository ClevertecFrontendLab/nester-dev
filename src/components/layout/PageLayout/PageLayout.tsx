import { FC } from 'react';
import { Layout } from 'antd';
import { Aside, Breadcrumbs } from '@components/index.ts';
import { Outlet } from 'react-router-dom';

import styles from '@components/layout/PageLayout/PageLayout.module.scss';

const PageLayout: FC = () => (
    <div className={styles.wrapper}>
        <Layout>
            <Aside />
            <Layout>
                <Breadcrumbs />
                <Outlet />
            </Layout>
        </Layout>
    </div>
);

export default PageLayout;
