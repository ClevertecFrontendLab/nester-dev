import { Layout } from 'antd';
import { Aside, Header, MainPageContent } from '@components/index.ts';
import { FC } from 'react';
import styles from './MainPage.module.scss';

export const MainPage: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Layout>
                <Aside />
                <Layout>
                    <Header />
                    <MainPageContent />
                </Layout>
            </Layout>
        </div>
    );
};
