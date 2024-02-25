import { FC, useEffect, useState } from 'react';
import VerificationInput from 'react-verification-input';
import { useConfirmEmailMutation } from '@redux/api/password-recovery.api.ts';
import { useNavigate } from 'react-router-dom';
import { Paths } from '@shared/constants.ts';

import styles from './AuthStatusCard.module.scss';
import cn from 'classnames';

interface Props {
    email?: string;
}

const VerificationBlock: FC<Props> = ({ email }) => {
    const [code, setCode] = useState('');
    const [mutate, { isError, isSuccess }] = useConfirmEmailMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            navigate(Paths.CHANGE_PASSWORD, { replace: true, state: { allowAccess: true } });
        }

        if (isError) {
            setCode('');
        }
    }, [isError, isSuccess, navigate]);

    const handleComplete = (code: string) => {
        if (email && code) {
            mutate({ code, email });
        }
    };

    return (
        <div className={styles.verification}>
            <VerificationInput
                placeholder=''
                autoFocus
                onComplete={handleComplete}
                data-test-id='verification-input'
                value={code}
                onChange={(code) => setCode(code)}
                classNames={{
                    container: styles.verification_container,
                    character: cn(styles.verification_character, isError && styles.error),
                    characterInactive: styles.verification_character_inactive,
                    characterFilled: styles.verification_character_filled,
                }}
            />

            <span className={styles.verification_text}>
                Не пришло письмо? Проверьте папку Спам.
            </span>
        </div>
    );
};

export default VerificationBlock;
