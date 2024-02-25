import { useChangePasswordMutation } from '@redux/api/password-recovery.api.ts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paths } from '@shared/constants.ts';

export const useChangePassword = () => {
    const [mutate, { isSuccess, isError, originalArgs }] = useChangePasswordMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            navigate(Paths.CHANGE_PASSWORD_SUCCESS, {
                replace: true,
                state: { allowAccess: true },
            });
        }

        if (isError) {
            navigate(Paths.CHANGE_PASSWORD_ERROR, {
                replace: true,
                state: {
                    allowAccess: true,
                    password: originalArgs?.password,
                    confirmPassword: originalArgs?.confirmPassword,
                },
            });
        }
    }, [isSuccess, isError, originalArgs, navigate]);

    return {
        mutate,
    };
};
