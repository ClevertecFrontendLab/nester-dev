import { useLoginMutation, useRegisterMutation } from '@redux/api/api.ts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paths } from '@shared/constants.ts';
import { isErrorWithStatus } from '@utils/index.ts';
import { setShowLoader } from '@redux/mainStore.ts';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks.ts';

export const useAuth = () => {
    const [register, registerData] = useRegisterMutation();
    const [login, loginData] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (loginData.isSuccess) {
            navigate(Paths.HOME, { replace: true });
        }

        if (registerData.isSuccess) {
            navigate(`${Paths.AUTH_RESULT}/success`, {
                replace: true,
                state: { allowAccess: true },
            });
        }
    }, [loginData.isSuccess, registerData.isSuccess, navigate]);

    useEffect(() => {
        if (loginData.isError) {
            navigate(`${Paths.AUTH_RESULT}/error-login`, {
                replace: true,
                state: { allowAccess: true },
            });
            dispatch(setShowLoader(false));
        }

        if (registerData.isError && isErrorWithStatus(registerData.error)) {
            if (registerData.error?.status === 409) {
                navigate(`${Paths.AUTH_RESULT}/error-user-exist`, {
                    replace: true,
                    state: { allowAccess: true },
                });
            } else {
                navigate(`${Paths.AUTH_RESULT}/error`, {
                    replace: true,
                    state: {
                        allowAccess: true,
                        email: registerData.originalArgs?.email,
                        password: registerData.originalArgs?.password,
                    },
                });
            }
        }
    }, [loginData.isError, registerData.isError, registerData.error, navigate]);

    return {
        register,
        login,
    };
};
