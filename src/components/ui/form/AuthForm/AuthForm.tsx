import { FC, useEffect, useState } from 'react';
import AuthButtons from '@components/ui/form/AuthForm/AuthButtons.tsx';
import { Form, FormProps } from 'antd';
import { ReactComponent as Logo } from '@assets/icons/Logo-full.svg';
import AuthFormTabs from '@components/ui/form/AuthForm/AuthFormTabs.tsx';
import { useLocation } from 'react-router-dom';

import styles from './AuthForm.module.scss';
import cn from 'classnames';
import { Paths } from '@shared/constants.ts';

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

    const onSubmit = (values: FormProps) => {
        console.log(values);
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
