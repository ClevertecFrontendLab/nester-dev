import { FC, useEffect } from 'react';
import { Layout } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

import styles from './AuthLayout.module.scss';
import { useCheckAuth } from '@hooks/useCheckAuth.ts';
import { Paths } from '@shared/constants.ts';

const AuthLayout: FC = () => {
    const isAuthorized = useCheckAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthorized) {
            navigate(Paths.HOME, { replace: true });
        }
    }, [isAuthorized, navigate]);

    return isAuthorized ? null : (
        <div className={styles.wrapper}>
            <Layout>
                <div className={styles.blur} />
                <Outlet />
            </Layout>
        </div>
    );
};
export default AuthLayout;
