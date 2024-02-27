import { FC, useEffect } from 'react';
import { Layout } from 'antd';
import { Aside, Footer, Header, MainPageContent } from '@components/index.ts';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks.ts';
import { setShowLoader } from '@redux/mainStore.ts';

import styles from './MainPage.module.scss';

export const MainPage: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setShowLoader(false));
    }, []);

    return (
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
};
export default MainPage;
