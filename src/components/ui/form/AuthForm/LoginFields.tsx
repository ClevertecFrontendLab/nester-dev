import { FC } from 'react';
import { Checkbox, Form, Input, Row } from 'antd';
import { Link } from 'react-router-dom';

import styles from './AuthForm.module.scss';

const LoginFields: FC = () => {
    return (
        <>
            <Form.Item label='e-mail' labelCol={{ span: 5 }} colon>
                <Input />
            </Form.Item>
            <Form.Item>
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
