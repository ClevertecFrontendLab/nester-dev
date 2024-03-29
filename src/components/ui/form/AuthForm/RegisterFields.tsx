import { FC } from 'react';
import { Form, Input } from 'antd';
import InputEmailPrefix from '@components/ui/form/AuthForm/InputEmailPrefix.tsx';
import SetPasswordInputs from '@components/ui/form/AuthForm/SetPasswordInputs.tsx';

const RegisterFields: FC = () => (
    <>
        <Form.Item
            name='register_email'
            rules={[{ required: true, message: '', type: 'email' }]}
            data-test-id='registration-email'
        >
            <Input addonBefore={<InputEmailPrefix />} autoComplete='off' />
        </Form.Item>

        <SetPasswordInputs />
    </>
);

export default RegisterFields;
