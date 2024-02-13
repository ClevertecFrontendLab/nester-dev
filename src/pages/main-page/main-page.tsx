import { FC } from 'react';
import { Layout } from 'antd';
import { Aside, Footer, Header, MainPageContent } from '@components/index.ts';

import styles from './MainPage.module.scss';

export const MainPage: FC = () => (
    <div className={styles.wrapper}>
        <Layout>
            <Aside />
            <Layout>
                <Header />
                <MainPageContent />
                <Footer />
            </Layout>
        </Layout>
    </div>
);
