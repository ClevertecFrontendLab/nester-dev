import { Layout } from 'antd';
import { Aside, Header } from '@components/index.ts';
import { FC } from 'react';
import styles from './MainPage.module.scss';

const { Content } = Layout;

export const MainPage: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Layout>
                <Aside />
                <Layout style={{ flexShrink: 0 }}>
                    <Header />
                    <Content>Content</Content>
                </Layout>
            </Layout>
        </div>
    );
};
