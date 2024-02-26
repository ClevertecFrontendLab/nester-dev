import { FC, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Row } from 'antd';
import InputEmailPrefix from '@components/ui/form/AuthForm/InputEmailPrefix.tsx';

import styles from './AuthForm.module.scss';
import { useCheckEmail } from '@hooks/useCheckEmail.ts';
import { useLocation } from 'react-router-dom';
import { PASSWORD_VALIDATION_PATTERN, Paths } from '@shared/constants.ts';

const LoginFields: FC = () => {
    const location = useLocation();
    const form = Form.useFormInstance();
    const { checkEmailMutation } = useCheckEmail();

    useEffect(() => {
        if (location.pathname === Paths.LOGIN && location.state?.email) {
            checkEmailMutation({ email: location.state?.email });
        }
    }, [location, checkEmailMutation]);

    const handleClick = () => {
        const isForgotButtonDisabled =
            !form.getFieldValue('login_email') || !!form.getFieldError('login_email').length;

        if (!isForgotButtonDisabled) {
            const email = form.getFieldValue('login_email');
            checkEmailMutation({ email });
        }
    };

    return (
        <>
            <Form.Item
                name='login_email'
                rules={[
                    {
                        required: location.pathname === Paths.LOGIN,
                        message: '',
                        type: 'email',
                    },
                ]}
            >
                <Input
                    autoComplete='off'
                    placeholder='E-mail'
                    addonBefore={<InputEmailPrefix />}
                    data-test-id='login-email'
                />
            </Form.Item>
            <Form.Item
                name='login_password'
                rules={[
                    {
                        required: location.pathname === Paths.LOGIN,
                        message: '',
                        validator(_, value) {
                            if (!PASSWORD_VALIDATION_PATTERN.test(value)) {
                                return Promise.reject();
                            }
                            return Promise.resolve();
                        },
                    },
                ]}
            >
                <Input.Password placeholder='Пароль' data-test-id='login-password' />
            </Form.Item>

            <Row justify='space-between' align='middle' className={styles.check}>
                <Form.Item name='remember_me' valuePropName='checked'>
                    <Checkbox data-test-id='login-remember'>Запомнить меня</Checkbox>
                </Form.Item>

                <Button
                    type='text'
                    size='small'
                    onClick={handleClick}
                    data-test-id='login-forgot-button'
                >
                    Забыли пароль?
                </Button>
            </Row>
        </>
    );
};

export default LoginFields;
