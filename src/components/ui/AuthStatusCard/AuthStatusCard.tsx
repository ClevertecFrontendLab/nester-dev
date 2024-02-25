import { FC, useEffect } from 'react';
import { Button, Form } from 'antd';
import { getCardDataViaStatus } from '@components/ui/AuthStatusCard/helper.tsx';
import { useNavigate } from 'react-router-dom';
import { AuthStatuses } from '@shared/types.ts';
import VerificationBlock from '@components/ui/AuthStatusCard/VerificationBlock.tsx';
import SetPasswordInputs from '@components/ui/form/AuthForm/SetPasswordInputs.tsx';
import cn from 'classnames';

import styles from './AuthStatusCard.module.scss';
import formStyles from '../form/AuthForm/AuthForm.module.scss';
import { IPasswordReset } from '@components/ui/form/AuthForm/types.ts';
import { useChangePassword } from '@hooks/useChangePassword.ts';

interface Props {
    status: AuthStatuses;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

const AuthStatusCard: FC<Props> = ({ status, email, password, confirmPassword }) => {
    const { mutate } = useChangePassword();
    const { icon, title, description, button_navigate, buttonText } = getCardDataViaStatus(
        status,
        email,
    );
    const navigate = useNavigate();
    const isButtonFullWidth = ![
        AuthStatuses.ERROR_CHECK_EMAIL_NO_EXIST,
        AuthStatuses.EMAIL_CHANGE_ERROR,
    ].includes(status);

    const iconFull = status === AuthStatuses.EMAIL_CHANGE_ERROR;

    useEffect(() => {
        if (password && confirmPassword) {
            mutate({ password, confirmPassword });
        }
    }, [password, confirmPassword, mutate]);

    const handleNavigate = () => {
        if (button_navigate) {
            navigate(button_navigate, { replace: true });
        }
    };

    const handleFormFinish = (values: IPasswordReset) => {
        mutate({ password: values.register_password, confirmPassword: values.register_confirm });
    };

    const getCardActionViaStatus = () => {
        switch (status) {
            case AuthStatuses.CONFIRM_EMAIL:
                return <VerificationBlock email={email} />;

            case AuthStatuses.PASSWORD_CHANGE:
                return (
                    <div className={cn(formStyles.wrapper, styles.boxShadow_unset)}>
                        <Form size='large' onFinish={handleFormFinish}>
                            <SetPasswordInputs />
                            <Button type='primary' size='large' block htmlType='submit'>
                                {buttonText}
                            </Button>
                        </Form>
                    </div>
                );

            default:
                return (
                    <Button
                        type='primary'
                        size='large'
                        block={isButtonFullWidth}
                        onClick={handleNavigate}
                    >
                        {buttonText}
                    </Button>
                );
        }
    };

    return (
        <div className={styles.wrapper}>
            {icon && <div className={cn(styles.icon, iconFull && styles.icon_full)}>{icon}</div>}
            <div className={styles.info}>
                {title && <h3 className={styles.title}>{title}</h3>}
                {description && <p className={styles.description}>{description}</p>}
            </div>

            {getCardActionViaStatus()}
        </div>
    );
};

export default AuthStatusCard;
