import { FC } from 'react';
import { Tabs } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import LoginFields from '@components/ui/form/AuthForm/LoginFields.tsx';
import RegisterFields from '@components/ui/form/AuthForm/RegisterFields.tsx';
import { Paths } from '@shared/constants.ts';

const AuthFormTabs: FC = () => {
    const { pathname } = useLocation();

    return (
        <Tabs
            defaultActiveKey={pathname}
            centered
            tabBarGutter={0}
            size='middle'
            items={[
                {
                    label: <Link to={Paths.LOGIN}>Вход</Link>,
                    key: Paths.LOGIN,
                    children: <LoginFields />,
                },
                {
                    label: <Link to={Paths.REGISTRATION}>Регистрация</Link>,
                    key: Paths.REGISTRATION,
                    children: <RegisterFields />,
                },
            ]}
        />
    );
};

export default AuthFormTabs;
