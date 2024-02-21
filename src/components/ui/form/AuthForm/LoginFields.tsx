import { FC } from 'react';
import { Checkbox, Form, Input, Row } from 'antd';
import { Link } from 'react-router-dom';
import InputEmailPrefix from '@components/ui/form/AuthForm/InputEmailPrefix.tsx';

import styles from './AuthForm.module.scss';

const LoginFields: FC = () => {
    return (
        <>
            <Form.Item name='login-email' rules={[{ required: true, message: '', type: 'email' }]}>
                <Input addonBefore={<InputEmailPrefix />} />
            </Form.Item>
            <Form.Item
                name='login-password'
                rules={[
                    {
                        required: true,
                        message: '',
                    },
                ]}
            >
                <Input.Password placeholder='Пароль' />
            </Form.Item>

            <Row justify='space-between' className={styles.check}>
                <Checkbox>Запомнить меня</Checkbox>
                <Link to='/' className={styles.forgot}>
                    Забыли пароль?
                </Link>
            </Row>
        </>
    );
};

export default LoginFields;
