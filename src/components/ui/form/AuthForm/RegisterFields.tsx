import { FC } from 'react';
import { Form, Input } from 'antd';
import InputEmailPrefix from '@components/ui/form/AuthForm/InputEmailPrefix.tsx';

const RegisterFields: FC = () => {
    return (
        <>
            <Form.Item
                name='register-email'
                rules={[{ required: true, message: '', type: 'email' }]}
            >
                <Input addonBefore={<InputEmailPrefix />} />
            </Form.Item>

            <Form.Item
                name='register-password'
                help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input.Password placeholder='Пароль' />
            </Form.Item>

            <Form.Item
                name='register-confirm'
                dependencies={['register-password']}
                rules={[
                    {
                        required: true,
                        message: 'Пароли не совпадают',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('register-password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Пароли не совпадают'));
                        },
                    }),
                ]}
            >
                <Input.Password placeholder='Повторите пароль' />
            </Form.Item>
        </>
    );
};

export default RegisterFields;
