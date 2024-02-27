import { FC } from 'react';
import { Button, Form, Grid } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { Paths } from '@shared/constants.ts';

import styles from './AuthForm.module.scss';
import { useAuth } from '@hooks/useAuth.ts';

const { useBreakpoint } = Grid;

interface Props {
    hasErrors: boolean;
}

const AuthButtons: FC<Props> = ({ hasErrors }) => {
    const { sm } = useBreakpoint();
    const { pathname } = useLocation();
    const form = Form.useFormInstance();
    const { login, register } = useAuth();

    const buttonText = pathname === Paths.LOGIN ? 'Войти' : 'Регистрация';
    const dataTestId =
        pathname === Paths.LOGIN ? 'login-submit-button' : 'registration-submit-button';

    const onSubmit = () => {
        const values = form.getFieldsValue();
        if (pathname === Paths.REGISTRATION && !hasErrors) {
            register({ email: values.register_email, password: values.register_password });
        } else if (pathname === Paths.LOGIN && !hasErrors) {
            login({
                email: values.login_email,
                password: values.login_password,
                remember_me: values.remember_me,
            });
        }
    };

    return (
        <div className={styles.buttons}>
            <Button type='primary' htmlType='submit' data-test-id={dataTestId} onClick={onSubmit}>
                {buttonText}
            </Button>
            <Button icon={sm && <GooglePlusOutlined />}>{buttonText} через Google</Button>
        </div>
    );
};

export default AuthButtons;
