import { FC } from 'react';
import { Layout } from 'antd';

import styles from './Login.module.scss';
import LoginForm from '@components/ui/form/LoginForm/LoginForm.tsx';

const Login: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Layout>
                <div className={styles.blur} />
                <LoginForm />
            </Layout>
        </div>
    );
};

export default Login;
