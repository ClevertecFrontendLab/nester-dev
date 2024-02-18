import { FC } from 'react';
import { Checkbox, Form, Input, Row, Tabs } from 'antd';
import { ReactComponent as Logo } from '@assets/icons/Logo-full.svg';

import styles from './LoginForm.module.scss';
import { Link } from 'react-router-dom';
import LoginButtons from '@components/ui/form/LoginForm/LoginButtons.tsx';

const LoginForm: FC = () => (
    <div className={styles.wrapper}>
        <Logo className={styles.logo} />

        <Form size='large'>
            <Tabs
                defaultActiveKey='1'
                centered
                tabBarGutter={0}
                size='middle'
                items={[
                    {
                        label: 'Вход',
                        key: '1',
                    },
                    {
                        label: 'Регистрация',
                        key: '2',
                    },
                ]}
            />
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

            <LoginButtons />
        </Form>
    </div>
);

export default LoginForm;
