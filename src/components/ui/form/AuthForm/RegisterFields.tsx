import { FC } from 'react';
import { Form, Input } from 'antd';

const RegisterFields: FC = () => {
    return (
        <>
            <Form.Item label='e-mail' labelCol={{ span: 5 }} colon>
                <Input />
            </Form.Item>

            <Form.Item
                extra='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                className='remove-margin'
            >
                <Input.Password placeholder='Пароль' />
            </Form.Item>

            <Form.Item>
                <Input.Password placeholder='Повторите пароль' />
            </Form.Item>
        </>
    );
};

export default RegisterFields;
