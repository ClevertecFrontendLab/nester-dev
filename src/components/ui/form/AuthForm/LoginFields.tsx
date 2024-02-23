import { FC } from 'react';
import { Button, Checkbox, Form, Input, Row } from 'antd';
import InputEmailPrefix from '@components/ui/form/AuthForm/InputEmailPrefix.tsx';

import styles from './AuthForm.module.scss';

const LoginFields: FC = () => {
    const form = Form.useFormInstance();
    const isForgotPasswordDisabled = !form.isFieldValidating('login_email');

    return (
        <>
            <Form.Item name='login_email' rules={[{ required: true, message: '', type: 'email' }]}>
                <Input addonBefore={<InputEmailPrefix />} />
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
                <Input.Password placeholder='Пароль' />
            </Form.Item>

            <Row justify='space-between' align='middle' className={styles.check}>
                <Form.Item name='remember_me' valuePropName='checked'>
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <Button type='text' to='/' size='small' disabled={isForgotPasswordDisabled}>
                    Забыли пароль?
                </Button>
            </Row>
        </>
    );
};

export default LoginFields;
