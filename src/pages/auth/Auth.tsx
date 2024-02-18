import { FC } from 'react';
import { Layout } from 'antd';
import { AuthForm } from '@components/index.ts';

import styles from './Auth.module.scss';

const Auth: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Layout>
                <div className={styles.blur} />
                <AuthForm />
            </Layout>
        </div>
    );
};

export default Auth;
