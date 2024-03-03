import { FC, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useCheckAuth } from '@hooks/useCheckAuth.ts';
import PageLayout from '@components/layout/PageLayout/PageLayout.tsx';
import { Paths } from '@shared/constants.ts';
import { saveTokenToStorage } from '@redux/api/helpers/helper.ts';

export const AuthProvider: FC = () => {
    const isAuthorized = useCheckAuth();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const token = searchParams.get('accessToken');
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthorized && !token && location.pathname !== Paths.LOGIN) {
            navigate(Paths.LOGIN);
        } else if (isAuthorized && location.pathname === '/') {
            navigate(Paths.HOME);
        }

        if (token) {
            saveTokenToStorage(token);
            navigate(Paths.HOME);
        }
    }, [location.pathname, navigate, isAuthorized, token]);

    return !isAuthorized ? null : <PageLayout />;
};

export default AuthProvider;
