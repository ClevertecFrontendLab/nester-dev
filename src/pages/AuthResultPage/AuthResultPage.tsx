import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '@shared/constants.ts';
import AuthStatusCard from '@components/ui/AuthStatusCard/AuthStatusCard.tsx';
import { AuthStatuses } from '@shared/types.ts';

interface LocationState {
    pathname: AuthStatuses;
    state: { allowAccess?: boolean };
}

const AuthResultPage: FC = () => {
    const { pathname, state } = useLocation() as LocationState;
    const navigate = useNavigate();

    useEffect(() => {
        if (!state || !state?.allowAccess) {
            navigate(Paths.LOGIN, { replace: true });
        }
    }, [state, navigate]);

    return (
        <div>
            <AuthStatusCard status={pathname} />
        </div>
    );
};

export default AuthResultPage;
