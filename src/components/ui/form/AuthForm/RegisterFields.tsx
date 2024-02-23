import { FC } from 'react';
import { Form, Input } from 'antd';
import InputEmailPrefix from '@components/ui/form/AuthForm/InputEmailPrefix.tsx';
import { PASSWORD_VALIDATION_PATTERN } from '@shared/constants.ts';

const RegisterFields: FC = () => (
    <>
        <Form.Item name='register_email' rules={[{ required: true, message: '', type: 'email' }]}>
            <Input addonBefore={<InputEmailPrefix />} />
        </Form.Item>

        <Form.Item
            name='register_password'
            help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
            rules={[
                {
                    required: true,
                    validator(_, value) {
                        if (!PASSWORD_VALIDATION_PATTERN.test(value)) {
                            return Promise.reject(
                                new Error(
                                    'Пароль не менее 8 символов, с заглавной буквой и цифрой',
                                ),
                            );
                        }
                        return Promise.resolve();
                    },
                },
            ]}
        >
            <Input.Password placeholder='Пароль' />
        </Form.Item>

        <Form.Item
            name='register_confirm'
            dependencies={['register_password']}
            rules={[
                {
                    required: true,
                    message: 'Пароли не совпадают',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('register_password') === value) {
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

export default RegisterFields;
