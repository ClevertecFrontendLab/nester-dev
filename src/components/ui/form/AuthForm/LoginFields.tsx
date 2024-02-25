import { FC } from 'react';
import { Button, Checkbox, Form, Input, Row } from 'antd';
import InputEmailPrefix from '@components/ui/form/AuthForm/InputEmailPrefix.tsx';

import styles from './AuthForm.module.scss';
import { useCheckEmail } from '@hooks/useCheckEmail.ts';

const LoginFields: FC = () => {
    const form = Form.useFormInstance();
    const isForgotPasswordDisabled =
        !form.isFieldTouched('login_email') || !!form.getFieldError('login_email').length;
    const { checkEmailMutation } = useCheckEmail();

    const handleClick = () => {
        const email = form.getFieldValue('login_email');

        checkEmailMutation({ email });
    };

    return (
        <>
            <Form.Item name='login_email' rules={[{ required: true, message: '', type: 'email' }]}>
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
                        required: true,
                        message: '',
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
                    disabled={isForgotPasswordDisabled}
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
