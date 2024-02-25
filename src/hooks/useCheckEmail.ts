import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckEmailMutation } from '@redux/api/password-recovery.api.ts';
import { isErrorWithMessage } from '@utils/index.ts';
import { EMAIL_NOT_EXIST, Paths } from '@shared/constants.ts';

export const useCheckEmail = () => {
    const [checkEmailMutation, checkEmail] = useCheckEmailMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (checkEmail.isError && isErrorWithMessage(checkEmail.error)) {
            if (
                checkEmail.error.data.statusCode === 404 &&
                checkEmail.error.data.message === EMAIL_NOT_EXIST
            ) {
                navigate(`${Paths.AUTH_RESULT}/error-check-email-no-exist`, {
                    replace: true,
                    state: { allowAccess: true },
                });
            } else {
                navigate(`${Paths.AUTH_RESULT}/error-check-email`, {
                    replace: true,
                    state: { allowAccess: true },
                });
            }
        }
    }, [checkEmail.isError, checkEmail.error, navigate]);

    useEffect(() => {
        if (checkEmail.isSuccess) {
            navigate(Paths.CONFIRM_EMAIL, {
                replace: true,
                state: { allowAccess: true, email: checkEmail.data.email },
            });
        }
    }, [checkEmail.isSuccess, navigate]);

    return {
        checkEmailMutation,
    };
};
