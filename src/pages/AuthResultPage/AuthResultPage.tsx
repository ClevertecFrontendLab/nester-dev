import { FC, useEffect } from 'react';
import AuthStatusCard from '@components/ui/AuthStatusCard/AuthStatusCard.tsx';
import { AuthStatuses } from '@shared/types.ts';
import { Paths } from '@shared/constants.ts';
import { useLocation, useNavigate } from 'react-router-dom';

interface LocationState {
    pathname: AuthStatuses;
    state: { allowAccess?: boolean; email?: string; password?: string; confirmPassword?: string };
}

const AuthResultPage: FC = () => {
    const { pathname, state } = useLocation() as LocationState;
    const navigate = useNavigate();

    useEffect(() => {
        if (!state || !state?.allowAccess) {
            navigate(Paths.LOGIN, { replace: true, state: { allowAccess: false } });
        }
    }, [state, navigate]);

    return (
        <>
            <AuthStatusCard
                status={pathname}
                email={state?.email}
                password={state?.password}
                confirmPassword={state?.confirmPassword}
            />
        </>
    );
};

export default AuthResultPage;
