import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckEmailMutation } from '@redux/api/password-recovery.api.ts';
import { Paths } from '@shared/constants.ts';
import { isErrorWithStatus } from '@utils/index.ts';

export const useCheckEmail = () => {
    const [checkEmailMutation, checkEmail] = useCheckEmailMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (checkEmail.isError && isErrorWithStatus(checkEmail.error)) {
            if (checkEmail.error?.status === 404) {
                navigate(`${Paths.AUTH_RESULT}/error-check-email-no-exist`, {
                    replace: true,
                    state: { allowAccess: true },
                });
            } else {
                navigate(`${Paths.AUTH_RESULT}/error-check-email`, {
                    replace: true,
                    state: {
                        allowAccess: true,
                        email: checkEmail.originalArgs?.email,
                    },
                });
            }
        }
    }, [checkEmail.isError, checkEmail.originalArgs, checkEmail.error, navigate]);

    useEffect(() => {
        if (checkEmail.isSuccess) {
            navigate(Paths.CONFIRM_EMAIL, {
                replace: true,
                state: { allowAccess: true, email: checkEmail?.originalArgs?.email },
            });
        }
    }, [checkEmail.isSuccess, checkEmail.originalArgs, navigate]);

    return {
        checkEmailMutation,
    };
};
