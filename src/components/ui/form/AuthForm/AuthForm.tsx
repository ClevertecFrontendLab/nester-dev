import { FC, useEffect, useState } from 'react';
import { Form } from 'antd';
import AuthButtons from '@components/ui/form/AuthForm/AuthButtons.tsx';
import AuthFormTabs from '@components/ui/form/AuthForm/AuthFormTabs.tsx';
import { ReactComponent as Logo } from '@assets/icons/Logo-full.svg';
import { useLocation } from 'react-router-dom';
import { Paths } from '@shared/constants.ts';
import cn from 'classnames';

import styles from './AuthForm.module.scss';

const AuthForm: FC = () => {
    const { pathname } = useLocation();
    const [form] = Form.useForm();
    const [hasErrors, setHasErrors] = useState(false);

    const handleFormChange = () => {
        const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
        setHasErrors(hasErrors);
    };

    useEffect(() => {
        form.resetFields();
    }, [pathname, form]);

    return (
        <div
            className={cn(
                styles.wrapper,
                pathname === Paths.LOGIN && styles.login,
                pathname === Paths.REGISTRATION && styles.register,
            )}
        >
            <Logo className={styles.logo} />

            <Form size='large' requiredMark={false} form={form} onFieldsChange={handleFormChange}>
                <AuthFormTabs />

                <AuthButtons hasErrors={hasErrors} />
            </Form>
        </div>
    );
};
export default AuthForm;
