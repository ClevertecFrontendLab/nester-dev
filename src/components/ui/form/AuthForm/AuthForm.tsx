import { FC } from 'react';
import AuthButtons from '@components/ui/form/AuthForm/AuthButtons.tsx';
import { Form } from 'antd';
import { ReactComponent as Logo } from '@assets/icons/Logo-full.svg';
import AuthFormTabs from '@components/ui/form/AuthForm/AuthFormTabs.tsx';
import { useLocation } from 'react-router-dom';

import styles from './AuthForm.module.scss';
import cn from 'classnames';
import { Paths } from '@shared/constants.ts';

const AuthForm: FC = () => {
    const { pathname } = useLocation();

    return (
        <div
            className={cn(
                styles.wrapper,
                pathname === Paths.LOGIN && styles.login,
                pathname === Paths.REGISTRATION && styles.register,
            )}
        >
            <Logo className={styles.logo} />

            <Form size='large'>
                <AuthFormTabs />

                <AuthButtons />
            </Form>
        </div>
    );
};
export default AuthForm;
