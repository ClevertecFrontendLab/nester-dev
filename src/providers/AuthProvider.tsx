import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '@shared/constants.ts';
import { useCheckAuth } from '@hooks/useCheckAuth.ts';
import PageLayout from '@components/layout/PageLayout/PageLayout.tsx';

export const AuthProvider: FC = () => {
    const isAuthorized = useCheckAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthorized && location.pathname !== Paths.LOGIN) {
            navigate(Paths.LOGIN);
        } else if (isAuthorized && location.pathname === '/') {
            navigate(Paths.HOME);
        }
    }, [location.pathname, navigate, isAuthorized]);

    return !isAuthorized ? null : <PageLayout />;
};

export default AuthProvider;
