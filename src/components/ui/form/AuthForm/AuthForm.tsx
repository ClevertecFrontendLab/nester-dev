import { FC, useEffect, useState } from 'react';
import { Form } from 'antd';
import AuthButtons from '@components/ui/form/AuthForm/AuthButtons.tsx';
import { IAuthFormFields } from '@components/ui/form/AuthForm/types.ts';
import AuthFormTabs from '@components/ui/form/AuthForm/AuthFormTabs.tsx';
import { ReactComponent as Logo } from '@assets/icons/Logo-full.svg';
import { useLocation } from 'react-router-dom';
import { Paths } from '@shared/constants.ts';
import { useAuth } from '@hooks/useAuth.ts';
import cn from 'classnames';

import styles from './AuthForm.module.scss';

const AuthForm: FC = () => {
    const { pathname } = useLocation();
    const [form] = Form.useForm();
    const [hasErrors, setHasErrors] = useState(false);
    const { login, register } = useAuth();

    const handleFormChange = () => {
        const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
        setHasErrors(hasErrors);
    };

    useEffect(() => {
        form.resetFields();
    }, [pathname]);

    const onSubmit = (values: IAuthFormFields) => {
        if (pathname === Paths.REGISTRATION) {
            register({ email: values.register_email, password: values.register_password });
        } else if (pathname === Paths.LOGIN) {
            login({
                email: values.login_email,
                password: values.login_password,
                remember_me: values.remember_me,
            });
        }
    };

    return (
        <div
            className={cn(
                styles.wrapper,
                pathname === Paths.LOGIN && styles.login,
                pathname === Paths.REGISTRATION && styles.register,
            )}
        >
            <Logo className={styles.logo} />

            <Form
                size='large'
                requiredMark={false}
                form={form}
                onFinish={onSubmit}
                onFieldsChange={handleFormChange}
            >
                <AuthFormTabs />

                <AuthButtons hasErrors={hasErrors} />
            </Form>
        </div>
    );
};
export default AuthForm;
