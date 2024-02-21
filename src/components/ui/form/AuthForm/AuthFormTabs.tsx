import { FC } from 'react';
import { Tabs } from 'antd';
import LoginFields from '@components/ui/form/AuthForm/LoginFields.tsx';
import RegisterFields from '@components/ui/form/AuthForm/RegisterFields.tsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '@shared/constants.ts';

const AuthFormTabs: FC = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const onChange = (activeKey: string) => {
        console.log(activeKey);
        if (activeKey === Paths.LOGIN) {
            navigate(Paths.LOGIN);
        } else if (activeKey === Paths.REGISTRATION) {
            navigate(Paths.REGISTRATION);
        }
    };

    return (
        <Tabs
            defaultActiveKey={pathname}
            centered
            tabBarGutter={0}
            size='middle'
            onChange={onChange}
            items={[
                {
                    label: 'Вход',
                    key: Paths.LOGIN,
                    children: <LoginFields />,
                },
                {
                    label: 'Регистрация',
                    key: Paths.REGISTRATION,
                    children: <RegisterFields />,
                },
            ]}
        />
    );
};

export default AuthFormTabs;
