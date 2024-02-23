import { FC, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '@shared/constants.ts';
import { useCheckAuth } from '@hooks/useCheckAuth.ts';

const AuthProvider: FC = () => {
    const isAuthorized = useCheckAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthorized && location.pathname !== Paths.LOGIN) {
            navigate(Paths.LOGIN);
        }
    }, [location.pathname, navigate, isAuthorized]);

    return !isAuthorized ? null : <Outlet />;
};

export default AuthProvider;
